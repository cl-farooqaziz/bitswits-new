import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Coverage.module.css'
import { Container, Row, Col } from 'react-bootstrap'


const Coverage = () => {
    return (
        <>
            <section className={styles.coverage}>
                <Container>
                    <Row className='aboutfold'>
                        <Col md={2}>
                            <h3 className='font20 fontf font-semibold mt-1 letterspace black'>Coverage</h3>
                        </Col>
                        <Col lg={7}>
                            <h2 className='font50 black fontf font-bold line60 black'>Our <span className='grdiant'>Mobile App</span> Services</h2>
                        </Col>
                        <Col lg={3}>
                            <Link className={`${styles.bttns1} mt-3 mt-lg-0 mb-4 mb-lg-0`} href="#">
                                CALL NOW!
                            </Link>
                        </Col>
                    </Row>
                    <div className='mt-5'>
                        <Row className='justify-content-between rowGap'>
                            <Col lg={3}>
                                <div>
                                    <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
                                        Mobile App Design
                                    </h5>
                                    <div className={styles.servcsList}>
                                        <a href='#' className='font14 fontf font-semibold mt-1 black'>
                                            UI UX Design
                                        </a>
                                        <a href='#' className='font14 fontf font-semibold mt-1 black'>
                                            Research & Discovery
                                        </a>
                                        <a href='#' className='font14 fontf font-semibold mt-1 black'>
                                            Wireframing & Prototyping
                                        </a>
                                        <a href='#' className='font14 fontf font-semibold mt-1 black'>
                                            iOS + Android Applications
                                        </a>
                                        <a href='#' className='font14 fontf font-semibold mt-1 black'>
                                            Post Launch Support
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div>
                                    <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
                                        User Research
                                    </h5>
                                    <div className={styles.servcsList}>
                                        <a href='#' className='font14 fontf font-semibold mt-1 black'>
                                            User Journey & Persona Building
                                        </a>
                                        <a href='#' className='font14 fontf font-semibold mt-1 black'>
                                            User Testing
                                        </a>
                                        <a href='#' className='font14 fontf font-semibold mt-1 black'>
                                            Participant Recruitments
                                        </a>
                                        <a href='#' className='font14 fontf font-semibold mt-1 black'>
                                            Research Method & Material Development
                                        </a>
                                        <a href='#' className='font14 fontf font-semibold mt-1 black'>
                                            Iterative Research
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div>
                                    <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
                                        UX Optimization
                                    </h5>
                                    <div className={styles.servcsList}>
                                        <a href='#' className='font14 fontf font-semibold mt-1 black'>
                                            User Experience Assessment
                                        </a>
                                        <a href='#' className='font14 fontf font-semibold mt-1 black'>
                                            User & KPIs Data Analysis
                                        </a>
                                        <a href='#' className='font14 fontf font-semibold mt-1 black'>
                                            A/B Testing
                                        </a>
                                        <a href='#' className='font14 fontf font-semibold mt-1 black'>
                                            Feature Experimentation
                                        </a>
                                        <a href='#' className='font14 fontf font-semibold mt-1 black'>
                                            UX Iterations
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Coverage