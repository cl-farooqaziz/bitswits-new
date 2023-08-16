import Head from 'next/head'
import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import whyStyles from '@/styles/whyServices.module.css'
import exmplstyles from '@/styles/CrmExamples.module.css'
import growthStyles from '@/styles/EcomGrowth.module.css'
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
import Milestones from '@/components/Milestones';
import EcomGrowth from '@/components/EcomGrowth';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//
import icon24 from '../public/images/healthcare/health-icon-01.png'
import icon25 from '../public/images/healthcare/health-icon-02.png'
import icon26 from '../public/images/healthcare/health-icon-03.png'
import icon27 from '../public/images/healthcare/health-icon-04.png'
import icon28 from '../public/images/healthcare/health-icon-05.png'
import icon29 from '../public/images/healthcare/health-icon-06.png'
//
import milestones1 from '../public/images/healthcare/h-icon-1.png'
import milestones2 from '../public/images/healthcare/h-icon-2.png'
import milestones3 from '../public/images/healthcare/h-icon-3.png'
import milestones4 from '../public/images/healthcare/h-icon-4.png'
import milestones5 from '../public/images/healthcare/h-icon-5.png'
import milestones6 from '../public/images/healthcare/h-icon-6.png'
//
import icon30 from '../public/images/healthcare/he-icon-01.png'
import icon31 from '../public/images/healthcare/health-icon-02.png'
import icon32 from '../public/images/healthcare/he-icon-03.png'
import icon33 from '../public/images/healthcare/he-icon-04.png'
import icon34 from '../public/images/healthcare/health-icon-05.png'
import icon35 from '../public/images/healthcare/health-icon-06.png'
//
import bluebg from '../public/images/healthcare/imgright.png'
import bluebg1 from '../public/images/healthcare/blueicons-1.png'
import bluebg2 from '../public/images/healthcare/bluebgicon-2.png'
//
import slide1 from '../public/images/healthcare/folio1.png'
import slide2 from '../public/images/healthcare/folio2.png'
import slide3 from '../public/images/healthcare/folio3.png'
import slide4 from '../public/images/healthcare/folio4.png'
import slide5 from '../public/images/healthcare/folio5.png'


export default function healthcare() {


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

    const heading = <h1 className='font65 black fontf font-bold line60'>The Best Design and <br /><span className='grdiant'> HEALTHCARE </span> Company!</h1>

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

    const whytitle = <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Why Do You Need A Digital <span className='grdiant'>Healthcare</span> Solution?
    </h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon24} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500 line30 mt-3'>
                            Patient Outcome Will Improve
                        </h5>
                        <p>
                            Technology will intelligently support long-term health management and short-term episodes of illness or injury, thus improving patient outcome
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
                            Clinical Proficiency Will Improve
                        </h5>
                        <p>
                            Professionals will be spending more time on the core competencies like treating patients, rather than wasting time on the managing processes.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon26} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500 line30 mt-3'>
                            Increased Productivity
                        </h5>
                        <p>
                            Administrative tasks will consume a lot less time, and processing will be more automated.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon27} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500 line30 mt-3'>
                            New Competencies Will Be Added
                        </h5>
                        <p>
                            New competencies will be provided to the management team.
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
                        <h5 className='font20 fontf font-500 line30 mt-3'>
                            New Coaching Skills Will Be Implemented
                        </h5>
                        <p>
                            A wider range of consulting and coaching skills will be implemented – ways in which doctors can interact with their patients.
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
                        <h5 className='font20 fontf font-500 line30 mt-3'>
                            Organizational and Professional Boundaries Will Deplete
                        </h5>
                        <p>
                            Integrated information and communication systems will dissolve many of the current divides between primary, secondary and tertiary care.
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    </>


    // Advantages component data

    const value = <>
        <Container>
            <Row>
                <Col xl={12}>
                    <h3 className='font40 fontf font-bold line60 black text-center mb-5'>
                        Reap the benefits of online <span className='grdiant'>healthcare</span> solutions
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard}`}>
                        <Image src={milestones1} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">More Patient Interactions</h5>
                        <p className='font18 fontf font-regular black'>
                            Staff will be able to spend more time with their patients and less time chasing clinical information.
                        </p>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard}`}>
                        <Image src={milestones2} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Better Means of Sharing Information</h5>
                        <p className='font18 fontf font-regular black'>
                            Information gets shared in a more streamlined format between different sources, for example between GPs and Hospitals.
                        </p>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                        <Image src={milestones3} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Patient’s information</h5>
                        <p className='font18 fontf font-regular black'>
                            Important patient information will be available instantly by means of a digital healthcare system.
                        </p>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                        <Image src={milestones4} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Helping your patients</h5>
                        <p className='font18 fontf font-regular black'>
                            Helping your patients including those with chronic and complex conditions, to better manage their health.
                        </p>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                        <Image src={milestones5} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Increased efficiencies</h5>
                        <p className='font18 fontf font-regular black'>
                            Increased efficiencies may help reduce the number of unnecessary repeat tests, hospitalizations and follow-up specialist visits.
                        </p>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB} ${whyStyles.soluCardBR}`}>
                        <Image src={milestones6} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Maintaining Confidentiality</h5>
                        <p className='font18 fontf font-regular black'>
                            Important patient information will be available instantly by means of a digital healthcare system.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </>


    // Solutions  component data

    const SoluTitle = <h2 className='font40 black fontf font-bold line60 black text-center mb-3'><span className='grdiant'>Healthcare</span> Solutions From Bitswits
    </h2>

    const SoluBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon30} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500 line30 mt-3'>
                            Patient & Appointment Register
                        </h5>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon31} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500 line30 mt-3'>
                            Patient History with last appointments prescription history.
                        </h5>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon32} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500 line30 mt-3'>
                            Calendar to view appointment schedules
                        </h5>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon33} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500 line30 mt-3'>
                            Patient and Appointment Reporting features
                        </h5>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon34} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500 line30 mt-3'>
                            An admin section to control website content and Admin activities.
                        </h5>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon35} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500 line30 mt-3'>
                            Expert team for module & features suggestions
                        </h5>
                    </div>
                </div>
            </Col>
        </Row>
    </>


    // Growth component data

    const busGrowth = <>
        <Container>
            <div className='mb-5'>
                <h3 className='font30 fontf font-bold white text-center mb-0'>
                    Key Features – Providing a better service
                </h3>
            </div>
            <div className={growthStyles.mainBox}>
                <Row className={growthStyles.boxRow}>
                    <Col lg={6}>
                        <div className={growthStyles.cardMain}>
                            <div className={`${growthStyles.soluCard}`}>
                                <div className={`${growthStyles.imgBox}`}>
                                    <Image src={bluebg1} alt='BitsWits' className='img-fluid' />
                                </div>
                                <div className={`${growthStyles.txtBox}`}>
                                    <h5 className='font20 fontf font-500 white line30'>
                                        Telemedicine & Video Calling
                                    </h5>
                                    <p>
                                        Doctors and patients can now be connected through phone and video-calls taking communication within healthcare to another level.Doctors and patients can now be connected through phone and video-calls taking communication within healthcare to another level.
                                    </p>
                                </div>
                            </div>
                            <div className={`${growthStyles.soluCard}`}>
                                <div className={`${growthStyles.imgBox}`}>
                                    <Image src={bluebg2} alt='BitsWits' className='img-fluid' />
                                </div>
                                <div className={`${growthStyles.txtBox}`}>
                                    <h5 className='font20 fontf font-500 white line30'>
                                        Telemedicine & Video Calling
                                    </h5>
                                    <p>
                                        Doctors and patients can now be connected through phone and video-calls taking communication within healthcare to another level.Doctors and patients can now be connected through phone and video-calls taking communication within healthcare to another level.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className={growthStyles.right}>
                        <Image src={bluebg} alt='BitsWits' className='img-fluid' />
                    </Col>
                </Row>
            </div>
        </Container>
    </>


    // Exmple component data

    const exmplTitle = <> <h2 className='font40 fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>Healthcare</span> solutions </h2> </>

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

    const exmplText = <> Let's talk about your Healthcare requirements </>



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


            <Milestones
                value={value}
            />


            <WhyBuild
                cards={SoluBuilds}
                subtitle={SoluTitle}
            />


            <EcomGrowth
                growth={busGrowth}
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
