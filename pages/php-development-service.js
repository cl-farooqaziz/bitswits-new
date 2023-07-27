import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap'
import expStyles from '@/styles/MyExpertise.module.css'
import styles from '@/styles/Coverage.module.css'
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



export default function phpdevelopment() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>The Best Design and <br /><span className='grdiant'> Php Development </span> Company!</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image> Expertise in different PHP based frameworks (CorePHP, CakePHP, Zend, Laravel). </li>
            <li className="font16 fontf font-medium mt-1 black mb-2"> <Image src={mobilearrow} className='img-fluid multi'></Image> Hassle-Free Integration on multiple platforms</li>
            <li className="font16 fontf font-medium mt-1 black mb-2"> <Image src={mobilearrow} className='img-fluid multi'></Image> Leverage PHP’s open-source capabilities for Custom Php Development</li>
            <li className="font16 fontf font-medium mt-1 black mb-2"> <Image src={mobilearrow} className='img-fluid multi'></Image> CMMI DEV/3 appraised ensuring accurate and on-time delivery.</li>

        </ul>
    </>


    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We’ve delivered more than <b >10000+</b> websites to <b>450+</b> clients in the last <b>21</b> years. What can we do for you?</p> </>


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

    const expsubtile = <h2 className='font50 black fontf font-bold line60 black'>PHP Technologies</h2>

    const expCards = <>
        <Row className={`${expStyles.soluRow} ${expStyles.phpdev} mt-5`}>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon16} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        Magento Development
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Easy Product Search
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Simpler Payment Gateways

                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Social Media Connectivity
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Easy Shopping Module
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Magento Multivendor Solutions
                                </li>
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
                        CakePHP Development
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Offers support for PHP 4 & 5
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Helpful to decrease project development cost
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Rapid development and time saving features
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Flexible and stable development standards
                                </li>
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
                        Drupal Development
                    </h5>
                    <Row>
                        <Col>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Drupal migration
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Drupal SEO
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Drupal Module Development
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Drupal Theming
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Drupal Hosting
                                </li>
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
                        YII Development
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Retail Management System
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Inventory Management
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Retail Management System
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Logistics And Distribution Management System
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Enterprise Content Management System
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
                        Laravel Development
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Web Application Development
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Extension Development
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Customisation and Integration
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    e-Commerce Development
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Website Migration Services
                                </li>
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
                        Zend Development
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Web & Application Development
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Zend integration services
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Zend customisation services
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Build and Deploy Zend Apps
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Payment Gateways Integration
                                </li>
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
                        Wordpress Development
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    WordPress Website Development
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Open Source CMS Development
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    WordPress Blog Development
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    WordPress Blog Theme Design and Development
                                </li>
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
                        Joomla Development
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Content Management System
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Blog Creation
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    JomSocial for Community Building
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Use Virtual Mart and Hikashop for e-commerce Site
                                </li>
                            </ul>
                        </Col>
                    </Row>
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

            {/* <Coverage
                title="Coverage"
                subtitle={subtile}
                mobile={mobile}
                user={user}
                ux={ux}
            /> */}

            <PhpServices />

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

            <Ahead
                title='Our Mobile App Research Data that puts you ahead of others'
                para='We conduct user research with real people to provide valuable insights that help our clients stay ahead of their competitors. We use various creative methods to gather data and inform product decisions based on the needs and wants of the target audience.'
                subtitle='Laser Focused User Research'
                subpara='We remain laser focused on your target audience to best meet their needs and requirements.'
                subtitle2='Competitive Advantage'
                subpara2='Our research process gives you a competitive advantage and up-to-date market insights.'
                ahead={aheadimage}

            />



            <Ensure
                foldimg={foldensure}
                title='We Test and Optimize your mobile app to ensure best user experience'
                para='We aim to optimize your mobile app experience for better end results. Our team continuously looks for improvement opportunities and tests new features through A/B optimization.'
                subtitle='Constant Innovation'
                subpara='In our design Our primary focus is increasing the end result and making sure the site brings revenue to your business.'
                subtitle2=' Active On-Going Support'
                subpara2='We only rely on real evidence-based improvements that drives conversion rates.'
            />



            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
