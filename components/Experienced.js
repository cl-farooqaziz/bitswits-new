import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Experienced.module.css'
import { Container, Row, Col } from 'react-bootstrap'



const Experienced = (props) => {
    return (
        <>
            <section className={`${styles.serviceBox} ${styles.ahead}`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2 className='text-center font40 font-bold text-center'>Our Experience
</h2>
                        </Col>
                    </Row>
                    <Row className='rowGap mt-5'>
                        <Col lg={6}>
                            <div className={styles.aheadTxt}>
                                {props.title}
                                <p className='font14 black fontf font-medium line30'>
                                    {props.subpara2}
                                </p>
                                <p className='font14 black fontf font-medium line30'>
                                    {props.subpara}
                                </p>
                                
                                <div className='mt-4'>
                                    <Row className='justify-content-between'>
                                       <Col lg={12}>
                                        {props.hoke}
                                       </Col>
                                        <Col sm={5}>
                                            <Link className={`${styles.bttns1} mt-3`} href="#">
                                                Call Us Now!
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.aheadImg}>
                                <Image  alt="bitswits"     src={props.ahead}  className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Experienced