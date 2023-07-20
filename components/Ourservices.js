import React from 'react'
import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import styles from '@/styles/Ourservices.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import icon1 from '../public/images/ourservices/sideimg.png'
import icon2 from '../public/images/ourservices/game.png'
import icon3 from '../public/images/ourservices/web30.png'
import icon4 from '../public/images/ourservices/blockchain.png'
import icon5 from '../public/images/ourservices/webflow.png'
import icon6 from '../public/images/ourservices/artifical.png'

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
                            <h2 className='font50 black fontf font-bold line60 white'> <span className='grdiant'>Services</span> Offered by Us! </h2>
                        </Col>
                        <Col lg={3}>
                            <Link className={styles.bttns1} href="#">Book a Call</Link>
                        </Col>
                    </Row>
                    <Row className='mt-5 pb-5 ourservicesfaqs'>
                        <Col lg={6}>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header onClick={game}>
                                        Mobile Application Development
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <span className='grdiant'>Develop your app</span> with our advanced mobile applications solutions that deliver smooth user experiences and boost your growth in the digital world.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header onClick={game1}>
                                        Game Development
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Dive into a  world of captivating gameplay and stunning visuals that are carefully designed by our <span className='grdiant'> expert game developers </span> where every pixel comes to life and every level sparks excitement
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header onClick={game2}>Web App Development </Accordion.Header>
                                    <Accordion.Body>
                                        Grow your online presence with our skilled <span className='grdiant'>web app development company</span> . We ensure flawless functionality and outstanding user experiences by developing robust and scalable mobile apps.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header onClick={game3}>Blockchain Game Development </Accordion.Header>
                                    <Accordion.Body>
                                        Enter into an exciting gaming adventure with the best blockchain game development company, which focuses on emerging gaming with transparency and security of blockchain technology, creating immersive and decentralized game experiences.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header onClick={game4}>Artificial Intelligence </Accordion.Header>
                                    <Accordion.Body>
                                        Boost productivity and save your precious time and resources by utilizing the power of the future - Artificial Intelligence. Discover the excellent levels of efficiency and effectiveness with our AI-driven solutions
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header onClick={game5}>UI/UX App Design</Accordion.Header>
                                    <Accordion.Body>
                                        BitsWits, a <span className='grdiant'>UI/UX app design company</span> , helps to enhance user experience with intuitive interfaces that engage users and make interactions enjoyable. Our skilled <span className='grdiant'>mobile app UI designers</span> assist in bringing the best outcomes.
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        </Col>
                        <Col lg={6} className='d-none d-lg-block'>
                            {gameshow ?
                                <div className={styles.imgapost}>
                                    <Image alt="bitswits" src={icon1} className={gameshow ? styles.bottom4 : styles.bottom4} />
                                </div>
                                :
                                ''

                            }




                            {gameshow1 ?
                                <div className={styles.imgapost}>
                                    <Image alt="bitswits" src={icon2} className={gameshow1 ? styles.bottom4 : styles.bottom4} />
                                </div>
                                :
                                ''

                            }


                            {gameshow2 ?
                                <div className={styles.imgapost}>
                                    <Image alt="bitswits" src={icon3} className={gameshow2 ? styles.bottom4 : styles.bottom4} />
                                </div>
                                :
                                ''

                            }

                            {gameshow3 ?
                                <div className={styles.imgapost}>
                                    <Image alt="bitswits" src={icon4} className={gameshow3 ? styles.bottom4 : styles.bottom4} />
                                </div>
                                :
                                ''

                            }

                            {gameshow4 ?
                                <div className={styles.imgapost1}>
                                    <Image alt="bitswits" src={icon5} className={gameshow4 ? styles.bottom4 : styles.bottom4} />
                                </div>
                                :
                                ''

                            }
                            {gameshow5 ?
                                <div className={styles.imgapost}>
                                    <Image alt="bitswits" src={icon6} className={gameshow5 ? styles.bottom4 : styles.bottom4} />
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