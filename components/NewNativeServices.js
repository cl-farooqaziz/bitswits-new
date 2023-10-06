import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/NewNativeServices.module.css";
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


const NewNativeServices = () => {

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
                            <p className={`f-20 font-bold text-white text-center mb-0`}>Services
                            </p>
                            <h1 className='text-white font55 font-bold text-center pb-3'>Native App Development Services</h1>
                            <p className='text-white text-center pb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.app}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-30 font-bold text-center'>Ios </h3>
                                    <p className={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.app1}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-30 font-bold text-center'>Android</h3>
                                    <p className={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewNativeServices    