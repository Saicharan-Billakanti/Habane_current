/**
 * HABÄNE — Browser-native API Client v1
 *
 * Ported from the Ember Commerce TypeScript SDK (src/lib/api/sdk.ts).
 * Drop this file into your storefront — no bundler, no TypeScript required.
 *
 * Usage:
 *   <script src="assets/api.js"></script>
 *   const { items } = await window.habaneApi.getProducts({ category: "carry" });
 *
 * Config: set window.HABANE_CONFIG before this script loads, e.g.:
 *   <script>window.HABANE_CONFIG = { baseUrl: "https://your-backend.lovable.app" };</script>
 */

(function (global) {
  'use strict';

  /* ─────────────────────────────────────────────
     Config — derived from Ember Commerce config.ts
  ───────────────────────────────────────────── */
  var cfg = global.HABANE_CONFIG || {};
  var API_BASE_URL   = (cfg.baseUrl || 'https://ember-commerce-backend.vercel.app').replace(/\/+$/, '');
  var API_VERSION    = 'v1';
  var API_PREFIX     = '/api/v1';
  var API_URL        = API_BASE_URL + API_PREFIX;
  var IMAGE_BASE_URL = (cfg.imageBaseUrl || 'https://vyjrrsnjvgyppcyfwnta.supabase.co/storage/v1/object/public/product-images').replace(/\/+$/, '');

  /* ─────────────────────────────────────────────
     Helpers
  ───────────────────────────────────────────── */

  /**
   * Resolve a possibly-relative storage path to an absolute image URL.
   * Mirrors config.ts > imageUrl()
   */
  function imageUrl(path) {
    if (!path) return null;
    if (/^https?:\/\//i.test(path)) return path;
    return IMAGE_BASE_URL + '/' + path.replace(/^\/+/, '');
  }

  /** Format a price in EUR (e.g. 340 → "€340.00") */
  function formatPrice(amount, currency) {
    currency = currency || 'EUR';
    try {
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: currency }).format(amount);
    } catch (e) {
      return '€' + Number(amount).toFixed(2);
    }
  }

  /* ─────────────────────────────────────────────
     HabaneApiError — mirrors sdk.ts HabaneApiError
  ───────────────────────────────────────────── */
  function HabaneApiError(message, code, status, details) {
    this.message = message;
    this.code    = code;
    this.status  = status;
    this.details = details;
    this.name    = 'HabaneApiError';
  }
  HabaneApiError.prototype = Object.create(Error.prototype);
  HabaneApiError.prototype.constructor = HabaneApiError;

  /* ─────────────────────────────────────────────
     Core fetch wrapper
  ───────────────────────────────────────────── */
  function apiCall(method, path, opts) {
    opts = opts || {};
    var url = new URL(API_URL + path);

    // Append query params
    if (opts.query) {
      Object.keys(opts.query).forEach(function (key) {
        var v = opts.query[key];
        if (v !== undefined && v !== '' && v !== null) {
          url.searchParams.set(key, String(v));
        }
      });
    }

    var fetchOpts = {
      method: method,
      headers: { 'Accept': 'application/json' }
    };
    if (opts.body !== undefined) {
      fetchOpts.headers['Content-Type'] = 'application/json';
      fetchOpts.body = JSON.stringify(opts.body);
    }

    return fetch(url.toString(), fetchOpts)
      .then(function (res) {
        return res.json().then(function (payload) {
          if (!payload.success) {
            throw new HabaneApiError(
              payload.error.message,
              payload.error.code,
              res.status,
              payload.error.details
            );
          }
          return payload.data;
        });
      })
      .catch(function (err) {
        if (err instanceof HabaneApiError) throw err;
        throw new HabaneApiError(
          err.message || 'Network request failed',
          'network_error',
          0
        );
      });
  }

  /* ─────────────────────────────────────────────
     Public API — mirrors sdk.ts createHabaneClient
  ───────────────────────────────────────────── */
  var habaneApi = {

    // ── Products ──────────────────────────────────

    /**
     * GET /api/v1/products
     * @param {Object} params  { category, search, in_stock, limit, offset }
     * @returns Promise<{ items, total, limit, offset }>
     */
    getProducts: function (params) {
      return apiCall('GET', '/products', { query: params || {} });
    },

    /**
     * GET /api/v1/products/:slug
     * @param {string} slug
     * @returns Promise<PublicProduct>
     */
    getProduct: function (slug) {
      return apiCall('GET', '/products/' + encodeURIComponent(slug));
    },

    // ── Orders ────────────────────────────────────

    /**
     * POST /api/v1/orders  — pending order without payment
     * @param {OrderInputBody} input
     * @returns Promise<CreatedOrder>
     */
    createOrder: function (input) {
      return apiCall('POST', '/orders', { body: input });
    },

    /**
     * GET /api/v1/orders/:orderNumber?email=…
     * @param {string} orderNumber
     * @param {string} email
     * @returns Promise<PublicOrder>
     */
    getOrder: function (orderNumber, email) {
      return apiCall('GET', '/orders/' + encodeURIComponent(orderNumber), { query: { email: email } });
    },

    // ── Checkout ──────────────────────────────────

    /**
     * POST /api/v1/checkout — creates order + a payment session with the chosen gateway.
     * @param {CheckoutInputBody} input  (OrderInputBody + success_url + cancel_url +
     *   optional payment_provider: "stripe" | "razorpay" | "slice", default "stripe")
     * @returns Promise<CheckoutSessionResult>
     *   Stripe/Slice: { payment_provider, checkout_url, order_number, totals… } — redirect to checkout_url.
     *   Razorpay: { payment_provider: "razorpay", razorpay_order_id, razorpay_key_id, order_number, totals… }
     *   — pass these into habaneApi.openRazorpayCheckout() instead of redirecting.
     */
    createCheckout: function (input) {
      return apiCall('POST', '/checkout', { body: input });
    },

    /**
     * Loads the Razorpay Checkout widget (if not already loaded) and opens it.
     * Call this with the result of createCheckout() when payment_provider is "razorpay".
     * @param {{ razorpay_order_id, razorpay_key_id, order_number, total, currency }} session
     * @param {{ email?: string, name?: string, contact?: string }} prefill
     * @returns Promise<{ razorpay_payment_id, razorpay_order_id, razorpay_signature }>
     */
    openRazorpayCheckout: function (session, prefill) {
      function loadScript() {
        if (global.Razorpay) return Promise.resolve();
        return new Promise(function (resolve, reject) {
          var script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.onload = resolve;
          script.onerror = function () { reject(new Error('Failed to load Razorpay checkout script')); };
          document.head.appendChild(script);
        });
      }
      return loadScript().then(function () {
        return new Promise(function (resolve, reject) {
          var rzp = new global.Razorpay({
            key: session.razorpay_key_id,
            order_id: session.razorpay_order_id,
            amount: Math.round(session.total * 100),
            currency: session.currency || 'EUR',
            name: 'HABÄNE',
            description: 'Order ' + session.order_number,
            prefill: prefill || {},
            handler: function (response) { resolve(response); },
            modal: { ondismiss: function () { reject(new Error('Payment cancelled')); } },
          });
          rzp.open();
        });
      });
    },

    // ── Returns ───────────────────────────────────

    /**
     * POST /api/v1/returns
     * @param {{ order_number, email, type, reason }} input
     * @returns Promise<PublicReturn>
     */
    createReturn: function (input) {
      return apiCall('POST', '/returns', { body: input });
    },

    /**
     * GET /api/v1/returns/:id?email=…
     */
    getReturn: function (id, email) {
      return apiCall('GET', '/returns/' + encodeURIComponent(id), { query: { email: email } });
    },

    // ── Newsletter ────────────────────────────────

    /**
     * POST /api/v1/newsletter/subscribe
     * @param {{ email, consent_text?, source? }} input
     */
    subscribeNewsletter: function (input) {
      return apiCall('POST', '/newsletter/subscribe', { body: input });
    },

    /**
     * POST /api/v1/newsletter/unsubscribe
     * @param {{ token?, email? }} input
     */
    unsubscribeNewsletter: function (input) {
      return apiCall('POST', '/newsletter/unsubscribe', { body: input });
    },

    // ── Back in stock / Early access ──────────────

    /**
     * POST /api/v1/back-in-stock
     * @param {{ email, product_id, variant_id? }} input
     */
    registerBackInStock: function (input) {
      return apiCall('POST', '/back-in-stock', { body: input });
    },

    /**
     * POST /api/v1/early-access
     * @param {{ email, drop_id?, product_id?, source? }} input
     */
    registerEarlyAccess: function (input) {
      return apiCall('POST', '/early-access', { body: input });
    },

    // ── Contact ───────────────────────────────────

    /**
     * POST /api/v1/contact
     * @param {{ name, email, subject?, message }} input
     */
    submitContact: function (input) {
      return apiCall('POST', '/contact', { body: input });
    },

    // ── Discounts ─────────────────────────────────

    /**
     * POST /api/v1/discounts/validate
     * @param {string} code
     * @param {number} subtotal
     * @returns Promise<DiscountValidation>  { valid, code, type?, value?, discount_amount?, reason? }
     */
    validateDiscount: function (code, subtotal) {
      return apiCall('POST', '/discounts/validate', { body: { code: code, subtotal: subtotal } });
    },

    /**
     * GET /api/v1/promotions — currently-active site promotions, for display.
     * @returns Promise<{ promotions: Array }>
     */
    getPromotions: function () {
      return apiCall('GET', '/promotions');
    },

    // ── Store settings ────────────────────────────

    /**
     * GET /api/v1/store
     * @returns Promise<PublicStoreSettings>
     */
    getStoreSettings: function () {
      return apiCall('GET', '/store');
    },

    // ── Content (announcements, FAQ, navigation) ───

    /**
     * GET /api/v1/announcements
     * @returns Promise<{ announcements: Array<{id, message, link_text, link_url, background_color, text_color, position}> }>
     */
    getAnnouncements: function () {
      return apiCall('GET', '/announcements');
    },

    /**
     * GET /api/v1/faq
     * @returns Promise<{ items: Array<{id, question, answer, category, position}> }>
     */
    getFaqItems: function () {
      return apiCall('GET', '/faq');
    },

    /**
     * GET /api/v1/navigation/:location
     * @param {string} location  e.g. "header", "footer"
     * @returns Promise<{ location, items: Array }>
     */
    getNavigation: function (location) {
      return apiCall('GET', '/navigation/' + encodeURIComponent(location));
    },

    // ── Health ────────────────────────────────────

    /**
     * GET /api/v1/health
     * @returns Promise<HealthResult>
     */
    getHealth: function () {
      return apiCall('GET', '/health');
    },

    // ── Reviews ───────────────────────────────────

    /**
     * GET /api/v1/reviews?product_id=…
     * @param {{ product_id?: string, limit?: number, offset?: number }} [params]
     * @returns Promise<{ reviews: Array, total: number }>
     */
    getReviews: function (params) {
      return apiCall('GET', '/reviews', { query: params || {} });
    },

    /**
     * GET /api/v1/reviews/stats?product_id=…  (omit product_id for site-wide)
     * @returns Promise<{ average, count, photos_count, distribution, happy_customers_count? }>
     */
    getReviewStats: function (productId) {
      return apiCall('GET', '/reviews/stats', { query: productId ? { product_id: productId } : {} });
    },

    /**
     * POST /api/v1/reviews
     * @param {{ product_id, customer_name, customer_email, rating, title?, body, order_id? }} input
     */
    submitReview: function (input) {
      return apiCall('POST', '/reviews', { body: input });
    },

    /**
     * POST /api/v1/reviews/photos — uploads one customer review photo.
     * Multipart, so it bypasses the JSON apiCall() helper.
     * @param {File} file
     * @returns Promise<{ url: string }>
     */
    uploadReviewPhoto: function (file) {
      var fd = new FormData();
      fd.append('file', file);
      return fetch(API_URL + '/reviews/photos', { method: 'POST', body: fd })
        .then(function (res) {
          return res.json().then(function (payload) {
            if (!payload.success) {
              throw new HabaneApiError(payload.error.message, payload.error.code, res.status, payload.error.details);
            }
            return payload.data;
          });
        });
    },

    // ── Cart/checkout tracking (drives the admin Abandoned Carts page) ──

    /**
     * POST /api/v1/track/cart — fire-and-forget; failures never block the UI.
     * @param {'add_to_cart'|'remove_from_cart'|'checkout_started'|'checkout_completed'} eventType
     * @param {Object} [extra]  { product_id, product_name, quantity, unit_price, cart_total, cart_items, checkout_stage }
     */
    trackCart: function (eventType, extra) {
      var user = (global.habaneAuth && global.habaneAuth.getUser()) || null;
      var payload = Object.assign({
        session_id: habaneSession.id(),
        event_type: eventType,
        customer_email: user ? user.email : undefined
      }, extra || {});
      return apiCall('POST', '/track/cart', { body: payload }).catch(function () {});
    },

    // ── Wishlist (requires a signed-in customer email) ───────────────

    /**
     * GET /api/v1/wishlist?customer_email=…
     * @returns Promise<{ items: Array<{id, product_id, product_name, variant_id, created_at}> }>
     */
    getWishlist: function (customerEmail) {
      return apiCall('GET', '/wishlist', { query: { customer_email: customerEmail } });
    },

    /**
     * POST /api/v1/wishlist
     * @param {{ customer_email, product_id, product_name, variant_id? }} input
     * @returns Promise<WishlistRow>
     */
    addWishlist: function (input) {
      return apiCall('POST', '/wishlist', { body: input });
    },

    /**
     * DELETE /api/v1/wishlist/:id
     */
    removeWishlist: function (id) {
      return apiCall('DELETE', '/wishlist/' + encodeURIComponent(id));
    }
  };

  /* ─────────────────────────────────────────────
     Session id — a stable per-browser id so cart/checkout events can be
     grouped into one session for the admin Abandoned Carts page.
  ───────────────────────────────────────────── */
  var habaneSession = {
    id: function () {
      try {
        var existing = localStorage.getItem('habane_session_id');
        if (existing) return existing;
        var fresh = (global.crypto && global.crypto.randomUUID)
          ? global.crypto.randomUUID()
          : 'sess-' + Date.now() + '-' + Math.random().toString(16).slice(2);
        localStorage.setItem('habane_session_id', fresh);
        return fresh;
      } catch (e) {
        return 'sess-' + Date.now();
      }
    }
  };

  /* ─────────────────────────────────────────────
     UTM capture — last-touch attribution for the admin Campaigns page.
     If the current URL carries any utm_* param, it replaces whatever was
     stored before; otherwise the last-seen set (if any) is kept so it
     survives navigating on to another page and through to checkout.
  ───────────────────────────────────────────── */
  (function captureUtm() {
    try {
      var params = new URLSearchParams(location.search);
      var keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];
      var found = {};
      var any = false;
      keys.forEach(function (k) {
        var v = params.get(k);
        if (v) { found[k] = v; any = true; }
      });
      if (any) localStorage.setItem('habane_utm', JSON.stringify(found));
    } catch (e) {}
  })();

  function habaneUtm() {
    try {
      var raw = localStorage.getItem('habane_utm');
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  /* ─────────────────────────────────────────────
     Cart — localStorage-based guest cart
     Mirrors CartContext.tsx from examples/storefront
  ───────────────────────────────────────────── */
  var CART_KEY = 'habane_cart';

  var habaneCart = {

    /** Returns the current cart array */
    get: function () {
      try {
        var c = localStorage.getItem('habane_cart');
        var parsed = c ? JSON.parse(c) : [];
        if (!Array.isArray(parsed)) return [];
        // Auto-clear old carts that have fake IDs
        if (parsed.length > 0 && parsed[0].product_id && parsed[0].product_id.length < 30) {
          localStorage.removeItem('habane_cart');
          return [];
        }
        if (parsed.length > 0 && parsed[0].id && parsed[0].id.length < 30) {
          localStorage.removeItem('habane_cart');
          return [];
        }
        return parsed;
      } catch (e) { return []; }
    },

    /** Saves cart to localStorage */
    _save: function (items) {
      try {
        localStorage.setItem(CART_KEY, JSON.stringify(items));
      } catch (e) {}
      habaneCart._notify();
    },

    /**
     * Add an item to the cart.
     * @param {{ product_id, quantity, size?, color?, name, price, image }} item
     */
    add: function (item) {
      var items = habaneCart.get();
      var existing = items.find(function (i) {
        return i.product_id === item.product_id &&
               i.size  === item.size &&
               i.color === item.color;
      });
      if (existing) {
        existing.quantity = Math.min(20, (existing.quantity || 1) + (item.quantity || 1));
      } else {
        items.push({
          product_id: item.product_id,
          quantity:   item.quantity || 1,
          size:       item.size   || null,
          color:      item.color  || null,
          // display-only — server recalculates at checkout
          name:       item.name   || '',
          price:      item.price  || 0,
          image:      item.image  || null,
          slug:       item.slug   || null
        });
      }
      habaneCart._save(items);
      habaneApi.trackCart('add_to_cart', {
        product_id: item.product_id,
        product_name: item.name,
        quantity: item.quantity || 1,
        unit_price: item.price || 0,
        cart_total: habaneCart.subtotal(),
        cart_items: habaneCart.get()
      });
    },

    /**
     * Remove an item by index.
     */
    remove: function (index) {
      var items = habaneCart.get();
      var removed = items[index];
      items.splice(index, 1);
      habaneCart._save(items);
      if (removed) {
        habaneApi.trackCart('remove_from_cart', {
          product_id: removed.product_id,
          product_name: removed.name,
          cart_total: habaneCart.subtotal(),
          cart_items: habaneCart.get()
        });
      }
    },

    /**
     * Update quantity for an item by index.
     */
    setQty: function (index, qty) {
      var items = habaneCart.get();
      if (!items[index]) return;
      if (qty < 1) { habaneCart.remove(index); return; }
      items[index].quantity = Math.min(20, qty);
      habaneCart._save(items);
    },

    /** Clear the entire cart */
    clear: function () {
      habaneCart._save([]);
    },

    /** Total item count (sum of quantities) */
    count: function () {
      return habaneCart.get().reduce(function (s, i) { return s + (i.quantity || 1); }, 0);
    },

    /** Client-side subtotal (display only) */
    subtotal: function () {
      return habaneCart.get().reduce(function (s, i) { return s + (i.price * (i.quantity || 1)); }, 0);
    },

    /**
     * Convert cart to the API's CartItemInput[] format.
     * This is what you send to createCheckout / createOrder.
     */
    toApiItems: function () {
      return habaneCart.get().map(function (i) {
        return {
          product_id: i.product_id,
          quantity:   i.quantity || 1,
          size:       i.size  || undefined,
          color:      i.color || undefined
        };
      });
    },

    /** Listeners for cart state changes */
    _listeners: [],
    onChange: function (fn) { habaneCart._listeners.push(fn); },
    _notify: function () {
      habaneCart._listeners.forEach(function (fn) {
        try { fn(habaneCart.get()); } catch (e) {}
      });
    }
  };

  /* ─────────────────────────────────────────────
     Auth — Google / Email OTP / Phone OTP / guest
     Backed by the real Supabase JS SDK (loaded via CDN before this file),
     not raw fetch — the SDK handles token refresh, session persistence and
     the OAuth redirect/PKCE flow safely. Uses the public anon key only.
  ───────────────────────────────────────────── */
  var SUPABASE_URL = (cfg.supabaseUrl || 'https://vyjrrsnjvgyppcyfwnta.supabase.co').replace(/\/+$/, '');
  var SUPABASE_ANON_KEY = cfg.supabaseAnonKey || 'sb_publishable_cmP3t8zSpupGVFyDOt2bvw_t4He4WCP';

  var _sb = global.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
  });

  // Cached current user, kept in sync via onAuthStateChange so callers
  // (e.g. syncAuthUI()) can keep calling habaneAuth.getUser() synchronously.
  var _currentUser = null;
  _sb.auth.getSession().then(function (r) { _currentUser = (r.data.session && r.data.session.user) || null; habaneAuth._notifyAuth(); });
  _sb.auth.onAuthStateChange(function (_event, session) {
    _currentUser = (session && session.user) || null;
    habaneAuth._notifyAuth();
  });

  function authError(error) {
    if (!error) return null;
    throw new Error(error.message || String(error));
  }

  var habaneAuth = {

    /** Returns currently logged-in user object or null */
    getUser: function () {
      return _currentUser;
    },

    /** True if a user is logged in */
    isLoggedIn: function () {
      return !!_currentUser;
    },

    /** Redirect to Google's consent screen; returns to the current page on completion. */
    signInWithGoogle: function () {
      return _sb.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.href }
      }).then(function (r) { return authError(r.error); });
    },

    /** Sends a 6-digit OTP code to the given email. Auto-creates the account on first use. */
    sendEmailOtp: function (email) {
      return _sb.auth.signInWithOtp({ email: email }).then(function (r) { return authError(r.error); });
    },

    /** Verifies the emailed OTP code and completes sign-in. */
    verifyEmailOtp: function (email, token) {
      return _sb.auth.verifyOtp({ email: email, token: token, type: 'email' })
        .then(function (r) { authError(r.error); return r.data; });
    },

    /** Sends a 6-digit OTP code via SMS to the given E.164 phone number. */
    sendPhoneOtp: function (phone) {
      return _sb.auth.signInWithOtp({ phone: phone }).then(function (r) { return authError(r.error); });
    },

    /** Verifies the texted OTP code and completes sign-in. */
    verifyPhoneOtp: function (phone, token) {
      return _sb.auth.verifyOtp({ phone: phone, token: token, type: 'sms' })
        .then(function (r) { authError(r.error); return r.data; });
    },

    /** Sign out and clear session */
    signOut: function () {
      return _sb.auth.signOut().then(function (r) { return authError(r.error); });
    },

    _listeners: [],
    onAuthChange: function (fn) { habaneAuth._listeners.push(fn); },
    _notifyAuth: function () {
      var user = habaneAuth.getUser();
      habaneAuth._listeners.forEach(function (fn) {
        try { fn(user); } catch (e) {}
      });
    }
  };

  /* ─────────────────────────────────────────────
     Expose on window
  ───────────────────────────────────────────── */
  global.habaneApi    = habaneApi;
  global.habaneCart   = habaneCart;
  global.habaneAuth   = habaneAuth;
  global.HabaneApiError = HabaneApiError;

  // Convenience helpers
  global.habaneFormatPrice = formatPrice;
  global.habaneImageUrl    = imageUrl;
  global.habaneUtm         = habaneUtm;

  // Expose config values for other scripts
  global.HABANE_API_URL     = API_URL;
  global.HABANE_API_BASE    = API_BASE_URL;
  global.HABANE_API_VERSION = API_VERSION;

})(window);
