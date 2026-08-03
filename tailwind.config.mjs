/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // The `<alpha-value>` placeholder is what lets the slash opacity
        // modifier work (bg-brand-navy/50). Without it Tailwind cannot inject
        // an alpha channel into a raw oklch() string and silently emits an
        // invalid color, so the element paints fully transparent.
        brand: {
          navy:   'oklch(22% 0.065 264 / <alpha-value>)',
          blue:   'oklch(38% 0.11 259 / <alpha-value>)',
          gold:   'oklch(74% 0.14 79 / <alpha-value>)',
          cream:  'oklch(97% 0.012 85 / <alpha-value>)',
          rust:   'oklch(52% 0.165 40 / <alpha-value>)',
          light:  'oklch(95% 0.03 250 / <alpha-value>)',
          sand:   'oklch(92% 0.018 85 / <alpha-value>)',
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
