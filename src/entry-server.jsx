import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App.jsx'
import { NextUIProvider } from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark" enableColorScheme>
            <App />
            </NextThemesProvider>
        </NextUIProvider>
    </React.StrictMode>
  )
  return { html }
}