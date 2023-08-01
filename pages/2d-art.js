import Head from 'next/head'
import React, { useState, useEffect } from 'react'; import Link from 'next/link';
import banImg from '../public/images/banner/webBanner.png'
import foldimg from '../public/images/services/webSwipe.svg'
import foldensure from '../public/images/services/webEnsure.svg'
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
import styles from '@/styles/Coverage.module.css'
import aheadimage from '../public/images/services/webAhead.svg'
import Image from 'next/image';
import mobilearrow from '../public/images/icons/mobile-arrow.png'
import { Row, Col } from 'react-bootstrap'
import whyStyles from '@/styles/whyServices.module.css'
import icon10 from '../public/images/gaming/gds1.png'
import icon11 from '../public/images/gaming/gds2.png'
import icon12 from '../public/images/gaming/gds3.png'
import icon13 from '../public/images/gaming/gds4.png'
import icon14 from '../public/images/gaming/gds5.png'
import icon15 from '../public/images/gaming/gds6.png'
import icon16 from '../public/images/gaming/gds7.png'
import icon17 from '../public/images/gaming/gds8.png'

import icon18 from '../public/images/gaming/Focus1.png'
import icon19 from '../public/images/gaming/Focus2.png'
import icon20 from '../public/images/gaming/Focus3.png'
import icon21 from '../public/images/gaming/Focus4.png'
import reStyles from '@/styles/MyReason.module.css'
import MyReason from '@/components/MyReason'
import WhyBuild from '@/components/WhyBuild'
import IndusStyle from '@/styles/IndusStyle.module.css'
//Why Icon
import icon24 from '../public/images/gaming/2dicon1.png'
import icon25 from '../public/images/gaming/2dicon2.png'
import icon26 from '../public/images/gaming/2dicon3.png'
import icon27 from '../public/images/gaming/2dicon4.png'
import icon28 from '../public/images/gaming/2dicon5.png'
import icon29 from '../public/images/gaming/2dicon6.png'
import IndustriesInt from '@/components/IndustriesInt'
// Icons
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

export default function art() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>The Best Design and <br /><span className='grdiant'> 2D ART </span> Company!</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Concept Art </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Coloring </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Story Boarding </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Layout Design </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Modelling </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Digital Sculpting </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>2D Animation </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We’ve delivered more than <strong>100+</strong> 2D Apps to <strong>80+</strong> clients in the last <strong>21 years</strong>. What can we do for you?</p> </>


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



    // Swipe component data


      // 2d Development Services

  const ecomDevTtl = <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Why select <span className='grdiant'>Team in Pakistan
  </span>   as your art studio?
  </h2>


  const ecomDevSer = <>
        <Row className={`${whyStyles.soluRow} bg-white mt-5 p-4`}>
            <Col lg={3} className={`${whyStyles.soluRow} p-3`}>
                <Image src={icon18} alt='BitsWits' className='img-fluid' height={60} />
                <h5 className='font16 fontf font-500 line30 mt-3'>
                  Focus on our <br/>customer  <br/> requirement.
                </h5>
            </Col>
            <Col lg={3} className={`${whyStyles.borderleft} p-3`}>
                <Image src={icon19} alt='BitsWits' className='img-fluid' height={60} />
                <h5 className='font16 fontf font-500 line30 mt-3'>
                We have a team
of strong
and creative
2D art designers.
                </h5>
            </Col>
            <Col lg={3} className={`${whyStyles.borderleft} p-3`}>
                <Image src={icon20} alt='BitsWits' className='img-fluid' height={60} />
                <h5 className='font16 fontf font-500 line30 mt-3'>
                Work for all major
platforms like desktop,
consoles, tablets,
mobile and online.
                </h5>
            </Col>
            <Col lg={3} className={`p-3`}>
                <Image src={icon21} alt='BitsWits' className='img-fluid' height={50}/>
                <h5 className='font16 fontf font-500 line30 mt-3'>
                With years of experience
backing our achievements,
we have made a name for
ourselves by our
creative work.
                </h5>
            </Col>
        </Row>
    
  

  </>


    const whytitle = 
    <h2 className='font50 black fontf font-bold line60 black text-center mb-3'>
        <span className='grdiant'>Our Game Services</span> 
    </h2>

    const WhyBuilds = <>
            <Row className={`${whyStyles.soluRow} mt-5`}>
                <Col lg={4} md={4} className={`${whyStyles.soluCol}`}>
                    <div className={`${whyStyles.soluCard}`}>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon24} alt='BitsWits' height={50} className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500 line30'>
                        Game <br/> Designing
                        </h5>
                    </div>
                </Col>
                <Col lg={4} md={4} className={whyStyles.soluCol}>
                    <div className={`${whyStyles.soluCard}`}>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon25} alt='BitsWits'  height={50} className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500 line30 '>
                        Graphics <br/> Designing
                        </h5>
                    </div>
                </Col>
                <Col lg={4} md={4} className={whyStyles.soluCol}>
                    <div className={`${whyStyles.soluCard}`}>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon26} alt='BitsWits'  height={50} className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500 line30'>
                        Character <br/> Designing
                        </h5>
                        
                    </div>
                </Col>
                <Col lg={4} md={4} className={whyStyles.soluCol}>
                    <div className={`${whyStyles.soluCard}`}>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon27} alt='BitsWits'  height={50} className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500'>
                        Character <br/>
    Designing
                        </h5>
                    
                    </div>
                </Col>
                <Col lg={4} md={4} className={whyStyles.soluCol}>
                    <div className={`${whyStyles.soluCard}`}>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon28} alt='BitsWits'  height={50} className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500'>
                        Environment <br/>
    Designing
                        </h5>
                    
                    </div>
                </Col>
                <Col lg={4} md={4} className={whyStyles.soluCol}>
                    <div className={`${whyStyles.soluCard}`}>
                        <div className={`${whyStyles.imgBox}`}>
                            <Image src={icon29} alt='BitsWits'  height={50} className='img-fluid' />
                        </div>
                        <h5 className='font20 fontf font-500'>
                        Digital <br/>
    Printing
                        </h5>
                    
                    </div>
                </Col>
                
            </Row>

    </>




    // MyReason component data

    const reSubtile = <h2 className='font50 black fontf font-bold line60 black'><span className='grdiant'>Why
    UK agencies choose to partner </span> with us</h2>

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
                    Even though our service is a cut above the rest, we remain competitively priced. Our developer rates start from as little as <strong>£20/hr</strong>
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
                infopara={infopara}
                bannerimg={banImg}
            />


            <WhyBuild
                cards={ecomDevSer}
                subtitle={ecomDevTtl}
            />

            <WhyBuild
                cards={WhyBuilds}
                subtitle={whytitle}
            />
            <MyReason
            cards={resCards}
            title='Here are six key reasons'
            subtitle={reSubtile}
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
            />


            <Swipe
                foldimg={foldimg}
                title='We Design Engaging Mobile Apps your users will swipe through from start to finish'
                para='Our goal with each new mobile app design is to keep users engaged and drive higher completion rates. We use data and user research to create intuitive interfaces that drive actions and we follow the latest design trends to ensure your mobile app is visually appealing.'
                subtitle='High Performance User Experience'
                subpara='In our design lab performance always comes first. We ensure that your mobile app is effective and engaging.'
                subtitle2='Swipe that Convert'
                subpara2='In our design lab performance always comes first. We ensure that your mobile app is effective and engaging.'

            />



            <Ahead
                title='Our Mobile App Research Data that puts you ahead of others'
                para='We conduct user research with real people to provide valuable insights that help our clients stay ahead of their competitors. We use various creative methods to gather data and inform product decisions based on the needs and wants of the target audience.'
                subtitle='Laser Focused User Research'
                subpara='We remain laser focused on your target audience to best meet their needs and requirements.'
                subtitle2='Competitive Advantage'
                subpara2='Our research process gives you a competitive advantage and up-to-date market insights.'
                ahead={aheadimage}

            />



            <Ensure
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
