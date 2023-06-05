import React from 'react'
import styles from '@/styles/Ourservices.module.css'
import { Container, Row,Col } from 'react-bootstrap'
import Link from 'next/link'

const Lookingfor = () => {
    return (
        <>
            <section className={styles.lookingfor}>
                <Container>
                    <Row className={styles.project}>
                        <Col lg={2}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace white'>Services</h5>
                        </Col>
                        <Col lg={8}>
                            <h4 className='font65 black fontf font-bold line60 white'>Our <span className='grdiant'>Services</span> </h4>
                        </Col>
                        <Col lg={2}>
                            <Link className={styles.bttns1} href="#">Book a Call</Link>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default Lookingfor