import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Capabilities.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import team1 from '../public/newHomePageImages/discuss.png'
import Image from 'next/image';

const Capabilities = () => {


    var awardslogo = {
        dots: false,
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
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h3>Capabilities</h3>
                        </Col>
                        <Col xl={12}>
                            <div className={styles.build}>
                                <h2>The game plan for building your app.</h2>
                                <Link className={styles.about} href="#">Connect Now!</Link>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Slider {...awardslogo} className={` ${styles.nextalign1} prohome mt-4 mb-4`}>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={7}>
                                        <div className={styles.deter}>
                                            <h3>Initial Consultation</h3>
                                            <p>We will begin every project with a discovery phase to determine the actual problem to solve. Because "a problem well defined is a problem half solved."</p>

                                            <p>Determine UX challenges & goals</p>
                                            <p>Conduct user research & interviews</p>
                                            <p>Analyze data for targeted UX solutions</p>

                                        </div>
                                    </Col>
                                    <Col xl={5}>
                                        <div>
                                            <Image src={team1} className='img-fluid' />
                                        </div>
                                    </Col>

                                </Row>






                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={7}>
                                        <div className={styles.deter}>
                                            <h3>Initial Consultation</h3>
                                            <p>We will begin every project with a discovery phase to determine the actual problem to solve. Because "a problem well defined is a problem half solved."</p>

                                            <p>Determine UX challenges & goals</p>
                                            <p>Conduct user research & interviews</p>
                                            <p>Analyze data for targeted UX solutions</p>

                                        </div>
                                    </Col>
                                    <Col xl={5}>
                                        <div>
                                            <Image src={team1} className='img-fluid' />
                                        </div>
                                    </Col>

                                </Row>
                            </div>

                            <div className={styles.high}>
                                <Row>
                                    <Col xl={6}>
                                        <div className={styles.deter}>
                                            <h3>Initial Consultation</h3>
                                            <p>We will begin every project with a discovery phase to determine the actual problem to solve. Because "a problem well defined is a problem half solved."</p>

                                            <p>Determine UX challenges & goals</p>
                                            <p>Conduct user research & interviews</p>
                                            <p>Analyze data for targeted UX solutions</p>

                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div>
                                            <Image src={team1} className='img-fluid' />
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