import { useTranslations } from "next-intl";

const ICON_KEYS = ["name", "degree", "specialty", "work", "interest", "goal"] as const;

const ICONS: Record<(typeof ICON_KEYS)[number], JSX.Element> = {
  name: (
    <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20c0-4 3.6-7 8-7s8 3 8 7" />
  ),
  degree: (
    <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3zM4.5 9.75v4.5c0 1.5 3.5 3.75 7.5 3.75s7.5-2.25 7.5-3.75v-4.5" />
  ),
  specialty: <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5l-2 2m-9 9l-2 2m13-2l-2-2m-9-9l-2-2" />,
  work: (
    <path d="M4 8h16v11H4V8zM8 8V6a2 2 0 012-2h4a2 2 0 012 2v2" />
  ),
  interest: <path d="M12 2l2.4 6.6L21 10l-5 4.4L17.4 21 12 17.3 6.6 21 8 14.4 3 10l6.6-1.4L12 2z" />,
  goal: (
    <path d="M12 21c4-2 8-5.5 8-11a8 8 0 10-16 0c0 5.5 4 9 8 11z" />
  ),
};

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="bg-parchment py-20 md:py-28">
      <div className="max-w-content mx-auto px-5">
        <div className="text-center mb-14 reveal">
          <p className="eyebrow text-clay text-xs font-semibold uppercase mb-3">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink">
            {t("title")}
          </h2>
          <div className="mt-3 w-16 h-[2px] bg-gilt mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ICON_KEYS.map((key) => (
            <div
              key={key}
              className="reveal bg-white rounded-lg border border-clay/10 p-6 hover:border-gilt/50 hover:shadow-lg transition-all"
            >
              <div className="w-11 h-11 rounded-full bg-ink/5 flex items-center justify-center mb-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A24B"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {ICONS[key]}
                </svg>
              </div>
              <p className="text-xs font-semibold text-clay uppercase tracking-wide mb-1">
                {t(`${key}.label`)}
              </p>
              <p className="text-ink font-medium leading-snug">{t(`${key}.value`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
