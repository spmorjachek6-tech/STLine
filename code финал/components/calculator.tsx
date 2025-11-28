"use client"

import { useState } from "react"
import { CalculatorIcon } from "lucide-react"
import { useLanguage } from "@/lib/use-language"
import { translations } from "@/lib/translations"

export default function Calculator() {
  const [weight, setWeight] = useState("")
  const [volume, setVolume] = useState("")
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.en

  const calculate = () => {
    const w = Number.parseFloat(weight) || 0
    const v = Number.parseFloat(volume) || 0

    // Reference points for scaling:
    // Minimum: 200 kg, 1 m³ = 500 EUR
    // Maximum: 25000 kg, 100 m³ = 6000 EUR
    const minWeight = 200
    const minVolume = 1
    const minPrice = 500

    const maxWeight = 25000
    const maxVolume = 100
    const maxPrice = 6000

    // Calculate volume weight (1 m³ = 167 kg standard ratio for road transport)
    const volumeWeight = v * 167

    // Use the greater of actual weight or volume weight
    const billableWeight = Math.max(w, volumeWeight)

    // Calculate billable volume weight equivalent from reference points
    const minBillableWeight = Math.max(minWeight, minVolume * 167)
    const maxBillableWeight = Math.max(maxWeight, maxVolume * 167)

    // Linear interpolation between min and max reference points
    const ratio = (billableWeight - minBillableWeight) / (maxBillableWeight - minBillableWeight)
    const calculatedPrice = minPrice + ratio * (maxPrice - minPrice)

    // Ensure minimum charge of 500 EUR and cap at reference max
    return Math.max(minPrice, Math.min(calculatedPrice, maxPrice))
  }

  const cost = calculate()

  return (
    <section id="calculator" className="w-full py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <CalculatorIcon className="w-8 h-8 text-accent" />
            {t.calculateTitle}
          </h2>
          <p className="text-lg text-muted-foreground">{t.calculateDesc}</p>
        </div>

        <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold mb-2">{t.weight}</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder={t.enterWeight}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">{t.volume}</label>
              <input
                type="number"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                placeholder={t.enterVolume}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="flex flex-col justify-end">
              <div className="bg-accent/10 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">{t.estimatedCost}</p>
                <p className="text-3xl font-bold text-accent">€{cost.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center">{t.estimateNote}</p>
        </div>
      </div>
    </section>
  )
}
