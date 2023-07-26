import Head from 'next/head'
import React, { useState, useEffect } from 'react'; import Link from 'next/link';
import banImg from '../public/images/banner/internetbanner.png'
import foldimg from '../public/images/services/iot/internet-of-things-01.png'
import foldensure from '../public/images/services/iot/internet-of-things-03.png'
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
import aheadimage from '../public/images/services/iot/internet-of-things-02.png'
import Image from 'next/image';
import mobilearrow from '../public/images/icons/mobile-arrow.png'


export default function internetofthings() {

    const rates = <span>
        Our research data serves as a foundation for making data-informed product decisions. At BitsWits, our <span className='grdiant'>IoT app developers</span> are driven by research data, allowing us to gain deeper insights into your target audience. By understanding their preferences and needs, our <span className='grdiant'>IoT developers</span> create customized solutions that enhance engagement and satisfaction.
    </span>

    const primary = <span>
        Our team of skilled <span className='grdiant'>IoT services providers</span> is committed to optimizing your applications to its fullest potential. Through thorough testing and analysis, we identify areas for improvement and implement strategic optimizations that result in smooth and satisfying user experiences.
    </span>

    const better = <span>
        BitsWits, a trusted <span className='grdiant'>IoT apps development company</span>, brings you an exceptional team of professionals dedicated to delivering outstanding <span className='grdiant'>IoT development services</span> and solutions, ensuring a smooth user experience. Our professional <span className='grdiant'>IoT software developers</span> go the extra mile to test and optimize your applications, continuously seeking improvement opportunities and implementing advanced techniques to boost their performance.
    </span>

    const user5 = <span> Experience Exceptional <span className='grdiant'>IoT Development Services!</span> </span>

    const project = <span>
        Every project is different, and we modify our research methods to suit your specific goals. Whether it’s conducting focus groups, analyzing client feedback, or tracking user behavior through advanced analytics, we have a variety of creative techniques and methods to gather relevant and reliable data for providing top <span className='grdiant'>custom IoT development services.</span>
    </span>

    const research = <span>Overcome all Competitors with Our Top <span className='grdiant'>Custom IoT Development Services!</span> </span>

    const performance = <span> Our professional <span className='grdiant'>IoT services providers</span> focus on creating engaging and personalized mobile experiences that keep users coming back for more. Whether it’s through responsive designs, real-time updates, or offline capabilities, our <span className='grdiant'>IoT app development services</span> improve engagement and drive conversions.  </span>

    const design = <span> BitsWits Improves Experiences with Advanced <span className='grdiant'>IoT Software Development Services!</span> </span>

    const goal = <span> Our <span className='grdiant'>IoT app developers</span> specialize in creating software applications that interact with and control IoT devices, collect and analyze sensor data, and provide a user interface for managing IoT systems. Our team has programming skills, knowledge of IoT platforms and protocols, and expertise in UI/UX design and security considerations.   </span>

    const solutions = <span> The Top <span className='grdiant'>IoT Development Services</span> and Solutions </span>


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>The Leading  <br /><span className='grdiant'> Internet of Things Development Company! </span></h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Backup and Storage </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Application Hosting </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>E-commerce Applications </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Web Hosting </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Media and Entertainment </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Content Delivery </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Databases </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Search Engine Applications </li>
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

const infopara = <> <p className='black fontf font-medium line30 mt-5'>In 21 years of business we've worked with over <strong>128 Fintech</strong>, banking and finance clients. What can we do for you?</p> </>


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
                infopara={infopara}
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
                title={design}
                para={goal}
                subtitle={solutions}
                subpara='At BitsWits, we provide developing and deploying IoT solutions, including hardware development, connectivity integration, data analytics, and application development. Our experts provide end-to-end services that enable smooth connectivity, data-driven insights, and efficient management of IoT ecosystems.'
                subtitle2='Experience a Smooth User Experience'
                subpara2={performance}

            />



            <Ahead
                title={research}
                para='At BitsWits, our team conducts thorough research and gathers valuable user feedback for building your custom that provides you with a competitive edge. Our team combines a range of creative and innovative methods to collect information and inform your product decisions, ensuring your product meets the desires of your target audience.'
                subtitle='Utilizing Data for Informed Product Decision'
                subpara='As the leading IoT development services company in the US, BitsWits stands out for its track record of delivering innovative solutions. The data we collect provides you with valuable insights that guide your product strategy. From identifying market trends to understanding user expectations, we provide quality Internet of Things services with a data-driven approach that lets you stand out from the competition. '
                subtitle2='Improved Research Methods for Targeted Results'
                subpara2={project}
                ahead={aheadimage}

            />



            <Ensure
                foldimg={foldensure}
                title={user5}
                para={better}
                subtitle='Continuous Improvement and Optimal Results'
                subpara={primary}
                subtitle2='Data-Driven Decision Making!'
                subpara2={rates}



            />
            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
