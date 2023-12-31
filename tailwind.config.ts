import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-home':
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.65)), url('../public/bg-home.jpg')",
      },
    },
  },
  plugins: [],
}
export default config
