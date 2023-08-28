import Head from 'next/head'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap'
//css
import styles from '@/styles/Coverage.module.css'
import whyStyles from '@/styles/whyServices.module.css'
import expStyles from '@/styles/MyExpertise.module.css'
//components
import Banner from '@/components/ServicesBanner'
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import MyExpertise from '@/components/MyExpertise';
import WhyBuild from '@/components/WhyBuild';
//images
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import banImg from '../public/images/banner/webapp.svg'
//
import benefitimg1 from '../public/images/industryInt/benefit-img1.svg'
import benefitimg2 from '../public/images/industryInt/benefit-img2.svg'
import benefitimg3 from '../public/images/industryInt/benefit-img3.svg'
import benefitimg4 from '../public/images/industryInt/benefit-img4.svg'
// Why Icon
import icon232 from '../public/images/industryInt/why-us1.svg'
import icon24 from '../public/images/industryInt/why-us2.svg'
import icon25 from '../public/images/industryInt/why-us3.svg'
import icon26 from '../public/images/industryInt/why-us4.svg'
import icon27 from '../public/images/industryInt/why-us5.svg'
import icon28 from '../public/images/industryInt/why-us6.svg'
import icon29 from '../public/images/industryInt/why-us7.svg'
import icon30 from '../public/images/industryInt/why-us8.svg'
import icon31 from '../public/images/industryInt/why-us9.svg'
import icon32 from '../public/images/industryInt/feather-check-circle-svg.png'


export default function webappdevelopment() {

    // banner component data
    const heading = <h1 className='font65 black fontf font-bold line60'>
        Innovate, Create, Succeed: Hire Top <span className='grdiant'>Web App Development Company</span> in US
    </h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                250+ successfully completed projects
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Robust Security Measures
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                24/7 Dedicated Support
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                100% customized web app solutions
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Reduced development time by 25%
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Remarkable 60% increase in user engagement
            </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>
        Ready to Experience Excellence? Join us today for faster development and we guarantee a 60% boost in user engagement on your new web app!
    </p> </>


    // coverage component data

    const expsubtile = <h2 className='font50 black fontf font-bold line60 black'>
        How We Achieve Success As a Trusted <span className='grdiant'>Web App Development Company</span>
    </h2>

    const expCards = <>
        <Row className={`${expStyles.soluRow} mt-5`}>
            <Col lg={5}>
                <h4 className='font30 font-bold'>Our Approach for Flutter App</h4>
                <div className='d-flex justify-content-start align-content-start mt-5'>
                    <div className='d-inline'>
                        <div className="mobbtn">
                            <Link href="#" target="_blank" aria-label="img" className={`${expStyles.mobdev} ${expStyles.ev1}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21.849" height="26" viewBox="0 0 21.849 26">
                                    <path id="Icon_awesome-apple" data-name="Icon awesome-apple" d="M18.548,15.99a5.419,5.419,0,0,1,2.9-4.922,6.237,6.237,0,0,0-4.917-2.589c-2.061-.163-4.313,1.2-5.137,1.2-.871,0-2.867-1.144-4.435-1.144C3.723,8.589.281,11.119.281,16.268a14.468,14.468,0,0,0,.836,4.713c.743,2.13,3.425,7.354,6.223,7.267,1.463-.035,2.5-1.039,4.4-1.039,1.846,0,2.8,1.039,4.435,1.039,2.821-.041,5.247-4.789,5.956-6.925a5.754,5.754,0,0,1-3.581-5.334ZM15.263,6.458A5.467,5.467,0,0,0,16.656,2.25a6.155,6.155,0,0,0-3.941,2.026,5.553,5.553,0,0,0-1.486,4.174,4.875,4.875,0,0,0,4.034-1.991Z" transform="translate(-0.281 -2.25)" fill="#fff"></path>
                                </svg>
                                <span> IOS</span>
                            </Link>
                            <Link href="#" target="_blank" aria-label="img" className={`${expStyles.mobdev} ${expStyles.ev2}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21.667" height="26" viewBox="0 0 21.667 26">
                                    <path id="Icon_material-android" data-name="Icon material-android" d="M7.333,19.5a1.087,1.087,0,0,0,1.083,1.083H9.5v3.792a1.625,1.625,0,0,0,3.25,0V20.583h2.167v3.792a1.625,1.625,0,1,0,3.25,0V20.583H19.25A1.087,1.087,0,0,0,20.333,19.5V8.667h-13ZM4.625,8.667A1.623,1.623,0,0,0,3,10.292v7.583a1.625,1.625,0,0,0,3.25,0V10.292A1.623,1.623,0,0,0,4.625,8.667Zm18.417,0a1.623,1.623,0,0,0-1.625,1.625v7.583a1.625,1.625,0,0,0,3.25,0V10.292A1.623,1.623,0,0,0,23.042,8.667ZM17.658,2.34,19.066.932a.536.536,0,0,0,0-.769.536.536,0,0,0-.769,0l-1.6,1.6a6.326,6.326,0,0,0-2.86-.682,6.417,6.417,0,0,0-2.882.683L9.338.162a.536.536,0,0,0-.769,0,.536.536,0,0,0,0,.769L9.988,2.351A6.482,6.482,0,0,0,7.333,7.583h13A6.463,6.463,0,0,0,17.658,2.34ZM11.667,5.417H10.583V4.333h1.083Zm5.417,0H16V4.333h1.083Z" transform="translate(-3)" fill="#fff"></path>
                                </svg>
                                <span> Android</span>
                            </Link>
                            <Link href="#" target="_blank" aria-label="img" className={`${expStyles.mobdev} ${expStyles.ev3}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24.065" height="21.177" viewBox="0 0 24.065 21.177">
                                    <path id="Path_2947" data-name="Path 2947" d="M21.912.579a11.936,11.936,0,0,0,.1,1.691,1.826,1.826,0,0,0,.413.99,1.71,1.71,0,0,0,.88.481,7.494,7.494,0,0,0,1.5.165v1.1H14.706v-1.1a8.944,8.944,0,0,0,1.636-.165,1.978,1.978,0,0,0,.963-.468,1.669,1.669,0,0,0,.454-.935,9.067,9.067,0,0,0,.11-1.568V-4.976H7.666V.579a10.465,10.465,0,0,0,.11,1.691,1.84,1.84,0,0,0,.44.99,1.828,1.828,0,0,0,.949.481,8.944,8.944,0,0,0,1.636.165v1.1H.735v-1.1a7.494,7.494,0,0,0,1.5-.165A1.68,1.68,0,0,0,3.1,3.274a1.842,1.842,0,0,0,.413-.935A9.067,9.067,0,0,0,3.623.772V-11.935a10.057,10.057,0,0,0-.1-1.554,1.985,1.985,0,0,0-.371-.935,1.385,1.385,0,0,0-.784-.468,8.129,8.129,0,0,0-1.334-.179v-1.1h9.488v1.1a7.494,7.494,0,0,0-1.5.165,1.587,1.587,0,0,0-.866.5,1.961,1.961,0,0,0-.4.99,11.635,11.635,0,0,0-.1,1.678v5.06h10.2v-5.253a8.821,8.821,0,0,0-.11-1.554,1.917,1.917,0,0,0-.413-.935,1.559,1.559,0,0,0-.866-.468,10.02,10.02,0,0,0-1.5-.179v-1.1H24.5v1.1a6.045,6.045,0,0,0-1.334.165,1.419,1.419,0,0,0-.784.5,2.134,2.134,0,0,0-.371.99,11.635,11.635,0,0,0-.1,1.678Z" transform="translate(-0.735 16.17)" fill="#fff"></path>
                                </svg>
                                <span> Hybrid</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={7}>
                <p>
                    Are you tired of web pages that seem captivating in terms of look but don’t convert as many users as you wish for? Well, don’t worry anymore because <span className='grdiant font-bold'>web app developers</span> at BitsWits, go beyond the surface, creating perfect custom-built web applications that will make your business succeed from the inside out.
                </p>
                <p>
                    Our progressive approach includes building slick interfaces backed up by bug-free code, lightning-fast performance, and smooth scalability. Our <span className='grdiant font-bold'>web app developers</span> not only build apps but create digital solutions that assist you to connect, engage, and convert your customers. Don’t settle for an average app but let our creative approach help your app reach the destination you aim for.
                </p>
            </Col>
        </Row>
    </>


    // Why Build

    const whytitle = <h2 className='font50 black fontf font-bold line60 black text-center'>
        Work Smarter and Convert Faster with <span className='grdiant'>Web Apps</span> at BitsWits!
    </h2>

    const text =
        <p className='text-center'>
            <span className='grdiant font-bold'>Web app development services</span> at BitsWits, allows you to build better and faster web applications globally.
        </p>


    const WhyBuilds = <>

        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon232} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Booming Accessibility
                    </h5>
                    <p>
                        Web apps can be assessed on any device with a Wi-Fi connection, letting you engage in business anytime and anywhere.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Better Customer Engagement
                    </h5>
                    <p>
                        Web apps provide an interactive platform to communicate and engage customers.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Uncomplicated Business Processes
                    </h5>
                    <p>
                        Our web apps can automate business workflows for improved efficiency and simplified processes.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        A Boost in Productivity
                    </h5>
                    <p>
                        <span className='grdiant font-bold'>Web app developers</span> at BitsWits create apps that allow users to access information faster and more efficiently.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Better Data Insights
                    </h5>
                    <p>
                        Web apps have data and information that can provide valuable insights that guide in the decision-making process.
                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Lower Costs
                    </h5>
                    <p>
                        At BitsWits, web applications require lower development and maintenance costs compared to native apps.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Faster Time to Market
                    </h5>
                    <p>
                        Web applications can be developed and updated quickly as compared to other applications.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Extensive Reach Worldwide
                    </h5>
                    <p>
                        Our <span className='grdiant font-bold'>web app developers</span> extend your brand’s reach to the international market and industry.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Boost Marketing and Sales
                    </h5>
                    <p>
                        Web applications provide a new self-service sales channel to advertise and promote goods and services.
                    </p>
                </div>
            </Col>
        </Row>
    </>


    // Why Build

    const Benefits = <>
        <Row className='justify-content-center align-items-center text-center mb-4'>
            <Col lg={12}>
                <h2 className='font50 black fontf font-bold line60 black text-center'>
                    Benefits Of Hiring A Leading <span className='grdiant'>Web App Development Company</span>
                </h2>
                <p>
                    Hiring a web app development company brings fresh perspectives and expertise to your project, accelerating innovation and ensuring your web app stays ahead of the competition.
                </p>
            </Col>
        </Row>
        <Row className='benefitscard'>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body'>
                        <Row>
                            <Col lg={5}>
                                <Image src={benefitimg1} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                                <h4 className='font20 font-bold'>
                                    Efficiency in Action
                                </h4>
                                <span className='font14'>
                                    Our skilled <span className='grdiant font-bold'>web app developers</span> rapidly design, develop, test, and launch web apps, delivering right on schedule with faster ROI.
                                </span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body'>
                        <Row>
                            <Col lg={5}>
                                <Image src={benefitimg2} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                                <h4 className='font20 font-bold'>
                                    Master in Utilizing Tech
                                </h4>
                                <span className='font14'>
                                    Professional <span className='grdiant font-bold'>web app developers</span> at BitsWits utilize modern tech and tools to build secure and reliable apps. We stay on top of technologies like React, Angular, Node.js, MongoDB, and much more to deliver excellence.
                                </span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body'>
                        <Row>
                            <Col lg={5}>
                                <Image src={benefitimg3} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                                <h4 className='font20 font-bold'>
                                    Cost Cutters
                                </h4>
                                <span className='font14'>
                                    Our expertise focuses on saving time and costs in building, testing, and launching your web apps. We optimize resources and processes to deliver app projects on time and within budget.
                                </span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body'>
                        <Row>
                            <Col lg={5}>
                                <Image src={benefitimg4} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                                <h4 className='font20 font-bold'>
                                    Customer Champions
                                </h4>
                                <span className='font14'>
                                    Understanding users is kept a priority. Our <span className='grdiant font-bold'>web app developers</span> deliver perfect and engaging UI/UX designs that develop trust and win the hearts of our customers.
                                </span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
        <p className='text-center'>
            Your Web App Success Story Begins Here – Get in Touch!
        </p>
    </>


    // Why Build

    const Benefits1 = <>
        <Row className='text-center'>
            <Col lg={12}>
                <h4 className='font50 black fontf font-bold line60 black text-center'>
                    Our <span className='grdiant'>Web App Development</span> Blueprint
                </h4>
                <p>
                    Our <span className='grdiant font-bold'>web app development company</span> develops web applications that are designed to be efficient. Here’s an overview of how we build a web app that boosts engagement, conversion rate and ultimately brings in more revenue.
                </p>
            </Col>
        </Row>
        <Row>
            <Col lg={7}>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Initial Consultation
                    </h4>
                    <p>
                        We start by understanding your goals, target users, features, and technical needs for the web app.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Requirements Gathering
                    </h4>
                    <p>
                        Together, we create extensive specifications, UI/UX requirements, and precise functional requirements.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Design and Prototyping
                    </h4>
                    <p>
                        To produce flexible designs that are optimized for the web and your users, we employ wireframes and prototypes.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Web App Development
                    </h4>
                    <p>
                        Our web app developers use modern frameworks like React, Angular, and Vue.js to create web apps that perform well.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Testing and QA
                    </h4>
                    <p>
                        Thorough testing on many browsers and devices guarantees that your web app gives the best experience possible.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Launch and Deployment
                    </h4>
                    <p>
                        We assist with the web app launch, promotion and provide ongoing support and maintenance.
                    </p>
                </div>
            </Col>
            <Col lg={5}>
                <div className={styles.contactform}>
                    <div className=''>
                        <h3 className='font20 font-bold mb-3'>Get a Free Consultation</h3>
                    </div>
                    <Row>
                        <Col lg={12}>
                            <input type='text' className={styles.forminput} placeholder='Your Name' />
                        </Col>
                        <Col lg={12}>
                            <input type='number' className={styles.forminput} placeholder='Phone Number' />
                        </Col>
                        <Col lg={12}>
                            <input type='email' className={styles.forminput} placeholder='Email Address' />
                        </Col>
                        <Col lg={12}>
                            <textarea className={styles.formarea} placeholder='How can we help you?' ></textarea>
                        </Col>
                        <Col lg={12}>
                            <input type='Submit' className={styles.notice} />
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </>
    

    return (
        <>
            <Head>
                <title>Top Web App Development Company - Bitswits</title>
                <meta name="description" content="Want to stand out in the crowded web app marketplace? Our web application developers provide bespoke solutions that cater to your unique business needs." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <Banner
                title={heading}
                para={para}
                bannerimg={banImg}
                infopara={infopara}
            />

            <MyExpertise
                title="Expertise"
                subtitle={expsubtile}
                cards={expCards}
                className='bgColorf'
            />

            <WhyBuild
                cards={WhyBuilds}
                subtitle={whytitle}
                text={text}
            />

            <WhyBuild
                cards={Benefits}
            />

            <WhyBuild
                cards={Benefits1}
            />

            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
