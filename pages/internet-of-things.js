import Head from 'next/head'
import React, { useState, useEffect } from 'react'; import Link from 'next/link';
import banImg from '../public/images/banner/internetbanner.png'
import foldimg from '../public/images/services/iot/internet-of-things-01.png'
import foldensure from '../public/images/services/iot/internet-of-things-03.png'
import { Row, Col } from 'react-bootstrap'
//components
import Banner from '@/components/ServicesBanner'
import Coverage from '@/components/Coverage';
import Swipe from '@/components/Swipe';
import Ahead from '@/components/Ahead';
import Ensure from '@/components/Ensure';
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink';
import Nextproject from '@/components/Nextproject';
import Contact from '@/components/Contact';
import styles from '@/styles/Coverage.module.css';
import aheadimage from '../public/images/services/iot/internet-of-things-02.png';
import Image from 'next/image';
import mobilearrow from '../public/images/icons/mobile-arrow.png';

import MyReason from '../components/MyReason';
import reStyles from '@/styles/MyReason.module.css';
import WorkExp from '@/components/WorkExp'
import workStyles from '@/styles/WorkExp.module.css'

import IndustriesInt from '@/components/IndustriesInt'
import IndusStyle from '@/components/IndustriesInt'
// Why Icon
import icon232 from '../public/images/whybuild/pwa-icon1.png'
import icon24 from '../public/images/whybuild/pwa-icon2.png'
import icon25 from '../public/images/whybuild/pwa-icon3.png'
import icon26 from '../public/images/whybuild/pwa-icon4.png'
import icon27 from '../public/images/whybuild/pwa-icon5.png'
import icon28 from '../public/images/whybuild/pwa-icon6.png'
import icon29 from '../public/images/whybuild/pwa-icon7.png'
import icon30 from '../public/images/whybuild/pwa-icon8.png'
import icon31 from '../public/images/whybuild/pwa-icon9.png'
import icon32 from '../public/images/whybuild/pwa-1.png'
import icon33 from '../public/images/wbd-icons/iot-ico1.png'
import icon34 from '../public/images/wbd-icons/iot-ico2.png'
import icon35 from '../public/images/industryInt/idu-1.png'
import icon36 from '../public/images/industryInt/idu-2.png'
import icon37 from '../public/images/industryInt/idu-3.png'
import icon38 from '../public/images/industryInt/idu-4.png'
import icon39 from '../public/images/industryInt/idu-5.png'
import icon40 from '../public/images/industryInt/idu-6.png'
import icon41 from '../public/images/industryInt/idu-7.png'
import icon42 from '../public/images/industryInt/idu-8.png'
import icon43 from '../public/images/industryInt/idu-9.png'
import icon44 from '../public/images/industryInt/idu-10.png'
// import RoomExperience from '../components/RoomExperience'
// import roomStyles from '@/styles/WorkExp.module.css'

export default function internetofthings() {

    const reSubtile = <h2 className='font50 black fontf font-bold line60 black'> Why Do Businesses <span className='grdiant'>Hire IoT Developers</span> at BitsWits? </h2>

    const resCards = <>
        <Row className={`${reStyles.soluRow} mt-5`}>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #1
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                        Modern-Day Pioneers
                    </h5>
                    <p>

                        Our <span className='grdiant font-bold'>IoT developers</span> build and design innovative linked solutions that provide your business with a competitive edge by using the latest IoT platforms and protocols. To create systems that are ready for the future, we constantly adapt to evolving technology.

                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #2
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                    IoT Platform Integration
                    </h5>
                    <p>
                    We connect IoT platforms seamlessly into your existing applications and infrastructure. This integration opens up a world of smart automation, making your work smoother and more innovative.
                    </p>
                  
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #3
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                    Unlimited Scalability
                    </h5>
                    <p>
                    Rapid prototyping and smooth deployment of IoT devices and solutions to suit your expanding business demands are made possible by our agile methodology. 
                    </p>
                  
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #4
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                    Top Notch Security
                    </h5>
                    <p>
                    Our <span className='grdiant font-bold'>IoT development services</span> have total safety built in to protect your systems, networks, and the reliability of your data. We offer dependable, enterprise-grade security.
                    </p>
                 
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #5
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                    Increasing effectiveness and ROI
                    </h5>
                    <p>
                    By automating procedures, boosting productivity, eliminating waste, and providing real-time insights into operations, our <span className='grdiant font-bold'>IoT development services</span> assist with cost reduction.
                    </p>
                 
                </div>
            </Col>
            <Col lg={4} md={6} className={reStyles.soluCol}>
                <div className={`${reStyles.soluCard}`}>
                    <h6 className={`${reStyles.count}`}>
                        #6
                    </h6>
                    <h5 className='font20 fontf font-bold line30'>
                    Engineered to Last Forever
                    </h5>
                    <p>
                    We provide exceptional <span className='grdiant font-bold'>Internet of Things services</span> that are foreseeable and maximize value throughout time, regardless of technological advancements. Our solutions endure throughout eternity.
                    </p>
                </div>
            </Col>
        </Row>
    </>




    const rates = <span>
        Our research data serves as a foundation for making data-informed product decisions. At BitsWits, our <span className='grdiant'>IoT app developers</span> are driven by research data, allowing us to gain deeper insights into your target audience. By understanding their preferences and needs, our <span className='grdiant'>IoT developers</span> create customized solutions that enhance engagement and satisfaction.
    </span>

    const primary = <span>
        Our team of skilled <span className='grdiant'>IoT services providers</span> is committed to optimizing your applications to its fullest potential. Through thorough testing and analysis, we identify areas for improvement and implement strategic optimizations that result in smooth and satisfying user experiences.
    </span>

    const better = <span>
        BitsWits, a trusted <span className='grdiant'>IoT apps development company</span>, brings you an exceptional team of professionals dedicated to delivering outstanding <span className='grdiant'>IoT development services</span> and solutions, ensuring a smooth user experience. Our professional <span className='grdiant'>IoT software developers</span> go the extra mile to test and optimize your applications, continuously seeking improvement opportunities and implementing advanced techniques to boost their performance.
    </span>

    const user5 = <span> Experience Exceptional <span className='grdiant'>IoT Development Services!</span> </span>

    const project = <span>
        Every project is different, and we modify our research methods to suit your specific goals. Whether it’s conducting focus groups, analyzing client feedback, or tracking user behavior through advanced analytics, we have a variety of creative techniques and methods to gather relevant and reliable data for providing top <span className='grdiant'>custom IoT development services.</span>
    </span>

    const research = <span>Overcome all Competitors with Our Top <span className='grdiant'>Custom IoT Development Services!</span> </span>

    const performance = <span> Our professional <span className='grdiant'>IoT services providers</span> focus on creating engaging and personalized mobile experiences that keep users coming back for more. Whether it’s through responsive designs, real-time updates, or offline capabilities, our <span className='grdiant'>IoT app development services</span> improve engagement and drive conversions.  </span>

    const design = <span> BitsWits Improves Experiences with Advanced <span className='grdiant'>IoT Software Development Services!</span> </span>

    const goal = <span> Our <span className='grdiant'>IoT app developers</span> specialize in creating software applications that interact with and control IoT devices, collect and analyze sensor data, and provide a user interface for managing IoT systems. Our team has programming skills, knowledge of IoT platforms and protocols, and expertise in UI/UX design and security considerations.   </span>

    const solutions = <span> The Top <span className='grdiant'>IoT Development Services</span> and Solutions </span>


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Bringing Intelligence to Everyday Objects with the <span className='grdiant'>Internet of Things Development Company</span> </h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image> Design and Deployment of Professional IoT Systems </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image> Prototyping for Customized IoT Hardware </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image> IoT Data Analytics and Visualization in Real-Time </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image> IoT Security and Compliance from start to end </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image> IoT Smooth Integrations with AI, ML, and Blockchain  </li>

        </ul>
    </>


    // coverage component data


    const subtile = <h2 className='font50 black fontf font-bold line60 black'>Our <span className='grdiant'>Mobile App</span> Services</h2>

    const mobile = <div>
        <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
            Mobile App Design
        </h5>
        <div className={styles.servcsList}>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                UI UX Design
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Research & Discovery
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Wireframing & Prototyping
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                iOS + Android Applications
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Post Launch Support
            </Link>
        </div>
    </div>

    const user = <div>
        <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
            User Research
        </h5>
        <div className={styles.servcsList}>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                User Journey & Persona Building
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                User Testing
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Participant Recruitments
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Research Method & Material Development
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Iterative Research
            </Link>
        </div>
    </div>


    const ux = <div>
        <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
            UX Optimization
        </h5>
        <div className={styles.servcsList}>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                User Experience Assessment
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                User & KPIs Data Analysis
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                A/B Testing
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Feature Experimentation
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                UX Iterations
            </Link>
        </div>
    </div>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>  IoT connects various devices, objects, or "things" through the internet. And, we sync devices in an ecosystem through the internet, delivering productivity and efficiency for your business.  </p> </>


    // Swipe component data




    const title23 =
        <span>
            How PWAs Actually Works for user?
            {/* When you open the Website URL on your mobile’s browser, you will have look & feel of mobile app. */}
        </span>

    const subtitle32 = <span>How PWAs Actually Works for user?
    </span>



    const Workspace = <>
        <Row className={`${workStyles.soluRow} text-center justify-content-center align-items-center`}>
            <h4 className='text-center font50 font-bold'> Simplifying the Complex With <span className='grdiant font-bold'>Internet of Things Development</span> Solutions
            </h4>
            <p> The <span className='grdiant font-bold'>IoT developers</span> at BitsWits offer many benefits including: 
            </p>
            <Col lg={4} md={6} className={workStyles.soluCol}>
                <div className={`${workStyles.soluCard}`}>
                    <div className={`${workStyles.imgBox}`}>
                        <Image src={icon33} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Overcoming Operational Complexities
                    </h5>
                    <p className='m-0 p-0'>
                    Our IoT solutions simplify complex systems and processes through real-time visibility, automated control, and data-driven optimization.
                    </p>
                    <p>We help organizations leverage IoT to enhance operations, reduce costs, and overcome legacy complexity.</p>

                </div>
            </Col>
            <Col lg={4} md={6} className={workStyles.soluCol}>
                <div className={`${workStyles.soluCard}`}>
                    <div className={`${workStyles.imgBox}`}>
                        <Image src={icon34} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Enhanced Revenue Generation
                    </h5>
                    <p className='m-0 p-0'>
                    Our <span className='grdiant font-bold'>IoT services</span> enable organizations to create new income streams, business models, and pricing schemes by using data from linked devices and sensors. 
                    </p>
                    <p>It's time to open up new earning opportunities!</p>
                </div>
            </Col>
        </Row>
    </>

    const Workspace1 = <>
        <Row className={`${workStyles.soluRow} text-center justify-content-center align-items-center`}>
            <h4 className='text-center font50 font-bold'> Innovative Examples of <span className='grdiant'>Connected Devices</span>
            </h4>
            <p>
            Hire BitsWits, and experience the real-world applications of Innovative Connected Devices, ranging from smart homes to industrial solutions, healthcare industry, and many more. 
            </p>
            <Col lg={4} md={6} className={workStyles.soluCol}>
                <div className={`${workStyles.soluCard}`}>
                    <h5 className='font20 fontf font-medium line30'>
                    Connecting Physical and Digital Worlds
                    </h5>
                    <p>
                    <span className='grdiant font-bold'>Our IoT development</span> mutually links the real and virtual worlds using real-time data from sensors and other gadgets to give intelligent monitoring, automation, and control for manufacturing, supply chains, infrastructure, and other areas.
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={workStyles.soluCol}>
                <div className={`${workStyles.soluCard}`}>
                    <h5 className='font20 fontf font-medium line30'>
                    Increasing IoT Efficiency
                    </h5>
                    <p>
                    Our <span className='grdiant font-bold'>IoT development services</span> boosts productivity by collecting knowledge from connected devices and resources. We provide specialized <span className='grdiant font-bold'>IoT services</span> for organizations that increase productivity, cut costs, prevent downtime, and offer them a competitive edge.


                    </p>
                </div>
            </Col>
            <Col lg={4} md={6} className={workStyles.soluCol}>
                <div className={`${workStyles.soluCard}`}>
                    {/* <div className={`${workStyles.imgBox}`}>
                <Image src={icon34} alt='BitsWits' className='img-fluid' />
            </div> */}
                    <h5 className='font20 fontf font-medium line30'>
                    Custom Solutions for Enhanced Efficiency
                    </h5>
                    <p>
                    Our custom IoT solutions are meticulously designed to boost operational efficiency for businesses of all scales. Our <span className='grdiant font-bold'>IoT solutions</span> help you become really good at running your business in today's fast-changing world.

                    </p>
                </div>
            </Col>
        </Row>
    </>
    // Industry
    const Industries = <>
        <Row className={`${IndusStyle.soluRow} text-center justify-content-center align-items-center`}>
            <h4 className='text-center font50 font-bold'> The <span className='grdiant font-bold'>Industries</span> Where We Make an Impact!
            </h4>
            <p>
            Through the creation of innovative internet of things development, we are delighted to assist and empower several sectors. Our <span className='grdiant font-bold'>IoT services</span> support a variety of industries in upgrading processes, and increasing production.
            </p>
            <Col lg={12}>
                <div className={`${IndusStyle.indusblk}`}>
                    <ul>
                        <li>
                            <Link href="#">
                                <Image src={icon35} alt="Real Estate" />
                                <p>Real Estate</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon36} alt="Travel &amp; Hospitality" />
                                <p> Travel and Hospitality </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon37} alt="B2B Solutions" />
                                <p>  B2B Solutions   </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon38} alt="Travel &amp; Hospitality" />
                                <p>  B2C Solutions  </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon39} alt="Travel &amp; Hospitality" />
                                <p>   Education and E-Learning   </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon40} alt="Travel &amp; Hospitality" />
                                <p>   Banking and Finance   </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon41} alt="Travel &amp; Hospitality" />
                                <p>   Startup Solutions   </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon42} alt="Travel &amp; Hospitality" />
                                <p>   Media and Publishing  </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon43} alt="Travel &amp; Hospitality" />
                                <p>  Food Ordering Solutions     </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon44} alt="Travel &amp; Hospitality" />
                                <p>   Healthcare  </p>
                            </Link>
                        </li>


                        <li>
                            <Link href="#">
                                <Image src={icon41} alt="Travel &amp; Hospitality" />
                                <p>   Ticket Booking Solutions   </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon42} alt="Travel &amp; Hospitality" />
                                <p>   Automotive Solutions   </p>
                            </Link>
                        </li>


                    </ul>
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
                bannerimg={banImg}
                infopara={infopara}
            />

            <MyReason
                title="Reasons"
                subtitle={reSubtile}
                cards={resCards}
            />

            <WorkExp
                Workspace={Workspace}
                expclass='bgcolor'
                myExpertise = 'myExpertise'

            />

            <WorkExp
                Workspace={Workspace1}
                expclass='bgcolor'
             
               
            />

            <IndustriesInt
                IndustriesInt={Industries}
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
                title={design}
                para={goal}
                subtitle={solutions}
                subpara='At BitsWits, we provide developing and deploying IoT solutions, including hardware development, connectivity integration, data analytics, and application development. Our experts provide end-to-end services that enable smooth connectivity, data-driven insights, and efficient management of IoT ecosystems.'
                subtitle2='Experience a Smooth User Experience'
                subpara2={performance}

            /> */}



            {/* <Ahead
                title={research}
                para='At BitsWits, our team conducts thorough research and gathers valuable user feedback for building your custom that provides you with a competitive edge. Our team combines a range of creative and innovative methods to collect information and inform your product decisions, ensuring your product meets the desires of your target audience.'
                subtitle='Utilizing Data for Informed Product Decision'
                subpara='As the leading IoT development services company in the US, BitsWits stands out for its track record of delivering innovative solutions. The data we collect provides you with valuable insights that guide your product strategy. From identifying market trends to understanding user expectations, we provide quality Internet of Things services with a data-driven approach that lets you stand out from the competition. '
                subtitle2='Improved Research Methods for Targeted Results'
                subpara2={project}
                ahead={aheadimage}

            /> */}


            {/* 
            <Ensure
                foldimg={foldensure}
                title={user5}
                para={better}
                subtitle='Continuous Improvement and Optimal Results'
                subpara={primary}
                subtitle2='Data-Driven Decision Making!'
                subpara2={rates}



            /> */}
            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
