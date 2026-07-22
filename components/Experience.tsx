import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("experience");
  const items = t.raw("items") as { title: string; text: string }[];

  return (
    <section id="experience" className="bg-ink py-20 md:py-28">
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

        <div className="relative">
          <div className="hidden md:block absolute top-6 start-0 end-0 h-px bg-gilt/25" />
          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {items.map((item, i) => (
              <div key={item.title} className="reveal relative">
                <div className="hidden md:flex justify-center mb-6">
                  <span className="relative z-10 w-3 h-3 rounded-full bg-gilt ring-4 ring-ink" />
                </div>
                <div className="bg-moss/60 border border-gilt/15 rounded-lg p-6 h-full">
                  <span className="text-gilt/50 font-display text-3xl font-bold block mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-parchment font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-parchment/65 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
