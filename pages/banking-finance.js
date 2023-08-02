import Head from 'next/head'
import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import exmplstyles from '@/styles/CrmExamples.module.css'
import expertStyle from '@/styles/Experts.module.css'
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
import Experts from '@/components/experts';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//
import b1 from '../public/images/banking/bf-icon-1.png'
import b2 from '../public/images/banking/bf-icon-2.png'
import b3 from '../public/images/banking/bf-icon-3.png'
import b4 from '../public/images/banking/bf-icon-4.png'
import b5 from '../public/images/banking/bf-icon-5.png'
import b6 from '../public/images/banking/bf-icon-6.png'
import b7 from '../public/images/banking/bf-icon-7.png'
import b8 from '../public/images/banking/bf-icon-8.png'
import b9 from '../public/images/banking/bf-icon-9.png'
import b10 from '../public/images/banking/bf-icon-10.png'
import b11 from '../public/images/banking/bf-icon-11.png'
import b12 from '../public/images/banking/bf-icon-12.png'
import b13 from '../public/images/banking/bf-icon-13.png'
import b14 from '../public/images/banking/bf-icon-14.png'
import b15 from '../public/images/banking/bf-icon-15.png'
import b16 from '../public/images/banking/bf-icon-16.png'
import b17 from '../public/images/banking/bf-icon-17.png'
import b18 from '../public/images/banking/bf-icon-18.png'
import b19 from '../public/images/banking/bf-icon-19.png'
import b20 from '../public/images/banking/bf-icon-20.png'
import b21 from '../public/images/banking/bf-icon-21.png'
//
import slide1 from '../public/images/banking/folio1.png'
import slide2 from '../public/images/banking/folio2.png'
import slide3 from '../public/images/banking/folio3.png'


export default function bankingfinance() {


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

    const heading = <h1 className='font65 black fontf font-bold line60'>The Best Design and <br /><span className='grdiant'> BANKING & FINANCE </span> Company!</h1>

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



    // Imagine  component data

    const experttitle = <h4 className='font40 black fontf font-bold line60 black text-center'>Here are just some of the things we can help you with
    </h4>

    const experts = <>
        <Container>
            <Row className={expertStyle.expertRow}>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b1} alt='BitsWits' className='img-fluid' />
                        <h4>PRINT DESIGN</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b2} alt='BitsWits' className='img-fluid' />
                        <h4>EXHIBIT/TRADE SHOW DISPLAYS</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b3} alt='BitsWits' className='img-fluid' />
                        <h4>FINANCIAL BLOG DESIGN</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b4} alt='BitsWits' className='img-fluid' />
                        <h4>BRANDING AND IDENTITY DESIGN</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b5} alt='BitsWits' className='img-fluid' />
                        <h4>STRATEGIC PLANNING</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b6} alt='BitsWits' className='img-fluid' />
                        <h4>END-TO-END SUBSCRIPTION SOLUTIONS</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b7} alt='BitsWits' className='img-fluid' />
                        <h4>GRAPHIC DESIGN</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b8} alt='BitsWits' className='img-fluid' />
                        <h4>CONTENT MANAGEMENT SYSTEMS</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b9} alt='BitsWits' className='img-fluid' />
                        <h4>FINANCIAL CONTENT INTEGRATION</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b10} alt='BitsWits' className='img-fluid' />
                        <h4>WEBSITE DESIGN</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b11} alt='BitsWits' className='img-fluid' />
                        <h4>WEBSITE DEVELOPMENT</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b12} alt='BitsWits' className='img-fluid' />
                        <h4>NEWSLETTER AND MAILING</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b13} alt='BitsWits' className='img-fluid' />
                        <h4>INTERACTIVE</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b14} alt='BitsWits' className='img-fluid' />
                        <h4>METATRADER API</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b15} alt='BitsWits' className='img-fluid' />
                        <h4>LEAD GENERATION CAMPAIGNS</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b16} alt='BitsWits' className='img-fluid' />
                        <h4> ONLINE ADVERTISING</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b17} alt='BitsWits' className='img-fluid' />
                        <h4>CUSTOM SOFTWARE DEVELOPMENT</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b18} alt='BitsWits' className='img-fluid' />
                        <h4>EXCLUSIVE FINANCIAL PHOTO LIBRARY</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b19} alt='BitsWits' className='img-fluid' />
                        <h4>USER INTERFACE DESIGN</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b20} alt='BitsWits' className='img-fluid' />
                        <h4>TRADING CHAT</h4>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className={expertStyle.exebox}>
                        <Image src={b21} alt='BitsWits' className='img-fluid' />
                        <h4>SEARCH ENGINE OPTIMIZATION AND MEDIA MARKETING</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    </>



    // Exmple component data

    const exmplTitle = <> <h2 className='font40 fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>Banking and Finance</span> solutions </h2> </>

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

    const exmplText = <> Let's talk about your Banking and Finance requirements </>



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

            <Experts
                cards={experts}
                subtitle={experttitle}
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
