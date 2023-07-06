import React from 'react'
import styles from '@/styles/Solutions.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa'

const Solutions = () => {
    return (
        <>
            <section className={styles.soulchallengs}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={4}>
                            <div className={styles.heading}>
                                <h2 className='font50 black fontf font-bold line60'>
                                    The <br /> Solutions
                                </h2>
                                <FaAngleRight />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className={styles.contnt}>
                                <p className='font16 black fontf font-medium line30'>
                                    BitsWits utilized its intellect to address and contend with the challenges head-on. We conducted extensive research into user behavior and preferences to create a music app explicitly tailored to users' needs and goals. We analyzed data on how best to interact with each user.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Solutions