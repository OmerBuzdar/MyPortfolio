/** @type {import('next').NextConfig} */

// Change this to your GitHub repository name (e.g., 'MyPortfolio')
// Set to '' if your repo is named '<username>.github.io'
const repoName = 'MyPortfolio'

const nextConfig = {
  // Enable static exports for deployment to static hosts
  output: 'export',
  
  // GitHub Pages deployment configuration
  basePath: process.env.NODE_ENV === 'production' && repoName ? `/${repoName}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' && repoName ? `/${repoName}/` : '',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    domains: ['is1-ssl.mzstatic.com', 'is2-ssl.mzstatic.com', 'is3-ssl.mzstatic.com', 'is4-ssl.mzstatic.com', 'is5-ssl.mzstatic.com'],
  },
  
  // Trailing slashes for better compatibility with static hosts
  trailingSlash: true,
  
  // Skip type checking during build (faster builds, run `npm run lint` separately)
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Skip ESLint during build (run `npm run lint` separately)
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
