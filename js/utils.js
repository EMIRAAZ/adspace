/* ---------- adspace.ae shared utilities ---------- */

async function fetchJSON(path) {
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  return res.json();
}

function formatCurrency(value) {
  return "AED " + Number(value).toLocaleString("en-US");
}

function formatNumber(value, decimals = 0) {
  return Number(value).toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function qs(name, url = window.location.href) {
  return new URL(url).searchParams.get(name);
}

function setQueryParams(params) {
  const url = new URL(window.location.href);
  Object.entries(params).forEach(([key, value]) => {
    if (value === null || value === undefined || value === "") {
      url.searchParams.delete(key);
    } else {
      url.searchParams.set(key, value);
    }
  });
  return url.toString();
}

function debounce(fn, wait = 250) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

function priceUnitLabel(unit) {
  const map = { month: "/month", week: "/week", spot: "/spot", insertion: "/insertion" };
  return map[unit] || "";
}

/* Animated count-up, triggered once an element enters the viewport */
function animateCount(el, target, { decimals = 0, prefix = "", suffix = "", duration = 1400 } = {}) {
  const numberEl = el.querySelector(".stat-number");
  const suffixEl = el.querySelector(".stat-suffix");
  if (suffixEl) suffixEl.textContent = suffix;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;
    const text = prefix + formatNumber(current, decimals);
    if (numberEl) numberEl.textContent = text;
    else el.textContent = text + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function observeOnce(el, callback, options = { threshold: 0.3 }) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
        io.unobserve(entry.target);
      }
    });
  }, options);
  io.observe(el);
}

function skeletonCards(count, className = "listing-card") {
  return Array.from({ length: count })
    .map(
      () => `
      <div class="${className} skeleton-card" aria-hidden="true">
        <div class="skeleton skeleton-media"></div>
        <div class="card-body">
          <div class="skeleton skeleton-line" style="width:70%"></div>
          <div class="skeleton skeleton-line" style="width:45%"></div>
          <div class="skeleton skeleton-line" style="width:55%"></div>
        </div>
      </div>`
    )
    .join("");
}

function showDataError(container, message = "Something went wrong while loading data.") {
  container.innerHTML = `
    <div class="data-error">
      <p>${message}</p>
      <p class="data-error-hint">If you opened this file directly in the browser, local JSON files may be blocked. Serve the project with a local server, e.g. <code>python3 -m http.server</code>, then open it via <code>http://localhost</code>.</p>
    </div>`;
}
