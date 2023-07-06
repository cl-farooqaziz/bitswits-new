import React from 'react'
import styles from '@/styles/Challenge.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaAngleLeft } from "react-icons/fa";


const Challenge = () => {
    return (
        <>
            <section className={styles.soulchallengs}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={8}>
                            <div className={styles.contnt}>
                                <p className='font16 black fontf font-medium line30'>
                                    One of the primary challenges was to ensure that the music app performs exceptionally well on all platforms, i.e., Android and iOS. The client wished the app would be accessible to a broad range of users; thus, they asked us to create an app that works on all devices. The client also requested to add a feature that provides personalized recommendations based on listening habits.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.heading}>
                                <FaAngleLeft />
                                <h2 className='font50 black fontf font-bold line60'>
                                    The <br /> Challenge
                                </h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Challenge