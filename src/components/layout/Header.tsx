"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const CONSTITUTION_URL =
  "https://docs.google.com/document/d/1eDsZQN9UCJXyXSkDaTPL--6N5J_kFBEiOjsaNkK1A-A/edit?tab=t.0";

const navLinks = [
  { href: "/events", label: "Events" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/faq", label: "FAQ" },
];

const aboutLinks = [
  { href: "/about", label: "Who we are" },
  { href: "/riotsocteam", label: "Meet the team" },
  { href: CONSTITUTION_URL, label: "Constitution", external: true },
];

/** Same horizontal start as the logo image in the header row (shared nav px-4). */
const mobileMenuInset = "max-lg:pl-0 max-lg:pr-4";

const desktopNavHover =
  "lg:rounded-sm lg:transition-colors lg:duration-150 lg:hover:bg-black/12 lg:hover:text-[rgb(52,59,61)]";

const dropdownLinkClass = `block text-black no-underline transition-colors duration-150 max-lg:py-1.5 max-lg:pl-4 max-lg:pr-4 hover:bg-black/[0.06] lg:px-4 lg:py-2 lg:hover:bg-black/12 ${desktopNavHover}`;

const mobileNavLinkClass = `block text-black no-underline transition-colors duration-150 ${mobileMenuInset} max-lg:py-1.5 lg:px-3 lg:py-2 ${desktopNavHover}`;

const aboutButtonClass = `flex w-full items-center justify-between gap-1 text-left text-black transition-colors duration-150 ${mobileMenuInset} max-lg:py-1.5 lg:w-auto lg:justify-start lg:px-3 lg:py-2 ${desktopNavHover}`;

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const isActive = (href: string) => {
    const normalize = (path: string) => path.replace(/\/$/, "") || "/";
    return normalize(pathname) === normalize(href);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setAboutOpen(false);
  };

  const toggleMobile = () => {
    setMobileOpen((open) => {
      if (open) setAboutOpen(false);
      return !open;
    });
  };

  const toggleAbout = () => {
    if (window.matchMedia("(max-width: 1023px)").matches) {
      setAboutOpen((open) => !open);
    }
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="overflow-visible bg-[#D7D9DB] font-[family-name:var(--font-uni-sans)]">
        <div className="mx-auto flex flex-wrap items-center justify-between px-4 py-2 lg:flex-nowrap lg:px-6">
          <Link
            href="/"
            className="flex h-[45px] min-w-0 shrink-0 items-center gap-2 whitespace-nowrap text-[1.5em] text-black no-underline"
            onClick={closeMobile}
          >
            <Image
              src="/Images/RiotsocLogo.svg"
              alt="RiotSoc logo"
              width={45}
              height={45}
              className="h-[45px] w-[45px] shrink-0"
            />
            RiotSoc UNSW
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded border border-gray-400 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={toggleMobile}
          >
            <span className="block h-0.5 w-5 bg-black" />
            <span className="block h-0.5 w-5 bg-black" />
            <span className="block h-0.5 w-5 bg-black" />
          </button>

          <div className="w-full basis-full lg:w-auto lg:basis-auto">
            <div
              className={`grid w-full overflow-hidden transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none lg:overflow-visible ${
                mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              } lg:grid-rows-[1fr]`}
            >
              <div className="min-h-0 lg:overflow-visible">
                <div
                  className={`flex flex-col gap-0 pt-4 pb-3 transition-opacity duration-300 ease-out motion-reduce:transition-none max-lg:gap-1.5 max-lg:pt-4 max-lg:pb-4 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:overflow-visible lg:pt-0 lg:pb-0 lg:opacity-100 ${
                    mobileOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="about-dropdown relative">
                    <button
                      type="button"
                      className={aboutButtonClass}
                      aria-expanded={aboutOpen}
                      onClick={toggleAbout}
                    >
                      About us
                      <span
                        className={`text-xs transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""} lg:rotate-0`}
                        aria-hidden
                      >
                        ▾
                      </span>
                    </button>
                    <ul
                      className={`about-dropdown-menu w-full flex-col max-lg:gap-0 lg:absolute lg:left-0 lg:top-full lg:z-50 lg:mt-0 lg:min-w-[180px] lg:rounded lg:bg-[#D7D9DB] lg:py-1 lg:shadow-md ${
                        aboutOpen ? "max-lg:flex" : "max-lg:hidden"
                      } hidden`}
                    >
                      {aboutLinks.map((link) => (
                        <li key={link.label}>
                          {link.external ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={dropdownLinkClass}
                              onClick={closeMobile}
                            >
                              {link.label}
                            </a>
                          ) : (
                            <Link
                              href={link.href}
                              className={`${dropdownLinkClass} ${isActive(link.href) ? "font-bold" : ""}`}
                              onClick={closeMobile}
                            >
                              {link.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`${mobileNavLinkClass} ${isActive(link.href) ? "font-bold" : ""}`}
                      onClick={closeMobile}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
