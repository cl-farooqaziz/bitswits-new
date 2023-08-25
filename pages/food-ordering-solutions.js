import Head from 'next/head'
import React, { useState, useEffect } from 'react'; import Link from 'next/link';
import banImg from '../public/images/banner/webBanner.png'
import foldimg from '../public/images/services/webSwipe.svg'
import foldensure from '../public/images/services/webEnsure.svg'
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
import aheadimage from '../public/images/services/webAhead.svg'
import Image from 'next/image';
import mobilearrow from '../public/images/icons/mobile-arrow.png'


import { Row, Col } from 'react-bootstrap'
import WhyBuild from '@/components/WhyBuild';
import whyStyles from '@/styles/whyServices.module.css'


//Why Icon
import icon24 from '../public/images/successfully/1.jpg'
import icon25 from '../public/images/successfully/2.jpg'
import icon26 from '../public/images/successfully/3.jpg'
import icon27 from '../public/images/successfully/4.jpg'
import icon28 from '../public/images/successfully/5.jpg'
import icon29 from '../public/images/successfully/6.jpg'
import icon30 from '../public/images/successfully/7.jpg'
import icon31 from '../public/images/successfully/8.jpg'

import icon32 from '../public/images/successfully/9.jpg'
import icon33 from '../public/images/successfully/10.jpg'
import icon34 from '../public/images/successfully/11.jpg'
import icon35 from '../public/images/successfully/12.jpg'
import icon36 from '../public/images/successfully/13.jpg'
import icon37 from '../public/images/successfully/14.jpg'
import icon38 from '../public/images/successfully/15.jpg'
import icon39 from '../public/images/successfully/16.jpg'

//
import CrmExamples from '@/components/CrmExamples';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../public/images/ourfood/1.png'
import slide2 from '../public/images/ourfood/2.png'
import slide3 from '../public/images/ourfood/3.jpg'
import slide4 from '../public/images/ourfood/4.jpg'
import slide5 from '../public/images/ourfood/5.jpg'
import slide6 from '../public/images/ourfood/6.jpg'

import exmplstyles from '@/styles/CrmExamples.module.css'


export default function foodorderingsolutions() {

    var crmExamples = {
        dots: false,
        arrows: true,
        autoplay: true,
        speed: 3000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>The Best Design and <br /><span className='grdiant'> FOOD ORDERING SOLUTIONS </span> Company!</h1>

    const para = <ul className='p-0'>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Integrated reservation systems
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            POS integration
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Business management
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Stock control
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Management reporting
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Single & multi-restaurant solutions
        </li>
    </ul>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We've been providing tailored, robust solutions to the food & drink industry since <strong>2002</strong>. Whatever your requirements, we've got you covered get in touch with us today to start talking about your requirements.</p> </>


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



    // Swipe component data



    // Swipe component data


    const whytitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>“Our Solutions”!</h2>

    const text = <p className='center'>Some of our successfully implemented food solutions are</p>



    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Front Website
                    </h5>
                    <p>
                    First Things First - we code and design the forefront of your website
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Customer App
                    </h5>
                    <p>
                    Apps are more appealing for the customer as they can access it with ease.
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Merchant App
                    </h5>
                    <p>
                    We create cloud based mobile point-of-sale (mPOS) for Merchants and individuals
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    POS Integration
                    </h5>
                    <p>
                    Integrating a system to let customers pay by card and get a receipt
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Social Media Integration

                    </h5>
                    <p>
                    Planning, promoting and marketing products at all stages of the development lifecycle.
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Branch Management
                    </h5>
                    <p>
                    With our management solutions, you can manage employees and branch information
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Category Management
                    </h5>
                    <p>
                    Creating sections or categories for your products, making shopping more efficient
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Product Management
                    </h5>
                    <p>
                    Managing the products efficiently to earn best results to your business
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon32} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Discount & Coupon
Management

                    </h5>
                    <p>
                    You can manage discounts and coupons for your business convenience
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon33} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Order Management
                    </h5>
                    <p>
                    We can develop codes to streamline the management of the order process
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon34} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Payment Gateway Integration
                    </h5>
                    <p>
                    Let your customers choose how they wish to pay with our flawless systems.
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon35} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Content Management
                    </h5>
                    <p>
                    You can successfully and easily manage the content within your solution from a CMS.
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon36} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Database Management

                    </h5>
                    <p>
                    You can safely manage all your important data within your business
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon37} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Customer Management
                    </h5>
                    <p>
                    Successfully manage all details from current, new and old clientele to better your business
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon38} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Sales Report
                    </h5>
                    <p>
                    Generate sales reports for your business to calculate the sales conducted over a period of time
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon39} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Customisation
                    </h5>
                    <p>
                    We can customise and tailor make any solutions specifically for your business needs.
                    </p>

                </div>
            </Col>

        </Row>

    </>



    // Exmple component data


    const exmplTitle = <> <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>Food & Drink solutions</span>
    </h2> </>

    const exmplSlider = <>
        <Slider {...crmExamples} className={` ${exmplstyles.crmSlider}  crmSlider`}>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Bali Brasserie Restaurants</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide1} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>My Coffee Shop - Admin</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide2} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>My Coffee Shop</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide2} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Formisano Bakery</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide3} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Emma Boutique Gourmande</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide4} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Eat Out Spain </div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide5} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Super Van 247 </div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide6} className="img-fluid" />
                </div>
            </div>
            
        </Slider>
    </>

    const exmplText = <> Let's talk about your Food & Drink requirements </>







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


            {/* <Swipe
                foldimg={foldimg}
                title='We Design Engaging Mobile Apps your users will swipe through from start to finish'
                para='Our goal with each new mobile app design is to keep users engaged and drive higher completion rates. We use data and user research to create intuitive interfaces that drive actions and we follow the latest design trends to ensure your mobile app is visually appealing.'
                subtitle='High Performance User Experience'
                subpara='In our design lab performance always comes first. We ensure that your mobile app is effective and engaging.'
                subtitle2='Swipe that Convert'
                subpara2='In our design lab performance always comes first. We ensure that your mobile app is effective and engaging.'

            /> */}



            {/* <Ahead
                title='Our Mobile App Research Data that puts you ahead of others'
                para='We conduct user research with real people to provide valuable insights that help our clients stay ahead of their competitors. We use various creative methods to gather data and inform product decisions based on the needs and wants of the target audience.'
                subtitle='Laser Focused User Research'
                subpara='We remain laser focused on your target audience to best meet their needs and requirements.'
                subtitle2='Competitive Advantage'
                subpara2='Our research process gives you a competitive advantage and up-to-date market insights.'
                ahead={aheadimage}

            /> */}



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
                text={text}
                cards={WhyBuilds}
                subtitle={whytitle}
            />

            <CrmExamples
                title={exmplTitle}
                slider={exmplSlider}
                text={exmplText}
            />




            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
