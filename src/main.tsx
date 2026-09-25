// Fonts are self-hosted (bundled from npm) so the site has no third-party
// font requests. Fraunces "full" includes the SOFT + WONK axes we use.
import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/fraunces/full-italic.css";
import "@fontsource-variable/dm-sans/index.css";
import "@fontsource-variable/caveat/index.css";
import "@fontsource/dm-mono/400.css";
import "@fontsource/dm-mono/500.css";
import "./index.css";

import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useLocation, Routes, Route } from "react-router";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Leave hash links alone so they land on their section.
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        {/* Catch-all. Must stay last. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

// basename comes from `base` in vite.config.ts, so the router works both at
// /echoish/ on GitHub Pages and at the root of a custom domain.
createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <App />
  </BrowserRouter>
);
