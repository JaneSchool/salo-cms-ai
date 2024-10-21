/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './src/**/*!(*.stories|*.spec|*.test).{ts,tsx,astro,md,vue,mdx,html}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@tailwindcss/**/*',
    './node_modules/tailwindcss/**',
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      zIndex: {
        100: '100',
        150: '150',
        200: '200',
        250: '250',
        300: '300'
      },
      colors: {
        neonYellow: 'oklch(94.44% 0.194 106.75 / <alpha-value>)',
        neonPink: 'oklch(71.7% 0.25 360 / <alpha-value>)',
        neonLime: 'oklch(91.5% 0.258 129 / <alpha-value>)',
        neonCyan: 'oklch(91.3% 0.139 195.8 / <alpha-value>)',
        border: 'oklch(27.41% 0.0055 286.03 / <alpha-value>)',
        code: 'oklch(27.31% 0.0155 269.11 / <alpha-value>)',
        trancperent: 'oklch(90.54% 0.1545 194.77 / 0%)',
        neutral: {
          150: 'oklch(94.61% 0 0)',
          750: 'oklch(32.11% 0 0)',
          850: 'oklch(23.93% 0 0)'
        },
        chart: {
          1: 'oklch(52.92% 0.193 262.13 / <alpha-value>)',
          2: 'oklch(69.83% 0.134 165.46 / <alpha-value>)',
          3: 'oklch(72.32% 0.15 60.63 / <alpha-value>)',
          4: 'oklch(61.92% 0.204 312.73 / <alpha-value>)',
          5: 'oklch(61.23% 0.209 6.39 / <alpha-value>)'
        },
        overlayPlurple: 'oklch(59.17% 0.218 0.53 / 0.33)',
        overlayBlurple: 'oklch(59.17% 0.218 0.53 / 10%)',
        input: 'oklch(27.41% 0.0055 286.03 / <alpha-value>)',
        ring: 'oklch(58.59% 0.2221 17.55 / <alpha-value>)',
        background: 'oklch(14.67% 0.0041 49.31 / <alpha-value>)',
        foreground: 'oklch(96.19% 0 0 / <alpha-value>)',
        primary: {
          DEFAULT: 'oklch(58.59% 0.2221 17.55 / <alpha-value>)',
          foreground: 'oklch(96.99% 0.0149 12.4 / <alpha-value>)'
        },
        secondary: {
          DEFAULT: 'oklch(27.41% 0.0055 286.03)',
          foreground: 'oklch(98.48% 0 0 / <alpha-value>)'
        },
        destructive: {
          DEFAULT: 'oklch(39.59% 0.1331 25.72 / <alpha-value>)',
          foreground: 'oklch(97.1% 0.0127 17.38 / <alpha-value>)'
        },
        muted: {
          DEFAULT: 'oklch(26.97% 0 0 / <alpha-value>)',
          foreground: 'oklch(71.19% 0.0129 286.07 / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'oklch(26.85% 0.0063 34.3 / <alpha-value>)',
          foreground: 'oklch(98.48% 0 0 / <alpha-value>)'
        },
        popover: {
          DEFAULT: 'oklch(20.44% 0 0 / <alpha-value> )',
          foreground: 'oklch(96.19% 0 0 / <alpha-value> )'
        },
        card: {
          DEFAULT: 'oklch(21.61% 0.0061 56.04 / <alpha-value>)',
          foreground: 'oklch(96.19% 0 0 / <alpha-value>)'
        }
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        switch: 'rgba(0, 0, 0, 0.3) 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 1px 2px'
      },
      keyframes: {
        'collapsible-down': {
          from: { height: '0px' },
          to: { height: 'var(--radix-collapsible-content-height)' }
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0px' }
        },
        'background-position-spin': {
          '0%': { backgroundPosition: 'top center' },
          '100%': { backgroundPosition: 'bottom center' }
        },
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'background-position-spin': 'background-position-spin 3000ms infinite alternate',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animated'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ]
}
