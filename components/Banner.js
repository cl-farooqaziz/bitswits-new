import React from 'react'
import styles from '@/styles/Banner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import alignicon from '../public/images/banner/bannerimage.png'
import alignicon1 from '../public/images/banner/bannerimage1.png'
import alignicon2 from '../public/images/banner/bannerimage2.png'
import alignicon3 from '../public/images/banner/bannerimage3.png'
import alignicon4 from '../public/images/banner/bannerimage4.png'
import icon1 from '../public/images/banner/icon1.png'
import icon2 from '../public/images/banner/icon2.png'
import icon3 from '../public/images/banner/icon3.png'
import icon4 from '../public/images/banner/icon4.png'
import callIcn from '../public/images/banner/call-icon.png'


const Banner = () => {
    return (


        <section className={styles.banner}>
            <Container fluid>
                <Row className={styles.bannnerproject}>
                    <Col lg={7}>
                        <div className={styles.banerTxt}>
                            <h1 className='font65 black fontf font-bold line60'> Affordable <span className='grdiant'> Website</span> <br></br> <span className='grdiant'>Mobile App</span> & <span className='grdiant'>Game</span><br></br> Development</h1>
                            <p className='black fontf font-medium line30'>We deliver great results, on time and on budget. <br></br> Contact us to start talking about your project today!</p>

                            <div className={`${styles.bttnsto} mt-3`}>
                                <Link className={styles.bttns1} href="#">Book A Call</Link>
                                <Link className={styles.bttns2} href="#">Live Chat </Link>
                            </div>


                            <div className={styles.bannerimg2}>
                                <div className={styles.bannerimg1}>

                                    <div className={` ${styles.logo1} ${styles.logo13} `}>

                                        <Image alt="Bitswits" loading="lazy" src={alignicon4} className={` ${styles.bottom}  img-fluid`} />
                                        <Image alt="Bitswits" loading="lazy" src={alignicon3} className={`${styles.bottom1}  img-fluid mt-3`} />

                                    </div>

                                    <div className={styles.logo1}>
                                        <Image alt="Bitswits" loading="lazy" src={alignicon} className={`${styles.bottom2} img-fluid`} />
                                    </div>

                                    <div className={` ${styles.logo1} ${styles.logo14} `}>
                                        <Image alt="Bitswits" loading="lazy" src={alignicon2} className={`${styles.bottom3} img-fluid`} />
                                        <Image alt="Bitswits" loading="lazy" src={alignicon1} className={`${styles.bottom4} img-fluid`} />

                                    </div>
                                </div>



                                {/* <Image alt="Bitswits" loading="lazy" src={alignicon} className="img-fluid" />
                            <Image alt="Bitswits" loading="lazy" src={alignicon1} className="img-fluid" />
                            <Image alt="Bitswits" loading="lazy" src={alignicon2} className="img-fluid" /> */}
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className='p-0'>
                        <div className={styles.bannerform}>

                            <div className={`${styles.discuss} d-flex`}>
                                <div className={styles.call}>
                                    <Image className='img-fluid'
                                        src={callIcn}
                                        alt='bitswits'
                                    />
                                    <p className='font13 font-semibold lightgrey fontf m-0'>
                                        Let's discuss your project:
                                    </p>
                                </div>
                                <Link className='font14 font-medium white fontf' href='tel:(833) 500-6007'>(833) 500-6007</Link>
                            </div>

                            <div className={styles.make}>
                                <div className={styles.free}>
                                    <p className='font16 texttran font-bold fontf grey'>
                                        Make an obligation-free enquiry
                                    </p>
                                </div>
                                <form className={styles.formsbanner}>
                                    <input type='text' className={styles.forminput} placeholder='Your Name' />
                                    <input type='number' className={styles.forminput} placeholder='Phone Number' />
                                    <input type='email' className={styles.forminput} placeholder='Email Address' />
                                    <textarea className={styles.formarea} placeholder='How can we help you?' ></textarea>
                                    <div className={`${styles.take} d-flex`}>
                                        <p className='grey font11 font-semibold fontf m-0'>We take your privacy seriously.<br></br> Read our <strong>Privacy Notice</strong> .</p>
                                        <input type='Submit' className={styles.notice} />
                                    </div>

                                </form>
                            </div>

                            <div className={styles.read}>
                                <div className={`${styles.free} text-center`}>
                                    <p className='font21 font-bold fontf grey'>OUR OFFICES</p>
                                </div>

                                <div className={styles.locations}>
                                    <div className={`${styles.locInner}`}>
                                        <div className={styles.locImg}>
                                            <Image alt="Bitswits" src={icon1} className='img-fluid' />
                                        </div>
                                        <div className={styles.subInner}>
                                            <p className='font15 font-bold fontf mb-0 white'>USA</p>
                                            <Link href="#" className='font12 font-regular fontf white texdocration'>
                                                +1 833 500 6007
                                            </Link>
                                        </div>

                                    </div>
                                    <div className={`${styles.locInner}`}>
                                        <div className={styles.locImg}>
                                            <Image alt="Bitswits" src={icon2} className='img-fluid' />
                                        </div>
                                        <div className={styles.subInner}>
                                            <p className='font15 font-bold fontf mb-0 white'>UAE</p>
                                            <Link href="#" className='font12 font-regular fontf white texdocration'>
                                                +1 833 500 6007
                                            </Link>
                                        </div>
                                    </div>

                                    <div className={`${styles.locInner}`}>
                                        <div className={styles.locImg}>
                                            <Image alt="Bitswits" src={icon4} className='img-fluid' />
                                        </div>
                                        <div className={styles.subInner}>
                                            <p className='font15 font-bold fontf mb-0 white'>MALAYSIA</p>
                                            <Link href="#" className='font12 font-regular fontf white texdocration'>
                                                +1 833 500 6007
                                            </Link>
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