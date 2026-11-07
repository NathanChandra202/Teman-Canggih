/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // â”€â”€ Teman Canggih Brand Palette â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        tcDeep: {
          DEFAULT: '#0F172A',
          800: '#1E293B',
          900: '#0F172A',
          950: '#080D18',
        },
        tcElectric: {
          DEFAULT: '#2563EB',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        tcCyan: {
          DEFAULT: '#06B6D4',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        // â”€â”€ Aliases used throughout existing components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        slateNavy: {
          DEFAULT: '#0F172A',
          800: '#1E293B',
          900: '#0F172A',
          950: '#080D18',
        },
        tcYellow: {
          DEFAULT: '#2563EB',
          400: '#60A5FA',
          500: '#2563EB',
          600: '#1D4ED8',
        },
        tcAmber: {
          DEFAULT: '#06B6D4',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        tcCobalt: {
          DEFAULT: '#2563EB',
          400: '#60A5FA',
          500: '#2563EB',
          600: '#1D4ED8',
        },
        cobalt: '#2563EB',
        paper: '#F8FAFC',
        sandCanvas: '#F8FAFC',
        surfaceNeutral: '#FFFFFF',
        pureWhite: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        'card': '22px',
        'token-sm': '14px',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        waPulse: {
          '0%': { opacity: '0.7', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(1.7)' },
        },
        orbitRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        }
      },
      animation: {
        'wa-pulse': 'waPulse 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite',
        'orbit': 'orbitRotate 20s linear infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      }
    },
  },
  plugins: [],
}

