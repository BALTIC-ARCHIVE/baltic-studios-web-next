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
        'blog-heading-gradient': " url('https://plexus.baltic-galaxy.de/assets/images/baltic-home-1.png')",
        'blog-article-gradient': "linear-gradient(to right top, rgba(1, 2, 3, 1), rgba(0, 0, 0, 0.0))",
        'apply-card-radial': 'radial-gradient(62.35% 115.02% at 50% 100%, rgba(255, 153, 0, 0.15) 0%, rgba(255, 153, 0, 0) 100%)',
        'team-card-radial': "radial-gradient(62.35% 115.02% at 50% 100%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
        'header-radial': "radial-gradient(70.19% 92.24% at 50% 100%, rgba(0, 255, 178, 0.12) 0%, rgba(0, 255, 178, 0) 100%);",
      },
      backgroundColor: {
        'bal-blue': '#0d1116',
        'baltic-tuerkis': '#00FFB2'
      },
      textColor: {
        'baltic-tuerkis': '#00FFB2',
        'bal-tuerkis': '#00FFB2',
        'bal-blue': '#7E89B1',
        'bal-dev-blue': '#00A3FF',
        'bal-yellow': '#FFE500',
        'bal-purple': '#FF00A8',
        'bal-green': '#8FFF00',
        'bal-dark-purple': '#AD00FF'
      },
      listStyleImage: {
        checkmark: 'url("/assets/images/icons/check.png")',
      },
    },
  },
  plugins: [],
}
