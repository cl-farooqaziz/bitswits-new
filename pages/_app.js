import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';


export default function App({ Component, pageProps }) {
  return (
    <>
    <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
