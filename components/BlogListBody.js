import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/BlogListBody.module.css'
//
import arrow from '../public/images/blogBanners/right-arrow.webp'
import blogimg1 from '../public/images/blogBanners/1.png'
import blogimg2 from '../public/images/blogBanners/2.png'


const BlogListBody = () => {
    return (
        <div>
            <section className={styles.blogListBody}>
                <Container>
                    <Row>
                        <Col lg={2}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace black'>Bolgs</h5>
                        </Col>
                        <Col lg={7}>
                            <h2 className='font65 black fontf font-bold line60 black'>Our Blogs</h2>
                        </Col>
                        <Col lg={3}>
                            <Link className={styles.bttns1} href="#">Book a Call</Link>
                        </Col>
                    </Row>
                    <div className='mt-5 pt-5'>
                        <Row>
                            <Col lg={9}>
                                <div className={styles.blogCard}>
                                    <Row className="row align-items-center">
                                        <Col lg={5}>
                                            <Link href="#" className={styles.cardImg}>
                                                <Image className="img-fluid" src={blogimg1} alt="bitswits" />
                                            </Link>
                                        </Col>
                                        <Col lg={7}>
                                            <div className={styles.cardCntnt}>
                                                <h5 className={`${styles.blogCategory} mt-3 mt-lg-0`}>
                                                    SEO
                                                </h5>
                                                <a href="#">
                                                    <h5 className={styles.blogTitle}>
                                                        Approaches for Building Real-Time Machine Learning Systems
                                                    </h5>
                                                </a>
                                                <p className={styles.blogDesciption}>
                                                    Selecting the right search engine optimization company is essential.
                                                </p>
                                                <h4 className={styles.detailDate}>
                                                    <span className="pe-1"><i>Barry Schwartz</i></span>
                                                    <span>|</span>
                                                    <span className="ps-1">May 23, 2023 at 9:32 pm ET</span>
                                                </h4>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.blogCard}>
                                    <Row className="row align-items-center">
                                        <Col lg={5}>
                                            <Link href="#" className={styles.cardImg}>
                                                <Image className="img-fluid" src={blogimg2} alt="bitswits" />
                                            </Link>
                                        </Col>
                                        <Col lg={7}>
                                            <div className={styles.cardCntnt}>
                                                <h5 className={`${styles.blogCategory} mt-3 mt-lg-0`}>
                                                    SEO
                                                </h5>
                                                <a href="#">
                                                    <h5 className={styles.blogTitle}>
                                                        Approaches for Building Real-Time Machine Learning Systems
                                                    </h5>
                                                </a>
                                                <p className={styles.blogDesciption}>
                                                    Selecting the right search engine optimization company is essential.
                                                </p>
                                                <h4 className={styles.detailDate}>
                                                    <span className="pe-1"><i>Barry Schwartz</i></span>
                                                    <span>|</span>
                                                    <span className="ps-1">May 23, 2023 at 9:32 pm ET</span>
                                                </h4>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <Col lg={3}>
                                <div className={`${styles.cta} mt-5 mt-lg-0`}>
                                    <div className={styles.ctaImg}>
                                        <a href="#" className={`${styles.blogBtns} ${styles.ctaBtn} mt-5`}>
                                            get custom web designs
                                        </a>
                                    </div>
                                </div>

                                <div className={`${styles.platform} mt-5`}>
                                    <h5 className={styles.subTitle}>
                                        Endorsements on different Platforms
                                    </h5>
                                    <h5 className={styles.title}>
                                        Awards And Recognition
                                    </h5>
                                    <p className={styles.para}>
                                        Thriving on accelerating the path to disruption and value creation in all directions has enabled
                                        us to receive acknowledgment and recognition by leading ratings and review platforms.
                                    </p>
                                    <a href="#" className={`${styles.arrowBtn} mt-3`}>
                                        <span>View Reviews</span>
                                        <img src={arrow} alt="bitswits" />
                                    </a>
                                </div>

                                <div className={`${styles.newsLetter} mt-5`}>
                                    <h4>Signup for</h4>
                                    <h5>Newsletter</h5>
                                    <form className="mt-4">
                                        <div>
                                            <input type="text" name="name" id="name" placeholder="FULL NAME" />
                                        </div>
                                        <div className="mt-3">
                                            <input type="email" name="email" id="email" placeholder="EMAIL ADDRESS" />
                                        </div>
                                        <button type="submit" className="arrowBtn mt-4">
                                            <span>Submit Details</span>
                                            <img src={arrow} alt="bitswits" />
                                        </button>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default BlogListBody
