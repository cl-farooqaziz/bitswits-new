import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import expStyles from '@/styles/MyExpertise.module.css'
import reStyles from '@/styles/MyReason.module.css'
import whyStyles from '@/styles/whyServices.module.css'
import servStyles from '@/styles/PhpServices.module.css'
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
import aheadimage from '../public/images/services/webAhead.svg'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import PhpServices from '@/components/PhpServices';
import MyExpertise from '@/components/MyExpertise';
import MyReason from '@/components/MyReason';
import WhyBuild from '@/components/WhyBuild';
//images
import banImg from '../public/images/banner/webBanner.png'
import foldimg from '../public/images/services/webSwipe.svg'
import foldensure from '../public/images/services/webEnsure.svg'
//
import icon16 from '../public/images/phpdev/phpdev-tec1.png'
import icon17 from '../public/images/phpdev/phpdev-tec2.png'
import icon18 from '../public/images/phpdev/phpdev-tec3.png'
import icon19 from '../public/images/phpdev/phpdev-tec4.png'
import icon20 from '../public/images/phpdev/phpdev-tec5.png'
import icon21 from '../public/images/phpdev/phpdev-tec6.png'
import icon22 from '../public/images/phpdev/phpdev-tec7.png'
import icon23 from '../public/images/phpdev/phpdev-tec8.png'
import grnArrow from '../public/images/wbd-icons/arrow-green.png'
//Why Icon
import icon24 from '../public/images/phpdev/phpdev-icon1.png'
import icon25 from '../public/images/phpdev/phpdev-icon2.png'
import icon26 from '../public/images/phpdev/phpdev-icon3.png'
import icon27 from '../public/images/phpdev/phpdev-icon4.png'
import icon28 from '../public/images/phpdev/phpdev-icon5.png'
import icon29 from '../public/images/phpdev/phpdev-icon6.png'
import icon30 from '../public/images/phpdev/phpdev-icon7.png'
import icon31 from '../public/images/phpdev/phpdev-icon8.png'
import icon32 from '../public/images/phpdev/phpdev-icon9.png'


export default function phpdevelopment() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>


        Develop Quality Websites With Our <span className='grdiant font-bold'>Top PHP Development Company</span>

    </h1>

    const para = <>

        <ul className='p-0'>


            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>PHP Artisans: Expertise in Core PHP, Laravel, CodeIgniter, and more.  </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Smooth Integration and Diverse Platforms Through REST APIs and Web Services. </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Cost-Effective Custom Solutions. </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>21 Years of Excellence: Delivered 10000+ Successful PHP Websites and Apps for 480+ Clients. </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Precision Delivery with our CMMI Level 3 Processes. </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Full Spectrum Services: End-to-End PHP Development, Design, QA, Maintenance, and More.  </li>



        </ul>
    </>


    const infopara = <> <p className='black fontf font-medium line30 mt-5'>

        Let's talk about utilizing PHP's flexibility to realize your most audacious online concepts!

    </p> </>


    // coverage component data


    // const subtile = <h2 className='font50 black fontf font-bold line60 black'>Our <span className='grdiant'>Mobile App</span> Services</h2>

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



    // MyExpertise component data

    const expsubtile = <h2 className='font50 black fontf font-bold line60 black'>Introducing PHP Technologies: The Driving Force of Our <span className='grdiant font-bold'>PHP Development Company</span> </h2>

    const expCards = <>
        <Row className={`${expStyles.soluRow} ${expStyles.phpdev} mt-5`}>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon16} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Fuel PHP
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>



                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />PHP web framework based on HMVC  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Modular design with reusable libraries  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Active record implementation  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Strong security features for authentication  </li>


                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.mblR}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon17} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Cake PHP
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>



                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Opensource web framework for PHP  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Built on MVC pattern  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Code generation capabilities and scaffolding   </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Security, authentication, and internationalization features   </li>



                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBR} ${expStyles.mblM}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon18} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Phalcon
                    </h5>
                    <Row>
                        <Col>
                            <ul className='p-0 m-0'>


                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />C-extension for PHP  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />High performance and less consumption of resources  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Can handle high traffic web apps easily  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />MVC, ORM, Caching, and other features   </li>

                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.mblR}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon19} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Yii Development
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>



                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />High performance PHP framework  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Uses MVC, DAO, and Active Record patterns  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Allows procedural and object-oriented programming  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Integrated libraries  </li>




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
                        Laravel
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>


                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Open Source PHP framework for building web apps </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Model View Controller (MVC) design pattern </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Routing </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Templating and caching </li>



                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBR} ${expStyles.mblR}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon21} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Zend Framework
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>




                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />PHP and object-oriented programming practices </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Modular design </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Integrates features like MVC, ORM, Authentication, etc.  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Perfect for enterprise level and API-first development </li>



                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBB} ${expStyles.mblBr}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon22} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        October CMS
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>



                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Content management system based on Laravel </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Modular system with plugin extensions </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Frontend framework uses HTML, CSS, JavaScript and Vue.js </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Tools for managing users, permission, and SEO.  </li>



                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBB} ${expStyles.soluCardBR} ${expStyles.mblR}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon23} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        CodeIgniter
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>



                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Lightweight open source PHP framework </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Simple syntax and minimal configuration required </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Perfect for small websites and apps </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Provide libraries for web projects </li>


                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </>


    // Build component data

    const whytitle = <h2 className='font50 black fontf font-bold line60 black text-center mb-3'>How Our
        <span className='grdiant'> PHP Developers</span> Can Help You?</h2>

    const whytext = <p className='black font16 fontf font-medium text-center'>Our aim is to match one of our PHP experts to suit your requirements, whether you are a start-up business looking for your first website, selling your goods or services online or have a larger bespoke project.</p>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Create Reliable Websites
                    </h5>
                    <p>
                    <span className='grdiant font-bold'>PHP developers</span> can create safe, high-performing websites that are flexible and fast.
                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardJstCntr}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Make Intuitive Web Applications
                    </h5>
                    <p>
                    Our <sapn className='grdiant font-bold'>PHP developers</sapn> build intuitive and engaging web applications with rich functionality using PHP frameworks.
                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardJstCntr} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Development of API
                    </h5>
                    <p>
                    For various channels and devices, <span className='grdiant font-bold'>PHP developers</span> can create well-documented REST and SOAP APIs.
                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardJstCntr}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Services for Custom CMS
                    </h5>
                    <p>
                    <span className='grdiant font-bold'>PHP developers</span> at BitsWits develop unique CMS solutions based on the demands and specifications of your particular organization.
                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardJstCntr}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Platforms for eCommerce
                    </h5>
                    <p>
                   <span className='grdiant font-bold'> PHP developers</span> create e-commerce platforms with features like payment gateways and shopping carts that are optimized for sales.
                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardJstCntr} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Food Delivery Services
                    </h5>
                    <p>
                    At BitsWits, we create online meal ordering platforms with features for menu browsing, order customization, delivery window selection, etc.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardJstCntr} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Systems for Logistics Management
                    </h5>
                    <p>
                    Solutions for logistics management can be made by <span className='grdiant font-bold'>PHP developers</span> and programmers to handle inventory, shipping, tracking, and other tasks.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardJstCntr} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    CRM Programs
                    </h5>
                    <p>
                    Our <span className='grdiant font-bold'>PHP developers</span> build perfect customer relationship management systems to manage contacts, track interactions, and gain trust.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardJstCntr} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon32} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Debugging and Testing
                    </h5>
                    <p>
                    BitsWits has the best <span className='grdiant font-bold'>PHP developers</span> who extensively check for bugs in your PHP solutions and resolve any errors that occur.
                    </p>
                </div>
            </Col>
        </Row>

    </>


    // MyReason component data

    const reSubtile = <h2 className='font50 black fontf font-bold line60 black'>

        The <span className='grdiant font-bold'>Best PHP Developers</span> and Innovators Leading the Way: Why Choose BitsWits?

    </h2>

    const resCards = <>
        <Row className={`${reStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #1
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        Innovative Technical Talents
                    </h5>
                    <p>
                        BitsWits creates high-performing, flexible solutions to address complicated demands with expertise in the most recent PHP versions and frameworks like Laravel and Symfony. They stand out due to their growth abilities and finest practices.
                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #2
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        Outstanding PHP Developers and Talents
                    </h5>
                    <p>
                        Some of the top <span className='grdiant font-bold'>PHP developers</span> can be found at BitsWits, and they frequently receive home awards from reputable websites. Our skilled talent delivers the highest quality <span className='grdiant font-bold'>PHP development services</span> and excellence in every project.
                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #3
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        Future-Oriented Tactics
                    </h5>
                    <p>

                        BitsWits uses <span className='grdiant font-bold'>PHP development services</span> and strategies that are future-oriented. They craft forward-compatible code while monitoring upcoming PHP trends. By doing this, solutions created today can adapt to the future.

                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #4
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                    Client-Centered Culture
                    </h5>
                    <p>
                    The customer is at the core of everything BitsWits does. Our <span className='grdiant font-bold'>PHP developers</span> collaborate closely with customers during the development process to fully comprehend demands and provide specialized solutions.
                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #5
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                    Continuous and Agile Methodology
                    </h5>
                    <p>
                    For <span className='grdiant font-bold'>PHP development services</span> and applications, BitsWits employs agile approaches. They operate in sprints, regularly evaluating and enhancing solutions in response to input. This makes it possible to respond quickly to shifting needs.
                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #6
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                    Excellent Code Quality
                    </h5>
                    <p>
                    BitsWits regularly produces secure, high-quality code that complies with industry requirements due to effective QA procedures. Their products are designed for effectiveness, scalability, and efficiency.
                    </p>
                </div>
            </Col>
        </Row>
    </>


    // Services component data

    const ourServcs = <>
        <Container>
            <Row className='justify-content-between align-items-center'>
                <Col lg={4}>
                    <div className={servStyles.left}>
                        <h2 className='font30 black fontf font-bold line40 black mb-4'>

                            Our PHP Experts Provide Top <span className='grdiant font-bold'>PHP Web Development Services</span>

                        </h2>
                        <p className='black font14 fontf font-medium'>
                            Our team of professional <span className='grdiant font-bold'>PHP developers</span> has all the expertise needed to make a stunning website for you. Through our core PHP expertise and specialization in Laravel, Symfony, and CodeIgniter, we design high-quality performing websites customized according to your specific requirements. Let our expert <span className='grdiant font-bold'>PHP developers</span> save you from the website hassles!
                        </p>
                    </div>
                </Col>
                <Col lg={7} className={servStyles.secondHalf}>
                    <div className={servStyles.servicesBox}>
                        <h3 className={servStyles.servicesTtl}>
                            Custom PHP Development
                        </h3>
                        <div className={servStyles.serviceDetails}>
                            <p className={`${servStyles.subtitle} black font14 fontf font-medium mb-0`}>
                                Custom PHP Development
                            </p>
                            <p className='black font13 fontf font-medium mb-0'>
                                By combining basic PHP with frameworks like Laravel, Symfony, Yii, and CodeIgniter, our <span className='grdiant font-bold'>PHP developers</span> create high-performing, customized <span className='grdiant font-bold'>PHP development services</span> . From basic websites to advanced web apps, we have built all.
                            </p>
                        </div>
                    </div>
                    <div className={servStyles.servicesBox}>
                        <h3 className={servStyles.servicesTtl}>
                            PHP E-Commerce Services and Solutions


                        </h3>
                        <div className={servStyles.serviceDetails}>
                            <p className={`${servStyles.subtitle} black font14 fontf font-medium mb-0`}>
                                PHP E-Commerce Services and Solutions


                            </p>
                            <p className='black font13 fontf font-medium mb-0'>
                                Are you considering an online sale? Our PHP experts create feature-rich e-commerce websites and apps specifically according to your needs. We can help skyrocket your online sales!
                            </p>
                        </div>
                    </div>
                    <div className={servStyles.servicesBox}>
                        <h3 className={servStyles.servicesTtl}>
                            Design of PHP Websites
                        </h3>
                        <div className={servStyles.serviceDetails}>
                            <p className={`${servStyles.subtitle} black font14 fontf font-medium mb-0`}>
                                Design of PHP Websites
                            </p>
                            <p className='black font13 fontf font-medium mb-0'>
                                Our experts create PHP websites that thrill users, from beautiful UI/UX design to deep interactivity. We combine excellent graphics, easy navigation, interesting information, and simple functionality.
                            </p>
                        </div>
                    </div>
                    <div className={servStyles.servicesBox}>
                        <h3 className={servStyles.servicesTtl}>
                            Application Integration Using PHP
                        </h3>
                        <div className={servStyles.serviceDetails}>
                            <p className={`${servStyles.subtitle} black font14 fontf font-medium mb-0`}>
                                Application Integration Using PHP
                            </p>
                            <p className='black font13 fontf font-medium mb-0'>
                                Our experts are skilled in integrating PHP applications with external systems and APIs. Through web services, REST APIs, SOAP, and skilled optimization, our <span className='grdiant font-bold'>PHP developers</span> connect with numerous diverse systems.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>



    return (
        <>
            <Head>
                <title>The Best PHP Development Company - BitsWits</title>
                <meta name="description" content="Our leading PHP development company develops your idea from conception to completion. Our PHP developers ensure developing dynamic websites" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <Banner
                title={heading}
                para={para}
                bannerimg={banImg}
                infopara={infopara}
            />

            {/* <Coverage
                title="Coverage"
                subtitle={subtile}
                mobile={mobile}
                user={user}
                ux={ux}
            /> */}

            <PhpServices
                servcs={ourServcs}
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
                title="Technologies"
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

            <WhyBuild
                title="Why Build"
                text={whytext}
                cards={WhyBuilds}
                subtitle={whytitle}
            />

            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
