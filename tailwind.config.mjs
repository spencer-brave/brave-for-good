/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:   'oklch(22% 0.065 264)',
          blue:   'oklch(38% 0.11 259)',
          gold:   'oklch(74% 0.14 79)',
          cream:  'oklch(97% 0.012 85)',
          rust:   'oklch(52% 0.165 40)',
          light:  'oklch(95% 0.03 250)',
          sand:   'oklch(92% 0.018 85)',
        },
      },
      fontFamily: {
        sans:  ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        serif: ['Bitter', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
