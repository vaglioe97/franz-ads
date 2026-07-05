"use client"

import { useEffect, useRef } from "react"
import { animate, useInView, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * METRIC READOUT — las cifras siguen siendo protagonistas.
 * Figura en Space Grotesk con micro-label mono. El valor final
 * es accesible siempre (aria-label del grupo); el count-up es
 * solo visual y respeta prefers-reduced-motion.
 */
export function Metric({
  label,
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  tone = "accent",
  size = "lg",
  align = "center",
  className,
}: {
  label: string
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  tone?: "accent" | "neutral"
  size?: "lg" | "md" | "sm"
  align?: "start" | "center"
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" })
  const reduced = useReducedMotion()
  const finalText = `${prefix}${value.toFixed(decimals)}${suffix}`

  useEffect(() => {
    const el = ref.current
    if (!el || !inView || reduced) return
    const controls = animate(0, value, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (v) => {
        el.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`
      },
    })
    return () => controls.stop()
  }, [inView, reduced, value, prefix, suffix, decimals])

  return (
    <div
      role="group"
      aria-label={`${label}: ${finalText}`}
      className={cn(
        "flex flex-col gap-2.5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span aria-hidden="true" className="mono-label text-muted-foreground">
        {label}
      </span>
      <span
        ref={ref}
        aria-hidden="true"
        className={cn(
          "figure",
          tone === "accent" ? "text-accent" : "text-foreground",
          size === "lg" && "text-[clamp(2.4rem,5vw,3.5rem)]",
          size === "md" && "text-[clamp(1.7rem,3.2vw,2.3rem)]",
          size === "sm" && "text-2xl"
        )}
      >
        {finalText}
      </span>
    </div>
  )
}
