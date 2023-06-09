import Head from 'next/head'
import React, { useState, useEffect } from 'react';
//components
import Banner from '@/components/Banner'
import Rated from '@/components/Rated'
import About from '@/components/About'
import Yearsofexpertise from '@/components/Yearsofexpertise'
import Nextproject from '@/components/Nextproject'
import Ourservices from '@/components/Ourservices'
import Lookingfor from '@/components/Lookingfor'
import Trusted from '@/components/Trusted'
import Ourportfolio from '@/components/Ourportfolio'
import Digital from '@/components/Digital';
import Ourblogs from '@/components/Ourblogs'
import ClientsThink from '@/components/ClientsThink'
import Contact from '@/components/Contact'
import OurProject from '@/components/OurProject'


export default function Home() {




  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowComponent(true);

  //   }, 1000); // Delay duration in milliseconds (e.g., 1000ms = 1 second)

  //   return () => clearTimeout(timeout);
  // }, []);

  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    const handleResize = () => {
   
      if (window.innerWidth <= 480) {
        setShowComponent(false);
        const timeout = setTimeout(() => {
         setShowComponent(true);
       

        }, 5000); // Delay duration in milliseconds (e.g., 1000ms = 1 second)

        return () => clearTimeout(timeout);
      }
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



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
      {showComponent && (
        <>

          <Trusted />
          <Ourportfolio />
          <Digital />
          <ClientsThink />
          <Nextproject />
          <Ourblogs />
          <OurProject />
          <Contact />
        </>
      )}





    </>
  )
}
