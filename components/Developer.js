import React from 'react'
import styles from '@/styles/Developer.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'


const Developer = () => {
    return (
        <>
            <section class="developer mt-5">
                <Container>
                    <Row className={`${styles.devtop}`} >

                        <Col lg={12}>

                            <h2 className='f-40 f-700 black t-center'>
                                Compelling Reasons To Enlist Our <br></br> <span className='grdiant'>2D  Game Development</span> Company
                            </h2>
                            <p className='f-16 f-500 black t-center'>
                                BitsWits shares a wealth of experience developing cutting-edge, engaging 2D games to help you
                                knock out your competitors, capture customers' attention and increase your revenues. From
                                concept design to programming, testing, and deployment of your custom-made 2D game, we offer
                                comprehensive services that guarantee success in the world of 2D gaming. With our expertise, you
                                can ensure your 2D game will be one of the best in the market.
                            </p>
                        </Col>
                    </Row>
                    <div className={`${styles.devcard} mt-5`}>
                        <Row>
                            <Col lg={5}>
                                <div className={styles.leftside}>
                                    <img class="img-fluid wow fadeInLeft" alt="bitswits"
                                        src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/7fa6a1ba-c918-4c6c-9881-f0e8852c1200/public" />
                                </div>
                            </Col>
                            <Col lg={7}>
                                <div className={styles.devcard}>
                                    <Row className='g-5'>
                                        <Col lg={6} className={styles.devcardslide}>
                                            <div>
                                                <div className={styles.devminicard}>
                                                    <div className={styles.devminiimg}>
                                                        <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/497f80e9-ba1b-4745-a727-158d1db7d800/public"
                                                            class="img-fluid" alt="bitswits" />
                                                    </div>
                                                    <h4>
                                                        Customized Solutions
                                                    </h4>
                                                    <p>
                                                        BitsWits provides tailor-made 2D games development services tailored to
                                                        each client's needs and requirements. This helps create an engaging
                                                        gaming experience for the user, which can be further modified according
                                                        to their preferences.
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={styles.devminicard}>
                                                    <div className={styles.devminiimg}>
                                                        <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/21bfe427-5e80-4657-bfc3-78229d2eeb00/public"
                                                            class="img-fluid" alt="bitswits" />
                                                    </div>
                                                    <h4>
                                                        Experienced Professionals
                                                    </h4>
                                                    <p>
                                                        The team at BitsWits consists of experienced professionals with years of
                                                        experience in 2D game development. This ensures that the games developed
                                                        are efficient and bug-free, providing a fantastic gaming experience to
                                                        the users.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className={styles.devcardslide}>
                                            <div>
                                                <div className={styles.devminicard}>
                                                    <div className={styles.devminiimg}>
                                                        <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/e461d350-526d-4e88-5bfd-13fc21516900/public"
                                                            class="img-fluid" alt="bitswits" />
                                                    </div>
                                                    <h4>
                                                        Innovative Solutions
                                                    </h4>
                                                    <p>
                                                        BitsWits is always looking for new and innovative ways to develop 2D
                                                        games that provide a unique and immersive gaming experience. We use the
                                                        latest technologies and techniques to ensure that the users enjoy the
                                                        best gaming experience.
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={styles.devminicard}>
                                                    <div className={styles.devminiimg}>
                                                        <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/298534f9-6a4c-47b1-a400-3ea090e9da00/public"
                                                            class="img-fluid" alt="bitswits" />
                                                    </div>
                                                    <h4>
                                                        Exclusive Client Services
                                                    </h4>
                                                    <p>
                                                        We are also proud to offer exclusive client services, including game
                                                        beta testing and post-release support. We guarantee a smooth launch for
                                                        your game and ensure your players have the best experience possible.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

        </>
    )
}

export default Developer