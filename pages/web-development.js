import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import Image from 'next/image';
import serStyles from '@/styles/MyServices.module.css'
import reStyles from '@/styles/MyReason.module.css'
import expStyles from '@/styles/MyExpertise.module.css'
import styles from '@/styles/Coverage.module.css'
//components
import Banner from '@/components/ServicesBanner'
import Swipe from '@/components/Swipe';
import Ahead from '@/components/Ahead';
import Ensure from '@/components/Ensure';
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import MyServices from '@/components/MyServices';
import MyExpertise from '@/components/MyExpertise';
import MyReason from '@/components/MyReason';
//images
import banImg from '../public/images/banner/webBanner.png'
import aheadimage from '../public/images/services/webAhead.svg'
import foldimg from '../public/images/services/webSwipe.svg'
import foldensure from '../public/images/services/webEnsure.svg'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//
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


export default function aboutUs() {


    // banner component data

    const heading = <h1 className='font65 grdiant fontf font-bold line60'>Building Futuristic Applications With Our World-Class Web App Development Company </h1>

    const para = <>

        <ul className='p-0'>


            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Increased demand and functionality with scalable web apps.  </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Smart solutions into web apps. </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Combining technology and innovation to create intelligent online apps. </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Innovative web app development  </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>99% customer satisfaction rate </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Transforming ideas into flexible, intelligent online apps. </li>



        </ul>

    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>

        At BitsWits, our <span className='grdiant font-bold'>web application developers</span> focus on creating web solutions and improving brand identity. Connect with us and let our experts fill your apps with creativity and entertainment.

    </p> </>

    // MyServices component data

    const sersubtile = <h2 className='font50 black fontf font-bold line60 black'> How Our <span className='grdiant font-bold'>Web Application Developers</span> Take Websites from Blah to Wow! </h2>


    // const mobile = <div>
    //     <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
    //         Mobile App Design
    //     </h5>
    //     <div className={styles.servcsList}>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             UI UX Design
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Research & Discovery
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Wireframing & Prototyping
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             iOS + Android Applications
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Post Launch Support
    //         </Link>
    //     </div>
    // </div>

    // const user = <div>
    //     <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
    //         User Research
    //     </h5>
    //     <div className={styles.servcsList}>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             User Journey & Persona Building
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             User Testing
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Participant Recruitments
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Research Method & Material Development
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Iterative Research
    //         </Link>
    //     </div>
    // </div>


    // const ux = <div>
    //     <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
    //         UX Optimization
    //     </h5>
    //     <div className={styles.servcsList}>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             User Experience Assessment
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             User & KPIs Data Analysis
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             A/B Testing
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Feature Experimentation
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             UX Iterations
    //         </Link>
    //     </div>
    // </div>

    const serCards = <>
        <Row className={`${serStyles.soluRow} mt-5`}>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.one}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon1} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        E-Commerce Development
                    </h5>
                    <p>
                        We create feature-rich online shops that are optimized for simplified usage and sales. Extensive product brochures, secure checkout, promotions, SEO, and other features are available on our eCommerce platforms.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.two}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon2} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Personalized Portal Development
                    </h5>
                    <p>
                        Our <span className='grdiant font-bold'>web developers</span> create branded, private portals that accelerate procedures and centralize access, communication, and collaboration.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.three}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon3} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Game Design
                    </h5>
                    <p>
                        Our <span className='grdiant font-bold'>web application developers</span> create interactive web games using a variety of technologies, including HTML5, WebGL, and JavaScript. Our games draw players in with amazing graphics, engaging gameplay, and social features.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.four}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon4} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        LMS and Learning Platforms
                    </h5>
                    <p>
                        For the purpose of providing online training and courses, we construct reliable learning management systems. Course creation, testing, certification, and social learning are all part of our LMS solutions.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.five}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon5} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Database and Listings
                    </h5>
                    <p>
                        To link consumers with pertinent providers and companies, we provide specialized directories and classified websites. On our platforms, users can browse, search, check reviews, make reservations, and more.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.six}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon6} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Sites for Social Networking
                    </h5>
                    <p>
                        We create social networks that link members based on shared interests and goals. Modern features on our social networks include profiles, newsfeeds, chat, groups, and more.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.one}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon7} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Streaming Multimedia
                    </h5>
                    <p>
                        We build platforms for streaming rich media, including music, video, and photos. Our platforms include responsive playback, playlists, comments, and other features.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.two}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon8} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Custom CMS Solutions
                    </h5>
                    <p>
                        Our <span className='grdiant font-bold'>web app developers</span> provide adaptable content management solutions that are customized to your unique content processing requirements.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.three}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon9} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Portals for Real Estate
                    </h5>
                    <p>
                        We create real estate portals that showcase the latest features like mortgage calculation, agent biographies, virtual tours, tax reports metrics and 360-Degree Entity Management.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.four}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon10} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Deal and Coupon Platforms
                    </h5>
                    <p>
                        For displaying exclusive offers and discounts, we create deal platforms and coupon websites. Users can quickly search for, share, and use brand offers.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.five}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon11} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Online Reserving Methods
                    </h5>
                    <p>
                        We design websites that allow people to make online reservations for hotels, restaurants, appointments, and events. Our reservation systems offer dynamic price and inventory synchronization.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.six}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon12} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Forms & Workflow Customized


                    </h5>
                    <p>
                        Custom forms and multi-step processes for approvals, document management, and other purposes are part of the data-collecting systems we create.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.one}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon13} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Fitness & Well-Being Apps
                    </h5>
                    <p>
                        To track exercise, diet, and health objectives, we build online applications. Our applications include social features, wearable syncing, and personalized analytics.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.two}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon14} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Games, Apps, and Trivia
                    </h5>
                    <p>
                        With the help of games, quizzes, and interactive material, our <span className='grdiant font-bold'>web application developers</span> create entertaining and educational online applications.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className={`${serStyles.soluCard} ${serStyles.three}`}>
                    <div className={`${serStyles.imgBox}`}>
                        <Image src={icon15} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Web interfaces for IoT
                    </h5>
                    <p>
                        <span className='grdiant font-bold'> Custom web application developers</span> at BitsWits provide web applications to remotely manage, control, and monitor Internet of Things sensors and devices.
                    </p>
                </div>
            </Col>
        </Row>
    </>

    // MyExpertise component data

    const expsubtile = <h2 className='font50 black fontf font-bold line60 black'>Our <span className='grdiant font-bold'>Technical Expertise</span> </h2>

    const expCards = <>
        <Row className={`${expStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon16} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Laravel and PHP
                    </h5>
                    <p>
                        Our professional <span className='grdiant font-bold'>web application developers</span> build secure PHP apps rapidly with Laravel by utilizing templates, authentication, and routing. We implement APIs, queues, and live features.
                    </p>
                    <Row>
                        <Col sm={6}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Routing
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Eloquent ORM
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Artisan CLI
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Auth Scaffolding
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Redis Support
                                </li>
                            </ul>
                        </Col>

                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon17} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Java Script Frameworks
                    </h5>
                    <p>
                        Our professional <span className='grdiant font-bold'>web application developers</span> help bring interactivity to life with spellbinding interfaces powered by React. We build universal JavaScript apps and interactive UI components.
                    </p>
                    <Row>
                        <Col sm={6}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    React
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Angular
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Vue.js
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Ember
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Backbone
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBR}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon18} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Progressive Web Apps
                    </h5>
                    <p>
                        Are you tired of the word “loading”? Well, BitsWits help create lightning-fast apps. We use service workers, push notifications, and offer an app-like experience with offline access.
                    </p>
                    <Row>
                        <Col>
                            <ul className='p-0 m-0'>


                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Responsive Design </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />App-like User Experience  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Mobile Optimization </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />HTTPS Security </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Caching Strategies </li>

                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon19} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Python and Django
                    </h5>
                    <p>
                        BitsWits, a <span className='grdiant font-bold'>web app development company</span> , builds server-side apps and APIs with Django. Our quick prototypes and agile development give a smooth experience on all Python web apps.
                    </p>
                    <Row>
                        <Col sm={6}>
                            <ul className='p-0 m-0'>



                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Form Handling  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />ORM Models </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Routing Systems  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />MVT Design </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Third-Party Integration </li>

                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon20} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Java Spring Boot
                    </h5>
                    <p>
                        We develop flexible Java backends with Spring Boot. Our <span className='grdiant font-bold'>web application developers</span> assist in delivering rapid application development, deployment, and powerful frameworks for Java web apps.
                    </p>
                    <Row>
                        <Col sm={6}>
                            <ul className='p-0 m-0'>


                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Actuator </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Spring MVC </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Embedded Tomcat Server </li>



                            </ul>
                        </Col>

                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBR}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon21} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Ruby on Rails


                    </h5>
                    <p>
                        We at BitsWits, build quick prototypes and MVPs. Our <span className='grdiant font-bold'>web application developers</span> utilize conventions over configurations.
                    </p>
                    <Row>
                        <Col sm={6}>
                            <ul className='p-0 m-0'>



                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Active Record ORM </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />MVC Architecture  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Asset Pipeline  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Scaffolding  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Built-in-Webserver (Puma) </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Stimulus JS </li>


                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBB}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon22} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Node.js and Express
                    </h5>
                    <p>
                        If you are looking for fast and flexible backend services with event-driven developmental apps that work effectively, connect with BitsWits today.
                    </p>
                    <Row>
                        <Col sm={6}>
                            <ul className='p-0 m-0'>


                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Asynchronous  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />NPM </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />MVC Patterns </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Core Modules  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Rest API Support </li>

                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBB} ${expStyles.soluCardBR}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon23} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Frontend Development
                    </h5>
                    <p>
                        Our professional <span className='grdiant font-bold'>web application developers</span> specialize in HTML/CSS for UI development. We use React, Vue, and other frameworks for responsive designs, performance, and accessibility.
                    </p>
                    <Row>
                        <Col sm={6}>
                            <ul className='p-0 m-0'>



                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />HTML </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />CSS </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />JavaScript  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Cross-Browser Testing  </li>



                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </>

    // MyReason component data

    const reSubtile = <h2 className='font50 black fontf font-bold line60 black'>


Let the Heroes of <span className='grdiant font-bold'>Top Web App Development Company</span> Rescue from Overflow Work and Save the Day by Offloading Projects!


    </h2>

    const resCards = <>
        <Row className={`${reStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #1
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                    Expertise and Capabilities 
                    </h5>
                    <p>
                    Our expert group of <span className='grdiant font-bold'>web app developers</span> and designers has built web applications for businesses and startups. We keep up with the most recent trends in web and mobile app development and can create anything from basic CRUD applications to more intricate SaaS solutions.
                    </p>
                  
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #2
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                    Specialized Talents and Skills
                    </h5>
                    <p>
                    Our team offers expertise in advanced technologies like machine learning, augmented reality, real-time communication, and blockchain, in addition to more conventional talents like React and Node. We can assist with integrating modern features.
                    </p>
                  
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #3
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                    Increased Development Bandwidth 
                    </h5>
                    <p>
                    By delegating work to us, you lighten the pressure on your present developers. This enables them to concentrate on their strategic ambitions and primary goals rather than extra tasks.
                    </p>
                 
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #4
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                    Latest Tech Stack
                    </h5>
                    <p>
                    Our top <span className='grdiant font-bold'>web application developers</span> remain up to date with contemporary web stacks like React, Angular, Node, and Golang. We can create apps that are more accessible and maintainable.
                    </p>
                  
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #5
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                    Time and financial savings
                    </h5>
                    <p>
                    Avoid the costs associated with hiring, training, and maintaining greater internal staff. Faster delivery at cheaper costs is made possible by our skilled personnel and efficient operations.
                    </p>
                  
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #6
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                    End-to-End Services
                    </h5>
                    <p>
                    From the original UX/UI design stage to deployment and maintenance, we manage the full product development process. This saves you from the hassles of coordinating across multiple agencies.
                    </p>
                </div>
            </Col>
        </Row>
    </>

    return (
        <>
            <Head>
                <title>Top Web App Development Company - BitsWits</title>
                <meta name="description" content="Achieve key business goals with the help of our web application development company. As experienced web app developers, we build feature-rich, user-friendly solutions" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <Banner
                title={heading}
                para={para}
                infopara={infopara}
                bannerimg={banImg}
            />

            {/* <Coverage
                title="Coverage"
                subtitle={subtile}
                mobile={mobile}
                user={user}
                ux={ux}
            /> */}

            <MyServices
                title="Services"
                subtitle={sersubtile}
                cards={serCards}
            />


            {/* <Swipe
                foldimg={foldimg}
                title='We Design Engaging Mobile Apps your users will swipe through from start to finish'
                para='Our goal with each new mobile app design is to keep users engaged and drive higher completion rates. We use data and user research to create intuitive interfaces that drive actions and we follow the latest design trends to ensure your mobile app is visually appealing.'
                subtitle='High Performance User Experience'
                subpara='In our design lab performance always comes first. We ensure that your mobile app is effective and engaging.'
                subtitle2='Swipe that Convert'
                subpara2='In our design lab performance always comes first. We ensure that your mobile app is effective and engaging.'

            /> */}

            <MyExpertise
                title="Expertise"
                subtitle={expsubtile}
                cards={expCards}
            />



            {/* <Ahead
                title='Our Mobile App Research Data that puts you ahead of others'
                para='We conduct user research with real people to provide valuable insights that help our clients stay ahead of their competitors. We use various creative methods to gather data and inform product decisions based on the needs and wants of the target audience.'
                subtitle='Laser Focused User Research'
                subpara='We remain laser focused on your target audience to best meet their needs and requirements.'
                subtitle2='Competitive Advantage'
                subpara2='Our research process gives you a competitive advantage and up-to-date market insights.'
                ahead={aheadimage}

            /> */}

            <MyReason
                title="Reasons"
                subtitle={reSubtile}
                cards={resCards}
            />


            {/* <Ensure
                foldimg={foldensure}
                title='We Test and Optimize your mobile app to ensure best user experience'
                para='We aim to optimize your mobile app experience for better end results. Our team continuously looks for improvement opportunities and tests new features through A/B optimization.'
                subtitle='Constant Innovation'
                subpara='In our design Our primary focus is increasing the end result and making sure the site brings revenue to your business.'
                subtitle2=' Active On-Going Support'
                subpara2='We only rely on real evidence-based improvements that drives conversion rates.'

            /> */}


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
