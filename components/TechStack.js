import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/TechStack.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import icon1 from '../public/images/BlockchainDvelpment/framwork/framework.png'
import icon2 from '../public/images/BlockchainDvelpment/tools/tools.png'
import icon3 from '../public/images/BlockchainDvelpment/language/lang.png'


const TechStack = () => {
    return (
        <>
            <section className='py-5'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='text-center mb-5'>
                                <h2 className='font40 black fontf font-bold line60'>
                                    Our Blockchain App Development Tech-Stack
                                </h2>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.head}>
                                <h3 className='font24 black fontf font-bold line30'>
                                    Empowering businesses through establishing a scalable ecosystem utilizing top-notch technology and human resoruces.
                                </h3>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.head}>
                                <p className='font18 black fontf font-medium line30 mb-5'>
                                    Aligning our goals with the core ethos of blockchain technology; to circulate the data and authenticate using secure and scalable technology. A data flow that cannot be altered and one that is immune to digital threats, hence improving reliability and efficiency. Explore our solutions and services that meet your development demands with convenience.
                                </p>
                            </div>
                        </Col>
                        <Col lg={8} className='mx-auto'>
                            <Row>
                                <Col lg={4}>
                                    <div className={styles.techCard}>
                                        <div className={styles.imgBox}>
                                            <Image src={icon1} alt='Bitswits' className='img-fluid' />
                                        </div>
                                        <h5 className='font18 black fontf font-medium line30'>Frameworks</h5>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.techCard}>
                                        <div className={styles.imgBox}>
                                            <Image src={icon1} alt='Bitswits' className='img-fluid' />
                                        </div>
                                        <h5 className='font18 black fontf font-medium line30'>Frameworks</h5>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.techCard}>
                                        <div className={styles.imgBox}>
                                            <Image src={icon1} alt='Bitswits' className='img-fluid' />
                                        </div>
                                        <h5 className='font18 black fontf font-medium line30'>Frameworks</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default TechStack