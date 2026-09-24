# adspace.ae (static demo)

A static HTML/CSS/JS prototype of an ad-space marketplace for the UAE. All content (categories, listings, stats, "how it works" steps) is data-driven from JSON files in `data/` and rendered client-side — no build step or framework.

## Structure

```
adspace.ae/
├── index.html         Home page (redesigned hero, categories, featured listings)
├── listings.html      All listings with filters, search, sort, pagination
├── details.html       Single listing detail page (?id=ADS-1001)
├── css/style.css       All styling
├── js/
│   ├── utils.js        fetch/formatting/animation helpers
│   ├── components.js    icon set + shared card/tile templates
│   ├── home.js          home page logic
│   ├── listings.js      listings page logic
│   └── details.js       details page logic
└── data/
    ├── categories.json
    ├── listings.json
    ├── stats.json
    └── how-it-works.json
```

## Running it

Browsers block `fetch()` of local JSON files when a page is opened directly via `file://`. Serve the folder over HTTP instead:

```bash
cd adspace.ae
python3 -m http.server 8080
# then open http://localhost:8080
```

(Any static server works — VS Code "Live Server", `npx serve`, etc.)

## Notes

- Listing card images are generated as gradient + icon placeholders (no external image files). Homepage category tiles use real, category-matched photos hotlinked from Wikimedia Commons (freely licensed, set per category in `data/categories.json`) so the cards read as real photography — swap the `image` field for your own assets when available.
- All listing/category/stat data lives in `data/*.json` — edit those files to add or change content, no HTML changes required.
- The search form on the home page and the filters on the listings page are wired together via URL query params (`?category=&city=&budget=`).
