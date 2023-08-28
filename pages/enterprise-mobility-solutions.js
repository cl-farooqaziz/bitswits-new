import Head from 'next/head'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap'
//css
import workStyles from '@/styles/WorkExp.module.css'
//components
import Banner from '@/components/ServicesBanner'
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import WorkExp from '@/components/WorkExp'
import IndustriesInt from '@/components/IndustriesInt'
import IndusStyle from '@/components/IndustriesInt'
//image
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import banImg from '../public/images/banner/enterprisebanner.png'
// Why Icon
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
import icon45 from '../public/images/industryInt/esicon1.png'
import icon46 from '../public/images/industryInt/esicon2.png'
import icon47 from '../public/images/industryInt/esicon3.png'
import icon48 from '../public/images/industryInt/esicon4.png'
import icon49 from '../public/images/industryInt/enterprise-solution-1.png'


export default function enterprisemobilitysolutions() {

    const heading = <h1 className='font65 black fontf font-bold line60'>
        Paving The Way To Success For Your Business With Leading <span className='grdiant'>Enterprise Mobility Solutions Company</span>
    </h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} className='img-fluid multi'></Image>
                The go-to <span className='grdiant font-bold'>enterprise mobility management services</span> for businesses
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} className='img-fluid multi'></Image>
                Seamless Integration with Existing Systems
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} className='img-fluid multi'></Image>
                Scalable Solutions for Future Growth
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} className='img-fluid multi'></Image>
                99% user satisfaction rate
            </li>
            <li className="font16 fontf font-medium black ">
                <Image src={mobilearrow} className='img-fluid multi'></Image>
                24/7 round-the-clock customer support
            </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>
        Ready to mobilize our business? Let's talk <span className='grdiant font-bold'>enterprise mobility solutions</span> now!
    </p> </>

    // coverage component data

    const Workspace = <>
        <Row className={`${workStyles.soluRow} mt-5 text-center justify-content-center align-items-center`}>
            <h4 className='text-center font50 font-bold mb-5'>Our Path and Process to Building Top <span className='grdiant'>Enterprise Mobility Solutions</span>!</h4>
            <Col lg={12} md={12} className={workStyles.soluCol}>
                <Image src={icon49} alt='BitsWits' className='img-fluid' />
            </Col>
        </Row>
    </>

    const Workspace1 = <>
        <Row className={`${workStyles.soluRow} mt-3 text-center justify-content-center align-items-center`}>
            <h4 className='text-center font50 font-bold mb-5'>
                How Can Our <span className='grdiant'>Enterprise Mobility Services</span> Help Your Business?
            </h4>

            <Col lg={3} md={6} className={workStyles.soluCol}>
                <div className={`${workStyles.soluCard}`}>
                    <div className={`${workStyles.imgBox}`}>
                        <Image src={icon45} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        The Mobile Multipliers
                    </h5>
                    <p className='font14 fontf'>Our <span className='grdiant font-bold'>enterprise mobility services</span> help multiply the power of your workforce and operations through smart mobile tech.</p>
                </div>
            </Col>
            <Col lg={3} md={6} className={workStyles.soluCol}>
                <div className={`${workStyles.soluCard}`}>
                    <div className={`${workStyles.imgBox}`}>
                        <Image src={icon46} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        Strategic Insights
                    </h5>
                    <p className='font14 fontf'>BitsWits, the leading <span className='grdiant font-bold'>enterprise mobility solutions company</span>, provides data-driven knowledge to help in decision-making.</p>
                </div>
            </Col>
            <Col lg={3} md={6} className={workStyles.soluCol}>
                <div className={`${workStyles.soluCard}`}>
                    <div className={`${workStyles.imgBox}`}>
                        <Image src={icon47} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        The Monetizers of Mobility
                    </h5>
                    <p className='font14 fontf'>With the help of our strategic <span className='grdiant font-bold'>enterprise mobility solutions</span>, produce more money and improve productivity.</p>
                </div>
            </Col>
            <Col lg={3} md={6} className={workStyles.soluCol}>
                <div className={`${workStyles.soluCard}`}>
                    <div className={`${workStyles.imgBox}`}>
                        <Image src={icon48} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                        The 5G Trailblazers
                    </h5>
                    <p className='font14 fontf'>Our innovative 5G and enterprise mobile solutions enhance efficiency, resulting in accelerated revenue growth</p>
                </div>
            </Col>
        </Row>
    </>

    // Industry
    const Industries = <>
        <Row className={`${IndusStyle.soluRow} mt-3 text-center justify-content-center align-items-center`}>
            <h4 className='text-center font50 font-bold'>
                The <span className='grdiant'>Domains and Markets</span> We Serve with Pride
            </h4>
            <p>
                With our <span className='grdiant font-bold'>enterprise mobility management services</span>, we proudly serve a variety of sectors. Leading businesses hire us to help them with our <span className='grdiant font-bold'>enterprise mobile solutions</span> to prosper in the future.
            </p>
            <Col lg={12}>
                <div className={`${IndusStyle.indusblk}`}>
                    <ul className='p-0'>
                        <li>
                            <Link href="#">
                                <Image src={icon35} alt="BitsWits" />
                                <p>Real Estate</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon36} alt="BitsWits" />
                                <p> Travel and Hospitality </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon37} alt="BitsWits" />
                                <p>B2B Solutions</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon38} alt="BitsWits" />
                                <p>Healthcare</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon39} alt="BitsWits" />
                                <p>Education and E-Learning</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon40} alt="BitsWits" />
                                <p>Banking and Finance</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon41} alt="BitsWits" />
                                <p>Startup Solutions</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon43} alt="BitsWits" />
                                <p>Media and Publishing</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon44} alt="BitsWits" />
                                <p>Food Ordering Solutions</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon42} alt="BitsWits" />
                                <p>B2C Solutions</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon42} alt="BitsWits" />
                                <p>Ticket Booking Solutions</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Image src={icon42} alt="BitsWits" />
                                <p>Automotive Solutions</p>
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
                <title>Flourish Using the Best Enterprise Mobility Solutions</title>
                <meta name="description" content="Get the best enterprise mobility services with BitsWits where professionals create and implement specialised cross-platform mobility solutions that help revolutionise businesses." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <Banner
                title={heading}
                para={para}
                bannerimg={banImg}
                infopara={infopara}
            />

            <WorkExp
                Workspace={Workspace}
            />

            <WorkExp
                Workspace={Workspace1}
            />

            <IndustriesInt
                IndustriesInt={Industries}
            />

            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
