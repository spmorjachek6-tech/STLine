"use client"

import { useState } from "react"
import { Globe, ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/use-language"

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "et", name: "Eesti", flag: "🇪🇪" },
  { code: "lv", name: "Latviešu", flag: "🇱🇻" },
  { code: "lt", name: "Lietuvių", flag: "🇱🇹" },
]

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition text-primary-foreground text-sm font-medium"
      >
        <Globe size={16} />
        <span>{currentLanguage?.flag}</span>
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <ChevronDown size={14} className={`transition ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-primary border border-primary-foreground/20 rounded-md shadow-lg z-50 min-w-[140px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-primary-foreground/10 transition text-sm ${
                language === lang.code ? "bg-accent text-accent-foreground" : "text-primary-foreground"
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
