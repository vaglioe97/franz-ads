"use client"

import { BASE_PATH } from "./base-path"

/**
 * Loader de next/image para el export estático en GitHub Pages.
 *
 * Con `images.unoptimized: true` el componente <Image> emite el `src` tal
 * cual, SIN aplicar basePath (el prefijo lo agrega el loader por defecto,
 * que en ese modo se omite). Este loader devuelve la URL directa del asset
 * con el basePath antepuesto, y además satisface el requisito de
 * `output: "export"` sin necesidad de `unoptimized`.
 */
export default function imageLoader({ src }: { src: string }) {
  return src.startsWith("/") ? `${BASE_PATH}${src}` : src
}
