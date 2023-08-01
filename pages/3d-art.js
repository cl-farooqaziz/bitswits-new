import Head from 'next/head'
import React, { useState, useEffect } from 'react'; import Link from 'next/link';
import banImg from '../public/images/banner/webBanner.png'
import foldimg from '../public/images/services/webSwipe.svg'
import foldensure from '../public/images/services/webEnsure.svg'
import { Row, Col } from 'react-bootstrap'
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
import reStyles from '@/styles/MyReason.module.css'
import MyReason from '@/components/MyReason'
import WhyBuild from '@/components/WhyBuild'
import IndusStyle from '@/styles/IndusStyle.module.css'
import whyStyles from '@/styles/whyServices.module.css'
//Why Icon
import icon24 from '../public/images/gaming/3dicons.png'
import icon25 from '../public/images/gaming/2dicon2.png'
import icon26 from '../public/images/gaming/2dicon3.png'
import icon27 from '../public/images/gaming/2dicon4.png'
import icon28 from '../public/images/gaming/2dicon5.png'
import icon29 from '../public/images/gaming/3dicons.png'
import icon30 from '../public/images/gaming/ldiconns.png'
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
import icon18 from '../public/images/gaming/Focus1.png'
import icon19 from '../public/images/gaming/Focus2.png'
import icon20 from '../public/images/gaming/Focus3.png'
import icon21 from '../public/images/gaming/Focus4.png'

export default function dart() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>The Best Design and <br /><span className='grdiant'> 3D ART </span> Company!</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Concept Art </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Modeling </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Texturing </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Rigging </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Animation </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Lightening </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Light Baking </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Render </li>
        </ul>
    </>

    const infopara = <> <p className='black fontf font-medium line30 mt-5'>We’ve delivered more than <strong>100+</strong> 3D Apps to <strong>80+</strong> clients in the last <strong>21 years</strong>. What can we do for you?</p> </>


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


 
 
   
 


 const whytitle = 
 <h2 className='font50 black fontf font-bold line60 black text-center mb-3'>
     <span className='grdiant'>Our Game Services</span> 
 </h2>

 const WhyBuilds = <>
         <Row className={`${whyStyles.soluRow} mt-5`}>
             <Col lg={4} md={4} className={`${whyStyles.soluCol}`}>
                 <div className={`${whyStyles.soluCard}`}>
                     <div className={`${whyStyles.imgBox}`}>
                         <Image src={icon27} alt='BitsWits' height={50} className='img-fluid' />
                     </div>
                     <h5 className='font20 fontf font-500 line30'>
                     Environment <br/>Designing
                     </h5>
                     <p>Our various technique’s allows us to innovate a creative and attractive environment to give your idea a perfect mixture of art style.</p>
                 </div>
             </Col>
             <Col lg={4} md={4} className={whyStyles.soluCol}>
                 <div className={`${whyStyles.soluCard}`}>
                     <div className={`${whyStyles.imgBox}`}>
                         <Image src={icon25} alt='BitsWits'  height={50} className='img-fluid' />
                     </div>
                     <h5 className='font20 fontf font-500 line30 '>
                     Character <br/> Designing
                     </h5>
                     <p>Designing characters and props needs away beyond thinking, and every person in Team in India is creative and think differently from others which make us out of the league and innovators.</p>
                 </div>
             </Col>
             <Col lg={4} md={4} className={whyStyles.soluCol}>
                 <div className={`${whyStyles.soluCard}`}>
                     <div className={`${whyStyles.imgBox}`}>
                         <Image src={icon29} alt='BitsWits' height={50} className='img-fluid' />
                     </div>
                     <h5 className='font20 fontf font-500 line30'>
                     3D <br/> Architect
                     </h5>
                     <p>For the construction business client, we can create exact property models with complete infrastructure around it like buildings, colony, mall, hospitals, and many more with our 3D skills and creativeness.</p>
                 </div>
             </Col>
             <Col lg={4} md={4} className={whyStyles.soluCol}>
                 <div className={`${whyStyles.soluCard}`}>
                     <div className={`${whyStyles.imgBox}`}>
                         <Image src={icon30} alt='BitsWits' height={50} className='img-fluid' />
                     </div>
                     <h5 className='font20 fontf font-500'>
                     Level <br/> Designing
                     </h5>
                     <p>Every game needs different levels to make it interesting and attractive, with our professional artists we are able to create different levels with different features.</p>
                 </div>
             </Col>
             <Col lg={4} md={4} className={whyStyles.soluCol}>
                 <div className={`${whyStyles.soluCard}`}>
                     <div className={`${whyStyles.imgBox}`}>
                         <Image src={icon28} alt='BitsWits' height={50} className='img-fluid' />
                     </div>
                     <h5 className='font20 fontf font-500'>
                     Videos <br/> Designing
                     </h5>
                     <p>You can use our 3D skills to describe your products with the help of videos. We can create eye-catching video to demonstrate your product and catch the attention of clients for you.</p>

                 </div>
             </Col>
             {/* <Col lg={4} md={4} className={whyStyles.soluCol}>
                 <div className={`${whyStyles.soluCard}`}>
                     <div className={`${whyStyles.imgBox}`}>
                         <Image src={icon29} alt='BitsWits' height={50} className='img-fluid' />
                     </div>
                     <h5 className='font20 fontf font-500'>
                     Digital <br/> Printing
                     </h5>
                 
                 </div>
             </Col> */}
             
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
                     Every one of our <strong>1,000+</strong> designers, developers and project managers in the UK, India and Worldwide are directly employed by us, and they work in offices that are owned by us.
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
const whyretitle = <h3 className='text-center font40 font-bold'>3D Game Services </h3>
const whysubtitle =  <h4 className='text-center font30 font-bold'>We'd Like You To Know About </h4>

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
                cards={WhyBuilds}
                title={whyretitle}
                subtitle={whysubtitle}
                expo='expo'
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
