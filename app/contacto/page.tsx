import type { Metadata } from "next"
import Faq from "@/components/sections/Faq"
import Apply from "@/components/sections/Apply"

export const metadata: Metadata = {
  title: "Contacto — Franz Ads | Agendá tu auditoría inicial",
  description:
    "Agendá una sesión de auditoría inicial: reviso tu situación, te digo con franqueza qué mejoraría y cómo trabajaríamos juntos. Respuesta en menos de 48 horas hábiles.",
}

export default function ContactoPage() {
  return (
    <main className="pt-16">
      <Faq />
      <Apply />
    </main>
  )
}
