import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg-gradient":
          "linear-gradient(25deg, #0030c9, #305fdb, #3e8ded, #3ebbff)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
