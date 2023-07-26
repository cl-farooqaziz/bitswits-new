import Head from 'next/head'
import React, { useState, useEffect } from 'react'; import Link from 'next/link';
import banImg from '../public/images/banner/enterprisebanner.png'
import foldimg from '../public/images/services/enterprisemobility/enterprise-mobility-solutions-01.png'
import foldensure from '../public/images/services/enterprisemobility/enterprise-mobility-solutions-03.png'
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
import aheadimage from '../public/images/services/enterprisemobility/enterprise-mobility-solutions-02.png'
import Image from 'next/image';
import mobilearrow from '../public/images/icons/mobile-arrow.png'

export default function enterprisemobilitysolutions() {


    const toppartop = <span> BitsWits, the top <span className='grdiant'>enterprise mobility solutions company</span> , delivers a consistent user experience across all platforms with our comprehensive compatibility testing. By addressing compatibility issues, we ensure that your solutions function smoothly, increasing engagement and usability.  </span>

    const toptitle = <span> Continuous Testing and Optimization of  <span className='grdiant'>Enterprise Mobility Solutions</span> Provide Best User Experience!  </span>

    const aheadtitle = <span>
        Drive Business Success with Our Remarkable  <span className='grdiant'>Enterprise Mobility Management Services!</span>
    </span>

    const topsubpara = <span> BitsWits prioritizes putting its users first with its user-centric approach to <span className='grdiant'>enterprise mobility solutions</span> . We conduct in-depth usability testing and gather valuable feedback to improve user interfaces, navigation, and overall user experience.  </span>

    const aheadpara = <span> BitsWits, the top <span className='grdiant'>enterprise mobility solutions company</span>, assists in maximizing business potential with our <span className='grdiant'>enterprise mobility</span> services. Our team deliver innovative solutions that enable smooth access to business assets remotely.  </span>


    const folpos = <span> We Craft <span className='grdiant'>Enterprise Mobility Solutions</span> That Fit Your Organizational Objectives! </span>

    const high = <span> Businesses need <span className='grdiant'>enterprise mobility solutions</span> to stay agile and competitive in the market, and we help organizations by designing and implementing <span className='grdiant'>custom mobility solutions</span> that align with their organizational goals to help them grow in the mobile-first era. </span>


    const aheadsubpara = <span> It’s time to break down all communication barriers and improve effective communication with our <span className='grdiant'>mobility</span> solutions, from enabling real-time communication and file sharing to using tools that empower teams to work together efficiently and boost innovation.  </span>

    const aheadbutpar2 = <span> BitsWits assists in mobilizing your business processes with our top <span className='grdiant'>enterprise mobility solutions</span> to optimize operational efficiency. Smooth running workflows, automating tasks, and accessing real-time data on the go help improve productivity and bring down costs. </span>


    const heading = <h1 className='font65 black fontf font-bold line60'>A Well-Known  <br /><span className='grdiant'> Enterprise Mobility Solutions Company! </span></h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Importing Employee Productivity </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Collaborating With Role Based Applications </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Enabling a Mobile Workforce </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Enhancing, streamlining Business Process </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Optimizing Business Process </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Providing Insight For Faster & Informed Decision </li>
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
                title={folpos}
                para={high}
                subtitle='Enterprise Mobility Management'
                subpara='With years of experience in enterprise mobility, applications, and data security management, we help businesses to streamline operations and increase productivity, driving them towards the new heights of success and innovation.'
                subtitle2='Enterprise Mobility Consultation'
                subpara2='BitsWits advise businesses on optimizing mobile technology, including device management, app development, security, and improving user experience. We help them leverage mobile capabilities for increased productivity and improved performance.'

            />



            <Ahead
                title={aheadtitle}
                para={aheadpara}
                subtitle='Break Down all Communication Barriers!'
                subpara={aheadsubpara}
                subtitle2='Optimize Operational Efficiency '
                subpara2={aheadbutpar2}
                ahead={aheadimage}

            />



            <Ensure
                foldimg={foldensure}
                title={toptitle}
                para={topsubpara}
                subtitle='Safeguarding and Protecting Data'
                subpara='To reduce risks, we investigate weaknesses, conduct penetration tests, and implement effective safety precautions in effect. By placing a high priority on security, we make sure that your solutions comply with the highest guidelines and satisfy you with our security.'
                subtitle2='Ensuring Consistency Across All Platforms'
                subpara2={toppartop}



            />
            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
