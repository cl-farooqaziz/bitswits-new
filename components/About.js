import React from 'react'
import styles from '@/styles/About.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import icon1 from '../public/images/about/icon1.svg'
import icon2 from '../public/images/about/icon2.svg'
import icon3 from '../public/images/about/icon3.svg'
import icon4 from '../public/images/about/icon4.svg'
import icon5 from '../public/images/about/icon5.svg'
import icon6 from '../public/images/about/icon6.svg'
import thumb1 from '../public/images/about/thumbnail-1.png'
import thumb2 from '../public/images/about/thumbnail-2.png'
import thumb3 from '../public/images/about/thumbnail-3.png'
import thumb4 from '../public/images/about/thumbnail-4.png'
import thumb5 from '../public/images/about/thumbnail-5.png'
import thumb6 from '../public/images/about/thumbnail-6.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {

    var awardslogo = {
        dots: true,
        arrows: false,
        loop: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (
        <>
            <section className={styles.aboutus}>

                <Container>
                    <Row className='aboutfold'>
                        <Col md={2}>
                            <h3 className='font20 fontf font-semibold mt-1 letterspace black'>About Us</h3>
                        </Col>
                        <Col lg={10}>
                            <h2 className='font50 black fontf font-bold line60'>The Mobile <span className='grdiant'>App Development Company </span> Thriving to Master Innovation! </h2>

                            <p className='font25 fontf font-medium mt-4 mb-4 black'>Our expert<span className='grdiant'> mobile app developers </span> work with the world’s leading start-ups, mid-level companies and enterprises to create advanced user experiences. </p>

                            <p className='font25 fontf font-medium mt-4 mb-4 black'>Witness the brilliance of our diverse portfolio which includes sound, food, pro-health improvement, real estate, traveling, and much more.  </p>


                            <Row className={styles.decade}>

                                <Col md={4}>
                                    <p className='fontf font25 font-medium m-0 black'>The portfolios we serve provide</p>
                                </Col>

                                <Col md={3} className={styles.spaceimg}>

                                    <div>
                                        <Image alt="Bitswits" src={icon4} className='img-fluid' />
                                    </div>

                                    <div className={styles.toltip}>
                                        <p className='fontf font25 font-medium m-0 black'>Home,</p>
                                        <Image className={styles.tolImg}
                                            src={thumb1}
                                            alt='Bitswits'
                                        />
                                    </div>
                                </Col>

                                <Col md={2} className={styles.spaceimg}>

                                    <div>
                                        <Image alt="Bitswits" src={icon1} className='img-fluid' />
                                    </div>

                                    <div className={styles.toltip}>
                                        <p className='fontf font25 font-medium m-0 black'>food,</p>
                                        <Image className={styles.tolImg}
                                            src={thumb2}
                                            alt='Bitswits'
                                        />
                                    </div>

                                </Col>


                                <Col md={3} className={styles.spaceimg}>

                                    <div>
                                        <Image alt="Bitswits" src={icon6} className='img-fluid' />
                                    </div>

                                    <div className={styles.toltip}>
                                        <p className='fontf font25 font-medium m-0 black'>improve health,</p>
                                        <Image className={styles.tolImg}
                                            src={thumb3}
                                            alt='Bitswits'
                                        />
                                    </div>

                                </Col>

                                <Col md={4} className={styles.spaceimg}>

                                    <div>
                                        <Image alt="Bitswits" src={icon5} className='img-fluid' />
                                    </div>

                                    <div className={styles.toltip}>
                                        <p className='fontf font25 font-medium m-0 black'>make better trade,</p>
                                        <Image className={styles.tolImg}
                                            src={thumb4}
                                            alt='Bitswits'
                                        />
                                    </div>

                                </Col>

                                <Col md={3} className={styles.spaceimg}>

                                    <div>
                                        <Image alt="Bitswits" src={icon2} className='img-fluid' />
                                    </div>

                                    <div className={styles.toltip}>
                                        <p className='fontf font25 font-medium m-0 black'>educate leaders,</p>
                                        <Image className={styles.tolImg}
                                            src={thumb5}
                                            alt='Bitswits'
                                        />
                                    </div>

                                </Col>

                                <Col md={3} className={styles.spaceimg}>

                                    <div>
                                        <Image alt="Bitswits" src={icon3} className='img-fluid' />
                                    </div>

                                    <div className={styles.toltip}>
                                        <p className='fontf font25 font-medium m-0 black'>and more,</p>
                                        <Image className={styles.tolImg}
                                            src={thumb6}
                                            alt='Bitswits'
                                        />
                                    </div>

                                </Col>



                            </Row>



                            <Slider {...awardslogo} className={` ${styles.nextalign1} prohome mt-4 mb-4`}>

                                <div className={styles.spaceimg}>

                                    <div>
                                        <Image alt="Bitswits" src={icon4} className='img-fluid' />
                                    </div>

                                    <div>
                                        <p className='fontf font25 font-medium m-0 black'>Home</p>
                                    </div>

                                </div>

                                <div className={styles.spaceimg}>

                                    <div>
                                        <Image alt="Bitswits" src={icon1} className='img-fluid' />
                                    </div>

                                    <div>
                                        <p className='fontf font25 font-medium m-0 black'>food</p>
                                    </div>

                                </div>


                                <div className={styles.spaceimg}>

                                    <div>
                                        <Image alt="Bitswits" src={icon6} className='img-fluid' />
                                    </div>

                                    <div>
                                        <p className='fontf font25 font-medium m-0 black'>improve health</p>
                                    </div>

                                </div>

                                <div className={styles.spaceimg}>

                                    <div>
                                        <Image alt="Bitswits" src={icon5} className='img-fluid' />
                                    </div>

                                    <div>
                                        <p className='fontf font25 font-medium m-0 black'>make better trade</p>
                                    </div>

                                </div>

                                <div className={styles.spaceimg}>

                                    <div>
                                        <Image alt="Bitswits" src={icon2} className='img-fluid' />
                                    </div>

                                    <div>
                                        <p className='fontf font25 font-medium m-0 black'>educate leaders</p>
                                    </div>

                                </div>

                                <div className={styles.spaceimg}>

                                    <div>
                                        <Image alt="Bitswits" src={icon3} className='img-fluid' />
                                    </div>

                                    <div>
                                        <p className='fontf font25 font-medium m-0 black'>and more</p>
                                    </div>

                                </div>


                            </Slider>

                            <Button className={styles.aboutbtn}>About US</Button>

                        </Col>
                    </Row>
                </Container>


            </section>


        </>
    )
}

export default About