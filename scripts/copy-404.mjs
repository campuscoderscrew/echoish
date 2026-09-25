import fs from "fs";

// GitHub Pages has no rewrites, so an unknown path serves 404.html. Making that
// a copy of index.html lets the app boot and React Router show the real page
// (or the NotFound page).
fs.copyFileSync("dist/index.html", "dist/404.html");
console.log("Wrote dist/404.html (SPA fallback).");
