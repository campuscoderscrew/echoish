import { FaDiscord, FaInstagram } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

import Record from "./Record";
import { LINKS } from "../data/links";

/**
 * Small footer line used under every page: logo, socials, copyright.
 * The full contact section lives in HomePage/Join.tsx.
 */
export default function ContactFooter({
  className = "",
}: {
  className?: string;
}) {
  const socials = [
    { label: "Discord", href: LINKS.discord, Icon: FaDiscord },
    { label: "Instagram", href: LINKS.instagram, Icon: FaInstagram },
    { label: "Linktree", href: LINKS.linktree, Icon: SiLinktree },
    { label: "Email", href: `mailto:${LINKS.email}`, Icon: HiOutlineMail },
  ];

  return (
    <footer className={className}>
      <div className="shell flex flex-col items-center gap-5 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Record className="size-10" spinning={false} />
          <div>
            <p className="display text-xl font-semibold italic leading-none">
              echoish
            </p>
            <p className="mt-1 text-sm opacity-75">
              Music · Service · Community
            </p>
          </div>
        </div>

        <ul className="flex gap-2">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-current/25 transition-colors hover:bg-current/10"
              >
                <Icon aria-hidden="true" className="size-5" />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm opacity-75">
          © {new Date().getFullYear()} Echoish at UMD
          <br />A student-run organization at the University of Maryland
        </p>
      </div>
    </footer>
  );
}
