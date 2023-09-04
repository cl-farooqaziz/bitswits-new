import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Coverage.module.css'
import whyStyles from '@/styles/whyServices.module.css'
import expStyles from '@/styles/MyExpertise.module.css'
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
import MyExpertise from '@/components/MyExpertise';
//images
import banImg from '../public/images/banner/webBanner.png'
import foldimg from '../public/images/services/webSwipe.svg'
import foldensure from '../public/images/services/webEnsure.svg'
import aheadimage from '../public/images/services/webAhead.svg'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import grnArrow from '../public/images/wbd-icons/arrow-green.png'
//
import icon1 from '../public/images/magento/mescon1.png'
import icon2 from '../public/images/magento/mescon2.png'
import icon3 from '../public/images/magento/mescon3.png'
import icon4 from '../public/images/magento/mescon4.png'
import icon5 from '../public/images/magento/mescon5.png'
import icon6 from '../public/images/magento/mescon6.png'
//
import icon7 from '../public/images/magento/mes-t1.png'
import icon8 from '../public/images/magento/mes-t2.png'
import icon9 from '../public/images/magento/mes-t3.png'
import icon10 from '../public/images/magento/mes-t4.png'
import icon11 from '../public/images/magento/mes-t5.png'
import icon12 from '../public/images/magento/mes-t6.png'
//
import icon13 from '../public/images/magento/mes-ico1.png'
import icon14 from '../public/images/magento/mes-ico2.png'
import icon15 from '../public/images/magento/mes-ico2.png'



export default function magentoenterprisesolution() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>The Leading <span className='grdiant'>Magento Enterprise Solutions Company</span> Powering Online Retail Innovation</h1>

    const para = <>

        <ul className='p-0'>


            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Custom Module Development </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Crafting Inventive Online Stores That Attract and Convert </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Customized Theme Designs </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Sales Optimization </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Marketing Automation </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Generation of Actionable Insights with Data-Driven Reports </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Magento Expertise and Creativity</li>


        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'> Our Magento enterprise development services have been of highest quality for decades. Let our experts work on your project to make them succeed without hassles! </p> </>



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



    // Build component data

    const whytitle = <h2 className='font40 black fontf font-bold line60 black text-center mb-3'> Our Renowned <span className='grdiant'>Magento Enterprise Solutions</span> Helping Brands Achieve their eCommerce Goals </h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon1} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Custom Module Development
                        </h5>
                        <p>
                            To expand the possibilities of your ecommerce shop, <span className='grdiant font-bold'>Magento developers</span> construct new modules that are specifically suited to your individual business demands.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon2} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Integrations with Third Parties
                        </h5>
                        <p>
                            Our <span className='grdiant font-bold'>Magento enterprise developers</span> expertly connect the highest quality third-party softwares, including ERP, CRM, and marketing automation solutions.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon3} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Design of a Custom Theme
                        </h5>
                        <p>
                            Our designers produce distinctive, brand-aligned themes that entice customers to visit your shop.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon4} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Sales Optimization and Management
                        </h5>
                        <p>
                            Our <span className='grdiant font-bold'>Magento enterprise solutions</span> include tools and data analysis to improve pricing, promotions, and product listings for greater conversions and sales.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon5} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Marketing Automation
                        </h5>
                        <p>
                            With the aid of automation and data insights, <span className='grdiant font-bold'>Magento enterprise developers</span> at BitsWits assist you in developing focused campaigns and customer experiences.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB} ${whyStyles.soluCardBR}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon6} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-regular mt-3'>
                            Flexible Infrastructure
                        </h5>
                        <p>
                            <span className='grdiant font-bold'>Magento enterprise developers</span> builds an adaptable, safe, and high-performing infrastructure that can expand with the growth of your company.
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    </>


    // MyExpertise component data

    const expsubtile = <h2 className='font50 black fontf font-bold line60 black'>
        Boost eCommerce Business Revenue With Our <span className='grdiant font-bold'>Magento Enterprise Solutions</span>

    </h2>

    const expCards = <>
        <Row className={`${expStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon7} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 fontf font-bold mt-3'>
                        Multiple Websites and Stores
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>


                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Manage multiple brands </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Localized experiences </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Centralized inventory </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Shared shopping cart </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Consistent look and feel </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Shared admin access
                                </li>

                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon8} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 fontf font-bold mt-3'>
                        Advanced pricing and Promotions
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>



                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Flexible pricing rules </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Special discounts and prices </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Cart price rules</li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Advanced coupon capabilities </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Gift wrapping services </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Reward points program</li>


                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBR}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon9} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 fontf font-bold mt-3'>
                        Built-In PCI Compliance
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>



                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Secure card data handling   </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Role-based access control  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Quarterly network scans  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />TLS 1.2+  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Documentation pack  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Regular patching   </li>


                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBB}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon10} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 fontf font-bold mt-3'>
                        Payment Gateway Integration
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>



                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Multiple Payment Options </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Security Measures </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Multi-Currency Support  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Recurring Payments </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Fraud Prevention </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Real-Time Payment Processing</li>




                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBB}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon11} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 fontf font-bold mt-3'>
                        Order Management System
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>



                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Flexible order workflow  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Omnichannel order processing  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Multi-Channel Integration  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Bulk order management  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Customizable rules  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Fraud analysis integration </li>



                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={4} md={6} className={expStyles.soluCol}>
                <div className={`${expStyles.soluCard} ${expStyles.soluCardBR} ${expStyles.soluCardBB}`}>
                    <div className={`${expStyles.imgBox}`}>
                        <Image src={icon12} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font18 fontf font-bold mt-3'>
                        High-Performance Architecture
                    </h5>
                    <Row>
                        <Col sm={12}>
                            <ul className='p-0 m-0'>




                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Built on PHP 7 </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Asynchronous indexing  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Media Storage Optimization  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Node.js for tools  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Code profiling  </li>
                                <li className="font14 fontf font-medium black ">
                                    <Image src={grnArrow} alt='BitsWits' className='img-fluid' />Cache management  </li>




                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </>


    // Enterprise component data

    const whyEptTitle = <h2 className='font40 black fontf font-bold line60 black text-center mb-3'> 
    
    Why Choose BitsWits for <span className='grdiant font-bold'>Magento Enterprise Solutions</span>? 
    
     </h2>

    const WhyEnterprise = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon13} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-bold mt-4'>
                        Certified <span className='grdiant font-bold'>Magento Enterprise Developers</span> 
                        </h5>
                        <p>
                        The team at BitsWits consists of professional <span className='grdiant font-bold'>Magento enterprise developers</span> who are officially certified by Magento for their skills.
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon14} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-bold mt-4'>
                        Complex Project Experience
                        </h5>
                        <p>
                        Our <span className='grdiant font-bold'>Magento developers</span> have extensive experience on complex enterprise-scale Magento projects. 
                        </p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB} ${whyStyles.soluCardBR}`}>
                    <div>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon15} alt='BitsWits' className='img-fluid' />
                        </div>
                        <h5 className='font18 fontf font-bold mt-4'>
                        Costs and Time Savings 
                        </h5>
                        <p>
                        <span className='grdiant font-bold'>Magento enterprise Solutions</span> provide quality and value by reducing costs, timelines, and other obstacles. 
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    </>


    return (
        <>
            <Head>
                <title>Top Magento Enterprise Solution Company - Bitswits</title>
                <meta name="description" content="With the help of a top Magento Enterprise Development Company, maximize the potential of your business and Join forces with us for incomparable success" />
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


            <MyExpertise
                title="Solutions"
                subtitle={expsubtile}
                cards={expCards}
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
                cards={WhyEnterprise}
                subtitle={whyEptTitle}
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




            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
