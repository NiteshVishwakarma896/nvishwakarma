import {Providers} from "./providers";
import './globals.css'
import Script from 'next/script'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome - Nitesh Vishwakarma</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta property="og:title" content="Welcome - Nitesh Vishwakarma" />
        <meta property="og:locale" content="en_US" />
        <meta name="description" content="Software Engineer, Web Developer, Backend Engineer, Full Stack Developer" />
        <meta property="og:description" content="Software Engineer, Web Developer, Backend Engineer, Full Stack Developer"/>
        <link rel="canonical" href="https://nvishwakarma.in/" />
        <meta property="og:url" content="https://nvishwakarma.in/" />
        <meta property="og:site_name" content="Welcome - Nitesh Vishwakarma" />
        <link rel="icon" href="/icon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-VSWM6DR0QZ" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-VSWM6DR0QZ');
          `}
        </Script>
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
