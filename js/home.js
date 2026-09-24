/* ---------- adspace.ae home page ---------- */

document.addEventListener("DOMContentLoaded", async () => {
  const featuredGrid = document.getElementById("featuredGrid");
  if (featuredGrid) featuredGrid.innerHTML = skeletonCards(8);

  try {
    const [categories, listings, stats, steps] = await Promise.all([
      fetchJSON("data/categories.json"),
      fetchJSON("data/listings.json"),
      fetchJSON("data/stats.json"),
      fetchJSON("data/how-it-works.json"),
    ]);

    renderCategories(categories);
    renderHeroSearch(categories, listings);
    renderStats(stats);
    renderFeatured(listings);
    renderSteps(steps);
  } catch (err) {
    console.error(err);
    if (featuredGrid) showDataError(featuredGrid);
  }
});

function renderCategories(categories) {
  const grid = document.getElementById("categoryGrid");
  if (!grid) return;
  grid.innerHTML = categories.map(categoryTile).join("");
}

function renderStats(stats) {
  const bar = document.getElementById("heroStats");
  if (!bar) return;
  bar.innerHTML = stats
    .map(
      (s, i) => `
      <div class="stat-item" id="stat-${i}">
        <span class="stat-value"><span class="stat-number">0</span><span class="stat-suffix"></span></span>
        <span class="stat-label">${s.label}</span>
      </div>`
    )
    .join("");

  stats.forEach((s, i) => {
    const el = document.querySelector(`#stat-${i} .stat-value`);
    observeOnce(el, () =>
      animateCount(el, s.value, {
        decimals: s.decimals || 0,
        prefix: s.prefix || "",
        suffix: s.suffix || "",
      })
    );
  });
}

function renderFeatured(listings) {
  const grid = document.getElementById("featuredGrid");
  if (!grid) return;
  const featured = listings.filter((l) => l.featured).slice(0, 8);
  const items = featured.length ? featured : listings.slice(0, 8);
  grid.innerHTML = items.map((l, i) => listingCard(l, i)).join("");
}

function renderSteps(steps) {
  const wrap = document.getElementById("stepsGrid");
  if (!wrap) return;
  wrap.innerHTML = steps.map(stepTile).join("");
}

function renderHeroSearch(categories, listings) {
  const typeSelect = document.getElementById("searchType");
  const locationSelect = document.getElementById("searchLocation");
  if (typeSelect) {
    typeSelect.innerHTML =
      `<option value="">Select Adspace Type</option>` +
      categories.map((c) => `<option value="${c.id}">${c.name}</option>`).join("");
  }
  if (locationSelect) {
    const cities = [...new Set(listings.map((l) => l.city))].sort();
    locationSelect.innerHTML =
      `<option value="">Select Location</option>` +
      cities.map((c) => `<option value="${c}">${c}</option>`).join("");
  }

  const form = document.getElementById("heroSearchForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const params = new URLSearchParams();
      const category = document.getElementById("searchType").value;
      const city = document.getElementById("searchLocation").value;
      if (category) params.set("category", category);
      if (city) params.set("city", city);
      const query = params.toString();
      window.location.href = "listings.html" + (query ? `?${query}` : "");
    });
  }

  const tagButtons = document.querySelectorAll("[data-quick-category]");
  tagButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = `listings.html?category=${encodeURIComponent(btn.dataset.quickCategory)}`;
    });
  });
}
