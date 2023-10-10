import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/NewMblWhy.module.css";
import { Container, Row, Col } from 'react-bootstrap'
//
import WhatImage from "@/public/newMobilePageImages/what_Image.png"
import icon1 from "../public/newMobilePageImages/icon1.png"
import icon2 from "../public/newMobilePageImages/icon2.png"
import icon3 from "../public/newMobilePageImages/icon3.png"
import icon4 from "../public/newMobilePageImages/icon4.png"
import icon5 from "../public/newMobilePageImages/icon5.png"
import icon6 from "../public/newMobilePageImages/icon6.png"

const NewMblWhy = () => {
    return (
        <>
            <section className={styles.newHomeBg}>
                <Container>

                    <Row>
                        <Col lg={10} className='mx-auto'>
                            <h4 className='font20 font-bold text-white text-center'>Why Bitswits?</h4>
                            <h2 className='grdiant f-80 font-bold text-center'>Precision, Performance <br /> & Perfection</h2>
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
                                        <h5 className='font40 font-bold text-white mb-3'>Stunning <br /> Designs</h5>
                                        <p className={`font16 text-white mb-0`}>Our iOS developers craft pixel-perfect iOS apps with beautiful and latest designs for Apple devices.</p>
                                        <div className={styles.whyImg}>
                                            <Image quality={75} src={icon1} width={65} height={65} />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.whyBox}>
                                        <h5 className='font40 font-bold text-white mb-3'>Expert <br /> Development</h5>
                                        <p className={`font16 text-white mb-0`}>Expert iOS developers at BitsWits know about Swift and Xcode and utilize the latest iOS features for perfect user experiences.</p>
                                        <div className={styles.whyImg}>
                                            <Image quality={75} src={icon2} width={65} height={65} />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.whyBox}>
                                        <h5 className='font40 font-bold text-white mb-3'>High Performing <br /> Apps</h5>
                                        <p className={`font16 text-white mb-0`}>We build powerful and high-performing iOS applications that are stable, smooth, and fast</p>
                                        <div className={styles.whyImg}>
                                            <Image quality={75} src={icon3} width={65} height={65} />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.whyBox}>
                                        <h5 className='font40 font-bold text-white mb-3'>Apple Guidelines <br /> Compliance</h5>
                                        <p className={`font16 text-white mb-0`}>For optimal App Store optimization, our iOS developers stick to Apple's strict interface rules and standards of excellence.</p>
                                        <div className={styles.whyImg}>
                                            <Image quality={75} src={icon4} width={65} height={65} />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.whyBox}>
                                        <h5 className='font40 font-bold text-white mb-3'>Continuous <br /> Support</h5>
                                        <p className={`font16 text-white mb-0`}>We provide on-going support and maintenance to keep your applications updated with high-quality services.</p>
                                        <div className={styles.whyImg}>
                                            <Image quality={75} src={icon5} width={65} height={65} />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.whyBox}>
                                        <h5 className='font40 font-bold text-white mb-3'>Proven Track <br /> Records</h5>
                                        <p className={`font16 text-white mb-0`}>Our iOS app development services are known to have a proven history of successfully delivering hundreds of iOS applications for customers.</p>
                                        <div className={styles.whyImg}>
                                            <Image quality={75} src={icon6} width={65} height={65} />
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
