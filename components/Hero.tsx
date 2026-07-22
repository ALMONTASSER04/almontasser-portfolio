import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="home" className="relative bg-ink overflow-hidden">
      {/* ambient gold arch glow, echoes the doorway motif used later in the CTA */}
      <div
        className="pointer-events-none absolute -top-24 start-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full opacity-[0.10]"
        style={{ background: "radial-gradient(circle, #C9A24B 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-content mx-auto px-5 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 reveal">
          <p className="eyebrow text-gilt text-xs md:text-sm font-semibold uppercase mb-4">
            {t("welcome")}
          </p>
          <h1 className="font-display leading-[1.05]">
            <span className="block text-2xl md:text-3xl text-parchment/80 font-medium mb-1">
              {t("nameLine1")}
            </span>
            <span className="block text-4xl md:text-6xl text-parchment font-extrabold">
              {t("nameLine2")}
            </span>
          </h1>
          <p className="mt-5 text-gilt/90 text-sm md:text-base font-medium">
            {t("roles")}
          </p>
          <p className="mt-5 max-w-md text-parchment/70 text-sm md:text-base leading-relaxed">
            {t("tagline")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-parchment text-ink font-semibold text-sm px-6 py-3 hover:bg-white transition-colors"
            >
              {t("ctaPrimary")}
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-gilt text-gilt font-semibold text-sm px-6 py-3 hover:bg-gilt hover:text-ink transition-colors"
            >
              {t("ctaSecondary")}
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="frame-corner relative w-[240px] h-[300px] md:w-[300px] md:h-[380px]">
            <div className="absolute inset-0 rounded-sm overflow-hidden ring-1 ring-gilt/40 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)]">
              <Image
                src="/images/hero.jpg"
                alt={t("nameLine2")}
                fill
                priority
                sizes="(max-width: 768px) 240px, 300px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
