/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        parlour: {
          // Dark theme colors (preserved for compatibility)
          night: '#120815',
          plum: '#4a174e',
          velvet: '#7b2b75',
          orchid: '#c15ac4',
          rose: '#f7b7c9',
          pearl: '#fff7f1',
          champagne: '#f4d58d',
          gold: '#c7953b',
          bronze: '#8b5d2d',
          ink: '#241727',
          // Light theme colors
          cream: {
            50: '#FFFDF9',
            100: '#FAF7F2',
            200: '#F5F1EB',
            300: '#EBE5DC'
          },
          'gold-light': '#E5C68F',
          'gold-dark': '#B8860B',
          'gold-darker': '#9A7310',
          text: {
            primary: '#1A1A1A',
            secondary: '#4A4A4A',
            tertiary: '#6B6B6B',
            muted: '#9A9A9A'
          },
          blush: '#F4E8E3',
          sage: '#E8F0E8',
          'pearl-white': '#F9F6F3'
        }
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif'
        ],
        display: [
          'var(--font-display)',
          'Cormorant Garamond',
          'Georgia',
          'serif'
        ]
      },
      boxShadow: {
        glow: '0 24px 80px rgba(193, 90, 196, 0.28)',
        gold: '0 18px 48px rgba(199, 149, 59, 0.28)',
        glass: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 24px 70px rgba(18,8,21,0.28)'
      },
      backgroundImage: {
        'parlour-radial': 'radial-gradient(circle at 20% 20%, rgba(244,213,141,0.34), transparent 28%), radial-gradient(circle at 80% 10%, rgba(193,90,196,0.24), transparent 30%), linear-gradient(135deg, #120815 0%, #4a174e 48%, #8b5d2d 100%)',
        'gold-sheen': 'linear-gradient(135deg, #fff7f1 0%, #f4d58d 38%, #c7953b 70%, #fff7f1 100%)'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -14px, 0)' }
        },
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(24px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
        },
        aura: {
          '0%, 100%': { opacity: '0.68', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' }
        }
      },
      animation: {
        shimmer: 'shimmer 2.4s linear infinite',
        float: 'float 7s ease-in-out infinite',
        revealUp: 'revealUp 760ms cubic-bezier(0.22, 1, 0.36, 1) both',
        aura: 'aura 8s ease-in-out infinite'
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    }
  },
  plugins: []
};
