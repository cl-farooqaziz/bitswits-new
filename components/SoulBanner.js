import React from 'react'
import styles from '@/styles/SoulBanner.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const SoulBanner = () => {
    return (
        <>
            <section className={styles.soulBanner}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.heading}>
                                <h2 className='font50 black fontf font-bold line60'>
                                    Unite The Music <br /> World With Our <br /> App -Stream, <br /> Connect, And <br /> Discover!
                                </h2>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.contnt}>
                                <h1 className='font65 black fontf font-bold line60'>
                                    Soul Sound
                                </h1>
                                <p className='font-16 black fontf font-medium line30'>
                                    Soul Sound, the world's most distinguished music and audio platform, allows people to explore an incredibly varied creator community. Since its launch, the platform has become renowned for its unique content and features, including connecting with artists immediately and unearthing unheard-of tracks, podcasts, and more, all in one spot!
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SoulBanner