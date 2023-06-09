import Head from 'next/head'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from '@/styles/ColorHarmony.module.css'
//components
import Banner from '@/components/RideBanner'
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
import foldImg from '../public/images/case-ride/foldimg.png'
import foldImg00 from '../public/images/case-ride/horizons.png'


export default function ezride() {

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
      subtext: 'Making the Ride Easier: Why Easy Ride Chose BitsWits for Ride Hailing App Development Services',
      text: 'BitsWits devised an application Easy Ride, a ride-hailing app allowing users to quickly and conveniently hail a ride from their smartphone. With Easy Ride, users can easily select the type of vehicle they want, book it in advance or at the last minute, and track their driver`s progress until they reach their destination. Easy Ride also provides riders....',
      imagefold: foldImg,
      caseOverView: 'rideOverView'
    }
  ]

  const newspan = <span>The Concept <br /> Behind EZ <br /> Ride</span>

  const CaseChallengs = [
    {
      title: newspan,
      subtitle: 'Developed A Music Streaming App For Music Lovers To Listen To Millions Of Track.',
      text2: 'The demand for ride hailing services is increasing, and soon, it is predicted that the transportation service sector would increase by $250 billion. In order to give riders the finest ride hailing experience possible, Easy Ride must have a unique solution created by a reputable ride-hailing app development company....',
      caseChallengs: 'caseChallengs'
    }
  ]

  const newspan2 = <span>Typeface <br /> Used in <br /> Application</span>

  const CaseSolutions = [
    {
      title: newspan2,
      text: 'The biggest challenge was probably creating a social networking platform that stands out from other platforms like Instagram, Snapchat, and Facebook. Although the idea was unique, people would not buy it if the implementation was not done the right way.',
      caseSolution: 'caseSolution'
    }
  ]

  const demo = <h4 className='font30 fontf font-bold'>Montserrat</h4>
  const demo1 = <p className='font16 fontf font-medium mt-1 mb-0'>The biggest challenge was probably creating a social networking platform that stands out from other platforms like Instagram,</p>

  const profile = <h4 className='font30 fontf font-bold '>Color Harmony</h4>
  const profile1 = <p className='font16 fontf font-medium  mt-1 mb-0'>The biggest challenge was probably creating a social networking platform that stands out from other platforms like Instagram,</p>

  const heading = <h2 className='font50 black fontf font-bold line60 text-center mx-auto'>
    Color Harmony
  </h2>

  const left = <div className={styles.left}>#FF6600</div>
  const right = <div className={styles.right}>#303439</div>

  const uncovered = <h2 className='font65 black fontf font-bold line60'>
    The Process of <br /> Elevation:
  </h2>

  const covered = <h5 className='font20 black fontf font-bold line30'>
    From Vision to Design Crafting appealing UI Designs
  </h5>

  const data2 = <p className='font16 black fontf font-medium line30'>
    The ride hailing service app Easy Ride by BitsWits has revolutionized the way people move around by providing an affordable, convenient, and safe mode of transport. The app offers users a range of different vehicles to choose from including...<Link href="#"> Read More</Link>
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
          subtext={item.subtext}
          text={item.text}
          imagefold={item.imagefold}
          caseOverView={item.caseOverView}
        />
      )}

      {CaseChallengs.map((item, i) =>
        <Challenge key={i}
          title={item.title}
          text2={item.text2}
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
        part1=''
      />


      <ColorHarmony
        heading={heading}
        left={left}
        right={right}
        colorbx1='true'
        colorbx2=''
        caseHarmony='ride'
      />


      <Horizons
        uncovered={uncovered}
        covered={covered}
        foldImg00={foldImg00}
        data2={data2}
      />

      <SoulCTA
        headfire={headfire}
        soulCta='ride'
      />


      <OurProject />
      <ClientsThink />
      <Nextproject />
      <Ourblogs />
      <Contact />
    </>
  )
}
