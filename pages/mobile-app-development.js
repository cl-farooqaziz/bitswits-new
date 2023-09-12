import Head from 'next/head'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap'
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
//images
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import arrow from '../public/images/icons/arrow.webp'
import banImg from '../public/images/banner/mobileappbanner.png'
//
import benefitimg1 from '../public/images/industryInt/Illustrations-01.svg'
import benefitimg2 from '../public/images/industryInt/Illustrations-02.svg'
import benefitimg3 from '../public/images/industryInt/Illustrations-03.svg'
import benefitimg4 from '../public/images/industryInt/Illustrations-04.svg'
// Why Icon
import icon23 from '../public/images/fyicons/1.png'
import icon24 from '../public/images/fyicons/2.png'
import icon25 from '../public/images/fyicons/3.png'
import icon26 from '../public/images/fyicons/4.png'
import icon27 from '../public/images/fyicons/5.png'
import icon28 from '../public/images/fyicons/6.png'
import icon29 from '../public/images/fyicons/7.png'
import icon30 from '../public/images/fyicons/8.png'
import icon31 from '../public/images/fyicons/9.png'
import icon32 from '../public/images/industryInt/feather-check-circle-svg.png'
import NewDecFy from '@/components/NewDecFy';
//
import news1 from '/public/images/new2/1.webp'
import news2 from '/public/images/new2/2.webp'
import news3 from '/public/images/new2/3.webp'
import news4 from '/public/images/new2/4.webp'
import news5 from '/public/images/new2/5.webp'


export default function mobileappdevelopment() {

    // banner component data
    const heading = <>
        <h1 className='font60 white fontf font-bold mb-4'>
            Forget the Rest and Work with the Best <span className='grdiant font-bold'>Mobile App Development Company!</span>
        </h1>
    </>

    const para = <>

        <p className='font16 fontf font-regular fyColor justify'>
        Our professional <span className='grdiant font-bold'>mobile app developers</span> at BitsWits, have a diverse portfolio of clients. Connect with us today to utilize our expertise in your projects!
        </p>

        <ul className='mb-4 p-0'>



            <li className="font16 fontf font-medium fyColor ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>The go-to <span className='grdiant font-bold'>mobile app developers</span> for popular brands </li>
            <li className="font16 fontf font-medium fyColor ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>2000+ apps launched and counting  </li>
            <li className="font16 fontf font-medium fyColor ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>A highly skilled in-house team of 250+ app experts </li>
            <li className="font16 fontf font-medium fyColor ">
                <Image src={mobilearrow} alt="bitswits" className='img-fluid multi'></Image>Global presence  </li>


        </ul>
    </>


    // coverage component data

    const expsubtile = <h2 className='font50 black fontf font-bold line60 black text-center'>
        <span className='grdiant font-bold'>Approach at BitsWits:</span> We Turn App Ideas into Downloaded Reality!
    </h2>

    const expCards = <>
        <Row className={`${expStyles.soluRow} mt-0`}>
            <Col lg={12}>
                <p className='text-center'>
                We don't just build applications at BitsWits, the <span className='grdiant font-bold'>top mobile app development company</span> in USA. We shape smooth digital experiences. Our <span className='grdiant font-bold'>app developers</span> and creators blend imagination and creativity with empathy to envision every user's tap and swipe. From constructing back ends to pixel-perfect designs, we assure every user of an unforgettable journey. 
                </p>
                <p className='text-center'>
                We create apps that give your brand a dazzling new dimension. Because of our holistic approach, your app emotionally engages users through visuals, motion, and micro-interactions. 
                </p>
            </Col>
        </Row>
    </>


    // Why Build

    const whytitle = <>
        <h3 className='font50 fontf font-bold line60 text-center mb-0 white'>Precision, Performance, Perfection</h3>
        <h2 className='font30 fontf font-bold line30 text-center fyColor mb-3 mt-2'>
        Why Choose BitsWits for <span className='grdiant font-bold'>Building Mobile Applications</span>?
        </h2>
    </>

    const text =
        <p className='fyColor text-center'>
           <span className='grdiant font-bold'> Building your mobile app</span> acts like a technological asset that improves the services of your business, attracting more customers, boosting its success, and letting you shape its trajectory.
        </p>


    const WhyBuilds = <>

        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon23} alt='BitsWits' />
                    </div>
                    <h5 className='font20 fontf white font-bold line30 mb-4 mt-2'>
                    Greater Customer Reach
                    </h5>
                    <p className='white'>
                    Mobile apps allow you to connect with customers anywhere and anytime worldwide.
                    </p>
                    <h5 class="font14">
                        <span>Connect Now</span>
                        <Image src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </h5>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon24} alt='BitsWits' />
                    </div>
                    <h5 className='font20 fontf white font-bold line30 mb-4 mt-2'>
                    Increased Visibility and Brand Recognition
                    </h5>
                    <p className='white'>
                    A prominent icon of your app with an elegant theme color on the user's home screen acts as a constant reminder to interact.
                    </p>
                    <h5 class="font14">
                        <span>Connect Now</span>
                        <Image src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </h5>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon25} alt='BitsWits' />
                    </div>
                    <h5 className='font20 fontf white font-bold line30 mb-4 mt-2'>
                    Drive Sales 
                    </h5>
                    <p className='white'>
                    Mobile applications provide a convenient way for customers to purchase your products and services on the go.
                    </p>
                    <h5 class="font14">
                        <span>Connect Now</span>
                        <Image src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </h5>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon26} alt='BitsWits' />
                    </div>
                    <h5 className='font20 fontf white font-bold line30 mb-4 mt-2'>
                    Customer Loyalty 
                    </h5>
                    <p className='white'>
                    Mobile apps foster ongoing engagement and allow you to deliver customized offers and experiences. 
                    </p>
                    <h5 class="font14">
                        <span>Connect Now</span>
                        <Image src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </h5>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon27} alt='BitsWits' />
                    </div>
                    <h5 className='font20 fontf white font-bold line30 mb-4 mt-2'>
                    Competitive Advantage 
                    </h5>
                    <p className='white'>
                    Innovative mobile apps set you apart, opening new opportunities to engage users, collect data, improve customer service, and drive revenue.
                    </p>
                    <h5 class="font14">
                        <span>Connect Now</span>
                        <Image src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </h5>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon28} alt='BitsWits' />
                    </div>
                    <h5 className='font20 fontf white font-bold line30 mb-4 mt-2'>
                    Improved Customer Service
                    </h5>
                    <p className='white'>
                    Features like in-app chat and customer support assist in resolving issues while enhancing customer satisfaction.
                    </p>
                    <h5 class="font14">
                        <span>Connect Now</span>
                        <Image src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </h5>
                </div>
            </Col>
            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon29} alt='BitsWits' />
                    </div>
                    <h5 className='font20 fontf white font-bold line30 mb-4 mt-2'>
                    Shared Valuable Content
                    </h5>
                    <p className='white'>
                    Mobile applications improve learning experiences by offering interesting content, podcasts, and videos to read and watch. 
                    </p>
                    <h5 class="font14">
                        <span>Connect Now</span>
                        <Image src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </h5>
                </div>
            </Col>

            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon30} alt='BitsWits' />
                    </div>
                    <h5 className='font20 fontf white font-bold line30 mb-4 mt-2'>
                    Future-Proof Your Business
                    </h5>
                    <p className='white'>
                    Cell phones are the present and future of the digital realm, and a mobile app makes your business accessible anytime and anywhere.
                    </p>
                    <h5 class="font14">
                        <span>Connect Now</span>
                        <Image src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </h5>

                </div>
            </Col>

            <Col lg={4} md={6} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon31} alt='BitsWits' />
                    </div>
                    <h5 className='font20 fontf white font-bold line30 mb-4 mt-2'>
                    Simplified Payments
                    </h5>
                    <p className='white'>
                    Mobile applications allow users to instantly pay, donate, and order without any hassle. 
                    </p>
                    <h5 class="font14">
                        <span>Connect Now</span>
                        <Image src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                    </h5>
                </div>
            </Col>

        </Row>
    </>


    // Why Benefits

    const whytitle2 = <>
        <h2 className='font50 fontf font-bold line60 text-center black mb-3'>
        The Perks of Choosing the <span className='grdiant font-bold'>Top Mobile App Development Company!</span>
        </h2>
    </>

    const text2 =
        <p className='black text-center mb-5'>
           The talented and professional <span className='grdiant font-bold'>mobile app developers</span> at BitsWits will fulfill all your goals and needs on schedule.
        </p>


    const Benefits = <>
        <Row className='benefitscard'>
            <Col lg={6}>
                <div className='card mb-4'>
                    <div className='card-body'>
                        <Row className='gy-4'>
                            <Col lg={5}>
                                <Image src={benefitimg1} className='img-fluid pe-3' width={400} height={400}></Image>
                            </Col>
                            <Col lg={7}>
                                <h4 className='font20 lheight24 font-bold'>
                                Custom Solutions for Your Niche Audience
                                </h4>
                                <p className='font14'>
                                Our <span className='grdiant font-bold'>mobile app developers</span> are aware of the distinctive nature of every business. They work closely to understand your objectives, niche and needs to develop a unique app that exactly matches your company's goals.
                                </p>
                                <h5 class="font14 fyColor3">
                                    <span>Connect Now</span>
                                    <Image src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                                </h5>
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
                                <h4 className='font20 lheight24 font-bold'>
                                Ongoing Support and Maintenance
                                </h4>
                                <p className='font14'>
                                BitsWits provide ongoing maintenance and support long after the launch. Our <span className='grdiant font-bold'>app developers</span> regularly optimize and update your application to keep it resilient and competitive over time. 
                                </p>
                                <h5 class="font14 fyColor3">
                                    <span>Connect Now</span>
                                    <Image src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                                </h5>
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
                                <h4 className='font20 lheight24 font-bold'>
                                Meeting Delivery Deadline and Reliability
                                </h4>
                                <p className='font14'>
                                BitsWits is known for its reliability. Our <span className='grdiant font-bold'>app developers</span> understand the value of time and prioritize delivering projects on schedule without compromising quality. 
                                </p>
                                <h5 class="font14 fyColor3">
                                    <span>Connect Now</span>
                                    <Image src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                                </h5>
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
                                <h4 className='font20 lheight24 font-bold'>
                                Better Security and Data Confidentiality
                                </h4>
                                <p className='font14'>
                                Our <span className='grdiant font-bold'>mobile app developers</span> focus on protecting your data and sensitive information. We prioritize confidentiality and ensure to maintain the trust between the user and the company. 
                                </p>
                                <h5 class="font14 fyColor3">
                                    <span>Connect Now</span>
                                    <Image src={arrow} alt='BitsWits' className='ms-2 img-fluid' />
                                </h5>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
        <p className='text-center'>
        Our professional <span className='grdiant font-bold'>app developers</span> have the expertise to put flesh on the bones of your app ideas by providing the best <span className='grdiant font-bold'>mobile app development services</span>
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
                    Our mobile app development process is designed to be innovative, efficient, and transparent. Our <span className='grdiant font-bold'>mobile app development services</span> offer you the following:
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
                        Our <span className='grdiant font-bold'>app developers</span> begin with understanding your objectives, obstacles, and limitations you have in mind for your app.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Gathering Requirements
                    </h4>
                    <p>
                        We'll work with you to define the specific requirements and functionality for your business app.
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
                        Our team builds applications using agile approaches and methodologies for security, speed, and integration that help create your app in a way that swiftly responds to any issues or modifications.
                    </p>
                </div>
                <div className='pb-3'>
                    <h4 className='font20 fw-bold d-flex align-items-center gap-2'>
                        <Image src={icon32} width={20} className='img-fluid' />
                        Testing and Quality Control
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
                        Our <span className='grdiant font-bold'>app developers</span> assist with deployment, guiding you through app store submissions and helping launch your app for success. We offer ongoing support post-launch to guarantee a smooth experience
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
                <title>Top Mobile App Development Company - Bitswits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for professional app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <Banner
                title={heading}
                para={para}
                bgClass="mobile"
                img1={<>
                    

                    </>}
                    img2={<>
                        <div className='newbit2'>
                            <Image src={news1} alt="bitswits" className='img-fluid' />
                            <Image src={news2} alt="bitswits" className='img-fluid' />
                            <Image src={news3} alt="bitswits" className='img-fluid' />
                            <Image src={news4} alt="bitswits" className='img-fluid' />
                            <Image src={news5} alt="bitswits" className='img-fluid' />
                         
                        </div>
    
                    </>}
            />

            <NewDecFy />

            <MyExpertise
                title="EXPERTISE"
                subtitle={expsubtile}
                cards={expCards}
                className='bgColorf'
            />

            <WhyBuild
                title="WHY BITSWITS?"
                cards={WhyBuilds}
                subtitle={whytitle}
                text={text}
                chngColor="bgColor"
            />

            <WhyBuild
                title={<> <span className='fyColor2'>BITSWITS ADVANTAGE</span> </>}
                cards={Benefits}
                subtitle={whytitle2}
                text={text2}
                alignclass="midBuild"
            />

            <OurProject />

            <ClientsThink />

            <Nextproject />

            <Contact />
        </>
    )
}
