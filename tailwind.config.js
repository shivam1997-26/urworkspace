// ▼ Brand colours live here (Tailwind) and in src/theme.js (MUI). "brand" = sand → near-black scale, "accent" = amber-brown.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        brand: { 50: '#faf7ef', 100: '#f0eada', 200: '#e2d9c3', 500: '#8a867c', 600: '#55524a', 700: '#2a2a2a', 800: '#1f1f1f', 900: '#1f1f1f' },
        accent: { 400: '#f0b45c', 500: '#d98b2b', 600: '#b36a12' },
        ink: '#262626',
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'] },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        pop: { '0%': { transform: 'scale(.6)', opacity: 0 }, '100%': { transform: 'scale(1)', opacity: 1 } },
        spin: { to: { transform: 'rotate(360deg)' } },
      },
      animation: { float: 'float 6s ease-in-out infinite', 'float-slow': 'float 8s ease-in-out infinite', marquee: 'marquee 32s linear infinite', pop: 'pop .35s ease-out both', 'spin-slow': 'spin 40s linear infinite' },
    },
  },
  plugins: [],
};
