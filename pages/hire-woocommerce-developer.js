import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import Image from 'next/image';
import expStyles from '@/styles/MyExpertise.module.css'
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
import MyExpertise from '@/components/MyExpertise';
import CrmExamples from '@/components/CrmExamples';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
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
import icon16 from '../public/images/wbd-icons/wbd-t1.png'
import icon17 from '../public/images/wbd-icons/wbd-t2.png'
import icon18 from '../public/images/wbd-icons/wbd-t3.png'
import grnArrow from '../public/images/wbd-icons/arrow-green.png'


export default function hireWoocommerceDeveloper() {


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

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire our team of expert, experienced
        <span className='grdiant'>WooCommerce developers</span></h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>WooCommerce website design & build</li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image>WooCommerce Integration</li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image>Theme development & integration</li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image>Payment gateway integration</li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image>Custom extension development</li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image>Shipping methods development and integration</li>
        </ul>

    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We’ve delivered more than <strong>80+</strong> WooCommerce Portals to <strong>75+</strong> clients in last <strong>5 years</strong> alone</p> </>



    // MyExpertise component data

    const expsubtile = <h2 className='font50 black fontf font-bold line60 black'>WooCommerce Development And Customization Services</h2>

    const expCards = <>
        <Row className={`${expStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBB}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon16} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        PHP
                    </h5>
                    <p>
                        Powering nearly 80% of websites, PHP has established itself as the most popular server-side language. Here at BitsWits we cover a wide range of core PHP developments from simple scripts to complex, corporate systems.
                    </p>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Core PHP
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Larvel
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Zend
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    ROR
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBB}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon17} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        .Net
                    </h5>
                    <p>
                        Here at BitsWits our goals are to deliver work that exceeds our client’s satisfaction. With the strength of our core values and our vast array of skills, we promise to deliver the ultimate web applications and services.
                    </p>
                    <Row>
                        <Col sm={6}>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    ASP.NET
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    C#
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Umbraco
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    DNN
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBR} ${expStyles.soluCardBB}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon18} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-bold line30'>
                        CRM
                    </h5>
                    <p>
                        As far as CRM (Customer Relationship Management) systems go, here at BitsWits our professionals have extensive industry experience when it comes to developing CRM solutions.
                    </p>
                    <Row>
                        <Col>
                            <ul className='p-0 m-0'>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    MS Dynamics CRM
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Salesforce
                                </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />
                                    Sharepoint
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </>



    // Exmple component data

    const exmplTitle = <> <h2 className='font40 fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>WooCommerce work</span></h2> </>

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

    const exmplText = <> Let's talk about your WooCommerce requirements </>




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


            <MyExpertise
                title="Services"
                subtitle={expsubtile}
                cards={expCards}
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
