import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/NewMblMaintain.module.css";
import { Container, Row, Col } from 'react-bootstrap'
//
import { useEffect, useRef } from "react";
import lottie from 'lottie-web';
//
import mobileapp from '../public/mobileapp.json';
import game from '../public/game.json';
import blockchain from '../public/blockchain.json';
import ai from '../public/artificial.json';
import web from '../public/webapp.json';
import uiux from '../public/uiuxapp.json';
import arvrapp from '../public/arvr.json';
import internetapp from '../public/internetofthings.json';


const NewMblServices = () => {

    const anime = useRef(null);

    useEffect(() => {

        lottie.loadAnimation({
            container: document.getElementById('lottie'),
            animationData: game,
            loop: true,
            autoplay: true,
        });

        lottie.loadAnimation({
            container: document.getElementById('blockchain'),
            animationData: blockchain,
            loop: true,
            autoplay: true,
        });
        lottie.loadAnimation({
            container: document.getElementById('artifical'),
            animationData: ai,
            loop: true,
            autoplay: true,
            renderer: "svg",
        });

        lottie.loadAnimation({
            container: document.getElementById('lottie-container'),
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: mobileapp,
        });

        lottie.loadAnimation({
            container: document.getElementById('lottie-web'),
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: web,
        });
        lottie.loadAnimation({
            container: document.getElementById('lottie-uiux'),
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: uiux,
        });
        lottie.loadAnimation({
            container: document.getElementById('lottie-arvrapp'),
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: arvrapp,
        });
        lottie.loadAnimation({
            container: document.getElementById('lottie-internetapp'),
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: internetapp,
        });

    }, []);

    return (
        <>
            <section className={styles.newHomeBg}>
                <Container>
                    <Row className='g-3'>
                        <Col lg={12}>
                            <p className={`f-20 font-bold text-white text-center`}>Services
                            </p>
                            <h1 className='text-white font55 font-bold text-center pb-5'>Maintaining digital quality with<br></br>
                                our collection of customizable services</h1>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font22 font-bold text-center'>IOS Application Development</h3>
                                    <p className={styles.para}>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design, agile development methodologies, and the latest tools and frameworks. Our experienced iOS developers deliver innovative and customized apps!</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app1}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-22 font-bold text-center'>Android Application Development</h3>
                                    <p className={styles.para}>We take Android app development to the next level by following a comprehensive approach, from ideation to launch. Our experienced developers use the latest technologies to create customized and scalable Android apps that exceed client expectations.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app2}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-22 font-bold text-center'>Web App Development</h3>
                                    <p className={styles.para}>We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies to create scalable and secure web applications that cater to your business needs. Hire our web app developers today!</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className={styles.app3}>
                                <Row className='align-items-center'>
                                    <Col xl={7}>
                                        <h3 className='text-white f-22 font-bold '>Flutter App Development</h3>
                                        <p className={styles.para1}>Our team of expert Flutter app developers at Bitswits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs. From ideation to deployment, we ensure a smooth and efficient development process.</p>

                                        <div className={styles.pont}>
                                            <Link className={styles.book} href="/new-home-page#">Book A Call</Link>
                                            <Link className={styles.about} href="/new-home-page#">Live Chat</Link>
                                        </div>
                                    </Col>
                                    <Col xl={4}>

                                        {/* <div id='artifical' ></div> */}
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <div className={styles.app4}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-22 font-bold text-center'>React Native App Development</h3>
                                    <p className={styles.para2}>Our React Native app developers specialize in creating top-notch, performance-oriented native mobile apps for Android and iOS platforms. We follow a robust development process and utilize the latest technologies to deliver customized solutions that meet our clients' business objectives.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <div className={styles.app5}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-22 font-bold text-center'>Cross Platform App Development</h3>
                                    <p className={styles.para3}>We prioritize creating seamless user experiences in cross-platform app development. Our expert team uses cutting-edge tools and frameworks to build high-quality apps that work flawlessly across multiple platforms, ensuring maximum reach and engagement for your business.</p>
                                </div>
                            </div>
                        </Col>
                        {/* <Col xl={8}>
                            <div className={styles.app6}>
                                <div className={styles.pick}>
                                    <div className={styles.power}>
                                        <h3 className='text-white f-20 font-bold'>AR/VR</h3>
                                        <p className='text-white f-16'>Harness the power of AI to enhance automated interactions, create personalized experiences, and provide predictive insights for improved engagement with technology and data.</p>
                                    </div>
                                    <div>
                                        <div id="lottie-arvrapp"></div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className={styles.app7}>
                                <h3 className='text-white f-20 font-bold text-center'>Internet of Things</h3>
                                <p className={styles.para2}>We stand for developing custom Blockchain Solutions that drive enterprise growth and efficiency through blockchain technology.</p>
                                <div id="lottie-internetapp"></div>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewMblServices