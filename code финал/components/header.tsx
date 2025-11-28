"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/use-language"
import { translations } from "@/lib/translations"
import LanguageSwitcher from "./language-switcher"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.en

  return (
    <header className="fixed top-0 w-full bg-primary text-primary-foreground z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#" className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">STLine</span>
            <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center">
              <span className="text-accent font-bold">S</span>
            </div>
          </div>
          <span className="text-xs text-accent font-semibold hidden sm:block">{t.transportLogistics}</span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          <a href="#services" className="hover:text-accent transition">
            {t.services}
          </a>
          <a href="#routes" className="hover:text-accent transition">
            {t.routes}
          </a>
          <a href="#calculator" className="hover:text-accent transition">
            {t.calculate}
          </a>
          <Link href="/contacts" className="hover:text-accent transition">
            {t.contact}
          </Link>
          <a
            href="#form"
            className="bg-accent text-accent-foreground px-6 py-2 rounded-md hover:opacity-90 transition font-semibold"
          >
            {t.applyNow}
          </a>
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <LanguageSwitcher />
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-primary/95 border-t border-primary-foreground/20 p-4 flex flex-col gap-4">
          <a href="#services" className="hover:text-accent transition py-2">
            {t.services}
          </a>
          <a href="#routes" className="hover:text-accent transition py-2">
            {t.routes}
          </a>
          <a href="#calculator" className="hover:text-accent transition py-2">
            {t.calculate}
          </a>
          <Link href="/contacts" className="hover:text-accent transition py-2">
            {t.contact}
          </Link>
          <a
            href="#form"
            className="bg-accent text-accent-foreground px-4 py-2 rounded-md hover:opacity-90 transition font-semibold text-center"
          >
            {t.applyNow}
          </a>
        </nav>
      )}
    </header>
  )
}
