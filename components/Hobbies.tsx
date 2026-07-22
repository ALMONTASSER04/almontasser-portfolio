import { useTranslations } from "next-intl";

const ICONS: JSX.Element[] = [
  <path key="1" d="M4 4h16v14H4zM4 8h16M8 12h8M8 15h5" />, // programming
  <path key="2" d="M4 5.5A2.5 2.5 0 016.5 3H12v18H6.5A2.5 2.5 0 014 18.5v-13zM20 5.5A2.5 2.5 0 0017.5 3H12v18h5.5a2.5 2.5 0 002.5-2.5v-13z" />, // reading
  <path key="3" d="M6.5 12h11M4 12a2.5 2.5 0 015 0m10 0a2.5 2.5 0 00-5 0M2 12h2m18 0h-2" />, // sports/dumbbell
  <path key="4" d="M3 20l5-11 4 6 3-5 6 10H3z" />, // travel/mountains
  <path key="5" d="M4 7h3l2-2h6l2 2h3v12H4V7zM12 17a4 4 0 100-8 4 4 0 000 8z" />, // photography
  <path key="6" d="M12 2v2m0 16v2M4 12H2m20 0h-2M6 6l-1.4-1.4M19.4 19.4L18 18M6 18l-1.4 1.4M19.4 4.6L18 6M12 7a5 5 0 100 10 5 5 0 000-10z" />, // self dev/light
];

export default function Hobbies() {
  const t = useTranslations("hobbies");
  const items = t.raw("items") as { title: string; text: string }[];

  return (
    <section id="hobbies" className="bg-ink py-20 md:py-28">
      <div className="max-w-content mx-auto px-5">
        <div className="text-center mb-14 reveal">
          <p className="eyebrow text-gilt text-xs font-semibold uppercase mb-3">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-parchment">
            {t("title")}
          </h2>
          <div className="mt-3 w-16 h-[2px] bg-gilt mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="reveal bg-moss/50 border border-gilt/10 rounded-lg p-6 text-center hover:border-gilt/40 transition-colors"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-gilt/10 flex items-center justify-center mb-4">
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
                  {ICONS[i % ICONS.length]}
                </svg>
              </div>
              <h3 className="text-parchment font-bold mb-1.5">{item.title}</h3>
              <p className="text-parchment/60 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
