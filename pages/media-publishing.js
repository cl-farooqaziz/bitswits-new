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
import aheadimage from '../public/images/services/webAhead.svg'
import Image from 'next/image';
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import Milestones from '@/components/Milestones';
import { Container, Row, Col } from 'react-bootstrap'
import milestones1 from '../public/images/media/1.png'
import milestones2 from '../public/images/media/2.png'
import milestones3 from '../public/images/media/3.png'
import WhyBuild from '@/components/WhyBuild';
import whyStyles from '@/styles/whyServices.module.css'
//Why Icon
import icon24 from '../public/images/extent/1.jpg'
import icon25 from '../public/images/extent/2.jpg'
import icon26 from '../public/images/extent/3.jpg'
import icon27 from '../public/images/extent/4.jpg'
import icon28 from '../public/images/extent/5.jpg'
import icon29 from '../public/images/extent/6.jpg'
import icon30 from '../public/images/extent/7.jpg'
import icon31 from '../public/images/extent/8.jpg'

//
import CrmExamples from '@/components/CrmExamples';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../public/images/mediaexamples/1.jpg'
import slide2 from '../public/images/mediaexamples/2.png'
import slide3 from '../public/images/mediaexamples/3.png'
import slide4 from '../public/images/mediaexamples/4.png'
import slide5 from '../public/images/mediaexamples/5.png'
import slide6 from '../public/images/mediaexamples/6.png'
import slide7 from '../public/images/mediaexamples/7.jpg'
import slide8 from '../public/images/mediaexamples/8.jpg'
import slide9 from '../public/images/mediaexamples/9.jpg'
import slide10 from '../public/images/mediaexamples/10.jpg'
import slide11 from '../public/images/mediaexamples/11.jpg'
import slide12 from '../public/images/mediaexamples/12.jpg'
import slide13 from '../public/images/mediaexamples/13.jpg'
import exmplstyles from '@/styles/CrmExamples.module.css'

export default function mediapublishing() {

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

    const heading = <h1 className='font65 black fontf font-bold line60'>The Best Design and <br /><span className='grdiant'> MEDIA & PUBLISHING </span> Company!</h1>

    const para = <ul className='p-0'>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Advertising
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Digital Learning
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Event Management
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            User Experience
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Broadcasting
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Gaming
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Print & Publishing
        </li>
        <li className="font16 fontf font-medium black">
            <Image src={mobilearrow} className='img-fluid multi'></Image>
            Music
        </li>
    </ul>

    const infopara = <> <p className='black fontf font-medium line30 mt-4'>In <strong>21</strong> years we've serviced over <strong>1200+</strong> clients, across more than <strong>1000+</strong> Media & Publishing solutions.</p> </>


    // // coverage component data


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


    const value =
        <>

            <Container>
                <Row>
                    <Col xl={12}>
                        <h3 className='center font-bold'>Our Media And Publishing Solutions</h3>

                    </Col>
                </Row>
                <Row className='gy-5 mt-2'>
                    <Col xl={4}>
                        <div className='pt-5 pb-5'>
                            <Image src={milestones1} className='img-fluid mb-4' />
                            <h4 className='font20 font-semibold'>Revenue Generation</h4>
                            <ul className='m-0 p-0'>
                                <li>Revenue/subscriber maximization</li>
                                <li>Content monetization</li>
                                <li>Advertising revenue optimization</li>
                                <li>Market consolidation</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl={4} className='mongo'>
                        <div className='pt-5 pb-5'>
                            <Image src={milestones2} className='img-fluid mb-4' />
                            <h4 className='font20 font-semibold'>Customer Experience</h4>
                            <ul className='m-0 p-0'>
                                <li>Customization to Individual users' needs</li>
                                <li>Fast collaboration and feedback</li>
                                <li>Consistent multi-channel experience</li>
                                <li>Results as per clients expectations</li>
                            </ul>
                        </div>

                    </Col>
                    <Col xl={4} className='mongo'>
                        <div className='pt-5 pb-5'>
                            <Image src={milestones3} className='img-fluid mb-4' />
                            <h4 className='font20 font-semibold'>Cost Reduction</h4>
                            <ul className='m-0 p-0'>
                                <li>Reduced time to market</li>
                                <li>Cheaper online product provisioning</li>
                                <li>Automation</li>
                                <li>Faster/easier content creation</li>
                            </ul>
                        </div>
                    </Col>



                </Row>
            </Container>


        </>



    // Swipe component data


    const whytitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>Services We Offer – The extent of our expertise!</h2>



    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                        Advertising
                    </h5>
                    <p>
                        We advertise your brand while keeping an eye on the competitors, getting maximum results.
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                        Digital learning
                    </h5>
                    <p>
                        Believing in all things digital, we let you experience the best of our technology.
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                        Event Management
                    </h5>
                    <p>
                        We create and manage your media related events, making work easier than ever before.
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                        User Experience
                    </h5>
                    <p>
                        We focus on providing the ultimate user experience for all business.
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                        Broadcasting

                    </h5>
                    <p>
                        We take the responsibility to broadcast information about your brand getting maximum audience attention.
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                        Gaming
                    </h5>
                    <p>
                        Providing exceedingly good gaming experiences on a range of platforms.
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                        Print & publishing
                    </h5>
                    <p>
                        From our experience we know what our customers want, allowing us to provide the highest quality of print and publishing services.
                    </p>

                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                        Music
                    </h5>
                    <p>
                        We make sure our music relates to our customers’ needs and requirements.
                    </p>

                </div>
            </Col>

        </Row>

    </>



    // Exmple component data


    const exmplTitle = <> <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>Media Publishing work</span>
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
                <div className={exmplstyles.topTitle}>Gentlemen Of Salvage</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide2} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>My First Motor</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide3} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Nforce Parking</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide4} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Pass Now Intensive Courses</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide5} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>DS Vehicle Maintenance</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide6} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Park Dubbo</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide7} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>1 Stop Instruction</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide8} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>E&J Jarvis Garage</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide9} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>RJ Engineering </div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide10} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Lexus Owners Club </div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide11} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Tyre Equipment Direct </div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide12} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Car Khabri </div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide13} className="img-fluid" />
                </div>
            </div>
        </Slider>
    </>

    const exmplText = <> Let's talk about your Media & Publishing requirements </>



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
                classmiles='classmiles'
            />


            <CrmExamples
                title={exmplTitle}
                slider={exmplSlider}
                text={exmplText}
            />
            <WhyBuild
                title="Why Build"

                cards={WhyBuilds}
                subtitle={whytitle}
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


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
