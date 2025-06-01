import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",   // 12px
          small: "0.875rem", // 14px
          medium: "0.9375rem", // 15px
          large: "1.125rem", // 18px
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "6px", 
          medium: "8px", 
          large: "12px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            background: "#0A0A0A",
            foreground: "#FFFFFF",
            focus: "#FF3B30",
            divider: "rgba(255, 255, 255, 0.15)",
            content1: {
              DEFAULT: "#111111",
              foreground: "#FFFFFF"
            },
            content2: {
              DEFAULT: "#1A1A1A",
              foreground: "#FFFFFF"
            },
            content3: {
              DEFAULT: "#222222",
              foreground: "#FFFFFF"
            },
            content4: {
              DEFAULT: "#2A2A2A",
              foreground: "#FFFFFF"
            },
            default: {
              50: "#fafafa",
              100: "#f4f4f5",
              200: "#e4e4e7",
              300: "#d4d4d8",
              400: "#a1a1aa",
              500: "#71717a",
              600: "#52525b",
              700: "#3f3f46",
              800: "#27272a",
              900: "#18181b",
              DEFAULT: "#d4d4d8",
              foreground: "#000"
            },
            primary: {
              50: "#fff1f0",
              100: "#ffe4e2",
              200: "#fececa",
              300: "#fda7a0",
              400: "#ff6b61",
              500: "#FF3B30",
              600: "#e61e12",
              700: "#c2180d",
              800: "#a01a11",
              900: "#841b14",
              DEFAULT: "#FF3B30",
              foreground: "#FFFFFF"
            },
            secondary: {
              50: "#fff9eb",
              100: "#ffefc6",
              200: "#ffde89",
              300: "#ffc54d",
              400: "#ffae1f",
              500: "#FFCC00",
              600: "#e6b800",
              700: "#b38f00",
              800: "#8c6e00",
              900: "#735c00",
              DEFAULT: "#FFCC00",
              foreground: "#000000"
            }
          }
        },
        dark: {
          colors: {
            background: "#0A0A0A",
            foreground: "#FFFFFF",
            focus: "#FF3B30",
            divider: "rgba(255, 255, 255, 0.15)",
            content1: {
              DEFAULT: "#111111",
              foreground: "#FFFFFF"
            },
            content2: {
              DEFAULT: "#1A1A1A",
              foreground: "#FFFFFF"
            },
            content3: {
              DEFAULT: "#222222",
              foreground: "#FFFFFF"
            },
            content4: {
              DEFAULT: "#2A2A2A",
              foreground: "#FFFFFF"
            },
            default: {
              50: "#18181b",
              100: "#27272a",
              200: "#3f3f46",
              300: "#52525b",
              400: "#71717a",
              500: "#a1a1aa",
              600: "#d4d4d8",
              700: "#e4e4e7",
              800: "#f4f4f5",
              900: "#fafafa",
              DEFAULT: "#3f3f46",
              foreground: "#fff"
            },
            primary: {
              50: "#841b14",
              100: "#a01a11",
              200: "#c2180d",
              300: "#e61e12",
              400: "#FF3B30",
              500: "#ff6b61",
              600: "#fda7a0",
              700: "#fececa",
              800: "#ffe4e2",
              900: "#fff1f0",
              DEFAULT: "#FF3B30",
              foreground: "#FFFFFF"
            },
            secondary: {
              50: "#735c00",
              100: "#8c6e00",
              200: "#b38f00",
              300: "#e6b800",
              400: "#FFCC00",
              500: "#ffae1f",
              600: "#ffc54d",
              700: "#ffde89",
              800: "#ffefc6",
              900: "#fff9eb",
              DEFAULT: "#FFCC00",
              foreground: "#000000"
            }
          }
        }
      }
    })
  ]
}
