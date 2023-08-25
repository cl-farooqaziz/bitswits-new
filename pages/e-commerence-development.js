import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
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
import Coverage from '@/components/Coverage';
import Swipe from '@/components/Swipe';
import Ahead from '@/components/Ahead';
import Ensure from '@/components/Ensure';
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
import foldimg from '../public/images/services/webSwipe.svg'
import foldensure from '../public/images/services/webEnsure.svg'
import aheadimage from '../public/images/services/webAhead.svg'
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
import icon18 from '../public/images/eComDev/eco-icon-1.png'
import icon19 from '../public/images/eComDev/eco-icon-2.png'
import icon20 from '../public/images/eComDev/eco-icon-3.png'
import icon21 from '../public/images/eComDev/eco-icon-4.png'
import icon22 from '../public/images/eComDev/eco-icon-5.png'
import icon23 from '../public/images/eComDev/eco-icon-6.png'
import icon24 from '../public/images/eComDev/eco-icon-7.png'
import icon25 from '../public/images/eComDev/eco-icon-8.png'
import icon26 from '../public/images/eComDev/eco-icon-9.png'
import icon27 from '../public/images/eComDev/eco-icon-10.png'
import icon28 from '../public/images/eComDev/eco-icon-11.png'
import icon29 from '../public/images/eComDev/eco-icon-1.png'
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
//
import bluebg from '../public/images/eComDev/blueimg.png'
import bluebg1 from '../public/images/eComDev/bluebgicon-1.png'
import bluebg2 from '../public/images/eComDev/bluebgicon-2.png'
import bluebg3 from '../public/images/eComDev/bluebgicon-3.png'
import bluebg4 from '../public/images/eComDev/bluebgicon-4.png'



export default function ecommerencedevelopment() {


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

    const heading = <h1 className='font65 black fontf font-bold line60'>The Best Design and <br /><span className='grdiant'> E-Commerence Development </span> Company!</h1>

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


    // coverage component data

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



    // Build component data

    const whytitle = <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Major Platforms Our <span className='grdiant'>E-commerce</span> Developers Provide Solutions For:
    </h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} justify-content-between`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon18} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-medium line30'>
                            Magento
                        </h5>
                        <p>
                            We're a well established Magento Certified development company, and we have built and successfully launched thousands of Magento stores.
                        </p>
                    </div>
                    <Link className={exmplstyles.btn} href="#">View More</Link>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} justify-content-between`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon19} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-medium line30'>
                            Prestashop
                        </h5>
                        <p>
                            Bitswitsprovides professional and skilful PrestaShop development services including Prestashop adaptation, template design, responsive theme & module development.
                        </p>
                    </div>
                    <Link className={exmplstyles.btn} href="#">View More</Link>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} justify-content-between`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon20} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-medium line30'>
                            BigCommerce
                        </h5>
                        <p>
                            If you’re looking for a BigCommerce development company, then we’re here to help. We offer customized services for your BigCommerce store needs.
                        </p>
                    </div>
                    <Link className={exmplstyles.btn} href="#">View More</Link>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} justify-content-between ${whyStyles.soluCardBR}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon21} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-medium line30'>
                            WooCommerce
                        </h5>
                        <p>
                            Our WooCommerce development team are experts in providing custom development services for plug-ins, themes, and templates with flexible pricing.
                        </p>
                    </div>
                    <Link className={exmplstyles.btn} href="#">View More</Link>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} justify-content-between`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon22} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-medium line30'>
                            Shopify
                        </h5>
                        <p>
                            With extensive experience of Shopify's architecture, our developers are the most sought after in the industry when it comes to Shopify development services.
                        </p>
                    </div>
                    <Link className={exmplstyles.btn} href="#">View More</Link>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} justify-content-between`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon23} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-medium line30'>
                            NopCommerce
                        </h5>
                        <p>
                            Bitswitshas the experience and expertise for NopCommerce Development, and we provide the ultimate services in this field.
                        </p>
                    </div>
                    <Link className={exmplstyles.btn} href="#">View More</Link>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} justify-content-between`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon24} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-medium line30'>
                            XCart
                        </h5>
                        <p>
                            Our X-Cart development service is one of the best in the industry. Get a customised online shopping cart solution for your e-Commerce website.
                        </p>
                    </div>
                    <Link className={exmplstyles.btn} href="#">View More</Link>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} justify-content-between ${whyStyles.soluCardBR}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon25} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-medium line30'>
                            OpenCart
                        </h5>
                        <p>
                            Our OpenCart developers have extensive experience in OpenCart customisation, theme customisation and vQmod based OpenCart extensions.
                        </p>
                    </div>
                    <Link className={exmplstyles.btn} href="#">View More</Link>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} justify-content-between ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon26} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-medium line30'>
                            VirtueMart
                        </h5>
                        <p>
                            Benefit from our VirtueMart development services in which we can create shopping cart solutions for e-Commerce websites.
                        </p>
                    </div>
                    <Link className={exmplstyles.btn} href="#">View More</Link>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} justify-content-between ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon27} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-medium line30'>
                            Zencart
                        </h5>
                        <p>
                            Bitswitsoffers Zen Cart web development services and you can hire our professional developers for custom Zen Cart e-Commerce website design and development.
                        </p>
                    </div>
                    <Link className={exmplstyles.btn} href="#">View More</Link>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} justify-content-between ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon28} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-medium line30'>
                            OSCommerce
                        </h5>
                        <p>
                            Our unrivaled experience and technical expertise make us a trusted offshore osCommerce development company for business across the globe.
                        </p>
                    </div>
                    <Link className={exmplstyles.btn} href="#">View More</Link>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} justify-content-between ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon29} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-medium line30'>
                            Magento 2
                        </h5>
                        <p>
                            Bitswitsprovides top quality Magento 2.0 development and customisation services including Magento 2.0 migration, theme/extension development.
                        </p>
                    </div>
                    <Link className={exmplstyles.btn} href="#">View More</Link>
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
                        <h5 className="font18 fontf font-semibold me-auto">Higher Average Order Values</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard}`}>
                        <Image src={milestones2} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Increased Customer Loyalty</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                        <Image src={milestones3} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Increased Customer Base</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                        <Image src={milestones4} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Higher Margins and Better Cash Flow</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                        <Image src={milestones5} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Gain New Customers with Search Engine Visibility</h5>
                    </div>
                </Col>
                <Col xl={4} className='p-0'>
                    <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB} ${whyStyles.soluCardBR}`}>
                        <Image src={milestones6} className='img-fluid me-auto mb-3' />
                        <h5 className="font18 fontf font-semibold me-auto">Promote your e-Commerce Website presence</h5>
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
                    <h5 className='font20 fontf font-medium line30'>
                        Pre-Order <br /> Management
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon11} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Product <br /> Recommendations
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon12} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Offline Product <br /> Management
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon13} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Wish-List <br /> Statement
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon14} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Social <br /> Promotions
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon15} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Customize Product <br /> Using Designing Tool
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon16} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Quickbooks <br /> Integration
                    </h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon17} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Shipping <br /> Methods
                    </h5>
                </div>
            </Col>
        </Row>

    </>


    // Growth component data

    const busGrowth = <>
        <Container>
            <div className='mb-5'>
                <h3 className='font30 fontf font-bold white text-center mb-0'>
                    Business Growth With Our E-commerce Development?
                </h3>
                <p className='font30 fontf white text-center'>Here’s Everything You Need To Know:</p>
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
                                    <h5 className='font20 fontf font-medium white line30'>
                                        Build An Incredible Shopping Experience
                                    </h5>
                                    <p>
                                        Our revolutionary e-Commerce development lets you create stores that engage with the maximum shoppers to increase sales. Choose from the best responsive e-Commerce templates on the market or build a fully custom site.
                                    </p>
                                </div>
                            </div>
                            <div className={`${growthStyles.soluCard}`}>
                                <div className={`${growthStyles.imgBox}`}>
                                    <Image src={bluebg2} alt='BitsWits' className='img-fluid' />
                                </div>
                                <div className={`${growthStyles.txtBox}`}>
                                    <h5 className='font20 fontf font-medium white line30'>
                                        Add Promising Features
                                    </h5>
                                    <p>
                                        Best-in-class marketing and conversion tools enable the merchants to grow at double the speed of the industry average. Drive more traffic, convert more visitors and seamlessly sell on multiple channels from a single location by first adding a few promising features.
                                    </p>
                                </div>
                            </div>
                            <div className={`${growthStyles.soluCard}`}>
                                <div className={`${growthStyles.imgBox}`}>
                                    <Image src={bluebg3} alt='BitsWits' className='img-fluid' />
                                </div>
                                <div className={`${growthStyles.txtBox}`}>
                                    <h5 className='font20 fontf font-medium white line30'>
                                        Get Unparraled Performance
                                    </h5>
                                    <p>
                                        The e-Commerce systems developed by us at Team In India benefit merchants from industry-leading performance, stability and sites that load fast for maximum conversion.
                                    </p>
                                </div>
                            </div>
                            <div className={`${growthStyles.soluCard}`}>
                                <div className={`${growthStyles.imgBox}`}>
                                    <Image src={bluebg4} alt='BitsWits' className='img-fluid' />
                                </div>
                                <div className={`${growthStyles.txtBox}`}>
                                    <h5 className='font20 fontf font-medium white line30'>
                                        Optimisation of ROI
                                    </h5>
                                    <p>
                                        You’ll spend less time managing technology and get regular updates with new, cutting-edge features once you know the technique to manage and optimize the things that impact your business.
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


            {/* <Coverage
                title="Coverage"
                subtitle={subtile}
                mobile={mobile}
                user={user}
                ux={ux}
            /> */}


            <WhyBuild
                cards={WhyBuilds}
                subtitle={whytitle}
            />

            {/* <Swipe
                foldimg={foldimg}
                title='We Design Engaging Mobile Apps your users will swipe through from start to finish'
                para='Our goal with each new mobile app design is to keep users engaged and drive higher completion rates. We use data and user research to create intuitive interfaces that drive actions and we follow the latest design trends to ensure your mobile app is visually appealing.'
                subtitle='High Performance User Experience'
                subpara='In our design lab performance always comes first. We ensure that your mobile app is effective and engaging.'
                subtitle2='Swipe that Convert'
                subpara2='In our design lab performance always comes first. We ensure that your mobile app is effective and engaging.'

            /> */}


            <CrmExamples
                title={exmplTitle}
                slider={exmplSlider}
                text={exmplText}
            />


            {/* <Ahead
                title='Our Mobile App Research Data that puts you ahead of others'
                para='We conduct user research with real people to provide valuable insights that help our clients stay ahead of their competitors. We use various creative methods to gather data and inform product decisions based on the needs and wants of the target audience.'
                subtitle='Laser Focused User Research'
                subpara='We remain laser focused on your target audience to best meet their needs and requirements.'
                subtitle2='Competitive Advantage'
                subpara2='Our research process gives you a competitive advantage and up-to-date market insights.'
                ahead={aheadimage}

            /> */}



            <WhyBuild
                cards={ecomDevSer}
                subtitle={ecomDevTtl}
                text={ecomText}
            />


            <EcomGrowth
                growth={busGrowth}
            />


            {/* <Ensure
                foldimg={foldensure}
                title='We Test and Optimize your mobile app to ensure best user experience'
                para='We aim to optimize your mobile app experience for better end results. Our team continuously looks for improvement opportunities and tests new features through A/B optimization.'
                subtitle='Constant Innovation'
                subpara='In our design Our primary focus is increasing the end result and making sure the site brings revenue to your business.'
                subtitle2=' Active On-Going Support'
                subpara2='We only rely on real evidence-based improvements that drives conversion rates.'
            /> */}


            <Milestones
                value={value}
            />


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
