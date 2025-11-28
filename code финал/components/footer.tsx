"use client"

import { Mail, Phone, MapPin, MessageCircle, Send, Headphones } from "lucide-react"
import { useLanguage } from "@/lib/use-language"
import { translations } from "@/lib/translations"

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.en

  const socialLinks = [
    {
      name: "Telegram",
      url: "https://t.me/stlsergey",
      icon: Send,
      color: "hover:text-blue-400",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/37255606035",
      icon: MessageCircle,
      color: "hover:text-green-400",
    },
    {
      name: "Viber",
      url: "viber://contact?number=37255606035",
      icon: Headphones,
      color: "hover:text-purple-400",
    },
    {
      name: "Teams",
      url: "https://teams.microsoft.com/l/chat/0/0?users=spmorjachek6@gmail.com",
      icon: MessageCircle,
      color: "hover:text-blue-500",
    },
  ]

  return (
    <footer className="w-full bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">STLine</span>
              <div className="w-6 h-6 rounded-full border-2 border-accent flex items-center justify-center">
                <span className="text-accent text-sm font-bold">S</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">{t.aboutDesc}</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    title={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-primary-foreground/70 transition ${social.color}`}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.contactInfo}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-1 text-accent flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">{t.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-1 text-accent flex-shrink-0" />
                <a href="mailto:stline81@gmail.com" className="text-primary-foreground/80 hover:text-accent transition">
                  stline81@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80 text-xs">
                  <p>{t.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.company}</h3>
            <div className="text-sm text-primary-foreground/80 space-y-1">
              <p>
                <strong>{t.stlineRegular}</strong>
              </p>
              <p>{t.regNumber}</p>
              <p className="pt-2">Business Hours:</p>
              <p>Monday - Friday: 8:00 - 18:00 EET</p>
              <p>Saturday - Sunday: By request</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/70">© 2025 STLine OÜ. {t.allRights}</p>
            <div className="flex gap-4 mt-4 md:mt-0 text-sm text-primary-foreground/70">
              <a href="#" className="hover:text-accent transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
