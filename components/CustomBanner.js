import React from 'react'
import styles from "@/styles/HybridBanner.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
//
import BannerImage from "@/public/custommobiledevelopment/banner_image.png"
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
import NewAddress from './NewAddress';



const CustomBanner = () => {

    var awardslogo = {
        dots: false,
        arrows: false,
        autoplay: true,
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
                            <p className='text-center text-white f-16 font-bold mb-0'>Bitswits Is Your One-Stop Shop For</p>
                            <h3 className={`${styles.develop} text-center f-50 font-bold mb-1`}>
                                <span className='d-block'>Custom Mobile Application </span>
                                <span className='d-block'>Development for Business</span>
                            </h3>
                            <p className={`${styles.just} text-center f-13 font-medium mb-4 mb-lg-0`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived </p>

                            <div className={styles.pont}>
                                <Link className={styles.book} href="#">Book A Call</Link>
                                <Link className={styles.about} href="#">Live Chat</Link>
                            </div>

                            <div className={styles.secImage}>
                                <Image quality={75} src={BannerImage} className={`img-fluid`} />
                            </div>

                        </Col>
                    </Row>
                </Container>
                <div className={`${styles.bannerform} blkgrdiant pt-4 pt-lg-5 pb-lg-3 pb-4`}>
                    <Container>
                        <Row className='align-items-center'>
                            <Col lg={7}>
                                <div className={styles.make}>
                                    <form className={styles.formsbanner}>
                                        <Row>
                                            <Col lg={6}>
                                                <div>
                                                    <input type='text' className={styles.forminput} placeholder='Your Name' />
                                                    <input type='email' className={`${styles.forminput} d-block d-lg-none`} placeholder='Email Address' />
                                                    <input type='number' className={styles.forminput} placeholder='Phone Number' />
                                                    <textarea className={`${styles.formarea} d-block d-lg-none`} placeholder='How can we help you?' ></textarea>
                                                    <div className={`${styles.take} d-flex mt-2`}>
                                                        <p className='font12 font-semibold fontf m-0'>We take your privacy seriously. <br /> Read our <span>Privacy Notes.</span></p>
                                                        <input type='Submit' className={styles.notice} />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6} className='d-none d-lg-block'>
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
                                <NewAddress />
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div>
                    <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-5`}>

                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon20} className="img-fluid w-50" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon30} className="img-fluid w-50" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon40} className="img-fluid w-50" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon50} className="img-fluid w-50" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon60} className="img-fluid w-50" />
                        </div>
                        <div className={`${styles.strpImg} ${styles.minImg}`}>
                            <Image alt="bitswits" src={icon70} className="img-fluid w-25" />
                        </div>
                        <div className={styles.strpImg}>
                            <Image alt="bitswits" src={icon80} className="img-fluid w-25" />
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default CustomBanner