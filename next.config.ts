import type { NextConfig } from "next";
import { BASE_PATH } from "./lib/base-path";

const nextConfig: NextConfig = {
  /* Export estático para GitHub Pages (genera la carpeta out/) */
  output: "export",

  /* El sitio vive bajo /franz-ads/ en producción; en dev se sirve en la raíz */
  basePath: BASE_PATH,

  /*
   * Loader propio en vez de `unoptimized: true`: con unoptimized, <Image>
   * emite el src sin basePath y las imágenes se rompen en GitHub Pages.
   * El loader (lib/image-loader.ts) antepone el prefijo de forma centralizada
   * y a la vez cumple el requisito de imágenes de `output: "export"`.
   */
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
};

export default nextConfig;
