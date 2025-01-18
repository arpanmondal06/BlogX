/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': `
          radial-gradient(ellipse farthest-side at 76% 77%, rgba(245, 228, 212, 0.25) 4%, rgba(255, 255, 255, 0) calc(4% + 1px)),
          radial-gradient(circle at 80% 30%, #fef6ec 4%, rgba(255, 255, 255, 0) 4.18%),
          linear-gradient(135deg, #ff0000 0%, #000036 100%),
          radial-gradient(ellipse at 28% 0%, #ffcfac 0%, rgba(98, 149, 144, 0.5) 100%),
          linear-gradient(180deg, #cd6e8a 0%, #f5eab0 69%, #d6c8a2 70%, #a2758d 100%)
        `,
        'custom-gradient2': `
        linear-gradient(180deg, #FFB7B7 0%, #727272 100%), radial-gradient(60.91% 100% at 50% 0%, #FFD1D1 0%, #260000 100%), linear-gradient(238.72deg, #FFDDDD 0%, #720066 100%), linear-gradient(127.43deg, #00FFFF 0%, #FF4444 100%), radial-gradient(100.22% 100% at 70.57% 0%, #FF0000 0%, #00FFE0 100%), linear-gradient(127.43deg, #B7D500 0%, #3300FF 100%)
        `,
      },
      fontFamily: {
        vinyl: ['Rubik Vinyl', 'serif'],
      },
    },
  },
  plugins: [],
}

