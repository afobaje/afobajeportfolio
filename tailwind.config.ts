import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      SwankyMojo:['Swanky Mojo'],
      Coolvetica:['Coolvetica']
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'milky-white':'rgb(251, 254, 251)',
        'slight-brown':'rgb(243, 216, 199)',
        'deep-brown':'rgb(70, 63, 58)',
        // 'jet-black':'rgb(53, 53, 53)',
        'jet-black':'rgb(13, 27, 42)',
        'indigo-dye':'rgb(40, 75, 99)'
      }
    },
  },
  plugins: [],
};
export default config;
