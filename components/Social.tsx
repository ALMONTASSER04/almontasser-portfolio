import { useTranslations } from "next-intl";

const PLATFORMS = [
  {
    name: "Facebook",
    color: "#1877F2",
    icon: <path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46H16.5V4.34C16.2 4.3 15.2 4.2 14 4.2c-2.4 0-4 1.47-4 4.16V10.5H7.5v3H10V21h3.5z" />,
    link: "https://web.facebook.com/al.montasser.jh"
  },
  {
    name: "Instagram",
    color: "#E1306C",
    icon: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    link: "https://www.instagram.com/al.montasser.jh"
  },
  {
    name: "TikTok",
    color: "#111827",
    icon: <path d="M14 4v9.5a3 3 0 11-2.5-2.95V8a5 5 0 105 5V9.2a6.3 6.3 0 003.5 1.1V7.3A3.8 3.8 0 0117 4h-3z" />,
    link: "https://www.tiktok.com/@al.montasser.jh"
  },
  {
    name: "LinkedIn",
    color: "#0A66C2",
    icon: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
        <circle cx="8" cy="8.3" r="1.1" fill="currentColor" stroke="none" />
        <path d="M8 11v6M12 11v6M12 13.5c0-1.5 1-2.5 2.3-2.5S16.5 12 16.5 13.5V17" fill="none" />
      </>
    ),
  },
];

export default function Social() {
  const t = useTranslations("social");

  return (
    <section className="bg-parchment py-16">
      <div className="max-w-content mx-auto px-5 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-extrabold text-ink mb-10">
          {t("title")}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {PLATFORMS.map((p) => (
            <a
              key={p.name}
              href="#"
              className="reveal flex items-center gap-3 rounded-lg px-5 py-3 text-white font-semibold text-sm hover:opacity-90 transition-opacity min-w-[180px] justify-center"
              style={{ backgroundColor: p.color }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                {p.icon}
              </svg>
              {t("follow")}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
