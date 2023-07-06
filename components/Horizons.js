import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Horizons.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//image
import foldImg from '../public/images/case-soul-sound/horizons.svg'

const Horizons = () => {
    return (
        <>
            <section className={styles.soulHorizons}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.heading}>
                                <h2 className='font65 black fontf font-bold line60'>
                                    BitsWits <br />
                                    Uncovered <br />
                                    New Musical <br />
                                    Horizons!
                                </h2>
                            </div>
                            <div className={styles.contnt}>
                                <p className='font16 black fontf font-medium line30'>
                                    The experienced team working at BitsWits assisted Soul Sound in music streaming app development. We developed wireframes and prototypes that enabled us to test potential solutions quickly and iteratively. Not only this, but we also came up with a feature for users to create and save custom playlists from resolving the concern regarding limited customization options. Additionally, Soul Sound now includes a curated music library that can be filtered and sorted according to genre, artist, or other criteria. It helps users find the perfect music for any occasion.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.horizImg}>
                                <Image src={foldImg} alt='Bitswits' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Horizons