import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 rounded-lg",
    "font-sans font-medium cursor-pointer select-none",
    "transition-all duration-200 ease-out active:scale-[0.98]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  ].join(" "),
  {
    variants: {
      variant: {
        // Primario: dorado macizo que se enciende al hover, con barrido de brillo
        default:
          "btn-shine bg-accent text-accent-foreground " +
          "hover:brightness-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]",
        // Secundario: hairline sutil, relleno tenue al hover
        outline:
          "border border-white/15 bg-transparent text-foreground " +
          "hover:border-white/25 hover:bg-white/5",
        // Fantasma: solo texto, relleno tenue al hover
        ghost: "bg-transparent text-foreground hover:bg-white/5",
      },
      size: {
        default: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
        compact: "h-10 px-4 text-sm",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

type ButtonProps = VariantProps<typeof buttonVariants> & {
  href?: string
  className?: string
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<"button"> &
  Pick<React.ComponentPropsWithoutRef<"a">, "target" | "rel">

export function Button({ variant, size, href, className, children, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className)
  if (href) {
    const { target, rel } = props
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
