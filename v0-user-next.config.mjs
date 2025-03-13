/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Disable image optimization since GitHub Pages doesn't support it
  images: {
    unoptimized: true,
  },
  // Set the base path to match your GitHub repository name
  // For example, if your repo is username.github.io/portfolio, use '/portfolio'
  // If it's username.github.io, leave it as an empty string
  basePath: process.env.NODE_ENV === 'production' ? '/lcd-portfolio' : '',
  // Disable trailing slashes
  trailingSlash: false,
}

export default nextConfig

