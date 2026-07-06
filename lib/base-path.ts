/**
 * Única fuente de verdad del basePath del sitio.
 *
 * En producción el sitio vive bajo https://vaglioe97.github.io/franz-ads/,
 * en desarrollo (`next dev`) se sirve desde la raíz. `next.config.ts` y el
 * loader de imágenes leen de aquí — cambiá el prefijo solo en este archivo.
 */
export const BASE_PATH = process.env.NODE_ENV === "production" ? "/franz-ads" : ""

/** Antepone el basePath a una ruta absoluta de un asset de /public. */
export const withBasePath = (path: string) => `${BASE_PATH}${path}`
