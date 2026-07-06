import type { Metadata } from "next"
import Cases from "@/components/sections/Cases"
import Testimonials from "@/components/sections/Testimonials"
import Evidence from "@/components/sections/Evidence"

export const metadata: Metadata = {
  title: "Resultados — Franz Ads | Casos reales con cifras verificables",
  description:
    "2× de retorno en 30 días, agendas llenas en 4 días y comunidades que crecen: casos reales de Meta Ads y TikTok Ads con capturas y testimonios verificables.",
}

export default function ResultadosPage() {
  return (
    <main className="pt-16">
      <Cases />
      <Testimonials />
      <Evidence />
    </main>
  )
}
