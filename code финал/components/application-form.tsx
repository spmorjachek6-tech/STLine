"use client"

import type React from "react"
import { useState } from "react"
import { Mail } from "lucide-react"
import { useLanguage } from "@/lib/use-language"
import { translations } from "@/lib/translations"

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.en

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      console.log("[v0] Submitting form data:", formData)

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      console.log("[v0] Server response:", data)

      if (data.success) {
        // Открываем почтовый клиент пользователя с предзаполненными данными
        if (data.mailtoLink) {
          window.location.href = data.mailtoLink
        }

        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", comment: "" })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      alert("Ошибка отправки заявки. Пожалуйста, свяжитесь с нами напрямую по email: stline81@gmail.com")
    }
  }

  return (
    <section id="form" className="w-full py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Mail className="w-8 h-8 text-accent" />
            {t.formTitle}
          </h2>
          <p className="text-lg text-primary-foreground/90">{t.formDesc}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-primary/90 rounded-lg shadow-lg p-8 border border-primary-foreground/10 max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-2">{t.yourName} *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t.yourName}
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">{t.email} *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">{t.phoneNumber} *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+372 5560 6035"
              className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-semibold mb-2">{t.comments}</label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder={t.describeNeeds}
              rows={4}
              className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-bold text-lg hover:opacity-90 transition"
          >
            {t.sendRequest}
          </button>

          {submitted && (
            <div className="mt-4 p-4 bg-accent/20 border border-accent rounded-lg text-center text-accent-foreground font-semibold">
              {t.thankYou}
            </div>
          )}

          <p className="text-sm text-primary-foreground/70 text-center mt-4">{t.individualConditions}</p>
        </form>
      </div>
    </section>
  )
}
