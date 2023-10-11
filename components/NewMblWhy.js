import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/NewMblWhy.module.css";
import { Container, Row, Col } from 'react-bootstrap'
//
import WhatImage from "@/public/newMobilePageImages/what_Image.png"



const NewMblWhy = (props) => {
    return (
        <>
            <section className={styles.newHomeBg}>
                <Container>

                    <Row>
                        <Col lg={10} className='mx-auto'>
                            <h4 className='font20 font-bold text-white text-center'>Why Bitswits?</h4>
                            <h2 className='grdiant f-80 font-bold text-center'>Precision,Performance <br /> & Perfection</h2>
                            <p className={`f-20 text-white font-bold text-center`}>
                                Why Do You Require Our iOS Applications?
                            </p>
                            <p className={`text-center font16 text-white`}>
                                Building your mobile app acts like a technological asset that improves the services of your business, attracting more customers, boosting its success, and letting you shape the trajectory of your business.
                            </p>
                        </Col>
                        <Col lg={12} className='mt-5'>
                            <Row className='gy-5'>
                                <Col lg={4}>
                                    <div className={styles.whyBox}>
                                        <h5 className='font40 font-bold text-white mb-3'>{props.titleOne}</h5>
                                        <p className={`font16 text-white mb-0`}>{props.paraOne}</p>
                                        <div className={styles.whyImg}>
                                            <Image quality={75} src={props.iconOne} width={55} height={55} />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.whyBox}>
                                    <h5 className='font40 font-bold text-white mb-3'>{props.titleTwo}</h5>
                                        <p className={`font16 text-white mb-0`}>{props.paraTwo}</p>
                                        <div className={styles.whyImg}>
                                            <Image quality={75} src={props.iconTwo} width={55} height={55} />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.whyBox}>
                                        <h5 className='font40 font-bold text-white mb-3'>{props.titleThree}</h5>
                                        <p className={`font16 text-white mb-0`}>{props.paraThree}</p>
                                        <div className={styles.whyImg}>
                                            <Image quality={75} src={props.iconThree} width={55} height={55} />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.whyBox}>
                                        <h5 className='font40 font-bold text-white mb-3'>{props.titleFour}</h5>
                                        <p className={`font16 text-white mb-0`}>{props.paraFour}</p>
                                        <div className={styles.whyImg}>
                                            <Image quality={75} src={props.iconFour} width={55} height={55} />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.whyBox}>
                                        <h5 className='font40 font-bold text-white mb-3'>{props.titleFive}</h5>
                                        <p className={`font16 text-white mb-0`}>{props.paraFive}</p>
                                        <div className={styles.whyImg}>
                                            <Image quality={75} src={props.iconFive} width={55} height={55} />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.whyBox}>
                                        <h5 className='font40 font-bold text-white mb-3'>{props.titleSix}</h5>
                                        <p className={`font16 text-white mb-0`}>{props.paraSix}</p>
                                        <div className={styles.whyImg}>
                                            <Image quality={75} src={props.iconSix} width={55} height={55} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={10} className='mx-auto mt-5'>
                            <div className={styles.sec_btn}>
                                <Link href='javascript:;' className={`${styles.btn1} ${styles.btn} font-extrabold`}>
                                    Book A Call
                                </Link>
                                <Link href='javascript:;' className={`${styles.btn2} ${styles.btn} font-extrabold`}>
                                    Live Chat
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewMblWhy
