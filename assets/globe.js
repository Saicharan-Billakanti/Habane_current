/**
 * HABÄNE Footer Globe — real orthographic globe rendered from actual
 * country boundary data (d3-geo + topojson-client + world-atlas).
 */
(function () {
  const SIZE = 900;
  const SVGNS = 'http://www.w3.org/2000/svg';
  const BASE_ROTATE = [-125, -18, 0];
  // Presence points shown on the globe. `since` drives the "YEAR - NOW" line in
  // the hover/click badge — adjust per city as the real dates are confirmed.
  const MARKERS = [
    // Europe
    { name: 'Berlin, DE', coords: [13.4050, 52.5200], since: '2026' },
    { name: 'Dublin, IE', coords: [-6.2603, 53.3498], since: '2026' },
    { name: 'London, UK', coords: [-0.1276, 51.5072], since: '2026' },
    { name: 'Amsterdam, NL', coords: [4.9041, 52.3676], since: '2026' },
    { name: 'Zurich, CH', coords: [8.5417, 47.3769], since: '2026' },
    { name: 'Milan, IT', coords: [9.1900, 45.4642], since: '2026' },
    { name: 'Rome, IT', coords: [12.4964, 41.9028], since: '2026' },
    { name: 'Barcelona, ES', coords: [2.1734, 41.3851], since: '2026' },
    { name: 'Madrid, ES', coords: [-3.7038, 40.4168], since: '2026' },
    { name: 'Lisbon, PT', coords: [-9.1393, 38.7223], since: '2026' },
    { name: 'Belgrade, RS', coords: [20.4489, 44.7866], since: '2026' },
    { name: 'Athens, GR', coords: [23.7275, 37.9838], since: '2026' },
    // Middle East & Africa
    { name: 'Cairo, EG', coords: [31.2357, 30.0444], since: '2026' },
    { name: 'Jeddah, SA', coords: [39.1925, 21.4858], since: '2026' },
    // Asia
    { name: 'Mumbai, IN', coords: [72.8777, 19.0760], since: '2022' },
    // North & Central America
    { name: 'San Francisco, US', coords: [-122.4194, 37.7749], since: '2026' },
    { name: 'Miami, US', coords: [-80.1918, 25.7617], since: '2026' },
    { name: 'Tulum, MX', coords: [-87.4653, 20.2114], since: '2025' },
    // South America
    { name: 'Rio de Janeiro, BR', coords: [-43.1729, -22.9068], since: '2026' },
    { name: 'Sao Paulo, BR', coords: [-46.6333, -23.5505], since: '2026' },
    { name: 'Buenos Aires, AR', coords: [-58.3816, -34.6037], since: '2026' },
    { name: 'Santiago, CL', coords: [-70.6693, -33.4489], since: '2026' }
  ];

  function distance(a, b) {
    const toRad = Math.PI / 180;
    const l1 = a[0] * toRad, p1 = a[1] * toRad;
    const l2 = b[0] * toRad, p2 = b[1] * toRad;
    return Math.acos(Math.min(1, Math.max(-1,
      Math.sin(p1) * Math.sin(p2) + Math.cos(p1) * Math.cos(p2) * Math.cos(l1 - l2)
    )));
  }

  function initGlobe() {
    const svg = document.getElementById('footer-globe');
    if (!svg || typeof window.d3 === 'undefined' || typeof window.topojson === 'undefined' || typeof window.WORLD_ATLAS_110M === 'undefined') {
      setTimeout(initGlobe, 200);
      return;
    }

    const world = window.WORLD_ATLAS_110M;
    const land = window.topojson.merge(world, world.objects.countries.geometries);
    buildGlobe(svg, land);
  }

  function buildGlobe(svg, land) {
    const d3 = window.d3;
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const spinSpeed = reduceMotion ? 0 : 6; // degrees per second
    let spin = 0;
    let paused = false;
    let manualRotate = [0, 0];
    let hoveredMarker = null;

    svg.setAttribute('viewBox', `0 0 ${SIZE} ${SIZE}`);
    svg.classList.add('footer-globe__svg');

    const oceanPath = document.createElementNS(SVGNS, 'path');
    oceanPath.setAttribute('class', 'footer-globe__ocean');
    svg.appendChild(oceanPath);

    const graticulePath = document.createElementNS(SVGNS, 'path');
    graticulePath.setAttribute('class', 'footer-globe__graticule');
    svg.appendChild(graticulePath);

    const landPath = document.createElementNS(SVGNS, 'path');
    landPath.setAttribute('class', 'footer-globe__land');
    svg.appendChild(landPath);

    function formatCoord(lon, lat) {
      const latDir = lat >= 0 ? 'N' : 'S';
      const lonDir = lon >= 0 ? 'E' : 'W';
      return `${Math.abs(lat).toFixed(4)}° ${latDir}, ${Math.abs(lon).toFixed(4)}° ${lonDir}`;
    }

    const badge = document.createElement('div');
    badge.className = 'footer-globe__badge';
    badge.innerHTML = '<span class="footer-globe__badge-dot" aria-hidden="true"></span><b class="footer-globe__badge-title"></b><span class="footer-globe__badge-sub"></span>';
    svg.parentElement.appendChild(badge);
    const badgeTitle = badge.querySelector('.footer-globe__badge-title');
    const badgeSub = badge.querySelector('.footer-globe__badge-sub');
    function positionBadge(p) {
      badge.style.left = `${(p[0] / SIZE) * 100}%`;
      badge.style.top = `${(p[1] / SIZE) * 100}%`;
    }

    const MARKER_SIZE = 16;
    const markerGroup = document.createElementNS(SVGNS, 'g');
    svg.appendChild(markerGroup);
    let selectedMarker = null;
    function clearSelection() {
      if (!selectedMarker) return;
      selectedMarker = null;
      paused = false;
      markerEls.forEach(({ el }) => el.classList.remove('is-selected'));
      badge.classList.remove('is-visible');
    }
    const markerEls = MARKERS.map((m) => {
      const el = document.createElementNS(SVGNS, 'rect');
      el.setAttribute('class', 'footer-globe__marker');
      el.setAttribute('width', MARKER_SIZE);
      el.setAttribute('height', MARKER_SIZE);
      el.setAttribute('rx', 3);
      const coordText = formatCoord(m.coords[0], m.coords[1]);
      el.setAttribute('aria-label', `${m.name} — ${coordText}`);
      function showBadge() {
        badgeTitle.textContent = m.name;
        badgeSub.textContent = `${m.since} - NOW`;
        const p = projection(m.coords);
        if (p) positionBadge(p);
        badge.classList.add('is-visible');
      }
      el.addEventListener('pointerenter', () => {
        if (selectedMarker) return; // a pinned marker owns the badge
        hoveredMarker = m;
        showBadge();
      });
      el.addEventListener('pointerleave', () => {
        if (selectedMarker) return;
        if (hoveredMarker === m) hoveredMarker = null;
        badge.classList.remove('is-visible');
      });
      // Click pins this marker: rotation stops and the badge stays put.
      el.addEventListener('pointerdown', (e) => e.stopPropagation());
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        if (selectedMarker === m) { clearSelection(); return; }
        markerEls.forEach(({ el: other }) => other.classList.remove('is-selected'));
        selectedMarker = m;
        hoveredMarker = m;
        paused = true;
        el.classList.add('is-selected');
        showBadge();
      });
      markerGroup.appendChild(el);
      return { marker: m, el };
    });
    // Clicking anywhere else (globe background or page) unpins.
    svg.addEventListener('click', clearSelection);
    document.addEventListener('click', clearSelection);

    // Drag-to-rotate: manualRotate is added on top of the auto-spin angle,
    // so releasing the drag lets auto-spin continue seamlessly from wherever
    // the user left it.
    let dragging = false;
    let lastPointer = null;
    svg.style.touchAction = 'none';
    svg.addEventListener('pointerdown', (e) => {
      dragging = true;
      paused = true;
      lastPointer = { x: e.clientX, y: e.clientY };
      svg.setPointerCapture(e.pointerId);
      svg.classList.add('is-dragging');
    });
    svg.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastPointer.x;
      const dy = e.clientY - lastPointer.y;
      lastPointer = { x: e.clientX, y: e.clientY };
      manualRotate[0] += dx * 0.35;
      manualRotate[1] = Math.max(-80, Math.min(80, manualRotate[1] - dy * 0.35));
      render();
    });
    function endDrag(e) {
      if (!dragging) return;
      dragging = false;
      // Keep rotation stopped if a marker is currently pinned.
      paused = !!selectedMarker;
      svg.classList.remove('is-dragging');
      if (e && e.pointerId !== undefined) {
        try { svg.releasePointerCapture(e.pointerId); } catch (err) { /* noop */ }
      }
    }
    svg.addEventListener('pointerup', endDrag);
    svg.addEventListener('pointercancel', endDrag);

    const graticule = d3.geoGraticule().step([15, 15]);
    // Split into individual lines so the one meridian that lands dead-center
    // (renders as a perfectly straight line in orthographic projection, and
    // is the most visible to per-frame floating-point jitter) can be skipped.
    const graticuleLines = graticule.lines().map((line) => {
      const lons = line.coordinates.map((c) => c[0]);
      const isMeridian = Math.max(...lons) - Math.min(...lons) < 0.001;
      return { line, isMeridian, lon: isMeridian ? lons[0] : null };
    });

    // Created once and mutated per frame (via .rotate()) instead of being
    // rebuilt from scratch every frame — a sphere's fitted scale/translate
    // don't change with rotation, so this is safe and cuts per-frame garbage
    // (and the resulting GC-pause stutter) substantially.
    const projection = d3.geoOrthographic().fitSize([SIZE, SIZE], { type: 'Sphere' });
    const path = d3.geoPath(projection);

    function render() {
      const liveRotate = [
        BASE_ROTATE[0] + spin + manualRotate[0],
        BASE_ROTATE[1] + manualRotate[1],
        BASE_ROTATE[2]
      ];
      projection.rotate(liveRotate);

      const centerLon = (((-liveRotate[0]) % 360) + 540) % 360 - 180;
      let graticuleD = '';
      graticuleLines.forEach(({ line, isMeridian, lon }) => {
        if (isMeridian) {
          let diff = Math.abs(lon - centerLon);
          if (diff > 180) diff = 360 - diff;
          if (diff < 4) return; // skip the near-center meridian
        }
        graticuleD += path(line) || '';
      });
      graticulePath.setAttribute('d', graticuleD);

      oceanPath.setAttribute('d', path({ type: 'Sphere' }) || '');
      landPath.setAttribute('d', path(land) || '');

      const center = [-liveRotate[0], -liveRotate[1]];
      markerEls.forEach(({ marker, el }) => {
        const p = projection(marker.coords);
        const visible = p && distance(center, marker.coords) < Math.PI / 2;
        if (!visible) {
          el.style.display = 'none';
          // If the pinned marker is dragged around to the far side, unpin it
          // so rotation doesn't stay frozen on something the user can't see.
          if (selectedMarker === marker) clearSelection();
          if (hoveredMarker === marker) { badge.classList.remove('is-visible'); hoveredMarker = null; }
          return;
        }
        el.style.display = '';
        el.setAttribute('x', p[0] - MARKER_SIZE / 2);
        el.setAttribute('y', p[1] - MARKER_SIZE / 2);
        if (hoveredMarker === marker) positionBadge(p);
      });
    }

    render();

    // Auto-spin. Rotation speed is tracked every frame for accuracy, but the
    // (expensive) actual re-render only runs at ~30fps — plenty smooth for a
    // rotation this slow, and halves per-second GC pressure vs. 60fps.
    if (spinSpeed) {
      let prev = performance.now();
      let frame = 0;
      function tick(now) {
        if (!paused) {
          const dt = (now - prev) / 1000;
          spin = (spin + spinSpeed * dt) % 360;
          frame++;
          if (frame % 2 === 0) render();
        }
        prev = now;
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    // Live coordinate readout: reports the lat/long under the cursor.
    // projection.invert() maps a point in SVG space back to geographic coords;
    // it only means anything inside the globe's disc, so points outside the
    // sphere are ignored and the readout holds its last on-globe value.
    const latEl = document.getElementById('globe-lat');
    const lngEl = document.getElementById('globe-lng');
    if (latEl && lngEl) {
      const R = SIZE / 2;
      function setReadout(lon, lat) {
        latEl.textContent = `${Math.abs(lat).toFixed(4)}° ${lat >= 0 ? 'N' : 'S'}`;
        lngEl.textContent = `${Math.abs(lon).toFixed(4)}° ${lon >= 0 ? 'E' : 'W'}`;
      }
      svg.addEventListener('pointermove', (e) => {
        const rect = svg.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const x = ((e.clientX - rect.left) / rect.width) * SIZE;
        const y = ((e.clientY - rect.top) / rect.height) * SIZE;
        // Ignore anything outside the projected sphere.
        if ((x - R) * (x - R) + (y - R) * (y - R) > R * R) return;
        const inv = projection.invert && projection.invert([x, y]);
        if (!inv || !isFinite(inv[0]) || !isFinite(inv[1])) return;
        setReadout(inv[0], inv[1]);
      });
      // Seed with the home marker so the readout is never blank.
      setReadout(MARKERS[0].coords[0], MARKERS[0].coords[1]);
    }
  }

  initGlobe();
})();
