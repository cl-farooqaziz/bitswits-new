import React from 'react'
import styles from '@/styles/SoulCTA.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const SoulCTA = () => {
    return (
        <>
            <section className={styles.soulCta}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.heading}>
                                <h2 className='font50 white fontN font-bold line60 mb-0'>
                                    BitsWits <br />
                                    Uncovered <br />
                                    New Musical <br />
                                    Horizons!
                                </h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SoulCTA