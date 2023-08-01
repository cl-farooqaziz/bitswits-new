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
import MarketingExpertise from '@/components/MarketingExpertise';
import dataStyles from '@/styles/Marketingexpertise.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import mobilearrow1 from '../public/images/Include/star.jpg'

import Milestones from '@/components/Milestones';
import milestones1 from '../public/images/methodology/1.jpg'
import milestones2 from '../public/images/methodology/2.jpg'
import milestones3 from '../public/images/methodology/3.jpg'
import milestones4 from '../public/images/methodology/4.jpg'
import milestones5 from '../public/images/methodology/5.jpg'





export default function ticketbookingsolutions() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>The Best Design and <br /><span className='grdiant'> TICKET BOOKING SOLUTIONS </span> Company!</h1>

    const para = <ul className='p-0'>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Bulk Ticket Booking
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Server Management
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Widgets Implementation
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Find and Book Tickets
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Single Track System
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Online Printing Tool
        </li>
    </ul>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We have developed many solutions in the rail ticket booking niche, including for customers such as Eurostar and SNCF. Contact us today to discover what we can do for you...</p> </>

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


    const data =
        <>

            <section className={dataStyles.marketingExpertise}>
                <Container>
                    <Row>
                        <Col>
                            <h3 className='center font-bold mb-5'>Rail ticket booking system features</h3>


                            <ul className={dataStyles.mservice}>
                                <li> <Image src={mobilearrow1} alt="bitswits" />  Website Designing with New graphics </li>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> Strong Back-end to manage the huge business  </li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />  Single Track System for all the divisions </li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />  Find and book tickets</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> Management of Multiple Passes </li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />   Widget for Rail ticket Integration</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />  A Single environment for different websites (CMS)</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />  Management of payment gateways by the admin</li>

                                <li> <Image src={mobilearrow1} alt="bitswits" />  Online Printing Tool</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />  Server Management</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />  Bulk ticket booking for corporate sector</li>

                            </ul>
                        </Col>
                    </Row>
                </Container>

            </section>

        </>



    const value =
        <>
            <Container>
                <Row>
                    <Col xl={12}>
                        <h3 className='center font-bold mb-5'>Our Development Methodology</h3>
                       
                    </Col>
                </Row>
                <Row className=''>
                    <Col xl={4} className='borderbottom '>
                        <div className=' pt-5 pb-5'>
                            <Image src={milestones1} className='img-fluid mb-4' />
                            <h3 className='font20 mb-3 font-semibold'>Evaluation and Monitoring </h3>
                            <p className=''>These determine KPIs,reports and other metrics, per suer, in order to monitor that the process is working as agreed</p>
                        </div>
                    </Col>
                    <Col xl={4} className='mongo borderbottom'>
                        <div className=' pt-5 pb-5'>
                            <Image src={milestones2} className='img-fluid mb-4' />
                            <h3 className='font20 mb-3 font-semibold'>Application,construction and
implementation</h3>
                            <p className=''>Weekly delivery of developments for the end user to operate and request for changes, it isIDEAL that the end user is part ofthe process of development and testing</p>
                        </div>

                    </Col>
                    <Col xl={4} className='mongo borderbottom'>
                        <div className=' pt-5 pb-5'>
                            <Image src={milestones3} className='img-fluid mb-4' />
                            <h3 className='font20 mb-3 font-semibold'>Evaluation of processes and current
structure of the company </h3>
                            <p className=''>Mapping processes to determine the starting pointand the Actual State</p>
                        </div>
                    </Col>
                    <Col xl={4} >
                        <div className=' pt-5 pb-5'>
                            <Image src={milestones4} className='img-fluid mb-4' />
                            <h3 className='font20 mb-3 font-semibold'>Suggestions for improvement and
process optimization </h3>
                            <p className=''>Optimize a process with a right combination of technologies</p>
                        </div>
                    </Col>
                    <Col xl={4} className='mongo'>
                        <div className=' pt-5 pb-5'>
                            <Image src={milestones5} className='img-fluid mb-4' />
                            <h3 className='font20 mb-3 font-semibold'>Application design together with
the client </h3>
                            <p className=''>We choose technologies and review options with the client. The client is part of the project from the very beginning and feedback is VITAL</p>
                        </div>
                    </Col>
                    
                </Row>
            </Container>

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




            <Milestones
                value={value}
            />

            <MarketingExpertise
                data={data}

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
                title='We Design Engaging Mobile Apps your users will swipe through from start to finish'
                para='Our goal with each new mobile app design is to keep users engaged and drive higher completion rates. We use data and user research to create intuitive interfaces that drive actions and we follow the latest design trends to ensure your mobile app is visually appealing.'
                subtitle='High Performance User Experience'
                subpara='In our design lab performance always comes first. We ensure that your mobile app is effective and engaging.'
                subtitle2='Swipe that Convert'
                subpara2='In our design lab performance always comes first. We ensure that your mobile app is effective and engaging.'

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

            /> */}


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
