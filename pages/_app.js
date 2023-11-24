import '@/styles/globals.css'
import ContextProvider from '@/context/ContextProvider'
import Header from '@/componemts/Header'

export default function App({ Component, pageProps }) {
  return(
  <ContextProvider>
    <Header>
      <Component {...pageProps} />
    </Header>
  </ContextProvider>
  )

}
