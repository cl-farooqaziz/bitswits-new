import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/About.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import phone1 from '../public/images/aboutslider/phone1.png'
import phone2 from '../public/images/aboutslider/phone2.png'
import phone3 from '../public/images/aboutslider/phone3.png'
import phone4 from '../public/images/aboutslider/phone4.png'
import phone5 from '../public/images/aboutslider/phone5.png'
import phone6 from '../public/images/aboutslider/phone6.png'
import phone7 from '../public/images/aboutslider/phone7.png'
import phone8 from '../public/images/aboutslider/phone8.png'
import phone9 from '../public/images/aboutslider/phone9.png'


const AboutUsSec = () => {

    var phoneSlider = {
        dots: false,
        arrows: false,
        loop: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
            <section className={`${styles.aboutus} ${styles.aboutUsSec}`}>
                <Container>
                    <Row className='aboutfold'>
                        <Col md={2}>
                            <h3 className='font20 fontf font-semibold mt-1 letterspace black'>About Us</h3>
                        </Col>
                        <Col lg={7}>
                            <h2 className='font65 black fontf font-bold line60 black'>A Performance-Driven Global Remote Team of Expert <span className='grdiant'>App Developers!</span></h2>
                        </Col>
                        <Col lg={3}>
                            <Link className={`${styles.bttns1} mt-3 mt-lg-0 mb-4 mb-lg-0`} href="#">
                                CALL NOW!
                            </Link>
                        </Col>
                        <Col lg={12} className='mt-5'>
                            <p className='font25 fontf font-medium mt-4 mb-4 black'>We at, BitsWits, the top mobile application development agency have established ourselves as a reliable partner for leading start-ups around the world. Our team dedicated to enabling growth by providing multiple range of design and development services.</p>

                            <p className='font25 fontf font-medium mt-4 black'>Our mobile app developers and designers' goal is to achieve productive outcomes to help our clients succeed in the highly competitive digital world.</p>
                        </Col>
                        <Col lg={12} className='mt-5'>
                            <div className={styles.phoneSliderBox}>
                                <Slider {...phoneSlider} className={`${styles.phoneSlider} phoneSlider`}>
                                    <div className={`${styles.slideImg} slideImg`}>
                                        <Image src={phone1} alt='bitswits' className='img-fluid' loading="lazy" />
                                    </div>
                                    <div className={`${styles.slideImg} slideImg`}>
                                        <Image src={phone2} alt='bitswits' className='img-fluid' loading="lazy" />
                                    </div>
                                    <div className={`${styles.slideImg} slideImg`}>
                                        <Image src={phone3} alt='bitswits' className='img-fluid' loading="lazy" />
                                    </div>
                                    <div className={`${styles.slideImg} slideImg`}>
                                        <Image src={phone4} alt='bitswits' className='img-fluid' loading="lazy" />
                                    </div>
                                    <div className={`${styles.slideImg} slideImg`}>
                                        <Image src={phone5} alt='bitswits' className='img-fluid' loading="lazy" />
                                    </div>
                                    <div className={`${styles.slideImg} slideImg`}>
                                        <Image src={phone6} alt='bitswits' className='img-fluid' loading="lazy" />
                                    </div>
                                    <div className={`${styles.slideImg} slideImg`}>
                                        <Image src={phone7} alt='bitswits' className='img-fluid' loading="lazy" />
                                    </div>
                                    <div className={`${styles.slideImg} slideImg`}>
                                        <Image src={phone8} alt='bitswits' className='img-fluid' loading="lazy" />
                                    </div>
                                    <div className={`${styles.slideImg} slideImg`}>
                                        <Image src={phone9} alt='bitswits' className='img-fluid' loading="lazy" />
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutUsSec