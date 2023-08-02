import Head from 'next/head'
import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import exmplstyles from '@/styles/CrmExamples.module.css'
import portstyles from '@/styles/Portal.module.css'
import whyStyles from '@/styles/whyServices.module.css'
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
import CrmExamples from '@/components/CrmExamples';
import Portal from '@/components/Portal';
import Milestones from '@/components/Milestones';
import WhyBuild from '@/components/WhyBuild';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//
import icon24 from '../public/images/b2c/b2c-1.png'
import icon25 from '../public/images/b2c/b2c-2.png'
import icon26 from '../public/images/b2c/b2c-3.png'
import icon27 from '../public/images/b2c/b2c-4.png'
import icon28 from '../public/images/b2c/b2c-5.png'
import icon29 from '../public/images/b2c/b2c-6.png'
import icon30 from '../public/images/b2c/b2c-7.png'
import icon31 from '../public/images/b2c/b2c-8.png'
//
import slide1 from '../public/images/banking/folio1.png'
import slide2 from '../public/images/banking/folio2.png'
import slide3 from '../public/images/banking/folio3.png'
//
import sevcImg from '../public/images/etpSolutions/serviceimg.png'
//
import milestones1 from '../public/images/b2c/b2cs-1.png'
import milestones2 from '../public/images/b2c/b2cs-2.png'
import milestones3 from '../public/images/b2c/b2cs-3.png'
import milestones4 from '../public/images/b2c/b2cs-4.png'
import milestones5 from '../public/images/b2c/b2cs-5.png'
import milestones6 from '../public/images/b2c/b2cs-6.png'



export default function b2csolutions() {


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

    const heading = <h1 className='font65 black fontf font-bold line60'>The Best Design and <br /><span className='grdiant'> B2C SOLUTIONS </span> Company!</h1>

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

    const whytitle = <h2 className='font50 black fontf font-bold line60 black text-center mb-3'>
        Our Solutions
    </h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 fontf font-medium mt-2'>
                        Pre-Order <br /> Management
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 fontf font-medium mt-2'>
                        Wish-List <br /> Statement
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 fontf font-medium mt-2'>
                        Social <br /> promotions
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 fontf font-medium mt-2'>
                        Product <br /> Recommendations
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 fontf font-medium mt-2'>
                        Customize Product Using Designing Tool
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 fontf font-medium mt-2'>
                        Offline Product <br /> Management
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 fontf font-medium mt-2'>
                        Quickbooks <br /> Integration
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 fontf font-medium mt-2'>
                        Shipping <br /> Methods
                    </h5>
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
                    <h3 className='font-bold mb-3'>B2C Key Features</h3>
                    <ul>
                        <li>Back-up zones, focusing on recently viewed items</li>
                        <li>Customer Account with all the order history and order statust</li>
                        <li>Effective SEO features with H1 tags and customizable URLs</li>
                        <li>Features for code activation and various offers</li>
                        <li>On Page optimization with URL sorting and proper structure</li>
                        <li>Enables product Search across several fields and categories</li>
                        <li>Manage Reviews by users with publish controls</li>
                        <li>Product Management with infinite categories</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </>


    // Advantages component data

    const value = <>
        <Container>
            <Row>
                <Col xl={12}>
                    <h3 className='font40 fontf font-bold line60 black text-center mb-5'>
                    Our <span className='grdiant'>B2C </span> Solutions
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard}`}>
                        <Image src={milestones1} className='img-fluid me-auto mb-3' />
                        <h5 class="font18 fontf font-semibold me-auto">Ecommerce</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard}`}>
                        <Image src={milestones2} className='img-fluid me-auto mb-3' />
                        <h5 class="font18 fontf font-semibold me-auto">Customers</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                        <Image src={milestones3} className='img-fluid me-auto mb-3' />
                        <h5 class="font18 fontf font-semibold me-auto">Shipping</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                        <Image src={milestones4} className='img-fluid me-auto mb-3' />
                        <h5 class="font18 fontf font-semibold me-auto">Select Product</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                        <Image src={milestones5} className='img-fluid me-auto mb-3' />
                        <h5 class="font18 fontf font-semibold me-auto">Bank Payment</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB} ${whyStyles.soluCardBR}`}>
                        <Image src={milestones6} className='img-fluid me-auto mb-3' />
                        <h5 class="font18 fontf font-semibold me-auto">Warehouse</h5>
                    </div>
                </Col>
            </Row>
        </Container>

    </>


    // Exmple component data

    const exmplTitle = <> <h2 className='font40 fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>B2C</span> solutions </h2> </>

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

    const exmplText = <> Let's talk about your Automotive requirements </>



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


            <Portal
                portal={portSec}
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
