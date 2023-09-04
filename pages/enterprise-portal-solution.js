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

    const heading = <h1 className='font65 black fontf font-bold line60'>

        The Best <span className='grdiant font-bold'>Enterprise Portal Development Company</span>: Delivering Enterprise Portal Solutions That You Can Trust

    </h1>

    const para = <>

        <ul className='p-0'>


            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Strategic Consulting and Planning  </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Interactive Features  </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Access Control  </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Enterprise Search  </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Thorough Testing Analysis  </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Continuous Support  </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Engaging UI/UX Design  </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Legacy System Integration  </li>


        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>

        <span className='grdiant font-bold'>Hire enterprise portal developers</span> at BitsWits who are constantly available for you in providing top quality services that meet your goals and vision.


    </p> </>



    // Build component data

    const whytitle = <h2 className='font50 black fontf font-bold line60 black text-center mb-3'>

        Light Your Path to Success with Our <span className='grdiant font-bold'>Enterprise Portal Development Services</span>

    </h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon22} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Simplified Processes
                        </h5>
                        <p>
                            At BitsWits, we create user-friendly, integrated portals that improve processes within the organization. This increases effectiveness and production.
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
                            Universal Accessibility
                        </h5>
                        <p>

                            We create inclusive, dynamic portals that can be accessed on any device. This guarantees that all workers can safely obtain the information they require.

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
                            Improvements in Collaboration
                        </h5>
                        <p>
                            Our <span className='grdiant font-bold'>enterprise portal development services</span> make it easy for teams, departments, and locations to work together effectively, which leads to better coordination, communication, and outcomes.
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
                            Practical Insights
                        </h5>
                        <p>
                            We incorporate analytics and constantly changing information visualization into portals. This enables quicker, data-driven decision- making throughout the whole organization.
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
                            Cost-saving measure
                        </h5>
                        <p>
                            Our portals combine many systems into a single platform. In the long run, this reduces IT expenses by removing redundancies.
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
                            Future-Ready Systems
                        </h5>
                        <p>

                            Hire <span className='grdiant font-bold'>enterprise portal developers</span> at BitsWits to create adaptable and flexible portals that are prepared for expansion and innovation in the future. This also assists in decreasing the upgrading expenses.

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
                            Customer service orientation
                        </h5>
                        <p>

                            All our staff has quick access to customer data and insights through our portals. This encourages a customer-centric attitude across the whole organization.

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
                            Competitive Advantage
                        </h5>
                        <p>
                            Our specialized, innovative <span className='grdiant font-bold'>enterprise portal development services</span> provide businesses the advantage of outperforming the competitors and providing superb customer service.
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
                    <h3 className='font-bold mb-3 font50'>  Unify Your Businesses Under One <span className='grdiant font-bold'>Enterprise Portal Development</span> Powerhouse!  </h3>
                    <ul>

                        <li>Portal Blueprinting </li>
                        <li>Custom Portal Development </li>
                        <li>System Convergence </li>
                        <li>Portal Content Management </li>
                        <li>Workflow Automation </li>
                        <li>Data Visualization </li>
                        <li>Training and Support </li>
                        <li>Portal Hosting </li>
                        <li>Continuous Maintenance and Support </li>
                        <li>Responsive Web Design </li>
                        <li>Enterprise Portal Security </li>




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
                    <h3 className='center black font50 font-bold mb-5'> Why <span className='grdiant font-bold'>Choose BitsWits for Custom Enterprise Portals</span> to Catalyze Your Success?  </h3>
                    <ul className={markstyles.mservice}>



                        <li><Image src={mobilearrow2} alt="bitswits" />Extensive Knowledge and Expertise</li>
                        <li><Image src={mobilearrow2} alt="bitswits" />Customized Enterprise Portal Development Solutions</li>
                        <li><Image src={mobilearrow2} alt="bitswits" />Proven Structured Development Process </li>
                        <li><Image src={mobilearrow2} alt="bitswits" />Usage of Innovative and Modern Technologies </li>
                        <li><Image src={mobilearrow2} alt="bitswits" />Protection and Security of Data</li>
                        <li><Image src={mobilearrow2} alt="bitswits" />Smoothly Connect Your New Portal with Existing Systems</li>
                        <li><Image src={mobilearrow2} alt="bitswits" />High Productivity and Efficiency </li>
                        <li><Image src={mobilearrow2} alt="bitswits" />Better Implementation Process </li>


                    </ul>
                </Col>
            </Row>
        </Container>
    </>


    return (
        <>
            <Head>
                <title>Top Enterprise Portal Development Solutions Company - BitsWits</title>
                <meta name="description" content="Evolve in the world of exceptional enterprise portal development solutions where we deliver results seamlessly without facing any complications. Connect with BitsWits!" />
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
