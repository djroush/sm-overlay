/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = '/'

if (isGithubActions) {
  // trim off `<owner>/`
  //const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  //assetPrefix = `/${repo}/`;
  assetPrefix = '/sm-overlay-generator/'
}

const nextConfig = {
  exportPathMap: function () {
    return {
      "/": { page: "/" }
    }
  },
  reactStrictMode: false,
  swcMinify: true,

  assetPrefix: assetPrefix,
}

module.exports = nextConfig
