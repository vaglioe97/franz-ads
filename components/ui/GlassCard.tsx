"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * Tarjeta de vidrio: superficie semitransparente con backdrop
 * blur flotando en la oscuridad. Borde al 8% que se aclara al
 * hover con una escala sutil — nunca transformaciones dramáticas.
 */
export function GlassCard({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const reduced = useReducedMotion()
  return (
    <motion.article
      className={cn(
        "glass relative rounded-xl p-8",
        "transition-[border-color,background-color,box-shadow] duration-300 ease-out",
        "hover:border-white/15 hover:bg-muted/80 hover:shadow-[0_10px_15px_rgba(0,0,0,0.3)]",
        className
      )}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={reduced ? undefined : { scale: 1.02 }}
    >
      {children}
    </motion.article>
  )
}
