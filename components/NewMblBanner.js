import React from 'react'
import styles from "@/styles/NewMblBanner.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
//
import BannerImage from "@/public/newMobilePageImages/banner_image.png"
import icon11 from '../public/newMobilePageImages/city1.png'
import icon12 from '../public/newMobilePageImages/city2.png'
import icon13 from '../public/newMobilePageImages/city4.png'
import icon14 from '../public/newMobilePageImages/city3.png'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import icon20 from '../public/newHomePageImages/nexticon/1.png'
import icon30 from '../public/newHomePageImages/nexticon/2.png'
import icon40 from '../public/newHomePageImages/nexticon/3.png'
import icon50 from '../public/newHomePageImages/nexticon/5.png'
import icon60 from '../public/newHomePageImages/nexticon/6.png'
import icon70 from '../public/newHomePageImages/nexticon/7.png'
import icon80 from '../public/newHomePageImages/nexticon/8.png'



const NewHomeBanner = () => {

    var awardslogo = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 0,
        speed: 5000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row>
                        <Col xl={12}>
                            <p modern digital factory className={`${styles.just} text-center f-20 font-bold mb-0`}>A Top</p>
                            <h3 className={`${styles.develop} text-center f-50 font-bold mb-2`}>
                                <span className='grdiant d-block'>MOBILE APP DEVELOPMENT</span>
                                <span className='d-block'>Company At Your Service</span>
                            </h3>
                            <p className={`${styles.just} text-center f-14 mb-0`}>We deliver great results, on time and on budget. Contact usto start talking about your project today!</p>

                            <div className={styles.pont}>
                                <Link className={styles.book} href="#">Book A Call</Link>
                                <Link className={styles.about} href="#">Live Chat</Link>
                            </div>

                            <div className={styles.secImage}>
                                <Image src={BannerImage} className={`img-fluid`} />
                            </div>

                        </Col>
                    </Row>
                </Container>
                <div className={`${styles.bannerform} blkgrdiant py-5`}>
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div className={styles.make}>
                                    <form className={styles.formsbanner}>
                                        <Row>
                                            <Col lg={6}>
                                                <div>
                                                    <input type='text' className={styles.forminput} placeholder='Your Name' />
                                                    <input type='number' className={styles.forminput} placeholder='Phone Number' />
                                                    <div className={`${styles.take} d-flex`}>
                                                        <p className='font12 font-semibold fontf m-0'>We take your privacy <br /> seriously. Read our <span>Privacy</span></p>
                                                        <input type='Submit' className={styles.notice} />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div>
                                                    <input type='email' className={styles.forminput} placeholder='Email Address' />
                                                    <textarea className={styles.formarea} placeholder='How can we help you?' ></textarea>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className={styles.read}>
                                    <div className={`${styles.free}`}>
                                        <p className='font16 texttran font-bold fontf'>
                                            Make an obligation-free enquiry
                                        </p>
                                    </div>
                                    <div className={styles.locations}>
                                        <div className={`${styles.locInner}`}>
                                            <div className={styles.locImg}>
                                                <Image alt="bitswits" src={icon11} className='img-fluid' />
                                            </div>
                                            <div className={styles.subInner}>
                                                <p className='font12 font-bold fontf mb-2'>Delaware</p>
                                                <Link href="tel:+1 833 500 6007" className='font12 font-regular fontf white texdocration'>
                                                    +1 833 500 6007
                                                </Link>
                                                <Link href="tel:+1 312 379 5987" className='font12 font-regular fontf white texdocration'>
                                                    +1 312 379 5987
                                                </Link>
                                            </div>
                                            <div className={`${styles.subInner} ms-3`}>
                                                <p className='font12 font-bold fontf mb-2'>California</p>
                                                <Link href="tel:+1 312 379 5987" className='font12 font-regular fontf white texdocration'>
                                                    +1 312 379 5987
                                                </Link>
                                                <Link href="tel:+1 833 500 6007" className='font12 font-regular fontf white texdocration'>
                                                    +1 833 500 6007
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={`${styles.locInner}`}>
                                            <div className={styles.locImg}>
                                                <Image alt="bitswits" src={icon12} className='img-fluid' />
                                            </div>
                                            <div className={styles.subInner}>
                                                <p className='font12 font-bold fontf mb-2'>Sharjah</p>
                                                <Link href="tel:+97 155 503 1266" className='font12 font-regular fontf white texdocration'>
                                                    +97 155 503 1266
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={`${styles.locInner}`}>
                                            <div className={styles.locImg}>
                                                <Image alt="bitswits" src={icon13} className='img-fluid' />
                                            </div>
                                            <div className={styles.subInner}>
                                                <p className='font12 font-bold fontf mb-2'>Karachi</p>
                                                <Link href="tel:+92 346 828 0101" className='font12 font-regular fontf white texdocration'>
                                                    +92 346 828 0101
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={`${styles.locInner}`}>
                                            <div className={styles.locImg}>
                                                <Image alt="bitswits" src={icon14} className='img-fluid' />
                                            </div>
                                            <div className={styles.subInner}>
                                                <p className='font12 font-bold fontf mb-2'>Malaysia</p>
                                                <Link href="tel:+1 833 500 6007" className='font12 font-regular fontf white texdocration'>
                                                    Labuan
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div>
                    <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-5`}>

                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon20} className="img-fluid" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon30} className="img-fluid" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon40} className="img-fluid" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon50} className="img-fluid" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon60} className="img-fluid" />
                        </div>
                        <div className={`${styles.strpImg} ${styles.minImg}`}>
                            <Image alt="bitswits" src={icon70} className="img-fluid" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon80} className="img-fluid" />
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default NewHomeBanner