import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { NextUIProvider } from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <NextUIProvider>
    <NextThemesProvider attribute="class" defaultTheme="dark" enableColorScheme>
      <App />
    </NextThemesProvider>
  </NextUIProvider>
 </React.StrictMode>
);
