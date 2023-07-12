import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Services.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//image


const Swipe = (props) => {
    return (
        <>
            <section className={`${styles.serviceBox} ${styles.swipe}`}>
                <Container>
                    <Row>
                        <Col lg={5}>
                            <div className={styles.swipeImg}>
                                <Image src={props.foldimg} alt='bitswits' className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className={styles.swipeTxt}>
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
                                                <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>
                                                    {props.subtitle}
                                                </h3>
                                                <p className='font14 black fontf font-medium line30'>
                                                    {props.subpara}
                                                </p>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.swapBox}>
                                                <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>
                                                {props.subtitle2}
                                                   
                                                </h3>
                                                <p className='font14 black fontf font-medium line30'>
                                                    {props.subpara2}
                                                </p>
                                            </div>
                                        </Col>
                                        <Col sm={5}>
                                            <Link className={`${styles.bttns1} mt-3`} href="#">
                                            Call Us Now!
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