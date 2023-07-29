import Head from 'next/head'
import React, { useState, useEffect } from 'react'; import Link from 'next/link';
import banImg from '../public/images/banner/enterprisebanner.png'
import foldimg from '../public/images/services/enterprisemobility/enterprise-mobility-solutions-01.png'
import foldensure from '../public/images/services/enterprisemobility/enterprise-mobility-solutions-03.png'
import { Row, Col } from 'react-bootstrap'
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

import MyReason from '../components/MyReason';
import reStyles from '@/styles/MyReason.module.css';
import WorkExp from '@/components/WorkExp'
import workStyles from '@/styles/WorkExp.module.css'

import IndustriesInt from '@/components/IndustriesInt'
import IndusStyle from '@/components/IndustriesInt'
// Why Icon
import icon232 from '../public/images/whybuild/pwa-icon1.png'
import icon24 from '../public/images/whybuild/pwa-icon2.png'
import icon25 from '../public/images/whybuild/pwa-icon3.png'
import icon26 from '../public/images/whybuild/pwa-icon4.png'
import icon27 from '../public/images/whybuild/pwa-icon5.png'
import icon28 from '../public/images/whybuild/pwa-icon6.png'
import icon29 from '../public/images/whybuild/pwa-icon7.png'
import icon30 from '../public/images/whybuild/pwa-icon8.png'
import icon31 from '../public/images/whybuild/pwa-icon9.png'
import icon32 from '../public/images/whybuild/pwa-1.png'
import icon33 from '../public/images/wbd-icons/iot-ico1.png'
import icon34 from '../public/images/wbd-icons/iot-ico2.png'
import icon35 from '../public/images/industryInt/idu-1.png'
import icon36 from '../public/images/industryInt/idu-2.png'
import icon37 from '../public/images/industryInt/idu-3.png'
import icon38 from '../public/images/industryInt/idu-4.png'
import icon39 from '../public/images/industryInt/idu-5.png'
import icon40 from '../public/images/industryInt/idu-6.png'
import icon41 from '../public/images/industryInt/idu-7.png'
import icon42 from '../public/images/industryInt/idu-8.png'
import icon43 from '../public/images/industryInt/idu-9.png'
import icon44 from '../public/images/industryInt/idu-10.png'
import icon45 from '../public/images/industryInt/esicon1.png'
import icon46 from '../public/images/industryInt/esicon2.png'
import icon47 from '../public/images/industryInt/esicon3.png'
import icon48 from '../public/images/industryInt/esicon4.png'
import icon49 from '../public/images/industryInt/enterprise-solution-1.png'

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


    const infopara = <> <p className='black fontf font-medium line30 mt-5'>In 21 years of business we've worked with over <strong>128 Fintech</strong>, banking and finance clients. What can we do for you?</p> </>



    const Workspace = <>
    <Row className={`${workStyles.soluRow} mt-5 text-center justify-content-center align-items-center`}>
    <h4 className='text-center font30 font-bold mb-5'> Solutions? Yes, With This Process
    </h4>
        <Col lg={12} md={12} className={workStyles.soluCol}>
             <Image src={icon49} alt='BitsWits' className='img-fluid' />
        </Col>
    </Row>
    </>
    
    const Workspace1 = <>
    <Row className={`${workStyles.soluRow} mt-3 text-center justify-content-center align-items-center`}>
    <h4 className='text-center font30 font-bold'> How We Help?
    </h4>

        <Col lg={3} md={6} className={workStyles.soluCol}>
            <div className={`${workStyles.soluCard}`}>
                <div className={`${workStyles.imgBox}`}>
                    <Image src={icon45} alt='BitsWits' className='img-fluid' />
                </div>
            <h5 className='font20 fontf font-500 line30'>
            Enhancing, streamlining and
optimizing business processes.
            </h5>
           
            </div>
        </Col>
        <Col lg={3} md={6} className={workStyles.soluCol}>
            <div className={`${workStyles.soluCard}`}>
                <div className={`${workStyles.imgBox}`}>
                    <Image src={icon46} alt='BitsWits' className='img-fluid' />
                </div>
            <h5 className='font20 fontf font-500 line30'>
            Improving employee
productivity and collaborating
with role-based applications.
            </h5>
               
            </div>
        </Col>
        <Col lg={3} md={6} className={workStyles.soluCol}>
            <div className={`${workStyles.soluCard}`}>
                <div className={`${workStyles.imgBox}`}>
                    <Image src={icon47} alt='BitsWits' className='img-fluid' />
                </div>
            <h5 className='font20 fontf font-500 line30'>
            Enabling a mobile workforce,
to access work from anyplace, anytime.
            </h5>
               
            </div>
        </Col>
        <Col lg={3} md={6} className={workStyles.soluCol}>
            <div className={`${workStyles.soluCard}`}>
                <div className={`${workStyles.imgBox}`}>
                    <Image src={icon48} alt='BitsWits' className='img-fluid' />
                </div>
            <h5 className='font20 fontf font-500 line30'>
            Enabling a mobile workforce,
to access work from anyplace, anytime.
            </h5>
               
            </div>
        </Col>
    </Row>
    </>
    // Industry
    const Industries = <>
    <Row className={`${IndusStyle.soluRow} mt-3 text-center justify-content-center align-items-center`}>
    <h4 className='text-center font30 font-bold'>Industries we're proud to serve
    </h4>
    <p>It is an application designed for one of the world's most diverse casino-entertainment providers "Cromwell Caesars Entertainment". The app is used to manage the growing needs of their guests, by incorporating the existing hotel systems into a handheld device, which offers guests an in-house digital access to complimentary and paid services for proactive assistance.
    </p>
        <Col lg={12}>
        <div className={`${IndusStyle.indusblk}`}>
                    <ul>
                        <li>
                            <Link href="#"> 
                                <Image src={icon35} alt="Real Estate"/> 
                                <p>Real Estate </p>
                            </Link>
                         </li>
                        <li>
                            <Link href="#">
                                <Image src={icon36} alt="Travel &amp; Hospitality"/>
                                <p> Travel &amp; Hospitality </p>
                            </Link> 
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon37} alt="B2B Solutions"/>
                                <p>  B2B Solutions  </p>
                            </Link> 
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon38} alt="Travel &amp; Hospitality"/>
                                <p>  Healthcare  </p>
                            </Link> 
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon39} alt="Travel &amp; Hospitality"/>
                                <p>   Education & E-Learning   </p>
                            </Link> 
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon40} alt="Travel &amp; Hospitality"/>
                                <p>   Banking & Finance  </p>
                            </Link> 
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon41} alt="Travel &amp; Hospitality"/>
                                <p>   Startup Solutions   </p>
                            </Link> 
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon42} alt="Travel &amp; Hospitality"/>
                                <p>    Startup Solutions </p>
                            </Link> 
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon43} alt="Travel &amp; Hospitality"/>
                                <p>   Media & Publishing    </p>
                            </Link> 
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon44} alt="Travel &amp; Hospitality"/>
                                <p>   Food & Drink   </p>
                            </Link> 
                        </li>
                        
                    </ul>
                </div>
        </Col>
        
    </Row>
    </>



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


            
            <WorkExp
                Workspace={Workspace}

            />

            <WorkExp
                Workspace={Workspace1}
            />
            
            <IndustriesInt 
                IndustriesInt={Industries}
            />


            {/* <Coverage
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



            /> */}
            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
