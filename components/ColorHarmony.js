import React from 'react'
import styles from '@/styles/ColorHarmony.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const ColorHarmony = () => {
    return (
        <>
            <section className={styles.soulHarmony}>
                <Container>
                    <Row className='align-items-center gy-4'>
                        <Col lg={12}>
                            <div className={styles.heading}>
                                <h2 className='font50 black fontf font-bold line60 text-center mx-auto'>
                                    Choose the no. of features as <br /> per your requirements.
                                </h2>
                            </div>
                        </Col>


                        <Col className='col-6'>
                            <div className={styles.left}>#E4F81E</div>
                        </Col>
                        <Col className='col-6'>
                            <div className={styles.right}>#000000</div>
                        </Col>


                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ColorHarmony