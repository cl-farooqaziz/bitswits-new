import Head from 'next/head'
import React, { useState, useEffect } from 'react'; import Link from 'next/link';
import banImg from '../public/images/banner/webappbanner.png'
import foldimg from '../public/images/services/webapp/web-app-development-01.png'
import foldensure from '../public/images/services/webapp/web-app-development-03.png'
//components
import Banner from '@/components/ServicesBanner'
import Coverage from '@/components/Coverage';
import Swipe from '@/components/Swipe';
import Ahead from '@/components/Ahead';
import Ensure from '@/components/Ensure';
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import styles from '@/styles/Coverage.module.css'
import aheadimage from '../public/images/services/webapp/web-app-development-02.png'
import Image from 'next/image';
import mobilearrow from '../public/images/icons/mobile-arrow.png'

export default function progressivewebappdevelopment() {


const team = <span>Our team of <span className='grdiant'>professional progressive web app developers</span> is committed to optimizing your applications to its fullest potential. Through careful observations and analysis, we identify areas for improvement and implement strategic optimizations that result in a user-friendly experience. </span>

const continuously = <span> BitsWits, the most reliable <span  className='grdiant'>progressive web app development agency</span>, has a team of experts who are dedicated to ensuring that your web app delivers the best user experience every time. Our team of professional <span className='grdiant'>progressive web app developers</span> goes above and beyond to test and optimize your applications while continuously seeking improvement opportunities to boost their performance.  </span>

const based1 = <span>Create an Exceptional <span className='grdiant'>Progressive Web App Development</span> Experience!</span>

const gives = <span>
    Every project is different, and we modify our research methods to suit your specific goals. Whether it’s conducting focus groups, analyzing client feedback, or tracking user behavior through advanced analytics, we have a variety of creative techniques to gather relevant and reliable data for your <span className='grdiant'>progressive web app development</span>. 
</span>

const meet = <span> Our team of expert <span className='grdiant'>progressive web app developers</span> believes in fetching data that shapes amazing results. Our experienced researchers and analysts analyze the data we collect, providing you with valuable insights that guide your product strategy. From identifying market trends to understanding user expectations, our data-driven approach helps you gain a competitive edge. </span>    

const based = <span>
    The most reputable <span className='grdiant'>progressive web app development company</span>, BitsWits, is aware of how crucial it is to remain competitive. To provide you a competitive edge, our <span className='grdiant'>progressive web app developers</span> undertake in-depth research and interview knowledgeable sources. Our staff uses a variety of original and creative techniques to gather information and help you make informed decisions about your products, guaranteeing that they satisfy the needs of your intended market.
</span>

    const stay = <span>
        Stay Ahead of the Competition with Our <span className='grdiant'>Progressive Web App Development Solutions!</span>
    </span>

    const offline = <span> 

The development process at BitsWits focuses on creating engaging and personalized mobile experiences that keep users coming back for more. Whether it’s through responsive designs, real-time updates, or offline capabilities, our <span className='grdiant'>progressive web app development</span> improves engagement and drives conversions. 

    </span>

    const combines = <span>
        At BitsWits, our team of <span className='grdiant'>progressive web app developers </span> combines technical expertise with a deeper understanding of the behavior of the user to create web applications that load quickly and work smoothly for a delightful experience across all devices and platforms. 

         </span>

    const first = <span> Top-Performing <span className='grdiant'>Progressive Web App Development</span> </span>

    const visually = <span>
        BitsWits, a leading <span className='grdiant'>progressive web app development agency</span>, has a team of dedicated experts and professionals who transform mobile experiences and create captivating applications from start to finish. By utilizing a data-driven approach and detailed research, our <span className='grdiant'>progressive web app developers</span> design attractive interfaces that drive actions while keeping the latest design trends in mind. We future-proof your app, ensuring it remains relevant and competitive in the ever-changing digital landscape.
    </span>

    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Top <span className='grdiant'> Progressive Web App Development Company!</span> </h1>

    const para = <>

    <ul className='p-0'>
    <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Mobile App-Like Interface </li>
 <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Connectivity Independence </li>
 <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Push Notifications </li>
 <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Self-Updates </li>
 <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Full Responsiveness and Browser </li>
 <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Compatibilty </li>
 <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Secure Since It Is Hosted On Https </li>
    </ul>
</>


    // coverage component data


    const subtile = <h2 className='font50 black fontf font-bold line60 black'>Our <span className='grdiant'>Mobile App</span> Services</h2>

    const mobile = <div>
        <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
            Mobile App Design
        </h5>
        <div className={styles.servcsList}>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                UI UX Design
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Research & Discovery
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Wireframing & Prototyping
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                iOS + Android Applications
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Post Launch Support
            </Link>
        </div>
    </div>

    const user = <div>
        <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
            User Research
        </h5>
        <div className={styles.servcsList}>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                User Journey & Persona Building
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                User Testing
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Participant Recruitments
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Research Method & Material Development
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Iterative Research
            </Link>
        </div>
    </div>


    const ux = <div>
        <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
            UX Optimization
        </h5>
        <div className={styles.servcsList}>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                User Experience Assessment
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                User & KPIs Data Analysis
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                A/B Testing
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Feature Experimentation
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                UX Iterations
            </Link>
        </div>
    </div>



    // Swipe component data

    





    return (
        <>
            <Head>
                <title>BitsWits</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <Banner
                title={heading}
                para={para}
                bannerimg={banImg}
            />

            <Coverage
                title="Coverage"
                subtitle={subtile}
                mobile={mobile}
                user={user}
                ux={ux}
            />


            <Swipe
            foldimg  = {foldimg}
            title = 'Make Your Mobile Experiences Engaging with BitsWits, the Top Progressive Web App Development Agency!'
            para =  {visually}
            subtitle = {first}
            subpara = {combines}
            subtitle2 = 'Engage and Convert Users with Amazing Experiences'
            subpara2 = {offline }
            
            />



            <Ahead
            title = {stay}
            para = {based}
            subtitle = 'Data-Driven Product Decisions'
            subpara = {meet}
            subtitle2 = 'Better Research Methods for Positive Outcomes'
            subpara2 = {gives}
            ahead  = {aheadimage}
            
            />



            <Ensure
            foldimg  = {foldensure}
            title = {based1}
            para =  {continuously}
            subtitle = 'Continuous Improvement and Better Outcomes '
            subpara = {team}
            subtitle2 = 'Data-Informed Product Decisions!'
            subpara2 = 'Our research data serves as a foundation for making data-informed product decisions. By understanding your target audience on a deeper level, we customize apps according to their preferences, improving engagement and satisfaction. '
            
            
            
            />
            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
