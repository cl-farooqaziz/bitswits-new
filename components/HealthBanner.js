import React from 'react'
import styles from '@/styles/HealthBanner.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const HealthBanner = () => {
    return (
        <>
            <section className={styles.healthBanner}>
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.heading}>
                                <h1 className='font100 black fontf font-bold'>
                                    PRO <br />HEALTH
                                </h1>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className={styles.contnt}>
                                <h2 className='font24 liBlack fontf font-bold line30'>
                                    A Pharmacy Delivery App That Brings The Medicine <br /> At Your Door And Transforms Healthcare In Every <br /> Direction!”
                                </h2>
                                <p className='font-16 liBlack fontf font-medium line30 mt-3'>
                                    Pharmacies are an indispensable constituent of any healthcare system, ensuring patients have access to the needed medications. In contemporary times, there has been a dramatic growth in demand for healthcare apps; mobile applications designed specifically for this sector are an industry trend on the rise. The amazing portfolio of BitsWits convinced Pro Health, a pharmaceutical company, to use our specialized pharma application development services to accomplish its objective.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HealthBanner