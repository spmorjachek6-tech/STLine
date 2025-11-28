"use client"

import { useLanguage } from "@/lib/use-language"
import { translations } from "@/lib/translations"
import Image from "next/image"

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.en

  return (
    <section className="hero-section relative w-full h-screen text-primary-foreground overflow-hidden pt-20">
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex-1 max-w-2xl z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {t.heroTitle.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-accent">{t.heroTitle.split(" ").pop()}</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">{t.heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#calculator"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition text-center"
            >
              {t.calculate}
            </a>
            <a
              href="#form"
              className="border-2 border-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition text-center"
            >
              {t.applyNow}
            </a>
          </div>
        </div>

        <div className="container-image-wrapper flex-1 relative hidden lg:flex items-center justify-center">
          <Image
            src="/images/container.png"
            alt="Shipping Container"
            width={600}
            height={450}
            className="opacity-90"
            priority
          />
        </div>
      </div>
    </section>
  )
}
