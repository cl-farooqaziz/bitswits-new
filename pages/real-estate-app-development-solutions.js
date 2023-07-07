import Head from 'next/head'
import React, { useState, useEffect } from 'react';
//components
import Banner from '@/components/MarkBanner'
import OverView from '@/components/OverView'
import Challenge from '@/components/Challenge';
import Solutions from '@/components/Solutions';
import Profilecreation from '@/components/Profilecreation'
import ColorHarmony2 from '@/components/ColorHarmony2';
import Horizons from '@/components/Horizons';
import SoulCTA from '@/components/SoulCTA';
import OurProject from '@/components/OurProject'
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Ourblogs from '@/components/Ourblogs'
import Contact from '@/components/Contact'
//images
import foldImg from '../public/images/case-mark-place/foldimg.png'
import foldImg00  from '../public/images/case-mark-place/horizons.png'


export default function MarkPlace() {

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
            subtitle: 'Developed A Music Streaming App For Music Lovers To Listen To Millions Of Track.',
            text: 'Real estate apps have a significant impact on how tech-savvy consumers choose their next home. The US National Association of Realtors reports that 51% of purchasers started their search for a home online. Mark Placek Properties, like other businesses, realized it was crucial to make sure real estate brokers incorporated solid real estate UX design standards into apps as the home purchase has become more digital, especially after the Covid19 era. This is the reason they contacted perfectdesignhub.com to design the Real Estate App.',
            imagefold: foldImg,
            caseOverView: 'caseOverView'
        }
    ]

    const CaseChallengs = [
        {
            title: 'The Concept Behind Mark Place',
            text2: 'Due to their expertise in the field, the team at bitswits.co aimed to develop the Mark Place Real Estate Application, which would provide a detailed list of properties for sale as well as tools and information to help users make wise real estate decisions. A platform where anyone could look for their ideal home, rent a property, or even sell one. In addition to focusing on the buying and selling of properties, we wanted to create an app that provides essential information on real estate trends and factors to take into account when dealing with real estate properties. A single location where people may go for all of their housing-related needs and easily access a wide range of housing options.',
            caseChallengs: 'caseChallengs'
        }
    ]

    const CaseSolutions = [
      {
        title: 'Typeface Used in Application',
        text: 'The biggest challenge was probably creating a social networking platform that stands out from other platforms like Instagram, Snapchat, and Facebook. Although the idea was unique, people would not buy it if the implementation was not done the right way.',
        caseSolution: 'caseSolution'
      }
    ]


    const demo = <h4 className='font30 fontf font-bold'>Profile <br></br> Creation</h4>
    const demo1 = <p className='font16 fontf font-medium mt-1 mb-0'>This feature allows users to create a personalized profile containing the music they love and their preferences, allowing them to quickly find the perfect song or artist to listen to each time they open the app.</p>
  
    const profile = <h4 className='font30 fontf font-bold '>Music <br></br> Recommendation</h4>
    const profile1 = <p className='font16 fontf font-medium  mt-1 mb-0'>This feature lets customers quickly find the perfect songs for their mood or occasion. The music recommendation feature also increases user engagement, as it keeps users returning to the app by regularly providing fresh content.</p>
  
    const push = <h4 className='font30 fontf font-bold '>Push <br></br> Notifications</h4>
    const push1 = <p className='font16 fontf font-medium  mt-1 mb-0'>With the help of this feature, Soul Sound can send highly customized messages for various scenarios. And this, in turn, can help increase user engagement and retention.</p>
  
    const media = <h4 className='font30 fontf font-bold '>Social <br></br> Media Integration</h4>
    const media1 = <p className='font16 fontf font-medium  mt-1 mb-0'>This innovative feature allows users to easily share their favorite songs and albums with friends, family, and the public. It helps promote their favorite music or artist to a broader audience.</p>
  
    const music = <p className='font20 fontf font-bold black mb-4'>The following are some features we incorporated during the music app development:</p>
  
  
    const uncovered = <h2 className='font65 black fontf font-bold line60'>
      BitsWits <br />
      Uncovered <br />
      New Musical <br />
      Horizons!
    </h2>
  
    const data = <p className='font16 black fontf font-medium line30'>
    The experienced team working at BitsWits assisted Soul Sound in music streaming app development. We developed wireframes and prototypes that enabled us to test potential solutions quickly and iteratively. Not only this, but we also came up with a feature for users to create and save custom playlists from resolving the concern regarding limited customization options. Additionally, Soul Sound now includes a curated music library that can be filtered and sorted according to genre, artist, or other criteria. It helps users find the perfect music for any occasion.
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
                    subtitle={item.subtitle}
                    text={item.text}
                    imagefold={item.imagefold}
                    caseOverView={item.caseOverView}
                />
            )}

            {CaseChallengs.map((item, i) =>
                <Challenge key={i}
                    title={item.title}
                    text2={item.text2}
                    imagefold={item.imagefold}
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
        music={music}
      />
            <ColorHarmony2 />
            <Horizons
      uncovered = {uncovered}
      foldImg00 = {foldImg00}
      data = {data}
      />

      <SoulCTA
      headfire = {headfire}
      soulCta = 'soulCta'
      />

            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Ourblogs />
            <Contact />
        </>
    )
}
