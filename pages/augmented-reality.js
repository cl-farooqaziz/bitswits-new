import Head from 'next/head'
import React, { useState, useEffect } from 'react'; import Link from 'next/link';
import banImg from '../public/images/banner/webBanner.png'
import foldimg from '../public/images/services/webSwipe.svg'
import foldensure from '../public/images/services/webEnsure.svg'
import { Container, Row, Col } from 'react-bootstrap'
import whyStyles from '@/styles/whyServices.module.css'
// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//components
import exmplstyles from '@/styles/CrmExamples.module.css'
import CrmExamples from '@/components/CrmExamples';
// 
import Banner from '@/components/ServicesBanner'
import WhyBuild from '@/components/WhyBuild';
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
import WorkExp from '@/components/WorkExp'
import workStyles from '@/styles/WorkExp.module.css'
import expStyles from '@/styles/MyExpertise.module.css'
import MyExpertise from '@/components/MyExpertise';

import icon10 from '../public/images/gaming/gds1.png'
import icon11 from '../public/images/gaming/gds2.png'
import icon12 from '../public/images/gaming/gds3.png'
import icon13 from '../public/images/gaming/gds4.png'
import icon14 from '../public/images/gaming/gds5.png'
import icon15 from '../public/images/gaming/gds6.png'
import icon16 from '../public/images/gaming/gds7.png'
import icon17 from '../public/images/gaming/gds8.png'


// import icon16 from '../public/images/crmDev/crm-choose-icon1.png'
// import icon17 from '../public/images/crmDev/crm-choose-icon2.png'
// import icon18 from '../public/images/crmDev/crm-choose-icon3.png'
import icon19 from '../public/images/gaming/ar-icon4.png'
import icon20 from '../public/images/gaming/ar-icon5.png'
import icon21 from '../public/images/gaming/ar-icon6.png'
import icon22 from '../public/images/gaming/ar-icon8.png'
import icon23 from '../public/images/gaming/ar-icon9.png'
import icon31 from '../public/images/gaming/ar-icon10.png'
import icon32 from '../public/images/gaming/ar-icon11.png'
//Why Icon
import icon24 from '../public/images/gaming/gds-icon1.png'
import icon25 from '../public/images/gaming/gds-icon2.png'
import icon26 from '../public/images/gaming/gds-icon3.png'
import icon27 from '../public/images/gaming/gds-icon4.png'
import icon28 from '../public/images/gaming/gds-icon5.png'
import icon29 from '../public/images/gaming/gds-icon6.png'
import icon30 from '../public/images/gaming/gds-icon7.png'
import icon33 from '../public/images/gaming/gds-icon8.png'
import icon34 from '../public/images/gaming/gameimg1.png'
import icon35 from '../public/images/gaming/ar1.png'
import icon36 from '../public/images/gaming/ar2.png'
import icon37 from '../public/images/gaming/ar3.png'
import icon38 from '../public/images/gaming/ar4.png'


// 
import slide1 from '../public/images/gaming/game1.jpg'
import slide2 from '../public/images/gaming/game2.jpg'
import slide3 from '../public/images/gaming/game3.jpg'





export default function augmentingreality() {

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
const heading = <h1 className='font65 black fontf font-bold line60'>The Best Design and <br /><span className='grdiant'> AUGMENTED REALITY </span> Company!</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Large Stock of Gaming Technology</li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Multiple Devices Support </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Transparent Work Progress </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>NDA Protection </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Custom Software with Unity 3D Home Architect </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Experienced 3D Modelling Experts</li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Slam Tracking Experts </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Animation 2D and 3D </li>
        </ul>
    </>

const infopara = <> <p className='black fontf font-medium line30 mt-5'>We’ve delivered more than <strong>250+</strong> Developed Games to <strong>50+</strong> clients <br /> in the last <strong>21 years</strong>.</p> </>

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
// Build component data

const whytitle = 
<h2 className='font30 black fontf font-bold line60 black text-center mb-3'>
    <span className='grdiant'>Our Game Services</span> 
</h2>

const WhyBuilds = <>
        <Row className={`${whyStyles.soluRow} mt-5`}>
            <Col lg={3} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon24} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Unity 3D
                    </h5>
                    <p>
                    A game must bring something new to the table. Join hands with us to embrace the best solutions in this booming industry of HTML5 Game development.
                    </p>
                </div>
            </Col>
            <Col lg={3} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon25} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30 '>
                        HTML5 Game
                    </h5>
                    <p>
                    A game must bring something new to the table. Join hands with us to embrace the best solutions in this booming industry of HTML5 Game development.

                    </p>

                </div>
            </Col>
            <Col lg={3} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon26} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    COCOS2DX Game
                    </h5>
                    <p>
                    A game must bring something new to the table. Join hands with us to embrace the best solutions in this booming industry of HTML5 Game development.



                    </p>

                </div>
            </Col>
            <Col lg={3} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon19} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium'>
                    Web-GL
                    </h5>
                    <p>
                    A game must bring something new to the table. Join hands with us to embrace the best solutions in this booming industry of HTML5 Game development.


                    </p>
                </div>
            </Col>
            <Col lg={3} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon20} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Photon Multiplayer Engine
                    </h5>
                    <p>
                    A game must bring something new to the table. Join hands with us to embrace the best solutions in this booming industry of HTML5 Game development.



                    </p>

                </div>
            </Col>
            <Col lg={3} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}  ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon21} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Creature
                    </h5>
                    <p>
                    A game must bring something new to the table. Join hands with us to embrace the best solutions in this booming industry of HTML5 Game development.


                    </p>
                </div>
            </Col>
            <Col lg={3} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard}  ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon30} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Unreal Game

                    </h5>
                    <p>
                    A game must bring something new to the table. Join hands with us to embrace the best solutions in this booming industry of HTML5 Game development.



                    </p>
                </div>
            </Col>
            <Col lg={3} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon22} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Maya
                    </h5>
                    <p>
                    A game must bring something new to the table. Join hands with us to embrace the best solutions in this booming industry of HTML5 Game development.


                    </p>
                </div>
            </Col>
            <Col lg={3} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon23} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Substance Painter
                    </h5>
                    <p>
                    A game must bring something new to the table. Join hands with us to embrace the best solutions in this booming industry of HTML5 Game development.


                    </p>
                </div>
            </Col>
            <Col lg={3} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon31} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    3D Coat
                    </h5>
                    <p>
                    A game must bring something new to the table. Join hands with us to embrace the best solutions in this booming industry of HTML5 Game development.


                    </p>
                </div>
            </Col>
            <Col lg={3} md={4} className={whyStyles.soluCol}>
                <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBB}`}>
                    <div className={`${whyStyles.imgBox}`}>
                        <Image src={icon32} alt='BitsWits' className='img-fluid' />
                    </div>
                    <h5 className='font20 fontf font-medium line30'>
                    Keyshot
                    </h5>
                    <p>
                    A game must bring something new to the table. Join hands with us to embrace the best solutions in this booming industry of HTML5 Game development.


                    </p>
                </div>
            </Col>
        </Row>

</>

const Workspace = <>
<Row className={`${workStyles.soluRow} text-center justify-content-center align-items-center position-relative`}>
  
{/* <h4 className='text-center font30 font-bold mb-4'> Kickstart Your Journey With World Of Innovation
</h4> */}

{/* <div className={`${workStyles.gameimg}`}>
    <Image src={icon33} className='img-fluid'/>
</div> */}

    <Col lg={3} md={3} className={workStyles.soluCol}>
        <div className={`${workStyles.soluCard}`}>
            <div className={`${workStyles.imgBox}`}>
                <Image src={icon35} alt='BitsWits' className='img-fluid' />
            </div>
        <h5 className='font20 fontf font-medium line30'>
        Mobile Phones
        </h5>
       
        </div>
    </Col>
    <Col lg={3} md={3} className={workStyles.soluCol}>
        <div className={`${workStyles.soluCard}`}>
            <div className={`${workStyles.imgBox}`}>
                <Image src={icon36} alt='BitsWits' className='img-fluid' />
            </div>
        <h5 className='font20 fontf font-medium line30'>
        Head Mounted Displays
        </h5>
      
        </div>
    </Col>
    <Col lg={3} md={3} className={workStyles.soluCol}>
        <div className={`${workStyles.soluCard}`}>
            <div className={`${workStyles.imgBox}`}>
                <Image src={icon37} alt='BitsWits' className='img-fluid' />
            </div>
        <h5 className='font20 fontf font-medium line30'>
        Smart Glasses

        </h5>
      
        </div>
    </Col>
    <Col lg={3} md={3} className={workStyles.soluCol}>
        <div className={`${workStyles.soluCard}`}>
            <div className={`${workStyles.imgBox}`}>
                <Image src={icon38} alt='BitsWits' className='img-fluid' />
            </div>
        <h5 className='font20 fontf font-medium line30'>
        Tablets
        </h5>
      
        </div>
    </Col>
</Row>
</>

const Ultimate = <>
   <section>
        <Container>
            <Row className='text-center'>
                <Col lg={12}>
    <h3 className='font30 black fontf font-bold line60 black text-center mb-3'>Ultimate Game Development Company to Empower Your Ideas
    </h3>
    <p>We are Augmenting reality with sheer creativity to create a truly immersive gaming experience.Bitswitssupports game design and development by providing high-end gaming solutions using various high-end game development platforms. These platforms are used for building games, apps and other graphics interface interactive applications. We are a leading mobile game development company in the UK. Bitswitsis a trustworthy name, and we are your to go option to get excellent game development solutions and fulfill a string of complex project needs.
    </p>
                </Col>
            </Row>
        </Container>
    </section>
</>



    const subtitle = <h4 className='font40 black fontf font-bold line60 black text-center mb-3'>
    <span className=''>AR Games for Multiple Platforms
</span> 
    </h4>


  // E-Commerce Development Services

  const ecomDevTtl = <h2 className='font30 black fontf font-bold line60 black text-center mb-3'>Our <span className='grdiant'>Game Genres 
  </span>  We Make
  </h2>


  const ecomDevSer = <>
      <Row className={`${whyStyles.soluRow} mt-5`}>
          <Col lg={3} md={6} className={whyStyles.soluCol}>
              <div className={`${whyStyles.soluCard}`}>
                  <div className={`${whyStyles.imgBox}`}>
                      <Image src={icon10} alt='BitsWits' className='img-fluid' />
                  </div>
                  <h5 className='font20 fontf font-medium line30'>
                  Board
                  </h5>
              </div>
          </Col>
          <Col lg={3} md={6} className={whyStyles.soluCol}>
              <div className={`${whyStyles.soluCard}`}>
                  <div className={`${whyStyles.imgBox}`}>
                      <Image src={icon11} alt='BitsWits' className='img-fluid' />
                  </div>
                  <h5 className='font20 fontf font-medium line30'>
                  Strategy

                  </h5>
              </div>
          </Col>
          <Col lg={3} md={6} className={whyStyles.soluCol}>
              <div className={`${whyStyles.soluCard}`}>
                  <div className={`${whyStyles.imgBox}`}>
                      <Image src={icon12} alt='BitsWits' className='img-fluid' />
                  </div>
                  <h5 className='font20 fontf font-medium line30'>
                  Action
                  </h5>
              </div>
          </Col>
          <Col lg={3} md={6} className={whyStyles.soluCol}>
              <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                  <div className={`${whyStyles.imgBox}`}>
                      <Image src={icon13} alt='BitsWits' className='img-fluid' />
                  </div>
                  <h5 className='font20 fontf font-medium line30'>
                  Shooting
                  </h5>
              </div>
          </Col>
          <Col lg={3} md={6} className={whyStyles.soluCol}>
              <div className={`${whyStyles.soluCard}`}>
                  <div className={`${whyStyles.imgBox}`}>
                      <Image src={icon14} alt='BitsWits' className='img-fluid' />
                  </div>
                  <h5 className='font20 fontf font-medium line30'>
                  Puzzles
                  </h5>
              </div>
          </Col>
          <Col lg={3} md={6} className={whyStyles.soluCol}>
              <div className={`${whyStyles.soluCard}`}>
                  <div className={`${whyStyles.imgBox}`}>
                      <Image src={icon15} alt='BitsWits' className='img-fluid' />
                  </div>
                  <h5 className='font20 fontf font-medium line30'>
                  Roll
                  </h5>
              </div>
          </Col>
          <Col lg={3} md={6} className={whyStyles.soluCol}>
              <div className={`${whyStyles.soluCard}`}>
                  <div className={`${whyStyles.imgBox}`}>
                      <Image src={icon16} alt='BitsWits' className='img-fluid' />
                  </div>
                  <h5 className='font20 fontf font-medium line30'>
                  Education
                  </h5>
              </div>
          </Col>
          <Col lg={3} md={6} className={whyStyles.soluCol}>
              <div className={`${whyStyles.soluCard} ${whyStyles.soluCardBR}`}>
                  <div className={`${whyStyles.imgBox}`}>
                      <Image src={icon17} alt='BitsWits' className='img-fluid' />
                  </div>
                  <h5 className='font20 fontf font-medium line30'>
                  Racing
                  </h5>
              </div>
          </Col>
      </Row>

  </>

//   Team

const subtitle1 = 
 <h4 className='font30 black fontf font-bold line60 black text-center mb-3'>
<span className='grdiant'> As a Dedicated </span> Game Development Company
</h4> 

const team = 
<>
<p className='text-center'></p>
<Container>
    <Row  className={`${whyStyles.soluRow} ${whyStyles.borderbottom} justify-content-center align-items-center text-center`}>
        <Col lg={4} className={`${whyStyles.soluRow}  mt-5`}>
            <h4 className='font50 font-bold'>21+</h4>
            <p>Years of <br/>Expertise</p>
        </Col>
        <Col lg={4} className={`${whyStyles.soluRow} ${whyStyles.borderright} ${whyStyles.borderleft}  mt-5`}>
            <h4 className='font50 font-bold'>50+</h4>
            <p>Game Development<br/> Experts</p>
        </Col>
        <Col lg={4} className={`${whyStyles.soluRow} mt-5`}>
            <h4 className='font50 font-bold'>250+</h4>
            <p>Developed<br/> Games</p>
        </Col>
    </Row>
</Container>
</>


// Exmple component data

const exmplTitle = <> <h2 className='font40 black fontf font-bold line60 black text-center mb-3'>Our Work In <span className='grdiant'>The Spotlight!</span>
</h2> </>

const exmplSlider = <>
    <Slider {...crmExamples} className={` ${exmplstyles.crmSlider}  crmSlider`}>
        <div className={exmplstyles.strpImg}>
            <div className={exmplstyles.topTitle}>Lil' Leprechaun</div>
            <div className={exmplstyles.topImg}>
                <Image alt="bitswits" src={slide1} className="img-fluid" />
            </div>
        </div>
        <div className={exmplstyles.strpImg}>
            <div className={exmplstyles.topTitle}>Poop Busters</div>
            <div className={exmplstyles.topImg}>
                <Image alt="bitswits" src={slide2} className="img-fluid" />
            </div>
        </div>
        <div className={exmplstyles.strpImg}>
            <div className={exmplstyles.topTitle}>3D Fidget Spinner</div>
            <div className={exmplstyles.topImg}>
                <Image alt="bitswits" src={slide3} className="img-fluid" />
            </div>
        </div>
        {/* <div className={exmplstyles.strpImg}>
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
        </div> */}
    </Slider>
</>

const exmplText = <> Let's talk about your CRM requirements </>

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
                subtitle={whytitle}
            />
            <MyExpertise
                cards={Workspace}
                title='Ultimate'
                subtitle={subtitle}
            />

          

          <CrmExamples
                title={exmplTitle}
                slider={exmplSlider}
                text={exmplText}
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
