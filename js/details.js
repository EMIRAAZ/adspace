/* ---------- adspace.ae details page ---------- */

document.addEventListener("DOMContentLoaded", async () => {
  const main = document.getElementById("detailsMain");
  const id = qs("id");

  try {
    const listings = await fetchJSON("data/listings.json");
    const listing = listings.find((l) => l.id === id);

    if (!listing) {
      if (main) {
        main.innerHTML = `
          <div class="empty-state">
            <span class="empty-state-icon">${icon("search")}</span>
            <h3>Listing not found</h3>
            <p>This ad space may have been removed or the link is incorrect.</p>
            <a class="btn btn-primary" href="listings.html">Browse All Listings</a>
          </div>`;
      }
      return;
    }

    renderDetails(listing);
    renderRelated(listing, listings);
    renderSeoTags(listing);
  } catch (err) {
    console.error(err);
    if (main) showDataError(main);
  }
});

function renderDetails(listing) {
  const gallery = document.getElementById("gallery");
  const thumbCount = 3;

  gallery.innerHTML = `
    <div class="gallery-main">
      <img id="galleryMainImg" src="${listing.image}" alt="${listing.title}" />
    </div>
    <div class="gallery-side">
      <div class="gallery-thumbs">
        ${Array.from({ length: thumbCount })
          .map(
            (_, i) => `
          <button type="button" class="gallery-thumb ${i === 0 ? "is-active" : ""}" data-src="${listing.image}">
            <img src="${listing.image}" alt="${listing.title} view ${i + 1}" loading="lazy" />
          </button>`
          )
          .join("")}
      </div>
      <div class="card-actions">
        <a class="card-action-btn" href="tel:+9710000000">${icon("phone", "btn-tile-icon")} Call</a>
        <a class="card-action-btn" href="https://wa.me/9710000000" target="_blank" rel="noopener">${icon("whatsapp", "btn-tile-icon")} WhatsApp</a>
      </div>
    </div>`;

  gallery.querySelectorAll(".gallery-thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      gallery.querySelectorAll(".gallery-thumb").forEach((t) => t.classList.remove("is-active"));
      thumb.classList.add("is-active");
      document.getElementById("galleryMainImg").src = thumb.dataset.src;
    });
  });

  document.getElementById("detailTitle").textContent = listing.title;
  document.getElementById("detailLocation").innerHTML = `${icon("pin", "card-icon")} ${listing.location}`;
  document.getElementById("detailDescription").textContent = listing.description;
}

function renderSeoTags(listing) {
  const title = `${listing.title} — ${listing.location} | adspace.ae`;
  const description = listing.description || `${listing.title} available in ${listing.location}. View details on adspace.ae.`;
  const url = `https://adspace.ae/details.html?id=${encodeURIComponent(listing.id)}`;

  document.title = title;

  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", description);

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", url);

  const setContent = (elId, value) => {
    const el = document.getElementById(elId);
    if (el) el.setAttribute("content", value);
  };
  setContent("ogTitle", title);
  setContent("ogDescription", description);
  setContent("ogUrl", url);
  setContent("ogImage", listing.image);
  setContent("twitterTitle", title);
  setContent("twitterDescription", description);
  setContent("twitterImage", listing.image);
}

function renderRelated(current, listings) {
  const grid = document.getElementById("relatedGrid");
  if (!grid) return;
  const related = listings.filter((l) => l.category === current.category && l.id !== current.id).slice(0, 4);
  const items = related.length ? related : listings.filter((l) => l.id !== current.id).slice(0, 4);
  grid.innerHTML = items.map((l) => listingCard(l, { actions: "contact" })).join("");
}
