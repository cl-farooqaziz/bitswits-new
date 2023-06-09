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
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
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
                        <Col md={10}>
                            <h2 className='font65 black fontf font-bold line60'>The Development Agency<br></br> For  <span className='grdiant'>100% Results</span> </h2>

                            <p className='font25 fontf font-medium mt-4 mb-4 black'>For the past decade, we have partnered with some of the world’s leading start-ups to help them create user experience designs that drive results and accelerate their digital products' growth.</p>


                            <div className={styles.decade}>

                                <div>
                                    <p className='fontf font25 font-medium m-0 black'>The portfolios we serve provide</p>
                                </div>

                                <div className={styles.spaceimg}>

                                    <div>
                                        <Image alt="Bitswits" src={icon4} className='img-fluid' />
                                    </div>

                                    <div>
                                        <p className='fontf font25 font-medium m-0 black'>Home,</p>
                                    </div>

                                </div>

                                <div className={styles.spaceimg}>

                                    <div>
                                        <Image alt="Bitswits" src={icon1} className='img-fluid' />
                                    </div>

                                    <div>
                                        <p className='fontf font25 font-medium m-0 black'>food,</p>
                                    </div>

                                </div>


                                <div className={styles.spaceimg}>

                                    <div>
                                        <Image alt="Bitswits" src={icon6} className='img-fluid' />
                                    </div>

                                    <div>
                                        <p className='fontf font25 font-medium m-0 black'>improve health,</p>
                                    </div>

                                </div>

                                <div className={styles.spaceimg}>

                                    <div>
                                        <Image alt="Bitswits" src={icon5} className='img-fluid' />
                                    </div>

                                    <div>
                                        <p className='fontf font25 font-medium m-0 black'>make better trade,</p>
                                    </div>

                                </div>

                                <div className={styles.spaceimg}>

                                    <div>
                                        <Image alt="Bitswits" src={icon2} className='img-fluid' />
                                    </div>

                                    <div>
                                        <p className='fontf font25 font-medium m-0 black'>educate leaders,</p>
                                    </div>

                                </div>

                                <div className={styles.spaceimg}>

                                    <div>
                                        <Image alt="Bitswits" src={icon3} className='img-fluid' />
                                    </div>

                                    <div>
                                        <p className='fontf font25 font-medium m-0 black'>and more,</p>
                                    </div>

                                </div>



                            </div>



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