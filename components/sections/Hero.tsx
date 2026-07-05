"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Metric } from "@/components/ui/Metric"
import { ShaderHero } from "@/components/ui/ShaderHero"

const enter = (delay: number, reduced: boolean | null) => ({
  initial: reduced ? false : { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
})

export default function Hero() {
  const reduced = useReducedMotion()
  const d = (offset: number) => (reduced ? 0 : offset)

  return (
    <section
      className="relative overflow-hidden pt-36 pb-24 text-center md:pt-40 md:pb-32"
      aria-labelledby="hero-title"
    >
      {/* Nebulosa WebGL — nubes doradas y destellos azules a la deriva */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <ShaderHero className="h-full w-full opacity-60" />
        {/* Fundido hacia el fondo del sitio para que el canvas no tenga bordes */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/10 to-background" />
      </div>
      {/* Ambiente radial — luz fría neutra derramándose desde arriba */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh]"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% 0%, rgba(148,163,184,0.05), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        {/* El sol de Franz Ads — la marca preside el hero */}
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: d(0), ease: "easeOut" }}
        >
          <Image
            src="/logo-mark.png"
            alt="Franz Ads"
            width={160}
            height={160}
            priority
            className="mx-auto mb-8 h-28 w-28 drop-shadow-[0_0_30px_rgba(212,175,55,0.35)] md:h-36 md:w-36"
          />
        </motion.div>

        {/* Badge con punto pulsante — la brasa dorada que indica que hay alguien operando */}
        <motion.div {...enter(d(0.1), reduced)}>
          <span className="mono-label inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-accent shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Paid Media Strategist &amp; Growth Consultant
          </span>
        </motion.div>

        <h1
          id="hero-title"
          className="display-heading mx-auto mt-9 mb-7 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block overflow-hidden">
            <motion.span
              className="block will-change-transform"
              initial={reduced ? false : { y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.7, delay: d(0.15), ease: [0.22, 0.61, 0.2, 1] }}
            >
              Primer mes,
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block bg-gradient-to-r from-foreground to-secondary bg-clip-text text-transparent will-change-transform"
              initial={reduced ? false : { y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.7, delay: d(0.27), ease: [0.22, 0.61, 0.2, 1] }}
            >
              ves resultados.
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="text-muted-foreground mx-auto mb-14 max-w-xl text-lg"
          {...enter(d(0.45), reduced)}
        >
          Soy Franz Matamoros y esto es Franz Ads: estrategias de crecimiento y adquisición de
          clientes mediante paid media y sistemas de contenido.{" "}
          <span className="text-foreground">Ganás más de lo que invertís.</span>
        </motion.p>

        {/* Franja de métricas: vidrio flotando en la oscuridad */}
        <motion.div
          className="glass relative mx-auto mb-14 max-w-3xl rounded-xl px-6 py-9"
          role="group"
          aria-label="Resultados agregados"
          {...enter(d(0.6), reduced)}
        >
          <div className="flex flex-col items-stretch gap-8 md:flex-row md:items-end md:justify-center md:gap-0">
            <Metric
              label="Años en paid media"
              value={4}
              suffix="+"
              tone="neutral"
              className="md:max-w-64 md:flex-1 md:px-6"
            />
            <Metric
              label="Invertidos en Meta Ads"
              value={50}
              prefix="$"
              suffix="k+"
              className="border-t border-white/8 pt-8 md:max-w-64 md:flex-1 md:border-t-0 md:border-l md:px-6 md:pt-0"
            />
            <Metric
              label="Marcas gestionadas"
              value={10}
              suffix="+"
              tone="neutral"
              className="border-t border-white/8 pt-8 md:max-w-64 md:flex-1 md:border-t-0 md:border-l md:px-6 md:pt-0"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          {...enter(d(0.75), reduced)}
        >
          <Button href="#agenda" size="lg">
            Agendar auditoría inicial
          </Button>
          <Button href="#casos" variant="outline" size="lg">
            Ver resultados reales
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
