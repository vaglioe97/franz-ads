/* Marcas globales gestionadas en agencia — la marquesina de credenciales */
const BRANDS = [
  "Unilever",
  "Dove",
  "Sedal",
  "TRESemmé",
  "Savilé",
  "eGo",
  "Chevrolet",
  "Buick",
  "GMC",
  "Cadillac",
  "Publicis Groupe",
  "MullenLowe Group",
]

export function BrandsMarquee() {
  return (
    <div className="overflow-hidden border-y border-white/8 py-4" aria-hidden="true">
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            {BRANDS.map((brand) => (
              <span
                key={`${copy}-${brand}`}
                className="mono-label text-muted-foreground flex items-center gap-3 pr-10 whitespace-nowrap"
              >
                {brand}
                <span className="inline-block h-1 w-1 rounded-full bg-accent/40" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
