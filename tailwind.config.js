/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          50:  '#fdfbf3',
          100: '#faf4d9',
          200: '#f4e7ab',
          300: '#ecd571',
          400: '#e2bc3e',
          500: '#d4a017',
          600: '#b8820f',
          700: '#92620d',
          800: '#774e12',
          900: '#634114',
        },
        navy: {
          50:  '#f0f4f8',
          100: '#d9e4ef',
          200: '#b3c8de',
          300: '#7ea4c4',
          400: '#517fa8',
          500: '#33618e',
          600: '#254d76',
          700: '#1e3d61',
          800: '#1a3252',
          900: '#0f1f35',
          950: '#091428',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
