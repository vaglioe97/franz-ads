"use client"

import { useState } from "react"
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/resultados", label: "Resultados" },
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre", label: "Sobre Franz" },
  { href: "/contacto", label: "Contacto" },
]

/**
 * Nav de vidrio fija que se retira al bajar y reaparece al subir.
 * Monograma en placa dorada tenue + enlaces discretos en gris,
 * con la página activa resaltada en blanco.
 */
export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const reduced = useReducedMotion()
  const pathname = usePathname()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(latest > prev && latest > 160 && !open)
  })

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-background/70 backdrop-blur-xl"
      animate={reduced ? undefined : { y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6 md:px-8"
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:text-accent"
        >
          <Image
            src="/logo-mark.png"
            alt=""
            width={40}
            height={40}
            priority
            className="h-10 w-10 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)] transition-transform duration-700 ease-out group-hover:rotate-[20deg]"
          />
          <span className="font-display text-sm font-medium tracking-tight text-foreground">
            Franz Ads
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm transition-colors duration-200 focus-visible:text-accent focus-visible:outline-none ${
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="/contacto" size="compact">
            Auditoría inicial
          </Button>
        </div>

        <button
          className="rounded-md border border-white/10 p-2 text-foreground transition-colors duration-200 hover:bg-white/5 lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="border-b border-white/8 bg-background/95 backdrop-blur-xl lg:hidden"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ul className="flex flex-col px-6 py-4">
              {LINKS.map((link) => {
                const active = pathname === link.href
                return (
                  <li key={link.href} className="border-b border-white/5 last:border-b-0">
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`block py-4 text-sm transition-colors focus-visible:text-accent focus-visible:outline-none ${
                        active
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              <li className="pt-4 pb-2">
                <Button href="/contacto" size="compact" className="w-full">
                  Auditoría inicial
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
