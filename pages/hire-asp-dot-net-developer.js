import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import reStyles from '@/styles/MyReason.module.css'
import whyStyles from '@/styles/whyServices.module.css'
import crmstyles from '@/styles/CRMExperts.module.css'
import exmplstyles from '@/styles/CrmExamples.module.css'
import styles from '@/styles/Coverage.module.css'
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
import CRMExperts from '@/components/CRMExperts';
import MyReason from '@/components/MyReason';
import WhyBuild from '@/components/WhyBuild';
import CrmExamples from '@/components/CrmExamples';
//images
import banImg from '../public/images/banner/webBanner.png'
import foldimg from '../public/images/services/webSwipe.svg'
import foldensure from '../public/images/services/webEnsure.svg'
import aheadimage from '../public/images/services/webAhead.svg'
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//
import icon16 from '../public/images/crmDev/crm-choose-icon1.png'
import icon17 from '../public/images/crmDev/crm-choose-icon2.png'
import icon18 from '../public/images/crmDev/crm-choose-icon3.png'
import icon19 from '../public/images/crmDev/crm-choose-icon4.png'
import icon20 from '../public/images/crmDev/crm-choose-icon5.png'
import icon21 from '../public/images/crmDev/crm-choose-icon6.png'
import icon22 from '../public/images/crmDev/crm-choose-icon7.png'
import icon23 from '../public/images/crmDev/crm-choose-icon8.png'
//Why Icon
import icon24 from '../public/images/jaz/1.png'
import icon25 from '../public/images/jaz/2.png'
import icon26 from '../public/images/jaz/3.png'
import icon27 from '../public/images/jaz/4.png'
import icon28 from '../public/images/jaz/5.png'
import icon29 from '../public/images/jaz/6.png'
import icon30 from '../public/images/jaz/7.png'
import icon31 from '../public/images/jaz/8.png'
//
import slide1 from '../public/images/spotlight/1.png'
import slide2 from '../public/images/spotlight/2.png'
import slide3 from '../public/images/spotlight/3.png'
import slide4 from '../public/images/spotlight/4.png'
import slide5 from '../public/images/spotlight/5.png'
import slide6 from '../public/images/spotlight/6.png'
import slide7 from '../public/images/spotlight/7.png'
import slide8 from '../public/images/spotlight/8.png'
import slide9 from '../public/images/spotlight/9.png'
import slide10 from '../public/images/spotlight/10.png'
import slide11 from '../public/images/spotlight/11.png'
import slide12 from '../public/images/spotlight/12.png'
import slide13 from '../public/images/spotlight/13.jpg'
import slide14 from '../public/images/spotlight/14.png'
import slide15 from '../public/images/spotlight/15.png'
import slide16 from '../public/images/spotlight/16.png'
import slide17 from '../public/images/spotlight/17.png'
import slide18 from '../public/images/spotlight/18.png'
import slide19 from '../public/images/spotlight/19.png'
import slide20 from '../public/images/spotlight/20.png'


export default function hireaspdotnetdeveloper() {

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

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire Dedicated <br></br> <span className='grdiant'>  ASP.NET Developer </span> </h1>

    const para = <>

       

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> ASP.Net MVC Web API's</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> Custom .NET Application Development</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> Enterprise .NET Development</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>  .NET Core Development</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image>  .NET MVC 3/MVC 4 Development</li>
            <li className="font16 fontf font-medium black"> <Image quality={75} src={mobilearrow} className='img-fluid multi'></Image> .NET Software Development</li>
          
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-3'>We have been working with Microsoft .Net for over 21 years. Our developers are among the most experienced in the industry and we've completed over 231 .Net projects to date.</p> </>



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


    // CRMExpert component data

    const crmtitle = <h2 className='font50 black fontf font-bold line60 black text-center'>Why choose
        <span className='grdiant'> CRM Experts</span> and Developers from BitsWits?
    </h2>

    const crmCards = <>
        <Row className={`${crmstyles.soluRow} mt-5`}>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon16} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        We can develop CRM solutions using these technologies - Microsoft Dynamics CRM/ 365, Salesforce, Sugar CRM.
                    </p>
                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBR}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon17} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        Our experts have the experience in using great technologies like MS Dynamics CRM and Salesforce solutions for domains ranging from Medical legal firms, Telecommunication industries, Travel.
                    </p>

                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon18} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        We’re great at Custom CRM Development
                    </p>
                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBR}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon19} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        We’ve served our clients on a vast industrial spectrum ranging from enterprises to medium and small scale organisations.
                    </p>

                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon20} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        We’ll be responsible for complete document management.
                    </p>
                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBR}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon21} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        We have the knowledge of carrying out all integrations with Microsoft SharePoint.
                    </p>

                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBB}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon22} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        Want updates and migration services? We can do it for you.
                    </p>
                </div>
            </Col>
            <Col lg={6} className={crmstyles.soluCol}>
                <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBR} ${crmstyles.soluCardBB}`}>
                    <div className={`${crmstyles.imgBox}`}>
                        <Image quality={75} src={icon23} alt='BitsWits' className='img-fluid' />
                    </div>
                    <p>
                        We’ll be responsible for Upgrade and Migration
                    </p>
                </div>
            </Col>
        </Row>
    </>


    // Build component data

    const whytitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>
        Our <span className='grdiant'>ASP.NET Development</span> Services
    </h2>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} `}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Cross Platform <br></br>
Application Developement
                    </h5>
                    <p>We develop applications that can run on any popular platform like Windows, Linux and macOS using latest and fast, modular platform like .NET Core and ASP.NET Core.</p>


                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Third Party <br></br>
Customisationt
                    </h5>
                    <p>Our team provides a third-party software component that is reusable, and is developed to be either freely distributed or sold by an entity other than the original vendor of the development platform.</p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Customized Application <br></br>
Development
                    </h5>
                    <p>Our specialized team of .net developer london, build custom software applications for users and third-parties.</p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} `}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Mobile <br></br>
Apps
                    </h5>
                    <p>BitsWits brings the power and efficiency of .NET to iOS and Android, reusing skills and code while getting access to the native APIs and performance.</p>


                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Application <br></br>
Integration
                    </h5>
                    <p>Our development agency offers services for integrating enterprise applications, business-to-business systems, business processes, legacy and third party systems.

</p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image quality={75} src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Cloud Based <br></br>
Apps
                    </h5>
                    <p>Implement your cloud based services in .NET with the experts from BitsWits and reduce your cost of development and maintenance. We will enable you to scale up or down quickly with our cloud based services.</p>

                </div>
            </Col>
          





        </Row>

    </>


   


    // Exmple component data

    const exmplTitle = <> <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Some Example of Our <span className='grdiant'>.NET Development</span>
    </h2> </>

    const exmplSlider = <>
        <Slider {...crmExamples} className={` ${exmplstyles.crmSlider}  crmSlider`}>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>High Tournaments</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide1} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Roses FM</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide2} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Open Door TBA</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide3} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Camera Click Assistant</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide4} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>My Coffee Shop - Admin</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide5} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>My Coffee Shop</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide6} className="img-fluid" />
                </div>
            </div>


            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>My Book Review</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide7} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Wishy Washy Delivery Boy</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide8} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Wishy Washy</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide9} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Shoppy Mall</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide10} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Card Maker Hub</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide11} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>GS1 Barcode Generator</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide12} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>AudioBooster</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide13} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>DailyStep English</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide14} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Radio Tune</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide15} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Third Eye</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide16} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Location Finder</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide17} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Book a Builder</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide18} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Take5</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide19} className="img-fluid" />
                </div>
            </div>
            <div className={exmplstyles.strpImg}>
                <div className={exmplstyles.topTitle}>Fifit</div>
                <div className={exmplstyles.topImg}>
                    <Image alt="bitswits" src={slide20} className="img-fluid" />
                </div>
            </div>

        </Slider>
    </>

    const exmplText = <> Want one like this? </>

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



            {/* <Swipe
                foldimg={foldimg}
                title='We Design Engaging Mobile Apps your users will swipe through from start to finish'
                para='Our goal with each new mobile app design is to keep users engaged and drive higher completion rates. We use data and user research to create intuitive interfaces that drive actions and we follow the latest design trends to ensure your mobile app is visually appealing.'
                subtitle='High Performance User Experience'
                subpara='In our design lab performance always comes first. We ensure that your mobile app is effective and engaging.'
                subtitle2='Swipe that Convert'
                subpara2='In our design lab performance always comes first. We ensure that your mobile app is effective and engaging.'
            /> */}

            <WhyBuild
                cards={WhyBuilds}
                subtitle={whytitle}
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





            {/* <Ensure
                foldimg={foldensure}
                title='We Test and Optimize your mobile app to ensure best user experience'
                para='We aim to optimize your mobile app experience for better end results. Our team continuously looks for improvement opportunities and tests new features through A/B optimization.'
                subtitle='Constant Innovation'
                subpara='In our design Our primary focus is increasing the end result and making sure the site brings revenue to your business.'
                subtitle2=' Active On-Going Support'
                subpara2='We only rely on real evidence-based improvements that drives conversion rates.'
            /> */}


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
