import { Header, Footer } from "./common"
import "./global.css"

const siteName= '之機堂';
const description = 'かえるのホームページです。';
const url = 'https://kaeru2193.net';

export const metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '@kaeru2193',
    creator: '@kaeru2193',
  },
  alternates: {
    canonical: url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
        <link rel="manifest" href="/favicons/site.webmanifest"/>
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#60c187"/>
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#60c187"/>
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#60c187"/>
      </head>
      <body>
        <Header/>
        <div className="article">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}