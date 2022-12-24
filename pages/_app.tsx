import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import defaultTheme from '../src/styles/MuiTheme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
