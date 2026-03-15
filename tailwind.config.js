/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core Palette - Deep Space
        'void': '#050A15',
        'dark': '#0A0E27',
        'surface': '#0F1428',
        'surface-elevated': '#141B2D',
        
        // Brand Colors - Electric
        'cyan': {
          DEFAULT: '#00D9FF',
          dim: 'rgba(0, 217, 255, 0.1)',
          glow: 'rgba(0, 217, 255, 0.4)',
          light: '#4DE8FF',
          dark: '#00A8CC',
        },
        'magenta': {
          DEFAULT: '#FF006E',
          dim: 'rgba(255, 0, 110, 0.1)',
          glow: 'rgba(255, 0, 110, 0.4)',
          light: '#FF4D9A',
          dark: '#CC0058',
        },
        
        // Text Colors
        'text-primary': '#F0F4F8',
        'text-secondary': '#94A3B8',
        'text-muted': '#64748B',
        
        // Legacy mappings
        'platinum': '#F0F4F8',
        'silver': '#94A3B8',
        'charcoal': '#0F1428',
        'graphite': '#1a1a1d',
      },
      fontFamily: {
        'display': ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        'display-light': ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        'body': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'mono': ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Display Scale - Premium Hierarchy
        'display-xl': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 3vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        
        // Body Scale
        'body-lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '-0.01em' }],
        'body-md': ['1rem', { lineHeight: '1.7', letterSpacing: '-0.01em' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        
        // Caption/Label
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.15em' }],
        'label': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.2em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        'section': 'clamp(5rem, 12vh, 9rem)',
        'section-sm': 'clamp(3rem, 8vh, 5rem)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        drift: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'expo-in': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'elastic': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'dramatic': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [],
}
