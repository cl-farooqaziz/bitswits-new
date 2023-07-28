import React from 'react'
import styles from '@/styles/choose.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import insight1 from '../public/images/choose/1.png'
import insight2 from '../public/images/choose/2.png'
import insight3 from '../public/images/choose/3.png'
import insight4 from '../public/images/choose/4.png'
import insight5 from '../public/images/choose/5.png'
import insight6 from '../public/images/choose/6.png'
import Image from 'next/image'


const Choose = () => {




    return (
        <>

            <section className={styles.Offer}>

                <Container>
                    <Row>
                        <Col xl={12} className='mb-5'>
                            <h2 className='font30 font-bold center'>Choose Us Because</h2>
                            <p className='font16 center'>We’re efficiently effective!</p>
                        </Col>
                    </Row>
                    <Row className='gy-5'>
                        <Col xl={4} className={styles.into}>
                            <div className={styles.help}>
                                <Image src={insight1} />
                                <h3 className='font16'>21+ years experience in the industry</h3>
                            </div>
                        </Col>
                        <Col xl={4} className={styles.into}>
                            <div className={styles.help}>
                                <Image src={insight2}  />
                                <h3 className='font16'>Streamlined Communication System</h3>
                            </div>
                        </Col>
                       
                        <Col xl={4}>
                            <div className={styles.help}>
                                <Image src={insight3} />
                                <h3 className='font16'>Proven Methodologies</h3>
                            </div>
                        </Col>
                        <hr></hr>
                        <Col xl={4} className={styles.into}>
                            <div className={styles.help}>
                                <Image src={insight4} />
                                <h3 className='font16'>Competitive Pricing</h3>
                            </div>
                        </Col>
                     
                        <Col xl={4} className={styles.into}>
                            <div className={styles.help}>
                                <Image src={insight5} />
                                <h3 className='font16'>Comprehensive Reporting</h3>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className={styles.help}>
                                <Image src={insight6} />
                                <h3 className='font16'>Best-in-industry quotations</h3>
                            </div>
                        </Col>
                        <hr></hr>
                        <Col xl={4} className={styles.into}>
                            <div className={styles.help}>
                                <Image src={insight4} />
                                <h3 className='font16'>Hire from a pool of highly Proficient SEO Experts</h3>
                            </div>
                        </Col>
                     
                        <Col xl={4} className={styles.into}>
                            <div className={styles.help}>
                                <Image src={insight5} />
                                <h3 className='font16'>Free Website Analysis</h3>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className={styles.help}>
                                <Image src={insight6} />
                                <h3 className='font16'>White Hat SEO & Quality Backlinks</h3>
                            </div>
                        </Col>

                        <hr></hr>

                        <Col xl={4} className={styles.into}>
                            <div className={styles.help}>
                                <Image src={insight4} />
                                <h3 className='font16'>Improved Rankings & Traffic</h3>
                            </div>
                        </Col>
                     
                        <Col xl={4} className={styles.into}>
                            <div className={styles.help}>
                                <Image src={insight5} />
                                <h3 className='font16'>Branding & Reputation Management</h3>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className={styles.help}>
                                <Image src={insight6} />
                                <h3 className='font16'>Incresed ROI & Sales Volume</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>



            </section>

        </>
    )
}

export default Choose