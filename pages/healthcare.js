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
import Milestones from '@/components/Milestones';
import EcomGrowth from '@/components/EcomGrowth';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//Why Icon
import icon10 from '../public/images/eComDev/solution-icon-1.png'
import icon11 from '../public/images/eComDev/solution-icon-2.png'
import icon12 from '../public/images/eComDev/solution-icon-3.png'
import icon13 from '../public/images/eComDev/solution-icon-4.png'
import icon14 from '../public/images/eComDev/solution-icon-5.png'
import icon15 from '../public/images/eComDev/solution-icon-6.png'
import icon16 from '../public/images/eComDev/solution-icon-7.png'
import icon17 from '../public/images/eComDev/solution-icon-8.png'
//
import icon24 from '../public/images/healthcare/health-icon-01.png'
import icon25 from '../public/images/healthcare/health-icon-02.png'
import icon26 from '../public/images/healthcare/health-icon-03.png'
import icon27 from '../public/images/healthcare/health-icon-04.png'
import icon28 from '../public/images/healthcare/health-icon-05.png'
import icon29 from '../public/images/healthcare/health-icon-06.png'
//
import slide1 from '../public/images/eComDev/screenshot_1.png'
import slide2 from '../public/images/eComDev/screenshot_2.png'
import slide3 from '../public/images/eComDev/screenshot_3.png'
import slide4 from '../public/images/eComDev/screenshot_4.png'
import slide5 from '../public/images/eComDev/screenshot_5.png'
import slide6 from '../public/images/eComDev/screenshot_6.png'
import slide7 from '../public/images/eComDev/screenshot_7.png'
import slide8 from '../public/images/eComDev/screenshot_8.png'
import slide9 from '../public/images/eComDev/screenshot_9.png'
import slide10 from '../public/images/eComDev/screenshot_10.png'
//
import milestones1 from '../public/images/eComDev/fits-icon-1.png'
import milestones2 from '../public/images/eComDev/fits-icon-2.png'
import milestones3 from '../public/images/eComDev/fits-icon-3.png'
import milestones4 from '../public/images/eComDev/fits-icon-4.png'
import milestones5 from '../public/images/eComDev/fits-icon-5.png'
import milestones6 from '../public/images/eComDev/fits-icon-6.png'


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



    // Exmple component data

    const exmplTitle = <> <h2 className='font40 fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>E-Commerce</span> solutions </h2> </>

    const exmplSlider = <>
        <Slider {...crmExamples} className={` ${exmplstyles.crmSlider}  crmSlider`}>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>White Wallzy Website</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide1} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Hyjo</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide2} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Raamdecoratiesale</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide3} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>The Man Company</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide4} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Fisher & Paykel</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide5} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Healthy Peach</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide6} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Cuddledown</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide7} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Gentlemen Of Salvage</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide8} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>The Royal Hamam</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide9} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Manduka</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide10} className="img-fluid" />
                </div>
            </div>
        </Slider>
    </>

    const exmplText = <> Let's talk about your CRM requirements </>



    // Advantages component data

    const value = <>
        <Container>
            <Row>
                <Col xl={12}>
                    <h3 className='font40 fontf font-bold line60 black text-center mb-5'>
                        Advantages of Our <span className='grdiant'>E-commerce App Development</span> Services UK:
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard}`}>
                        <Image src={milestones1} className='img-fluid me-auto mb-3' />
                        <h5 class="font18 fontf font-semibold me-auto">Higher Average Order Values</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard}`}>
                        <Image src={milestones2} className='img-fluid me-auto mb-3' />
                        <h5 class="font18 fontf font-semibold me-auto">Increased Customer Loyalty</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                        <Image src={milestones3} className='img-fluid me-auto mb-3' />
                        <h5 class="font18 fontf font-semibold me-auto">Increased Customer Base</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                        <Image src={milestones4} className='img-fluid me-auto mb-3' />
                        <h5 class="font18 fontf font-semibold me-auto">Higher Margins and Better Cash Flow</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                        <Image src={milestones5} className='img-fluid me-auto mb-3' />
                        <h5 class="font18 fontf font-semibold me-auto">Gain New Customers with Search Engine Visibility</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB} ${whyStyles.soluCardBR}`}>
                        <Image src={milestones6} className='img-fluid me-auto mb-3' />
                        <h5 class="font18 fontf font-semibold me-auto">Promote your e-Commerce Website presence</h5>
                    </div>
                </Col>
            </Row>
        </Container>

    </>


    // E-Commerce Development Services

    const ecomDevTtl = <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Our <span className='grdiant'>E-Commerce Development</span>  Services
    </h2>

    const ecomText = <p className='font16 fontf font-medium black text-center'>From Simple to Complex – Our e-Commerce Solutions Are Our Strength</p>

    const ecomDevSer = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon10} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                        Pre-Order <br /> Management
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon11} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                        Product <br /> Recommendations
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon12} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                        Offline Product <br /> Management
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon13} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                        Wish-List <br /> Statement
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon14} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                        Social <br /> Promotions
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon15} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                        Customize Product <br /> Using Designing Tool
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon16} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                        Quickbooks <br /> Integration
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon17} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-500 line30'>
                        Shipping <br /> Methods
                    </h5>
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


            <WhyBuild
                cards={WhyBuilds}
                subtitle={whytitle}
            />


            <Milestones
                value={value}
            />


            <WhyBuild
                cards={WhyBuilds}
                subtitle={whytitle}
            />


            <EcomGrowth />


            <CrmExamples
                title={exmplTitle}
                slider={exmplSlider}
                text={exmplText}
            />
            \

            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
