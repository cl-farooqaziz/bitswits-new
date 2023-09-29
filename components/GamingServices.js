import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/Gamingservices.module.css";
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


const GamingServices = () => {

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
                            <p className={`f-20 font-bold text-white text-center mb-0`}>Our Services Are Where Innovation Meets Play
                            </p>
                            <h1 className='text-white font50 font-bold text-center pb-2'>Blockchain Gaming Engineering Services</h1>
                            <p className={`f-14 text-white text-center pb-5`}>From creating multiplayer games to providing secure in-game asset exchange options, BitsWits leverages blockchain technology for game development. Our services <br></br>include creating next-generation games using the latest technology and tools, such as Unity 3D engine for VR/AR gaming experiences, Augmented Reality (AR)<br></br> support for games, low-latency gameplay features, HoloLens integration, and blockchain-backed matchmaking.</p>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font22 font-bold'>EOS Dapp Game <br></br>
                                        Development</h3>
                                    <p className={styles.para}>BitsWits offers comprehensive services for developing high-performance and secure blockchain games using the EOS platform.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app1}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-22 font-bold '>Solana Blockchain Game
                                        Development</h3>
                                    <p className={styles.para}>Solana Blockchain game development is all the rage right now, and BitsWits is leading the charge. We specialize in creating powerful, high-volume games with a wide range of features – from fast-paced action to deep strategic play.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app2}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-22 font-bold'>BSC Game Development</h3>
                                    <p className={styles.para}>BSC Game Development by BitsWits is a complete suite of game development tools designed for professionals and enthusiasts alike. With its powerful engine, integrated asset library, intuitive interface.</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className={styles.app3}>
                                <Row className='align-items-center'>
                                    <Col xl={6}>
                                        <h3 className='text-white f-22 font-bold '>NFT Blockchain Game Development</h3>
                                        <p className={styles.para1}>Utilizing blockchain technology, we create games that offer unprecedented levels of customization, security, and transparency. With no middlemen involved in transactions, you can now be sure that your digital games and assets are secure from any external interference.</p>
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
                                    <h3 className='text-white f-22 font-bold text-center'>Ethereum Dapp Game Development</h3>
                                    <p className={styles.para2}>BitsWits specializes in creating innovative, high-quality Ethereum dapps for businesses and entrepreneurs. All thanks to our dedicated team of developers, we provide reliable solutions to help enterprises to increase their profits and maximize user engagement.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <div className={styles.app5}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-22 font-bold text-center'>TRON Game Development</h3>
                                    <p className={styles.para3}>Boasting some of the best 3D graphics ever seen in a game, our TRON games let you immerse yourself in a virtual world full of adventure, excitement, and action. With realistic animations and stunning sound effects, you'll feel like you're part of the action.</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className={styles.app6}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font22 font-bold'>EOS Dapp Game <br></br>
                                        Development</h3>
                                    <p className={styles.para}>BitsWits offers comprehensive services for developing high-performance and secure blockchain games using the EOS platform.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app7}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-22 font-bold'>Solana Blockchain Game
                                        Development</h3>
                                    <p className={styles.para}>Solana Blockchain game development is all the rage right now, and BitsWits is leading the charge. We specialize in creating powerful, high-volume games with a wide range of features – from fast-paced action to deep strategic play.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app8}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-22 font-bold'>BSC Game Development</h3>
                                    <p className={styles.para}>BSC Game Development by BitsWits is a complete suite of game development tools designed for professionals and enthusiasts alike. With its powerful engine, integrated asset library, intuitive interface.</p>
                                </div>
                            </div>
                        </Col>

                        <Col xl={6}>
                            <div className={styles.app9}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-22 font-bold text-center'>Metaverse Blockchain Game Development</h3>
                                    <p className={styles.para2}>Using blockchain and cutting-edge technology, we deploy metaverse projects with features such as distributed storage and processing, zero-knowledge transactions, and non-fungible tokens (NFTs). Build next-generation titles with us!</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <div className={styles.app10}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white f-22 font-bold text-center'>Crypto Gambling Games</h3>
                                    <p className={styles.para3}>Our team of experts is highly knowledgeable about blockchain technology and its applications in gaming, allowing us to develop cutting-edge, secure online casinos and betting platforms with an unparalleled level of safety, fairness, and security.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default GamingServices