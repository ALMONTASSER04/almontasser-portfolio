import { useTranslations } from "next-intl";

export default function ContactCTA() {
  const t = useTranslations("cta");
  const items = t.raw("items") as string[];

  return (
    <section id="contact" className="bg-ink py-16 md:py-20">
      <div className="max-w-content mx-auto px-5 grid md:grid-cols-2 gap-8">
        <div className="reveal relative rounded-lg overflow-hidden bg-moss/60 border border-gilt/15 p-8 md:p-10 flex flex-col justify-center">
          <div
            className="pointer-events-none absolute -bottom-10 -end-10 w-56 h-56 rounded-full opacity-[0.12]"
            style={{ background: "radial-gradient(circle, #C9A24B 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-parchment mb-3">
            {t("title")}
          </h2>
          <p className="text-parchment/70 text-sm mb-5">{t("subtitle")}</p>
          <ul className="space-y-2.5 mb-7">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-parchment/85 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#contact-direct"
            className="self-start rounded-full bg-gilt text-ink font-semibold text-sm px-6 py-3 hover:bg-parchment transition-colors"
          >
            {t("button")}
          </a>
        </div>

        <div id="contact-direct" className="reveal bg-moss/40 border border-gilt/10 rounded-lg p-8 md:p-10 flex flex-col justify-center gap-4">
          <h3 className="font-display text-xl font-bold text-parchment mb-2">
            {t("directTitle")}
          </h3>

          <a
            href="https://wa.me/963992186376"
            className="flex items-center justify-between rounded-lg bg-white/5 hover:bg-white/10 border border-gilt/10 px-5 py-4 transition-colors" target="_blank" 
          >
            <span className="flex items-center gap-3 text-parchment font-medium text-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1120.2 12 8.2 8.2 0 0112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1s-.6.8-.8 1c-.1.2-.3.2-.6.1a6.7 6.7 0 01-2-1.2 7.4 7.4 0 01-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.4a.4.4 0 000-.4c-.1-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.8 12 12 0 004.6 4c.6.3 1.1.4 1.5.6a3.6 3.6 0 001.6.1 2.6 2.6 0 001.7-1.2c.2-.3.2-.6.1-.7z" />
              </svg>
              WhatsApp
            </span>
            <span className="text-gilt text-xs font-semibold">{t("whatsapp")}</span>
          </a>

          <a
            href="https://t.me/AlMomtasserBellah"
            className="flex items-center justify-between rounded-lg bg-white/5 hover:bg-white/10 border border-gilt/10 px-5 py-4 transition-colors" target="_blank"
          >
            <span className="flex items-center gap-3 text-parchment font-medium text-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#29A9EA">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.6 6.8l-1.6 7.6c-.1.5-.4.7-.9.4l-2.4-1.8-1.2 1.1c-.1.1-.3.2-.5.2l.2-2.6 4.7-4.3c.2-.2 0-.3-.3-.1l-5.8 3.7-2.5-.8c-.5-.2-.5-.5.1-.7l9.9-3.8c.4-.2.8.1.6.7z" />
              </svg>
              Telegram
            </span>
            <span className="text-gilt text-xs font-semibold">{t("telegram")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
