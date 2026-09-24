/* ---------- adspace.ae icons + shared render components ---------- */
/* All icons follow a consistent line style: stroke-width 1.5, no fill. */

const ICONS = {
  billboard: `<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="12" rx="1.5"/><path d="M7 20v-4M17 20v-4M5 8h14"/></svg>`,
  digital: `<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="13" rx="1.5"/><path d="M8 21h8M12 16v5"/><path d="M7 9l2 2 3-3 5 5" /></svg>`,
  radio: `<svg viewBox="0 0 24 24"><circle cx="12" cy="14" r="5"/><path d="M12 14v0M8.5 20h7M6 6l2.5 2.5M18 6l-2.5 2.5M12 3v3"/></svg>`,
  tv: `<svg viewBox="0 0 24 24"><rect x="2.5" y="6" width="19" height="13" rx="1.5"/><path d="M8 21h8M7 6l3-3M17 6l-3-3"/></svg>`,
  newspaper: `<svg viewBox="0 0 24 24"><path d="M4 5h13a2 2 0 0 1 2 2v12a1.5 1.5 0 0 1-1.5 1.5H6a2 2 0 0 1-2-2V5z"/><path d="M19 8v10a1.5 1.5 0 0 0 3 0V9a1 1 0 0 0-1-1h-2z"/><path d="M7 9h7M7 12h7M7 15h4"/></svg>`,
  magazine: `<svg viewBox="0 0 24 24"><path d="M4 4h16v16a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>`,
  pin: `<svg viewBox="0 0 24 24"><path d="M12 21s7-7.2 7-12a7 7 0 0 0-14 0c0 4.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
  shuffle: `<svg viewBox="0 0 24 24"><path d="M3 6h3.5l9 12H19M3 18h3.5l3-4M14 6h5v0M19 6l-3-3M19 6l-3 3M19 18l-3 3M19 18l-3-3"/></svg>`,
  network: `<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M8 7l2.5 9M16 7l-2.5 9M8.5 6h7"/></svg>`,
  rocket: `<svg viewBox="0 0 24 24"><path d="M12 2c3 1.5 5 5 5 9-1 1-2 2-2 2H9s-1-1-2-2c0-4 2-7.5 5-9z"/><path d="M9 13l-3 3v3l3-1M15 13l3 3v3l-3-1"/><circle cx="12" cy="9" r="1.5"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6-5.9-3.4-5.9 3.4 1.3-6.6-4.9-4.6 6.6-.8z"/></svg>`,
  search: `<svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.8-4.8"/></svg>`,
  filter: `<svg viewBox="0 0 24 24"><path d="M4 5h16M7 12h10M10 19h4"/></svg>`,
  menu: `<svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  close: `<svg viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  phone: `<svg viewBox="0 0 24 24"><path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2C9.6 20 4 14.4 4 7a2 2 0 0 1 2-2z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2zm5.6 14.3c-.2.6-1.4 1.3-2 1.4-.5.1-1.2.2-3.8-.8-3.2-1.3-5.2-4.6-5.4-4.8-.2-.2-1.3-1.7-1.3-3.2 0-1.5.8-2.3 1.1-2.6.3-.3.6-.4.8-.4h.6c.2 0 .5 0 .7.6.3.7.9 2.2 1 2.4.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.4-.5.6-.2.2-.4.4-.2.8.2.4.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.8 1.7.4.2.6.1.8-.1.2-.2.9-1 1.1-1.4.2-.4.5-.3.8-.2.3.1 2 1 2.4 1.1.4.2.6.3.7.4.1.2.1.9-.1 1.6z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3.5 6.5L12 13l8.5-6.5"/></svg>`,
  clock: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>`,
  check: `<svg viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6"/></svg>`,
  badge: `<svg viewBox="0 0 24 24"><path d="M12 2l2.4 1.4 2.7-.3 1 2.5 2.5 1-.3 2.7L21.7 12l-1.4 2.4.3 2.7-2.5 1-1 2.5-2.7-.3L12 22l-2.4-1.4-2.7.3-1-2.5-2.5-1 .3-2.7L2.3 12l1.4-2.4-.3-2.7 2.5-1 1-2.5 2.7.3z"/><path d="M8.5 12.5l2.3 2.3 4.7-4.8"/></svg>`,
  resize: `<svg viewBox="0 0 24 24"><path d="M4 16v4h4M20 8V4h-4M4 4l16 16"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="1.5"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>`,
  hash: `<svg viewBox="0 0 24 24"><path d="M4 9h16M4 15h16M9 3L7 21M17 3l-2 18"/></svg>`,
};

function icon(name, extraClass = "") {
  return (ICONS[name] || ICONS.pin).replace("<svg ", `<svg class="icon ${extraClass}" `);
}

function categoryIconKey(categoryId) {
  const map = { billboard: "billboard", "digital-billboard": "digital", radio: "radio", tv: "tv", newspaper: "newspaper", magazine: "magazine" };
  return map[categoryId] || "billboard";
}

/* deterministic gradient per category, gently varied per listing so cards feel distinct */
const CATEGORY_GRADIENTS = {
  billboard: ["#e14b3f", "#9c211a"],
  "digital-billboard": ["#3b6fe0", "#152a66"],
  radio: ["#eea23a", "#9a5c07"],
  tv: ["#8b5cf6", "#3f1e8f"],
  newspaper: ["#16a878", "#0a4b39"],
  magazine: ["#e0509a", "#7a1249"],
};

function cardMedia(listing) {
  return `
    <span class="card-media">
      <img src="${listing.image}" alt="${listing.title}" loading="lazy" />
    </span>`;
}

function contactActionsHtml(listing) {
  return `
    <div class="card-actions">
      <a class="card-action-btn" href="tel:+9710000000">${icon("phone", "btn-tile-icon")} Call</a>
      <a class="card-action-btn" href="https://wa.me/9710000000" target="_blank" rel="noopener">${icon("whatsapp", "btn-tile-icon")} WhatsApp</a>
    </div>`;
}

function listingCard(listing, opts = {}) {
  const detailsHref = `details.html?id=${encodeURIComponent(listing.id)}`;
  const actionsHtml =
    opts.actions === "contact"
      ? contactActionsHtml(listing)
      : `<a class="card-reserve-btn" href="${detailsHref}">Reserve Now ${icon("mail", "btn-tile-icon")}</a>`;
  return `
    <article class="listing-card" data-id="${listing.id}">
      <a class="card-media-link" href="${detailsHref}">
        ${cardMedia(listing)}
      </a>
      <div class="card-body">
        <h3 class="card-title"><a href="${detailsHref}">${listing.title}</a></h3>
        <span class="card-title-accent" aria-hidden="true"></span>
        <p class="card-location">${icon("pin", "card-icon")} ${listing.location}</p>
        ${actionsHtml}
      </div>
    </article>`;
}

function categoryTile(cat) {
  return `
    <a class="category-tile" href="listings.html?category=${encodeURIComponent(cat.id)}">
      <span class="category-image">
        <img src="${cat.image}" alt="${cat.name}" loading="lazy" />
      </span>
      <span class="category-name">${cat.name}</span>
      <span class="category-count">${icon("hash")} ${cat.count} Available</span>
    </a>`;
}

const STEP_ICONS = {
  discover: `<svg class="step-svg" viewBox="0 0 40 40" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 3C9.48 3 5 7.48 5 13C5 19.5 12.8 27.5 14.3 29C14.7 29.4 15.3 29.4 15.7 29C16.8 27.9 19.5 24.9 21.6 21.4C20.6 19.8 20 18 20 16C20 15.6 20.03 15.2 20.1 14.8C18.8 13.7 17.5 12 17.5 10C17.5 9.7 17.52 9.5 17.56 9.3C16.8 8.5 15.9 8 15 8C12.24 8 10 10.24 10 13C10 15.76 12.24 18 15 18C15.8 18 16.5 17.8 17.1 17.4C18 15.7 19.8 14.3 22 13.9C21.8 7.8 18.7 3 15 3ZM15 10.5C13.62 10.5 12.5 11.62 12.5 13C12.5 14.38 13.62 15.5 15 15.5C16.38 15.5 17.5 14.38 17.5 13C17.5 11.62 16.38 10.5 15 10.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.5 16C23.46 16 21 18.46 21 21.5C21 24.54 23.46 27 26.5 27C27.76 27 28.92 26.58 29.85 25.86L34.29 30.3C34.68 30.69 35.32 30.69 35.71 30.3C36.1 29.91 36.1 29.27 35.71 28.88L31.28 24.45C31.73 23.58 32 22.57 32 21.5C32 18.46 29.54 16 26.5 16ZM23.5 21.5C23.5 19.84 24.84 18.5 26.5 18.5C28.16 18.5 29.5 19.84 29.5 21.5C29.5 23.16 28.16 24.5 26.5 24.5C24.84 24.5 23.5 23.16 23.5 21.5Z"/></svg>`,
  fit: `<svg class="step-svg" viewBox="0 0 40 40" fill="currentColor" aria-hidden="true"><g transform="rotate(-30 20 20)"><path d="M8.5 22C8.5 15.65 13.65 10.5 20 10.5H27.2L23.6 6.9C23.2 6.5 23.2 5.9 23.6 5.5C24 5.1 24.6 5.1 25 5.5L31.1 11.6C31.5 12 31.5 12.6 31.1 13L25 19.1C24.8 19.3 24.5 19.4 24.3 19.4C24 19.4 23.8 19.3 23.6 19.1C23.2 18.7 23.2 18.1 23.6 17.7L27.1 14.2H20C15.7 14.2 12.2 17.7 12.2 22C12.2 22.8 11.6 23.4 10.8 23.4C10 23.4 8.5 22.8 8.5 22Z"/><path d="M31.5 18C31.5 24.35 26.35 29.5 20 29.5H12.8L16.4 33.1C16.8 33.5 16.8 34.1 16.4 34.5C16.2 34.7 15.9 34.8 15.7 34.8C15.5 34.8 15.2 34.7 15 34.5L8.9 28.4C8.5 28 8.5 27.4 8.9 27L15 20.9C15.4 20.5 16 20.5 16.4 20.9C16.8 21.3 16.8 21.9 16.4 22.3L12.9 25.8H20C24.3 25.8 27.8 22.3 27.8 18C27.8 17.2 28.4 16.6 29.2 16.6C30 16.6 31.5 17.2 31.5 18Z"/></g></svg>`,
  connect: `<svg class="step-svg" viewBox="0 0 40 40" fill="currentColor" aria-hidden="true"><line x1="20" y1="20" x2="9" y2="10" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/><line x1="20" y1="20" x2="30" y2="8" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/><line x1="20" y1="20" x2="32" y2="22" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/><line x1="20" y1="20" x2="21" y2="32" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/><line x1="20" y1="20" x2="8" y2="26" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/><circle cx="20" cy="20" r="4.2"/><circle cx="9" cy="10" r="3.3"/><circle cx="30" cy="8" r="3.3"/><circle cx="32" cy="22" r="3.3"/><circle cx="21" cy="32" r="3.3"/><circle cx="8" cy="26" r="3.3"/></svg>`,
  launch: `<svg class="step-svg" viewBox="0 0 40 40" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M33.8 6.2C34.2 6.6 34.2 7.3 33.8 7.8C31.8 11.2 29.2 16.4 28.5 21.6C28.2 23.3 27.5 24.9 26.4 26.2L28.7 28.5C29.3 29.1 29.1 30.2 28.2 30.6L22.6 33.2C22.1 33.4 21.5 33.3 21.1 32.9L18 29.8L15.3 32.5C14.7 33.1 13.7 33.1 13.1 32.5L8.2 27.6C7.6 27 7.6 26 8.2 25.4L10.9 22.7L7.8 19.6C7.4 19.2 7.3 18.6 7.5 18.1L10.1 12.5C10.5 11.6 11.6 11.4 12.2 12L14.5 14.3C15.8 13.2 17.4 12.5 19.1 12.2C24.3 11.5 29.5 8.9 32.9 6.9C33.4 6.5 33.9 6.5 33.8 6.2ZM24 16C25.1 16 26 15.1 26 14C26 12.9 25.1 12 24 12C22.9 12 22 12.9 22 14C22 15.1 22.9 16 24 16Z"/><path d="M5.5 34.5C4.9 35.1 4 34.9 3.7 34.2C3 32.6 3.6 30.6 4.9 29.5L8.8 26.5L14.2 31.9L11.2 35.8C10.1 37.1 8.1 37.7 6.5 37C5.8 36.7 5.7 35.8 6.3 35.3L7.5 34.3L5.5 34.5Z"/></svg>`,
};
STEP_ICONS.pin = STEP_ICONS.discover;
STEP_ICONS.shuffle = STEP_ICONS.fit;
STEP_ICONS.network = STEP_ICONS.connect;
STEP_ICONS.rocket = STEP_ICONS.launch;

function stepIcon(name) {
  return STEP_ICONS[name] || STEP_ICONS.discover;
}

function stepTile(step) {
  return `
    <div class="step-tile">
      <div class="step-icon">${stepIcon(step.icon)}</div>
      <h3 class="step-title">${step.title}</h3>
      <p class="step-description">${step.description}</p>
    </div>`;
}

/* ---------- header / mobile nav (shared across pages) ---------- */
function initHeader() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.innerHTML = isOpen ? icon("close") : icon("menu");
  });
  toggle.innerHTML = icon("menu");

  const path = window.location.pathname.split("/").pop() || "index.html";
  nav.querySelectorAll("a").forEach((a) => {
    const raw = a.getAttribute("href");
    if (raw.includes("#")) return; // in-page section link, not a distinct current page
    if ((raw || "index.html") === path) a.classList.add("is-active");
  });
}

document.addEventListener("DOMContentLoaded", initHeader);
