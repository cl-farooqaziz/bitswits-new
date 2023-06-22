import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Services.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//image
import foldimg from '../public/images/services/webAhead.svg'

const Ahead = () => {
    return (
        <>
            <section className={`${styles.serviceBox} ${styles.ahead}`}>
                <Container>
                    <Row className='rowGap'>
                        <Col lg={7}>
                            <div className={styles.aheadTxt}>
                                <h2 className='font30 black fontf font-bold line40 black'>
                                    Our Mobile App Research Data that puts you ahead of others
                                </h2>
                                <p className='black fontf font-medium line30'>We conduct user research with real people to provide valuable insights that help our clients stay ahead of their competitors. We use various creative methods to gather data and inform product decisions based on the needs and wants of the target audience.</p>
                                <div className='mt-4'>
                                    <Row className='justify-content-between'>
                                        <Col lg={6}>
                                            <div className={styles.swapBox}>
                                                <h5 className='font18 fontf font-bold mt-1 letterspace black mb-0'>
                                                    Laser Focused User Research
                                                </h5>
                                                <p className='font14 black fontf font-medium line30'>We remain laser focused on your target audience to best meet their needs and requirements.</p>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.swapBox}>
                                                <h5 className='font18 fontf font-bold mt-1 letterspace black mb-0'>
                                                    Competitive Advantage
                                                </h5>
                                                <p className='font14 black fontf font-medium line30'>Our research process gives you a competitive advantage and up-to-date market insights.</p>
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
                        <Col lg={5}>
                            <div className={styles.aheadImg}>
                                <Image src={foldimg} alt='bitswits' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Ahead