import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        black: '#000',
        'very-dark-blue': 'hsl(220, 13%, 13%)',
        'dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'grayish-blue': 'hsl(220, 14%, 75%)',
        'light-grayish-blue': 'hsl(223, 64%, 98%)',
        orange: 'hsl(26, 100%, 55%)',
        'pale-orange': 'hsl(25, 100%, 94%)',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
}
export default config
