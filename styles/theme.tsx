import { extendTheme } from "@chakra-ui/react"
import { theme as ChakraTheme } from "@chakra-ui/react"; "@chakra-ui/react";
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
})

const fonts = {
    ...ChakraTheme.fonts,
    body: `'Balsamiq Sans', cursive, 'Public Sans', 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,
    heading: `'Balsamiq Sans', cursive, 'Public Sans', 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`
}

const Overrides = {
    ...ChakraTheme,
    config: {
        initialColorMode: "light",
        useSystemColorMode: false
    },
    fonts,
    breakpoints,
    fontWeights: {
        normal: 300,
        medium: 400,
        bold: 700
    },
    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
    },
    colors: {
        white: "#f5f5f5",
        black: "#02040f",
        gray: "#f4f1de",
        pink: {
            600: "#e07a5f",
            400: "#f2cc8f"
        },
        blue: {
            400: "#81b29a",
            600: "#3d405b"
        },

    }
}

const theme = extendTheme(Overrides)

export default theme;