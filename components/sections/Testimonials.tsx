import { SectionHead } from "@/components/ui/SectionHead"
import { GlassCard } from "@/components/ui/GlassCard"
import { DeltaChip } from "@/components/ui/DeltaChip"

const QUOTES = [
  {
    initials: "CS",
    quote:
      "«Queríamos agradecerte por todo el apoyo con Ads durante este casi un año. Hemos logrado crecer tanto en el mercado B2B con SlotFlex como en el B2C con ClassFlex: más tráfico, seguidores, clientes y descargas de nuestra aplicación. Queríamos reconocer el gran trabajo que has hecho.»",
    name: "Equipo ClassFlex & SlotFlex",
    role: "Apps de gestión fitness — Costa Rica",
    delta: "+2 clientes/sem",
    deltaTone: "gain" as const,
  },
  {
    initials: "IH",
    quote:
      "«Según los números hasta la fecha tenemos un retorno de inversión de 2×: lo invertido en ads lo recuperamos al doble, y llevamos apenas 30 días trabajando. Tenemos ya 3 fechas llenas de una semana y se llenaron en cuestión de 4 días.»",
    name: "Innerpath Holistic",
    role: "Terapia de sonido, yoga y medicina alternativa",
    delta: "2× ROI",
    deltaTone: "gain" as const,
  },
  {
    initials: "AT",
    quote:
      "«Agradecerle por el push durante este tiempo en tráfico, el cual también se ha visto reflejado en el posicionamiento de marca y crecimiento de clientes. Empezamos la campaña hace 2 días y ya tiene 54 seguidores y 3 clientes más en el estudio.»",
    name: "Alonso y Vinicio Tenorio",
    role: "HERB Move Studio — pilates y fitness boutique",
    delta: "+3k seguidores",
    deltaTone: "cost" as const,
  },
  {
    initials: "MB",
    quote:
      "«Estamos bastante contentos con el desempeño de los ads y la manera en la que se han estado dirigiendo al público meta. Tu trabajo es excelente: se nos ha movido el contenido súper bien y logramos llegar a los 5k. Esperamos seguir trabajando y creciendo juntos.»",
    name: "Beto Salgado y Caterina",
    role: "Marbella — moda brasileña de alta gama",
    delta: "5k+ comunidad",
    deltaTone: "cost" as const,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="scroll-mt-20 py-24 md:py-32" aria-labelledby="testimonios-title">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHead
          index="05"
          eyebrow="Testimonios"
          title={<span id="testimonios-title">Lo que dicen quienes vieron los números</span>}
          sub="Mensajes reales de clientes activos — las cuentas y las cifras se pueden verificar."
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {QUOTES.map((q, i) => (
            <GlassCard key={q.name} delay={(i % 2) * 0.1} className="flex h-full flex-col gap-6">
              {/* Línea de acento — luz dorada sangrando en la oscuridad */}
              <span
                className="h-px w-12 bg-gradient-to-r from-accent to-transparent shadow-[0_0_12px_rgba(212,175,55,0.5)]"
                aria-hidden="true"
              />
              <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-foreground/85">
                {q.quote}
              </blockquote>
              <div className="flex items-center justify-between gap-4 border-t border-white/8 pt-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-secondary/25 bg-secondary/10">
                    <span className="font-display text-xs font-medium text-secondary">{q.initials}</span>
                  </span>
                  <div>
                    <div className="font-display text-sm font-medium tracking-tight text-foreground">
                      {q.name}
                    </div>
                    <div className="text-muted-foreground mt-0.5 text-xs">{q.role}</div>
                  </div>
                </div>
                <DeltaChip tone={q.deltaTone} className="hidden xl:inline-flex">
                  {q.delta}
                </DeltaChip>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
