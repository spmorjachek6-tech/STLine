"use client"

import { Truck, Package, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/lib/use-language"
import { translations } from "@/lib/translations"

export default function Services() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.en

  const services = [
    {
      icon: Truck,
      titleKey: "consolidatedShipments",
      descKey: "consolidatedDesc",
    },
    {
      icon: Package,
      titleKey: "fullVehicle",
      descKey: "fullVehicleDesc",
    },
    {
      icon: MapPin,
      titleKey: "rotterdamWarehouse",
      descKey: "rotterdamDesc",
    },
    {
      icon: Clock,
      titleKey: "istanbulHub",
      descKey: "istanbulDesc",
    },
  ]

  return (
    <section id="services" className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.servicesTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.servicesDesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-8 shadow-md hover:shadow-xl transition border border-border"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t[service.titleKey as keyof typeof t]}</h3>
                <p className="text-muted-foreground">{t[service.descKey as keyof typeof t]}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
