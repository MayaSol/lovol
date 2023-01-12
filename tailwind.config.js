module.exports = {
  content: ["./build/**/*.{html,js}"],
  separator: '_',
  theme: {
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
      '3xl': '1800px',
      '4xl': '1920px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
        '4xl': '64px'
      },
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['14px', { lineHeight: '24px' }],
      '15': ['15px', { lineHeight: '21px' }],
      base: ['16px', { lineHeight: '26px' }],
      lg: ['18px', { lineHeight: '28px' }],
      xl: ['20px', { lineHeight: '30px' }],
      '2xl': ['24px', { lineHeight: '34px' }],
      '36px': ['36px', { lineHeight: '42px' }],
      '40px': ['40px', { lineHeight: '48px' }],
      '48px': ['48px', { lineHeight: '58px' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    colors: ({ colors }) => ({
      inherit: 'inherit',
      slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#7692A7',
        500: '#64748b',
        550: '#4B6175',
        600: '#4A697D',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
      gray: {
        50: '#F0F0F0',
        100: '#f3f4f6',
        200: '#E6E6E6',
        250: '#C3D3DD',
        300: '#d1d5db',
        330: '#A7B3BD',
        350: '#94A1AB',
        400: '#8F9295',
        500: '#6b7280',
        600: '#455764',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
      orange: {
        50: '#fff7ed',
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#FC9D28',
        500: '#FF7300',
        600: '#ea580c',
        700: '#c2410c',
        800: '#9a3412',
        900: '#7c2d12',
      },
      blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#002E50',
        850: '#06375A',
        900: '#011450',
      },
      green: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#7BAB4A',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
      },
    }),
    fontFamily: {
      sans: [
        'Circe',
        '-apple-system',
        'BlinkMacSystemFont',
        'ui-sans-serif',
        'system-ui',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
      icon: [
        '"Font Awesome 6 Free"'
      ]
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      default: '0px 0px 14px rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: 'none',
    },
    extend: {
      spacing: {
        '3px': '3px',
        '5px': '5px',
        '6px': '6px',
        '7px': '7px',
        '8px': '8px',
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '22px': '22px',
        '24px': '24px',
        '25px': '25px',
        '28px': '28px',
        '30px': '30px',
        '32px': '32px',
        '35px': '35px',
        '40px': '40px',
        '42px': '42px',
        '45px': '45px',
        '50px': '50px',
        '55px': '55px',
        '56px': '56px',
        '60px': '60px',
        '64px': '64px',
        '65px': '65px',
        '80px': '80px',
        '70px': '70px',
        '90px': '90px',
        '100px': '100px',
        '110px': '110px',
        '115px': '115px',
        '120px': '120px',
        '124px': '124px',
        '128px': '128px',
        '130px': '130px',
        '140px': '140px',
        '150px': '150px',
        '160px': '160px',
        '176px': '176px',
        '180px': '180px',
        '170px': '170px',
        '200px': '200px',
        '220px': '220px',
        '285px': '285px',
        '300px': '300px',
        '350px': '350px',
        '390px': '390px',
        '397px': '397px',
        '400px': '400px',
        '402px': '402px',
        '450px': '450px',
        '500px': '500px',
        '600px': '600px',
        '466px': '466px',
        '736px': '736px'
      },
      borderRadius: {
        '4px': '4px',
        '10px': '10px',
        '24px': '24px'
      },
      gridRow: {
        'span-10': 'span 10 / span 10',
        'span-20': 'span 20 / span 20',
        'test': 'span 30 / span 30',
      },
      gridTemplateColumns: {
        '2-300px': 'repeat(2, minmax(0, 300px))',
      }
    },
  },
  plugins: [],
}
