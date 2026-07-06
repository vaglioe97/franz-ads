"use client"

import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { SectionHead } from "@/components/ui/SectionHead"
import { Reveal } from "@/components/ui/Reveal"
import { Button } from "@/components/ui/button"

/* Inputs de vidrio: superficie tenue, borde sutil, foco dorado con glow */
const FIELD =
  "h-11 w-full rounded-lg border border-white/8 bg-muted/60 px-4 " +
  "font-sans text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-[8px] " +
  "transition-all duration-200 " +
  "focus:border-accent/50 focus:shadow-[0_0_20px_rgba(212,175,55,0.1)] focus:ring-2 focus:ring-accent/20 focus:outline-none"

const LABEL =
  "mono-label text-muted-foreground text-[0.65rem] transition-colors duration-200 group-focus-within:text-accent"

function Field({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="group flex flex-col gap-2">
      <label htmlFor={id} className={LABEL}>
        {label}
      </label>
      {children}
    </div>
  )
}

export default function Apply() {
  const [sent, setSent] = useState(false)
  const reduced = useReducedMotion()

  return (
    <section
      id="agenda"
      className="relative scroll-mt-20 overflow-hidden py-24 text-center md:py-32"
      aria-labelledby="agenda-title"
    >
      {/* Ambiente de cierre — luz dorada subiendo desde el suelo */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60vh]"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% 100%, rgba(212,175,55,0.06), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6 md:px-8">
        <SectionHead
          index="02"
          eyebrow="Auditoría inicial"
          title={<span id="agenda-title">Agendá tu sesión de auditoría inicial</span>}
          sub="Contame dónde está tu negocio hoy y a dónde lo querés llevar. En la sesión reviso tu situación, te digo con franqueza qué mejoraría y cómo trabajaríamos juntos."
          className="mb-10"
        />

        {/* La promesa central del deck — pastilla con brasa pulsante */}
        <Reveal delay={0.1}>
          <span className="mono-label inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-accent">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Primer mes, ves resultados
          </span>
        </Reveal>

        <Reveal delay={0.2}>
          <form
            className="glass mx-auto mt-12 flex max-w-xl flex-col gap-7 rounded-xl p-8 text-left md:p-10"
            noValidate
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              if (!form.checkValidity()) {
                form.reportValidity()
                return
              }
              form.reset()
              setSent(true)
            }}
          >
            <div className="grid gap-7 md:grid-cols-2">
              <Field id="name" label="Nombre">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Juana Pérez"
                  className={FIELD}
                />
              </Field>
              <Field id="email" label="Correo electrónico">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="juana@tumarca.com"
                  className={FIELD}
                />
              </Field>
            </div>

            <Field id="website" label="Sitio web o Instagram del negocio">
              <input
                id="website"
                name="website"
                type="text"
                autoComplete="url"
                placeholder="https://tumarca.com o @tumarca"
                className={FIELD}
              />
            </Field>

            {/* El formulario califica por diseño: presupuesto como select */}
            <Field id="budget" label="Inversión publicitaria mensual actual">
              <select id="budget" name="budget" required defaultValue="" className={FIELD}>
                <option value="" disabled>
                  Seleccioná un rango
                </option>
                <option className="bg-muted">Aún no invierto en publicidad</option>
                <option className="bg-muted">Menos de $500/mes</option>
                <option className="bg-muted">$500 – $2k/mes</option>
                <option className="bg-muted">$2k – $10k/mes</option>
                <option className="bg-muted">Más de $10k/mes</option>
              </select>
            </Field>

            <Field id="goal" label="Objetivo principal">
              <textarea
                id="goal"
                name="goal"
                rows={3}
                placeholder="Más clientes a mi WhatsApp, llenar las agendas del mes, hacer crecer mi comunidad…"
                className={`${FIELD} h-auto min-h-24 resize-y py-3`}
              />
            </Field>

            <Button type="submit" size="lg" className="mt-1 w-full md:self-center md:px-10 md:w-auto">
              Agendar auditoría inicial
            </Button>

            <AnimatePresence>
              {sent && (
                <motion.p
                  role="status"
                  className="rounded-lg border border-accent/20 bg-accent/10 px-5 py-4 text-center font-mono text-xs leading-relaxed text-accent"
                  initial={reduced ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Aplicación recibida. Te respondo en menos de 48 horas hábiles.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="text-muted-foreground mt-10 text-sm">
            ¿Preferís escribirme directo?{" "}
            <a
              href="https://wa.me/50671048447"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent transition-colors hover:brightness-110 focus-visible:outline-none"
            >
              WhatsApp +506 7104 8447
            </a>{" "}
            ·{" "}
            <a
              href="mailto:leaderzinatra@gmail.com"
              className="text-accent transition-colors hover:brightness-110 focus-visible:outline-none"
            >
              leaderzinatra@gmail.com
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
