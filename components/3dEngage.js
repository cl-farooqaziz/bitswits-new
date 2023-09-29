import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/3dEngage.module.css";
import { Container, Row, Col } from 'react-bootstrap'
import gameicon1 from "@/public/3d-game-development/images/engage1.png"
import gameicon2 from "@/public/3d-game-development/images/engage2.png"   
import gameicon3 from "@/public/3d-game-development/images/engage3.png"
import gameicon4 from "@/public/3d-game-development/images/engage4.png"   
import main from "@/public/3d-game-development/images/engagemain.png"




const Engage3d = () => {

    return (
        <>
            <section className={styles.engage}>
                <Container>
                    <Row className={styles.forget}>
                        <Col xl={12}>
                            <p className='text-white f-20 font-bold text-center mb-0'>HIRE THE BEST; FORGET THE REST!</p>
                            <h2>Why Engage BitsWits As Your Game
                                Development Studio?</h2>
                        </Col>
                    </Row>

                    <Row className={` ${styles.cont} gx-3 `}>
                        <Col xl={4}>

                            <div className={styles.longline}>
                                <div className={styles.expertise}>
                                    <Image src={gameicon1} className='img-fluid' />
                                </div>
                                <div className={styles.bring}>
                                    <h3>Customized Solutions</h3>
                                    <p>BitsWits provides tailor-made 2D games development services tailored to each client's needs and requirements. This helps create an engaging gaming experience for the user, which can be further modified according to their preferences.</p>
                                </div>

                            </div>
                            <div className={styles.longline2}>
                                <div className={styles.expertise}>
                                    <Image src={gameicon3} className='img-fluid' />
                                </div>
                                <div className={styles.bring}>
                                    <h3>Experienced Professionals</h3>
                                    <p>The team at BitsWits consists of experienced professionals with years of experience in 2D game development. This ensures that the games developed are efficient and bug-free, providing a fantastic gaming experience to the users.</p>
                                </div>

                            </div>

                        </Col>
                        <Col xl={4}>

                            <div className={styles.offers}>
                                <Image src={main} className='img-fluid' />
                            </div>

                        </Col>
                        <Col xl={4}>

                            <div className={`${styles.longline3}`}>
                                <div className={styles.expertise1}>
                                    <Image src={gameicon2} className='img-fluid' />
                                </div>
                                <div className={styles.bring1}>
                                    <h3>Innovative Solutions</h3>
                                    <p>BitsWits is always looking for new and innovative ways to develop 2D games that provide a unique and immersive gaming experience. We use the latest technologies and techniques to ensure that the users enjoy the best gaming experience.</p>
                                </div>

                            </div>

                            <div className={`${styles.longline1}`}>
                                <div className={styles.expertise1}>
                                    <Image src={gameicon4} className='img-fluid' />
                                </div>
                                <div className={styles.bring1}>
                                    <h3>Exclusive Client Services</h3>
                                    <p>We are also proud to offer exclusive client services, including game beta testing and post-release support. We guarantee a smooth launch for your game and ensure your players have the best experience possible.</p>
                                </div>

                            </div>

                        </Col>
                    </Row>

                </Container>



            </section>



        </>
    )
}

export default Engage3d