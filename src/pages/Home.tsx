import { useEffect } from "react";

import Navbar from "../components/Navbar";
import ContactFooter from "../components/ContactFooter";
import Hero from "../components/HomePage/Hero";
import Marquee from "../components/HomePage/Marquee";
import About from "../components/HomePage/About";
import Tracklist from "../components/HomePage/Tracklist";
import Setlist from "../components/HomePage/Setlist";
import Calendar from "../components/HomePage/Calendar";
import Join from "../components/HomePage/Join";

export default function Home() {
  // Arriving from another page with a #hash (e.g. /echoish/#calendar): the
  // browser tried to scroll before React rendered, so do it now.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Tracklist />
        <Setlist />
        <Calendar />
        <Join />
      </main>
      <ContactFooter className="bg-vinyl text-paper" />
    </>
  );
}
