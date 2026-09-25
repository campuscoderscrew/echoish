import { useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import ContactFooter from "../components/ContactFooter";
import Record from "../components/Record";

export default function NotFound() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Page not found · Echoish at UMD";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="shell flex min-h-[80vh] flex-col items-center justify-center gap-6 pt-32 pb-24 text-center">
        <div className="relative w-56 sm:w-64">
          <Record className="w-full" />
          <span className="sticker absolute -right-6 bottom-2 rotate-[10deg] bg-blush text-ink">
            skip!
          </span>
        </div>

        <p className="kicker mt-4">Error 404 · Track not found</p>
        <h1 className="display text-[clamp(2.4rem,7vw,4rem)] leading-tight font-semibold text-balance">
          This track <span className="italic">skipped.</span>
        </h1>
        <p className="max-w-prose text-lg text-balance text-ink-soft">
          The link may be out of date, or the page may have moved. Let's get you
          back to the good part.
        </p>

        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn btn-primary">
            Back to home
          </Link>
          <a
            href={`${import.meta.env.BASE_URL}#contact`}
            className="btn btn-secondary"
          >
            Contact us
          </a>
        </div>
      </main>
      <ContactFooter className="bg-vinyl text-paper" />
    </>
  );
}
