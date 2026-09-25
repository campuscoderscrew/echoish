import { useEffect, useState } from "react";
import { FaDiscord } from "react-icons/fa";

import Record from "./Record";
import { LINKS } from "../data/links";

/**
 * Anchor links are built from BASE_URL so they also work from the 404 page:
 * from home they just scroll, from anywhere else they load home at that spot.
 */
const BASE = import.meta.env.BASE_URL;

const navLinks = [
  { label: "About", href: `${BASE}#about` },
  { label: "What we do", href: `${BASE}#what-we-do` },
  { label: "Setlist", href: `${BASE}#setlist` },
  { label: "Calendar", href: `${BASE}#calendar` },
  { label: "Contact", href: `${BASE}#contact` },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-ink/10 bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <a
          href={BASE}
          className="group flex items-center gap-2 text-ink no-underline"
          aria-label="Echoish, back to top"
        >
          <Record
            className="size-9 transition-transform duration-500 group-hover:rotate-90"
            spinning={false}
          />
          <span className="display text-2xl font-semibold italic">echoish</span>
        </a>

        {/* Desktop links */}
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-3 py-2 text-[0.95rem] font-semibold text-ink-soft no-underline transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {label}
            </a>
          ))}
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary ml-3 !px-4 !py-2 text-sm"
          >
            <FaDiscord aria-hidden="true" className="size-4" />
            Join us
          </a>
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="grid size-11 place-items-center rounded-full text-ink hover:bg-ink/5 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2.2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h11"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="border-t border-ink/10 bg-paper/95 backdrop-blur-md md:hidden"
        >
          <div className="shell flex flex-col py-3">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="display border-b border-dashed border-ink/15 py-3 text-2xl text-ink no-underline last:border-none"
              >
                {label}
              </a>
            ))}
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary mt-4 mb-2 self-start"
            >
              <FaDiscord aria-hidden="true" className="size-5" />
              Join our Discord
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
