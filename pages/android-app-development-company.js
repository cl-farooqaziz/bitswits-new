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
//image
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import banImg from '../public/images/banner/mobileappbanner.png'
// import MyReason from '@/components/MyReason';
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



export default function androidappdeveloment() {

    // banner component data
    const heading = <h1 className='font65 black fontf font-bold line60'>
        The Top <span className='grdiant'>Android App Development Company in US! </span>
    </h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                The go-to <span className='grdiant'>Android app developers</span> for popular brands
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                2000+ apps launched and counting
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                A highly skilled in-house team of 250+ experts
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Global presence
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Timely Delivery
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                99% customer satisfaction rate
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Spectacular Android app designs
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Competitive Pricing
            </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>
        Success with android apps starts here. Get in touch with an <span className='grdiant'>android app consultant at BitsWits</span> – Contact Us!
    </p> </>


    // coverage component data

    const expsubtile = <h2 className='font50 black fontf font-bold line60 black'>
        Building Intuitive Android Apps at the Leading <span className='grdiant'>Android App Development</span> Agency
    </h2>

    const expCards = <>
        <Row className={`${expStyles.soluRow} mt-5`}>
            <Col lg={5}>
                <h4 className='font30 font-bold'>Our Approach for Android App</h4>
                <div className='d-flex justify-content-start align-content-start mt-lg-5 mt-md-3'>
                    <div className='d-inline'>
                        <div className="mobbtn nonefor">
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
                    As a <span className='grdiant'>top Android app development company</span>, our top Android app developers build smooth and high-functioning applications.  To create unique mobile apps that are well-suited for Android smartphones, our top Android app developers make use of the most recent Android features.
                </p>
                <p>
                    We prioritize amazing user experience, rigorous testing, efficient performance, and intuitive design. By using a simplified development approach, we can work directly with our clients to develop high-quality Android apps that are successful for them.
                </p>
            </Col>

        </Row>
    </>


    // Why Build

    const whytitle = <h2 className='font50 black fontf font-bold line60 black text-center'>
        Why is There a Need for <span className='grdiant'>Android Applications</span>?
    </h2>

    const text =
        <p className='text-center'>
            Achieve a competitive edge, boost revenue, and engage customers effectively with an <span className='grdiant'>Android app</span>. BitsWits excels in creating personalized, future-ready apps to expand your market reach.
        </p>

    const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon232} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Extensive Audience Reach
                    </h5>
                    <p>
                        Android is the most widely used mobile operating system globally which means it can aid your business to reach potential customers globally.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Higher Discoverability in the App Store
                    </h5>
                    <p>
                        Android apps have high discoverability in the Play Store due to its extensive user base, robust search algorithm, and easy downloading.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Flexible UI Design Features
                    </h5>
                    <p>
                        Apps run smoothly on smartphones, tablets, mobile devices, and other devices due to Android's support for flexible UI design.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Combining Advanced Features
                    </h5>
                    <p>
                        Apps leverage Android's unique features like widgets, AI, and alerts. We ensure seamless integration, delivering the best user experience
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Brand Visibility and Recognition
                    </h5>
                    <p>
                        Android app offers a direct and interactive channel for users to engage with your brand on their mobile devices.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Economical and Cost-Effective
                    </h5>
                    <p>
                        Android apps can reach a wide audience without the need for expensive hardware or software, reducing development and distribution costs.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Extensive Developer Support
                    </h5>
                    <p>
                        To promote the development of Android apps, Google offers a wealth of developer resources, tools, and documentation.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Options for Flexible Monetization
                    </h5>
                    <p>
                        Android apps offer various options for monetization, from ads, in-app purchases, subscriptions and other methods to customize the revenue approach.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Utilizing Open Platforms for Innovation
                    </h5>
                    <p>
                        Android apps use open platforms for development, incorporating third-party services, and continuously adapting to evolving user demands.
                    </p>
                </div>
            </Col>
        </Row>

    </>


    // Why Build

    const Benefits = <>
        <Row className='justify-content-center align-items-center text-center mb-4'>
            <Col lg={12}>
                <h2 className='font-bold font50 '>
                    The Benefits of Hiring the Best <span className='grdiant'>Android App Development Company</span>!
                </h2>
                <p>
                    BitsWits has a <span className='grdiant'>team of talented top Android app developers</span> who help surpass all your expectations.
                </p>
            </Col>
        </Row>
        <Row className='benefitscard'>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body p-4'>
                        <Row className='gy-4'>
                            <Col lg={5}>
                                <Image src={benefitimg1} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                                <h4 className='font-bold font20'>Experience and Expertise </h4>
                                <p className='font14'>
                                    Our <span className='grdiant'>top Android app developers</span> have 10+ years of experience building and launching successful applications on Google Play. We also stay up-to-date on the latest Android features.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body p-4'>
                        <Row className='gy-4'>
                            <Col lg={5}>
                                <Image src={benefitimg2} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                                <h4 className='font-bold font20'>Multi-Device Testing </h4>
                                <p className='font14'>
                                    BitsWits, a leading Android <span className='grdiant'>app development agency</span>, conducts thorough app testing across various Android phones, tablets, and other gadgets and software.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body p-4'>
                        <Row className='gy-4'>
                            <Col lg={5}>
                                <Image src={benefitimg3} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>

                                <h4 className='font-bold font20'>Quick Turnaround  </h4>
                                <p className='font14'>
                                    Our <span className='grdiant'>Android app development services</span> include quicker app delivery without sacrificing quality due to our simple processes and agile framework.
                                </p>

                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body p-4'>
                        <Row className='gy-4'>
                            <Col lg={5}>
                                <Image src={benefitimg4} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>

                                <h4 className='font-bold font20'>Enhanced Visibility   </h4>
                                <p className='font14'>
                                    In order to increase your app's exposure and discovery in the Google Play store, our <span className='grdiant'>top Android app developers</span> employ proven Store Optimization techniques.
                                </p>

                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
        <p className='text-center'>Our high-quality <span className='grdiant'>Android app development services</span> will help your business grow and create a global brand name.

        </p>
    </>


    // Why Build

    const Benefits1 = <>
        <Row className='text-center'>
            <Col lg={12}>
                <h4 className='font-bold font50 '>Our <span className='grdiant'> Android App</span> Process</h4>
                <p> The process at this top Android app development company is designed to be innovative, efficient, and transparent. What to anticipate from our <span className='grdiant'>Android app development services</span> is outlined below: </p>
            </Col>
        </Row>
        <Row>
            <Col lg={7}>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Initial Consultation
                    </h4>
                    <p>Our top Android <span className='grdiant'>app developers</span> start by talking about the objectives, obstacles, and limitations you have for your app.</p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Gathering Requirements
                    </h4>
                    <p>We'll work with you to define the specific requirements and functionality for your business app.</p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Design and Prototype
                    </h4>
                    <p>In order to give you a sense of how your app will look and work, we design wireframes and prototypes.</p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Development
                    </h4>
                    <p> Utilizing development approaches, our team will create your app in a way that swiftly responds to any issues or modifications. </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Tests and Quality Control
                    </h4>
                    <p> Your app will be thoroughly evaluated by us to make sure it is dependable, stable, and simple to use. </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Launch
                    </h4>
                    <p> To guarantee the success of your app, our <span className='grdiant'> top Android app developers </span> assist you with the submission procedure and offer continuous assistance. </p>
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
                <title>Get In Touch With Trusted Mobile App Development Company - Bitswits</title>
                <meta name="description" content="Through innovative techniques, our Android mobile app developers help bring your ideas to life by creating robust applications that are tailor-made" />
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
