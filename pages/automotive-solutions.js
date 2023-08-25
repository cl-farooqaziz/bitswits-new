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
import milestones1 from '../public/images/automotive/1.jpg'
import milestones2 from '../public/images/automotive/2.jpg'
import milestones3 from '../public/images/automotive/3.jpg'
import milestones4 from '../public/images/automotive/4.jpg'
import milestones5 from '../public/images/automotive/5.jpg'
import WhyBuild from '@/components/WhyBuild';

//
//Why Icon
import icon10 from '../public/images/worked/1.jpg'
import icon11 from '../public/images/worked/2.jpg'
import icon12 from '../public/images/worked/3.jpg'
import icon13 from '../public/images/worked/4.jpg'
import icon14 from '../public/images/worked/5.jpg'
import icon15 from '../public/images/worked/6.jpg'
import icon16 from '../public/images/worked/7.jpg'
import icon17 from '../public/images/worked/8.jpg'
import whyStyles from '@/styles/whyServices.module.css'


//
import CrmExamples from '@/components/CrmExamples';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../public/images/seo/1.jpg'
import slide2 from '../public/images/seo/2.png'
import slide3 from '../public/images/seo/3.png'
import slide4 from '../public/images/seo/4.png'
import slide5 from '../public/images/seo/5.png'
import slide6 from '../public/images/seo/6.png'
import slide7 from '../public/images/seo/7.png'
import slide8 from '../public/images/seo/8.jpg'
import slide9 from '../public/images/seo/9.jpg'
import slide10 from '../public/images/seo/10.jpg'
import slide11 from '../public/images/seo/11.jpg'
import slide12 from '../public/images/seo/12.jpg'
import exmplstyles from '@/styles/CrmExamples.module.css'


export default function automotivesolutions() {

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

    const heading = <h1 className='font65 black fontf font-bold line60'>The Best Design and <br /><span className='grdiant'> AUTOMOTIVE SOLUTIONS </span> Company!</h1>

    const para = <ul className='p-0'>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Connected Vehicles
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Service Business Management
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Automotive Leasing
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Single Interface Support
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Dealer Management System
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Rental and Lease
        </li>
    </ul>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>"In <strong>21 years</strong> of business we've completed more than <strong>147 projects</strong> for Automotive industry clients. Get in touch today to start talking about what we can do for your business."</p> </>

    // coverage component data


    // const subtile = <h2 className='font50 black fontf font-bold line60'>Our <span className='grdiant'>Mobile App</span> Services</h2>

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

    const data =  <>

            
                <Container className='pb-5'>
                    <Row>
                        <Col>
                            <h3 className='center font-bold mb-5'>Typical project features</h3>


                            <ul className={dataStyles.mservice}>
                                <li> <Image src={mobilearrow1} alt="bitswits" />  Website Designing with New graphics </li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />  Strong Back-end to manage the huge business  </li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />   A Single environment for different websites (CMS) </li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />  Management of payment gateways by the admin</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> Warehouse and logistics management </li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />   Automotive rental solutions</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />   Fully automated operations framework for leasing companies and garages</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />   Multi-platform access to consumers for product viewing, comparison, buying real time vehicle tracking and insurance</li>



                            </ul>
                        </Col>
                    </Row>
                </Container>

            

        </>



    const value =
        <>
            <Container>
                <Row>
                    <Col xl={12}>
                        <h3 className='center font-bold mb-5'>Our <span className='grdiant'>Development</span> Methodology</h3>

                    </Col>
                </Row>
                <Row className=''>
                    <Col xl={4} className='borderbottom '>
                        <div className=' pt-5 pb-5'>
                            <Image src={milestones1} className='img-fluid mb-4 greyscale' />
                            <h3 className='font20 mb-3 font-semibold'>Evaluation and Monitoring </h3>
                            <p className=''>These determine KPIs,reports and other metrics, per suer, in order to monitor that the process is working as agreed</p>
                        </div>
                    </Col>
                    <Col xl={4} className='mongo borderbottom'>
                        <div className=' pt-5 pb-5'>
                            <Image src={milestones2} className='img-fluid mb-4 greyscale' />
                            <h3 className='font20 mb-3 font-semibold'>Application,construction and
                                implementation</h3>
                            <p className=''>Weekly delivery of developments for the end user to operate and request for changes, it isIDEAL that the end user is part ofthe process of development and testing</p>
                        </div>

                    </Col>
                    <Col xl={4} className='mongo borderbottom'>
                        <div className=' pt-5 pb-5'>
                            <Image src={milestones3} className='img-fluid mb-4 greyscale' />
                            <h3 className='font20 mb-3 font-semibold'>Evaluation of processes and current
                                structure of the company </h3>
                            <p className=''>Mapping processes to determine the starting pointand the Actual State</p>
                        </div>
                    </Col>
                    <Col xl={4} >
                        <div className=' pt-5 pb-5'>
                            <Image src={milestones4} className='img-fluid mb-4 greyscale' />
                            <h3 className='font20 mb-3 font-semibold'>Suggestions for improvement and
                                process optimization </h3>
                            <p className=''>Optimize a process with a right combination of technologies</p>
                        </div>
                    </Col>
                    <Col xl={4} className='mongo'>
                        <div className=' pt-5 pb-5'>
                            <Image src={milestones5} className='img-fluid mb-4 greyscale' />
                            <h3 className='font20 mb-3 font-semibold'>Application design together with
                                the client </h3>
                            <p className=''>We choose technologies and review options with the client. The client is part of the project from the very beginning and feedback is VITAL</p>
                        </div>
                    </Col>

                </Row>
            </Container>

        </>




    const ecomDevTtl = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>Automotive Industries we have worked on
    </h2>

    const ecomDevSer = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon10} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30 mt-3'>
                        Car Entertainment
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon11} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30 mt-3'>
                        Coachwork
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon12} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30 mt-3'>
                        Wheels and Trims
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon13} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30 mt-3'>
                        Automotive Parts
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon14} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30 mt-3'>
                        Specialist Tuning
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon15} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30 mt-3'>
                        Sales
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon16} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30 mt-3'>
                        Limousines
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon17} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30 mt-3'>
                        Executive Cars
                    </h5>
                </div>
            </Col>
        </Row>

    </>



// Exmple component data


const exmplTitle = <> <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>Automotive solutions</span>
</h2> </>

const exmplSlider = <>
    <Slider {...crmExamples} className={` ${exmplstyles.crmSlider}  crmSlider`}>
        <div className={exmplstyles.strpImg}>
            <div className={exmplstyles.topTitle}>A1 Clutches</div>
            <div className={exmplstyles.topImg}>
                <Image alt="bitswits" src={slide1} className="img-fluid" />
            </div>
        </div>
        <div className={exmplstyles.strpImg}>
            <div className={exmplstyles.topTitle}>Glyfada Beach Villas</div>
            <div className={exmplstyles.topImg}>
                <Image alt="bitswits" src={slide2} className="img-fluid" />
            </div>
        </div>
        <div className={exmplstyles.strpImg}>
            <div className={exmplstyles.topTitle}>Bali Brasserie Restaurants</div>
            <div className={exmplstyles.topImg}>
                <Image alt="bitswits" src={slide3} className="img-fluid" />
            </div>
        </div>
        <div className={exmplstyles.strpImg}>
            <div className={exmplstyles.topTitle}>Texas Star hvacr</div>
            <div className={exmplstyles.topImg}>
                <Image alt="bitswits" src={slide4} className="img-fluid" />
            </div>
        </div>
        <div className={exmplstyles.strpImg}>
            <div className={exmplstyles.topTitle}>My Duvet and Pillow</div>
            <div className={exmplstyles.topImg}>
                <Image alt="bitswits" src={slide5} className="img-fluid" />
            </div>
        </div>
        <div className={exmplstyles.strpImg}>
            <div className={exmplstyles.topTitle}>Diamond Engagement Rings</div>
            <div className={exmplstyles.topImg}>
                <Image alt="bitswits" src={slide6} className="img-fluid" />
            </div>
        </div>
        <div className={exmplstyles.strpImg}>
            <div className={exmplstyles.topTitle}>Pass Now Intensive Courses</div>
            <div className={exmplstyles.topImg}>
                <Image alt="bitswits" src={slide7} className="img-fluid" />
            </div>
        </div>
        <div className={exmplstyles.strpImg}>
            <div className={exmplstyles.topTitle}>Mind Body Fitness</div>
            <div className={exmplstyles.topImg}>
                <Image alt="bitswits" src={slide8} className="img-fluid" />
            </div>
        </div>
        <div className={exmplstyles.strpImg}>
            <div className={exmplstyles.topTitle}>My Duvet and Pillow</div>
            <div className={exmplstyles.topImg}>
                <Image alt="bitswits" src={slide9} className="img-fluid" />
            </div>
        </div>
        <div className={exmplstyles.strpImg}>
            <div className={exmplstyles.topTitle}>The Flower Stand Chelsea </div>
            <div className={exmplstyles.topImg}>
                <Image alt="bitswits" src={slide10} className="img-fluid" />
            </div>
        </div>
        <div className={exmplstyles.strpImg}>
            <div className={exmplstyles.topTitle}>Shirtworks (Tshirt Printing) </div>
            <div className={exmplstyles.topImg}>
                <Image alt="bitswits" src={slide11} className="img-fluid" />
            </div>
        </div>
        <div className={exmplstyles.strpImg}>
            <div className={exmplstyles.topTitle}>Narpsuk (Dog Walking Business) </div>
            <div className={exmplstyles.topImg}>
                <Image alt="bitswits" src={slide12} className="img-fluid" />
            </div>
        </div>
    </Slider>
</>

const exmplText = <> Let's talk about your Automotive solutions requirements </>


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
                bgpost = 'bgpost'

            />

            <CrmExamples
                title={exmplTitle}
                slider={exmplSlider}
                text={exmplText}
            />

            <WhyBuild
                cards={ecomDevSer}
                subtitle={ecomDevTtl}
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


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
