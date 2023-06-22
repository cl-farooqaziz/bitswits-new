import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Services.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//image
import foldimg from '../public/images/services/webSwipe.svg'

const Swipe = () => {
    return (
        <>
            <section className={`${styles.serviceBox} ${styles.swipe}`}>
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
                                    We Design Engaging Mobile Apps your users will swipe through from start to finish
                                </h2>
                                <p className='black fontf font-medium line30'>Our goal with each new mobile app design is to keep users engaged and drive higher completion rates. We use data and user research to create intuitive interfaces that drive actions and we follow the latest design trends to ensure your mobile app is visually appealing.</p>
                                <div className='mt-4'>
                                    <Row className='justify-content-between'>
                                        <Col lg={6}>
                                            <div className={styles.swapBox}>
                                                <h5 className='font18 fontf font-bold mt-1 letterspace black mb-0'>
                                                    High Performance User Experience
                                                </h5>
                                                <p className='font14 black fontf font-medium line30'>In our design lab performance always comes first. We ensure that your mobile app is effective and engaging.</p>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.swapBox}>
                                                <h5 className='font18 fontf font-bold mt-1 letterspace black mb-0'>
                                                    Swipe that Convert
                                                </h5>
                                                <p className='font14 black fontf font-medium line30'>In our design lab performance always comes first. We ensure that your mobile app is effective and engaging.</p>
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

export default Swipe