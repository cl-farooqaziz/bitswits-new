import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Services.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//image
import foldimg from '../public/images/services/webEnsure.svg'

const Ensure = () => {
    return (
        <>
            <section className={`${styles.serviceBox} ${styles.ensure}`}>
                <Container>
                    <Row>
                        <Col lg={5}>
                            <div className={styles.swipeImg}>
                                <Image src={foldimg} alt='bitswits' className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className={styles.swipeTxt}>
                                <h2 className='font30 black fontf font-bold line40 black'>
                                    We Test and Optimize your mobile app to ensure best user experience
                                </h2>
                                <p className='black fontf font-medium line30'>We aim to optimize your mobile app experience for better end results. Our team continuously looks for improvement opportunities and tests new features through A/B optimization.</p>
                                <div className='mt-4'>
                                    <Row className='justify-content-between'>
                                        <Col lg={6}>
                                            <div className={styles.swapBox}>
                                                <h5 className='font18 fontf font-bold mt-1 letterspace black mb-0'>
                                                    Constant Innovation
                                                </h5>
                                                <p className='font14 black fontf font-medium line30'>In our design Our primary focus is increasing the end result and making sure the site brings revenue to your business.</p>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.swapBox}>
                                                <h5 className='font18 fontf font-bold mt-1 letterspace black mb-0'>
                                                    Active On-Going Support
                                                </h5>
                                                <p className='font14 black fontf font-medium line30'>We only rely on real evidence-based improvements that drives conversion rates.</p>
                                            </div>
                                        </Col>
                                        <Col sm={5}>
                                            <Link className={`${styles.bttns1} mt-3`} href="#">
                                                Book A Call
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Ensure