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
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'

const Lookingfor = () => {


    const [gameshow, gameapp] = useState(true);
    const [gameshow1, gameapp1] = useState(false);
    const [gameshow2, gameapp2] = useState(false);

    function game() {


        gameapp(true);
        gameapp1(false);
        gameapp2(false);
    }
    function game1() {

        gameapp(false);
        gameapp1(true);
        gameapp2(false);
    }
    function game2() {

        gameapp(false);
        gameapp1(false);
        gameapp2(true);
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
                            <h4 className='font65 black fontf font-bold line60 black'>Delve Deeper into <span className='grdiant'>Our Core Services</span> </h4>
                        </Col>
                        <Col lg={3}>
                            <Link className={styles.bttns1} href="#">Book a Call</Link>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col lg={12}>
                           <div className={styles.arrow}>  <FaArrowLeft className={` ${styles.aling} ${styles.aling1}` } size={25} /> <FaArrowRight className={styles.aling} size={25}/>  </div>

                            <div className={styles.devlp}>
                                <div onClick={game} className={gameshow ? styles.btnblack : styles.game} >Mobile App Development</div>
                                <div onClick={game1} className={gameshow1 ? styles.btnblack : styles.game}>Game App Development</div>
                                <div onClick={game2} className={gameshow2 ? styles.btnblack : styles.game}>UI/UX App Design</div>
                                <div onClick={game1} className={gameshow1 ? styles.btnblack : styles.game}>Mobile Application</div>
                                <div onClick={game1} className={gameshow1 ? styles.btnblack : styles.game}>App Development</div>
                                <div onClick={game2} className={gameshow2 ? styles.btnblack : styles.game}>Web Development</div>
                            </div>
                        </Col>
                    </Row>

                    {gameshow ?

                        <Row>
                            <Col lg={6}>

                                <h3 className='fontf black font-bold font30 mt-5'>Transform Ideas into Exceptional Mobile Experiences.</h3>
                                <p className='fontf black font-medium font15'>Welcome to our <span className='grdiant'>mobile app development company</span> , where innovation emerges with excellence. Our team of skilled <span className='grdiant'> mobile app developers</span> help to create the most exceptional mobile app solutions that perfectly align with your unique vision and ideas. Whether you want to make a mesmerizing Android or iOS application or seek the versatility of Flutter and Cross-Platform, BitsWits has got you covered. </p>

                              

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

                                <h3 className='fontf black font-bold font30 mt-5'>Begin Your Gaming Adventure with our Game Development Company</h3>
                                <p className='fontf black font-medium font15'>Our skilled game developers at BitsWits are passionate about creating captivating gaming experiences that transport players into a whole new extraordinary world of action, adventure, thrill, love, and fantasy. With our diverse range of services, we cater to multiple dimensions of gaming. </p>

                              

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

                                <h3 className='fontf black font-bold font30 mt-5'>Discover the Potential of User-Centric Design with our UI/UX App Design Agency</h3>
                                <p className='fontf black font-medium font15'>We combine aesthetics and functionality to develop exceptional user experiences in our UI/UX design firm. To have a long-lasting positive effect on our users, we firmly think that every app should have an eye-catching design. We combine psychology, art, and technology in our UI/UX application design services to create user interfaces that are genuinely captivating, engaging, and inspiring.</p>

                              

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