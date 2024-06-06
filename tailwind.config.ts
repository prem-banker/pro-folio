import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // NEW THEME
  theme: {
    extend: {
      colors: {
        // html bckground
        baseColor: '#010C15',
        // Primary colors
        primaryDarkNavyBlue: '#01080E',
        primaryLightNavyBlue: '#011627',
        primaryDeepNavyBlue: '#011221',
        // Secondary colors
        secondaryLightBlue: '#607B96',
        secondaryFluorescentGreen: '#3C9D93',
        secondaryBrightPurple: '#4D5BCE',
        secondaryWhite: '#FFFFFF',
        // Accent colors
        accentOrange: '#FEA55F',
        accentBrightGreen: '#43D9AD',
        accentPastelPink: '#E99287',
        accentMagenta: '#C98BDF',
        // Line color
        line: '#1E2D3D',
        // Gradients
        gradient1: '#4D5BCE',
        gradient2: '#43D9AD',
      },
      fontFamily: {
        sans: ['Fira Code', 'sans-serif'],
      },
      fontSize: {
        headline: '62px',
        subheadline: '32px',
        body: '18px',
        labels: '16px',
        code: '14px',
      },
      boxShadow: {
        primary: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        '0.5em': '0.5em',
      },
      lineHeight: {
        extra: '3',
        shrink: '1.2'
      },
      minHeight: {
        inherit: 'inherit',
      },
      spacing: {
        '69px': '69px',
      },
      buttonVariants: {
        primary: {
          backgroundColor: '#FEA55F',
          fontColor: '#01080E',
          hoverBackgroundColor: '#FFAC6B',
        },
        default: {
          backgroundColor: '#1C2B3A',
          fontColor: '#FFFFFF',
          hoverBackgroundColor: '#263B50',
        },
        ghost: {
          fontColor: '#FFFFFF',
          hoverFontColor: '#FFFFFF',
          borderOpacity: '50%',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'active'],
      textColor: ['hover', 'active'],
      borderColor: ['hover', 'active'],
      borderOpacity: ['hover', 'active'],
    },
  },
  plugins: [],

  // OLD THEME 
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //   },
  // },
  // plugins: [],
};
export default config;
