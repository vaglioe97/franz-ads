import type { Metadata } from "next"
import About from "@/components/sections/About"

export const metadata: Metadata = {
  title: "Sobre Franz — Franz Ads | Franz Matamoros",
  description:
    "La trayectoria de Franz Matamoros: cuentas de General Motors y Unilever en Publicis Groupe y MullenLowe Group, y hoy consultor independiente de paid media y growth.",
}

export default function SobrePage() {
  return (
    <main className="pt-16">
      <About />
    </main>
  )
}
