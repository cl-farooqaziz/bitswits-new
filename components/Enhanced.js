import React from 'react'
import styles from '@/styles/Enhanced.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import lop1 from '/public/images/bonus/1.webp'
import lop2 from '/public/images/bonus/2.webp'
import lop3 from '/public/images/bonus/3.webp'
import lop4 from '/public/images/bonus/4.webp'
import lop5 from '/public/images/bonus/5.webp'
import lop6 from '/public/images/bonus/6.webp'
import lop7 from '/public/images/bonus/mobile.webp'


const Enhanced = () => {
  return (
    <>
    <section className= {`${styles.bgblack} ${styles.benefits}`}>
        <Container>
            <Row>
                <Col md={12} className ='pb-5'>
                    <h3 className ='white'>BONUSES</h3>
                    <h2 className={`${styles.ios} f-50 f-playfair f-700 black t-center`} >Benefits Of <span className='grdiant'>iOS App Development</span> Services</h2>
                </Col>
            </Row>
            <Row className='appfind'>
               <Col md={2}>
                    <div className={styles.maincard}>
                        <div className={styles.cardbody}>
                            <Image src={lop1}
                                 alt="bitswits" className={styles.mapp} />
                            <h4 className={styles.cardhd}>Adaptable <br></br> Mobile App</h4>
                            <p>Transform your idea into
                                a reality with our iPhone app development company. We create
                                    versatile, user-friendly mobile apps for maximum success.</p>
                        </div>
                    </div>
                </Col>
               <Col md={2}>
                    <div className={styles.maincard}>
                        <div className={styles.cardbody}>
                            <Image src={lop2}
                                 alt="bitswits"  />
                            <h4 className={styles.cardhd}>Enhanced <br></br> Security</h4>
                            <p>With iOS, you get peace
                                of mind knowing your information security are in good hands.</p>
                        </div>
                    </div>
                </Col>
               <Col md={2}>
                    <div className={styles.maincard}>
                        <div className={styles.cardbody}>
                            <Image src={lop3}
                                 alt="bitswits" />
                            <h4 className={styles.cardhd}>Best User <br></br> Experience</h4>
                            <p>iOS developers make magic
                                happen with top-notch tools and tech stacks to craft
                                    iOS apps which boast an unparalleled user experience. Treat yourself – download
                                    one today!</p>
                        </div>
                    </div>
                </Col>
               <Col md={2}>
                    <div className={styles.maincard}>
                        <div className={styles.cardbody}>
                            <Image src={lop4}
                                 alt="bitswits" />
                            <h4 className={styles.cardhd}>Greater <br></br>Scalability</h4>
                            <p>iPhone app development
                                company provide an opportunity to keep up with the trends while taking
                                    your business where it needs to
                                    go. Unleash the potential of scalability today!</p>
                        </div>
                    </div>
                </Col>
                <Col md={2}>
                    <div className={styles.maincard}>
                        <div className={styles.cardbody}>
                            <Image src={lop5}
                                alt="bitswits"  />
                            <h4 className={styles.cardhd}>Alluring <br></br> Design</h4>
                            <p >Nothing is more pleasing
                                than the captivating iOS graphics and designs - an
                                    accurate statement of art. With a level of UX finesse guaranteed to delight any
                                    user.</p>
                        </div>
                    </div>
                </Col>
                <Col md={2}>
                    <div className={styles.maincard}>
                        <div className={styles.cardbody}>
                            <Image src={lop6}
                                 alt="bitswits"  />
                            <h4 className={styles.cardhd}>Cutting Edge <br></br> App Dev</h4>
                            <p >Cutting-edge iOS apps are
                                crafted with finesse by our skilled coders, deploying the
                                    most advanced tools and tech stack to ensure a seamless user experience.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <div className={styles.mobileimg} >
            <Image src={lop7}  alt="bitswits" className="img-fluid" loading="lazy"/>
    </div>
    </section>
    
    
    
    </>
  )
}

export default Enhanced