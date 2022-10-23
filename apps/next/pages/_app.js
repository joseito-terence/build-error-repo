import 'raf/polyfill'

const fixReanimatedIssue = () => {
  // FIXME remove this once this reanimated fix gets released
  // https://github.com/software-mansion/react-native-reanimated/issues/3355
  if (process.browser) {
    // @ts-ignore
    window._frameTimestamp = null
  }
}

fixReanimatedIssue()

import { Provider } from 'core/provider'
import React from 'react'
import '../styles/globals.css';
import { SessionProvider } from "next-auth/react"
import { SSRProvider } from 'react-bootstrap'

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <SSRProvider>
      <SessionProvider session={session}>
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </SSRProvider>
  )
}

export default MyApp
