import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation : {
        'layer' : "3s ease-in-out alternate infinite move",
        'star' : "3s ease-in-out alternate infinite move, star 2s ease-in-out alternate infinite"
      },
      width: {
        "calc-width": "calc(2rem * 1.75)"
      },
      borderRadius: {
        "calc-radius": "calc(2rem / 2)"
      },
      letterSpacing: {
        "sm" : "0.07em"
      },
      fontFamily: {
        kanit : ["Kanit", "san-serif"]
      },
      colors: {
        "primary": "#FFFFFF",
        "primary-static": "#FFFFFF",
        "primary-darker": "#eff4f5",
        "secondary": "#7645D9",
        "secondary-darker": "#280d5f",
        "secondary-lighter": "#7a6eaa", 
        "secondary-lightest": "#b8add2",
        "accent": "#1fc7d4",
        "accent-alert-soft": "#ffb237",
        "accent-alert-strong": "#ED4B9E",
        "background-alt": "#27262c",
        "primary-dark-mode": "#08060B",
        "disabled": "#666171",
        "card-shadow": "#E7E3EB",
        "card-shadow-dark": "#383241",
        "card-background": "#ffffff", 
      },
      boxShadow : {
        "shadow": "inset 0px -1px 0px 0px  #0E0E2C66",
        "card": "0px 4px 0px 0px #E7E3EB",
        "card-dark": "0px 4px 0px 0px #666171"
      },
      backgroundImage: {
        'light-mode': "#FFFFFF",
        'dark-mode': "#08060B",
        'gradient-bg': "linear-gradient(rgb(0, 191, 165) 0%, rgb(0, 90, 90) 100%)",
        'hero-gradient' : "linear-gradient(140deg, #e6fdff 0%, #f3efff 100%)",
        'hero-gradient-dark' : "radial-gradient(105% 50% at 50% 50%,#21193a 0%,#191326 100%)",
        'user-gradient': 'linear-gradient(180deg,#fff 22%,#d7caec 100%)',
        'user-gradient-dark': 'linear-gradient(180deg,#201335 100%, #09070c 22%)',
        'earn-gradient': 'linear-gradient(110deg,#f2ecf2,#e8f2f6)',
        'earn-gradient-dark': 'linear-gradient(110deg,#3b4155,#3a3045)',
        'sun': "url(../../src/app/assets/svg/sun.svg)",
        'moon': "url(../../src/app/assets/svg/moon.svg)"
      },
      backgroundSize: {
        "cover": "cover"
      },   
    },
  },
  plugins: [require("daisyui")],
}
export default config
