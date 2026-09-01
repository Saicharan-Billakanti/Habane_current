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
     * POST /api/v1/checkout — creates order + Stripe session
     * @param {CheckoutInputBody} input  (OrderInputBody + success_url + cancel_url)
     * @returns Promise<CheckoutSessionResult>  { checkout_url, order_number, totals… }
     */
    createCheckout: function (input) {
      return apiCall('POST', '/checkout', { body: input });
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

    // ── Store settings ────────────────────────────

    /**
     * GET /api/v1/store
     * @returns Promise<PublicStoreSettings>
     */
    getStoreSettings: function () {
      return apiCall('GET', '/store');
    },

    // ── Health ────────────────────────────────────

    /**
     * GET /api/v1/health
     * @returns Promise<HealthResult>
     */
    getHealth: function () {
      return apiCall('GET', '/health');
    }
  };

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
    },

    /**
     * Remove an item by index.
     */
    remove: function (index) {
      var items = habaneCart.get();
      items.splice(index, 1);
      habaneCart._save(items);
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
     Auth — Supabase session (guest + logged-in)
     Uses the public anon key; never stores secrets.
  ───────────────────────────────────────────── */
  var SUPABASE_URL = 'https://vyjrrsnjvgyppcyfwnta.supabase.co';
  var SUPABASE_ANON_KEY = 'sb_publishable_cmP3t8zSpupGVFyDOt2bvw_t4He4WCP';
  var SESSION_KEY = 'habane_session';

  var habaneAuth = {

    /** Returns stored session or null */
    getSession: function () {
      try {
        return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
      } catch (e) { return null; }
    },

    /** Returns currently logged-in user object or null */
    getUser: function () {
      var s = habaneAuth.getSession();
      return s ? s.user : null;
    },

    /** True if a user is logged in */
    isLoggedIn: function () {
      return !!habaneAuth.getUser();
    },

    /**
     * Sign up with email + password.
     * @returns Promise<{user, session}>
     */
    signUp: function (email, password) {
      return fetch(SUPABASE_URL + '/auth/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY
        },
        body: JSON.stringify({ email: email, password: password })
      })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.error) throw new Error(data.error.message || data.error);
        habaneAuth._saveSession(data);
        return data;
      });
    },

    /**
     * Sign in with email + password.
     * @returns Promise<{user, session}>
     */
    signIn: function (email, password) {
      return fetch(SUPABASE_URL + '/auth/v1/token?grant_type=password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY
        },
        body: JSON.stringify({ email: email, password: password })
      })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.error) throw new Error(data.error.message || data.error);
        habaneAuth._saveSession(data);
        return data;
      });
    },

    /** Sign out and clear session */
    signOut: function () {
      var s = habaneAuth.getSession();
      var token = s && s.access_token;
      localStorage.removeItem(SESSION_KEY);
      habaneAuth._notifyAuth();
      if (!token) return Promise.resolve();
      return fetch(SUPABASE_URL + '/auth/v1/logout', {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': 'Bearer ' + token
        }
      }).catch(function () {});
    },

    /** Save session to localStorage */
    _saveSession: function (data) {
      // Supabase returns { user, access_token, refresh_token, ... }
      // or { session: { user, access_token, ... } }
      var session = data.session || data;
      if (session && session.access_token) {
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
        habaneAuth._notifyAuth();
      }
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

  // Expose config values for other scripts
  global.HABANE_API_URL     = API_URL;
  global.HABANE_API_BASE    = API_BASE_URL;
  global.HABANE_API_VERSION = API_VERSION;

})(window);
