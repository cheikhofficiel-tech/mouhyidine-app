@tailwind base;
@tailwind components;
@tailwind utilities;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fef8ee',
          100: '#f7e7ce',
          200: '#d9a96a',
          300: '#b78035',
        },
        dark: {
          900: '#090a0d',
          800: '#10141a',
        },
      },
    },
  },
  plugins: [],
};
