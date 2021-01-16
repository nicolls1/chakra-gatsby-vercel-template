import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
    mono: 'monospace',
  },
  textStyles: {
    logo: {
      fontWeight: 'bold',
      fontSize: '4xl',
      fontFamily: 'Arvo',
      letterSpacing: '0.46em',
      lineHeight: '1.4',
      color: 'white',
    },
    headerLink: {
      fontSize: '2xl',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: 'white',
      _hover: {
        color: 'orange.500',
      },
    },
    footerLink: {
      fontSize: 'sm',
      fontWeight: 'normal',
      color: 'gray.500',
    },
    h1: {
      fontSize: { base: '3xl', md: '6xl' },
      fontWeight: 'bold',
    },
    h2: {
      fontSize: { base: '28px', md: '4xl' },
      fontWeight: 'medium',
    },
    h3: {
      fontSize: { base: 'xl', md: '2xl' },
      fontWeight: 'medium',
    },
    h4: {
      fontSize: 'lg',
      fontWeight: 'medium',
    },
    subHeader: {
      fontSize: { base: '13px', md: '18px' },
      fontWeight: 'medium',
    },
    p: {
      fontSize: { base: '13px', md: '15px' },
      fontWeight: 'medium',
    },
    pSmall: {
      fontSize: '13px',
      fontWeight: 'medium',
    },
  },
  colors: {
    gray: {
      50: '#fcfcfc',
      100: '#f9f9f9',
      200: '#f0f0f0',
      300: '#e7e7e7',
      400: '#d6d6d6',
      500: '#c4c4c4',
      600: '#b0b0b0',
      700: '#939393',
      800: '#767676',
      900: '#606060',
    },
    blue: {
      50: '#f5f9fd',
      100: '#eaf3fa',
      200: '#cce0f3',
      300: '#adcdeb',
      400: '#6fa8dd',
      500: '#3182ce',
      600: '#2c75b9',
      700: '#25629b',
      800: '#1d4e7c',
      900: '#184065',
    },
    orange: {
      50: '#fdf8f4',
      100: '#fcf0e9',
      200: '#f7dac7',
      300: '#f1c4a6',
      400: '#e79763',
      500: '#dd6b20',
      600: '#c7601d',
      700: '#a65018',
      800: '#854013',
      900: '#6c3410',
    },
    darkBlue: {
      50: '#f5f6f7',
      100: '#eaedf0',
      200: '#cbd1d9',
      300: '#acb5c2',
      //400: '#6d7e95',
      400: '#637187',
      500: '#2f4667',
      600: '#2a3f5d',
      700: '#23354d',
      800: '#1c2a3e',
      900: '#172232',
    },
    grayBlue: {
      500: '#a0aec0',
    },
  },
  components: {},
})

export default theme
