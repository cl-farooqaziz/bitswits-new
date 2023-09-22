import React from 'react'
import styles from "@/styles/Newglobal.module.css";
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import team1 from '../public/images/bestglobal/global.png'

import bestglobal1 from '../public/images/bestglobal/1.png'
import bestglobal2 from '../public/images/bestglobal/2.png'
import bestglobal3 from '../public/images/bestglobal/3.png'
import bestgloba4 from '../public/images/bestglobal/4.png'

import bestglobal5 from '../public/images/bestglobal/5.png'
import bestglobal6 from '../public/images/bestglobal/6.png'
import bestglobal7 from '../public/images/bestglobal/7.png'
import bestgloba8 from '../public/images/bestglobal/8.png'

import bestglobal9 from '../public/images/bestglobal/9.png'
import bestglobal10 from '../public/images/bestglobal/10.png'
import bestglobal11 from '../public/images/bestglobal/11.png'
import bestgloba12 from '../public/images/bestglobal/12.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Newglobal = () => {


    let lctonSlider = {
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };




    return (
        <>

            <section className={styles.team}>
                <Container>
                    <Row>
                        <Col xl={9}>
                            <h3 className='f45 font-bold white'>World-Renowned</h3>
                            <h2 className={styles.success}>Brands Trust Us</h2>


                            <div className={styles.postpoint}>
                                <div>
                                    <Image src={bestglobal1} className='img-fluid' alt='bitswits' />
                                    <Image src={bestglobal2} className='img-fluid' alt='bitswits' />
                                    <Image src={bestglobal3} className='img-fluid' alt='bitswits' />
                                    <Image src={bestgloba4} className='img-fluid' alt='bitswits' />


                                </div>

                                <div className={styles.pont}>
                                    <Image src={bestglobal5} className='img-fluid' alt='bitswits' />
                                    <Image src={bestglobal6} className='img-fluid' alt='bitswits' />
                                    <Image src={bestglobal7} className='img-fluid' alt='bitswits' />
                                    <Image src={bestgloba8} className='img-fluid' alt='bitswits' />


                                </div>

                                <div >
                                    <Image src={bestglobal9} className='img-fluid' alt='bitswits' />
                                    <Image src={bestglobal10} className='img-fluid' alt='bitswits' />
                                    <Image src={bestglobal11} className='img-fluid' alt='bitswits' />
                                    <Image src={bestgloba12} className='img-fluid' alt='bitswits' />


                                </div>
                            </div>

                            <Slider {...lctonSlider} className={styles.lctnslide}>
                                <Image src={bestglobal1} className='img-fluid' alt='bitswits' />
                                <Image src={bestglobal2} className='img-fluid' alt='bitswits' />
                                <Image src={bestglobal3} className='img-fluid' alt='bitswits' />
                                <Image src={bestgloba4} className='img-fluid' alt='bitswits' />
                                <Image src={bestglobal5} className='img-fluid' alt='bitswits' />
                                <Image src={bestglobal6} className='img-fluid' alt='bitswits' />
                                <Image src={bestglobal7} className='img-fluid' alt='bitswits' />
                                <Image src={bestgloba8} className='img-fluid' alt='bitswits' />
                                <Image src={bestglobal9} className='img-fluid' alt='bitswits' />
                                <Image src={bestglobal10} className='img-fluid' alt='bitswits' />
                                <Image src={bestglobal11} className='img-fluid' alt='bitswits' />
                                <Image src={bestgloba12} className='img-fluid' alt='bitswits' />



                            </Slider>

                        </Col>
                        <Col xl={3}>
                            <div className={styles.pipe}>

                                <Image src={team1} className='img-fluid' alt='bitswits' />

                            </div>
                        </Col>
                    </Row>
                </Container>


            </section>







        </>
    )
}

export default Newglobal