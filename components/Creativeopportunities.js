import React from 'react'
import styles from '@/styles/Creativeopportunities.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

const Creativeopportunities = () => {
    return (
        <>

            <section className={styles.opp}>
                <Container>
                    <Row className={`${styles.bount} pb-5`} >
                        <Col md={12}>
                            <h3 className='t-center f-18 f-montserrat f-700 black'>BOUNTIES</h3>
                            <h2 className='f-40 f-700 black t-center'>Attractive/Creative Opportunities <br></br> <span className='grdiant'> 2D Games Development</span> Offers </h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={11}>
                            <div className={styles.appListInner}>
                                <div className={styles.appcardmain}>
                                    <div className={styles.appcardleft}>
                                        <div className={styles.appCard}>
                                            <div className={styles.apptxt}>
                                                <h3>Improved Engagement</h3>
                                                <p>
                                                    Since 2D games typically feature minimal graphics and fewer special
                                                    effects, players with slow internet connections or limited hardware
                                                    capabilities can easily enjoy them.
                                                </p>

                                                <Link href="#" className={styles.yellowBtn}>
                                                    <span>Lets Start</span>
                                                </Link>

                                            </div>
                                        </div>
                                        <div className={styles.appCard}>
                                            <div className={styles.apptxt}>
                                                <h3>
                                                    Quicker To Develop
                                                </h3>
                                                <p>
                                                    Due to the simpler coding process and fewer assets needed, 2D games can
                                                    be developed in a shorter amount of time than 3D games.
                                                </p>
                                                <Link href="#" className={styles.yellowBtn}>
                                                    <span>Lets Start</span>
                                                </Link>


                                            </div>
                                        </div>
                                        <div className={styles.appCard}>
                                            <div className={styles.apptxt}>
                                                <h3>
                                                    Accessible For All Players
                                                </h3>
                                                <p>
                                                    2D games have simpler graphics and coding, which makes them playable on
                                                    multiple devices and expands the potential audience for your game.
                                                </p>

                                                <Link href="#" className={styles.yellowBtn}>
                                                    <span>Lets Start</span>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.appcardcenter}>
                                        <div className={styles.mobielscreen}>
                                            <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/a3d0ba12-81ec-492f-dda3-a4acc504d700/public"
                                                class="img-fluid mx-auto" alt="bitswits" />
                                        </div>
                                    </div>
                                    <div className={styles.appcardright}>
                                        <div className={styles.appcard}>
                                            <div className={styles.apptxt}>
                                                <h3>
                                                    Enhanced Engagement
                                                </h3>
                                                <p>
                                                    With 2D games, businesses can amuse their customers with fun and
                                                    interactive activities that keep them inquisitive about the products or
                                                    services offered.
                                                </p>
                                                <Link href="#" className={styles.yellowBtn}>
                                                    <span>Lets Start</span>
                                                </Link>


                                            </div>
                                        </div>
                                        <div className={styles.appCard}>
                                            <div className={styles.apptxt}>
                                                <h3>
                                                    Cost-Effective
                                                </h3>
                                                <p>
                                                    Developing games in 2D is a cost-effective way to produce top-notch
                                                    quality games with minimal overhead costs.
                                                </p>
                                                <Link href="#" className={styles.yellowBtn}>
                                                    <span>Lets Start</span>
                                                </Link>


                                            </div>
                                        </div>
                                        <div className={styles.appCard}>
                                            <div className={styles.apptxt}>
                                                <h3>Easier Maintenance</h3>
                                                <p>
                                                    Since 2D games can be updated without major overhauls, businesses don't
                                                    have to worry about the constant maintenance and bug fixes of 3D game
                                                    development. This allows for faster iteration cycles and easier
                                                    deployment of new content.
                                                </p>
                                                <Link href="#" className={styles.yellowBtn}>
                                                    <span>Lets Start</span>
                                                </Link>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Creativeopportunities