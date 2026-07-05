import type { Metadata } from "next"
import "@fontsource-variable/inter"
import "@fontsource-variable/space-grotesk"
import "@fontsource-variable/jetbrains-mono"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ScrollProgress from "@/components/layout/ScrollProgress"

export const metadata: Metadata = {
  title: "Franz Ads — Paid Media Strategist & Growth Consultant | Franz Matamoros",
  description:
    "Estrategias de crecimiento y adquisición de clientes con Meta Ads y TikTok Ads. Honorarios fijos, reportes mensuales y resultados desde el primer mes: +$50k invertidos en Facebook e Instagram. Agendá una auditoría inicial.",
  openGraph: {
    type: "website",
    title: "Franz Ads — Paid Media & Growth",
    description:
      "Primer mes, ves resultados. Ganás más de lo que invertís: Meta Ads, TikTok Ads y sistemas de contenido.",
    locale: "es_CR",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="grain antialiased">
        {/* Orbes ambientales fijos — luz neutra arriba, azul profundo abajo, respirando lento */}
        <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
          <div
            className="animate-breathe absolute -top-40 left-1/2 h-[400px] w-[500px] -translate-x-1/2 rounded-full opacity-[0.04] blur-[150px] md:h-[600px] md:w-[800px]"
            style={{ background: "#94a3b8" }}
          />
          <div
            className="animate-breathe absolute -right-40 bottom-0 h-[300px] w-[400px] rounded-full opacity-[0.05] blur-[120px] [animation-delay:8s] md:h-[500px] md:w-[600px]"
            style={{ background: "#2563eb" }}
          />
        </div>
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
