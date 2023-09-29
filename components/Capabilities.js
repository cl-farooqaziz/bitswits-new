import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import styles from '@/styles/Capabilities.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import team1 from '../public/newHomePageImages/1.png'
import team2 from '../public/newHomePageImages/2.png'
import team3 from '../public/newHomePageImages/3.png'
import team4 from '../public/newHomePageImages/4.png'
import team5 from '../public/newHomePageImages/5.png'
import team6 from '../public/newHomePageImages/6.png'
import close from '../public/newHomePageImages/close.png'

const Capabilities = () => {


    var awardslogo = {
        dots: true,
        arrows: false,
        loop: true,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };



    return (
        <>

            <section className={styles.home}>
                <Container className='qtech'>
                    <Row className={styles.posttext}>
                        <Col xl={12}>
                            <h3>Process</h3>
                        </Col>
                        <Col xl={12}>
                            <div className={styles.build}>
                                <h2>The game plan for building your app.</h2>
                                <Link className={styles.about} href="#">Connect Now!</Link>
                            </div>
                        </Col>
                    </Row>
                    <Row>

                        <div className={styles.connsct}>
                            <Row className={` mt-5 mb-5`}>


                                <Col lg={2}><div className={styles.line1}></div></Col>
                                <Col lg={2}><div className={styles.line2}></div></Col>
                                <Col lg={2}><div className={styles.line3}></div></Col>
                                <Col lg={2}><div className={styles.line4}></div></Col>
                                <Col lg={2}><div className={styles.line5}></div></Col>
                                <Col lg={2}><div className={styles.line6}></div></Col>


                            </Row>
                        </div>
                        <Slider {...awardslogo} className={` ${styles.nextalign1} prohome mt-4 mb-4`}>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={6}>
                                        <div className={styles.solved}>
                                            <Link href='#' className={styles.research}>Research</Link>
                                            <Link href='#' className={styles.research}>Analytic</Link>
                                        </div>

                                        <div className={styles.deter}>
                                            <h3>Initial Consultation</h3>
                                            <p>We begin by comprehending the objectives, target audiences, user base, and features of your app.</p>

                                            <p className={styles.cen}>
                                                <Image quality={75} src={close} className='img-fluid' />
                                                Determine UX challenges & goals
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} src={close} className='img-fluid' />
                                                competitor analysis.
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} src={close} className='img-fluid' />
                                                Map our user personas and use cases.
                                            </p>

                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div>
                                            <Image quality={75} src={team1} className={` ${styles.imgpon} img-fluid`} />
                                        </div>
                                    </Col>

                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={6}>
                                        <div className={styles.solved}>
                                            <Link href='#' className={styles.research}>Research</Link>
                                            <Link href='#' className={styles.research}>Analytic</Link>
                                        </div>
                                        <div className={styles.deter}>
                                            <h3>Requirements Gathering</h3>
                                            <p>We work together to define precise platform requirements, UI/UX requirements, and thorough specs.</p>

                                            <p className={styles.cen}>
                                                <Image quality={75} src={close} className='img-fluid' />
                                                Monitoring and maintenance.
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} src={close} className='img-fluid' />
                                                Optimizing performance post-release.
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} src={close} className='img-fluid' />
                                                Post launch QA and optimization.
                                            </p>

                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div>
                                            <Image quality={75} src={team2} className={` ${styles.imgpon} img-fluid`} />
                                        </div>
                                    </Col>

                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={6}>
                                        <div className={styles.solved}>
                                            <Link href='#' className={styles.research}>Research</Link>
                                            <Link href='#' className={styles.research}>Analytic</Link>
                                        </div>
                                        <div className={styles.deter}>
                                            <h3>Design and Prototyping</h3>
                                            <p>Wireframing and prototyping are tools we use to create flexible designs that are platform-optimized.</p>

                                            <p className={styles.cen}>
                                                <Image quality={75} src={close} className='img-fluid' />
                                                Mapping out app structure and flow.
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} src={close} className='img-fluid' />
                                                Designing low-fidelity skeletal framework.
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} src={close} className='img-fluid' />
                                                Enabling quick revision based on feedback. 
                                            </p>

                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div>
                                            <Image quality={75} src={team3} className={` ${styles.imgpon} img-fluid`} />
                                        </div>
                                    </Col>

                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={6}>
                                        <div className={styles.solved}>
                                            <Link href='#' className={styles.research}>Research</Link>
                                            <Link href='#' className={styles.research}>Analytic</Link>
                                        </div>
                                        <div className={styles.deter}>
                                            <h3>Development</h3>
                                            <p>Our professionals create cross-platform apps with reusable content and components by using frameworks like React Native.</p>

                                            <p className={styles.cen}>
                                                <Image quality={75} src={close} className='img-fluid' />
                                                Applying visual branding assets and styles.
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} src={close} className='img-fluid' />
                                                Crafting intuitive user experiences.
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} src={close} className='img-fluid' />
                                                Creating an interactive prototype.
                                            </p>

                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div>
                                            <Image quality={75} src={team4} className={` ${styles.imgpon} img-fluid`} />
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                            <div className={styles.high}>
                                <Row>
                                    <Col xl={6}>
                                        <div className={styles.solved}>
                                            <Link href='#' className={styles.research}>Research</Link>
                                            <Link href='#' className={styles.research}>Analytic</Link>
                                        </div>
                                        <div className={styles.deter}>
                                            <h3>Testing and QA</h3>
                                            <p>Thorough platform testing guarantees that your software offers the best user experience possible everywhere.</p>

                                            <p className={styles.cen}>
                                                <Image quality={75} src={close} className='img-fluid' />
                                                Applying visual branding assets and styles.
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} src={close} className='img-fluid' />
                                                Crafting intuitive user experiences.
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} src={close} className='img-fluid' />
                                                Creating an interactive prototype.
                                            </p>

                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div>
                                            <Image quality={75} src={team5} className={` ${styles.imgpon} img-fluid`} />
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                            <div className={styles.high}>
                                <Row>
                                    <Col xl={6}>
                                        <div className={styles.solved}>
                                            <Link href='#' className={styles.research}>Research</Link>
                                            <Link href='#' className={styles.research}>Analytic</Link>
                                        </div>
                                        <div className={styles.deter}>
                                            <h3>Launch and Deployment</h3>
                                            <p>We assist you with platform launch across the board and offer continuing support and maintenance.</p>

                                            <p className={styles.cen}>
                                                <Image quality={75} src={close} className='img-fluid' />
                                                Applying visual branding assets and styles.
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} src={close} className='img-fluid' />
                                                Crafting intuitive user experiences.
                                            </p>
                                            <p className={styles.cen}>
                                                <Image quality={75} src={close} className='img-fluid' />
                                                Creating an interactive prototype.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div>
                                            <Image quality={75} src={team6} className={` ${styles.imgpon} img-fluid`} />
                                        </div>
                                    </Col>

                                </Row>
                            </div>

                        </Slider>
                    </Row>

                </Container>
            </section>



        </>
    )
}

export default Capabilities