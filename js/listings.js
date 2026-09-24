/* ---------- adspace.ae listings page ---------- */

const PAGE_SIZE = 9;

const LANDMARK_KEYWORDS = [
  "Sheikh Zayed Road",
  "Dubai Marina",
  "Downtown Dubai",
  "Business Bay",
  "Al Wahda Mall",
  "DIFC",
];

const state = {
  category: qs("category") || "",
  city: qs("city") || "",
  maxPrice: null,
  landmarks: [],
  sort: "featured",
  page: 1,
};

let ALL_LISTINGS = [];
let PRICE_MIN = 0;
let PRICE_MAX = 0;

document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.getElementById("listingsGrid");
  if (grid) grid.innerHTML = skeletonCards(PAGE_SIZE);

  try {
    const [categories, listings] = await Promise.all([
      fetchJSON("data/categories.json"),
      fetchJSON("data/listings.json"),
    ]);
    ALL_LISTINGS = listings;

    PRICE_MIN = Math.min(...listings.map((l) => l.price));
    PRICE_MAX = Math.max(...listings.map((l) => l.price));
    state.maxPrice = PRICE_MAX;

    renderSearchPill(categories, listings);
    renderCityFilter(listings);
    renderLandmarkFilters(listings);
    bindControls();
    render();
  } catch (err) {
    console.error(err);
    if (grid) showDataError(grid);
  }
});

function renderSearchPill(categories, listings) {
  const typeSelect = document.getElementById("searchType");
  const locationSelect = document.getElementById("searchLocation");
  if (typeSelect) {
    typeSelect.innerHTML =
      `<option value="">Select Adspace Type</option>` +
      categories.map((c) => `<option value="${c.id}" ${state.category === c.id ? "selected" : ""}>${c.name}</option>`).join("");
  }
  if (locationSelect) {
    const cities = [...new Set(listings.map((l) => l.city))].sort();
    locationSelect.innerHTML =
      `<option value="">Select Location</option>` +
      cities.map((c) => `<option value="${c}" ${state.city === c ? "selected" : ""}>${c}</option>`).join("");
  }

  const form = document.getElementById("listingsSearchForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      state.category = typeSelect.value;
      state.city = locationSelect.value;
      state.page = 1;
      const cityFilter = document.getElementById("cityFilter");
      if (cityFilter) cityFilter.value = state.city;
      render();
    });
  }
}

function renderCityFilter(listings) {
  const select = document.getElementById("cityFilter");
  if (!select) return;
  const cities = [...new Set(listings.map((l) => l.city))].sort();
  select.innerHTML =
    `<option value="">All</option>` +
    cities.map((c) => `<option value="${c}" ${state.city === c ? "selected" : ""}>${c}</option>`).join("");
}

function renderLandmarkFilters(listings) {
  const wrap = document.getElementById("landmarkFilters");
  if (!wrap) return;
  const items = LANDMARK_KEYWORDS.map((name) => ({
    name,
    count: listings.filter((l) => l.location.includes(name)).length,
  })).filter((l) => l.count > 0);

  wrap.innerHTML = items
    .map(
      (l) => `
      <label class="filter-check">
        <input type="checkbox" name="landmark" value="${l.name}">
        <span>${l.name} <span class="filter-check-count">(${l.count})</span></span>
      </label>`
    )
    .join("");
}

function bindControls() {
  const cityFilter = document.getElementById("cityFilter");
  const locationSelect = document.getElementById("searchLocation");
  if (cityFilter) {
    cityFilter.addEventListener("change", () => {
      state.city = cityFilter.value;
      if (locationSelect) locationSelect.value = state.city;
      state.page = 1;
      render();
    });
  }

  const priceRange = document.getElementById("priceRange");
  if (priceRange) {
    priceRange.min = PRICE_MIN;
    priceRange.max = PRICE_MAX;
    priceRange.value = PRICE_MAX;
    updateRangeLabels();
    priceRange.addEventListener("input", () => {
      state.maxPrice = Number(priceRange.value);
      updateRangeLabels();
      state.page = 1;
      render();
    });
  }

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      state.sort = sortSelect.value;
      render();
    });
  }

  const landmarkWrap = document.getElementById("landmarkFilters");
  if (landmarkWrap) {
    landmarkWrap.addEventListener("change", () => {
      state.landmarks = [...landmarkWrap.querySelectorAll('input[name="landmark"]:checked')].map((cb) => cb.value);
      state.page = 1;
      render();
    });
  }

  const clearBtn = document.getElementById("clearFilters");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      state.category = "";
      state.city = "";
      state.maxPrice = PRICE_MAX;
      state.landmarks = [];
      state.sort = "featured";
      state.page = 1;

      const typeSelect = document.getElementById("searchType");
      if (typeSelect) typeSelect.value = "";
      if (locationSelect) locationSelect.value = "";
      if (cityFilter) cityFilter.value = "";
      if (priceRange) priceRange.value = PRICE_MAX;
      updateRangeLabels();
      if (sortSelect) sortSelect.value = "featured";
      document.querySelectorAll('input[name="landmark"]').forEach((cb) => (cb.checked = false));
      render();
    });
  }
}

function updateRangeLabels() {
  const minLabel = document.getElementById("rangeMinLabel");
  const maxLabel = document.getElementById("rangeMaxLabel");
  if (minLabel) minLabel.textContent = `AED ${formatNumber(PRICE_MIN, 0)}`;
  if (maxLabel) maxLabel.textContent = `AED ${formatNumber(state.maxPrice, 0)}`;
}

function applyFilters() {
  let items = [...ALL_LISTINGS];

  if (state.category) items = items.filter((l) => l.category === state.category);
  if (state.city) items = items.filter((l) => l.city === state.city);
  if (state.maxPrice != null) items = items.filter((l) => l.price <= state.maxPrice);
  if (state.landmarks.length) {
    items = items.filter((l) => state.landmarks.some((kw) => l.location.includes(kw)));
  }

  switch (state.sort) {
    case "price-asc":
      items.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      items.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      items.sort((a, b) => b.rating - a.rating);
      break;
    default:
      items.sort((a, b) => Number(b.featured) - Number(a.featured));
  }

  return items;
}

function render() {
  const grid = document.getElementById("listingsGrid");
  const resultsCount = document.getElementById("resultsCount");
  const pagination = document.getElementById("pagination");
  if (!grid) return;

  const filtered = applyFilters();
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  state.page = Math.min(state.page, totalPages);
  const start = (state.page - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  if (resultsCount) {
    resultsCount.textContent = filtered.length ? `${filtered.length} Results Available` : "No results found";
  }

  grid.innerHTML = pageItems.length
    ? pageItems.map((l) => listingCard(l, { actions: "contact" })).join("")
    : `<div class="empty-state">
         <span class="empty-state-icon">${icon("search")}</span>
         <h3>No matching ad spaces</h3>
         <p>Try adjusting your filters or search term.</p>
       </div>`;

  renderPagination(pagination, totalPages);
}

function renderPagination(container, totalPages) {
  if (!container) return;
  if (totalPages <= 1) {
    container.innerHTML = "";
    return;
  }
  let html = `<button class="page-btn" data-page="${state.page - 1}" ${state.page === 1 ? "disabled" : ""}>${icon("chevron", "page-prev")}</button>`;
  for (let p = 1; p <= totalPages; p++) {
    html += `<button class="page-btn ${p === state.page ? "is-active" : ""}" data-page="${p}">${p}</button>`;
  }
  html += `<button class="page-btn" data-page="${state.page + 1}" ${state.page === totalPages ? "disabled" : ""}>${icon("chevron", "page-next")}</button>`;
  container.innerHTML = html;

  container.querySelectorAll("[data-page]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const page = Number(btn.dataset.page);
      if (!page || page < 1 || page > totalPages) return;
      state.page = page;
      render();
      document.getElementById("listingsGrid").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}
