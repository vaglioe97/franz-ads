import Image from "next/image"
import { SectionHead } from "@/components/ui/SectionHead"
import { Reveal } from "@/components/ui/Reveal"
import { Metric } from "@/components/ui/Metric"

const CAREER = [
  {
    years: "2022–2025",
    company: "Publicis Groupe",
    role: "Account Manager → Senior Account Manager",
    note: "Campañas para el mercado estadounidense y cuentas de alto perfil de General Motors: Buick, Cadillac y GMC.",
  },
  {
    years: "2025",
    company: "Publimark (MullenLowe Group)",
    role: "Media Planner",
    note: "Estrategia y planificación de medios digitales para marcas de Unilever Centroamérica: Sedal, Dove Hair, eGo, TRESemmé y Savilé.",
  },
  {
    years: "2025–2026",
    company: "Lúdica",
    role: "Growth Strategist & Media Buyer",
    note: "Resultados para empresas costarricenses en diversos sectores, con campañas orientadas a adquisición de clientes y escalamiento.",
  },
  {
    years: "2026–hoy",
    company: "Franz Ads",
    role: "Consultor independiente — Paid Media & Growth",
    note: "Estrategia de medios, crecimiento de negocios y sistemas de adquisición de clientes.",
  },
]

export default function About() {
  return (
    <section id="sobre" className="relative scroll-mt-20 py-24 md:py-32" aria-labelledby="sobre-title">
      {/* Banda elevada — la segunda capa de oscuridad */}
      <div className="absolute inset-0 border-y border-white/8 bg-background-alt" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <SectionHead
          eyebrow="Operador, no intermediario"
          title={<span id="sobre-title">¿Quién es Franz Matamoros?</span>}
        />

        <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <div className="flex max-w-xl flex-col gap-6 text-foreground/85">
              {/* El retrato — Franz de frente, con el glow dorado de la marca */}
              <div className="relative mb-2 w-full max-w-sm overflow-hidden rounded-xl border border-white/8 shadow-[0_0_40px_rgba(212,175,55,0.12)]">
                <Image
                  src="/franz.jpeg"
                  alt="Franz Matamoros, Paid Media Strategist y Growth Consultant"
                  width={1067}
                  height={1600}
                  className="aspect-[4/5] h-auto w-full object-cover object-top"
                  sizes="(min-width: 1024px) 384px, 100vw"
                />
              </div>
              <p>
                Aprendí este oficio en agencias globales: gestioné cuentas de alto perfil de
                General Motors para el mercado estadounidense y lideré la planificación de medios
                digitales para marcas de Unilever en Centroamérica.
              </p>
              <p>
                Decidí emprender de forma independiente tras consolidar resultados consistentes en
                agencias globales y regionales. Hoy aplico esa misma disciplina — cada hipótesis se
                testea, cada resultado se reporta — a negocios que esperan que cada dólar rinda
                cuentas.
              </p>
              <p>
                Conmigo no hay intermediarios: la persona con la que hablás es la misma que opera
                tu cuenta, revisa tus números y te responde el fin de semana si hace falta.
              </p>

              <div
                className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/8 pt-8"
                role="group"
                aria-label="Trayectoria en cifras"
              >
                <Metric label="Invertidos en Meta Ads" value={50} prefix="$" suffix="k+" size="md" align="start" />
                <Metric label="Años en paid media" value={4} suffix="+" size="md" align="start" tone="neutral" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ol className="flex flex-col gap-8 border-t border-white/8 pt-10 lg:border-t-0 lg:border-l lg:pt-2 lg:pl-12">
              {CAREER.map((step) => (
                <li key={step.years} className="flex flex-col gap-1.5">
                  <span className="mono-label text-secondary">{step.years}</span>
                  <span className="font-display text-lg font-medium tracking-tight text-foreground">
                    {step.company}
                  </span>
                  <span className="mono-label text-accent text-[0.62rem]">{step.role}</span>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.note}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
