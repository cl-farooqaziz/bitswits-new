import React from 'react'
import styles from '@/styles/Ourportfoliolp.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ourportfolio1 from '../public/images/ourportfoliolp/music.png'
import ourportfolio2 from '../public/images/ourportfoliolp/ezride.png'
import ourportfolio3 from '../public/images/ourportfoliolp/findfood.png'
import ourportfolio4 from '../public/images/ourportfoliolp/prohealth.png'


import Image from 'next/image';
import { RiArrowRightUpLine } from 'react-icons/ri';

const Ourportfoliolp = () => {

    var awardslogo = {
        dots: false,
        arrows: true,
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
                    dots: true,
                    arrows: false,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: true,
                    arrows: false,
                }
            },
        ]
    };

    return (
        <>
            <section className={styles.ourportfolio}>
                <Container className='newyou'>
                    <Row className={styles.project}>
                        <Col lg={2}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace black'>Work</h5>
                        </Col>
                        <Col lg={7}>
                            <h2 className='font65 black fontf font-bold line60 black'>Our <span className='grdiant'>Portfolio</span></h2>
                        </Col>
                        <Col lg={3}>
                            <Link className={styles.bttns1} href="#">View All Work</Link>
                        </Col>
                    </Row>

                    <Slider {...awardslogo} className='mt-5 pt-3 ourarrows2'>
                        <div className={styles.rightlogo}>
                            <Image alt="bitswits" src={ourportfolio1} className="img-fluid  mb-4" />
                            <Link className='fontf font25 black font-bold mt-4' href='#'>View Case Studies <RiArrowRightUpLine className={styles.arrow} size={25} /> </Link>
                        </div>
                        <div className={styles.rightlogo}>
                            <Image alt="bitswits" src={ourportfolio2} className="img-fluid  mb-4" />
                            <Link className='fontf font25 black font-bold mt-4' href='#'>View Case Studies <RiArrowRightUpLine className={styles.arrow} size={25} /> </Link>
                        </div>
                        <div className={styles.rightlogo}>
                            <Image alt="bitswits" src={ourportfolio3} className="img-fluid  mb-4" />
                            <Link className='fontf font25 black font-bold mt-4' href='#'>View Case Studies <RiArrowRightUpLine className={styles.arrow} size={25} /> </Link>
                        </div>
                        <div className={styles.rightlogo}>
                            <Image alt="bitswits" src={ourportfolio4} className="img-fluid mb-4" />
                            <Link className='fontf font25 black font-bold mt-5' href='#'>View Case Studies <RiArrowRightUpLine className={styles.arrow} size={25} /> </Link>
                        </div>
                      
                    </Slider>
                </Container>
            </section>

        </>
    )
}

export default Ourportfoliolp