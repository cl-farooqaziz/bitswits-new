import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Robust.module.css'
//images
import servc1 from '../public/images/laravel/pyt-icon1.png'
import servc2 from '../public/images/laravel/pyt-icon2.png'
import servc3 from '../public/images/laravel/pyt-icon3.png'
import servc4 from '../public/images/laravel/pyt-icon4.png'
import servc5 from '../public/images/laravel/pyt-icon5.png'
import servc6 from '../public/images/laravel/pyt-icon6.png'
import servc7 from '../public/images/laravel/pyt-icon7.png'
import servc8 from '../public/images/laravel/pyt-icon8.png'
import servc9 from '../public/images/laravel/pyt-icon9.png'
import servc10 from '../public/images/laravel/pyt-icon10.png'
import flodimg from '../public/images/laravel/lara.png'



const Robust = () => {
    return (
        <>
            <section className={`${styles.robust}`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h3 className='font40 fontf font-bold line60 black text-center mb-2'>
                                Thinking About <span className='grdiant'>Laravel</span>?
                            </h3>
                            <p className='font18 fontf font-regular black text-center mb-5'>
                                Easy and customized Laravel services for robust business needs.
                            </p>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.laraBox}>
                                <div className={styles.left}>
                                    <ul className={styles.clearfix}>
                                        <li>
                                            <Image src={servc1} className='img-fluid' alt="" />
                                            <span> Web Application Development  </span>
                                        </li>
                                        <li>
                                            <Image src={servc2} className='img-fluid' alt="" />
                                            <span> Customisation and Integration</span>
                                        </li>
                                        <li>
                                            <Image src={servc3} className='img-fluid' alt="" />
                                            <span> Website Migration Services </span>
                                        </li>
                                        <li>
                                            <Image src={servc4} className='img-fluid' alt="" />
                                            <span> Template Design and Development </span>
                                        </li>
                                        <li>
                                            <Image src={servc5} className='img-fluid' alt="" />
                                            <span>
                                                Multilingual Solutions
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div className={styles.mid}>
                                    <Image src={flodimg} className='img-fluid' alt="" />
                                </div>

                                <div className={styles.right}>
                                    <ul className={styles.clearfix}>
                                        <li>
                                            <Image src={servc6} className='img-fluid' alt="" />
                                            <span> Extension Development  </span>
                                        </li>
                                        <li>
                                            <Image src={servc7} className='img-fluid' alt="" />
                                            <span> e-Commerce Development </span>
                                        </li>
                                        <li>
                                            <Image src={servc8} className='img-fluid' alt="" />
                                            <span> Restful Application Development </span>
                                        </li>
                                        <li>
                                            <Image src={servc9} className='img-fluid' alt="" />
                                            <span> Social Media Development  </span>
                                        </li>
                                        <li>
                                            <Image src={servc10} className='img-fluid' alt="" />
                                            <span> SaaS App Development  </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Robust