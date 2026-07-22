"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const LINKS = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "portfolio", href: "#portfolio" },
  { key: "hobbies", href: "#hobbies" },
];

export default function Header() {
  const t = useTranslations("nav");
  const tHero = useTranslations("hero");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur border-b border-gilt/20">
      <div className="max-w-content mx-auto flex items-center justify-between gap-4 px-5 py-3">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
            <polygon
              points="17,2 30,9 30,25 17,32 4,25 4,9"
              fill="none"
              stroke="#C9A24B"
              strokeWidth="1.5"
            />
            <text
              x="17"
              y="22"
              textAnchor="middle"
              fontSize="13"
              fill="#C9A24B"
              fontFamily="var(--cairo-font), sans-serif"
              fontWeight="700"
            >
              M
            </text>
          </svg>
          <span className="font-display font-semibold text-parchment text-sm hidden sm:block">
            {tHero("nameLine2")}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className="text-sm text-parchment/80 hover:text-gilt transition-colors"
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="rounded-full bg-gilt text-ink text-sm font-semibold px-4 py-2 hover:bg-giltDeep hover:text-parchment transition-colors"
          >
            {t("cta")}
          </a>
        </div>

        <button
          className="lg:hidden text-parchment"
          onClick={() => setOpen(!open)}
          aria-label="menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gilt/20 bg-ink px-5 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a
              key={l.key}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-parchment/85 text-sm"
            >
              {t(l.key)}
            </a>
          ))}
          <div className="flex items-center justify-between pt-2 border-t border-gilt/10">
            <LanguageSwitcher />
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gilt text-ink text-sm font-semibold px-4 py-2"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
