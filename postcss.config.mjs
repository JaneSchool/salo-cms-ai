/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    autoprefixer: {},
    'postcss-lightningcss': {
      browsers: '>= .25%'
    },
    '@tailwindcss/postcss': { base: './src/index.css', optimize: { minify: true } },
    '@csstools/postcss-oklab-function': { preserve: true },
    'postcss-preset-env': {
      features: { 'nesting-rules': false }
    }
  }
}

export default config
