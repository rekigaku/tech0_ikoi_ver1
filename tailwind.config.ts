// import { Config } from 'tailwindcss';

// const config: Config = {
//   content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
//   plugins: [require('daisyui')],
// };

// export default config;


module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],

  // この部分にdaisyuiのテーマを追加する
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },

  plugins: [
    require('daisyui'),
  ],
};
