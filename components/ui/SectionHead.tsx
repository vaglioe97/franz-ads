import { cn } from "@/lib/utils"
import { Reveal } from "@/components/ui/Reveal"

/**
 * Cabecera de sección: eyebrow técnico entre hairlines simétricas,
 * titular Space Grotesk en tracking apretado (nunca mayúsculas)
 * y subtítulo en gris. Jerarquía por tamaño y peso, no por color.
 */
export function SectionHead({
  eyebrow,
  title,
  sub,
  className,
}: {
  eyebrow: string
  title: React.ReactNode
  sub?: string
  className?: string
}) {
  return (
    <Reveal className={cn("mx-auto mb-16 max-w-3xl text-center md:mb-20", className)}>
      <p className="mono-label flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-white/15" aria-hidden="true" />
        <span className="text-muted-foreground">{eyebrow}</span>
        <span className="h-px w-8 bg-white/15" aria-hidden="true" />
      </p>
      <h2 className="display-heading mt-6 text-3xl md:text-4xl lg:text-[2.75rem]">{title}</h2>
      {sub && <p className="text-muted-foreground mx-auto mt-5 max-w-2xl">{sub}</p>}
    </Reveal>
  )
}
