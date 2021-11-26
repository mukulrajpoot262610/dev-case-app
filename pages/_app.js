import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/Navbar'
import '../styles/global.css'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
