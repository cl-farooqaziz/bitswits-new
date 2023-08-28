import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import icon1 from '../public/images/ourservices/sideimg.png'
import icon2 from '../public/images/ourservices/game.png'
import icon3 from '../public/images/ourservices/web30.png'
import icon4 from '../public/images/ourservices/blockchain.png'
import icon5 from '../public/images/ourservices/webflow.png'
import icon6 from '../public/images/ourservices/artifical.png'
//components
// import Banner from '@/components/Banner'
// import Rated from '@/components/Rated'
// import About from '@/components/About'
// import Yearsofexpertise from '@/components/Yearsofexpertise'
// import Nextproject from '@/components/Nextproject'
// import Ourservices from '@/components/Ourservices'
// import Lookingfor from '@/components/Lookingfor'
// import Trusted from '@/components/Trusted'
// import Ourportfolio from '@/components/Ourportfolio'
// import Digital from '@/components/Digital';
// import Ourblogs from '@/components/Ourblogs'
// import ClientsThink from '@/components/ClientsThink'
// import Contact from '@/components/Contact'
// import OurProject from '@/components/OurProject'
import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('@/components/NewHomeBanner'));
const Rated = dynamic(() => import('@/components/Rated'));
const About = dynamic(() => import('@/components/About'));
const Yearsofexpertise = dynamic(() => import('@/components/Yearsofexpertise'));
const Nextproject = dynamic(() => import('@/components/Nextproject'));
const Ourservices = dynamic(() => import('@/components/Ourservices'));
const Lookingfor = dynamic(() => import('@/components/Lookingfor'));
const Trusted = dynamic(() => import('@/components/Trusted'));
const Ourportfolio = dynamic(() => import('@/components/Ourportfolio'));
const Digital = dynamic(() => import('@/components/Digital'));
const Ourblogs = dynamic(() => import('@/components/Ourblogs'));
const ClientsThink = dynamic(() => import('@/components/ClientsThink'));
const Contact = dynamic(() => import('@/components/Contact'));
const OurProject = dynamic(() => import('@/components/OurProject'));
import Counter from '@/components/Counter';




export default function Home() {




  const [gameshow, gameapp] = useState('tab1');

  function game(tab) {
    gameapp(tab);
  }


  const services = [

    {
      id: '1',
      title: 'Mobile Application Development',
      text: (<> <span className='grdiant'> Develop your app</span> with our advanced mobile applications solutions that deliver smooth user experiences and boost your growth in the digital world. </>),
      click1: 'tab1',
      img: icon1,
      fun: game,
      data: gameshow
    },
    {
      id: '2',
      title: 'Game Development',
      text: (<> Dive into a world of captivating gameplay and stunning visuals that are carefully designed by our <span className='grdiant'> expert game developers </span> where every pixel comes to life and every level sparks excitement </>),
      click1: 'tab2',
      img: icon2,
      fun: game,
      data: gameshow
    },
    {
      id: '3',
      title: 'Web App Development',
      text: (<> Grow your online presence with our skilled <span className='grdiant'>web app development company</span> . We ensure flawless functionality and outstanding user experiences by developing robust and scalable mobile apps. </>),
      click1: 'tab3',
      img: icon3,
      fun: game,
      data: gameshow
    },
    {
      id: '4',
      title: 'Blockchain Game Development',
      text: 'Enter into an exciting gaming adventure with the best blockchain game development company, which focuses on emerging gaming with transparency and security of blockchain technology, creating immersive and decentralized game experiences.',
      click1: 'tab4',
      img: icon4,
      fun: game,
      data: gameshow
    },
    {
      id: '5',
      title: 'Artificial Intelligence',
      text: 'Boost productivity and save your precious time and resources by utilizing the power of the future - Artificial Intelligence. Discover the excellent levels of efficiency and effectiveness with our AI-driven solutions',
      click1: 'tab5',
      img: icon5,
      fun: game,
      data: gameshow
    },
    {
      id: '6',
      title: 'UI/UX App Design',
      text: (<> BitsWits, a <span className='grdiant'>UI/UX app design company</span> , helps to enhance user experience with intuitive interfaces that engage users and make interactions enjoyable. Our skilled <span className='grdiant'>mobile app UI designers</span> assist in bringing the best outcomes. </>),
      click1: 'tab6',
      img: icon6,
      fun: game,
      data: gameshow
    },

  ]



  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowComponent(true);

  //   }, 1000); // Delay duration in milliseconds (e.g., 1000ms = 1 second)

  //   return () => clearTimeout(timeout);
  // }, []);

  // const [showComponent, setShowComponent] = useState(true);

  // useEffect(() => {
  //   const handleResize = () => {

  //     if (window.innerWidth <= 480) {
  //       setShowComponent(false);
  //       const timeout = setTimeout(() => {
  //        setShowComponent(true);


  //       }, 5000); // Delay duration in milliseconds (e.g., 1000ms = 1 second)

  //       return () => clearTimeout(timeout);
  //     }
  //   };

  //   // Attach the event listener
  //   window.addEventListener('resize', handleResize);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  const [showComponent, setShowComponent] = useState();

  useEffect(() => {

    if (window.innerWidth > 480) {

      setShowComponent(true);

    }
    else {

      setShowComponent(false);
      setTimeout(alertFunc, 5000);


      function alertFunc() {
        setShowComponent(true);
      }

    }




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



      <Yearsofexpertise
        loop1={<> <Counter stopNumber={16} />+ </>}
        looptext1={<> YEARS OF <br></br> EXPERTISE </>}
        looptext11={<> Established in 2002 in the USA </>}
        loop2={<> <Counter stopNumber={500} />+ </>}
        looptext2={<> DEDICATED <br></br> DEVELOPERS </>}
        looptext22={<> All directly employed by BitsWits </>}
        loop3={<> <Counter stopNumber={6500} />+ </>}
        looptext3={<> SATISFIED <br></br> CLIENTS </>}
        looptext33={<> Check the genuine testimonial videos </>}
        loop4={<> <Counter stopNumber={10000} />+ </>}
        looptext4={<> PROJECTS  <br></br> DELIVERED </>}
        looptext44={<> See examples our work </>}

      />

      <Ourservices
        services={services}
      />


      <Lookingfor />
      <Trusted />
      <Ourportfolio />
      <Digital />
      <ClientsThink />
      <Nextproject />
      <Ourblogs />
      <OurProject />
      <Contact />










    </>
  )
}
