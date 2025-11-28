import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Routes from "@/components/routes"
import Calculator from "@/components/calculator"
import ApplicationForm from "@/components/application-form"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Services />
      <Routes />
      <Calculator />
      <ApplicationForm />
      <Footer />
    </main>
  )
}
