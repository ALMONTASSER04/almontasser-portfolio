import { useTranslations } from "next-intl";

const GRADIENTS = [
  "from-[#1E2E27] to-[#0E1A16]",
  "from-[#8E6E2B] to-[#3d2f13]",
  "from-[#2b3f4f] to-[#0E1A16]",
  "from-[#4a3221] to-[#1E2E27]",
  "from-[#3a2a12] to-[#0E1A16]",
];

export default function Portfolio() {
  const t = useTranslations("portfolio");
  const items = t.raw("items") as { name: string; tag: string }[];

  return (
    <section id="portfolio" className="bg-parchment py-20 md:py-28">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.name}
              className="reveal group rounded-lg overflow-hidden border border-clay/10 bg-white hover:shadow-xl transition-shadow"
            >
              <div
                className={`relative h-40 bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} flex items-center justify-center`}
              >
                <span className="font-display text-parchment text-2xl font-bold tracking-wide opacity-80">
                  {item.name}
                </span>
                <span className="absolute top-3 start-3 text-[10px] uppercase tracking-wider text-gilt bg-ink/60 rounded-full px-2 py-1">
                  {item.tag}
                </span>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="font-semibold text-ink text-sm">{item.name}</span>
                <span className="w-7 h-7 rounded-full border border-gilt/50 flex items-center justify-center text-gilt group-hover:bg-gilt group-hover:text-ink transition-colors">
                  +
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <a
            href="#contact"
            className="inline-block rounded-full bg-gilt text-ink font-semibold text-sm px-7 py-3 hover:bg-giltDeep hover:text-parchment transition-colors"
          >
            {t("more")}
          </a>
        </div>
      </div>
    </section>
  );
}
