/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sumi: {
          dark: "#0D0B1E",
          night: "#1C1A3C",
          cosmos: "#2F2C49",
          saturn: "#3B3335",
          deepspace:"#292741",
          eclipse: "#25223A",
          nebula: "#6C63FF",
          starlight: "#B3B8FF",
          moon: "#F5F6FA",
          accent: "#F084DC",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        primary: {
          DEFAULT: "#3B82F6", // blue-500
          dark: "#1D4ED8",    // blue-700
        },
        danger: "#EF4444", // red-500
        success: "#10B981", // green-500
      },
      fontFamily: {
        sans: ["Inter", "Pretendard", "system-ui", "sans-serif"],
      },
      spacing: {
        "4.5": "1.125rem",
        "18": "4.5rem",
      },
      maxWidth: {
        "screen-2xl": "1440px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
