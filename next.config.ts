/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/webp']
  },
  webpack: (config: any) => {
    config.cache = false
    config.module.rules.push({
      test: /\.webp$/,
      type: 'asset/resource'
    })
    return config
  }
}

module.exports = nextConfig