import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/NewMaintain.module.css";
import { Container, Row, Col } from 'react-bootstrap'
//
import CardOne from "@/public/newHomePageImages/card.png"
import lap from "@/public/newHomePageImages/lap.png"
import cool from "@/public/newHomePageImages/cool.png"
import lum from "@/public/newHomePageImages/lum.png"
import dem from "@/public/newHomePageImages/dem.png"
import World from "@/public/newHomePageImages/World.png"
import WhatImage from "@/public/newHomePageImages/what_Image.png"

const NewHomeMaintain = () => {

    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row className='g-3'>
                        <Col lg={12}>
                            <p className={` f-20 font-bold text-white text-center`}>Services
                            </p>
                            <h1 className='text-white f-55 font-bold text-center pb-5'>Maintaining digital quality with
                                our collection of customizable services</h1>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <h3 className='text-white f-20 font-bold text-center'>Mobile App Development</h3>
                                <p className={styles.para}>The mobile apps developed by app developers at BitsWits are captivating, interactive, and help improve the user experience from planning to execution.</p>

                                <Image src={CardOne} className='img-fluid d-block m-auto mt-5 w-75' />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app1}>
                                <h3 className='text-white f-20 font-bold text-center'>Game Development</h3>
                                <p className={styles.para}>Use our fascinating game development solutions to transport your audience to spellbound virtual worlds.</p>

                                <Image src={lap} className='img-fluid d-block m-auto mt-5' />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app2}>
                                <h3 className='text-black f-20 font-bold text-center'>Blockchain Development</h3>
                                <p className={styles.para}>We stand for developing custom Blockchain Solutions that drive enterprise growth and efficiency through blockchain technology.</p>
                                <Image src={cool} className='img-fluid d-block m-auto mt-5' />
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className={styles.app3}>
                                <Row className='align-items-center'>
                                    <Col xl={8}>
                                        <h3 className='text-white f-20 font-bold '>Artificial Intelligence (Ai)</h3>
                                        <p className={styles.para1}>Harness the power of AI to enhance automated interactions, create personalized  experiences, <br></br> and provide  predictive insights for improved engagement with technology and data.</p>

                                        <div className={styles.pont}>
                                            <Link className={styles.book} href="/new-home-page#">Book A Call</Link>
                                            <Link className={styles.about} href="/new-home-page#">Live Chat</Link>
                                        </div>
                                    </Col>
                                    <Col xl={4}>
                                        <Image src={lum} className='img-fluid' />
                                    </Col>
                                </Row>

                            </div>
                        </Col>
                        <Col xl={6}>
                            <div className={styles.app4}>
                                <h3 className='text-white f-20 font-bold text-center'>Web App Development</h3>
                                <p className={styles.para2}>Our top app developers excel in web app development, offering top-tier expertise ensuring client satisfaction and on-time delivery.</p>


                            </div>
                        </Col>
                        <Col xl={6}>
                            <div className={styles.app5}>
                                <h3 className='text-black f-20 font-bold text-center'>UI/UX App Design</h3>
                                <p className={styles.para3}>Our team of professional UI/UX app designers help develop designs that guide users towards meaningful interactions and impactful user experience.</p>

                            </div>
                        </Col>

                        <Col xl={8}>

                            <div className={styles.app6}>
                                <div className={styles.pick}>
                                    <div className={styles.power}>
                                        <h3 className='text-white f-20 font-bold'>AR/VR</h3>
                                        <p className='text-white f-16'>Harness the power of AI to enhance automated interactions, create personalized experiences, and provide predictive insights for improved engagement with technology and data.</p>
                                    </div>
                                    <div>
                                        <Image src={dem} className='img-fluid d-block m-auto mt-5' />
                                    </div>

                                </div>

                            </div>

                        </Col>
                        <Col xl={4}>
                            <div className={styles.app4}>
                                <h3 className='text-white f-20 font-bold text-center'>Internet of Things</h3>
                                <p className={styles.para2}>We stand for developing custom Blockchain Solutions that drive enterprise growth and efficiency through blockchain technology.</p>

                                <Image src={World} className='img-fluid d-block m-auto mt-1 w-75' />
                            </div>

                        </Col>
                    </Row>

                </Container>

            </section>


        </>
    )
}

export default NewHomeMaintain