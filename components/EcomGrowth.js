import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/EcomGrowth.module.css'
//images
import bluebg from '../public/images/eComDev/blueimg.png'
import bluebg1 from '../public/images/eComDev/bluebgicon-1.png'
import bluebg2 from '../public/images/eComDev/bluebgicon-2.png'
import bluebg3 from '../public/images/eComDev/bluebgicon-3.png'
import bluebg4 from '../public/images/eComDev/bluebgicon-4.png'



const EcomGrowth = () => {
    return (
        <>
            <section className={styles.busniessgroth}>
                <Container>
                    <div className='mb-5'>
                        <h3 className='font30 fontf font-bold white text-center mb-0'>
                            Business Growth With Our E-commerce Development?
                        </h3>
                        <p className='font30 fontf font-regular white text-center mt-2 mb-0'>Here’s Everything You Need To Know:</p>
                    </div>
                    <div className={styles.mainBox}>
                        <Row className={styles.boxRow}>
                            <Col lg={6}>
                                <div className={styles.cardMain}>
                                    <div className={`${styles.soluCard}`}>
                                        <div className={`${styles.imgBox}`}>
                                            <Image src={bluebg1} alt='BitsWits' className='img-fluid' />
                                        </div>
                                        <div className={`${styles.txtBox}`}>
                                            <h5 className='font20 fontf font-500 white line30'>
                                                Build An Incredible Shopping Experience
                                            </h5>
                                            <p>
                                                Our revolutionary e-Commerce development lets you create stores that engage with the maximum shoppers to increase sales. Choose from the best responsive e-Commerce templates on the market or build a fully custom site.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`${styles.soluCard}`}>
                                        <div className={`${styles.imgBox}`}>
                                            <Image src={bluebg2} alt='BitsWits' className='img-fluid' />
                                        </div>
                                        <div className={`${styles.txtBox}`}>
                                            <h5 className='font20 fontf font-500 white line30'>
                                                Add Promising Features
                                            </h5>
                                            <p>
                                                Best-in-class marketing and conversion tools enable the merchants to grow at double the speed of the industry average. Drive more traffic, convert more visitors and seamlessly sell on multiple channels from a single location by first adding a few promising features.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`${styles.soluCard}`}>
                                        <div className={`${styles.imgBox}`}>
                                            <Image src={bluebg3} alt='BitsWits' className='img-fluid' />
                                        </div>
                                        <div className={`${styles.txtBox}`}>
                                            <h5 className='font20 fontf font-500 white line30'>
                                                Get Unparraled Performance
                                            </h5>
                                            <p>
                                                The e-Commerce systems developed by us at Team In India benefit merchants from industry-leading performance, stability and sites that load fast for maximum conversion.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`${styles.soluCard}`}>
                                        <div className={`${styles.imgBox}`}>
                                            <Image src={bluebg4} alt='BitsWits' className='img-fluid' />
                                        </div>
                                        <div className={`${styles.txtBox}`}>
                                            <h5 className='font20 fontf font-500 white line30'>
                                                Optimisation of ROI
                                            </h5>
                                            <p>
                                                You’ll spend less time managing technology and get regular updates with new, cutting-edge features once you know the technique to manage and optimize the things that impact your business.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className={styles.right}>
                                <Image src={bluebg} alt='BitsWits' className='img-fluid' />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default EcomGrowth