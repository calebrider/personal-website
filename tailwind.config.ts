import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundPosition: {
          'pos-0': '0% 0%',
          'pos-100': '100% 100%',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      colors: {
        "primary": "#3f37c9",
        "secondary": "#4361ee",
        "accent": "#f72585",
        "background": "#efeff2ff",
        "background-alternate": "#f2f2f2ff",
        "surface": "#f9f9f9ff",
        "primary-text": "#353535ff",
        "secondary-text": "#4c4c4cff",
        "success": "#4BB543",
        "error": "#FF3333",
      },
      fontFamily: {
        sans: ['var(--font-poppins)']
      },
      padding: {
        "margin-padding": "10%"
      }
    },
  },
  plugins: [],
}
export default config
