import { TrendingUp, Clapperboard, Users } from "lucide-react"
import { SectionHead } from "@/components/ui/SectionHead"
import { GlassCard } from "@/components/ui/GlassCard"
import { Reveal } from "@/components/ui/Reveal"

const SERVICES = [
  {
    id: "01",
    icon: TrendingUp,
    title: "Meta Ads — Facebook e Instagram",
    body: "Especialista en aumentar números en redes y en ventas por medio de Meta: desde Facebook e Instagram consigo clientes potenciales directo a tu WhatsApp o al canal que prefieras, con campañas medidas en resultados.",
    items: [
      "Estrategia y estructura de campañas",
      "Leads directo a tu WhatsApp o canal",
      "Optimización y escalado semanal",
      "Reportes mensuales de resultados",
    ],
  },
  {
    id: "02",
    icon: Clapperboard,
    title: "TikTok Ads — la red de moda",
    body: "Pautar en TikTok es donde el contenido se vuelve más viral y da más reconocimiento al producto o servicio. Si las marcas grandes ya pautan en TikTok, ¿por qué vos no?",
    items: [
      "Campañas de alcance y viralidad",
      "Reconocimiento de producto y marca",
      "Contenido adaptado al formato",
      "Medición de resultados cada mes",
    ],
  },
  {
    id: "03",
    icon: Users,
    title: "Contenido y equipo de marketing",
    body: "Guía para contenido ganador en redes: que enganche y que venda, con los tips para hacer contenido duradero y eficaz. Y si además necesitás producción o cierre en ventas, tengo la gente indicada a menor costo.",
    items: [
      "Guía de contenido ganador",
      "Tips para contenido duradero y eficaz",
      "Equipo de contenido y cierre de ventas",
      "Menor costo que una agencia",
    ],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 py-24 md:py-32" aria-labelledby="servicios-title">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHead
          index="01"
          eyebrow="Servicios"
          title={<span id="servicios-title">¿Cuáles serían mis servicios?</span>}
          sub="No vendo horas ni entregables: diseño sistemas de adquisición de clientes. Pauta en Meta y TikTok, sistemas de contenido y, si lo necesitás, el equipo completo detrás."
        />

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {SERVICES.map((s, i) => (
            <GlassCard key={s.id} delay={i * 0.1} className="flex flex-col gap-5">
              <div className="flex items-center justify-between pt-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent/20 bg-accent/10">
                  <s.icon className="text-accent" size={20} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span className="mono-label text-muted-foreground">{s.id}</span>
              </div>
              <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
                {s.title}
              </h3>
              <p className="text-muted-foreground flex-1 text-sm leading-relaxed">{s.body}</p>
              <ul className="flex flex-col gap-3 border-t border-white/8 pt-6">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span
                      className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mono-label text-muted-foreground mt-12 text-center">
            Honorarios fijos mensuales · El primer paso es una sesión de auditoría inicial
          </p>
        </Reveal>
      </div>
    </section>
  )
}
