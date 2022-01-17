import React from "react";
import { ChakraProvider, ColorModeProvider, useColorMode } from '@chakra-ui/react'
import { AppProps } from "next/app";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps):React.ReactNode {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider options={{
        initialColorMode: "light",
        useSystemColorMode: true
      }}>
      <Component { ...pageProps } />
      </ColorModeProvider>
    </ChakraProvider>
    )
}

export default MyApp
