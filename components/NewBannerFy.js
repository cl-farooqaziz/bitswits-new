import React from 'react'
import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
//css
import styles from '@/styles/NewBannerFy.module.css'
//images
import icon1 from '../public/images/banner/icon1.png'
import icon2 from '../public/images/banner/icon2.png'
import icon4 from '../public/images/banner/icon4.png'
import rev1 from '../public/images/newbanner/one.png'
import rev2 from '../public/images/newbanner/two.png'


const NewBannerFy = () => {

    const [show, setShow] = useState(false);

    function modal(e) { e.preventDefault(); setShow(true); }
    function closemodal() { setShow(false); }


    return (
        <section className={styles.newbanner}>
            <Container fluid className='mx-xl-5 px-xxl-5 pe-xl-4'>
                <Row className={`${styles.bannnerproject}`}>
                    <Col lg={8}>
                        <div className={`${styles.banerTxt} ps-0 ps-md-3 ps-lg-0`}>
                            <h1 className='white fontf font-bold mb-4'>
                                The Top Android App <br /> Development Company <br /> in US!
                            </h1>

                            <p className='white f-montserrat mb-2'>
                                BitsWits, we specialize in creating custom-crafted Android applications that meet our customer's needs. Our android app development company firmly believes that no two businesses are the same, and neither should their apps be.
                            </p>

                            <div className={`${styles.bttnsto} mt-5`}>
                                <Link className={styles.bttns1} onClick={modal} href="#">
                                    Book A Call
                                </Link>
                                <Link className={styles.bttns2} href="#">
                                    Live Chat
                                </Link>
                            </div>

                            <div className={`${styles.revImg} mt-5`}>
                                <Image src={rev1} alt="bitswits" className='img-fluid' />
                                <Image src={rev2} alt="bitswits" className='img-fluid' />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className='p-0'>
                        <div className={styles.bannerform}>
                            <div className={styles.make}>
                                <div className={styles.free}>
                                    <p className='font16 texttran font-bold fontf white'>
                                        Make an obligation-free enquiry
                                    </p>
                                </div>
                                <form className={styles.formsbanner}>
                                    <input type='text' className={styles.forminput} placeholder='Name' />
                                    <input type='number' className={styles.forminput} placeholder='Phone Number' />
                                    <input type='email' className={styles.forminput} placeholder='Email Address' />
                                    <textarea className={styles.formarea} placeholder='Message'></textarea>
                                    <div className={`${styles.take} d-flex`}>
                                        <p className='white font11 font-semibold fontf m-0'>We take your privacy seriously.<br></br> Read our <strong>Privacy Notice</strong>.</p>
                                        <input type='Submit' className={styles.notice} />
                                    </div>
                                </form>
                            </div>

                            <div className={styles.read}>
                                <div className={`${styles.free} text-center`}>
                                    <p className='font16 font-bold fontf white'>OUR OFFICES</p>
                                </div>

                                <div className={styles.locations}>
                                    <div className={`${styles.locInner}`}>
                                        <div className={styles.locImg}>
                                            <Image alt="bitswits" src={icon1} className='img-fluid' />
                                        </div>
                                        <div className={styles.subInner}>
                                            <p className='font10 font-bold fontf mb-0 white'>USA</p>
                                            <Link href="#" className='font10 font-regular fontf white texdocration'>
                                                +1 833 500 6007
                                            </Link>
                                        </div>

                                    </div>
                                    <div className={`${styles.locInner}`}>
                                        <div className={styles.locImg}>
                                            <Image alt="bitswits" src={icon2} className='img-fluid mt-2' />
                                        </div>
                                        <div className={styles.subInner}>
                                            <p className='font10 font-bold fontf mb-0 white'>UAE</p>
                                            <Link href="#" className='font10 font-regular fontf white texdocration'>
                                                +1 833 500 6007
                                            </Link>
                                        </div>
                                    </div>

                                    <div className={`${styles.locInner}`}>
                                        <div className={styles.locImg}>
                                            <Image alt="bitswits" src={icon4} className='img-fluid mt-1' />
                                        </div>
                                        <div className={styles.subInner}>
                                            <p className='font10 font-bold fontf mb-0 white'>MALAYSIA</p>
                                            <Link href="#" className='font10 font-regular fontf white texdocration'>
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

export default NewBannerFy
