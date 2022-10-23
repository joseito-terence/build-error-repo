/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  publicRuntimeConfig: {},
  typescript: {
    ignoreBuildErrors: true
  }
}

const { withExpo } = require('@expo/next-adapter')
const withFonts = require("next-fonts")
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  'solito',
  // 'dripsy',
  // '@dripsy/core',
  // 'moti',
  'core',
  "react-native-web",
  "react-native-svg",
])

module.exports = withPlugins(
  [
    withTM,
    [withFonts, { projectRoot: __dirname }],
    [withExpo, { projectRoot: __dirname }]
  ],
  nextConfig
)