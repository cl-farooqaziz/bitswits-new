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

import serStyles from '@/styles/MyServices.module.css'
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
// import serStyles from '@/styles/MyServices.module.css'
// import WhyStyles from '@/styles/MyServices.module.css'

export default function progressivewebappdevelopment() {


const team = <span>Our team of <span className='grdiant'>professional progressive web app developers</span> is committed to optimizing your applications to its fullest potential. Through careful observations and analysis, we identify areas for improvement and implement strategic optimizations that result in a user-friendly experience. </span>

const continuously = <span> BitsWits, the most reliable <span  className='grdiant'>progressive web app development agency</span>, has a team of experts who are dedicated to ensuring that your web app delivers the best user experience every time. Our team of professional <span className='grdiant'>progressive web app developers</span> goes above and beyond to test and optimize your applications while continuously seeking improvement opportunities to boost their performance.  </span>

const based1 = <span>Create an Exceptional <span className='grdiant'>Progressive Web App Development</span> Experience!</span>

const gives = <span>
    Every project is different, and we modify our research methods to suit your specific goals. Whether it’s conducting focus groups, analyzing client feedback, or tracking user behavior through advanced analytics, we have a variety of creative techniques to gather relevant and reliable data for your <span className='grdiant'>progressive web app development</span>. 
</span>

const meet = <span> Our team of expert <span className='grdiant'>progressive web app developers</span> believes in fetching data that shapes amazing results. Our experienced researchers and analysts analyze the data we collect, providing you with valuable insights that guide your product strategy. From identifying market trends to understanding user expectations, our data-driven approach helps you gain a competitive edge. </span>    

const based = <span>
   The World's largest collection of original football shirts. It is the home of classic, rare, retro and vintage football shirts from your soccer team's history.
<br/>
Dotsquares has already launched their Progressive web app and see how it effects
</span>

const hoke = <>
 <ul className='p-0'>
    <li className="font16 fontf font-medium black ">
         <Image src={mobilearrow} className='img-fluid multi'></Image>
         Fast in loading
    </li>
    <li className="font16 fontf font-medium black ">
         <Image src={mobilearrow} className='img-fluid multi'></Image>
         Traffic increases on website
    </li>
    <li className="font16 fontf font-medium black ">
         <Image src={mobilearrow} className='img-fluid multi'></Image>
         Decrease in bounce rate
    </li>
    <li className="font16 fontf font-medium black ">
         <Image src={mobilearrow} className='img-fluid multi'></Image>
         Increase in page per session
    </li>
    </ul>
</>


    const stay = <span className='font30 fontf font-bold black'>
        Classic Football Shirts
    </span>

    const offline = <span> 

The development process at BitsWits focuses on creating engaging and personalized mobile experiences that keep users coming back for more. Whether it’s through responsive designs, real-time updates, or offline capabilities, our <span className='grdiant'>progressive web app development</span> improves engagement and drives conversions. 

    </span>

    const combines = <span>
        At BitsWits, our team of <span className='grdiant'>progressive web app developers </span> combines technical expertise with a deeper understanding of the behavior of the user to create web applications that load quickly and work smoothly for a delightful experience across all devices and platforms. 

         </span>

    const first = <h2> Top-Performing <span className='grdiant'>Progressive Web App Development</span> </h2>

    const visually = <span>
       Smartphone users are 50% more likely to expect to purchase something immediately while using their smartphone compared to a year ago (Google)

       <br/>
       70% of smartphone users who bought something in a store first turned to their phone for information about a purchase (Google) 35% of people who searched on their phone spent more than they expected in the store (Google)


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

const infopara = <> <p className='black fontf font-medium line30 mt-5'>In 21 years of business we've worked with over <strong>128 Fintech</strong>, banking and finance clients. What can we do for you?</p> </>

const titleswip = <>
<h3 className='black fontf font-700 font-bold line30 mt-5'>Mobile Searches Statistics</h3>
</>

    // Swipe component data

    // MyExpertise component data


    const expCards = <>
    <Row className={`${expStyles.soluRow} mt-5`}>
        <Col lg={4} md={6} className={expStyles.soluCol}>
            <div className={`${expStyles.soluCard}`}>
                <div className={`${expStyles.imgBox}`}>
                    {/* <Image src={icon16} alt='BitsWits' className='img-fluid' /> */}
                </div>
                <h5 className='font20 fontf font-bold line30'>
                Native Apps
                </h5>
                <p>
                    
                </p>
                <Row>
                    <Col sm={12}>
                        <ul className='p-0 m-0'>
                            <li className="font14 fontf font-medium black ">
                                <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                Fast and quick to respond
                            </li>
                            <li className="font14 fontf font-medium black ">
                                <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                Smooth, consistent and self contained UI
                            </li>
                            <li className="font14 fontf font-medium black ">
                                <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                Work consistently when offline
                            </li>
                            <li className="font14 fontf font-medium black ">
                                <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                Complete access to phone’s hardware.
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
                PWA’s
                </h5>
                {/* <p>
                    Here at BitsWits our goals are to deliver work that exceeds our client’s satisfaction. With the strength of our core values and our vast array of skills, we promise to deliver the ultimate web applications and services.
                </p> */}
                <Row>
                    <Col sm={12}>
                        <ul className='p-0 m-0'>
                            <li className="font14 fontf font-medium black ">
                                <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                Mobile App-like interface
                            </li>
                            <li className="font14 fontf font-medium black ">
                                <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                Web standard technologies.
                            </li>
                            <li className="font14 fontf font-medium black ">
                                <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                 
Most of the benefits of Native Apps
                            </li>
                            <li className="font14 fontf font-medium black ">
                                <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                No download required
                            </li>
                            <li className="font14 fontf font-medium black ">
                                <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                Linkable and sharable
                            </li>
                            <li className="font14 fontf font-medium black ">
                                <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                            Improves SEO
                            </li>
                            <li className="font14 fontf font-medium black ">
                                <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                Full responsiveness and browser compatibility.
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
                Traditional Web Apps
                </h5>
                {/* <p>
                    As far as CRM (Customer Relationship Management) systems go, here at BitsWits our professionals have extensive industry experience when it comes to developing CRM solutions.
                </p> */}
                <Row>
                    <Col>
                        <ul className='p-0 m-0'>
                            <li className="font14 fontf font-medium black ">
                                <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                Depending on the speed of your internet, the web app will be instantly delivered to you.
                            </li>
                            <li className="font14 fontf font-medium black ">
                                <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                Web apps are built using standard HTML, CSS, and JavaScript.
                            </li>
                            <li className="font14 fontf font-medium black ">
                                <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                Limited access to device’s features.
                            </li>
                            <li className="font14 fontf font-medium black ">
                                <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                You cannot install the web app on your device.
                            </li>
                            <li className="font14 fontf font-medium black ">
                                <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                Unlike native apps, web apps don’t have to bother with any kind of app store restrictions.
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </Col>
        
    </Row>
</>


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
// Why Build

const expsubtile = <h2 className='font50 black fontf font-bold line60 black'>What are Progressive Web Apps (PWA’s)?
</h2>

const whytitle = <h2 className='font50 black fontf font-bold line60 black text-center'>Why Build 
<span className='grdiant'> Progressive Web Apps?</span></h2>

const title1 = <h2 className='font50 black fontf font-bold line60 black text-center'>What are Progressive Web Apps (PWA’s)?
</h2>

const para1 = <span className='font30 black fontf font-400 line60 black'>
    Usage of internet over mobile is continuously increasing than desktop.
53% of traffic to online stores comes via mobile devices
</span>
  const WhyBuilds = <>  
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon232} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                    Fast
                    </h5>
                    <p>
                    Being fast has the most significant impact on your business.
                    </p>
                   
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                    Offline – first

                    </h5>
                    <p>
                    Website can be accessed and used, even you are in offline mode or airplane mode
                    </p>
                  
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                    Installable & Add icon to home screen

                    </h5>
                    <p>
                    It can be installed on the device’s home screen and can be easily accessed with one click.</p>
                    
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                    Fresh
                    </h5>
                    <p>
                    Content is automatically updated if something new is added to the website when user is online. </p>
                  
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                    Secure
                    </h5>
                    <p>
                    Web app is hosted over https to avoid any kind of attacks.</p>
                   
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                    App Like
                    </h5>
                    <p>  Same functionalities similar to native app but are on the web</p>
                    
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                    Responsive

                    </h5>
                    <p>
                    App’s UI fit to the device screen size
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                    Engaging
                    </h5>
                    <p>
                    Built in features like food ordering and loyalty rewards points to engage users


                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                    Engaging
                    </h5>
                    <p>  Built in features like food ordering and loyalty rewards points to engage users

</p>
                    
                </div>
            </Col>
        </Row>
  
    </>


// const WorkforUser = <>  
// <Row className={`${workStyles.soluRow} mt-5`}>
//     <Col lg={4} md={6} className={workStyles.soluCol}>
//         <div className={`${workStyles.soluCard}`}>
//             <div className={`${workStyles.imgBox}`}>
//                 <Image src={icon232} alt='BitsWits' className='img-fluid' />
//             </div>
//             <h5 className='font20 fontf font-500 line30'>
//             Fast
//             </h5>
//             <p>
//             Being fast has the most significant impact on your business.
//             </p>
           
//         </div>
//     </Col>
//     <Col lg={4} md={6} className={workStyles.soluCol}>
//         <div className={`${workStyles.soluCard}`}>
//             <div className={`${workStyles.imgBox}`}>
//                 <Image src={icon24} alt='BitsWits' className='img-fluid' />
//             </div>
//             <h5 className='font20 fontf font-500 line30'>
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
//             <h5 className='font20 fontf font-500 line30'>
//             Installable & Add icon to home screen

//             </h5>
//             <p>
//             It can be installed on the device’s home screen and can be easily accessed with one click.</p>
            
//         </div>
//     </Col>
// </Row>
// </>


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

            
            <WhyBuild
              title="Why Build"
              cards={WhyBuilds}
              subtitle= {whytitle}
            />

            {/* <Coverage
                title="Coverage"
                subtitle={subtile}
                mobile={mobile}
                user={user}
                ux={ux}
            /> */}

            <Swipe
            foldimg  = {foldimg}
            title = {titleswip}
            para =  {visually}
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
            title = {stay}
            para = {based}
            subtitle = 'Classic Football Shirts'
            subpara2 = 'Our research data serves as a foundation for making data-informed product decisions. By understanding your target audience on a deeper level, we customize apps according to their preferences, improving engagement and satisfaction.'
            subpara = 'Dotsquares has already launched their Progressive web app and see how it effects'
            // subtitle2 = {}
            hoke = {hoke}
            ahead  = {aheadimage}
            />



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
