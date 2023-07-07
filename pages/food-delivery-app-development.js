import Head from 'next/head'
import React, { useState, useEffect } from 'react';
//components
import Banner from '@/components/SoulBanner'
import OverView from '@/components/OverView'
import Challenge from '@/components/Challenge';
import Solutions from '@/components/Solutions';
import Profilecreation from '@/components/Profilecreation'
import ColorHarmony from '@/components/ColorHarmony';
import Horizons from '@/components/Horizons';
import SoulCTA from '@/components/SoulCTA';
import OurProject from '@/components/OurProject'
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Ourblogs from '@/components/Ourblogs'
import Contact from '@/components/Contact'
import foldImg00 from '../public/images/case-food/horizons.svg'
//images
import foldImg from '../public/images/case-food/beats.png'


export default function fooddelivery() {

  const [showComponent, setShowComponent] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);

    }, 1000); // Delay duration in milliseconds (e.g., 1000ms = 1 second)

    return () => clearTimeout(timeout);
  }, []);


  const CaseOverView = [
    {
      title: 'Overview',
      text: 'Nowadays, most, if not all, food outlets collaborate with food delivery app development services to reach a wide range of audiences and expand their business. Given this, Find Food, a small-scale food delivery startup, approached BitsWits to design an attractive food application that enables customers to place meal orders from their favorite food chain.',
      imagefold: foldImg,
      caseOverView: 'caseOverView'
    }
  ]

  const newspan = <span>The <br /> Problem</span>

  const newtextpont = <span> The client asked BitsWits to design a user-friendly and intuitive mobile application that allows customers to place orders swimmingly. They further requested to incorporate a secure payment method and real-time tracking feature to keep tabs on all orders. <br></br>  And since free items are always customers' favorite, our client asked for this unique feature to be added to the app.</span>  

  const CaseChallengs = [
    {
      title: newspan,
      text: newtextpont,
      caseChallengs: 'caseChallengs'
    }
  ]

  const newspan2 = <span>The <br /> Solutions</span>

  const CaseSolutions = [
    {
      title: newspan2,
      text: 'We were ecstatic when Find Food presented us with this food delivery apps development project – our highly experienced and knowledgeable team members, who specialize in developing all sorts of applications, embraced the challenge. Eventually, it took three months to make this dream a reality. We deployed a plethora of features, some of which are as follows:',
      caseSolution: 'caseSolution'
    }
  ]



  const demo = <h4 className='font30 fontf font-bold'>Sign In</h4>
  const demo1 = <p className='font16 fontf font-medium mt-1 mb-0'>To make food ordering a breeze, the professionals at BitsWits devised sign-in and sign-up options that offer customers expedited access to their contact information. Furthermore, the app is designed with quick navigation features so customers can find what they are looking for effortlessly. With this simple setup, updating customer details whenever desired has never been easier.</p>

  const profile = <h4 className='font30 fontf font-bold '>Coupon</h4>
  const profile1 = <p className='font16 fontf font-medium  mt-1 mb-0'>We incorporated discounts and vouchers into customer profiles and website headers. The original price is no longer presented on any page, while the current prices are highlighted in bold red for an eye-catching effect. Plus, customers who no longer wish to take advantage of these deals can opt-out at their convenience.</p>

  const push = <h4 className='font30 fontf font-bold '>Secure Payment Method</h4>
  const push1 = <p className='font16 fontf font-medium  mt-1 mb-0'>We incorporated discounts and vouchers into customer profiles and website headers. The original price is no longer presented on any page, while the current prices are highlighted in bold red for an eye-catching effect. Plus, customers who no longer wish to take advantage of these deals can opt-out at their convenience.</p>

  const media = <h4 className='font30 fontf font-bold '>Reviews And Ratings</h4>
  const media1 = <p className='font16 fontf font-medium  mt-1 mb-0'>By introducing the review and rating feature on the app, customers can now conveniently assess different restaurants based on the items listed. This way, they will reap all the benefits from simply providing valuable feedback.</p>




  const uncovered = <h2 className='font65 black fontf font-bold line60'>
    BitsWits Came <br />
    Up With A <br />
    Flavorful <br />
    Victory!!
  </h2>

  const data = <p className='font16 black fontf font-medium line30'>
 By offering customers unparalleled convenience today, the food delivery application of Find Food is functioning exceptionally well. BitsWits made it easy for the app owner to connect customers to their favorite food chains easily. Additionally, customers appreciated the convenience of ordering food...
</p>

const headfire = <h2 className='font50 white fontN font-bold line60 mb-0'>
    BitsWits <br />
    Uncovered <br />
    New Musical <br />
    Horizons!
    </h2>




  return (
    <>
      <Head>
        <title>BitsWits</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>

      {/* {showComponent && (
        <Rated />
      )} */}

      <Banner />

      {CaseOverView.map((item, i) =>
        <OverView key={i}
          title={item.title}
          text={item.text}
          imagefold={item.imagefold}
          caseOverView={item.caseOverView}
        />
      )}

      {CaseChallengs.map((item, i) =>
        <Challenge key={i}
          title={item.title}
          text={item.text}
          caseChallengs={item.caseChallengs}
        />
      )}

      {CaseSolutions.map((item, i) =>
        <Solutions key={i}
          title={item.title}
          text={item.text}
          caseSolution={item.caseSolution}
        />
      )}

      <Profilecreation
        demo={demo}
        demo1={demo1}
        profile={profile}
        profile1={profile1}
        push={push}
        push1={push1}
        media={media}
        media1={media1}
        part='true'
        part1='true'
  
      />


      <ColorHarmony />


      <Horizons
      uncovered = {uncovered}
      foldImg00 = {foldImg00}
      data = {data}
      />

      <SoulCTA
      headfire = {headfire}
      soulCta = 'food'
      />


      <OurProject />
      <ClientsThink />
      <Nextproject />
      <Ourblogs />
      <Contact />
    </>
  )
}
