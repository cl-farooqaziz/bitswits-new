import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Rated.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import people from '../public/images/rated/people.svg'
import new1 from '../public/images/rated/star.svg'
import data from '../public/images/rated/icon1.svg'
import data2 from '../public/images/rated/icon2.svg'
import rated from '../public/images/rated/revie.svg'

const Rated = () => {
    return (
        <>
            <section className={`${styles.star} py-5`}>
                <Container>
                    <Row className={styles.posting}>
                        <Col lg={12} className={styles.review}>
                            <Row className='align-items-center justify-content-center'>
                                <Col lg={3}>
                                    <div className={styles.people}>
                                        <Image src={people} class="img-fluid" alt="bitswits" />
                                    </div>
                                </Col>

                                <Col lg={2}>
                                    <div className={styles.new}>
                                        <Image src={new1} class="img-fluid" alt="bitswits" />
                                        <p class="font14 white text-center">
                                            4.8 out of 5 (review rating) <br />
                                            Over 1,200+ reviews
                                        </p>
                                    </div>
                                </Col>

                                <Col lg={3}>
                                    <div className={styles.data}>
                                        <Image src={data} class="img-fluid" alt="bitswits" />
                                        <div class="post">
                                            <h5 class="font14 white mb-0">HIGH PERFORMER</h5>
                                            <p class="font14 white mb-0">Mobile Application Team</p>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={3}>
                                    <div className={styles.data}>
                                        <Image src={data2} class="img-fluid" alt="bitswits" />
                                        <div class="post">
                                            <h5 class="font14 white mb-0">IN TOP 3 BEST RATED</h5>
                                            <p class="font14 white mb-0">Mobile &amp; Game Development </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.rated}>
                                <Image src={rated} alt="bitswits" class="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
        </>
    )
}

export default Rated