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

const reSubtile = <h2 className='font50 black fontf font-bold line60 black'>Here are <span className='grdiant'>six key reasons</span> why
    UK agencies choose to partner with us</h2>

    const resCards = <>
    <Row className={`${reStyles.soluRow} mt-5`}>
        <Col lg={4} md={6} className={reStyles.soluCol}>
            <div className={`${reStyles.soluCard}`}>
                <h6 className={`${reStyles.count}`}>
                    #1
                </h6>
                <h5 className='font20 fontf font-bold line30'>
                    Competitive rates
                </h5>
                <p>
                    Even though our service is a cut above the rest, we remain competitively priced. Our developer rates start from as little as <strong>$15/hr</strong>
                </p>
                <p>
                    Agencies who work with us enjoy making more profit per client and have a higher throughput of projects.
                </p>
            </div>
        </Col>
        <Col lg={4} md={6} className={reStyles.soluCol}>
            <div className={`${reStyles.soluCard}`}>
                <h6 className={`${reStyles.count}`}>
                    #2
                </h6>
                <h5 className='font20 fontf font-bold line30'>
                    Quality
                </h5>
                <p>
                    We are CMMI level 3 appraised and members of the Agile Alliance, which is your assurance that we have processes and safeguards in place to ensure the delivery of a high quality finished product, each and every time.
                </p>
                <p>
                    Read more about our <strong>CMMI appraisal</strong>.
                </p>
            </div>
        </Col>
        <Col lg={4} md={6} className={reStyles.soluCol}>
            <div className={`${reStyles.soluCard}`}>
                <h6 className={`${reStyles.count}`}>
                    #3
                </h6>
                <h5 className='font20 fontf font-bold line30'>
                    Flexibility
                </h5>
                <p>
                    Our massive permanent workforce is comprised of designers, developers and PMs. You can hire as many or as few of them as you need - on a per project or retained basis.
                </p>
                <p>
                    This flexibility means that you’re never paying for skills and time that you’re not using.
                </p>
            </div>
        </Col>
        <Col lg={4} md={6} className={reStyles.soluCol}>
            <div className={`${reStyles.soluCard}`}>
                <h6 className={`${reStyles.count}`}>
                    #4
                </h6>
                <h5 className='font20 fontf font-bold line30'>
                    In-house expertise
                </h5>
                <p>
                    Every one of our <strong>1,000+</strong> designers, developers and project managers in the UK, USA and Worldwide are directly employed by us, and they work in offices that are owned by us.
                </p>
                <p>
                    This enables us to ensure continuity of knowledge and in fact, many of our team members have been working with the same clients for years - maintaining consistently high quality, reliability and efficiency at all times.
                </p>
            </div>
        </Col>
        <Col lg={4} md={6} className={reStyles.soluCol}>
            <div className={`${reStyles.soluCard}`}>
                <h6 className={`${reStyles.count}`}>
                    #5
                </h6>
                <h5 className='font20 fontf font-bold line30'>
                    Security & confidentiality
                </h5>
                <p>
                    Your contract of engagement is with our UK company (DotSquares Ltd), so our liability to you is governed and protected by UK law.
                </p>
                <p>
                    This is a very important detail that sets us apart from many offshoring companies. Furthermore, all Intellectual Property Rights & source code are yours, forever.
                </p>
            </div>
        </Col>
        <Col lg={4} md={6} className={reStyles.soluCol}>
            <div className={`${reStyles.soluCard}`}>
                <h6 className={`${reStyles.count}`}>
                    #6
                </h6>
                <h5 className='font20 fontf font-bold line30'>
                    The original, and best
                </h5>
                <p>
                    We’ve been servicing UK businesses like yours with offshore teams for <strong>21 years</strong>. In fact, we were one of the first companies to set up this offshore business model, back in 2002. Since then we’ve completed over <strong>20,000 projects</strong> (at last count, and we are still growing!) Our scalability provides you with the best talent backed up by guarantees and consumer protection, whilst our attention to detail, perfectionism and personal service still makes every customer feel very special indeed.
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

    const heading = <h1 className='font65 black fontf font-bold line60'>The Leading  <br /><span className='grdiant'> Internet of Things Development Company! </span></h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Backup and Storage </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Application Hosting </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>E-commerce Applications </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Web Hosting </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Media and Entertainment </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Content Delivery </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Databases </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Search Engine Applications </li>
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

const infopara = <> <p className='black fontf font-medium line30 mt-5'>In 21 years of business we've worked with over <strong>128 Fintech</strong>, banking and finance clients. What can we do for you?</p> </>


    // Swipe component data




    const title23 =
    <span>
        How PWAs Actually Works for user?
        {/* When you open the Website URL on your mobile’s browser, you will have look & feel of mobile app. */}
    </span>

const subtitle32 = <span>How PWAs Actually Works for user?
    </span>



const Workspace = <>
<Row className={`${workStyles.soluRow} mt-5 text-center justify-content-center align-items-center`}>
<h4 className='text-center font30 font-bold'> Thinking Why You Need IoT Solutions? Here’s Why!
</h4>
<p>Some of the benefits and reasons for choosing IoT development are
</p>
    <Col lg={4} md={6} className={workStyles.soluCol}>
        <div className={`${workStyles.soluCard}`}>
            <div className={`${workStyles.imgBox}`}>
                <Image src={icon33} alt='BitsWits' className='img-fluid' />
            </div>
        <h5 className='font20 fontf font-500 line30'>
            Saves Time
        </h5>
        <p>
        IoT Development helps develop business as it gives the user full control to the applications, which is more productive in the long run. It helps individuals to monitor a range of tasks and increase efficiency while reducing the manual labor and cost simultaneously.
        </p>

        </div>
    </Col>
    <Col lg={4} md={6} className={workStyles.soluCol}>
        <div className={`${workStyles.soluCard}`}>
            <div className={`${workStyles.imgBox}`}>
                <Image src={icon34} alt='BitsWits' className='img-fluid' />
            </div>
        <h5 className='font20 fontf font-500 line30'>
            Easy Control
        </h5>
            <p>
            In the traditional developments it was very difficult to control all the functions of the application manually, but now with IoT, things have become easier to handle. Devices and machines now link together to inform users for required tasks as well as execute them wherever necessary.
            </p>
        </div>
    </Col>
</Row>
</>

const Workspace1 = <>
<Row className={`${workStyles.soluRow} mt-3 text-center justify-content-center align-items-center`}>
<h4 className='text-center font30 font-bold'> Connected Room Experience
</h4>
<p>It is an application designed for one of the world's most diverse casino-entertainment providers "Cromwell Caesars Entertainment". The app is used to manage the growing needs of their guests, by incorporating the existing hotel systems into a handheld device, which offers guests an in-house digital access to complimentary and paid services for proactive assistance.
</p>
    <Col lg={4} md={6} className={workStyles.soluCol}>
        <div className={`${workStyles.soluCard}`}>
        <h5 className='font20 fontf font-500 line30'>
        Cromwell Room
Automation App
        </h5>
        <p>
        The purpose of the connected room application is to meet the developing needs of guests, incorporating existing hotel systems into a consolidated handheld device that offers guests the convenience of in-room digital access to complimentary and paid services, as well as proactive guest assistance.
        </p>
        </div>
    </Col>
    <Col lg={4} md={6} className={workStyles.soluCol}>
        <div className={`${workStyles.soluCard}`}>
        <h5 className='font20 fontf font-500 line30'>
        My Medical
Connections
        </h5>
            <p>
            With an ever increasing number of new diseases being discovered everyday and the medical conditions that only put people in distress, there is an increased a need of a social platform that can help people gather as much information as they can and provide them a new way to medication.


            </p>
        </div>
    </Col>
    <Col lg={4} md={6} className={workStyles.soluCol}>
        <div className={`${workStyles.soluCard}`}>
            {/* <div className={`${workStyles.imgBox}`}>
                <Image src={icon34} alt='BitsWits' className='img-fluid' />
            </div> */}
        <h5 className='font20 fontf font-500 line30'>
        GPG (Global Payroll
Gateway Inc.)
        </h5>
            <p>
            GPG is a BFSI (Banking, Finance and Insurance) based company located in Irvine (USA) and Global Payroll Gateway Ltd. of the UK is a wholly owned subsidiary of Global Payroll Gateway, Inc. GPG is not a Card issuer, but works with various card issuers around the world.


            </p>
        </div>
    </Col>
</Row>
</>
// Industry
const Industries = <>
<Row className={`${IndusStyle.soluRow} mt-3 text-center justify-content-center align-items-center`}>
<h4 className='text-center font30 font-bold'>Industries we're proud to serve
</h4>
<p>It is an application designed for one of the world's most diverse casino-entertainment providers "Cromwell Caesars Entertainment". The app is used to manage the growing needs of their guests, by incorporating the existing hotel systems into a handheld device, which offers guests an in-house digital access to complimentary and paid services for proactive assistance.
</p>
    <Col lg={12}>
    <div className={`${IndusStyle.indusblk}`}>
                <ul>
                    <li>
                        <Link href="#"> 
                            <Image src={icon35} alt="Real Estate"/> 
                            <p>Real Estate </p>
                        </Link>
                     </li>
                    <li>
                        <Link href="#">
                            <Image src={icon36} alt="Travel &amp; Hospitality"/>
                            <p> Travel &amp; Hospitality </p>
                        </Link> 
                    </li>
                    <li>
                        <Link href="#">
                            <Image src={icon37} alt="B2B Solutions"/>
                            <p>  B2B Solutions  </p>
                        </Link> 
                    </li>
                    <li>
                        <Link href="#">
                            <Image src={icon38} alt="Travel &amp; Hospitality"/>
                            <p>  Healthcare  </p>
                        </Link> 
                    </li>
                    <li>
                        <Link href="#">
                            <Image src={icon39} alt="Travel &amp; Hospitality"/>
                            <p>   Education & E-Learning   </p>
                        </Link> 
                    </li>
                    <li>
                        <Link href="#">
                            <Image src={icon40} alt="Travel &amp; Hospitality"/>
                            <p>   Banking & Finance  </p>
                        </Link> 
                    </li>
                    <li>
                        <Link href="#">
                            <Image src={icon41} alt="Travel &amp; Hospitality"/>
                            <p>   Startup Solutions   </p>
                        </Link> 
                    </li>
                    <li>
                        <Link href="#">
                            <Image src={icon42} alt="Travel &amp; Hospitality"/>
                            <p>    Startup Solutions </p>
                        </Link> 
                    </li>
                    <li>
                        <Link href="#">
                            <Image src={icon43} alt="Travel &amp; Hospitality"/>
                            <p>   Media & Publishing    </p>
                        </Link> 
                    </li>
                    <li>
                        <Link href="#">
                            <Image src={icon44} alt="Travel &amp; Hospitality"/>
                            <p>   Food & Drink   </p>
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

            />

            <WorkExp
                Workspace={Workspace1}
                expclass='expclasse'
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
