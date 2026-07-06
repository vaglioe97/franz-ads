import { SectionHead } from "@/components/ui/SectionHead"
import { GlassCard } from "@/components/ui/GlassCard"
import { Metric } from "@/components/ui/Metric"
import { DeltaChip } from "@/components/ui/DeltaChip"
import { BrandsMarquee } from "@/components/ui/BrandsMarquee"

type CaseMetric = {
  label: string
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  tone?: "accent" | "neutral"
}

type CaseStudy = {
  id: string
  industry: string
  delta: string
  deltaTone: "gain" | "cost"
  title: string
  note: string
  metrics: CaseMetric[]
}

const CASES: CaseStudy[] = [
  {
    id: "01",
    industry: "Apps Fitness — ClassFlex & SlotFlex",
    delta: "+2 clientes/semana",
    deltaTone: "gain",
    title: "Dos clientes nuevos por semana para una app de gestión de gimnasios y estudios.",
    note: "Casi un año de campañas en Meta para el B2B (SlotFlex) y el B2C (ClassFlex): instalaciones de app, más suscripciones, más seguidores y clientes capturados también fuera de Costa Rica.",
    metrics: [
      { label: "Clientes nuevos", value: 2, suffix: "/sem" },
      { label: "Meses trabajando", value: 12, prefix: "~", tone: "neutral" },
      { label: "Mercados (B2B+B2C)", value: 2, tone: "neutral" },
    ],
  },
  {
    id: "02",
    industry: "Bienestar — Innerpath Holistic",
    delta: "2× ROI en 30 días",
    deltaTone: "gain",
    title: "Retorno de 2× sobre la pauta en el primer mes para un estudio de terapias de sonido y yoga.",
    note: "Lo invertido en ads se recuperó al doble en 30 días: agendas de la semana llenas en cuestión de 4 días, ventas de servicios de más de $1,000 y más consultas mes a mes.",
    metrics: [
      { label: "ROI en 30 días", value: 2, suffix: "×" },
      { label: "Días en llenar agendas", value: 4, tone: "neutral" },
      { label: "Ticket de servicio", value: 1, prefix: "$", suffix: "k+", tone: "neutral" },
    ],
  },
  {
    id: "03",
    industry: "Fitness boutique — HERB Move",
    delta: "+3k seguidores",
    deltaTone: "gain",
    title: "De 1.6k a 4.6k seguidores en tres meses con menos de $200 al mes.",
    note: "Campañas de tráfico y contenido para un estudio de pilates y gimnasio multifuncional: +54 seguidores y 3 clientes nuevos en los primeros 2 días, y un posicionamiento de marca que se tradujo en más clases agendadas.",
    metrics: [
      { label: "Inversión mensual", value: 200, prefix: "<$", tone: "neutral" },
      { label: "Seguidores", value: 4.6, suffix: "k", decimals: 1 },
      { label: "Meses", value: 3, tone: "neutral" },
    ],
  },
  {
    id: "04",
    industry: "Moda alta gama — Marbella",
    delta: "5k+ de comunidad",
    deltaTone: "cost",
    title: "Más de 3,000 seguidores nuevos y más visitas a la tienda física en tres meses.",
    note: "Tienda de ropa brasileña de alta gama: solo con campañas de tráfico se multiplicaron las visualizaciones de videos y catálogos, creció la comunidad hasta superar los 5k y aumentó el tránsito a la tienda local.",
    metrics: [
      { label: "Seguidores nuevos", value: 3, suffix: "k+" },
      { label: "Comunidad total", value: 5.2, suffix: "k", decimals: 1, tone: "neutral" },
      { label: "Meses", value: 3, tone: "neutral" },
    ],
  },
]

export default function Cases() {
  return (
    <section id="casos" className="scroll-mt-20 py-24 md:py-32" aria-labelledby="casos-title">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHead
          index="01"
          eyebrow="Más ventas, más números"
          title={<span id="casos-title">Los números sobre la mesa</span>}
          sub="De cuentas de General Motors y Unilever en agencia global, a negocios locales que ven retorno en el primer mes. Casos reales, con cuentas y conversaciones verificables."
        />
      </div>

      {/* Marquesina de marcas — credenciales en movimiento */}
      <BrandsMarquee />

      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {CASES.map((c, i) => (
            <GlassCard key={c.id} delay={(i % 2) * 0.1} className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/8 pb-5">
                <span className="mono-label flex items-center gap-3">
                  <span className="text-accent">{c.id}</span>
                  <span className="text-muted-foreground">{c.industry}</span>
                </span>
                <DeltaChip tone={c.deltaTone}>{c.delta}</DeltaChip>
              </div>

              <h3 className="font-display max-w-md text-xl font-medium tracking-tight text-foreground">
                {c.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.note}</p>

              <div className="mt-auto grid grid-cols-3 gap-4 border-t border-white/8 pt-6">
                {c.metrics.map((m) => (
                  <Metric key={m.label} size="md" align="center" {...m} />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        <p className="mono-label text-muted-foreground/70 mt-10 text-center text-[0.62rem]">
          Cuentas y cifras al 1 de julio de 2026 — conversaciones reales de clientes
        </p>
      </div>
    </section>
  )
}
