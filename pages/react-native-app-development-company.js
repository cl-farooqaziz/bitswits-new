import Head from 'next/head'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap'
//css
import styles from '@/styles/Coverage.module.css'
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
//image
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import banImg from '../public/images/banner/reactnative.svg'
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


export default function reactappdeveloment() {

    // banner component data
    const heading = <h1 className='font65 black fontf font-bold line60'>
        Innovate On Any Device with Top <span className='grdiant'>React Native App Development Company</span> In USA
    </h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                2000+ apps launched and counting
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                99% customer satisfaction rate
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                250+ in-house React Native developers
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Transparent and competitive pricing
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Building apps for iOS, Android, and Cross-Platform
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Proven ability to scale apps for high user loads
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Strong commitment to app data security and privacy
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Worldwide presence, serving clients across the globe
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Extensive experience across various industries and niches
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Rigorous testing protocols ensuring optimal functionality
            </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>
        Our professional <span className='grdiant font-bold'> React Native app developers</span> at BitsWits, have a diverse portfolio of clients. Connect with us today to utilize our expertise in your projects!
    </p> </>


    // coverage component data

    const expsubtile = <h2 className='font50 black fontf font-bold line60 black'>
        The Approach We Utilize at BitsWits for <span className='grdiant'>React Native App Development</span>
    </h2>

    const expCards = <>
        <Row className={`${expStyles.soluRow} mt-5`}>
            <Col lg={5}>
                <h4 className='font30 font-bold'>Our Approach for Flutter App</h4>
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
                    Our approach to React Native app development is defined by expertise and innovation. We stay at the forefront of technology trends to develop robust mobile applications. We prioritize open communication with our clients, making sure their ideas and feedback guide our development process.
                </p>
                <p>
                    With an emphasis on quality, flexibility, and user-centric design, our approach at BitsWits distinguishes us in the realm of React Native app development.
                </p>
            </Col>
        </Row>
    </>


    // Why Build

    const whytitle = <h2 className='font50 black fontf font-bold line60 black text-center'>
        Why is There a Need for <span className='grdiant'>React Native Apps</span>?
    </h2>

    const text =
        <p className='text-center'>
            <span className='grdiant font-bold'>React Native app development services</span> provide substantial savings in terms of development time, effort, and cost and enable the building of high-quality Android and iOS apps.
        </p>


    const WhyBuilds = <>

        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon232} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Cross-Platform Saves Cost and Time
                    </h5>
                    <p>
                        React native apps allow building one application that runs on both iOS and Android from a single JavaScript codebase.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Better and Native Performance
                    </h5>
                    <p>
                        For near-native performance, React Native compiles native code. It doesn’t have hybrid lag like other cross-platform options.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Reusability
                    </h5>
                    <p>
                        Development is accelerated by the ability to reuse a significant amount of code, such as business logic and APIs, between iOS and Android.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Live Reloading
                    </h5>
                    <p>
                        Live reloading speeds the development process by allowing code updates to be made instantly.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Open-Source Framework
                    </h5>
                    <p>
                        At BitsWits, our team utilizes the active open source React Native framework to build applications without bugs.
                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Corporate Backed
                    </h5>
                    <p>
                        Developed and backed by talented individuals in the field, including Facebook, Microsoft, Shopify, and others.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon29} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Familiar Tools
                    </h5>
                    <p>
                        <span className='grdiant font-bold'>React native app developers</span> build apps utilizing well-known React pattern libraries and common native technologies like Xcode, Android Studio, etc.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Future-Proof Your Business
                    </h5>
                    <p>
                        Cell phones are the present and future of the digital realm, and a mobile app makes your business accessible anytime and anywhere.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Built-In Platform Accessibility
                    </h5>
                    <p>
                        The built-in mobile platform APIs allow for the straightforward incorporation of features like camera, location, and storage.
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
                    The Benefits to Jumpstart Your Journey with <span className='grdiant'>React Native App Development Company</span>
                </h2>
                <p>
                    The professional <span className='grdiant font-bold'>Reactive Native app developers</span> at BitsWits will fulfill all your goals and demands on schedule.
                </p>
            </Col>
        </Row>
        <Row className='benefitscard'>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body'>
                        <Row className='gy-4'>
                            <Col lg={5}>
                                <Image src={benefitimg1} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                                <h4 className='font20 font-bold'>
                                    Experience and Expertise
                                </h4>
                                <span className='font14'>
                                    Our <span className='grdiant font-bold'>React native app developers</span> provide the best-quality services as per their expertise and experience, which ensures excellence in all aspects of your application.
                                </span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body'>
                        <Row className='gy-4'>
                            <Col lg={5}>
                                <Image src={benefitimg2} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                                <h4 className='font20 font-bold'>
                                    Proven Track Record
                                </h4>
                                <span className='font14'>
                                    <span className='grdiant font-bold'>React Native app developers</span> at BitsWits have successfully delivered complicated projects for satisfied clients across multiple industries, which portrays their capabilities and abilities.
                                </span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body'>
                        <Row className='gy-4'>
                            <Col lg={5}>
                                <Image src={benefitimg3} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                                <h4 className='font20 font-bold'>
                                    Swift Speed
                                </h4>
                                <span className='font14'>
                                    For quick prototypes and prompt delivery, our <span className='grdiant font-bold'>React native app developers</span> efficiently utilize React Native development features. Now is the time to say <strong><i>NO</i></strong> to all the slower and older applications.
                                </span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body'>
                        <Row className='gy-4'>
                            <Col lg={5}>
                                <Image src={benefitimg4} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                                <h4 className='font20 font-bold'>
                                    On-Going Support
                                </h4>
                                <span className='font14'>
                                    The team at BitsWits not only delivers the app but provides maintenance, improvements, and lifetime support. Isn’t that all you need?
                                </span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
        <p className='text-center'>
            Our professional <span className='grdiant font-bold'>native app developers</span> have the expertise to put a spark in your app ideas by providing the best <span className='grdiant font-bold'>react native app development services</span>.
        </p>
    </>


    // Why Build

    const Benefits1 = <>
        <Row className='text-center'>
            <Col lg={12}>
                <h4 className='font50 black fontf font-bold line60 black text-center'>
                    The <span className='grdiant'>Mobile App Development</span> Process at BitsWits!
                </h4>
                <p>
                    The <span className='grdiant font-bold'>React native app development</span> process at BitsWits is designed to be innovative, efficient, and transparent. <span className='grdiant font-bold'>React native app development services</span> offer you the following:
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
                        Our <span className='grdiant font-bold'>React native app developers</span> begin with understanding your project goals, technical needs, and limitations you have in mind for your app. Feasibility is assessed here.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Gathering Requirements
                    </h4>
                    <p>
                        The process of gathering requirements involves defining requirements for app functionality, UI/UX, target devices, and platforms.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Design and Prototyping
                    </h4>
                    <p>
                        In order to give you a sense of how your app will look and work, we design wireframes and prototypes.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Development
                    </h4>
                    <p>
                        The app is created utilizing reusable components and cross-platform code with a minimum amount of platform-specific code, utilizing the React Native framework.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Testing & Quality Control
                    </h4>
                    <p>
                        We thoroughly test your app to ensure it is reliable, stable, and easy to use. Our QA process checks functionality, UI, cross-platform compatibility, security, and compliance.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Launch and Deployment
                    </h4>
                    <p>
                        <span className='grdiant font-bold'>React native app developers</span> assist with deployment, guiding you through app store submissions and helping launch your app for success. We offer ongoing support post-launch to guarantee a smooth experience.
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
                <title>Top React Native App Development Company - Bitswits</title>
                <meta name="description" content="Want a team of experienced React Native App Developers? We've got them! Whether you're a start-up or an established business, our developers are equipped." />
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
                alignclass="midBuild"
                expo='expo'
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
