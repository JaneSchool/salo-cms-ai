import { URL, fileURLToPath } from 'node:url'
import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'
import vue from '@astrojs/vue'
import postCssOklabPolyfill from '@csstools/postcss-oklab-function'
import tailwindcss from '@tailwindcss/vite'
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'astro/config'
import autoprefixer from 'autoprefixer'
import cssDiscardComments from 'postcss-discard-comments'
import Inspect from 'vite-plugin-inspect'
import lightningcss from 'vite-plugin-lightningcss'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  site: 'https://salo-cms-ai.pages.dev',
  vite: {
    build: {
      minify: true,
      cssMinify: 'lightningcss',
      chunkSizeWarningLimit: 3000, // Increase the limit to 3000 kB
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'] // Example: separate vendor libraries
          }
        }
      }
    },
    css: {
      postcss: {
        plugins: [postCssOklabPolyfill({ preserve: true }), autoprefixer(), cssDiscardComments({ removeAll: true })]
      }
    },
    plugins: [
      lightningcss({
        browserslist: ['>= 0.25%', 'last 2 versions', 'maintained node versions', 'Firefox ESR', 'not dead']
      }),
      Inspect({
        build: false,
        outputDir: '.vite-inspect'
      }),
      tailwindcss(),
      legacy({
        targets: ['>= 0.25%', 'last 2 versions', 'maintained node versions', 'Firefox ESR', 'not dead']
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  },
  output: 'server',

  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),

  integrations: [react(), vue({ devtools: true }), mdx()]
})
