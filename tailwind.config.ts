import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        background: {
          950: '#0B0503',
          900: '#130A07',
          850: '#1B0E09',
          800: '#27130C',
          750: '#3A1D12',
          700: '#5B2D1B',
        },
        surface: {
          primary: '#140907',
          secondary: '#20100A',
          elevated: '#2B160E',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E7D8CE',
          muted: '#B89F8E',
          caption: '#927869',
          disabled: '#644B3F',
          inverse: '#120804',
        },
        accent: {
          DEFAULT: '#F23A24',
          hover: '#B52A1F',
          deep: '#7F160D',
          tan: '#BD9462',
          sand: '#B79A82',
          cream: '#FAF8F5',
        },
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        editorial: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      boxShadow: {
        premium: '0 20px 50px rgba(0,0,0,.28)',
        deep: '0 40px 100px rgba(0,0,0,.40)',
      },
      borderRadius: {
        component: '24px',
        control: '18px',
      },
      maxWidth: {
        content: '720px',
        copy: '680px',
        site: '1320px',
      },
    },
  },
  plugins: [],
} satisfies Config;
