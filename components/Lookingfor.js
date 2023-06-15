import React from 'react'
import styles from '@/styles/Looking.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { RxArrowRight } from 'react-icons/rx'
import ourportfolio3 from '../public/images/lookingfor/loop.png'
import ourportfolio31 from '../public/images/lookingfor/loop2.png'
import ourportfolio32 from '../public/images/lookingfor/loop3.png'
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
                            <h4 className='font65 black fontf font-bold line60 black'>If You're <span className='grdiant'>Looking For</span> </h4>
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

                                <ul className={styles.roadmap}>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> iOS App Development</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Beacon Apps</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Android App Development</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> React Native Apps</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Smart Watch Apps</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} />Mobile Web Apps</li>
                                </ul>

                                <div className={`${styles.devlp1} mt-5 mb-5`}>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>3 - 6 Months</p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Service</h3>
                                        <p className='fontf black font-medium font15'>Android App Development <br></br>
                                            Flutter App Development<br></br>
                                            iOS App Development<br></br>
                                            React Native App Development<br></br>
                                            Wearable App Development<br></br>
                                            Cross Platform App Development<br></br>
                                            Web App Development<br></br>
                                        </p>
                                    </div>
                                </div>

                                <Link className={styles.btn1} href="#">Book a Call</Link>

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

                                <ul className={styles.roadmap}>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Unity Game Development</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> 2D & 3D Game Development</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> iOS Game Development</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> HTML5 Game Development</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Android Game Development</li>
                                </ul>

                                <div className={`${styles.devlp1} mt-5 mb-5`}>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>3-8 Months </p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Service</h3>
                                        <p className='fontf black font-medium font15'>2D Game Development <br></br>
                                            3D Game Development<br></br>
                                            NFT Game Development<br></br>
                                            Blockchain Game Development<br></br>
                                        </p>
                                    </div>
                                </div>

                                <Link className={styles.btn1} href="#">Book a Call</Link>

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>
                                <div className={styles.output}>
                                    <Image alt="Bitswits" src={ourportfolio31} className='img-fluid' />
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

                                <ul className={styles.roadmap}>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} />Custom Web Applications Development</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Progressive Web Apps</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> REST API Development</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Mobile Web Apps</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Opensource Framework Experts</li>
                                </ul>

                                <div className={`${styles.devlp1} mt-5 mb-5`}>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>1-3 months </p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Service</h3>
                                        <p className='fontf black font-medium font15'>User Interface Design, User Experience Design.</p>
                                    </div>
                                </div>

                                <Link className={styles.btn1} href="#">Book a Call</Link>

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>
                                <div className={styles.output}>
                                    <Image alt="Bitswits" src={ourportfolio32} className='img-fluid' />
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

                                <ul className={styles.roadmap}>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Smart Contracts Development</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Crypto Exchange Development</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Blockchain App Consultation</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Crypto Wallet Development</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Hyperledger Based Solutions</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> IEO & ICO Services</li>
                                </ul>

                                <div className={`${styles.devlp1} mt-5 mb-5`}>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>1-3 months </p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Service</h3>
                                        <p className='fontf black font-medium font15'>User Interface Design, User Experience Design.</p>
                                    </div>
                                </div>

                                <Link className={styles.btn1} href="#">Book a Call</Link>

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>
                                <div className={styles.output}>
                                    <Image alt="Bitswits" src={ourportfolio32} className='img-fluid' />
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
                                <ul className={styles.roadmap}>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> AI-Based Solutions</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Intelligent Recommendation Engine</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Chatbot Development</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Voice-based AI</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Business Process Automation</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Computer Vision</li>
                                </ul>


                                <div className={`${styles.devlp1} mt-5 mb-5`}>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>1-3 months </p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Service</h3>
                                        <p className='fontf black font-medium font15'>User Interface Design, User Experience Design.</p>
                                    </div>
                                </div>

                                <Link className={styles.btn1} href="#">Book a Call</Link>

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>
                                <div className={styles.output}>
                                    <Image alt="Bitswits" src={ourportfolio32} className='img-fluid' />
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
                                <ul className={styles.roadmap}>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Graphic Designing</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Branding</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> User Interface</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Responsive Design</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> UX Design</li>
                                    <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Design Language</li>
                                </ul>


                                <div className={`${styles.devlp1} mt-5 mb-5`}>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>1-3 months </p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Service</h3>
                                        <p className='fontf black font-medium font15'>User Interface Design, User Experience Design.</p>
                                    </div>
                                </div>

                                <Link className={styles.btn1} href="#">Book a Call</Link>

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>
                                <div className={styles.output}>
                                    <Image alt="Bitswits" src={ourportfolio32} className='img-fluid' />
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