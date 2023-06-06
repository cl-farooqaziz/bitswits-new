import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Nextproject.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import icon1 from '../public/images/nextproject/icon1.png'
import icon2 from '../public/images/nextproject/icon2.png'
import icon3 from '../public/images/nextproject/icon3.png'
import icon4 from '../public/images/nextproject/icon4.png'
import icon5 from '../public/images/nextproject/icon5.png'
import icon6 from '../public/images/nextproject/icon6.png'
import icon7 from '../public/images/nextproject/icon7.png'


const Nextproject = () => {
    return (
        <>

            <section className={styles.nextproject}>

                <Container>
                    <Row>
                        <Col>
                            <h3 className='fontf font-bold white font65'>Let's start talking <br></br>
                                about your</h3>
                            <h2 className='fontf font-bold font75 grdiant'>Next Project</h2>
                            <Link className={styles.project} href="tel:(833) 500-6007">(833) 500-6007</Link>
                        </Col>
                    </Row>
                    <div className={styles.nextalign}>
                        <div className={styles.mobile}>
                            <Image src={icon1} className="img-fluid" />
                            <h3>Enterprise</h3>
                            <p>Best Mobile Application Developers 2022</p>
                        </div>
                        <div className={styles.mobile}>
                            <Image src={icon2} className="img-fluid" />
                            <h3>MObile App Daily</h3>
                            <p>Top Mobile Application Development Company</p>
                        </div>
                        <div className={styles.mobile}>
                            <Image src={icon3} className="img-fluid" />
                            <h3>App Futura</h3>
                            <p>Top Application Development Company</p>
                        </div>
                        <div className={styles.mobile}>
                            <Image src={icon4} className="img-fluid" />
                            <h3>Clutch</h3>
                            <p>Best Mobile Application Developers 2022</p>
                        </div>
                        <div className={styles.mobile}>
                            <Image src={icon5} className="img-fluid" />
                            <h3>Clutch</h3>
                            <p>Best Mobile Application Developers 2022</p>
                        </div>
                        <div className={styles.mobile}>
                            <Image src={icon6} className="img-fluid" />
                            <h3>Good Firms</h3>
                            <p>Best Mobile Application Developers 2022</p>
                        </div>
                        <div className={styles.mobile}>
                            <Image src={icon7} className="img-fluid" />
                            <h3>INC.5000</h3>
                            <p>Best Mobile Application Developers 2022</p>
                        </div>
                      

                    </div>
                </Container>

            </section>

        </>
    )
}

export default Nextproject