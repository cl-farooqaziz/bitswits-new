import React from 'react'
import styles from '@/styles/ColorHarmony.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const ColorHarmony = (props) => {
    return (
        <>
            <section className={styles[props.caseHarmony]}>
                <Container>
                    <Row className='align-items-center gy-4'>
                        <Col lg={12}>
                            <div className={styles.heading}>
                                {props.heading}
                            </div>
                        </Col>

                        {props.colorbx1 ?

                            <>
                                <Col lg={6}>
                                    {props.left}
                                </Col>

                                <Col lg={6}>
                                    {props.right}
                                </Col>
                            </>
                            :
                            ''
                        }

                        {props.colorbx2 ?

                            <>
                                <Col lg={4}>
                                    {props.left}
                                </Col>

                                <Col lg={4}>
                                    {props.mid}
                                </Col>

                                <Col lg={4}>
                                    {props.right}
                                </Col>
                            </>
                            :
                            ''
                        }
                        
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ColorHarmony