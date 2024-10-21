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
import AutoImportComponents from 'unplugin-vue-components/vite'
import AutoImportAPIs from 'unplugin-auto-import/astro'
import VueDevTools from 'vite-plugin-vue-devtools'
import mdx from '@astrojs/mdx'



// https://astro.build/config
export default defineConfig({
  site: "https://salo-cms-ai.pages.dev",
  prefetch: { prefetchAll: true },
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
      AutoImportComponents({
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

        dirs: ['src/components'], // allow auto load markdown components under ./src/components/
        extensions: ['vue', 'md'], // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.mdx?/],
        // resolvers: [], // Auto-import using resolvers
        dts: 'src/types/components.d.ts'
      }),
      VueDevTools({
        appendTo: 'app.ts'
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
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./src', import.meta.url)),
        '~~': fileURLToPath(new URL('./', import.meta.url))
      }
    }
  },
  output: 'hybrid',
  adapter: cloudflare({
    imageService: 'cloudflare',
    functionPerRoute: true,
    platformProxy: {
      enabled: true
    }
  }),

  integrations: [
    AutoImportAPIs({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
        /\.mdx$/ // .mdx
      ],

      imports: [
        'vue',
        'vue-router',
        // 'vue-i18n',
        // 'vue/macros',
        // '@vueuse/head',
        '@vueuse/core',
        'pinia'
      ],
      dirs: [
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        'src/composables',
        'src/utils',
        'src/stores'
      ],
      vueTemplate: true,
      dts: 'src/types/auto-imports.d.ts'
    }),
    react(),
    vue({
      jsx: true,
      appEntrypoint: 'src/pages/app/app',
      devtools: true
    }),
    mdx()
  ]
})
