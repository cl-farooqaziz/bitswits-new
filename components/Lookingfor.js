import React from 'react'
import styles from '@/styles/lookingfor.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { RxArrowRight } from 'react-icons/rx'
import ourportfolio3 from '../public/images/lookingfor/loop.png'
import Image from 'next/image'

const Lookingfor = () => {
    return (
        <>
            <section className={styles.lookingfor}>
                <Container>
                    <Row className={styles.project}>
                        <Col lg={2}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace black'>Need</h5>
                        </Col>
                        <Col lg={8}>
                            <h4 className='font65 black fontf font-bold line60 black'>If You're <span className='grdiant'>Looking For</span> </h4>
                        </Col>
                        <Col lg={2}>
                            <Link className={styles.bttns1} href="#">Book a Call</Link>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col lg={12}>
                            <div className={styles.devlp}>
                                <div className={styles.game}>Game Development</div>
                                <div className={styles.game}>App Development</div>
                                <div className={styles.game}>Web Development</div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>

                            <h3 className='fontf black font-bold font30 mt-5'>We can help you to launch your new business idea</h3>
                            <p className='fontf black font-medium font15'>We offer a complete start-to-finish product design solution to help you launch your product with ease.</p>

                            <ul className={styles.roadmap}>
                                <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Establish clear path of product roadmap to launch</li>
                                <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Conduct evidence-based user research for data collection</li>
                                <li className='fontf black font-medium font15'> <RxArrowRight size={20} /> Design complete design for production</li>
                            </ul>

                            <div className={`${styles.devlp1} mt-5 mb-5`}>
                                <div className={styles.game1}>
                                    <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                    <p className='fontf black font-medium font15'>3 - 6 Months</p>
                                    
                                </div>
                                <div className={styles.game1}>
                                    <h3 className='fontf black font-bold font20'>Service</h3>
                                    <p className='fontf black font-medium font15'>UI UX Design, Web & Mobile App Design, User Research, Product Management</p>
                                </div>
                            </div>

                            <Link className={styles.btn1} href="#">Book a Call</Link>

                        </Col>
                        <Col lg={6}>
                          <div className={styles.output}>
                             <Image alt="Bitswits" src={ourportfolio3} className="img-fluid" />
                          </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default Lookingfor