"use client"

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion"

/**
 * Hairline ámbar en el borde superior que registra el avance de
 * lectura — con un glow tenue, como una brasa deslizándose.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.001 })
  const reduced = useReducedMotion()
  if (reduced) return null

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-accent shadow-[0_0_8px_rgba(212,175,55,0.5)]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
