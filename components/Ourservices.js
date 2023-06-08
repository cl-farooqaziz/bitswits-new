import React from 'react'
import styles from '@/styles/Ourservices.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Accordion from 'react-bootstrap/Accordion';
import icon1 from '../public/images/ourservices/sideimg.png'
import icon2 from '../public/images/ourservices/game.png'
import icon3 from '../public/images/ourservices/web30.png'
import icon4 from '../public/images/ourservices/blockchain.png'
import icon5 from '../public/images/ourservices/webflow.png'
import icon6 from '../public/images/ourservices/artifical.png'
import Image from 'next/image';
import { useState } from 'react'
const Ourservices = () => {


    const [gameshow, gameapp] = useState(true);
    const [gameshow1, gameapp1] = useState(false);
    const [gameshow2, gameapp2] = useState(false);
    const [gameshow3, gameapp3] = useState(false);
    const [gameshow4, gameapp4] = useState(false);
    const [gameshow5, gameapp5] = useState(false);

    function game() {


        gameapp(true);
        gameapp1(false);
        gameapp2(false);
        gameapp3(false);
        gameapp4(false);
        gameapp5(false);

    }
    function game1() {

        gameapp(false);
        gameapp1(true);
        gameapp2(false);
        gameapp3(false);
        gameapp4(false);
        gameapp5(false);

    }
    function game2() {

        gameapp(false);
        gameapp1(false);
        gameapp2(true);
        gameapp3(false);
        gameapp4(false);
        gameapp5(false);

    }

    function game3() {

        gameapp(false);
        gameapp1(false);
        gameapp2(false);
        gameapp3(true);
        gameapp4(false);
        gameapp5(false);

    }

    function game4() {

        gameapp(false);
        gameapp1(false);
        gameapp2(false);
        gameapp3(false);
        gameapp4(true);
        gameapp5(false);

    }

    function game5() {

        gameapp(false);
        gameapp1(false);
        gameapp2(false);
        gameapp3(false);
        gameapp4(false);
        gameapp5(true);

    }





    return (
        <>
            <section className={styles.ourservices}>
                <Container>
                    <Row className={styles.project}>
                        <Col lg={2}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace white'>Services</h5>
                        </Col>
                        <Col lg={7}>
                            <h4 className='font65 black fontf font-bold line60 white'>Our <span className='grdiant'>Services</span> </h4>
                        </Col>
                        <Col lg={3}>
                            <Link className={styles.bttns1} href="#">Book a Call</Link>
                        </Col>
                    </Row>
                    <Row className='mt-5 pb-5 ourservicesfaqs'>
                        <Col lg={6}>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header onMouseEnter={game}>
                                        Mobile Application
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        For the past decade, we have partnered with some of the world’s leading start-ups to help them create user experience designs that drive results and accelerate their digital products' growth.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header onMouseEnter={game1}>
                                        Game Design
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        For the past decade, we have partnered with some of the world’s leading start-ups to help them create user experience designs that drive results and accelerate their digital products' growth.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header onMouseEnter={game2}>Web 3.0 Design</Accordion.Header>
                                    <Accordion.Body>
                                        For the past decade, we have partnered with some of the world’s leading start-ups to help them create user experience designs that drive results and accelerate their digital products' growth.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header onMouseEnter={game3}>Blockchain</Accordion.Header>
                                    <Accordion.Body>
                                        For the past decade, we have partnered with some of the world’s leading start-ups to help them create user experience designs that drive results and accelerate their digital products' growth.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header onMouseEnter={game4}>Web Flow Development</Accordion.Header>
                                    <Accordion.Body>
                                        For the past decade, we have partnered with some of the world’s leading start-ups to help them create user experience designs that drive results and accelerate their digital products' growth.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header onMouseEnter={game5}>Artificial Intelligence</Accordion.Header>
                                    <Accordion.Body>
                                        For the past decade, we have partnered with some of the world’s leading start-ups to help them create user experience designs that drive results and accelerate their digital products' growth.
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        </Col>
                        <Col lg={6}>
                            {gameshow ?
                                <div className={styles.imgapost}>
                                    <Image alt="Bitswits" src={icon1} className={ gameshow ? styles.bottom4 : styles.bottom4 } />
                                </div>
                                :
                                ''

                            }




                            {gameshow1 ?
                                <div className={styles.imgapost}>
                                    <Image alt="Bitswits" src={icon2} className={ gameshow1 ? styles.bottom4 : styles.bottom4 } />
                                </div>
                                :
                                ''

                            }


                            {gameshow2 ?
                                <div className={styles.imgapost}>
                                    <Image alt="Bitswits" src={icon3} className={ gameshow2 ? styles.bottom4 : styles.bottom4 } />
                                </div>
                                :
                                ''

                            }

                            {gameshow3 ?
                                <div className={styles.imgapost}>
                                    <Image alt="Bitswits" src={icon4} className={ gameshow3 ? styles.bottom4 : styles.bottom4 } />
                                </div>
                                :
                                ''

                            }

                            {gameshow4 ?
                                <div className={styles.imgapost1}>
                                    <Image alt="Bitswits" src={icon5} className={ gameshow4 ? styles.bottom4 : styles.bottom4 } />
                                </div>
                                :
                                ''

                            }
                            {gameshow5 ?
                                <div className={styles.imgapost}>
                                    <Image alt="Bitswits" src={icon6} className={ gameshow5 ? styles.bottom4 : styles.bottom4 } />
                                </div>
                                :
                                ''

                            }


                        </Col>

                    </Row>
                </Container>

            </section>
        </>
    )
}

export default Ourservices