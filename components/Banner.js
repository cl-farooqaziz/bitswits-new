import React from 'react'
import styles from '@/styles/Banner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import alignicon from '../public/images/banner/bannerimage.svg'
import icon1 from '../public/images/banner/icon1.png'
import icon2 from '../public/images/banner/icon2.png'
import icon3 from '../public/images/banner/icon3.png'
import icon4 from '../public/images/banner/icon4.png'
import { BsFillTelephoneFill } from 'react-icons/bs'


const Banner = () => {
    return (


        <section className={styles.banner}>
            <Container fluid>
                <Row className={styles.bannnerproject}>
                    <Col lg={7}>
                        <h1 className='font65 black fontf font-bold line60'> Affordable <span className='grdiant'> Website</span> <br></br> <span className='grdiant'>Mobile App</span> & <span className='grdiant'>Game</span><br></br> Development</h1>
                        <p className='font25 black fontf font-medium line30'>We deliver great results, on time and on budget. Contact us to start talking about your project today!</p>

                        <div className={`${styles.bttnsto} mt-3`}>
                            <Link className={styles.bttns1} href="#">Book A Call</Link>
                            <Link className={styles.bttns2} href="#">Live Chat </Link>
                        </div>

                        <div className={styles.bannerimg}>
                            <Image alt="Bitswits" loading="lazy" src={alignicon} className="img-fluid"  />
                        </div>


                    </Col>
                    <Col lg={4} className='p-0'>
                        <div className={styles.bannerform}>

                            <div className={`${styles.discuss} d-flex`}>
                                <p className='font12 font-semibold lightgrey fontf m-0'> <BsFillTelephoneFill size={10} className={styles.email} />Let's discuss your project: </p>
                                <Link className='font21 font-medium white fontf' href='tel:(833) 500-6007'>(833) 500-6007</Link>
                            </div>

                            <div className={styles.make}>
                                <div className={styles.free}>
                                    <p className='font21 font-bold fontf grey'>Make an obligation-free enquiry</p>
                                </div>
                                <form className={styles.formsbanner}>
                                    <input type='text' className={styles.forminput} placeholder='Your Name' />
                                    <input type='number' className={styles.forminput} placeholder='Phone Number' />
                                    <input type='email' className={styles.forminput} placeholder='Email Address' />
                                    <textarea className={styles.formarea} placeholder='How can we help you?' ></textarea>
                                    <div className={`${styles.take} d-flex`}>
                                        <p className='grey font12 font-semibold fontf m-0'>We take your privacy seriously.<br></br> Read our <strong>Privacy Notice</strong> .</p>
                                        <input type='Submit' className={styles.notice} />
                                    </div>

                                </form>
                            </div>

                            <div className={styles.read}>
                                <div className={styles.free}>
                                    <p className='font21 font-bold fontf grey'>Make an obligation-free enquiry</p>
                                </div>


                                <div className={` ${styles.sharjah} d-flex`}>
                                    <div className={` ${styles.califonia} d-flex`}>

                                        <div className={`${styles.alignment} d-flex`}>


                                            <div>
                                                <Image alt="Bitswits" src={icon1} className='img-fluid' />
                                            </div>
                                            <div>
                                                <p className='font8 font-bold fontf mb-1'>Delaware</p>
                                                <Link href="#" className='font10 font-bold fontf white texdocration'>+1 833 500 6007</Link>
                                                <Link href="#" className='font10 font-bold fontf white texdocration'>+1 312 379 5987</Link>
                                            </div>

                                        </div>
                                        <div>
                                            <p className='font8 font-bold fontf mb-1'>California</p>
                                            <Link href="#" className='font10 font-bold fontf white texdocration'>+1 312 379 5987</Link>
                                            <Link href="#" className='font10 font-bold fontf white texdocration'>+1 833 500 6007</Link>

                                        </div>

                                    </div>
                                    <div className={`${styles.alignment} d-flex`}>
                                        <div>
                                            <Image alt="Bitswits" src={icon2} className='img-fluid' />
                                        </div>
                                        <div>
                                            <p className='font8 font-bold fontf mb-1'>Sharjah</p>
                                            <Link href="#" className='font10 font-bold fontf white texdocration'>+97 155 503 1266</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className={` ${styles.sharjah} d-flex mt-3`}>
                                    <div className={` ${styles.califonia} d-flex`}>

                                        <div className={`${styles.alignment} d-flex`}>


                                            <div>
                                                <Image alt="Bitswits" src={icon3} className='img-fluid' />
                                            </div>
                                            <div>
                                                <p className='font8 font-bold fontf mb-1'>Karachi</p>
                                                <Link href="#" className='font10 font-bold fontf white texdocration'>+92 346 828 0101</Link>

                                            </div>

                                        </div>
                                     
                                        <div className={`${styles.alignment} d-flex`}>


                                            <div>
                                                <Image alt="Bitswits" src={icon4} className='img-fluid' />
                                            </div>
                                            <div>
                                            <p className='font8 font-bold fontf mb-1'>Malaysia</p>
                                            <Link href="#" className='font10 font-bold fontf white texdocration'>Labuan</Link>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>


                        </div>
                    </Col>
                </Row>
            </Container>
        </section>








    )
}

export default Banner