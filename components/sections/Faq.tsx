"use client"

import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { SectionHead } from "@/components/ui/SectionHead"
import { Reveal } from "@/components/ui/Reveal"

const FAQS = [
  {
    q: "¿Cómo cobrás por tus servicios?",
    a: "Mis honorarios son fijos: una cuota al mes, independientemente de si ganás más durante los meses con mis servicios. No soy un salario más ni cobro porcentaje de tu inversión — si tu cuenta escala, el fee no.",
  },
  {
    q: "¿En qué te diferencias de una agencia?",
    a: "Soy una opción más rentable que cualquier agencia de marketing: honorarios fijos, la persona con la que hablás es la misma que opera tu cuenta, y si necesitás contenido o cierre en ventas puedo conseguirte un equipo completo a menor costo.",
  },
  {
    q: "¿Cómo sé que mi inversión está funcionando?",
    a: "Medición de resultados cada mes: ya sea en reunión o por correo, ofrezco reportes de las pautas publicitarias para asegurar la transparencia del servicio y sus resultados. Sabés qué se invirtió, qué volvió y cuál es el siguiente movimiento.",
  },
  {
    q: "¿En qué plataformas pautás?",
    a: "Meta es mi especialidad: desde Facebook e Instagram consigo clientes potenciales directo a tu WhatsApp o al canal que prefieras. También manejo campañas en TikTok Ads, donde el contenido se vuelve más viral y da más reconocimiento al producto.",
  },
  {
    q: "¿Cuándo empiezo a ver resultados?",
    a: "Primer mes, ves resultados. Es el estándar con el que trabajo — y hay casos que lo respaldan: un estudio de terapias recuperó al doble lo invertido en 30 días, y un estudio de pilates sumó seguidores y clientes nuevos en los primeros 2 días de campaña.",
  },
  {
    q: "¿Qué pasa si necesito algo fuera de horario?",
    a: "Mi servicio no tiene horarios: si necesitás un cambio, agregar contenido a las campañas o tenés dudas sobre cualquier tema, también puedo ayudarte los fines de semana o en horarios nocturnos.",
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const reduced = useReducedMotion()

  return (
    <section id="faq" className="scroll-mt-20 py-24 md:py-32" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <SectionHead
          index="01"
          eyebrow="Antes de agendar"
          title={<span id="faq-title">Preguntas frecuentes</span>}
        />

        <Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((item, i) => {
              const open = openIndex === i
              return (
                <div
                  key={item.q}
                  className={`glass rounded-lg transition-[border-color,background-color] duration-300 ${
                    open ? "border-white/15 bg-muted/80" : "hover:border-white/15"
                  }`}
                >
                  <button
                    className="flex w-full cursor-pointer items-center justify-between gap-6 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-lg"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                  >
                    <span
                      className={`font-display font-medium tracking-tight transition-colors duration-200 ${
                        open ? "text-accent" : "text-foreground"
                      }`}
                    >
                      {item.q}
                    </span>
                    <motion.span
                      className={`flex-shrink-0 transition-colors duration-200 ${
                        open ? "text-accent" : "text-muted-foreground"
                      }`}
                      animate={reduced ? undefined : { rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      aria-hidden="true"
                    >
                      <ChevronDown size={18} strokeWidth={1.5} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        className="overflow-hidden"
                        initial={reduced ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduced ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <p className="text-muted-foreground max-w-2xl px-5 pb-6 text-sm leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
