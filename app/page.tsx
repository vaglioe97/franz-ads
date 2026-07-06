import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Hero from "@/components/sections/Hero"
import { BrandsMarquee } from "@/components/ui/BrandsMarquee"
import { GlassCard } from "@/components/ui/GlassCard"
import { Reveal } from "@/components/ui/Reveal"
import { Button } from "@/components/ui/button"

/* Accesos a las páginas interiores — el mapa del sitio en tres tarjetas */
const EXPLORE = [
  {
    href: "/resultados",
    index: "01",
    title: "Resultados",
    body: "Casos reales con cifras verificables: 2× de retorno en 30 días, agendas llenas y comunidades que crecen — con las capturas que lo respaldan.",
    cta: "Ver los casos",
  },
  {
    href: "/servicios",
    index: "02",
    title: "Servicios",
    body: "Meta Ads, TikTok Ads y sistemas de contenido, con honorarios fijos y las ventajas de trabajar directo con el estratega.",
    cta: "Conocer los servicios",
  },
  {
    href: "/sobre",
    index: "03",
    title: "Sobre Franz",
    body: "De cuentas de General Motors y Unilever en agencias globales, a consultor independiente enfocado en negocios que exigen retorno.",
    cta: "Conocer la trayectoria",
  },
]

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <BrandsMarquee />

      {/* El mapa del sitio — a dónde ir después del hero */}
      <section className="py-24 md:py-32" aria-label="Explorar el sitio">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {EXPLORE.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="group focus-visible:outline-none"
              >
                <GlassCard
                  delay={i * 0.1}
                  className="flex h-full flex-col gap-5 group-focus-visible:border-accent/50"
                >
                  <span className="mono-label text-accent">{item.index}</span>
                  <h2 className="font-display text-2xl font-medium tracking-tight text-foreground">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground flex-1 text-sm leading-relaxed">
                    {item.body}
                  </p>
                  <span className="mono-label flex items-center gap-2 border-t border-white/8 pt-5 text-foreground/85 transition-colors duration-200 group-hover:text-accent">
                    {item.cta}
                    <ArrowRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cierre — la promesa y el siguiente paso */}
      <section
        className="relative overflow-hidden py-24 text-center md:py-32"
        aria-labelledby="home-cta-title"
      >
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[50vh]"
          style={{
            background:
              "radial-gradient(ellipse 75% 55% at 50% 100%, rgba(212,175,55,0.06), transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-6 md:px-8">
          <Reveal>
            <span className="mono-label inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-accent">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Primer mes, ves resultados
            </span>
            <h2
              id="home-cta-title"
              className="display-heading mt-8 text-3xl md:text-4xl lg:text-[2.75rem]"
            >
              El primer paso es una auditoría inicial
            </h2>
            <p className="text-muted-foreground mx-auto mt-5 max-w-xl">
              Reviso tu situación actual, te digo con franqueza qué mejoraría y cómo
              trabajaríamos juntos. Sin compromiso y sin letra pequeña.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contacto" size="lg">
                Agendar auditoría inicial
              </Button>
              <Button
                href="https://wa.me/50671048447"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
              >
                Escribir por WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
