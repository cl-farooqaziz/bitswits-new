import Header from '@/components/Header';
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from "next/router";
import Footerlp from '@/components/Footer-lp';
import NewHeaderFy from '@/components/NewHeaderFy';

export default function App({ Component, pageProps }) {

  const router = useRouter();

  const newfooter = router.pathname == '/ios-app-development-company-lp' || router.pathname == '/android-app-development-company-lp'
    || router.pathname == '/flutter-app-development-company-lp'
    || router.pathname == '/mobile-app-development-company-lp'
    || router.pathname == '/mobile-app-development-los-angeles'
    || router.pathname == '/react-native-app-development-company-lp'
    || router.pathname == '/wearable-app-development-company-lp'
    || router.pathname == '/cross-platform-app-development-company-lp'
    || router.pathname == '/web-app-development-company-lp'
    || router.pathname == '/2d-game-development-company-lp'
    || router.pathname == '/3d-game-development-company-lp'
    || router.pathname == '/nft-game-development-company-lp'
    || router.pathname == '/game-app-development-company-lp'
    || router.pathname == '/blockchain-game-development-company-lp';

  return (
    <>


      {newfooter ?

        <NewHeaderFy />

        :

        <Header />
      }

      <Component {...pageProps} />


      {newfooter ?
        <Footerlp />

        :
        <Footer />



      }
    </>
  )
}
