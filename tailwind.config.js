/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial-bottom': 'radial-gradient(at bottom, var(--tw-gradient-stops))',
        'gradient-radial-top': 'radial-gradient(at top, var(--tw-gradient-stops))',
        'blog-heading-gradient': "linear-gradient(to right top, rgba(1, 2, 3, 1), rgba(0, 0, 0, 0.0)), url('https://cdn.discordapp.com/attachments/335415866189676559/1066714726354124831/Bild.png')",
        'blog-article-gradient': "linear-gradient(to right top, rgba(1, 2, 3, 1), rgba(0, 0, 0, 0.0))",
        'apply-card-radial': 'radial-gradient(62.35% 115.02% at 50% 100%, rgba(255, 153, 0, 0.15) 0%, rgba(255, 153, 0, 0) 100%)',
        'team-card-radial': "radial-gradient(62.35% 115.02% at 50% 100%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
      },
      backgroundColor: {
        'bal-blue': '#0d1116',
        'baltic-tuerkis': '#00FFB2'
      },
      textColor: {
        'baltic-tuerkis': '#00FFB2'
      },
      listStyleImage: {
        checkmark: 'url("/assets/images/icons/check.png")',
      },
    },
  },
  plugins: [],
}
