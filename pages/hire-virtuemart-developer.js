import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import Image from 'next/image';
import expStyles from '@/styles/MyExpertise.module.css'
import whyStyles from '@/styles/whyServices.module.css'
//components
import Banner from '@/components/ServicesBanner'
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import MyExpertise from '@/components/MyExpertise';
import WhyBuild from '@/components/WhyBuild';
//images
import banImg from '../public/images/banner/webBanner.png'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//
import icon24 from '../public/images/shopify/shopfy-icon-1.png'
import icon25 from '../public/images/shopify/shopfy-icon-2.png'
import icon26 from '../public/images/shopify/shopfy-icon-3.png'
import icon27 from '../public/images/shopify/shopfy-icon-4.png'
import icon28 from '../public/images/shopify/shopfy-icon-5.png'
import icon29 from '../public/images/shopify/shopfy-icon-6.png'
//
import icon16 from '../public/images/wbd-icons/wbd-t1.png'
import icon17 from '../public/images/wbd-icons/wbd-t2.png'
import icon18 from '../public/images/wbd-icons/wbd-t3.png'
import grnArrow from '../public/images/wbd-icons/arrow-green.png'


export default function virtuemartDeveloper() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire Expert Senior <br /><span className='grdiant'>VirtueMart Developers</span> From Just $15/hr</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>VirtueMart Customisation </li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image>E-Commerce Application Development</li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image>Migration App to VirtueMart</li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image>Payment Gateway Integration</li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image>Custom Extension Development</li>
            <li className="font16 fontf font-medium black"> <Image src={mobilearrow} className='img-fluid multi'></Image> Theme Development & Integration</li>
        </ul>

    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We’ve delivered more than <strong>80+</strong> VirtueMart Solutions to <strong>70+</strong> clients in last <strong>10 years</strong>.</p> </>




    // Build component data

    const whytitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>
       <span className='grdiant'>VirtueMart Solutions</span>  From The Experts - Our Expertise Include
    </h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 class="font20 fontf font-medium line30">Custom Design Integration</h5>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 class="font20 fontf font-medium line30">Shipping Methods Integration</h5>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 class="font20 fontf font-medium line30">Web Services</h5>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 class="font20 fontf font-medium line30">Online Store Development</h5>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 class="font20 fontf font-medium line30">Third Party API</h5>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 class="font20 fontf font-medium line30">Nested Category Support</h5>
                </div>
            </Col>
        </Row>

    </>



    // MyExpertise component data

    const expsubtile = <h2 className='font50 black fontf font-bold line60 black'>VirtueMart Development And Customisation Services</h2>

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



    // Build component data

    const whyChooseTtl = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>
        Choose Us Because
    </h2>

    const WhyChoose = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 class="font20 fontf font-medium line30">Theme Development</h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 class="font20 fontf font-medium line30">App Development</h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 class="font20 fontf font-medium line30">Magento to Shopify Migration</h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 class="font20 fontf font-medium line30">Support & Maintenance</h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 class="font20 fontf font-medium line30">Social Media Branding</h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 class="font20 fontf font-medium line30">Customised features</h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 class="font20 fontf font-medium line30">Theme Development</h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 class="font20 fontf font-medium line30">App Development</h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 class="font20 fontf font-medium line30">Magento to Shopify Migration</h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 class="font20 fontf font-medium line30">Support & Maintenance</h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 class="font20 fontf font-medium line30">Social Media Branding</h5>
                </div>
            </Col>
            <Col lg={3} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 class="font20 fontf font-medium line30">Customised features</h5>
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
                infopara={infopara}
                bannerimg={banImg}
            />


            <WhyBuild
                cards={WhyBuilds}
                subtitle={whytitle}
            />


            <MyExpertise
                title="Services"
                subtitle={expsubtile}
                cards={expCards}
            />


            <WhyBuild
                cards={WhyChoose}
                subtitle={whyChooseTtl}
            />


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
