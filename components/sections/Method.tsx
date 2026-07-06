"use client"

import { motion, useReducedMotion } from "framer-motion"
import { SectionHead } from "@/components/ui/SectionHead"

const REASONS = [
  {
    id: "01",
    tag: "Sin sorpresas",
    title: "Honorarios fijos",
    body: "La paga de mis servicios es una cuota fija al mes, independientemente de si ganás más durante los meses con mis servicios. No sería un salario más ni un porcentaje que crece con tu inversión.",
  },
  {
    id: "02",
    tag: "Cada mes",
    title: "Medición de resultados",
    body: "Ya sea en reunión o por correo, ofrezco reportes de las pautas publicitarias para asegurar la transparencia del servicio y sus resultados. Sabés exactamente qué se invirtió y qué volvió.",
  },
  {
    id: "03",
    tag: "24/7",
    title: "Servicio sin horarios",
    body: "Si necesitás un cambio, agregar contenido a las campañas o tenés dudas sobre cualquier tema, también puedo ayudarte los fines de semana o en horarios nocturnos.",
  },
  {
    id: "04",
    tag: "Opcional",
    title: "Equipo de marketing a menor costo",
    body: "Si además de publicidad en redes necesitás contenido o cierre en ventas, tengo la gente indicada: un equipo completo por menos de lo que cuesta una agencia.",
  },
]

/**
 * Las ventajas frente a una agencia como línea de tiempo vertical:
 * eje sutil al 8% con nodos redondos numerados en mono azul,
 * razones alternando a izquierda y derecha en desktop.
 */
export default function Method() {
  const reduced = useReducedMotion()

  return (
    <section id="ventajas" className="scroll-mt-20 py-24 md:py-32" aria-labelledby="ventajas-title">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHead
          index="02"
          eyebrow="Ventajas competitivas"
          title={<span id="ventajas-title">Las ventajas de trabajar directo con el estratega</span>}
          sub="Soy una opción más rentable que cualquier agencia de marketing: atención directa del estratega, costos fijos y resultados que se miden todos los meses."
        />

        <div className="relative">
          {/* El eje — una hairline flotando en la oscuridad */}
          <span
            className="absolute inset-y-0 left-[19px] w-px bg-white/8 lg:left-1/2 lg:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-14">
            {REASONS.map((reason, i) => {
              const left = i % 2 === 0
              return (
                <motion.div
                  key={reason.id}
                  className="relative grid grid-cols-[40px_1fr] items-start gap-6 lg:grid-cols-2 lg:gap-0"
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                >
                  {/* Nodo numerado sobre el eje — azul, la capa técnica */}
                  <span className="glass z-10 flex h-10 w-10 items-center justify-center rounded-full lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2">
                    <span className="font-mono text-xs text-secondary">{reason.id}</span>
                  </span>

                  <div
                    className={
                      left
                        ? "lg:col-start-1 lg:pr-16 lg:text-right"
                        : "lg:col-start-2 lg:pl-16 lg:text-left"
                    }
                  >
                    <p className="mono-label text-accent">{reason.tag}</p>
                    <h3 className="font-display mt-3 text-xl font-medium tracking-tight text-foreground">
                      {reason.title}
                    </h3>
                    <p
                      className={`text-muted-foreground mt-3 max-w-md text-sm leading-relaxed ${left ? "lg:ml-auto" : ""}`}
                    >
                      {reason.body}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Remate del eje */}
          <span
            className="absolute -bottom-4 left-[19px] h-2 w-2 -translate-x-1/2 rounded-full bg-accent/60 shadow-[0_0_8px_rgba(212,175,55,0.4)] lg:left-1/2"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
