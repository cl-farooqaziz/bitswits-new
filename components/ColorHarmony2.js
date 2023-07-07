import React from 'react'
import styles from '@/styles/ColorHarmony.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const ColorHarmony2 = () => {
    return (
        <>
            <section className={styles.markHarmony}>
                <Container>
                    <Row className='align-items-center gy-4'>
                        <Col lg={12}>
                            <div className={styles.heading}>
                                <h2 className='font50 black fontf font-bold line60 text-center mx-auto'>
                                    Color Harmony
                                </h2>
                            </div>
                        </Col>
                        <Col className='col-4'>
                            <div className={styles.left}>#81CCC8</div>
                        </Col>
                        <Col className='col-4'>
                            <div className={styles.mid}>#A5D1CD</div>
                        </Col>
                        <Col className='col-4'>
                            <div className={styles.right}>#EFEFEF</div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ColorHarmony2