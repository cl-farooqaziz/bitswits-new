import React from 'react'
import styles from '@/styles/Ourportfolio.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ourportfolio1 from '../public/images/ourportfolio/1.png'
import ourportfolio2 from '../public/images/ourportfolio/2.png'
import ourportfolio3 from '../public/images/ourportfolio/3.png'
import Image from 'next/image';

const Ourportfolio = () => {

    var awardslogo = {
        dots: false,
        arrows: false,
        loop:true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section className={styles.ourportfolio}>
                <Container>
                    <Row className={styles.project}>
                        <Col lg={2}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace black'>Work</h5>
                        </Col>
                        <Col lg={8}>
                            <h4 className='font65 black fontf font-bold line60 black'>Our <span className='grdiant'>Portfolio</span></h4>
                        </Col>
                        <Col lg={2}>
                            <Link className={styles.bttns1} href="#">View All Work</Link>
                        </Col>
                    </Row>

                    <Slider {...awardslogo} className='mt-5'>


                        <div className={styles.rightlogo}>
                            <Image src={ourportfolio1} className="img-cluid" />
                        </div>
                        <div className={styles.rightlogo}>
                            <Image src={ourportfolio2} className="img-cluid" />
                        </div>
                        <div className={styles.rightlogo}>
                            <Image src={ourportfolio3} className="img-cluid" />
                        </div>
                      


                    </Slider>
                </Container>
            </section>

        </>
    )
}

export default Ourportfolio