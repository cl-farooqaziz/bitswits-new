import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import styles from '@/styles/Capabilitiesnft.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import team1 from '../public/newHomePageImages/1.png'
import team2 from '../public/newHomePageImages/2.png'
import team3 from '../public/newHomePageImages/3.png'
import team4 from '../public/newHomePageImages/4.png'
import team5 from '../public/newHomePageImages/5.png'
import team6 from '../public/newHomePageImages/6.png'
import close from '../public/newHomePageImages/close.png'


import blog212 from '../public/newHomePageImages/blog2.png'

const Capabilitiesnft = () => {


    var awardslogo = {
        dots: true,
        arrows: false,
        loop: true,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };



    return (
        <>

            <section className={styles.home}>
                <Container className='qtechcap'>
                    <Row className={styles.posttext}>
                        <Col xl={12}>
                            <h3>On-Demand</h3>
                        </Col>
                        <Col xl={12}>
                            <div className={styles.build}>
                                <div>
                                    <h2>Creating Digital Magic: Tap Into the <br></br> Power of On-Demand NFT Game <br></br> Development</h2>
                                    <p className='white'>BitsWits combine the power of blockchain technology with digital gaming to create innovative and captivating experiences. We uphold the mission of bringing a new kind of entertainment to the world—one that is safe, secure, and exciting! Whether NFT games for mobile, PC, and console platforms, our games feature dynamic gameplay, stunning graphics, and immersive storylines that captivate players. With cutting-edge technology and unbeatable artistry, we are transforming gaming into an entirely new experience.</p>
                                </div>
                                <Link className={styles.about} href="#">Connect Now!</Link>
                            </div>
                        </Col>
                    </Row>
                    <Row>

                        <div className={styles.connsct}>
                            <Row className={` ${styles.bor}  mt-5 mb-5 `}>


                                <Col lg={2}><div className={styles.line1}></div></Col>
                                <Col lg={2}><div className={styles.line2}></div></Col>
                                <Col lg={2}><div className={styles.line3}></div></Col>
                                <Col lg={2}><div className={styles.line4}></div></Col>
                                <Col lg={2}><div className={styles.line5}></div></Col>
                                <Col lg={2}><div className={styles.line6}></div></Col>
                                <Col lg={2}><div className={styles.line7}></div></Col>
                                <Col lg={2}><div className={styles.line8}></div></Col>
                                <Col lg={2}><div className={styles.line9}></div></Col>


                            </Row>
                        </div>
                        <Slider {...awardslogo} className={` ${styles.nextalign1} prohome mt-4 mb-4`}>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image src={blog212} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image src={blog212} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image src={blog212} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image src={blog212} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>



                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image src={blog212} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image src={blog212} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image src={blog212} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image src={blog212} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={12}>
                                        <div>
                                            <Image src={blog212} alt='bitswits' className='img-fluid' />
                                        </div>
                                    </Col>


                                </Row>
                            </div>

                        </Slider>
                    </Row>

                </Container>
            </section>



        </>
    )
}

export default Capabilitiesnft