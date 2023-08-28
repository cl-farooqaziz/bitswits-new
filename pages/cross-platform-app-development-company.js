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
import WhyBuild from '@/components/WhyBuild';
import MyExpertise from '@/components/MyExpertise';
// images
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import banImg from '../public/images/banner/cross.svg'
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


export default function crossplateformappdev() {

    // banner component data
    const heading = <h1 className='font65 black fontf font-bold line60'>
        <span className='grdiant'>Cross-Platform App</span> Development Company
    </h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Client-Centric Approach
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Rapid Prototyping
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Seamless Cross-Platform Integration
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Customer satisfaction rate of 99%
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>
                Cost-Efficient Cross-Platform App Development Company
            </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>
        Don't Wait, Innovate! Contact us now and hire the best <span className='grdiant'><strong>cross-platform app developers</strong></span> in the US.
    </p> </>

    // coverage component data

    const expsubtile = <h2 className='font50 black fontf font-bold line60 black'>
        Our Approach for <span className='grdiant'>Mobile App</span> Development
    </h2>

    const expCards = <>
        <Row className={`${expStyles.soluRow} mt-5`}>
            <Col lg={5}>
                <h4 className='font30 font-bold'>Bypass All Tech Barriers with Our Approach to <span className='grdiant'>Cross-Platform App Development</span></h4>
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
                <p>Our <span className='grdiant'><strong>cross-platform app developers</strong></span> utilize frameworks like React Native and Flutter to build once and deploy everywhere. BitsWits focus on designing interactive user interfaces and frameworks that ensure consistency across iOS, Android, the web, and upcoming platforms.
                </p>
                <p>Our team creates unified experiences that smoothly switch between smartphones, tablets, browsers, wearables, and more due to our expertise in platform-agnostic coding. We guarantee high-quality experiences on all devices through thorough testing. Our progressive approach enables your software to cross-platform boundaries and connect with people everywhere. Let us build your application that can run on multiple gadgets.</p>
            </Col>
        </Row>
    </>


    // Why Build

    const whytitle = <h2 className='font50 black fontf font-bold line60 black text-center'>
        Why Hire <span className='grdiant'>Cross-Platform App Developers</span> at BitsWits for Top-Quality Apps?
    </h2>

    const text =
        <p className='text-center'>
            <span className='grdiant'><strong>Cross-platform app development services</strong></span> at BitsWits, allow us to efficiently reach more users across multiple devices while providing a persistent brand experience.
        </p>


    const WhyBuilds = <>

        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon232} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Reaching More Users
                    </h5>
                    <p>
                        <span className='grdiant'><strong>Cross-platform apps</strong></span> work across iOS, Android, web, and other platforms to access a global target market.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Sleek and Smooth Development
                    </h5>
                    <p>
                        <span className='grdiant'><strong>Cross-platform app developers</strong></span> build multiple platforms from one codebase, which reduces development time, resources, and costs.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Consistent Experience
                    </h5>
                    <p>
                        Cross-platform applications allow a unified UI/UX across devices for brand consistency.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Simplified and Easy Maintenance
                    </h5>
                    <p>
                        Our <span className='grdiant'><strong>cross-platform app developers improve</strong></span> updates and bug fixes with a shared codebase issued simultaneously across platforms.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon27} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Investments Built to Last
                    </h5>
                    <p>
                        Apps that are cross-platform may be used on new gadgets and platforms without having to be rebuilt.
                    </p>

                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon28} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Improved Engagement
                    </h5>
                    <p>
                        At BitsWits, professional <span className='grdiant'><strong>cross-platform app developers</strong></span> focus on smooth customer engagement and experience.
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
                        A single cross-platform launch speeds up the process of entering the market and responses from consumers.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Flexibility in Internal Skill Sets
                    </h5>
                    <p>
                        BitsWits is one of the many <span className='grdiant'><strong>cross-platform app development company</strong></span> that helps in effective resource allocation.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Native Device Capabilities
                    </h5>
                    <p>
                        Our <span className='grdiant'><strong>cross-platform app developers</strong></span> unify cross-platform access to native device features, including the camera, GPS, and notification alerts.
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
                    Go Big Without Going Broke with the Best <span className='grdiant'>Cross-Platform App</span> Development Company
                </h2>
                <p>The talented and professional <span className='grdiant'><strong>cross-platform app developers</strong></span> at BitsWits will help you reach all your business goals and objectives.</p>
            </Col>
        </Row>
        <Row className='benefitscard'>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body p-4'>
                        <Row>
                            <Col lg={5}>
                                <Image src={benefitimg1} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                                <h4 className='font20 font-bold'>Build Once Conquer Everywhere</h4>
                                <span className='font14'>
                                    Utilize the knowledge of our <span className='grdiant'><strong>cross-platform app developers</strong></span> to create adaptable codebases that deliver simplified, high-quality experiences on iOS, Android, and other platforms.
                                </span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body p-4'>
                        <Row>
                            <Col lg={5}>
                                <Image src={benefitimg2} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                                <h4 className='font20 font-bold'>Cross-Device Superheroes</h4>
                                <span className='font14'> Our <span className='grdiant'><strong>cross-platform app developers</strong></span> build powerful initiatives that easily jump across platforms due to solid cross-platform designs and strict multi-platform testing procedures.
                                </span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body p-4'>
                        <Row>
                            <Col lg={5}>
                                <Image src={benefitimg3} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                                <h4 className='font20 font-bold'>Your App Ambition and Unlimited Potential</h4>
                                <span className='font14'>
                                    Our expertise across platforms enables us to build smooth app experiences that seem genuine on any device, allowing your idea to take a fly.
                                </span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body p-4'>
                        <Row>
                            <Col lg={5}>
                                <Image src={benefitimg4} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                                <h4 className='font20 font-bold'>The Masters of Multi-Platform</h4>
                                <span className='font14'>
                                    Our skilled <span className='grdiant'><strong>cross-platform app developers</strong></span> use a single codebase to create, test, and deploy high-performing apps across platforms, saving you time and money.
                                </span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
        <p className='text-center'>
            Our qualified <span className='grdiant'><strong>cross-platform app developers</strong></span> can help you achieve your app ideas by offering the best <span className='grdiant'><strong>cross-platform app development services</strong></span>.
        </p>
    </>

    // Why Build

    const Benefits1 = <>
        <Row className='text-center'>
            <Col lg={12}>
                <h4 className='font50 black fontf font-bold line60 black text-center'>One Codebase to Conquer Them All – Our <span className='grdiant'>Cross-Platform</span> Process!</h4>
                <p>Our <span className='grdiant'><strong>cross-platform app development services</strong></span> and process is designed for efficiency, overcoming obstacles, and creating a vision.</p>
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
                        We begin by comprehending the objectives, target audiences, user base, and features of your app.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Requirements Gathering
                    </h4>
                    <p>
                        We work together to define precise platform requirements, UI/UX requirements, and thorough specs.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Design and Prototyping
                    </h4>
                    <p>
                        Wireframing and prototyping are tools we use to create flexible designs that are platform-optimized.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        App Development
                    </h4>
                    <p>
                        Our professionals create cross-platform apps with reusable content and components by using frameworks like React Native.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Testing and QA
                    </h4>
                    <p>
                        Thorough platform testing guarantees that your software offers the best user experience possible everywhere.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Launch and Deployment
                    </h4>
                    <p>
                        We assist you with platform launch across the board and offer continuing support and cross-platform maintenance.
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
                <title>Leading cross platform app development company - Bitswits</title>
                <meta name="description" content="Want to launch your app on all platforms simultaneously? Our cross platform developers make it possible! We design, develop, and deploy apps that work seamlessly." />
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
