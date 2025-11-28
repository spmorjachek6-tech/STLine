"use client"

import Link from "next/link"
import { MessageCircle, Phone, Send, Video } from "lucide-react"
import { useLanguage } from "@/lib/use-language"
import { translations } from "@/lib/translations"

export default function ContactsPage() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.en

  const contactButtons = [
    {
      name: "Telegram",
      icon: Send,
      href: "https://t.me/+37255606035",
      color: "bg-[#0088cc] hover:bg-[#0077b3]",
    },
    {
      name: "Viber",
      icon: Phone,
      href: "viber://chat?number=%2B37255606035",
      color: "bg-[#7360f2] hover:bg-[#6251d3]",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/37255606035",
      color: "bg-[#25D366] hover:bg-[#20ba5a]",
    },
    {
      name: "Microsoft Teams",
      icon: Video,
      href: "https://teams.microsoft.com/l/chat/0/0?users=stline81@gmail.com",
      color: "bg-[#6264A7] hover:bg-[#545693]",
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 px-4 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">STLine</span>
              <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center">
                <span className="text-accent font-bold">S</span>
              </div>
            </div>
          </Link>
          <Link href="/" className="text-sm hover:text-accent transition">
            {t.contact === "Contact"
              ? "← Back to Home"
              : t.contact === "Контакты"
                ? "← Назад на главную"
                : t.contact === "Kontaktid"
                  ? "← Tagasi avalehele"
                  : t.contact === "Kontakti"
                    ? "← Atpakaļ uz sākumlapu"
                    : "← Atgal į pradžią"}
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Company Logo */}
        <div className="mb-8 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl md:text-5xl font-bold text-primary">STLine</span>
            <div className="w-14 h-14 rounded-full border-4 border-accent flex items-center justify-center">
              <span className="text-accent font-bold text-2xl">S</span>
            </div>
          </div>
          <p className="text-xl text-muted-foreground font-semibold">{t.transportLogistics}</p>
        </div>

        {/* Contact Information */}
        <div className="mb-12 text-center max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-foreground">{t.contactInfo}</h1>
          <div className="space-y-3 text-foreground">
            <p className="text-lg font-semibold">{t.stlineRegular}</p>
            <p className="text-sm text-muted-foreground">{t.regNumber}</p>
            <p className="text-sm">{t.address}</p>
            <p className="text-lg font-semibold text-accent">{t.phone}</p>
            <p className="text-sm">
              <a href="mailto:stline81@gmail.com" className="text-accent hover:underline">
                stline81@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Messenger Buttons */}
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
            {language === "en"
              ? "Contact us via messenger"
              : language === "ru"
                ? "Свяжитесь с нами через мессенджер"
                : language === "et"
                  ? "Võtke meiega ühendust messengeri kaudu"
                  : language === "lv"
                    ? "Sazinieties ar mums caur ziņojumapmaiņas lietotni"
                    : "Susisiekite su mumis per žinučių programą"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {contactButtons.map((button) => {
              const Icon = button.icon
              return (
                <a
                  key={button.name}
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${button.color} text-white rounded-full aspect-square p-6 flex flex-col items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl`}
                >
                  <Icon size={32} strokeWidth={2} />
                  <span className="text-sm font-bold text-center leading-tight">{button.name}</span>
                </a>
              )
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-6 px-4 text-center text-sm">
        <p>
          © 2025 {t.stlineRegular}. {t.allRights}
        </p>
      </footer>
    </div>
  )
}
