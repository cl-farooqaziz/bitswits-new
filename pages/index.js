import Head from 'next/head'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Yearsofexpertise from '@/components/Yearsofexpertise'
import Blogfaqs from '@/components/Blogfaqs'
import Nextproject from '@/components/Nextproject'
import Ourservices from '@/components/Ourservices'
import Lookingfor from '@/components/Lookingfor'


export default function Home() {
  return (
    <>
      <Head>
        <title>BitsWits</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <About />
      <Yearsofexpertise />
      <Ourservices />
      <Lookingfor />
      <Nextproject />
      <Blogfaqs/>
   



    </>
  )
}
