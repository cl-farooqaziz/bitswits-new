import Head from 'next/head'
import React, { useState, useEffect } from 'react'; import Link from 'next/link';
import banImg from '../public/images/banner/mobileappbanner.png'
import foldimg from '../public/images/services/mobileapp/mobile-app-development-01.png'
import foldensure from '../public/images/services/mobileapp/mobile-app-development-03.png'
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
import aheadimage from '../public/images/services/mobileapp/mobile-app-development-02.png'
import Image from 'next/image';
import mobilearrow from '../public/images/icons/mobile-arrow.png'

export default function mobileappdevelopment() {


    const drives = <span>
        For the purpose of generating data-informed product decisions, our research data serves as the basis. Our <span className='grdiant'>mobile application developers</span> create apps that are tailored to users' interests by better understanding their target demographic, which results in increasing engagement.
    </span>

    const increasing = <span>Our skilled <span className='grdiant'>mobile app developers</span> are dedicated to maximizing the performance of your mobile applications. Through careful testing and analysis, we pinpoint problem areas and carry out calculated optimizations that produce a smooth and positive user experience. </span>


    const optimization = <span>
        Our leading <span className='grdiant'>mobile app development agency</span> Bitswits has a team of experts who are dedicated to ensuring that your mobile app delivers the best user experience every time. We ensure that our <span className='grdiant'>mobile app developers</span> build apps by going above and beyond to test and optimize your applications while effortlessly implementing A/B testing to  boost your app’s performance.
    </span>


    const exceptional = <span>Experience Exceptional <span className='grdiant'>Mobile App Development Services!</span> </span>

    const remain = <span>
        We conduct thorough market research and analyze user behavior data to understand customer preferences, and pain points. <span className='grdiant'>Our mobile application developers</span> later use this information while building the apps.
    </span>

    const data = <span>Gain a Competitive Edge with Our Top <span className='grdiant'>Mobile App Development Services!</span> </span>

    const convert = <span> We <span className='grdiant'>Build a Mobile App</span> That Provides Smooth Experiences</span>

    const focuses = <span>
        The mobile app development process at BitsWits focuses on creating engaging and personalized mobile app experiences that keep users coming back for more. Whether it’s through responsive designs, real-time updates, or offline capabilities, our <span className='grdiant'>mobile app development services</span> improve engagement and drive conversions.
    </span>

    const engaging = <span> At BitsWits, our team of skilled <span className='grdiant'> mobile app developers</span> while utilizing their technical expertise <span className='grdiant'>builds a mobile app</span> that has a deeper understanding of the behavior of the user to create applications that load quickly and work smoothly for a smooth experience across all devices and platforms.</span>

    const lab = <span>Improved Performance of  <span className='grdiant'>Mobile App Development Services</span> </span>

    const swipetitle = <span> BitsWits Makes Mobile Experiences Better with Engaging <span className='grdiant'>Mobile App Development Services!</span> </span>

    const each = <span> At BitsWits, we are the most reliable and leading <span className='grdiant'>mobile app development agency</span> that has a team of dedicated experts and professionals who transform mobile experiences and create captivating mobile applications from start to finish. By utilizing a data-driven approach and detailed research, our <span className='grdiant'>mobile app developers</span> design attractive interfaces and build a mobile app that drives actions while keeping the latest design trends in mind. We ensure that our app developers not only function smoothly but also attract users with visually appealing applications. </span>


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>The Top <span className='grdiant'> Mobile App Development Company </span></h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Over <b  className='grdiant'>2082+ mobile apps</b> published Worldwide <b className='grdiant'>since 2007</b> . </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image> <b className='grdiant'>180+</b> In-House Team Of App Designers & Developers </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image> <b className='grdiant'>20 Years</b> .Experience & Counting </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image><b className='grdiant'>IOS, Android & cross-platform apps</b> for phone, tablet & watch. </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image> <b className='grdiant'>Transparent</b> Project Progress </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image> <b className='grdiant'>Offices in 5 Countries</b> (UK, USA, Australia, UAE & India) </li>
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
                foldimg={foldimg}
                title={swipetitle}
                para={each}
                subtitle={lab}
                subpara={engaging}
                subtitle2={convert}
                subpara2={focuses}

            />



            <Ahead
                title={data}
                para='Our mobile app developers use the latest technologies and trends to create apps with special features, improved functions, and exceptional user experiences. Our use of the latest tech stack ensures your app is up-to-date and sets you apart from competitors.'
                subtitle='Utilizing Data for Informed Product Decisions'
                subpara={remain}
                subtitle2='Uniting Cross-Functional Teams For Product Success'
                subpara2='We work with a collaborative approach among cross-functional teams, including mobile app designers, developers, and product managers, to ensure a holistic approach to data utilization and project success.'
                ahead={aheadimage}

            />



            <Ensure
                foldimg={foldensure}
                title={exceptional}
                para={optimization}
                subtitle='Improvements and Quality Results!'
                subpara={increasing}
                subtitle2='Data-Informed Product Decisions!'
                subpara2={drives}



            />
            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
