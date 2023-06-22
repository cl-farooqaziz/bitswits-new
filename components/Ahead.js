import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Services.module.css'
import { Container, Row, Col } from 'react-bootstrap'



const Ahead = (props) => {
    return (
        <>
            <section className={`${styles.serviceBox} ${styles.ahead}`}>
                <Container>
                    <Row className='rowGap'>
                        <Col lg={7}>
                            <div className={styles.aheadTxt}>
                                <h2 className='font30 black fontf font-bold line40 black'>
                                    {props.title}
                                </h2>
                                <p className='black fontf font-medium line30'>
                                    {props.para}
                                </p>
                                <div className='mt-4'>
                                    <Row className='justify-content-between'>
                                        <Col lg={6}>
                                            <div className={styles.swapBox}>
                                                <h5 className='font18 fontf font-bold mt-1 letterspace black mb-0'>
                                                    {props.subtitle}
                                                </h5>
                                                <p className='font14 black fontf font-medium line30'>
                                                    {props.subpara}
                                                </p>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.swapBox}>
                                                <h5 className='font18 fontf font-bold mt-1 letterspace black mb-0'>
                                                    {props.subtitle2}
                                                </h5>
                                                <p className='font14 black fontf font-medium line30'>
                                                    {props.subpara2}
                                                </p>
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
                                <Image src={props.ahead} alt='bitswits' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Ahead