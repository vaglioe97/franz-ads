"use client"

import type { ComponentProps, HTMLAttributes } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export type StoriesProps = ComponentProps<typeof Carousel>

export const Stories = ({ className, opts, ...props }: StoriesProps) => (
  <Carousel
    className={cn("w-full", className)}
    opts={{
      align: "start",
      loop: false,
      dragFree: true,
      ...opts,
    }}
    {...props}
  />
)

export type StoriesContentProps = ComponentProps<typeof CarouselContent>

export const StoriesContent = ({
  className,
  ...props
}: StoriesContentProps) => (
  <CarouselContent className={cn("gap-2", className)} {...props} />
)

export type StoryProps = HTMLAttributes<HTMLDivElement> & {
  /** Enlace opcional — abre la captura completa en otra pestaña */
  href?: string
}

export const Story = ({ className, href, children, ...props }: StoryProps) => {
  const surface = cn(
    "glass group relative block overflow-hidden rounded-xl",
    "cursor-grab select-none transition-all duration-200",
    "hover:scale-[1.02] hover:border-white/15 hover:shadow-[0_10px_15px_rgba(0,0,0,0.3)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
    className
  )

  return (
    <CarouselItem className="basis-auto pl-2 md:pl-4">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          draggable={false}
          className={surface}
          {...(props as HTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      ) : (
        <div className={surface} role="button" tabIndex={0} {...props}>
          {children}
        </div>
      )}
    </CarouselItem>
  )
}

export type StoryImageProps = Omit<ComponentProps<typeof Image>, "fill"> & {
  alt: string
}

export const StoryImage = ({ className, alt, sizes, ...props }: StoryImageProps) => (
  <Image
    alt={alt}
    fill
    sizes={sizes ?? "260px"}
    draggable={false}
    className={cn(
      "object-cover object-top",
      "transition-opacity duration-200",
      "group-hover:opacity-90",
      className
    )}
    {...props}
  />
)

export type StoryAuthorProps = HTMLAttributes<HTMLDivElement>

export const StoryAuthor = ({
  className,
  children,
  ...props
}: StoryAuthorProps) => (
  <div
    className={cn(
      "absolute right-0 bottom-0 left-0 z-10",
      "p-3 text-foreground",
      className
    )}
    {...props}
  >
    <div className="flex items-center gap-2">{children}</div>
  </div>
)

export type StoryAuthorImageProps = HTMLAttributes<HTMLSpanElement> & {
  name?: string
  fallback?: string
}

/* Insignia de iniciales — el mismo lenguaje que las tarjetas de testimonios */
export const StoryAuthorImage = ({
  fallback,
  name,
  className,
  ...props
}: StoryAuthorImageProps) => (
  <span
    className={cn(
      "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full",
      "border border-secondary/25 bg-secondary/10 backdrop-blur-[8px]",
      className
    )}
    aria-hidden="true"
    {...props}
  >
    <span className="font-display text-[0.6rem] font-medium text-secondary">
      {fallback || name?.charAt(0)?.toUpperCase()}
    </span>
  </span>
)

export type StoryAuthorNameProps = HTMLAttributes<HTMLSpanElement>

export const StoryAuthorName = ({
  className,
  ...props
}: StoryAuthorNameProps) => (
  <span
    className={cn(
      "font-display truncate text-sm font-medium tracking-tight",
      className
    )}
    {...props}
  />
)

export type StoryTitleProps = HTMLAttributes<HTMLDivElement>

export const StoryTitle = ({ className, ...props }: StoryTitleProps) => (
  <div
    className={cn(
      "absolute top-0 right-0 left-0 z-10",
      "p-3 text-foreground",
      className
    )}
    {...props}
  />
)

export type StoryOverlayProps = HTMLAttributes<HTMLDivElement> & {
  side?: "top" | "bottom"
}

/* Fundidos hacia el fondo del sitio para que texto y bordes respiren */
export const StoryOverlay = ({
  className,
  side = "bottom",
  ...props
}: StoryOverlayProps) => {
  const positionClasses =
    side === "top" ? "top-0 bg-gradient-to-b" : "bottom-0 bg-gradient-to-t"

  return (
    <div
      className={cn(
        "pointer-events-none absolute right-0 left-0 z-[5] h-16 from-background/90 to-transparent",
        positionClasses,
        className
      )}
      aria-hidden="true"
      {...props}
    />
  )
}
