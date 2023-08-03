import Head from 'next/head'
import React, { useState, useEffect } from 'react'; import Link from 'next/link';
import banImg from '../public/images/banner/webBanner.png'
import foldimg from '../public/images/services/webSwipe.svg'
import foldensure from '../public/images/services/webEnsure.svg'
import { Row, Col, Container } from 'react-bootstrap'
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
import whyStyles from '@/styles/whyServices.module.css'
import reStyles from '@/styles/MyReason.module.css'
import aheadimage from '../public/images/services/webAhead.svg'
import Image from 'next/image';
import mobilearrow from '../public/images/icons/mobile-arrow.png'
//
import WhyBuild from '@/components/WhyBuild';
import CrmExamples from '@/components/CrmExamples';
import exmplstyles from '@/styles/CrmExamples.module.css'
import MyReason from '@/components/MyReason';

import CRMExperts from '@/components/CRMExperts';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import crmstyles from '@/styles/CRMExperts.module.css'
//
import Milestones from '@/components/Milestones';
import milStyles from '@/styles/Milestones.module.css'
// 
import milestones1 from '../public/images/benefits/realestate-icon-1.jpg'
import milestones2 from '../public/images/benefits/realestate-icon-2.jpg'
import milestones3 from '../public/images/benefits/realestate-icon-3.jpg'
import milestones4 from '../public/images/benefits/realestate-icon-4.jpg'
import milestones5 from '../public/images/benefits/realestate-icon-5.jpg'
import milestones6 from '../public/images/benefits/realestate-icon-6.jpg'
import milestones7 from '../public/images/benefits/realestate-icon-7.jpg'
import milestones8 from '../public/images/benefits/realestate-icon-8.jpg'
import milestones9 from '../public/images/benefits/realestate-icon-9.jpg'

import slide1 from '../public/images/crmDev/crmTesti1.png'
import slide2 from '../public/images/crmDev/crmTesti2.png'
import slide3 from '../public/images/crmDev/crmTesti3.png'
import slide4 from '../public/images/crmDev/crmTesti4.png'
import slide5 from '../public/images/crmDev/crmTesti5.png'
import slide6 from '../public/images/crmDev/crmTesti6.png'
//
//
import icon16 from '../public/images/benefits/real-icon-05.jpg'
import icon17 from '../public/images/benefits/real-icon-06.jpg'
import icon18 from '../public/images/benefits/real-icon-07.jpg'
import icon19 from '../public/images/benefits/real-icon-08.jpg'

//Why Icon
import icon24 from '../public/images/crmDev/crm-ico1.png'
import icon25 from '../public/images/crmDev/crm-ico2.png'
import icon26 from '../public/images/crmDev/crm-ico3.png'
import icon27 from '../public/images/crmDev/crm-ico4.png'
import icon28 from '../public/images/crmDev/crm-ico5.png'
import icon29 from '../public/images/crmDev/crm-ico6.png'

import icon30 from '../public/images/benefits/realblk-1.jpg'
import icon31 from '../public/images/benefits/realblk-2.jpg'
import icon32 from '../public/images/benefits/realblk-3.jpg'
import icon33 from '../public/images/benefits/realblk-4.jpg'
import icon34 from '../public/images/benefits/realblk-5.jpg'
import icon35 from '../public/images/benefits/realblk-6.jpg'
import icon36 from '../public/images/benefits/realblk-7.jpg'
import icon37 from '../public/images/benefits/realblk-8.jpg'


export default function realestate() {


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

    const heading = <h1 className='font65 black fontf font-bold line60'>The Best Design and <br /><span className='grdiant'> REAL ESTATE </span> Company!</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Advertisement Management </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Property Management </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>User Management  </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>
            Mail/Message Management </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Category Management </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Blogs & News Feeds </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Lead Management </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Content Management </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Payment Gateway  Integration </li>
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


    // Build component data



  // Exmple component data

  const exmplTitle = <> <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Some examples of our <span className='grdiant'>Real Estate Agency</span> solutions
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

 <Row className={`${crmstyles.soluRow} mt-5`}>
     <Col lg={6} className={crmstyles.soluCol}>
         <div className={`${crmstyles.soluCard}`}>
             <div className={`${crmstyles.imgBox}`}>
                 <Image src={icon30} alt='BitsWits' className='img-fluid' />
             </div>
             <p>
             Back-up zones, focusing on recently viewed items              </p>
         </div>
     </Col>
     <Col lg={6} className={crmstyles.soluCol}>
         <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBR}`}>
             <div className={`${crmstyles.imgBox}`}>
                 <Image src={icon31} alt='BitsWits' className='img-fluid' />
             </div>
             <p>
             Users can search properties according to their criteria with interactive Google map facility 
             </p>

         </div>
     </Col>
     <Col lg={6} className={crmstyles.soluCol}>
         <div className={`${crmstyles.soluCard}`}>
             <div className={`${crmstyles.imgBox}`}>
                 <Image src={icon32} alt='BitsWits' className='img-fluid' />
             </div>
             <p>
             Property management, Agents, accounting and all other facilities 
             </p>
         </div>
     </Col>
     <Col lg={6} className={crmstyles.soluCol}>
         <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBR}`}>
             <div className={`${crmstyles.imgBox}`}>
                 <Image src={icon33} alt='BitsWits' className='img-fluid' />
             </div>
             <p>
             Helpful for monitoring business performance 
             </p>

         </div>
     </Col>
     <Col lg={6} className={crmstyles.soluCol}>
         <div className={`${crmstyles.soluCard}`}>
             <div className={`${crmstyles.imgBox}`}>
                 <Image src={icon34} alt='BitsWits' className='img-fluid' />
             </div>
             <p>
             Robust searching technique to enhance user experience 
             </p>
         </div>
     </Col>
     <Col lg={6} className={crmstyles.soluCol}>
         <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBR}`}>
             <div className={`${crmstyles.imgBox}`}>
                 <Image src={icon35} alt='BitsWits' className='img-fluid' />
             </div>
             <p>
             Excellent user interface to engage visitors on website 
             </p>

         </div>
     </Col>
     <Col lg={6} className={crmstyles.soluCol}>
         <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBB}`}>
             <div className={`${crmstyles.imgBox}`}>
                 <Image src={icon36} alt='BitsWits' className='img-fluid' />
             </div>
             <p>
             Responsive UI to fit each element in almost all resolutions 
             </p>
         </div>
     </Col>
     <Col lg={6} className={crmstyles.soluCol}>
         <div className={`${crmstyles.soluCard} ${crmstyles.soluCardBR} ${crmstyles.soluCardBB}`}>
             <div className={`${crmstyles.imgBox}`}>
                 <Image src={icon37} alt='BitsWits' className='img-fluid' />
             </div>
             <p>
             IDX listings on your real estate Agent website are Search Engine Friendly.
             </p>
         </div>
     </Col>
 </Row>
</>

  // Build component data

  const whytitle = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>
  <span className='grdiant'>Why Choose</span> Team In Pakistan?
</h2>

const WhyBuilds = <>
  <Row className={`${whyStyles.soluRow} mt-5`}>
      <Col lg={3} md={4} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={icon24} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Outstanding <br/>Designs
              </h5>
              <p>
              We have some of the best web designers in the industry and it truly shows in our designs. We have built so many amazing websites over the years, and we love to show them off.


              </p>

          </div>
      </Col>
      <Col lg={3} md={4} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={icon25} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              CRM Lead<br /> Management
              </h5>
              <p>
              Our CRM lead management platform is a web based management system you can use on any device, so you can keep track of all of your leads in one place.
              </p>

          </div>
      </Col>
      <Col lg={3} md={4} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={icon26} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Excellent <br /> Support
              </h5>
              <p>
              We are here to help you with your site from the project initiation through to the launch and thereafter.


              </p>

          </div>
      </Col>
      <Col lg={3} md={4} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard}  ${whyStyles.soluCardBR}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={icon27} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Responsive <br /> Websites
              </h5>
              <p>
              All of our websites and CRM products are responsive. This means that your site will look great on a desktop computer, tablet, and smartphone.


              </p>

          </div>
      </Col>
      <Col lg={3} md={4} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={icon16} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Content <br /> Management
              </h5>
              <p>
              You can manage pages, listings and so much more from our custom built Content Management System (CMS).


              </p>

          </div>
      </Col>
      <Col lg={3} md={6} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={icon17} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Powerful <br /> Blog
              </h5>
              <p>
              Every intelligent solution comes with a powerful blog where you can post your thoughts about real estate trends, the market and more.


              </p>
          </div>
      </Col>
      <Col lg={3} md={6} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard} `}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={icon18} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              SEO <br /> Friendly
              </h5>
              <p>
              Our system allows you to have full control over every page on your website which will allow you to fully optimize your site for search engine ranking.


              </p>
          </div>
      </Col>
      <Col lg={3} md={6} className={whyStyles.soluCol}>
          <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
              <div className={`${whyStyles.imgBox}`}>
                  <Image src={icon19} alt='BitsWits' className='img-fluid' />
              </div>
              <h5 className='font20 fontf font-500 line30'>
              Powerful <br /> IDX
              </h5>
              <p>
              Select from our different IDX options to allow your users to find the right property they are looking for directly on your website.


              </p>
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


// 


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

            <CrmExamples
                title={exmplTitle}
                slider={exmplSlider}
                text={exmplText}
            />
             <Milestones
                value = {value}
            />
           <WhyBuild
                cards={WhyBuilds}
                subtitle={whytitle}
            />
          
            <CRMExperts
                cards={crmCards}
                subtitle={crmtitle}
            />
           
          

          
{/* 
            <Coverage
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
