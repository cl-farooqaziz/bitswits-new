import React from 'react'
import styles from "@/styles/NewBanner.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
//images
import banImg1 from '../public/newHomePage/images/slider1.png'
import banImg2 from '../public/newHomePage/images/slider2.png'
import banImg3 from '../public/newHomePage/images/slider3.png'
import banImg4 from '../public/newHomePage/images/slider4.png'

const NewBanner = () => {

    var bannerslider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 20000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 4.2,
        slidesToScroll: 1

    };

    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row>
                        <Col xl={12}>
                            <div className={styles.content}>
                                <p className={`${styles.just} text-center f-20 mb-0`}>A modern digital factory</p>
                                <h3 className={`${styles.develop} text-center f-60 font-bold`}>Designed for ambitious <br></br>
                                    brands and innovative concepts.</h3>

                                <div className={styles.pont}>
                                    <Link className={styles.about} href="#">Let's Connect</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>

                <Slider {...bannerslider} className={styles.slider}>
                    <div className={styles.strpImg}>
                        <Image alt="bitswits" src={banImg1} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="bitswits" src={banImg2} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="bitswits" src={banImg3} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="bitswits" src={banImg4} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="bitswits" src={banImg1} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="bitswits" src={banImg2} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="bitswits" src={banImg3} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="bitswits" src={banImg4} className="img-fluid" />
                    </div>
                </Slider>
            </section>


        </>
    )
}

export default NewBanner