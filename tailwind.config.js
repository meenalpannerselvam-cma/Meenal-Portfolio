/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF9F6',
          100: '#F7F5F0',
          200: '#EFECE4',
          300: '#E3DFD4',
        },
        ink: {
          navy: '#14213D',
          dark: '#0D172A',
          muted: '#4B5565',
        },
        accent: {
          teal: '#0F766E',
          'teal-light': '#14B8A6',
          'teal-dark': '#0D5F58',
        },
        highlight: {
          amber: '#F59E0B',
          coral: '#F26B4E',
          green: '#16A34A',
        },
        darkbg: {
          main: '#0B1325',
          card: '#111F38',
          border: '#1E3252',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        'content': '1160px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(20, 33, 61, 0.06), 0 2px 6px -1px rgba(20, 33, 61, 0.04)',
        'soft-lg': '0 12px 32px -4px rgba(20, 33, 61, 0.08), 0 4px 12px -2px rgba(20, 33, 61, 0.04)',
        'soft-xl': '0 20px 48px -6px rgba(20, 33, 61, 0.12), 0 8px 20px -4px rgba(20, 33, 61, 0.06)',
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4.5s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        }
      }
    },
  },
  plugins: [],
}
