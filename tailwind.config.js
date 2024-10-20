/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      'dark-md': '0 4px 6px rgba(0, 0, 0, 0.8)', // Custom darker shadow
    },
    extend: {
      fontFamily: {
        Orbitron: ['Orbitron', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Oswald: ['Oswald', 'sans-serif']
      },
      fontSize: {
        '15xl': '10rem'
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        updown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spinClockwise: {
          '0%': { transform: 'rotate(0deg) translateX(30px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(30px) rotate(-360deg)' },
        },
        spinCounterClockwise: {
          '0%': { transform: 'rotate(0deg) translateX(20px) rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg) translateX(20px) rotate(-360deg)' },
        },
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
        updown: "updown 2s ease-in-out infinite",
        spinClockwise: 'spinClockwise 8s linear infinite',
        spinCounterClockwise: 'spinCounterClockwise 5s linear infinite',
      },
    }
  },
  plugins: [],
}
