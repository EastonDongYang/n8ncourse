/** @type {import('next').NextConfig} */
const nextConfig = {
  // 移除 output: 'export' 以启用动态功能
  trailingSlash: true,
  images: {
    // Vercel 支持图片优化，可以启用
    unoptimized: false,
  },
  experimental: {
    appDir: true,
  },
  // 如果你的网站不在根目录，可以设置 basePath
  // basePath: '/your-subdirectory',
}

module.exports = nextConfig 