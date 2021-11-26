import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/Navbar'
import '../styles/global.css'
import Layout from '../components/layout/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>

      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>

      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <Navbar />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>

    </>
  )
}

export default MyApp
