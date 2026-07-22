import { useTranslations } from "next-intl";

const NAV_KEYS = ["home", "about", "experience", "portfolio", "hobbies", "contact"] as const;

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A140F] border-t border-gilt/15 pt-14 pb-8">
      <div className="max-w-content mx-auto px-5 grid sm:grid-cols-3 gap-10 mb-10">
        <div>
          <h3 className="font-display text-parchment font-bold text-lg mb-2">
            {t("hero.nameLine2")}
          </h3>
          <p className="text-parchment/55 text-sm leading-relaxed">
            {t("footer.tagline")}
          </p>
        </div>
        <div>
          <h4 className="text-gilt text-xs font-semibold uppercase tracking-wide mb-4">
            {t("footer.quickLinks")}
          </h4>
          <ul className="space-y-2">
            {NAV_KEYS.map((k) => (
              <li key={k}>
                <a href={`#${k}`} className="text-parchment/60 text-sm hover:text-gilt transition-colors">
                  {t(`nav.${k}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-gilt text-xs font-semibold uppercase tracking-wide mb-4">
            {t("footer.followMe")}
          </h4>
          <div className="flex gap-3">
            {["Facebook", "Instagram", "TikTok", "LinkedIn"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 rounded-full border border-gilt/30 flex items-center justify-center text-parchment/70 hover:text-gilt hover:border-gilt transition-colors text-xs"
                aria-label={s}
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-content mx-auto px-5 pt-6 border-t border-gilt/10 text-center">
        <p className="text-parchment/40 text-xs">
          {t("footer.rights")} © {year} — {t("hero.nameLine2")}
        </p>
      </div>
    </footer>
  );
}
