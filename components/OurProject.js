import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/OurProject.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
//images
import slideImg1 from '../public/images/workprojects/slideimg1.svg'
import slideImg2 from '../public/images/workprojects/slideimg2.svg'
import slideImg3 from '../public/images/workprojects/slideimg3.svg'
import slideImg4 from '../public/images/workprojects/slideimg4.svg'
import slidebefore from '../public/images/workprojects/slidebefore.png'


const OurProject = () => {

    var ourproject = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <section className={styles.ourProject}>
                <Container>
                    <Row className={styles.project}>
                        <Col lg={3}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace white mb-0'>Capabilities</h5>
                        </Col>
                        <Col lg={7}>
                            <h4 className='font50 black fontf font-bold line60 white mb-0'>
                                <span className='grdiant'>How We Work</span> <br />
                                On Projects
                            </h4>
                        </Col>
                        <Col lg={2}>
                            <Link className={styles.bttns1} href="#">Connect Now!</Link>
                        </Col>
                        <Col lg={12}>
                            <div className='mt-5'>
                                <Slider {...ourproject} className={`${styles.prjctSlider}`}>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={5}>
                                                <div className={styles.slideCntnt}>
                                                    <h3 className='font20 fontf font-semibold white'>Discovery</h3>
                                                    <p className='font15 fontf white'>We will begin every project with a discovery phase to determine the actual problem to solve. Because "a problem well defined is a problem half solved."</p>
                                                    <div className={styles.slideList}>
                                                        <Image alt="Bitswits" className='img-fluid'
                                                            src={slidebefore}
                                                            alt="bitswits"
                                                        />
                                                        <p className='font12 fontf white mb-0'>Determine UX challenges & goals</p>
                                                    </div>
                                                    <div className={styles.slideList}>
                                                        <Image alt="Bitswits" className='img-fluid'
                                                            src={slidebefore}
                                                            alt="bitswits"
                                                        />
                                                        <p className='font12 fontf white mb-0'>Conduct user research & interviews</p>
                                                    </div>
                                                    <div className={styles.slideList}>
                                                        <Image alt="Bitswits" className='img-fluid'
                                                            src={slidebefore}
                                                            alt="bitswits"
                                                        />
                                                        <p className='font12 fontf white mb-0'>Analyze data for targeted UX solutions</p>
                                                    </div>
                                                    <div className='mt-3'>
                                                        <Link href="#" className='grdiant'>
                                                            BOOK A CALL
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className={styles.slideImg}>
                                                    <Image alt="Bitswits" className='img-fluid'
                                                        src={slideImg1}
                                                        alt="bitswits"
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={5}>
                                                <div className={styles.slideCntnt}>
                                                    <h3 className='font20 fontf font-semibold white'>Discovery</h3>
                                                    <p className='font15 fontf white'>We will begin every project with a discovery phase to determine the actual problem to solve. Because "a problem well defined is a problem half solved."</p>
                                                    <div className={styles.slideList}>
                                                        <Image alt="Bitswits" className='img-fluid'
                                                            src={slidebefore}
                                                            alt="bitswits"
                                                        />
                                                        <p className='font12 fontf white mb-0'>Determine UX challenges & goals</p>
                                                    </div>
                                                    <div className={styles.slideList}>
                                                        <Image alt="Bitswits" className='img-fluid'
                                                            src={slidebefore}
                                                            alt="bitswits"
                                                        />
                                                        <p className='font12 fontf white mb-0'>Conduct user research & interviews</p>
                                                    </div>
                                                    <div className={styles.slideList}>
                                                        <Image alt="Bitswits" className='img-fluid'
                                                            src={slidebefore}
                                                            alt="bitswits"
                                                        />
                                                        <p className='font12 fontf white mb-0'>Analyze data for targeted UX solutions</p>
                                                    </div>
                                                    <div className='mt-3'>
                                                        <Link href="#" className='grdiant'>
                                                            BOOK A CALL
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className={styles.slideImg}>
                                                    <Image alt="Bitswits" className='img-fluid'
                                                        src={slideImg2}
                                                        alt="bitswits"
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={5}>
                                                <div className={styles.slideCntnt}>
                                                    <h3 className='font20 fontf font-semibold white'>Discovery</h3>
                                                    <p className='font15 fontf white'>We will begin every project with a discovery phase to determine the actual problem to solve. Because "a problem well defined is a problem half solved."</p>
                                                    <div className={styles.slideList}>
                                                        <Image alt="Bitswits" className='img-fluid'
                                                            src={slidebefore}
                                                            alt="bitswits"
                                                        />
                                                        <p className='font12 fontf white mb-0'>Determine UX challenges & goals</p>
                                                    </div>
                                                    <div className={styles.slideList}>
                                                        <Image alt="Bitswits" className='img-fluid'
                                                            src={slidebefore}
                                                            alt="bitswits"
                                                        />
                                                        <p className='font12 fontf white mb-0'>Conduct user research & interviews</p>
                                                    </div>
                                                    <div className={styles.slideList}>
                                                        <Image alt="Bitswits" className='img-fluid'
                                                            src={slidebefore}
                                                            alt="bitswits"
                                                        />
                                                        <p className='font12 fontf white mb-0'>Analyze data for targeted UX solutions</p>
                                                    </div>
                                                    <div className='mt-3'>
                                                        <Link href="#" className='grdiant'>
                                                            BOOK A CALL
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className={styles.slideImg}>
                                                    <Image alt="Bitswits" className='img-fluid'
                                                        src={slideImg3}
                                                        alt="bitswits"
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={5}>
                                                <div className={styles.slideCntnt}>
                                                    <h3 className='font20 fontf font-semibold white'>Discovery</h3>
                                                    <p className='font15 fontf white'>We will begin every project with a discovery phase to determine the actual problem to solve. Because "a problem well defined is a problem half solved."</p>
                                                    <div className={styles.slideList}>
                                                        <Image alt="Bitswits" className='img-fluid'
                                                            src={slidebefore}
                                                            alt="bitswits"
                                                        />
                                                        <p className='font12 fontf white mb-0'>Determine UX challenges & goals</p>
                                                    </div>
                                                    <div className={styles.slideList}>
                                                        <Image alt="Bitswits" className='img-fluid'
                                                            src={slidebefore}
                                                            alt="bitswits"
                                                        />
                                                        <p className='font12 fontf white mb-0'>Conduct user research & interviews</p>
                                                    </div>
                                                    <div className={styles.slideList}>
                                                        <Image alt="Bitswits" className='img-fluid'
                                                            src={slidebefore}
                                                            alt="bitswits"
                                                        />
                                                        <p className='font12 fontf white mb-0'>Analyze data for targeted UX solutions</p>
                                                    </div>
                                                    <div className='mt-3'>
                                                        <Link href="#" className='grdiant'>
                                                            BOOK A CALL
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className={styles.slideImg}>
                                                    <Image alt="Bitswits" className='img-fluid'
                                                        src={slideImg4}
                                                        alt="bitswits"
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
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

export default OurProject