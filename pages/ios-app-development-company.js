import Head from 'next/head'
import React, { useState, useEffect } from 'react'; import Link from 'next/link';
import banImg from '../public/images/banner/mobileappbanner.png'
import foldimg from '../public/images/services/mobileapp/mobile-app-development-01.png'
import foldensure from '../public/images/services/mobileapp/mobile-app-development-03.png'
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
import aheadimage from '../public/images/services/mobileapp/mobile-app-development-02.png'
import Image from 'next/image';
import mobilearrow from '../public/images/icons/mobile-arrow.png'

import serStyles from '@/styles/MyServices.module.css'
import MyServices from '@/components/MyServices';
import expStyles from '@/styles/MyExpertise.module.css'
import MyExpertise from '@/components/MyExpertise';
import reStyles from '@/styles/MyReason.module.css'
import WhyBuild from '@/components/WhyBuild';
import whyStyles from '@/styles/whyServices.module.css'

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
import benefitimg1 from '../public/images/industryInt/benefit-img1.svg'
import benefitimg2 from '../public/images/industryInt/benefit-img2.svg'
import benefitimg3 from '../public/images/industryInt/benefit-img3.svg'
import benefitimg4 from '../public/images/industryInt/benefit-img4.svg'
//

import icon16 from '../public/images/wbd-icons/wbd-t1.png'
import icon17 from '../public/images/wbd-icons/wbd-t2.png'
import icon18 from '../public/images/wbd-icons/wbd-t3.png'
import icon19 from '../public/images/wbd-icons/wbd-t4.png'
import icon20 from '../public/images/wbd-icons/wbd-t5.png'
import icon21 from '../public/images/wbd-icons/wbd-t6.png'
import icon22 from '../public/images/wbd-icons/wbd-t7.png'
import icon23 from '../public/images/wbd-icons/wbd-t8.png'


// Why Icon
import icon232 from '../public/images/industryInt/why-us1.svg'
import icon24 from '../public/images/industryInt/why-us2.svg'
import icon25 from '../public/images/industryInt/why-us3.svg'
import icon26 from '../public/images/industryInt/why-us4.svg'
import icon27 from '../public/images/industryInt/why-us5.svg'
import icon28 from '../public/images/industryInt/why-us6.svg'
import icon29 from '../public/images/industryInt/why-us7.svg'
import icon30 from '../public/images/industryInt/why-us8.svg'
import icon31 from '../public/images/industryInt/why-us9.svg'
import icon32 from '../public/images/industryInt/feather-check-circle-svg.png'

// import icon32 from '../public/images/industryInt/pwa-1.png'
// import icon33 from '../public/images/industryInt/pwa-2.png'
// import icon34 from '../public/images/industryInt/pwa-3.png'
// import grnArrow from '../public/images/wbd-icons/arrow-green.png'

export default function iosappdevelopment() {


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
    const heading = <h1 className='font65 black fontf font-bold line60'>The Best  <span className='grdiant'>iOS App Development Company! </span></h1>

    const para = <>

        <ul className='p-0'>

            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>Expert IOS Development Team </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>Delivering solutions across diverse industry verticals </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>Building Applications for the iOS Ecosystem </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>High client satisfaction rate  </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>User-centric responsive app designs </li>

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


    const infopara = <> <p className='black fontf font-medium line30 mt-5'>Our top-rated iOS developers have engaged with a diverse array of exceptional clientele. Connect and let us build a perfect iOS application for your business!</p> </>

    // Swipe component data
    const serCards = <>
        <Row className={`${serStyles.soluRow} mt-5`}>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.one}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon1} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Custom Web Development
                    </h5>
                    <p>
                        BitsWits can design and develop a solution targeted to your organization’s specific needs – custom web development. We make sure your needs are not only heard but met, effectively.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.two}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon2} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Portal Development
                    </h5>
                    <p>
                        We offer full-cycle development services to create a web portal that supports your business strategy. We’ve deployed amazing and experienced web developers, each of whom have an affinity towards coding and developing.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.three}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon3} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Online Reservation & Ticketing
                    </h5>
                    <p>
                        BitsWits provides design and software development for event management companies and companies who sell tickets online.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.four}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon4} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        E-Commerce Development
                    </h5>
                    <p>
                        With rich, dynamic and customer oriented B2C solutions, BitsWits is in a strong position to assist business efficiently. Helping our clients achieve business growth through the medium of our services is what keeps us motivated.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.five}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon5} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Game Development
                    </h5>
                    <p>
                        We understand what can turn a good gaming idea into a fantabulously great game. We’ve got expert game developers who do it all wonderfully and at an amazing speed.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.six}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon6} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Education & e-Learning Development
                    </h5>
                    <p>
                        e-Learning can revolutionize the way developing and 3rd world countries educate their people. At BitsWits we develop education and e-learning websites, ones that surpass quality and standards of the ones already made.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.one}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon7} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        CRM Solutions
                    </h5>
                    <p>
                        With rich, dynamic and customer oriented B2C solutions, BitsWits is in a strong position to assist business efficiently. Helping our clients achieve business growth through the medium of our services is what keeps us motivated.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.two}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon8} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        CMS Solutions
                    </h5>
                    <p>
                        At BitsWits, we provide you undisputed and standard CMS Solutions – we’ve got the kind of experience in doing this and we’ve served a lot of clients for many years.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.three}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon9} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Enterprise Web Development
                    </h5>
                    <p>
                        In today’s fast paced world, business can make their mark only if they are able to cope with the challenges like improved quality services, speedy claims management, reduced time-to-market, improved functionality, etc.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.four}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon10} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Mobile App & Mobile Web Development
                    </h5>
                    <p>
                        Mobile apps are reigning supreme and for a business to make the right impression on the clients it is most important to get it made by experienced mobile app developers. Our developers have the experience to do mobile apps and mobile web development.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.five}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon11} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Social Network Websites
                    </h5>
                    <p>
                        We deliver Custom Social Networking and Collaboration platforms and build Online Communities and Knowledge Networks, with great user experience and responsive web design providing you full ownership rights to a custom solution.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.six}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon12} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Responsive Web Development
                    </h5>
                    <p>
                        Web designing is essential to keep up with the newest trends. In recent times, a business can be displayed in any given mobile device and to have a responsive web design. Our web designers are affluent with the technology and your requirements, thus making the best designs.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.one}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon13} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Search Engine Optimization Services
                    </h5>
                    <p>
                        Our search engine optimisation (SEO) services are designed to increase visibility within the algorithmic search results to deliver high quality, targeted traffic to your website.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.two}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon14} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Quality Analyst Services
                    </h5>
                    <p>
                        Our company is an ISO 9001:2008 Certified for a quality standards IT Company. This means that we will ensure to focus on four major components: quality planning, quality control, quality assurance and quality improvement.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.three}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon15} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Server Management And Domain Services Support Services
                    </h5>
                    <p>
                        Server infrastructure is the centerpiece of any technology planning. Servers enable process integration and facilitate collaboration among internal and external stakeholders. BitsWits provides you this amazing service.
                    </p>
                </div>
            </Col>
        </Row>
    </>
    const sersubtile = <h2 className='font50 black fontf font-bold line60 black'>Get An Insight Of Our <span className='grdiant'>Web Development</span> Services</h2>

    //   const expsubtile = <h2 className='font50 black fontf font-bold line60 black'>Our Technical Expertise</h2>

    const expCards = <>
        <Row className={`${expStyles.soluRow} mt-5`}>
            <Col lg={5}>
                <h4 className='font30 font-bold'>Our Approach for Ios App Development</h4>
                <div className='d-flex justify-content-start align-content-start mt-5'>
                    <div className='d-inline'>
                        <div className="mobbtn nonefor">
                            <Link href="#" target="_blank" aria-label="img" className={`${expStyles.mobdev} ${expStyles.ev1}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21.849" height="26" viewBox="0 0 21.849 26">
                                    <path id="Icon_awesome-apple" data-name="Icon awesome-apple" d="M18.548,15.99a5.419,5.419,0,0,1,2.9-4.922,6.237,6.237,0,0,0-4.917-2.589c-2.061-.163-4.313,1.2-5.137,1.2-.871,0-2.867-1.144-4.435-1.144C3.723,8.589.281,11.119.281,16.268a14.468,14.468,0,0,0,.836,4.713c.743,2.13,3.425,7.354,6.223,7.267,1.463-.035,2.5-1.039,4.4-1.039,1.846,0,2.8,1.039,4.435,1.039,2.821-.041,5.247-4.789,5.956-6.925a5.754,5.754,0,0,1-3.581-5.334ZM15.263,6.458A5.467,5.467,0,0,0,16.656,2.25a6.155,6.155,0,0,0-3.941,2.026,5.553,5.553,0,0,0-1.486,4.174,4.875,4.875,0,0,0,4.034-1.991Z" transform="translate(-0.281 -2.25)" fill="#fff"></path>
                                </svg>
                                <span> IOS</span>
                            </Link>
                            <Link href="#" target="_blank" aria-label="img" className={`${expStyles.mobdev} ${expStyles.ev2}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21.667" height="26" viewBox="0 0 21.667 26">
                                    <path id="Icon_material-android" data-name="Icon material-android" d="M7.333,19.5a1.087,1.087,0,0,0,1.083,1.083H9.5v3.792a1.625,1.625,0,0,0,3.25,0V20.583h2.167v3.792a1.625,1.625,0,1,0,3.25,0V20.583H19.25A1.087,1.087,0,0,0,20.333,19.5V8.667h-13ZM4.625,8.667A1.623,1.623,0,0,0,3,10.292v7.583a1.625,1.625,0,0,0,3.25,0V10.292A1.623,1.623,0,0,0,4.625,8.667Zm18.417,0a1.623,1.623,0,0,0-1.625,1.625v7.583a1.625,1.625,0,0,0,3.25,0V10.292A1.623,1.623,0,0,0,23.042,8.667ZM17.658,2.34,19.066.932a.536.536,0,0,0,0-.769.536.536,0,0,0-.769,0l-1.6,1.6a6.326,6.326,0,0,0-2.86-.682,6.417,6.417,0,0,0-2.882.683L9.338.162a.536.536,0,0,0-.769,0,.536.536,0,0,0,0,.769L9.988,2.351A6.482,6.482,0,0,0,7.333,7.583h13A6.463,6.463,0,0,0,17.658,2.34ZM11.667,5.417H10.583V4.333h1.083Zm5.417,0H16V4.333h1.083Z" transform="translate(-3)" fill="#fff"></path>
                                </svg>
                                <span> Android</span>
                            </Link>
                            <Link href="#" target="_blank" aria-label="img" className={`${expStyles.mobdev} ${expStyles.ev3}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24.065" height="21.177" viewBox="0 0 24.065 21.177">
                                    <path id="Path_2947" data-name="Path 2947" d="M21.912.579a11.936,11.936,0,0,0,.1,1.691,1.826,1.826,0,0,0,.413.99,1.71,1.71,0,0,0,.88.481,7.494,7.494,0,0,0,1.5.165v1.1H14.706v-1.1a8.944,8.944,0,0,0,1.636-.165,1.978,1.978,0,0,0,.963-.468,1.669,1.669,0,0,0,.454-.935,9.067,9.067,0,0,0,.11-1.568V-4.976H7.666V.579a10.465,10.465,0,0,0,.11,1.691,1.84,1.84,0,0,0,.44.99,1.828,1.828,0,0,0,.949.481,8.944,8.944,0,0,0,1.636.165v1.1H.735v-1.1a7.494,7.494,0,0,0,1.5-.165A1.68,1.68,0,0,0,3.1,3.274a1.842,1.842,0,0,0,.413-.935A9.067,9.067,0,0,0,3.623.772V-11.935a10.057,10.057,0,0,0-.1-1.554,1.985,1.985,0,0,0-.371-.935,1.385,1.385,0,0,0-.784-.468,8.129,8.129,0,0,0-1.334-.179v-1.1h9.488v1.1a7.494,7.494,0,0,0-1.5.165,1.587,1.587,0,0,0-.866.5,1.961,1.961,0,0,0-.4.99,11.635,11.635,0,0,0-.1,1.678v5.06h10.2v-5.253a8.821,8.821,0,0,0-.11-1.554,1.917,1.917,0,0,0-.413-.935,1.559,1.559,0,0,0-.866-.468,10.02,10.02,0,0,0-1.5-.179v-1.1H24.5v1.1a6.045,6.045,0,0,0-1.334.165,1.419,1.419,0,0,0-.784.5,2.134,2.134,0,0,0-.371.99,11.635,11.635,0,0,0-.1,1.678Z" transform="translate(-0.735 16.17)" fill="#fff"></path>
                                </svg>
                                <span> Hybrid</span>
                            </Link>
                        </div>
                    </div>
                </div>

            </Col>
            <Col lg={7}>
                <p>
                As a premier <span className='grdiant font-bold'>iOS app development company</span> , our <span className='grdiant font-bold'>iOS developers</span> create eye-catching and user-friendly iPhone and iPad apps that capture attention immediately. To develop customized applications that are appropriate for Apple devices, our professional <span className='grdiant font-bold'>iOS developers</span> and designers make use of the newest iOS capabilities.
                </p>
                <p>We put a lot of emphasis on fluid design, clear interfaces, slick performance, thorough testing, and a fantastic user experience. Allow our professionals to create an appealing iOS app that is successful in the App Store and generates actual commercial results.</p>
            </Col>

        </Row>
    </>

    // Why Build

    const expsubtile = <h2 className='font50 black fontf font-bold line60 black'> Driving User Engagement at the Top <span className='grdiant'>iOS App Development Agency</span> 
    </h2>

    const whytitle = <h2 className='font50 black fontf font-bold line60 black text-center'>Why Do You Require Our <span className='grdiant'>iOS Applications</span>?</h2>

    const title1 = <h2 className='font50 black fontf font-bold line60 black text-center'>What are Progressive Web Apps (PWA’s)?
    </h2>

    const para1 = <span className='font30 black fontf font-regular line60 black'>
        Usage of internet over mobile is continuously increasing than desktop.
        53% of traffic to online stores comes via mobile devices
    </span>

    const text =
        <p className='text-center'>
            <span className='grdiant font-bold'>Building your mobile app</span> acts like a technological asset that improves the services of your business, attracting more customers, boosting its success, and letting you shape the trajectory of your business.
        </p>
    const WhyBuilds = <>

        <Row className={`${whyStyles.soluRow} mt-5`}>

            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon232} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Stunning and Intuitive Designs
                    </h5>
                    <p>
                    Our <span className='grdiant font-bold'>iOS developers</span> craft pixel-perfect iOS apps with beautiful and latest designs for Apple devices. 


                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Expert Development
                    </h5>
                    <p>
                    Expert <span className='grdiant font-bold'>iOS developers</span> at BitsWits know about Swift and Xcode and utilize the latest iOS features for perfect user experiences.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    High Performing Apps
                    </h5>
                    <p>
                    We build powerful and high-performing iOS applications that are stable, smooth, and fast.</p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Apple Guidelines Compliance


                    </h5>
                    <p>
                    For optimal App Store optimization, our <span className='grdiant font-bold'>iOS developers</span> stick to Apple's strict interface rules and standards of excellence.

                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Continuous Support


                    </h5>
                    <p>
                    We provide on-going support and maintenance to keep your applications updated with high-quality services. 

                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Open Communication


                    </h5>
                    <p>  Our <span className='grdiant font-bold'>iOS developers</span> ensure open dialogues and total transparency throughout the development process. 

                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Extensive Testing 


                    </h5>
                    <p>
                    BitsWits focuses on thorough QA testing, which guarantees your iOS app is free of bugs. 


                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Risk Reduction 


                    </h5>
                    <p>
                    Outsourcing professional <span className='grdiant font-bold'>iOS app developers</span> from BitsWits, helps reduce risks of launch delays and failure.




                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Proven Track Record 


                    </h5>
                    <p>  Our <span className='grdiant font-bold'>iOS app development services</span> are known to have a proven history of successfully delivering hundreds of iOS applications for customers.  



                    </p>

                </div>
            </Col>
        </Row>

    </>



    const Benefits = <>
        <Row className='justify-content-center align-items-center text-center mb-4'>
            <Col lg={12}>
                <h2 className='font50 black fontf font-bold line60 black text-center'>The Perks of Hiring an 
                    <br className='d-none d-lg-block' />
                    <span className='grdiant font-bold'> iOS App Development Company!</span>
                </h2>
                <p> BitsWits has a team of professional <span className='grdiant font-bold'>iOS app developers</span> who will assist you with;</p>
            </Col>
        </Row>
        <Row className='benefitscard'>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body p-4'>
                        <Row className='gy-4'>
                            <Col lg={5}>
                                <Image src={benefitimg1} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                            <h4 className='font-bold font20'>Gaining Proven Return on Investments  </h4>
                                <p className='font14'>
                                Our <span className='grdiant font-bold'>iOS app development services</span> boost productivity, user growth, and income in the real world of business. We use analytics to demonstrate that our apps increase ROI across important business metrics.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body p-4'>
                        <Row className='gy-4'>
                            <Col lg={5}>
                                <Image src={benefitimg2} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                            <h4 className='font-bold font20'>Gaining Access to the Latest App Features  </h4>
                                <p className='font14'>
                                BitsWits, a leading  <span className='grdiant font-bold'>iOS app development company</span>, always stays up-to-date with Apple’s latest iOS features to create differentiated and smooth innovative user experiences. 
                                </p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body p-4'>
                        <Row className='gy-4'>
                            <Col lg={5}>
                                <Image src={benefitimg3} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                            <h4 className='font-bold font20'>Reducing Launch Time   </h4>
                                <p className='font14'>
                                Our <span className='grdiant font-bold'>iOS app developers</span> have a swift speed in taking your app from concept to launch than most companies. With high-quality applications, BitsWits will definitely surpass your expectations. 
                                </p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body p-4'>
                        <Row className='gy-4'>
                            <Col lg={5}>
                                <Image src={benefitimg4} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                            <h4 className='font-bold font20'>Reducing Risks During App Launch  </h4>
                                <p className='font14'>
                                Our wealth of experience launching hundreds of iOS apps reduces risks of delays, rejections, or other complications. To ensure that your software is approved and goes live on the app store on time, we know how to avoid frequent errors.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
        <p className='text-center'> 

        Our <span className='grdiant font-bold'>iOS app development services</span> include developing perfect applications according to your unique business requirements. 

        </p>
    </>
    const Benefits1 = <>
        <Row className='text-center'>
            <Col lg={12}>
                <h4 className='font50 font-bold'>Our <span className='grdiant font-bold'> Ios App Development</span> Process</h4>
                <p>Our <span className='grdiant font-bold'>iOS mobile app development</span> process is designed to be innovative, efficient, and transparent. What to anticipate from our <span className='grdiant font-bold'>iOS app development services</span> is outlined below:</p>
            </Col>
        </Row>
        <Row>
            <Col lg={7}>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold'><Image src={icon32} width={20} className='img-fluid' /> Initial Consultation</h4>
                    <p>Our <span className='grdiant font-bold'>iOS app developers</span> start by talking about the objectives, obstacles, and limitations you have for your app.</p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold'><Image src={icon32} width={20} className='img-fluid' /> Gathering Requirements</h4>
                    <p>We'll work with you to define the specific requirements and functionality for your business app.</p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold'><Image src={icon32} width={20} className='img-fluid' /> Design and Prototype </h4>
                    <p>In order to give you a sense of how your app will look and work, we design wireframes and prototypes.</p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold'><Image src={icon32} width={20} className='img-fluid' /> Development</h4>
                    <p>Utilizing development approaches, our team will create your app in a way that swiftly responds to any issues or modifications.</p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold'><Image src={icon32} width={20} className='img-fluid' /> Tests and Quality Control</h4>
                    <p>Your app will be thoroughly evaluated by us to make sure it is dependable, stable, and simple to use.</p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold'><Image src={icon32} width={20} className='img-fluid' /> Launch</h4>
                    <p>To guarantee the success of your app, our <span className='grdiant font-bold'>iOS developers</span> assist you with the submission procedure and offer continuous assistance.</p>
                </div>
            </Col>
            <Col lg={5}>
                <div className={styles.contactform}>
                    <div className=''>
                        <h3 className='font20 font-bold mb-3'>Get a Free Consultation</h3>
                    </div>
                    <Row>
                        <Col lg={12}>
                            <input type='text' className={styles.forminput} placeholder='Your Name' />
                        </Col>
                        <Col lg={12}>
                            <input type='number' className={styles.forminput} placeholder='Phone Number' />
                        </Col>
                        <Col lg={12}>
                            <input type='email' className={styles.forminput} placeholder='Email Address' />
                        </Col>
                        <Col lg={12}>
                            <textarea className={styles.formarea} placeholder='How can we help you?' ></textarea>
                        </Col>
                        <Col lg={12}>
                            <input type='Submit' className={styles.notice} />
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </>


    return (
        <>
            <Head>
                <title>iOS App Development Company - Bitswits!</title>
                <meta name="description" content="Get the most out of your iOS app by working with our top-rated iOS app developers! We have the best team of developers who specialize in building iOS apps" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <Banner
                title={heading}
                para={para}
                bannerimg={banImg}
                infopara={infopara}
            />

            <MyExpertise
                title="Expertise"
                subtitle={expsubtile}
                cards={expCards}
                className='bgColorf'
            />

            <WhyBuild
                title="Why Does Your Business Need a"
                cards={WhyBuilds}
                subtitle={whytitle}
                text={text}
            />



            <WhyBuild
                title="Why Does Your Business Need a"
                cards={Benefits}
                alignclass="midBuild"
            // subtitle={whytitle}
            // text={text}
            />
            <WhyBuild
                title="Why Does Your Business Need a"
                cards={Benefits1}
            // subtitle={whytitle}
            // text={text}
            />

            {/* <Swipe
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



            />  */}
            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
