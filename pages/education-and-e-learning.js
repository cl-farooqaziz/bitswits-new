import Head from 'next/head'
import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import whyStyles from '@/styles/whyServices.module.css'
import exmplstyles from '@/styles/CrmExamples.module.css'
import markstyles from '@/styles/Marketingexpertise.module.css'
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
import MarketingExpertise from '@/components/MarketingExpertise';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import mobilearrow2 from '../public/images/Include/star.jpg'
//
import icon27 from '../public/images/eLearning/ee-icon-01.png'
import icon28 from '../public/images/eLearning/ee-icon-02.png'
import icon29 from '../public/images/eLearning/ee-icon-03.png'
//
import icon30 from '../public/images/eLearning/eee-icon-01.png'
import icon31 from '../public/images/eLearning/eee-icon-02.png'
import icon32 from '../public/images/eLearning/eee-icon-03.png'
import icon33 from '../public/images/eLearning/eee-icon-04.png'
import icon34 from '../public/images/eLearning/eee-icon-05.png'
//
import slide1 from '../public/images/healthcare/folio1.png'
import slide2 from '../public/images/healthcare/folio2.png'
import slide3 from '../public/images/healthcare/folio3.png'
import slide4 from '../public/images/healthcare/folio4.png'
import slide5 from '../public/images/healthcare/folio5.png'


export default function educationandelearning() {


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

    const heading = <h1 className='font65 black fontf font-bold line60'>The Best Design and <br /><span className='grdiant'> EDUCATION AND E LEARNING </span> Company!</h1>

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

    const whytitle = <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Get Innovative With <span className='grdiant'>e-Learning</span>
    </h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon27} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-medium line30 mt-3'>
                            ACCESSIBILITY
                        </h5>
                        <p>
                            “ It’s a learners paradise – readable material is accessible anywhere and anytime; this means that you will be open to learning as and when you desire. Plus, there is no travel cost as in the case of classroom leaning. ”
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon28} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-medium line30 mt-3'>
                            CAPACITY & CONSISTENCY
                        </h5>
                        <p>
                            “-Learning allows educators to achieve great degree of coverage for the target audience, and it makes sure that the message get communicated in a straight fashion. This results in learners receiving the same training. ”
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon29} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-medium line30 mt-3'>
                            REFRESHABLE CONTENT
                        </h5>
                        <p>
                            “A new thing gets added to the material as and when needed, this means that you do not have to shuffle through the pages and go through the books for a new update – it’s that easy.”
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    </>


    // Benefits component data

    const smmExperties = <>
        <Container className='mb-5'>
            <Row>
                <Col>
                    <h3 className='center font-bold mb-5'>Benefits of our e-Learning Solutions</h3>
                    <ul className={markstyles.mservice}>
                        <li><Image src={mobilearrow2} alt="bitswits" />Identical content for all learners with consistent methods</li>
                        <li><Image src={mobilearrow2} alt="bitswits" />Quality learning</li>
                        <li><Image src={mobilearrow2} alt="bitswits" />Quick, Easy and efficient online solutions 24 hour access</li>
                        <li><Image src={mobilearrow2} alt="bitswits" />Built in Learning Management Systems (LMS)</li>
                        <li><Image src={mobilearrow2} alt="bitswits" />Cost efficient when it comes to training and development</li>
                        <li><Image src={mobilearrow2} alt="bitswits" />Tablet compatible formats</li>
                        <li><Image src={mobilearrow2} alt="bitswits" />Ownership of Intellectual Property</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </>



    // Solutions  component data

    const SoluTitle = <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Our Development Methodology </h2>

    const SoluBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon30} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-medium line30 mt-3'>
                            Negotiations
                        </h5>
                        <p>
                            We help to secure good terms for upfront costs and ongoing support for a future proof solutions.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon31} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-medium line30 mt-3'>
                            LMS Selections
                        </h5>
                        <p>
                            We organize a product demon that helps with an opjective choice via Sales Pitch.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon32} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-medium line30 mt-3'>
                            Consultation
                        </h5>
                        <p>
                            We organize a product demon that helps with an objective choice via Sale Pitch
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon33} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-medium line30 mt-3'>
                            RFP
                        </h5>
                        <p>
                            Our RFP builds the Learner Journey, Administrator Journey and the Management Journey.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon34} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-medium line30 mt-3'>
                            Vendor List
                        </h5>
                        <p>
                            Beginning the LMS procurement process, ensuring budgets and can add up current as well as future needs
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    </>



    // Exmple component data

    const exmplTitle = <> <h2 className='font40 fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>Education and e-learning</span> solutions </h2> </>

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
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Rejuvenate Your Body</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide4} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Website for Clinics and Vendors (yourviewdr)</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide5} className="img-fluid" />
                </div>
            </div>
        </Slider>
    </>

    const exmplText = <> Let's talk about your Education and e-learning requirements </>



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


            <MarketingExpertise
                data={smmExperties}
            />



            <WhyBuild
                cards={SoluBuilds}
                subtitle={SoluTitle}
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
