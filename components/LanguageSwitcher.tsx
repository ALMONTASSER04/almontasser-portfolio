"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const LANGS = [
  { code: "ar", label: "عربي" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(code: string) {
    const segments = pathname.split("/");
    segments[1] = code;
    router.push(segments.join("/") || "/");
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-gilt/40 bg-ink/40 p-1">
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => switchTo(l.code)}
          className={`px-2.5 py-1 text-xs rounded-full transition-colors ${
            locale === l.code
              ? "bg-gilt text-ink font-semibold"
              : "text-parchment/70 hover:text-parchment"
          }`}
          aria-current={locale === l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
