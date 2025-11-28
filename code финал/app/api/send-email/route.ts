import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, phone, comment } = await request.json()

    // В реальном приложении здесь должна быть интеграция с email-сервисом
    // Например: SendGrid, Resend, Nodemailer и т.д.

    // Для демонстрации создаем mailto ссылку
    const mailtoLink = `mailto:stline81@gmail.com?subject=Новая заявка от ${name}&body=Имя: ${name}%0D%0AEmail: ${email}%0D%0AТелефон: ${phone}%0D%0AКомментарий: ${comment}`

    console.log("[v0] Email data received:", { name, email, phone, comment })
    console.log("[v0] mailto link:", mailtoLink)

    return NextResponse.json({
      success: true,
      message: "Заявка получена",
      mailtoLink,
    })
  } catch (error) {
    console.error("[v0] Error processing email:", error)
    return NextResponse.json({ success: false, message: "Ошибка отправки" }, { status: 500 })
  }
}
