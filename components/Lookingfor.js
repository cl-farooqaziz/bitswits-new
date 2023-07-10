import React from 'react'
import styles from '@/styles/Looking.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { RxArrowRight } from 'react-icons/rx'
import ourportfolio3 from '../public/images/lookingfor/loop.png'
import ourportfolio31 from '../public/images/lookingfor/loop2.png'
import ourportfolio32 from '../public/images/lookingfor/loop3.png'
import uiux from '../public/images/lookingfor/uiux.png'
import ai from '../public/images/lookingfor/ai.png'
import web from '../public/images/lookingfor/web.png'
import blockchain from '../public/images/lookingfor/blockchain.png'
import gamedev from '../public/images/lookingfor/gamedev.png'

// blockchain

import icon1 from '../public/images/lookingfor/blockchain/1.svg'
import icon2 from '../public/images/lookingfor/blockchain/2.svg'
import icon3 from '../public/images/lookingfor/blockchain/3.svg'
import icon4 from '../public/images/lookingfor/blockchain/4.svg'


// game development
import gameicon1 from '../public/images/lookingfor/gamedevelopment/1.svg'
import gameicon2 from '../public/images/lookingfor/gamedevelopment/2.svg'
import gameicon3 from '../public/images/lookingfor/gamedevelopment/3.svg'
import gameicon4 from '../public/images/lookingfor/gamedevelopment/4.svg'
import gameicon5 from '../public/images/lookingfor/gamedevelopment/5.svg'



// mobileapp development
import mobileappicon1 from '../public/images/lookingfor/mobileapp/1.svg'
import mobileappicon2 from '../public/images/lookingfor/mobileapp/2.svg'
import mobileappicon3 from '../public/images/lookingfor/mobileapp/3.svg'


// websitedevelopment development
import websitedevelopmenticon1 from '../public/images/lookingfor/websitedevelopment/1.svg'
import websitedevelopmenticon2 from '../public/images/lookingfor/websitedevelopment/2.svg'
import websitedevelopmenticon3 from '../public/images/lookingfor/websitedevelopment/3.svg'
import websitedevelopmenticon4 from '../public/images/lookingfor/websitedevelopment/4.svg'

// aidevelopment
import aidevelopmenticon1 from '../public/images/lookingfor/aidevelopement/1.svg'
import aidevelopmenticon2 from '../public/images/lookingfor/aidevelopement/2.svg'
import aidevelopmenticon3 from '../public/images/lookingfor/aidevelopement/3.svg'
import aidevelopmenticon4 from '../public/images/lookingfor/aidevelopement/4.svg'

// uiuxdevelopement
import uiuxdevelopementicon1 from '../public/images/lookingfor/uiuxdevelopement/1.svg'
import uiuxdevelopementicon2 from '../public/images/lookingfor/uiuxdevelopement/2.svg'
import uiuxdevelopementicon3 from '../public/images/lookingfor/uiuxdevelopement/3.svg'
import uiuxdevelopementicon4 from '../public/images/lookingfor/uiuxdevelopement/4.svg'



import Image from 'next/image'
import { useState } from 'react'


const Lookingfor = () => {


    const [gameshow, gameapp] = useState(true);
    const [gameshow1, gameapp1] = useState(false);
    const [gameshow2, gameapp2] = useState(false);
    const [gameshow3, gameapp3] = useState(false);
    const [gameshow4, gameapp4] = useState(false);

    const [gameshow6, gameapp6] = useState(false);

    function game() {


        gameapp(true);
        gameapp1(false);
        gameapp2(false);
        gameapp3(false);
        gameapp4(false);

        gameapp6(false);
    }
    function game1() {

        gameapp(false);
        gameapp1(true);
        gameapp2(false);
        gameapp3(false);
        gameapp4(false);

        gameapp6(false);
    }
    function game2() {

        gameapp(false);
        gameapp1(false);
        gameapp2(true);
        gameapp3(false);
        gameapp4(false);

        gameapp6(false);
    }
    function game3() {

        gameapp(false);
        gameapp1(false);
        gameapp2(false);
        gameapp3(true);
        gameapp4(false);

        gameapp6(false);
    }

    function game4() {

        gameapp(false);
        gameapp1(false);
        gameapp2(false);
        gameapp3(false);
        gameapp4(true);

        gameapp6(false);
    }



    function game6() {

        gameapp(false);
        gameapp1(false);
        gameapp2(false);
        gameapp3(false);
        gameapp4(false);

        gameapp6(true);
    }

    return (
        <>
            <section className={styles.lookingfor}>
                <Container>
                    <Row className={styles.project}>
                        <Col lg={2}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace black'>Need</h5>
                        </Col>
                        <Col lg={7}>
                            <h2 className='font65 black fontf font-bold line60 black'>If You're <span className='grdiant'>Looking For</span> </h2>
                        </Col>
                        <Col lg={3}>
                            <Link className={styles.bttns1} href="#">Book a Call</Link>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col lg={12}>


                            <div className={styles.devlp}>
                                <div onClick={game} className={gameshow ? styles.btnblack : styles.game} >Mobile App Development</div>
                                <div onClick={game1} className={gameshow1 ? styles.btnblack : styles.game}>Game Development</div>
                                <div onClick={game2} className={gameshow2 ? styles.btnblack : styles.game}>Website Development</div>
                                <div onClick={game3} className={gameshow3 ? styles.btnblack : styles.game}>Blockchain Development</div>
                                <div onClick={game4} className={gameshow4 ? styles.btnblack : styles.game}>AI Development</div>

                                <div onClick={game6} className={gameshow6 ? styles.btnblack : styles.game}>UI/UX Design</div>
                            </div>
                        </Col>
                    </Row>

                    {gameshow ?

                        <Row>
                            <Col lg={6}>

                                <h3 className='fontf black font-bold font30 mt-5'>Our Mobile App Development Services and Solutions</h3>
                                <p className='fontf black font-medium font15'>Our extensive experience enables us to offer dependable mobile app development solutions that excel in performance and remain highly competitive </p>

                                <div className={styles.way}>
                                    <div className={styles.servbold}><Image src={mobileappicon1} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image src={mobileappicon2} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image src={mobileappicon3} className='img-fluid' /></div>
                               
                                </div>



                                <div className={`${styles.devlp1} mt-4 mb-4`}>
                                    <div className={styles.game2}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>3 - 6 Months</p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Services</h3>
                                        <ul className={styles.roadmap}>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> iOS App Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Beacon Apps</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Android App Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> React Native Apps</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Smart Watch Apps</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Mobile Web Apps</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.livechat}>
                                    <Link className={styles.btn1} href="#">Book a Call</Link>
                                    <Link className={styles.btn1} href="#">Live Chat</Link>
                                </div>

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>
                                <div className={styles.output}>
                                    <Image alt="Bitswits" src={ourportfolio3} className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                        :
                        ''
                    }






                    {gameshow1 ?

                        <Row>
                            <Col lg={6}>

                                <h3 className='fontf black font-bold font30 mt-5'>Our Game Development Services and Solutions for You.</h3>
                                <p className='fontf black font-medium font15'>BitsWits is a highly proficient company specializing in mobile game development, housing a team of talented game developers who possess a wealth of expertise in delivering tailor-made game development solutions. </p>

                                <div className={styles.way}>
                                    <div className={styles.servbold}><Image src={gameicon1} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image src={gameicon2} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image src={gameicon3} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image src={gameicon4} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image src={gameicon5} className='img-fluid' /></div>
                                </div>



                                <div className={`${styles.devlp1} mt-4 mb-4`}>
                                    <div className={styles.game2}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>3-8 Months </p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Services</h3>
                                        <ul className={styles.roadmap}>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Unity Game Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> 2D & 3D Game Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> iOS Game Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> HTML5 Game Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Android Game Development</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.livechat}>
                                    <Link className={styles.btn1} href="#">Book a Call</Link>
                                    <Link className={styles.btn1} href="#">Live Chat</Link>
                                </div>

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>
                                <div className={styles.output}>
                                    <Image alt="Bitswits" src={gamedev} className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                        :
                        ''
                    }







                    {gameshow2 ?

                        <Row>
                            <Col lg={6}>

                                <h3 className='fontf black font-bold font30 mt-5'>Our Website Development Services and Solutions</h3>
                                <p className='fontf black font-medium font15'>Bitswits is dedicated to enhancing your digital transformation journey with highly advanced and ingenious methodologies. Utilize our scalable website development solutions to effectively expand your global presence and boost growth.</p>

                                <div className={styles.way}>
                                    <div className={styles.servbold}><Image src={websitedevelopmenticon1} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image src={websitedevelopmenticon2} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image src={websitedevelopmenticon3} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image src={websitedevelopmenticon4} className='img-fluid' /></div>
                                   
                                </div>



                                <div className={`${styles.devlp1} mt-4 mb-4`}>
                                    <div className={styles.game2}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>2-3 weeks </p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Services</h3>
                                        <ul className={styles.roadmap}>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Custom Web Applications Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Progressive Web Apps</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> REST API Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Mobile Web Apps</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Opensource Framework Experts</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.livechat}>
                                    <Link className={styles.btn1} href="#">Book a Call</Link>
                                    <Link className={styles.btn1} href="#">Live Chat</Link>
                                </div>

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>
                                <div className={styles.output}>
                                    <Image alt="Bitswits" src={web} className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                        :
                        ''
                    }



                    {gameshow3 ?

                        <Row>
                            <Col lg={6}>

                                <h3 className='fontf black font-bold font30 mt-5'>Our Blockchain Development Services and Solutions</h3>
                                <p className='fontf black font-medium font15'>We want to change the old way of paying for things by using new technology. At BitsWits, we are experts in creating apps that use blockchain. We come up with new and creative ways to help many different types of businesses.</p>


                                <div className={styles.way}>
                                     <div className={styles.servbold}><Image src={icon1} className='img-fluid' /></div> 
                                     <div className={styles.servbold}><Image src={icon2} className='img-fluid' /></div> 
                                     <div className={styles.servbold}><Image src={icon3} className='img-fluid' /></div> 
                                     <div className={styles.servbold}><Image src={icon4} className='img-fluid' /></div> 
                                </div>



                                <div className={`${styles.devlp1} mt-4 mb-4`}>
                                    <div className={styles.game2}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>3-4 months </p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Services</h3>
                                        <ul className={styles.roadmap}>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Smart Contracts Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Crypto Exchange Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Blockchain App Consultation</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Crypto Wallet Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Hyperledger Based Solutions</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> IEO & ICO Services</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.livechat}>
                                    <Link className={styles.btn1} href="#">Book a Call</Link>
                                    <Link className={styles.btn1} href="#">Live Chat</Link>
                                </div>

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>
                                <div className={styles.output}>
                                    <Image alt="Bitswits" src={blockchain} className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                        :
                        ''
                    }

                    {gameshow4 ?

                        <Row>
                            <Col lg={6}>

                                <h3 className='fontf black font-bold font30 mt-5'>Our Artificial Intelligence Solutions and Services</h3>
                                <p className='fontf black font-medium font15'>At Bitswits, we harness cutting-edge technology to provide unparalleled Artificial Intelligence solutions. Our team consists of highly skilled professionals who specialize in advanced research and development within the field of AI/ML.</p>

                                <div className={styles.way}>
                                     <div className={styles.servbold}><Image src={aidevelopmenticon1} className='img-fluid' /></div> 
                                     <div className={styles.servbold}><Image src={aidevelopmenticon2} className='img-fluid' /></div> 
                                     <div className={styles.servbold}><Image src={aidevelopmenticon3} className='img-fluid' /></div> 
                                     <div className={styles.servbold}><Image src={aidevelopmenticon4} className='img-fluid' /></div> 
                                </div>

                                <div className={`${styles.devlp1} mt-4 mb-4`}>
                                    <div className={styles.game2}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>4-5 months </p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Services</h3>
                                        <ul className={styles.roadmap}>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> AI-Based Solutions</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Intelligent Recommendation Engine</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Chatbot Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Voice-based AI</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Business Process Automation</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Computer Vision</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.livechat}>
                                    <Link className={styles.btn1} href="#">Book a Call</Link>
                                    <Link className={styles.btn1} href="#">Live Chat</Link>
                                </div>

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>
                                <div className={styles.output}>
                                    <Image alt="Bitswits" src={ai} className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                        :
                        ''
                    }






                    {gameshow6 ?

                        <Row>
                            <Col lg={6}>

                                <h3 className='fontf black font-bold font30 mt-5'>Our UI UX Design Services and Solutions</h3>
                                <p className='fontf black font-medium font15'>BitsWits revolutionize your digital transformation journey with highly advanced and intelligent methodologies. Utilize our scalable website development solutions to achieve efficient global growth.</p>

                                <div className={styles.way}>
                                     <div className={styles.servbold}><Image src={uiuxdevelopementicon1} className='img-fluid' /></div> 
                                     <div className={styles.servbold}><Image src={uiuxdevelopementicon2} className='img-fluid' /></div> 
                                     <div className={styles.servbold}><Image src={uiuxdevelopementicon3} className='img-fluid' /></div> 
                                     <div className={styles.servbold}><Image src={uiuxdevelopementicon4} className='img-fluid' /></div> 
                                </div>



                                <div className={`${styles.devlp1} mt-4 mb-4`}>
                                    <div className={styles.game2}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>2-3 days </p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Services</h3>
                                        <ul className={styles.roadmap}>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Graphic Designing</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Branding</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> User Interface</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Responsive Design</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> UX Design</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Design Language</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.livechat}>
                                    <Link className={styles.btn1} href="#">Book a Call</Link>
                                    <Link className={styles.btn1} href="#">Live Chat</Link>
                                </div>
                                

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>
                                <div className={styles.output}>
                                    <Image alt="Bitswits" src={uiux} className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                        :
                        ''
                    }









                </Container>

            </section>
        </>
    )
}

export default Lookingfor