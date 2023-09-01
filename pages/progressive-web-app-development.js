import Head from 'next/head'
import React, { useState, useEffect } from 'react'; import Link from 'next/link';
import { Row, Col } from 'react-bootstrap'
import banImg from '../public/images/banner/webappbanner.png'
import foldimg from '../public/images/whybuild/pwa-img1.png'
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
import aheadimage from '../public/images/whybuild/pwa-img2.png'
import Image from 'next/image';
import WhyBuild from '@/components/WhyBuild';
import whyStyles from '@/styles/whyServices.module.css'
import Experienced from '@/components/Experienced'
import exStyle from '@/styles/Experienced.module.css'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import MyExpertise from '@/components/MyExpertise';
import expStyles from '@/styles/MyExpertise.module.css'

import WorkExp from '@/components/WorkExp'
import workStyles from '@/styles/WorkExp.module.css'

// import MyReason from '@/components/MyReason';
import icon1 from '../public/images/wbd-icons/wbd-icon1.png'
import icon2 from '../public/images/wbd-icons/wbd-icon2.png'
import icon3 from '../public/images/wbd-icons/wbd-icon3.png'
import icon4 from '../public/images/wbd-icons/wbd-icon4.png'
import icon5 from '../public/images/wbd-icons/wbd-icon5.png'
import icon6 from '../public/images/wbd-icons/wbd-icon6.png'
import icon7 from '../public/images/wbd-icons/wbd-icon7.png'
import icon8 from '../public/images/wbd-icons/wbd-icon8.png'
import icon9 from '../public/images/wbd-icons/wbd-icon9.png'
import icon10 from '../public/images/wbd-icons/wbd-icon10.png'
import icon11 from '../public/images/wbd-icons/wbd-icon11.png'
import icon12 from '../public/images/wbd-icons/wbd-icon12.png'
import icon13 from '../public/images/wbd-icons/wbd-icon13.png'
import icon14 from '../public/images/wbd-icons/wbd-icon14.png'
import icon15 from '../public/images/wbd-icons/wbd-icon15.png'

//

import icon16 from '../public/images/wbd-icons/wbd-t1.png'
import icon17 from '../public/images/wbd-icons/wbd-t2.png'
import icon18 from '../public/images/wbd-icons/wbd-t3.png'
import icon19 from '../public/images/wbd-icons/wbd-t4.png'
import icon20 from '../public/images/wbd-icons/wbd-t5.png'
import icon21 from '../public/images/wbd-icons/wbd-t6.png'
import icon22 from '../public/images/wbd-icons/wbd-t7.png'
import icon23 from '../public/images/wbd-icons/wbd-t8.png'
import grnArrow from '../public/images/wbd-icons/arrow-green.png'


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
import icon33 from '../public/images/whybuild/pwa-2.png'
import icon34 from '../public/images/whybuild/pwa-3.png'



export default function progressivewebappdevelopment() {


    const team = <span>Our team of <span className='grdiant'>professional progressive web app developers</span> is committed to optimizing your applications to its fullest potential. Through careful observations and analysis, we identify areas for improvement and implement strategic optimizations that result in a user-friendly experience. </span>

    const continuously = <span> BitsWits, the most reliable <span className='grdiant'>progressive web app development agency</span>, has a team of experts who are dedicated to ensuring that your web app delivers the best user experience every time. Our team of professional <span className='grdiant'>progressive web app developers</span> goes above and beyond to test and optimize your applications while continuously seeking improvement opportunities to boost their performance.  </span>

    const based1 = <span>Create an Exceptional <span className='grdiant'>Progressive Web App Development</span> Experience!</span>

    const gives = <span>
        Every project is different, and we modify our research methods to suit your specific goals. Whether it’s conducting focus groups, analyzing client feedback, or tracking user behavior through advanced analytics, we have a variety of creative techniques to gather relevant and reliable data for your <span className='grdiant'>progressive web app development</span>.
    </span>

    const meet = <span> Our team of expert <span className='grdiant'>progressive web app developers</span> believes in fetching data that shapes amazing results. Our experienced researchers and analysts analyze the data we collect, providing you with valuable insights that guide your product strategy. From identifying market trends to understanding user expectations, our data-driven approach helps you gain a competitive edge. </span>

    const based = <span>
        The World's largest collection of original football shirts. It is the home of classic, rare, retro and vintage football shirts from your soccer team's history.
        <br />
        Dotsquares has already launched their Progressive web app and see how it effects
    </span>

    const hoke = <>
        <ul className='p-0'>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} className='img-fluid multi'></Image>
                Speed optimized
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} className='img-fluid multi'></Image>
                Global presence
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} className='img-fluid multi'></Image>
                Latest technology utilization like Workbox and IndexedDB 
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} className='img-fluid multi'></Image>
                Built PWAs apps for leading brands
            </li>
        </ul>
    </>


    const stay = <span className='font30 fontf font-bold black'>
        Our Stunning Creations Portray Our Journey! 
    </span>

    const offline = <span>

        The development process at BitsWits focuses on creating engaging and personalized mobile experiences that keep users coming back for more. Whether it’s through responsive designs, real-time updates, or offline capabilities, our <span className='grdiant'>progressive web app development</span> improves engagement and drives conversions.

    </span>

    const combines = <span>
        At BitsWits, our team of <span className='grdiant'>progressive web app developers </span> combines technical expertise with a deeper understanding of the behavior of the user to create web applications that load quickly and work smoothly for a delightful experience across all devices and platforms.

    </span>

    const first = <h2> Top-Performing <span className='grdiant'>Progressive Web App Development</span> </h2>

    const visually = <>
       

       <span className='grdiant font-bold'>Progressive web app development</span> services at BitsWits are changing app experiences and engagement, as seen by the statistics. When compared to regular websites, PWAs load twice as quickly on 3G networks, keep visitors twice as engaged, and increase conversion rates by over 80%. PWAs have 97% opt-in rates for push notifications, and users spend much more time each session.


    </>

    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>

        Build PWAs That Adapt to Any Screen Size & Resolution with <span className='grdiant font-bold'>Top Progressive Web App Development Company</span>
    </h1>

    const para = <>

        <ul className='p-0'>

            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Instant Loading</li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Offline Functionality</li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Responsive Design</li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Push Notifications</li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Enhanced Security</li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Low Data Usage</li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Analytics and Insights</li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Cost-Effective Development</li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Cross-Platform Compatibility</li>


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

    const infopara = <> <p className='black fontf font-medium line30 mt-5'> Experience the thrill of diversity with our dedicated progressive web app developers, contact us to book a free consultation!  </p> </>

    const titleswip = <>
        <h3 className='black fontf font-bold font-bold line30 mt-5'>The Data Inspiring the Next App Revolution – PWAs</h3>
    </>

    // MyExpertise component data


    const expCards = <>
        <Row className={`${expStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard}`}>
                    <div className={`${expStyles.imgBox}`}>
                        {/* <Image src={icon16} alt='BitsWits' className='img-fluid' /> */}
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                    Engaging PWA UI/UX Design
                    </h5>
                    <p>

                    </p>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Creating wireframes and interactive prototypes
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Designing intuitive, snappy, and immersive UI/UX
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Ensuring designs meet the web benchmarks
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Conducting usability testing
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.mblR}`}>
                    <div className={`${expStyles.imgBox}`}>
                        {/* <Image src={icon17} alt='BitsWits' className='img-fluid' /> */}
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                    PWA Feasibility Analysis and Consultation
                    </h5>
                    {/* <p>
                    Here at BitsWits our goals are to deliver work that exceeds our client’s satisfaction. With the strength of our core values and our vast array of skills, we promise to deliver the ultimate web applications and services.
                </p> */}
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Evaluation for PWA as a right fit for you
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Technical design and strategy
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />

                                    Benchmarking against competitors 
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Road mapping Progressive web app features to drive growth
                                </li>
                                
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBR} ${expStyles.mblM}`}>
                    <div className={`${expStyles.imgBox}`}>
                        {/* <Image src={icon18} alt='BitsWits' className='img-fluid' /> */}
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                    Extensive PWA Testing 
                    </h5>
                    {/* <p>
                    As far as CRM (Customer Relationship Management) systems go, here at BitsWits our professionals have extensive industry experience when it comes to developing CRM solutions.
                </p> */}
                    <Row>
                        <Col>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Thorough testing of device and OS operation
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Field testing to get usability feedback
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Performance testing and load optimization 
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Scanning for errors and improving security 
                                </li>

                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>

        </Row>
    </>


    // Why Build

    const expsubtile = <h2 className='font50 black fontf font-bold line60 black'>
        PWA Design, <span className='grdiant font-bold'>Development, and Testing</span> - All in one place
    </h2>

    const whytitle = <h2 className='font50 black fontf font-bold line60 black text-center'> 
    
    Why Does Your Business Need <span className='grdiant font-bold'>Progressive Web App Development</span>?
     </h2>

    const title1 = <h2 className='font50 black fontf font-bold line60 black text-center'>

Hire BitsWits For <span className='grdiant font-bold'>Progressive Web App Development</span>

    </h2>

    const para1 = <span className='font30 black fontf font-regular black'>
        Hire us for progressive web app development to beat your competitors with a faster, cross-platform solution that captures wider market reach.
    </span>
    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon232} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Online and Offline Access
                    </h5>
                    <p>
                    <span className='grdiant font-bold'>Progressive web app development services</span> offer online and offline access with a reliable and smooth user experience.  
                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Fast Performance 

                    </h5>
                    <p>
                    Progressive web apps load instantly, with fast functionality. Forget waiting - PWAs deliver speedy experiences users love. 
                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    App-Store Power

                    </h5>
                    <p>
                    <span className='grdiant font-bold'>Progressive web app development</span> enables immersive app-like interactions with splash screens, icons, and prompts to boost engagement.  
                        
                        </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Low-Cost and High-Rewards
                    </h5>
                    <p>
                    PWAs require lower development costs while providing high ROI if done properly.  </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    No Platform Left Behind 
                    </h5>
                    <p>
                    <span className='grdiant font-bold'>Progressive web app developers</span> work consistently across numerous platforms like desktops, mobiles, laptops, and more. </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Progressive Excellence 
                    </h5>
                    <p>  

                    At BitsWits, PWAs keep getting better with updated features and progressive improvements. 

                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Edge of Tomorrow

                    </h5>
                    <p>
                    PWAs offer native features like push notifications, offline access, and home screen icons. 
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Enhanced User Engagement
                    </h5>
                    <p>
                    PWAs offer a seamless, fast, and responsive user experience, which  leads to longer on-site engagement, and increased conversions. 

                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Lower Bounce Rates
                    </h5>
                    <p>  
PWAs reduce bounce rates and retain users through improved app-like interaction and engagement features.


                    </p>

                </div>
            </Col>
        </Row>

    </>


    const Workspace = <>
        <Row className={`${workStyles.soluRow} mt-5 text-center`}>
            <Col lg={4} md={6} className={workStyles.soluCol}>
                <div className={`${workStyles.soluCard}`}>
                    <div className={`${workStyles.imgBox} text-center`}>
                        <Image src={icon32} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30 mt-3'>
                    Instability
                </h5>


                    <p>
                    Users don't need an app store to install PWAs, as they can do it with just one click from their desktop or home screen.
                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={workStyles.soluCol}>
                <div className={`${workStyles.soluCard}`}>
                    <div className={`${workStyles.imgBox}`}>
                        <Image src={icon33} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30 mt-3'>
                    Offline Access 
                </h5>
                    <p>
                    Service workers enable PWAs to operate offline after installation. Users enjoy easy, continuous use that doesn't get impacted by network issues.


                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={workStyles.soluCol}>
                <div className={`${workStyles.soluCard}`}>
                    <div className={`${workStyles.imgBox}`}>
                        <Image src={icon34} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30 mt-3'>
                    Swift Speed
                </h5>
                    <p>
                    PWAs provide incredibly quick loading due to caching, simplified code, and other optimizations.


                    </p>

                </div>
            </Col>
        </Row>
    </>

    // const WorkforUser = <>  
    // <Row className={`${workStyles.soluRow} mt-5`}>
    // <Col lg={4} md={6} className={workStyles.soluCol}>
    //     <div className={`${workStyles.soluCard}`}>
    //         <div className={`${workStyles.imgBox}`}>
    //             <Image src={icon232} alt='BitsWits' className='img-fluid' />
    //         </div>
    //         <h5 className='font20 fontf font-medium line30'>
    //         Fast
    //         </h5>
    //         <p>
    //         Being fast has the most significant impact on your business.
    //         </p>

    //     </div>
    // </Col>
    //     <Col lg={4} md={6} className={workStyles.soluCol}>
    //         <div className={`${workStyles.soluCard}`}>
    //             <div className={`${workStyles.imgBox}`}>
    //                 <Image src={icon24} alt='BitsWits' className='img-fluid' />
    //             </div>
    //             <h5 className='font20 fontf font-medium line30'>
    //             Offline – first

    //             </h5>
    //             <p>
    //             Website can be accessed and used, even you are in offline mode or airplane mode
    //             </p>

    //         </div>
    //     </Col>
    //     <Col lg={4} md={6} className={workStyles.soluCol}>
    //         <div className={`${workStyles.soluCard} ${workStyles.soluCardBR}`}>
    //             <div className={`${workStyles.imgBox}`}>
    //                 <Image src={icon25} alt='BitsWits' className='img-fluid' />
    //             </div>
    //             <h5 className='font20 fontf font-medium line30'>
    //             Installable & Add icon to home screen

    //             </h5>
    //             <p>
    //             It can be installed on the device’s home screen and can be easily accessed with one click.</p>

    //         </div>
    //     </Col>
    // </Row>
    // </>

    const title23 =
        <>
            The Key to Mind-Blowing User Experiences with Top <span className='grdiant font-bold'>Progressive Web App Development Company</span>
           
        </>

    const subtitle32 = <span>How PWAs Actually Works for user?
    </span>


    return (
        <>
            <Head>
                <title>Top Rated Progressive Web App Development Company in US - BitsWits</title>
                <meta name="description" content="As an experienced progressive web app development company, we create fast loading, immersive PWAs that provide native-quality experiences across all devices. Get started today!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <Banner
                title={heading}
                para={para}
                bannerimg={banImg}
                infopara={infopara}
            />


            <WhyBuild
                title="Why Build"
                cards={WhyBuilds}
                subtitle={whytitle}
            />

            {/* <Coverage
                title="Coverage"
                subtitle={subtile}
                mobile={mobile}
                user={user}
                ux={ux}
            /> */}

            <Swipe
                foldimg={foldimg}
                title={titleswip}
                para={visually}
                title1={title1}
                para1={para1}
            // subtitle = {first}
            />

            <MyExpertise
                title="Expertise"
                subtitle={expsubtile}
                cards={expCards}
            />

            <Experienced
                title={stay}
                para={based}
                subtitle='Classic Football Shirts'
                subpara2= { <> Long before PWAs were even an idea, we were at the forefront of online innovation. Our <span className='grdiant font-bold'>progressive web app developers</span> were the first to embrace the progressive web app revolution when it initially started. Since then, we've created more than 100 highly effective PWAs for businesses across sectors, strengthening our position as industry leaders. </> }
                // subtitle2 = {}
                hoke={hoke}
                ahead={aheadimage}
            />
            {/* <WorkExp /> */}

<div className='ourspacingbottom'>
            <WorkExp
                title={title23}
                subtitle={subtitle32}
                Workspace={Workspace}

            />
</div>

            {/* Workspace */}

            {/* <Ensure
            foldimg  = {foldensure}
            title = {based1}
            para =  {continuously}
            subtitle = 'Continuous Improvement and Better Outcomes '
            subpara = {team}
            subtitle2 = 'Data-Informed Product Decisions!'
            subpara2 = 'Our research data serves as a foundation for making data-informed product decisions. By understanding your target audience on a deeper level, we customize apps according to their preferences, improving engagement and satisfaction. '
            
            
            
            /> */}
            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
