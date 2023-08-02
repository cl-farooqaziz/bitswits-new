import Head from 'next/head'
import React, { useState, useEffect } from 'react'; import Link from 'next/link';
import banImg from '../public/images/banner/webBanner.png'
// import foldimg from '../public/images/services/webSwipe.svg'
// import foldensure from '../public/images/services/webEnsure.svg'
// import Coverage from '@/components/Coverage';
// import Swipe from '@/components/Swipe';
// import Ahead from '@/components/Ahead';
// import Ensure from '@/components/Ensure';
// import styles from '@/styles/Coverage.module.css'
// import aheadimage from '../public/images/services/webAhead.svg'
// import MyReason from '@/components/MyReason';
// import Milestones from '@/components/Milestones';
// import milStyles from '@/styles/Milestones.module.css'
// import icon28 from '../public/images/crmDev/crm-ico5.png'
// import icon29 from '../public/images/crmDev/crm-ico6.png'
import { Row, Col, Container } from 'react-bootstrap'
//components
import MarketingExpertise from '@/components/MarketingExpertise';
import dataStyles from '@/styles/Marketingexpertise.module.css'
import Banner from '@/components/ServicesBanner'

import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import whyStyles from '@/styles/whyServices.module.css'
import reStyles from '@/styles/MyReason.module.css'

import Image from 'next/image';
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//
import WhyBuild from '@/components/WhyBuild';
import CrmExamples from '@/components/CrmExamples';
import exmplstyles from '@/styles/CrmExamples.module.css'


import CRMExperts from '@/components/CRMExperts';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import crmstyles from '@/styles/CRMExperts.module.css'
//
// 
import mobilearrow1 from '../public/images/Include/star.jpg'
import milestones1 from '../public/images/benefits/realestate-icon-1.jpg'
import milestones2 from '../public/images/benefits/realestate-icon-2.jpg'
import milestones3 from '../public/images/benefits/realestate-icon-3.jpg'
import milestones4 from '../public/images/benefits/realestate-icon-4.jpg'
import milestones5 from '../public/images/benefits/realestate-icon-5.jpg'
import milestones6 from '../public/images/benefits/realestate-icon-6.jpg'
import milestones7 from '../public/images/benefits/realestate-icon-7.jpg'
import milestones8 from '../public/images/benefits/realestate-icon-8.jpg'
import milestones9 from '../public/images/benefits/realestate-icon-9.jpg'
import siteminder from '../public/images/benefits/siteminder-logo.png'



import slide1 from '../public/images/crmDev/crmTesti1.png'
import slide2 from '../public/images/crmDev/crmTesti2.png'
import slide3 from '../public/images/crmDev/crmTesti3.png'
import slide4 from '../public/images/crmDev/crmTesti4.png'
import slide5 from '../public/images/crmDev/crmTesti5.png'
import slide6 from '../public/images/crmDev/crmTesti6.png'
//
//
import travel1 from '../public/images/benefits/t-1.jpg'
import travel2 from '../public/images/benefits/t-2.jpg'
import travel3 from '../public/images/benefits/t-3.jpg'
import travel4 from '../public/images/benefits/t-4.jpg'

//Why Icon
import travel5 from '../public/images/benefits/t-5.jpg'
import travel6 from '../public/images/benefits/t-6.jpg'
import travel7 from '../public/images/benefits/t-7.jpg'
import travel8 from '../public/images/benefits/t-8.png'


import icon30 from '../public/images/benefits/realblk-1.jpg'
import icon31 from '../public/images/benefits/realblk-2.jpg'
import icon32 from '../public/images/benefits/realblk-3.jpg'
import icon33 from '../public/images/benefits/realblk-4.jpg'
import icon34 from '../public/images/benefits/realblk-5.jpg'
import icon35 from '../public/images/benefits/realblk-6.jpg'
import icon36 from '../public/images/benefits/realblk-7.jpg'
import icon37 from '../public/images/benefits/realblk-8.jpg'

export default function travelhospitality() {
    var crmExamples = {
        dots: false,
        arrows: true,
        autoplay: true,
        speed: 3000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>The Best Design and <br /><span className='grdiant'> TRAVEL & HOSPITALITY </span> Company!</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Hotel Booking Engine </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Flight Booking Engine </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Car Booking (Rental/Hire) </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>White Label Application </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Transfers </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Travel Insurance </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Hotel Extras </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Cruise Booking Engine </li>
        </ul>
    </>


    // coverage component data


    // const subtile = <h2 className='font50 black fontf font-bold line60 black'>Our <span className='grdiant'>Mobile App</span> Services</h2>

    // const mobile = <div>
    //     <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
    //         Mobile App Design
    //     </h5>
    //     <div className={styles.servcsList}>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             UI UX Design
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Research & Discovery
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Wireframing & Prototyping
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             iOS + Android Applications
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Post Launch Support
    //         </Link>
    //     </div>
    // </div>

    // const user = <div>
    //     <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
    //         User Research
    //     </h5>
    //     <div className={styles.servcsList}>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             User Journey & Persona Building
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             User Testing
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Participant Recruitments
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Research Method & Material Development
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Iterative Research
    //         </Link>
    //     </div>
    // </div>


    // const ux = <div>
    //     <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
    //         UX Optimization
    //     </h5>
    //     <div className={styles.servcsList}>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             User Experience Assessment
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             User & KPIs Data Analysis
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             A/B Testing
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             Feature Experimentation
    //         </Link>
    //         <Link href='#' className='font14 fontf font-semibold mt-1 black'>
    //             UX Iterations
    //         </Link>
    //     </div>
    // </div>



    // Swipe component data



  // Exmple component data

  const exmplTitle = <> <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>Travel & Hospitality</span> solutions
  </h2> </>

  const exmplSlider = <>
      <Slider {...crmExamples} className={` ${exmplstyles.crmSlider}  crmSlider`}>
          <div className={exmplstyles.strpImg}>
              <div className={exmplstyles.topTitle}>Seizethemarket</div>
              <div className={exmplstyles.topImg}>
                  <Image alt="bitswits" src={slide1} className="img-fluid" />
              </div>
          </div>
          <div className={exmplstyles.strpImg}>
              <div className={exmplstyles.topTitle}>Event Calendar</div>
              <div className={exmplstyles.topImg}>
                  <Image alt="bitswits" src={slide2} className="img-fluid" />
              </div>
          </div>
          <div className={exmplstyles.strpImg}>
              <div className={exmplstyles.topTitle}>Journey CRM</div>
              <div className={exmplstyles.topImg}>
                  <Image alt="bitswits" src={slide3} className="img-fluid" />
              </div>
          </div>
          <div className={exmplstyles.strpImg}>
              <div className={exmplstyles.topTitle}>YouCall-it.com</div>
              <div className={exmplstyles.topImg}>
                  <Image alt="bitswits" src={slide4} className="img-fluid" />
              </div>
          </div>
          <div className={exmplstyles.strpImg}>
              <div className={exmplstyles.topTitle}>Risk Assessor Lite</div>
              <div className={exmplstyles.topImg}>
                  <Image alt="bitswits" src={slide5} className="img-fluid" />
              </div>
          </div>
          <div className={exmplstyles.strpImg}>
              <div className={exmplstyles.topTitle}>ICAEW Members</div>
              <div className={exmplstyles.topImg}>
                  <Image alt="bitswits" src={slide6} className="img-fluid" />
              </div>
          </div>
      </Slider>
  </>

  const exmplText = <> <span>Let's talk about your Real Estate requirements </span> </>


 // CRMExpert component data

 const crmtitle = <h2 className='font50 black fontf font-bold line60 black text-center'>Additional 
 <span className='grdiant'> Benefits</span> 
</h2>

const crmCards = <>

 <Row className={`${crmstyles.soluRow}`}>
     <Col lg={6} className={crmstyles.soluCol}>
         <div className={`${crmstyles.soluCard}`}>
             <div className={`${crmstyles.imgBox}`}>
                 <Image src={icon30} alt='BitsWits' className='img-fluid' />
             </div>
             <h5>
             Enquiry System
            </h5>
         </div>
     </Col>
     <Col lg={6} className={crmstyles.soluCol}>
         <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBR} pb-0`}>
             <div className={`${crmstyles.imgBox}`}>
                 <Image src={icon31} alt='BitsWits' className='img-fluid' />
             </div>
             <h5>
             Travel Package Reservation
             </h5>

         </div>
     </Col>
     <Col lg={6} className={crmstyles.soluCol}>
         <div className={`${crmstyles.soluCard}`}>
             <div className={`${crmstyles.imgBox}`}>
                 <Image src={icon32} alt='BitsWits' className='img-fluid' />
             </div>
             <h5>
             Online Booking
             </h5>
         </div>
     </Col>
     <Col lg={6} className={crmstyles.soluCol}>
         <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBR}`}>
             <div className={`${crmstyles.imgBox}`}>
                 <Image src={icon33} alt='BitsWits' className='img-fluid' />
             </div>
             <h5>
             WAP Portal
             </h5>
         </div>
     </Col>
     <Col lg={6} className={crmstyles.soluCol}>
         <div className={`${crmstyles.soluCard}`}>
             <div className={`${crmstyles.imgBox}`}>
                 <Image src={icon34} alt='BitsWits' className='img-fluid' />
             </div>
             <h5>
             Enquiry System
             </h5>
         </div>
     </Col>
     <Col lg={6} className={crmstyles.soluCol}>
         <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBR}`}>
             <div className={`${crmstyles.imgBox}`}>
                 <Image src={icon35} alt='BitsWits' className='img-fluid' />
             </div>
             <h5>
             Fare Comparison
             </h5>

         </div>
     </Col>
     <Col lg={6} className={crmstyles.soluCol}>
         <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBB}`}>
             <div className={`${crmstyles.imgBox}`}>
                 <Image src={icon36} alt='BitsWits' className='img-fluid' />
             </div>
             <h5>
             Web 2.O
             </h5>
         </div>
     </Col>
     <Col lg={6} className={crmstyles.soluCol}>
         <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBR} ${crmstyles.soluCardBB}`}>
             <div className={`${crmstyles.imgBox}`}>
                 <Image src={icon37} alt='BitsWits' className='img-fluid' />
             </div>
             <h5>
             Web Portal
             </h5>
         </div>
     </Col>
 </Row>
</>

  // Build component data

  const whytitle = <h2 className='font50 black fontf font-bold line60 black text-center mb-3'>
  <span className='grdiant'>Travel & Hospitality</span> Solutions We Provide
</h2>

const WhyBuilds = <>
  <Row className={`${whyStyles.soluRow} mt-5`}>
      <Col lg={3} md={4} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={travel1} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Hotel Booking Engine

              </h5>
         

          </div>
      </Col>
      <Col lg={3} md={4} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={travel2} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Flight Booking Engine

              </h5>
             
          </div>
      </Col>
      <Col lg={3} md={4} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={travel3} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Cruise Booking Engine

              </h5>
            
          </div>
      </Col>
      <Col lg={3} md={4} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard}  ${whyStyles.soluCardBR}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={travel4} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Car Rental / Hire

              </h5>
             
          </div>
      </Col>
      <Col lg={3} md={4} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={travel5} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Travel Insurance

              </h5>
            
          </div>
      </Col>
      <Col lg={3} md={6} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={travel6} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Transfers
              </h5>
            
          </div>
      </Col>
      <Col lg={3} md={6} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard} `}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={travel7} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Successful Agents

              </h5>
             
          </div>
      </Col>
      <Col lg={3} md={6} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={travel8} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Travel Extras

              </h5>
             
          </div>
      </Col>
  </Row>

</>


  // MyReason component data

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
                  Even though our service is a cut above the rest, we remain competitively priced. Our developer rates start from as little as <strong>£15/hr</strong>
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



const value = <>
            <Container>
                <Row>
                    <Col xl={12}>
                        <h3 className='center font-bold'>Estate Agency Web Development Key Features</h3>
                        <h4 className='center mt-3 mb-5'>Custom features to suit your business needs</h4>
                    </Col>
                </Row>
                <Row className=''>
                    <Col xl={4} className='border-bottom '>
                        <div className=' pt-5 pb-5'>
                            <Image src={milestones1} className='img-fluid mb-4 greyscale' />
                           <h5>Property Management</h5>
                        </div>
                    </Col>
                    <Col xl={4} className='border-bottom mongo'>
                        <div className=' pt-5 pb-5'>
                            <Image src={milestones2} className='img-fluid mb-4 greyscale' />
                            <h5>User Management</h5>
                        </div>

                    </Col>
                    <Col xl={4} className='mongo border-bottom'>
                        <div className=' pt-5 pb-5'>
                            <Image src={milestones3} className='img-fluid mb-4 greyscale' />
                            <h5>Advertisement Management</h5>
                        </div>
                    </Col>
                    <Col xl={4} className=' border-bottom'>
                        <div className=' pt-5 pb-5'>
                            <Image src={milestones4} className='img-fluid mb-4 greyscale' />
                            <h5>Category Management</h5>
                        </div>
                    </Col>
                    <Col xl={4} className='mongo border-bottom'>
                     <div className=' pt-5 pb-5'>
                        <Image src={milestones5} className='img-fluid mb-4 greyscale' />
                        <h5>Blogs & News Feeds</h5>
                     </div>
                    </Col>
                    <Col xl={4} className='mongo border-bottom'>
                        <div className=' pt-5 pb-5'>
                            <Image src={milestones6} className='img-fluid mb-4 greyscale' />
                            <h5>Mail/Message Management</h5>
                        </div>
                    </Col>
                    <Col xl={4} className=''>
                        <div className=' pt-5 pb-5'>
                            <Image src={milestones7} className='img-fluid mb-4 greyscale' />
                            <h5>Payment Gateway Integration</h5>
                        </div>
                    </Col>
                    <Col xl={4} className='mongo '>
                        <div className=' pt-5 pb-5'>
                            <Image src={milestones8} className='img-fluid mb-4 greyscale' />
                            <h5>Content Management</h5>
                        </div>
                    </Col>
                    <Col xl={4} className='mongo '>
                        <div className=' pt-5 pb-5'>
                            <Image src={milestones9} className='img-fluid mb-4 greyscale' />
                            <h5>Lead Management</h5>
                        </div>
                    </Col>
                </Row>
            </Container>

</>

// Swipe component data

    const data =  <>

            <section className={`${dataStyles.marketingExpertise} ${dataStyles.bgcolor}`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                        <h3 className='center font-bold mb-5'>Typical project features</h3>

                        </Col>
                        <Col lg={6}>
                           
                            <ul className={dataStyles.mservice}>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> Responsive Designing </li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />  Travel Blog Sites </li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />   Travel Web Applications</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> B2B Solution / Complete Agent Modules</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> White Label Solutions </li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />   Car Rental</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />  Admin Panel Rights</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />   Best Deals and Offers Module</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />  Enable Enhanced Social Integrations</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />  Inquiry Manager</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />  SMS and Emails for Reminder</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" />  ale Data in Excel</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> Advance Search Module</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> Excellent CMS</li>
                            </ul>
                        </Col>
                        <Col lg={6}>
                          
                            <ul className={dataStyles.mservice}>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> Travel Insurance Module </li>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> Secure Socket Layer </li>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> Global Distribution Systems(GDS)</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> XML APIs Integration</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> Deposit System </li>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> Markup-rule Engine</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> Multi-Currency Support</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> Multi-lingual support</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> Travel Guide Integration</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> Trip Advisor Integration for Reviews</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> Complete Automation of Business Processes</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> Travel Back-office system</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> Secure Payment Gateway Integration</li>
                                <li> <Image src={mobilearrow1} alt="bitswits" /> Visa & Travel Info Integration</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>

            </section>

        </>

const whytitle1 = <h4 className='font40 black fontf font-bold line60 black text-center'>"Making Everything Better With <br/>
The Integrations Of These Providers"</h4>

const WhyBuilds1 = <>
    <Container>
   <p className='text-center'>We are proud to have had the opportunities to integrate the APIs provided us by the following.</p>
        <Row>
            <Col lg={12}>
                <Image src={siteminder} alt='BitsWits' className='img-fluid' />
            </Col>
        </Row>
    </Container>
</>

const WhyBuilds2 = <>
            <Container>
                <Row>
                    <Col xl={12}>
                        <h3 className='center font-bold'>Choose Us Because</h3>
                        <p className='center mt-3 mb-5'>We’re efficiently effective!</p>
                    </Col>
                </Row>
                <Row className={`${whyStyles.soluRow} mt-5`}>
      <Col lg={3} md={4} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={travel1} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              21+ years experience
in the industry
              </h5>
          </div>
      </Col>
      <Col lg={3} md={4} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={travel2} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              1,000+ full-time in-house employees
              </h5>
             
          </div>
      </Col>
      <Col lg={3} md={4} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={travel3} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              CMMi Level 3 Standards

              </h5>
            
          </div>
      </Col>
      <Col lg={3} md={4} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard}  ${whyStyles.soluCardBR}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={travel4} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Microsoft Gold Partner

              </h5>
             
          </div>
      </Col>
      <Col lg={3} md={4} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={travel5} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Certified Developers

              </h5>
            
          </div>
      </Col>
      <Col lg={3} md={6} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={travel6} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Dedicated Project Managers
              </h5>
            
          </div>
      </Col>
      <Col lg={3} md={6} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard} `}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={travel7} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Over 20,000 successful projects in 21 years
              </h5>
             
          </div>
      </Col>
      <Col lg={3} md={6} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard}  ${whyStyles.soluCardBR}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={travel8} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Remarkable customer satisfaction
              </h5>
             
          </div>
      </Col>
      <Col lg={3} md={6} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={travel8} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Strong working experience with various suppliers and GDS

              </h5>
             
          </div>
      </Col>
      <Col lg={3} md={6} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={travel8} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Working with multiple sales channels, such as B2C, B2B, and much more

              </h5>
             
          </div>
      </Col>
      <Col lg={3} md={6} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={travel8} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Excellent value for money

              </h5>
             
          </div>
      </Col>
      <Col lg={3} md={6} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}  ${whyStyles.soluCardBB}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={travel8} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              We maintain transparency in charges
              </h5>
          </div>
      </Col>
  </Row>
            </Container>
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
            />

            <WhyBuild
                cards={WhyBuilds}
                subtitle={whytitle}
            />
            <CrmExamples
                title={exmplTitle}
                slider={exmplSlider}
                text={exmplText}
            />
           
          
          
            <CRMExperts
                cards={crmCards}
                subtitle={crmtitle}
            />

           <MarketingExpertise
                data={data}
            />
            

            <CRMExperts
                cards={WhyBuilds1}
                subtitle={whytitle1}
            />

            <WhyBuild
                cards={WhyBuilds2}
                
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

            />
 */}

            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
