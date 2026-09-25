import { FaDiscord, FaInstagram } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

import Reveal from "../Reveal";
import Record from "../Record";
import { ADDRESS, LINKS } from "../../data/links";

/**
 * The back cover: dark vinyl band with the big "come hang out" call to action
 * and every way to reach the club, set like album credits.
 */
export default function Join() {
  const credits = [
    {
      role: "Chat",
      value: "Echoish Discord",
      href: LINKS.discord,
      Icon: FaDiscord,
    },
    {
      role: "Follow",
      value: LINKS.instagramHandle,
      href: LINKS.instagram,
      Icon: FaInstagram,
    },
    {
      role: "Email",
      value: LINKS.email,
      href: `mailto:${LINKS.email}`,
      Icon: HiOutlineMail,
    },
    {
      role: "Everything else",
      value: "linktr.ee/echoishumd",
      href: LINKS.linktree,
      Icon: SiLinktree,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-vinyl pt-28 pb-10 text-paper sm:pt-32"
    >
      {/* Oversized record, half off the edge. Static: pure decoration. */}
      <Record
        spinning={false}
        className="pointer-events-none absolute -top-64 -right-56 size-[30rem] opacity-30 sm:-top-80 sm:-right-48 sm:size-[40rem] lg:-right-32"
      />

      <div className="shell relative">
        <Reveal className="max-w-3xl">
          <p className="kicker !text-marigold">
            Back cover · Join &amp; contact
          </p>
          <h2 className="display mt-4 text-[clamp(3rem,9vw,6rem)] leading-[0.92] font-semibold">
            Come hang <span className="italic text-marigold">out.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
            No audition, no experience needed. Hop in the Discord to hear about
            the next GBM, sign up for a performance, or just say hi.
          </p>
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noreferrer"
            className="btn btn-marigold mt-9 !px-7 !py-4 text-lg"
          >
            <FaDiscord aria-hidden="true" className="size-6" />
            Join our Discord
          </a>
        </Reveal>

        <Reveal delay={120}>
          <dl className="mt-20 grid gap-x-8 gap-y-8 border-t border-paper/20 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {credits.map(({ role, value, href, Icon }) => (
              <div key={role}>
                <dt className="kicker !text-paper/60">{role}</dt>
                <dd className="mt-2">
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="ink-link inline-flex items-center gap-2 font-semibold [overflow-wrap:anywhere] text-paper"
                  >
                    <Icon aria-hidden="true" className="size-5 shrink-0" />
                    {value}
                  </a>
                </dd>
              </div>
            ))}
            <div>
              <dt className="kicker !text-paper/60">Find us</dt>
              <dd className="mt-2 flex gap-2 font-semibold">
                <HiOutlineLocationMarker
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0"
                />
                <address className="not-italic">
                  {ADDRESS.line1}
                  <br />
                  <span className="font-normal text-paper/70">
                    {ADDRESS.line2}
                  </span>
                </address>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
