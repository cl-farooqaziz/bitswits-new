import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import Image from 'next/image';
import serStyles from '@/styles/MyServices.module.css'
import expStyles from '@/styles/MyExpertise.module.css'
import reStyles from '@/styles/MyReason.module.css'
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

    const heading = <h1 className='font65 black fontf font-bold line60'>The Best Design and <br /><span className='grdiant'> Web Development </span> Company!</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image> Multi Browser Compatabilitiy </li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image> Highly Maintainable Code</li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image> Solid Version Control System</li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image> User Friendly Interfaces</li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image> Performance, load and Stress Testing</li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image> Staying Up-To-Date with Latest Technology</li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image> Clean Code and API’s</li>
        </ul>

    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>In 21 years of business we've worked with over <strong>128 Fintech</strong>, banking and finance clients. What can we do for you?</p> </>


    // MyServices component data


    const sersubtile = <h2 className='font50 black fontf font-bold line60 black'>Get An Insight Of Our <span className='grdiant'>Web Development</span> Services</h2>


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


    // MyExpertise component data

    const expsubtile = <h2 className='font50 black fontf font-bold line60 black'>Our Technical Expertise</h2>

    const expCards = <>
        <Row className={`${expStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon16} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        PHP
                    </h5>
                    <p>
                        Powering nearly 80% of websites, PHP has established itself as the most popular server-side language. Here at BitsWits we cover a wide range of core PHP developments from simple scripts to complex, corporate systems.
                    </p>
                    <Row>
                        <Col sm={6}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Core PHP
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Larvel
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Zend
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    ROR
                                </li>
                            </ul>
                        </Col>
                        <Col sm={6}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Cake PHP
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    YII
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Codeigniter
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Opencart
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
                        .Net
                    </h5>
                    <p>
                        Here at BitsWits our goals are to deliver work that exceeds our client’s satisfaction. With the strength of our core values and our vast array of skills, we promise to deliver the ultimate web applications and services.
                    </p>
                    <Row>
                        <Col sm={6}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    ASP.NET
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    C#
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Umbraco
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    DNN
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
                        CRM
                    </h5>
                    <p>
                        As far as CRM (Customer Relationship Management) systems go, here at BitsWits our professionals have extensive industry experience when it comes to developing CRM solutions.
                    </p>
                    <Row>
                        <Col>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    MS Dynamics CRM
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Salesforce
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Sharepoint
                                </li>
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
                        CMS
                    </h5>
                    <p>
                        Drupal, Wordpress and Joomla are the CMS (Content Management System) trusted by millions around the globe. It comes with impressive features like extendibility from a huge range of plugins, Content Management, and Front end Editing
                    </p>
                    <Row>
                        <Col sm={6}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Drupal
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Joomla
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Wordpress
                                </li>
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
                        e-Commerce Solution
                    </h5>
                    <p>
                        With rich, dynamic and customer oriented e-Commerce, BitsWits is in a strong position to assist business efficiently. Helping our clients achieve business growth through the medium of our services is what keeps us motivated.
                    </p>
                    <Row>
                        <Col sm={6}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Magento
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Shopify
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Prestashop
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    NopCommerce
                                </li>
                            </ul>
                        </Col>
                        <Col sm={6}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Magento 2
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    WooCommerce
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    BigCommerce
                                </li>
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
                        Full Stack Technology
                    </h5>
                    <p>
                        With our skills and expertise we can make the application and its functionality more efficient with our improved design architecture.
                    </p>
                    <Row>
                        <Col sm={6}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Angulur JS
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Node JS
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Mean Stack
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    MongoDB
                                </li>
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
                        Mobile App Development
                    </h5>
                    <p>
                        Mobile apps are reigning supreme and for a business to make the right impression on the clients it is most important to get it made by experienced mobile app developers.
                    </p>
                    <Row>
                        <Col sm={6}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Android
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    iOS
                                </li>
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
                        Games Development
                    </h5>
                    <p>
                        No matter what the target age group, we have a genre to suit all tastes. From short, quick fire games, through to fully immersive 3D games and Virtual Reality (VR) environments we can provide it all!
                    </p>
                    <Row>
                        <Col sm={6}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Unity 3D
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </>

    // MyReason component data

    const reSubtile = <h2 className='font50 black fontf font-bold line60 black'>Here are <span className='grdiant'>six key reasons</span> why
        UK agencies choose to partner with us</h2>

    const resCards = <>
        <Row className={`${reStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #1
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        Competitive rates
                    </h5>
                    <p>
                        Even though our service is a cut above the rest, we remain competitively priced. Our developer rates start from as little as <strong>£15/hr</strong>
                    </p>
                    <p>
                        Agencies who work with us enjoy making more profit per client and have a higher throughput of projects.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #2
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        Quality
                    </h5>
                    <p>
                        We are CMMI level 3 appraised and members of the Agile Alliance, which is your assurance that we have processes and safeguards in place to ensure the delivery of a high quality finished product, each and every time.
                    </p>
                    <p>
                        Read more about our <strong>CMMI appraisal</strong>.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #3
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        Flexibility
                    </h5>
                    <p>
                        Our massive permanent workforce is comprised of designers, developers and PMs. You can hire as many or as few of them as you need - on a per project or retained basis.
                    </p>
                    <p>
                        This flexibility means that you’re never paying for skills and time that you’re not using.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #4
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        In-house expertise
                    </h5>
                    <p>
                        Every one of our <strong>1,000+</strong> designers, developers and project managers in the UK, India and Worldwide are directly employed by us, and they work in offices that are owned by us.
                    </p>
                    <p>
                        This enables us to ensure continuity of knowledge and in fact, many of our team members have been working with the same clients for years - maintaining consistently high quality, reliability and efficiency at all times.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #5
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        Security & confidentiality
                    </h5>
                    <p>
                        Your contract of engagement is with our UK company (DotSquares Ltd), so our liability to you is governed and protected by UK law.
                    </p>
                    <p>
                        This is a very important detail that sets us apart from many offshoring companies. Furthermore, all Intellectual Property Rights & source code are yours, forever.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #6
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        The original, and best
                    </h5>
                    <p>
                        We’ve been servicing UK businesses like yours with offshore teams for <strong>21 years</strong>. In fact, we were one of the first companies to set up this offshore business model, back in 2002. Since then we’ve completed over <strong>20,000 projects</strong> (at last count, and we are still growing!) Our scalability provides you with the best talent backed up by guarantees and consumer protection, whilst our attention to detail, perfectionism and personal service still makes every customer feel very special indeed.
                    </p>
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
