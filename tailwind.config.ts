import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "group-hover:bg-[#AD00FF]", // your-custom-css-class
    "group-hover:bg-[#00FFB2]",
    "group-hover:bg-[#00A3FF]",
    "group-hover:bg-[#FFE500]",
    "group-hover:bg-[#FF00A8]",
    "group-hover:from-[#AD00FF]",
    "bg-[#AD00FF]",
    "bg-[#00FFB2]",
    "bg-[#00A3FF]",
    "bg-[#FFE500]",
    "bg-[#FF00A8]",
    "group-hover:from-[#00FFB2]",
    "group-hover:from-[#00A3FF]",
    "group-hover:from-[#FFE500]",
    "group-hover:from-[#FF00A8]",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-radial-bottom":
          "radial-gradient(at bottom, var(--tw-gradient-stops))",
        "gradient-radial-top":
          "radial-gradient(at top, var(--tw-gradient-stops))",
        "blog-heading-gradient":
          " url('https://plexus.baltic-galaxy.de/assets/images/baltic-home-1.png')",
        "blog-article-gradient":
          "linear-gradient(to right top, rgba(1, 2, 3, 1), rgba(0, 0, 0, 0.0))",
        "apply-card-radial":
          "radial-gradient(62.35% 115.02% at 50% 100%, rgba(255, 153, 0, 0.15) 0%, rgba(255, 153, 0, 0) 100%)",
        "team-card-radial":
          "radial-gradient(62.35% 115.02% at 50% 100%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
        "header-radial":
          "radial-gradient(70.19% 92.24% at 50% 100%, rgba(0, 255, 178, 0.12) 0%, rgba(0, 255, 178, 0) 100%);",
      },
      backgroundColor: {
        "bal-blue": "#0d1116",
        "baltic-tuerkis": "#00FFB2",
        "bal-gray": "#1A1A1A",
        "bal-dark-purple": "#AD00FF",
      },
      textColor: {
        "baltic-tuerkis": "#00FFB2",
        "bal-tuerkis": "#00FFB2",
        "bal-blue": "#7E89B1",
        "bal-dev-blue": "#00A3FF",
        "bal-yellow": "#FFE500",
        "bal-purple": "#FF00A8",
        "bal-green": "#8FFF00",
        "bal-dark-purple": "#AD00FF",
        "bal-gray": "#1A1A1A",
      },
      listStyleImage: {
        checkmark: 'url("/assets/images/icons/check.png")',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
