// Reads drive-links.json and generates redirect pages in the dist folder. Each
// redirect page is an index.html that redirects to the corresponding link, so
// short links like <site>/discord and <site>/calendar always point at the
// current invite / calendar. Update the link here, redeploy, done.
//
// drive-links.json is a tree. Object values are grouping folders that exist only
// to organize the file -- they are NOT part of the generated URL. Only string
// values (actual links) produce a page, and the path comes from that link's own
// key:
//
//   { "socials": { "discord": "https://..." } }  ->  dist/discord/index.html
//
// A key may contain slashes ("RSVP/8-20-26"), which do become real nested
// directories. Two links that resolve to the same path are a hard error, since
// silently overwriting one would ship the wrong destination.

import fs from "fs";
import path from "path";

const links = JSON.parse(fs.readFileSync("drive-links.json", "utf-8"));
const outDir = "dist";

const escapeAttr = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Collapse the tree into slug -> { url, from }, dropping folder keys. */
function flatten(node, trail = [], out = new Map()) {
  for (const [key, value] of Object.entries(node)) {
    const from = [...trail, key].join(" > ");

    if (value && typeof value === "object" && !Array.isArray(value)) {
      flatten(value, [...trail, key], out);
      continue;
    }

    if (typeof value !== "string") {
      throw new Error(
        `drive-links.json: "${from}" is neither a link nor a group of links.`
      );
    }

    const slug = key.replace(/^\/+|\/+$/g, "");
    const existing = out.get(slug);

    if (existing && existing.url !== value) {
      throw new Error(
        `drive-links.json: two different links both resolve to /${slug}\n` +
          `  ${existing.from}\n      ${existing.url}\n` +
          `  ${from}\n      ${value}\n` +
          `Rename one of the keys. Folder names are not part of the URL, so ` +
          `keys must be unique across the whole file.`
      );
    }

    out.set(slug, { url: value, from });
  }

  return out;
}

const pages = flatten(links);

for (const [slug, { url }] of pages) {
  const dir = path.join(outDir, slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, "index.html"),
    `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0; url=${escapeAttr(url)}" />
    <link rel="canonical" href="${escapeAttr(url)}" />
  </head>
  <body>Redirecting…</body>
</html>`
  );
}

console.log(`Generated ${pages.size} redirect pages.`);
