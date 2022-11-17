/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = '/'
let basePath = ''
if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  basePath: basePath,
  exportPathMap: function () {
    return {
      "/": { page: "/" }
    }
  },
  reactStrictMode: false,
  swcMinify: true,

  assetPrefix: assetPrefix
}

module.exports = nextConfig
