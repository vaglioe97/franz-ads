"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * Delta chip — resultado como pastilla de estado: mono, redondeada,
 * con punto luminoso. Ganancias en dorado con glow; métricas frías
 * (costos, alcance) en azul.
 */
export function DeltaChip({
  children,
  tone = "gain",
  className,
}: {
  children: React.ReactNode
  tone?: "gain" | "cost"
  className?: string
}) {
  const reduced = useReducedMotion()
  return (
    <motion.span
      initial={reduced ? false : { opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
      className={cn(
        "font-mono inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5",
        "text-xs tracking-wide whitespace-nowrap tabular-nums",
        tone === "gain"
          ? "border-accent/20 bg-accent/10 text-accent"
          : "border-secondary/25 bg-secondary/10 text-secondary",
        className
      )}
    >
      <span
        className={cn(
          "inline-block h-1.5 w-1.5 rounded-full",
          tone === "gain"
            ? "bg-accent shadow-[0_0_8px_rgba(212,175,55,0.6)]"
            : "bg-secondary shadow-[0_0_8px_rgba(96,165,250,0.6)]"
        )}
        aria-hidden="true"
      />
      {children}
    </motion.span>
  )
}
