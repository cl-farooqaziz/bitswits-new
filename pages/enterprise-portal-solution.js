import Head from 'next/head'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import markstyles from '@/styles/Marketingexpertise.module.css'
import whyStyles from '@/styles/whyServices.module.css'
import portstyles from '@/styles/Portal.module.css'
//components
import Banner from '@/components/ServicesBanner'
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import MarketingExpertise from '@/components/MarketingExpertise';
import WhyBuild from '@/components/WhyBuild';
import Portal from '@/components/Portal';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import mobilearrow2 from '../public/images/Include/star.jpg'
//
import icon22 from '../public/images/etpSolutions/etp-icon1.png'
import icon23 from '../public/images/etpSolutions/etp-icon2.png'
import icon24 from '../public/images/etpSolutions/etp-icon3.png'
import icon25 from '../public/images/etpSolutions/etp-icon4.png'
import icon26 from '../public/images/etpSolutions/etp-icon5.png'
import icon27 from '../public/images/etpSolutions/etp-icon6.png'
import icon28 from '../public/images/etpSolutions/etp-icon7.png'
import icon29 from '../public/images/etpSolutions/etp-icon8.png'
//
import sevcImg from '../public/images/etpSolutions/serviceimg.png'


export default function ecommerencedevelopment() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>The Best Design and <br /><span className='grdiant'>ENTERPRISE PORTAL SOLUTION </span> Company!</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image> Strategy Assessment And Consulting </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image> User Interface Design And USablity </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image> End-To-End Portal Application Programming </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image> Integration With Third Party Web Services </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image> Integration With Legacy Business Applications </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image> Quality Assurance And Complete Testing </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image> Portal Setup And Maintenance Support </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image> Poratl Upgrades And New Features Enhancements </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'> We’ve delivered more than <b>80+</b> Enterprisen Portal solutions to <b>50+</b> clients in the last <b>21 years</b> . </p> </>



    // Build component data

    const whytitle = <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>We Let Our Business Values Look After Our Quality Of Work</h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon22} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Effective Resource Utilization
                        </h5>
                        <p>
                            Developing effective management skills to deal with certain challenges and problems of every organization is the urgent need of many businesses and organizations in the global competitive environment, which continues the changing of technology and environment.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon23} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Smarter, Simpler, Efficient And Well-Coordinated Processes
                        </h5>
                        <p>
                            The larger the enterprise, the more challenges there are. Therefore, to implement large scale tools that help enterprises in bringing different processes, people and data on one platform, enterprise solutions are developed.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon24} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Easy Access To Data, Even From Different Locations
                        </h5>
                        <p>
                            One of the biggest challenges that companies with multiple locations face is sharing data from one part of the company with another. Even when all portions of the company want to share, it’s often hard to figure out the best way to do so. Enterprise portal solutions ease this problem beautifully.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon25} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Streamlinied Content Storage
                        </h5>
                        <p>
                            Keeping your content in order is not everything – the content is useful only when it is available, accessible, searchable and timely updated. ECMs store the current state of your company content management and streamline the processes that were slow and heavy previously.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon26} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Real Time Data Analysis
                        </h5>
                        <p>
                            Real-time, accurate data is available within an ERP solution.Information that is needed to make important decisions can be accessed at anytime from one system and the data is updated and stored in real time.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon27} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Enhanced Customer Relationship
                        </h5>
                        <p>
                            ECM systems can be successfully integrated into any business, like in the case of financial services, public sector, media and entertainment, manufacturing and utilities, healthcare, education, e-commerce, services and transport- at Team In India, we provide you these enterprise portal solution developments.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon28} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Reduced Cost
                        </h5>
                        <p>
                            ERP solutions for manufacturing are being built with speed and productivity as the focus. And that unquestionably means that employing such a system at your company will build the benefits of cost reduction and streamlined operations.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon29} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Increased Business Revenue
                        </h5>
                        <p>
                            A business Intelligence system produces detailed analysis that can benefit every company. The tools can track performance, identify hidden trends and strategic information – providing powerful analytics to highlight the right data for business decisions, affecting growth and success.
                        </p>
                    </div>
                </div>
            </Col>
        </Row>

    </>


    // Portal component data

    const portSec = <>
        <Container>
            <Row className={portstyles.portRow}>
                <Col lg={6} className='mx-auto'>
                    <Image src={sevcImg} alt='BitsWits' className='img-fluid' />
                </Col>
                <Col lg={6} className='mx-auto'>
                    <h3 className='font-bold mb-3'>Enterprise Portal Development Services</h3>
                    <ul>
                        <li>Social Networks and Communities</li>
                        <li>Content Distribution Portals (Digital Docs and Media)</li>
                        <li>B2C and B2B Ecommerce Portals</li>
                        <li>Enterprise Information Portals</li>
                        <li>Business Intelligence Portals</li>
                        <li>Sales Management Solution</li>
                        <li>Production Management Solutions</li>
                        <li>Supply Chain Management</li>
                        <li>Customer Relation Management</li>
                        <li>Human Capital Management</li>
                        <li>Finance Management Solutions</li>
                        <li>Service Management Solutions</li>
                        <li>Project Management Solutions</li>
                        <li>Knowledge Management Portals</li>
                        <li>Application/Web Services Portals</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </>


    // Benefits component data

    const smmExperties = <>
        <Container className='mb-5'>
            <Row>
                <Col>
                    <h3 className='center font-bold mb-5'>Our Benefits</h3>
                    <ul className={markstyles.mservice}>
                        <li><Image src={mobilearrow2} alt="bitswits" />Certified Web developers</li>
                        <li><Image src={mobilearrow2} alt="bitswits" />Strict NDA Terms</li>
                        <li><Image src={mobilearrow2} alt="bitswits" /> Flexible Hiring Models</li>
                        <li><Image src={mobilearrow2} alt="bitswits" /> Source Code Authorization</li>
                        <li><Image src={mobilearrow2} alt="bitswits" />24*7 Technical Support</li>
                        <li><Image src={mobilearrow2} alt="bitswits" />Transparent Process</li>
                        <li><Image src={mobilearrow2} alt="bitswits" />Ready-to-use Infrastructure</li>
                        <li><Image src={mobilearrow2} alt="bitswits" />Flexible timings</li>
                    </ul>
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
                bannerimg={banImg}
                infopara={infopara}
            />

           
            <WhyBuild
                cards={WhyBuilds}
                subtitle={whytitle}
            />


            <Portal
                portal={portSec}
            />


            <MarketingExpertise
                data={smmExperties}
            />


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
