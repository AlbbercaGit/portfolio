/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  trailingSlash: true, // Opcional: asegura que todas las URLs terminen con una barra final
  assetPrefix: isProd ? '/portfolio/' : '', // Asegúrate de que coincida con el nombre del repositorio
  basePath: isProd ? '/portfolio' : '', // Asegúrate de que coincida con el nombre del repositorio
  output: 'export', // Configura la exportación estática
};

export default nextConfig;
