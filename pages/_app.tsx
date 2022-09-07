import { AppProps } from 'next/app'
import '../styles/globals.css'
import { createClient, Provider } from 'urql';

const client = createClient({ url: 'http://localhost:5000/graphql' })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
