import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/NewHomeMaintain.module.css";
import { Container, Row, Col } from 'react-bootstrap'
//
import cardNine from '../public/newHomePage/images/newMaintain9.png'
import { useEffect, useRef } from "react";
import lottie from 'lottie-web';

import mobileapp from '../public/mobileapp.json';
import game from '../public/game.json';
import blockchain from '../public/blockchain.json';
import ai from '../public/artificial.json';
import web from '../public/webapp.json';
import uiux from '../public/uiuxapp.json';
import arvrapp from '../public/arvr.json';
import internetapp from '../public/internetofthings.json';




const NewMaintain = () => {
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
                            <p className={` f-20 font-bold text-white text-center mb-0`}>Services
                            </p>
                            <h1 className='text-white f-55 font-bold text-center pb-4'>Maintaining digital quality with <br></br>
                                our collection of customizable services</h1>
                        </Col>
                        <Col sm={6} lg={4}>
                            <div className={styles.app}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-25 font-bold'>Mobile App Development</h3>
                                    <p className={styles.para}>
                                        The mobile apps developed by app developers at BitsWits are captivating, interactive, and help improve the user experience from planning to execution.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4}>
                            <div className={styles.app1}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-25 font-bold'>Game Development</h3>
                                    <p className={styles.para}>
                                        Use our fascinating game development solutions to transport your audience to spellbound virtual worlds.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app2}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-25 font-bold'>Blockchain Development</h3>
                                    <p className={styles.para}>
                                        We stand for developing custom Blockchain Solutions that drive enterprise growth and efficiency through blockchain technology.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className={styles.app3}>
                                <Row className='align-items-center'>
                                    <Col xl={5}>
                                        <div className={styles.paraThreeContent}>
                                            <h3 className='text-white f-25 font-bold '>Artificial Intelligence (Ai)</h3>
                                            <p className={styles.para1}>
                                                Harness the power of AI to enhance automated interactions, create <br></br> personalized experiences, and provide predictive insights for improved engagement with technology and data.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={5}>
                                        {/* <div id='artifical' ></div> */}
                                    </Col>
                                </Row>

                            </div>
                        </Col>

                        <Col sm={6}>
                            <div className={styles.app4}>
                                <div>
                                    <h3 className='text-white f-25 font-bold text-center'>Web App Development</h3>
                                    <p className={styles.possibilities}>
                                        Our top app developers excel in web app development, offering top-tier expertise ensuring client satisfaction and on-time delivery.
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6}>
                            <div className={styles.app5}>
                                <div>
                                    <h3 className='text-white f-25 font-bold text-center'>UI/UX App Design</h3>
                                    <p className={styles.possibilities}>
                                        Our team of professional UI/UX app designers help develop designs that guide users towards meaningful interactions and impactful user experience.
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col lg={8}>

                            <div className={styles.app6}>
                                <div className={styles.pick}>
                                    <div className={styles.power}>
                                        <h3 className='text-white f-25 font-bold'>AR/VR</h3>
                                        <p className={`text-white f-16 ${styles.contentPara}`}>Harness the power of AI to enhance automated interactions, create personalized experiences, and provide predictive insights for improved engagement with technology and data.</p>
                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col lg={4}>
                            <div className={styles.app7}>
                                <Image src={cardNine} className={`${styles.appImage}`} />
                                <div>
                                    <h3 className='text-white f-25 font-bold text-center'>Internet of Things</h3>
                                    <p className={styles.para9}>We stand for developing custom Blockchain Solutions that drive enterprise growth and efficiency through blockchain technology.</p>
                                </div>
                            </div>

                        </Col>
                    </Row>

                </Container>

            </section>


        </>
    )
}

export default NewMaintain