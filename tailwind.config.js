export const customColors = {
  primary: {
    50: '#BBBDF3',
    100: '#ACAFF0',
    200: '#9DA0ED',
    300: '#8E92EB',
    400: '#7F83E8',
    500: '#686DE4',
    600: '#5E62CD',
    700: '#5357B6',
    800: '#494CA0',
    900: '#3E4189'
  },
  secondary: {
    50: '#F2B1B6',
    100: '#EFA0A5',
    200: '#EC8F95',
    300: '#E97D85',
    400: '#E66C74',
    500: '#E2525C',
    600: '#CB4A53',
    700: '#B5424A',
    800: '#9E3940',
    900: '#883137'
  },
  tertiary: {
    50: '#DFAAD6',
    100: '#D897CD',
    200: '#D184C4',
    300: '#CA71BB',
    400: '#C35EB2',
    500: '#B841A4',
    600: '#A63B94',
    700: '#933483',
    800: '#812E73',
    900: '#6E2762'
  },
  info: '#127695',
  success: '#4CE2A7',
  failure: '#E24C4C',
  warning: '#F1A153'
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    container: {
      center: true
    },
    extend: {
      colors: customColors,
      maxWidth: {
        '2xs': '16rem',
        '8xl': '90rem'
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
        body: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ]
      },
      fontSize: {
        '2xs': '0.625rem'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    }
  },
  plugins: [require('./tailwind.plugin')]
};
