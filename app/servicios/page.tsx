import type { Metadata } from "next"
import Services from "@/components/sections/Services"
import Method from "@/components/sections/Method"

export const metadata: Metadata = {
  title: "Servicios — Franz Ads | Meta Ads, TikTok Ads y contenido",
  description:
    "Meta Ads, TikTok Ads y sistemas de contenido con honorarios fijos mensuales, reportes de resultados y atención directa del estratega — más rentable que una agencia.",
}

export default function ServiciosPage() {
  return (
    <main className="pt-16">
      <Services />
      <Method />
    </main>
  )
}
