import { SectionHead } from "@/components/ui/SectionHead"
import { Reveal } from "@/components/ui/Reveal"
import { withBasePath } from "@/lib/base-path"
import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  Stories,
  StoriesContent,
  Story,
  StoryAuthor,
  StoryAuthorImage,
  StoryAuthorName,
  StoryImage,
  StoryOverlay,
  StoryTitle,
} from "@/components/ui/stories-carousel"

type Shot = {
  src: string
  alt: string
  caption: string
  tag: string
  client: string
  initials: string
}

/* Capturas reales de conversaciones y cuentas de clientes */
const SHOTS: Shot[] = [
  {
    src: "/testimonios/herb-move.png",
    alt: "Chat de WhatsApp con HERB Move celebrando 54 seguidores y 3 clientes nuevos en 2 días",
    caption: "+54 seguidores y 3 clientes en los primeros 2 días de campaña.",
    tag: "Fitness boutique",
    client: "HERB Move",
    initials: "HM",
  },
  {
    src: "/testimonios/agenda-full.png",
    alt: "Chat de WhatsApp donde una clienta reporta agenda llena para abril y mitad de mayo",
    caption: "«Ya tengo agenda full abril y mitad de mayo.»",
    tag: "Estudio — Lúdica",
    client: "Daniela Ruiz",
    initials: "DR",
  },
  {
    src: "/testimonios/pedidos-campanas.png",
    alt: "Mensaje de Hillary Corrales agradeciendo la calidad y cantidad de pedidos de las campañas",
    caption: "«Se han notado demasiado la calidad y cantidad de pedidos de las campañas.»",
    tag: "E-commerce",
    client: "Hillary Corrales",
    initials: "HC",
  },
  {
    src: "/testimonios/drc-dental.png",
    alt: "Chat grupal donde el cliente reporta que la campaña funciona 100 de 100",
    caption: "«La campaña está funcionando muy bien: 100 de 100.»",
    tag: "Clínica dental",
    client: "DRC",
    initials: "DC",
  },
  {
    src: "/testimonios/crecimiento-seguidores.png",
    alt: "Mensaje de una clienta reportando más de 300 seguidores nuevos y 7 procesos agendados en dos semanas",
    caption: "+300 seguidores y 7 procesos agendados en dos semanas.",
    tag: "Servicios — Lúdica",
    client: "Danielle Odio",
    initials: "DO",
  },
  {
    src: "/testimonios/clientes-calificados.png",
    alt: "Mensaje de una clienta contando que recibe clientes calificados y agenda videollamadas de venta",
    caption: "Clientes calificados por mensajes — videollamadas de venta agendadas.",
    tag: "Educación",
    client: "Cliente personal",
    initials: "CP",
  },
  {
    src: "/testimonios/ballet-sold-out.png",
    alt: "Chat del Ballet Nacional de Costa Rica reportando entradas prácticamente agotadas",
    caption: "Sold out de un evento de ballet en el Teatro Nacional de Costa Rica.",
    tag: "Eventos",
    client: "Ballet Nacional CR",
    initials: "BN",
  },
  {
    src: "/testimonios/sedal-unilever.png",
    alt: "Felicitaciones del equipo tras la primera presentación centroamericana para Sedal",
    caption: "Primera presentación a nivel centroamericano para Sedal (Unilever).",
    tag: "Etapa en agencia",
    client: "Sedal — Unilever",
    initials: "SU",
  },
  {
    src: "/testimonios/hbo-max-evento.png",
    alt: "Fotos de un evento de HBO Max sobre la Premier League en Latinoamérica",
    caption: "Con HBO Max en el lanzamiento de la Premier League para LATAM.",
    tag: "Etapa en agencia",
    client: "HBO Max",
    initials: "HB",
  },
]

/**
 * Galería de evidencia: capturas reales de chats y cuentas en un
 * carrusel de historias con arrastre libre y flechas — el respaldo
 * visual de los casos. Cada tarjeta abre la captura completa.
 */
export default function Evidence() {
  return (
    <section id="evidencia" className="scroll-mt-20 py-24 md:py-32" aria-labelledby="evidencia-title">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHead
          eyebrow="Evidencia"
          title={<span id="evidencia-title">Las conversaciones detrás de los números</span>}
          sub="Capturas reales de clientes y proyectos — arrastrá para recorrerlas o tocá una para verla completa. Cada cifra de esta página tiene un chat que la respalda."
          className="mb-10 md:mb-12"
        />

        <Reveal>
          <Stories>
            <div className="mb-6 flex items-center justify-end gap-3">
              <CarouselPrevious />
              <CarouselNext />
            </div>

            <StoriesContent className="-ml-2 md:-ml-4">
              {SHOTS.map((shot) => (
                <Story
                  key={shot.src}
                  href={withBasePath(shot.src)}
                  className="w-[230px] sm:w-[256px]"
                  aria-label={`${shot.client}: ${shot.caption}`}
                >
                  {/* Zona de imagen — la captura con su etiqueta arriba */}
                  <div className="relative aspect-[9/14] w-full overflow-hidden">
                    <StoryImage src={shot.src} alt={shot.alt} sizes="256px" />
                    <StoryOverlay side="top" className="h-20" />
                    <StoryOverlay side="bottom" className="h-12" />
                    <StoryTitle>
                      <span className="mono-label text-accent text-[0.6rem]">{shot.tag}</span>
                    </StoryTitle>
                  </div>

                  {/* Pie sólido — el texto nunca compite con la captura */}
                  <StoryAuthor className="static border-t border-white/8 p-4">
                    <div className="flex w-full flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <StoryAuthorImage fallback={shot.initials} name={shot.client} />
                        <StoryAuthorName>{shot.client}</StoryAuthorName>
                      </div>
                      <p className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">
                        {shot.caption}
                      </p>
                    </div>
                  </StoryAuthor>
                </Story>
              ))}
            </StoriesContent>
          </Stories>
        </Reveal>

        <p className="mono-label text-muted-foreground/70 mt-10 text-center text-[0.62rem]">
          Conversaciones reales — nombres y cuentas verificables
        </p>
      </div>
    </section>
  )
}
