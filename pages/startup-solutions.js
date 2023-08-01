import Head from 'next/head'
import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import whyStyles from '@/styles/whyServices.module.css'
import exmplstyles from '@/styles/CrmExamples.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//components
import Banner from '@/components/ServicesBanner'
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import WhyBuild from '@/components/WhyBuild';
import CrmExamples from '@/components/CrmExamples';
import DosDont from '@/components/DosDont';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//
import icon24 from '../public/images/startup/b-1.png'
import icon25 from '../public/images/startup/b-2.png'
//
import slide1 from '../public/images/startup/folio1.png'
import slide2 from '../public/images/startup/folio2.png'
import slide3 from '../public/images/startup/folio3.png'


export default function startupsolutions() {


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

    const heading = <h1 className='font65 black fontf font-bold line60'>The Best Design and <br /><span className='grdiant'> STARTUP SOLUTIONS </span> Company!</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image> Advanced E-Commerce For Growing Brands </li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image> Multi Vendor Marketplace Solutions</li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image>  Shopping Cart Development</li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image>  E-Commerce Application Development</li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image> Web Design & Development Services</li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image> Custom E-Commerce Solutions</li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We’ve delivered more than <b> 1200+</b> e-Commerce solutions to <b>1000+</b> clients in the last <b>21 years</b> .</p> </>



    // Build component data

    const whytitle = <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Process</h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon24} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500 line30 mt-3'>
                            Business Analysis
                        </h5>
                        <p>
                            We work with you to analyse and understand the business and your objectives, we then help you to plan and develop your software.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon25} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500 line30 mt-3'>
                            Functional Specifications
                        </h5>
                        <p>
                            Once our business analyst has understood the requirements, we can work closely together and help you create the functional specifications to help your business achieve all development goals, the specifications can also be used by our Developers to understand exactly what needs to be built. You might be surprised by some of the suggestions our analysts will make, with many years’ experience and hundreds of projects under their belts they always know the quickest and easiest way to deliver a project.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon25} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500 line30 mt-3'>
                            Web Development
                        </h5>
                        <p>
                            From providing a platform for your business on the web to advising or supporting an off the shelf solution, we can help. We are experts not only in customer facing sites but also back office systems to keep your business streamlined and give you the edge on the competition.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon24} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500 line30 mt-3'>
                            Mobile App Development
                        </h5>
                        <p>
                            As the internet is increasingly accessed through mobile devices we will discuss your requirements for mobile apps to maintain customer engagement. We can also deliver apps using Augmented Reality (AR) and Virtual Reality (VR) technologies (MR/XR).
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon25} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500 line30 mt-3'>
                            Software Development
                        </h5>
                        <p>
                            We can also provide Internet of Things (IoT) software applications utilising automation, apps to take advantage of wearables & watches, and also SBC or any maker board solutions required.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon25} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500 line30 mt-3'>
                            Security, Server Management and Server & Network Support.
                        </h5>
                        <p>
                            Experts to configure your server, and give you the best environment to easily and securely scale your data.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon24} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500 line30 mt-3'>
                            Digital Marketing
                        </h5>
                        <p>
                            Ensure that you can be found amongst the masses and stand apart by telling people your benefits.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon25} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500 line30 mt-3'>
                            Support
                        </h5>
                        <p>
                            Our assistance does not need to end once up and running. We can also help with applying any updates or new modules, patches, enhancements and security features.
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    </>


    // Exmple component data

    const exmplTitle = <> <h2 className='font40 fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>Startup</span> solutions </h2> </>

    const exmplSlider = <>
        <Slider {...crmExamples} className={` ${exmplstyles.crmSlider}  crmSlider`}>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Incorpore - The Health Club Company</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide1} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Living Centre Clinic</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide2} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Actalens Advantage</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide3} className="img-fluid" />
                </div>
            </div>
        </Slider>
    </>

    const exmplText = <> Let's talk about your startup solutions requirements </>



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


            <DosDont />


            <WhyBuild
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
