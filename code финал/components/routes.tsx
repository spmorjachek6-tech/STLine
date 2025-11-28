"use client"

import { MapPin } from "lucide-react"
import { useLanguage } from "@/lib/use-language"
import { translations } from "@/lib/translations"

export default function Routes() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.en

  const routes = [
    {
      titleKey: "europeRoutes",
      locationKey: "rotterdam",
      icon: "🇳🇱",
      featuresKeys: ["consolidationRotterdam", "regularDepartures", "competitiveRates", "professionalHandling"],
    },
    {
      titleKey: "turkeyRoutes",
      locationKey: "istanbul",
      icon: "🇹🇷",
      featuresKeys: ["strategicConsolidation", "directAccess", "fastDispatch", "expertTeam"],
    },
  ]

  return (
    <section id="routes" className="w-full py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.routesTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.routesDesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {routes.map((route, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-2xl transition"
            >
              <div className="bg-gradient-to-r from-primary to-primary/80 p-8">
                <div className="text-5xl mb-4">{route.icon}</div>
                <h3 className="text-3xl font-bold text-primary-foreground mb-2">
                  {t[route.titleKey as keyof typeof t]}
                </h3>
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <MapPin size={18} />
                  <span>{t[route.locationKey as keyof typeof t]}</span>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {route.featuresKeys.map((featureKey, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent font-bold text-lg">✓</span>
                      <span className="text-foreground">{t[featureKey as keyof typeof t]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
