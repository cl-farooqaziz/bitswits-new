import Head from 'next/head'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Yearsofexpertise from '@/components/Yearsofexpertise'
import Blogfaqs from '@/components/Blogfaqs'
import Nextproject from '@/components/Nextproject'
import Ourservices from '@/components/Ourservices'
import Lookingfor from '@/components/Lookingfor'
import Trusted from '@/components/Trusted'
import Ourportfolio from '@/components/Ourportfolio'
import OurProject from '@/components/OurProject'
import Ourblogs from '@/components/Ourblogs'
import ClientsThink from '@/components/ClientsThink'
import Contact from '@/components/Contact'
import Rated from '@/components/Rated'


export default function Home() {
  return (
    <>
      <Head>
        <title>BitsWits</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>
      <Banner />
      <Rated />
      <About />
      <Yearsofexpertise />
      <Ourservices />
      <Lookingfor />
      <Trusted />
      <Ourportfolio />
      <OurProject />
      <ClientsThink />
      <Nextproject />
      <Ourblogs />
      <Contact />
    </>
  )
}
