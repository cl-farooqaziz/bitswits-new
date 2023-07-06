import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/OverView.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//image
import foldImg from '../public/images/case-soul-sound/beats.png'
import { FaAngleRight } from 'react-icons/fa'


const OverView = () => {
    return (
        <>
            <section className={styles.soulOverView}>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className={styles.heading}>
                                <h2 className='font50 black fontf font-bold line60'>
                                    Overview
                                </h2>
                                <FaAngleRight />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className={styles.contnt}>
                                <p className='font16 black fontf font-medium line30'>
                                    Music-streaming mobile applications have been one of the most popular categories in the world of apps in recent years. This growing inclination towards music streaming is driven by the shift in music consumption behavior, where users prefer to listen to their favorite tracks on the go...
                                </p>
                                <Link href="#">Read More</Link>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.foldImg}>
                                <Image className='img-fluid' src={foldImg} alt='Bitswits'/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default OverView