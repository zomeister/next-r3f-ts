const tailwindConfig = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,md,mdx}', './src/components/**/*.{js,ts,jsx,tsx,md,mdx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

/** @zoe, changed to es module! */
module.exports = tailwindConfig;
