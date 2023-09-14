import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/blockchain/WhychooseUs.module.css';
import Image from 'next/image';
import Link from 'next/link';
// import posters from '@/public/blockchain/images/poster.png';
import phone from '@/public/blockchain/images/phone.png';
import icon1 from '@/public/blockchain/images/why/icon-1.png';
import icon2 from '@/public/blockchain/images/why/icon-2.png';
import icon3 from '@/public/blockchain/images/why/icon-3.png';
import icon4 from '@/public/blockchain/images/why/icon-4.png';
import icon5 from '@/public/blockchain/images/why/icon-5.png';
import icon6 from '@/public/blockchain/images/why/icon-6.png';
import icon7 from '@/public/blockchain/images/why/icon-7.png';
import icon8 from '@/public/blockchain/images/why/icon-8.png';
import icon9 from '@/public/blockchain/images/why/icon-9.png';
import Slider from "react-slick";

const WhyChooseUs = (props) => {

    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <>
            <section className='py-0 py-md-0'>
                <Container>
                    <Row className='justify-content-center align-items-center '>
                        <Col lg={6} className='border-top border-bottom pt-5 pb-5 pe-5'>
                            <h2 className="text-white f40 fw700 mb-2">{props.whyTitle}</h2>
                            <h4 className="fw400 f24 text-white mb-2">{props.whySubTitle} </h4>
                            <p className='f14 text-white'> {props.whyPara}</p>
                        </Col>
                        <Col lg={6}>
                            <div className='d-none d-lg-block'>
                                <Row className='justify-content-center align-items-center'>

                                    <Col lg={4} className={`${style.br1} ${style.bb1} position-relative`}>
                                        <div className={`${style.feature}`}>
                                            <div className={`${style.gap2} justify-content-left align-items-center`}>
                                                <Image src={icon1} alt="Blockchain" className='img-fluid' />
                                                <p className='text-white'>Core blockchain developers</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} className={`${style.br1} ${style.bb1} position-relative`}>
                                        <div className={style.feature}>
                                            <div className={`${style.gap2} justify-content-left align-items-center`}>
                                                <Image src={icon2} alt="Blockchain" className='img-fluid' />
                                                <p className='text-white'>Agile development process</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} className={`${style.bb1} position-relative`}>
                                        <div className={style.feature}>
                                            <div className={`${style.gap2} justify-content-left align-items-center`}>
                                                <Image src={icon3} alt="Blockchain" className='img-fluid' />
                                                <p className='text-white'>Customer-centric App </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} className={`${style.br1} ${style.bb1} position-relative`}>
                                        <div className={style.feature}>
                                            <div className={`${style.gap2} justify-content-left align-items-center`}>
                                                <Image src={icon4} alt="Blockchain" className='img-fluid' />
                                                <p className='text-white'>Business focused approach</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} className={`${style.br1} ${style.bb1} position-relative`}>
                                        <div className={style.feature}>
                                            <div className={`${style.gap2} justify-content-left align-items-center`}>
                                                <Image src={icon5} alt="Blockchain" className='img-fluid' />
                                                <p className='text-white f14'>Dynamic engagement model</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} className={`${style.bb1} position-relative`}>
                                        <div className={style.feature}>
                                            <div className={`${style.gap2} justify-content-left align-items-center`}>
                                                <Image src={icon6} alt="Blockchain" className='img-fluid' />
                                                <p className='text-white f14'>Cost-effective services</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} className={`${style.br1} position-relative`}>
                                        <div className={style.feature}>
                                            <div className={`${style.gap2} justify-content-left align-items-center`}>
                                                <Image src={icon7} alt="Blockchain" className='img-fluid' />
                                                <p className='text-white f14'>Cost-effective services</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} className={`${style.br1} position-relative`}>
                                        <div className={style.feature}>
                                            <div className={`${style.gap2} justify-content-left align-items-center`}>
                                                <Image src={icon8} alt="Blockchain" className='img-fluid' />
                                                <p className='text-white f14'>On-time project delivery</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} className={`position-relative`}>
                                        <div className={style.feature}>
                                            <div className={`${style.gap2} justify-content-left align-items-center`}>
                                                <Image src={icon9} alt="Blockchain" className='img-fluid' />
                                                <p className='text-white f14'>24*7 technical support</p>
                                            </div>
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                            <div className='d-block d-lg-none'>
                                <Row className='justify-content-center align-items-center text-center'>
                                    <Slider {...settings}>
                                        <Col lg={4} className={`${style.br1} ${style.bb1} position-relative text-center`}>
                                            <div className={`${style.feature}`}>
                                                <div className={`${style.gap2} justify-content-center align-items-center mx-auto`}>
                                                    <Image src={icon1} alt="Blockchain" className='img-fluid mx-auto' />
                                                    <p className='text-white'>Core blockchain developers</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4} className={`${style.br1} ${style.bb1} position-relative  text-center`}>
                                            <div className={style.feature}>
                                                <div className={`${style.gap2} justify-content-left align-items-center`}>
                                                    <Image src={icon2} alt="Blockchain" className='img-fluid mx-auto' />
                                                    <p className='text-white'>Agile development process</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4} className={`${style.bb1} position-relative`}>
                                            <div className={style.feature}>
                                                <div className={`${style.gap2} justify-content-left align-items-center`}>
                                                    <Image src={icon3} alt="Blockchain" className='img-fluid mx-auto' />
                                                    <p className='text-white'>Customer-centric App </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4} className={`${style.br1} ${style.bb1} position-relative`}>
                                            <div className={style.feature}>
                                                <div className={`${style.gap2} justify-content-left align-items-center`}>
                                                    <Image src={icon4} alt="Blockchain" className='img-fluid mx-auto' />
                                                    <p className='text-white'>Business focused approach</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4} className={`${style.br1} ${style.bb1} position-relative`}>
                                            <div className={style.feature}>
                                                <div className={`${style.gap2} justify-content-left align-items-center`}>
                                                    <Image src={icon5} alt="Blockchain" className='img-fluid mx-auto' />
                                                    <p className='text-white f14'>Dynamic engagement model</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4} className={`${style.bb1} position-relative`}>
                                            <div className={style.feature}>
                                                <div className={`${style.gap2} justify-content-left align-items-center`}>
                                                    <Image src={icon6} alt="Blockchain" className='img-fluid mx-auto' />
                                                    <p className='text-white f14'>Cost-effective services</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4} className={`${style.br1} position-relative`}>
                                            <div className={style.feature}>
                                                <div className={`${style.gap2} justify-content-left align-items-center`}>
                                                    <Image src={icon7} alt="Blockchain" className='img-fluid mx-auto' />
                                                    <p className='text-white f14'>Cost-effective services</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4} className={`${style.br1} position-relative`}>
                                            <div className={style.feature}>
                                                <div className={`${style.gap2} justify-content-left align-items-center`}>
                                                    <Image src={icon8} alt="Blockchain" className='img-fluid mx-auto' />
                                                    <p className='text-white f14'>On-time project delivery</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4} className={`position-relative`}>
                                            <div className={style.feature}>
                                                <div className={`${style.gap2} justify-content-left align-items-center`}>
                                                    <Image src={icon9} alt="Blockchain" className='img-fluid mx-auto' />
                                                    <p className='text-white f14'>24*7 technical support</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Slider>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default WhyChooseUs