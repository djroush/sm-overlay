import { Head, Html, Main, NextScript } from 'next/document'

export default function Home() {
  return (
    <Html>
      <Head>
        <meta name="description" content="App used to generate overlays for Super Metroid Randomizer races" />
        <link rel="icon" type="image/png" href="sm-overlay.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
