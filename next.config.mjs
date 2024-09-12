const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  trailingSlash: true,
  assetPrefix: isProd ? '/portfolio/' : '',
  basePath: isProd ? '/portfolio' : '',
  output: 'export',
};

export default nextConfig;