import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/ClientsThink.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
//images
import slideImg1 from '../public/images/clients/client1.png'
import slideImg2 from '../public/images/clients/client2.png'
import slideImg3 from '../public/images/clients/client3.png'
import slideImg4 from '../public/images/clients/client4.png'
import slideImg from '../public/images/clients/client.png'
import slidebefore from '../public/images/clients/stars.png'

function ClientsThink() {

    var clientsthink = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className={styles.ourClients}>
            <Container>
                <Row className={styles.clients}>
                    <Col lg={2}>
                        <h5 className='font20 fontf font-semibold mt-1 letterspace black mb-0'>Reviews</h5>
                    </Col>
                    <Col lg={7}>
                        <h4 className='font50 black fontf font-bold line60 mb-0'>
                            <span className='grdiant'>What Clients</span> <br />
                            Think About US
                        </h4>
                    </Col>
                    <Col lg={3}>
                        <Link className={`${styles.bttns1} bttns1 mt-3 mt-lg-0 mb-4 mb-lg-0`} href="#">
                            View All
                        </Link>
                    </Col>
                    <Col lg={9}>
                        <div className='mt-5'>
                            <Slider {...clientsthink} className={`${styles.clintSlider} prjctSlider clintSlider`}>
                                <div className={styles.slideBox}>
                                    <Row className={styles.slideRow}>
                                        <Col lg={4} className='pe-lg-0'>
                                            <div className={styles.slideImg}>
                                                <Image className='img-fluid'
                                                    src={slideImg1}
                                                    alt="bitswits"
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={8} className='ps-lg-0'>
                                            <div className={styles.slideCntnt}>
                                                <Image className='img-fluid'
                                                    src={slidebefore}
                                                    alt="bitswits"
                                                />
                                                <p className={` ${styles.hight } font13 fontf black mt-2 mb-0`}>I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.</p>
                                                <h5 className='font15 font-semibold fontf black mt-3 mb-0'>
                                                    Vivien Francis
                                                </h5>
                                                <p className='font12 fontf black mt-1 mb-0 pb-3'>Digital Marketing Consultant of Asia School of Business</p>
                                            </div>
                                            <ul className={styles.sliderli}>
                                                <li>
                                                    <span>Client</span>
                                                    <span className='font-bold fontf'>Asia School of Business (ASB)</span>
                                                </li>
                                                <li>
                                                    <span>Year</span>
                                                    <span className='font-bold fontf'>2023</span>
                                                </li>
                                                <li>
                                                    <span>Scope of work</span>
                                                    <span className='font-bold fontf'>Web Design</span>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className={styles.slideRow}>
                                        <Col lg={4} className='pe-lg-0'>
                                            <div className={styles.slideImg}>
                                                <Image className='img-fluid'
                                                    src={slideImg2}
                                                    alt="bitswits"
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={8} className='ps-lg-0'>
                                            <div className={styles.slideCntnt}>
                                                <Image className='img-fluid'
                                                    src={slidebefore}
                                                    alt="bitswits"
                                                />
                                                <p className={` ${styles.hight } font13 fontf black mt-2 mb-0`}>I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.</p>
                                                <h5 className='font15 font-semibold fontf black mt-3 mb-0'>
                                                    Vivien Francis
                                                </h5>
                                                <p className='font12 fontf black mt-1 mb-0 pb-3'>Digital Marketing Consultant of Asia School of Business</p>
                                            </div>
                                            <ul className={styles.sliderli}>
                                                <li>
                                                    <span>Client</span>
                                                    <span className='font-bold fontf'>Asia School of Business (ASB)</span>
                                                </li>
                                                <li>
                                                    <span>Year</span>
                                                    <span className='font-bold fontf'>2023</span>
                                                </li>
                                                <li>
                                                    <span>Scope of work</span>
                                                    <span className='font-bold fontf'>Web Design</span>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className={styles.slideRow}>
                                        <Col lg={4} className='pe-lg-0'>
                                            <div className={styles.slideImg}>
                                                <Image className='img-fluid'
                                                    src={slideImg3}
                                                    alt="bitswits"
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={8} className='ps-lg-0'>
                                            <div className={styles.slideCntnt}>
                                                <Image className='img-fluid'
                                                    src={slidebefore}
                                                    alt="bitswits"
                                                />
                                                <p className={` ${styles.hight } font13 fontf black mt-2 mb-0`}>I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.</p>
                                                <h5 className='font15 font-semibold fontf black mt-3 mb-0'>
                                                    Vivien Francis
                                                </h5>
                                                <p className='font12 fontf black mt-1 mb-0 pb-3'>Digital Marketing Consultant of Asia School of Business</p>
                                            </div>
                                            <ul className={styles.sliderli}>
                                                <li>
                                                    <span>Client</span>
                                                    <span className='font-bold fontf'>Asia School of Business (ASB)</span>
                                                </li>
                                                <li>
                                                    <span>Year</span>
                                                    <span className='font-bold fontf'>2023</span>
                                                </li>
                                                <li>
                                                    <span>Scope of work</span>
                                                    <span className='font-bold fontf'>Web Design</span>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className={styles.slideRow}>
                                        <Col lg={4} className='pe-lg-0'>
                                            <div className={styles.slideImg}>
                                                <Image className='img-fluid'
                                                    src={slideImg4}
                                                    alt="bitswits"
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={8} className='ps-lg-0'>
                                            <div className={styles.slideCntnt}>
                                                <Image className='img-fluid'
                                                    src={slidebefore}
                                                    alt="bitswits"
                                                />
                                                <p className={` ${styles.hight } font13 fontf black mt-2 mb-0`}>I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.</p>
                                                <h5 className='font15 font-semibold fontf black mt-3 mb-0'>
                                                    Vivien Francis
                                                </h5>
                                                <p className='font12 fontf black mt-1 mb-0 pb-3'>Digital Marketing Consultant of Asia School of Business</p>
                                            </div>
                                            <ul className={styles.sliderli}>
                                                <li>
                                                    <span>Client</span>
                                                    <span className='font-bold fontf'>Asia School of Business (ASB)</span>
                                                </li>
                                                <li>
                                                    <span>Year</span>
                                                    <span className='font-bold fontf'>2023</span>
                                                </li>
                                                <li>
                                                    <span>Scope of work</span>
                                                    <span className='font-bold fontf'>Web Design</span>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>
                            </Slider>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className={`${styles.slideArrow} mt-5`}>
                            <Image className='img-fluid'
                                src={slideImg}
                                alt="bitswits"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ClientsThink