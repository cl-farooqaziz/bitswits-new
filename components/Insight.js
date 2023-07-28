import React from 'react'
import styles from '@/styles/Insight.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import insight1 from '../public/images/insight/1.png'
import insight2 from '../public/images/insight/2.png'
import insight3 from '../public/images/insight/3.png'
import insight4 from '../public/images/insight/4.png'
import insight5 from '../public/images/insight/5.png'
import insight6 from '../public/images/insight/6.png'
import Image from 'next/image'


const Insight = () => {




    return (
        <>

            <section className={styles.Offer}>

                <Container>
                    <Row>
                        <Col xl={12} className='mb-5'>
                            <h2 className='font30 font-bold center'>An Insight Into What We Offer</h2>
                        </Col>
                    </Row>
                    <Row className='gy-4'>
                        <Col xl={6} className={styles.into}>
                            <div className={styles.help}>
                                <Image src={insight1} />
                                <h3 className='font20'>Fully Google compliant natural search engine marketing & optimisation (SEO)</h3>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <div className={styles.help}>
                                <Image src={insight2}  />
                                <h3 className='font20'>Professional pay per click agency and management services & reporting</h3>
                            </div>
                        </Col>
                        <hr></hr>
                        <Col xl={6} className={styles.into}>
                            <div className={styles.help}>
                                <Image src={insight3} />
                                <h3 className='font20'>Conversion optimisation to help increase website conversions & engagement</h3>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <div className={styles.help}>
                                <Image src={insight4} />
                                <h3 className='font20'>Responsive website design & development in line with Google recommendations</h3>
                            </div>
                        </Col>
                        <hr></hr>
                        <Col xl={6} className={styles.into}>
                            <div className={styles.help}>
                                <Image src={insight5} />
                                <h3 className='font20'>Effective social media marketing and visitor targeting</h3>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <div className={styles.help}>
                                <Image src={insight6} />
                                <h3 className='font20'>Local, National and International Search engine optimization</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>



            </section>

        </>
    )
}

export default Insight