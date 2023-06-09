import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import styles from '@/styles/ColorHarmony.module.css'
//components
import Banner1 from '@/components/TravelBanner'
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
//images
import foldImg from '../public/images/case-travel/beats.png'
import foldImg00 from '../public/images/case-travel/horizons.svg'

export default function travelapp() {

  const [showComponent, setShowComponent] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);

    }, 1000); // Delay duration in milliseconds (e.g., 1000ms = 1 second)

    return () => clearTimeout(timeout);
  }, []);


  const domoer = <span>  <b>Today, the travel and hospitality industries depend heavily on mobile applications, and 2023</b> <br></br> Established with the intention of giving unique and once-in-a-lifetime travel experiences to people touring the world, one of the most reputable travel companies, Gateway Tour Agency, works hard to provide people with top-notch quality services. In addition, the travel agency creates unique, personalized packages that not only meet but even go beyond expectations. </span>


  const CaseOverView = [
    {
      title: 'Overview',
      text: domoer,
      imagefold: foldImg,
      caseOverView: 'caseOverView'
    }
  ]

  const newspan = <span>The Concept Behind Bliss <br></br> Travel </span>

  const CaseChallengs = [
    {
      title: newspan,
      subtitle: 'Developed A Music Streaming App For Music Lovers To Listen To Millions Of Track.',
      text: 'The travel market is becoming immensely competitive; thus, it is essential to come up with fresh ideas for beating the growing competition. Through mobile apps, travel firms can grow their customer base by keeping current clients and luring new ones. Given that nearly 85% of travelers bring a mobile device on their tour, it is essential for travel agencies to stay in touch and communicate with their clients at all times.',
      caseChallengs: 'caseChallengs'
    }
  ]

  const newspan2 = <span>Typeface  <br /> Used in <br /> Application</span>

  const CaseSolutions = [
    {
      title: newspan2,
      text: 'The biggest challenge was probably creating a social networking platform that stands out from other platforms like Instagram, Snapchat, and Facebook. Although the idea was unique, people would not buy it if the implementation was not done the right way.',
      caseSolution: 'caseSolution'
    }
  ]

  const demo = <h4 className='font30 fontf font-bold'>Montserrat</h4>
  const demo1 = <p className='font14 fontf font-medium mt-1 mb-0'>The biggest challenge was probably creating a social networking platform that stands out from other platforms like Instagram,</p>

  const profile = <h4 className='font30 fontf font-bold '>Color Harmony</h4>
  const profile1 = <p className='font14 fontf font-medium  mt-1 mb-0'>The biggest challenge was probably creating a social networking platform that stands out from other platforms like Instagram,</p>

  const uncovered = <h2 className='font65 black fontf font-bold line60'>

    The Process of <br /> Elevation:
  </h2>

  const data = <p className='font16 black fontf font-medium line30 mt-3'>

    <b>From Vision to Design Crafting appealing UI Designs</b>  <br />

    Admittedly, there aren't many travel apps made specifically for getting genuine travel information, customizing travel plans, and reserving desired destinations. Therefore, Gateway Tour Agency wanted to give their customers an application that can give them a more convenient
  </p>

  const headfire = <h2 className='font50 white fontN font-bold line60 mb-0'>
    BitsWits <br />
    Uncovered <br />
    New Musical <br />
    Horizons!
  </h2>

  const code1 = <span className={styles.left}>#55BAAA</span>
  const code2 = <div className={styles.travel}> <span className={styles.right}>#081213</span>  </div>
  const heading12 = <h3 className='fontf font50 black center font-bold'>Color Harmony</h3>

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

      <Banner1 />

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
        part='true'
      />


      <ColorHarmony
        heading={heading12}
        colorbx1='true'
        left={code1}
        right={code2}
        caseHarmony='trvel'
      />


      <Horizons
        uncovered={uncovered}
        foldImg00={foldImg00}
        data={data}
      />

      <SoulCTA
        headfire={headfire}
        soulCta='posy'
      />


      <OurProject />
      <ClientsThink />
      <Nextproject />
      <Ourblogs />
      <Contact />
    </>
  )
}
