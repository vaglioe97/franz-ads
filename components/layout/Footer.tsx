import Image from "next/image"

const LINK =
  "text-sm text-muted-foreground transition-colors duration-200 " +
  "hover:text-foreground focus-visible:text-accent focus-visible:outline-none"

export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-16">
      <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
        <Image
          src="/logo-full.png"
          alt="Franz Ads — Estrategia · Crecimiento · Resultados"
          width={280}
          height={277}
          className="mx-auto h-auto w-52 drop-shadow-[0_0_24px_rgba(212,175,55,0.15)] md:w-60"
        />
        <p className="text-muted-foreground mx-auto mt-6 max-w-md text-sm">
          Franz Matamoros — Paid Media Strategist &amp; Growth Consultant. Estrategias de
          crecimiento y adquisición de clientes mediante paid media y sistemas de contenido.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
          <a className={LINK} href="mailto:leaderzinatra@gmail.com">
            leaderzinatra@gmail.com
          </a>
          <a
            className={LINK}
            href="https://www.linkedin.com/in/franz-antonio-matamoros-gomez28/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className={LINK}
            href="https://wa.me/50671048447"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp +506 7104 8447
          </a>
          <a className={LINK} href="#agenda">
            Auditoría inicial
          </a>
        </div>

        <p className="mono-label text-muted-foreground/70 mt-12 text-[0.62rem]">
          © 2026 Franz Ads · Más ventas, más números
        </p>
      </div>
    </footer>
  )
}
