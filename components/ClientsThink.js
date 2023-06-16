import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/ClientsThink.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
//images
import slideImg1 from '../public/images/clients/client1.png'
import slideImg2 from '../public/images/clients/client2.png'
import slideImg3 from '../public/images/clients/client3.png'
import slideImg4 from '../public/images/clients/client4.png'
import slidebefore from '../public/images/clients/stars.png'

function ClientsThink() {

    var clientsthink = {
        dots: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
    };

    var clientsthinkMbl = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <>
            <section className={styles.ourClients}>
                <Container>
                    <Row className={styles.clients}>
                        <Col lg={2}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace black mb-0'>Reviews</h5>
                        </Col>
                        <Col lg={7}>
                            <h4 className='font50 black fontf font-bold line60 mb-0'>
                            Feedback From  <br /> <span className='grdiant'>Our Valued Clients!</span> 
                              
                            </h4>
                        </Col>
                        <Col lg={3}>
                            <Link className={`${styles.bttns1} mt-3 mt-lg-0 mb-4 mb-lg-0`} href="#">
                                View All
                            </Link>
                        </Col>
                        <Col lg={12}>
                            <div className='mt-5'>
                                <Slider {...clientsthink} className={`${styles.clintSlider} clintSlider`}>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image className='img-fluid'
                                                        src={slideImg1}
                                                        alt="bitswits"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image className='img-fluid'
                                                            src={slidebefore}
                                                            alt="bitswits"
                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-1 mb-0`}>For me, BitsWits is the perfect app development company that focuses on delivering quality outcomes on time and at affordable prices. I have worked with this company for more than eight months now and they have gained my trust. From game developers and designers to whatnot, I believe each worker is well-trained and knows their work in terms of satisfying clients</p>
                                                        <h5 className='font16 font-semibold fontf black mt-3 mb-0'>
                                                        John Phil
                                                        </h5>
                                                        <p className='font14 fontf black mt-1 mb-0 pb-0'>Digital Marketing Consultant of Asia School of Business</p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>Asia School of Business (ASB)</span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2023</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>Web Design</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image className='img-fluid'
                                                        src={slideImg2}
                                                        alt="bitswits"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image className='img-fluid'
                                                            src={slidebefore}
                                                            alt="bitswits"
                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-3 mb-0`}>I am extremely delighted by the app development services provided by BitsWits. They assisted me in turning my idea into a fully functional and user-friendly mobile application. The team included experts and they knew how to captivate their customers through quality customer service. From guiding you through each process, this app development company will provide you with top-notch services. Stop waiting and call them now!</p>
                                                        <h5 className='font16 font-semibold fontf black mt-4 mb-0'>
                                                        Emma White
                                                        </h5>
                                                        <p className='font14 fontf black mt-1 mb-0 pb-0'>Digital Marketing Consultant of Asia School of Business</p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>Asia School of Business (ASB)</span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2023</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>Web Design</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image className='img-fluid'
                                                        src={slideImg3}
                                                        alt="bitswits"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image className='img-fluid'
                                                            src={slidebefore}
                                                            alt="bitswits"
                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-3 mb-0`}>I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.</p>
                                                        <h5 className='font16 font-semibold fontf black mt-4 mb-0'>
                                                            Vivien Francis
                                                        </h5>
                                                        <p className='font14 fontf black mt-1 mb-0 pb-0'>Digital Marketing Consultant of Asia School of Business</p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>Asia School of Business (ASB)</span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2023</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>Web Design</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image className='img-fluid'
                                                        src={slideImg4}
                                                        alt="bitswits"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image className='img-fluid'
                                                            src={slidebefore}
                                                            alt="bitswits"
                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-3 mb-0`}>I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.</p>
                                                        <h5 className='font16 font-semibold fontf black mt-4 mb-0'>
                                                            Vivien Francis
                                                        </h5>
                                                        <p className='font14 fontf black mt-1 mb-0 pb-0'>Digital Marketing Consultant of Asia School of Business</p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>Asia School of Business (ASB)</span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2023</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>Web Design</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*========== slider for mobile =========*/}

            <section className={styles.ourClientsMbl}>
                <Container>
                    <Row className={styles.clients}>
                        <Col lg={2}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace black mb-0'>Reviews</h5>
                        </Col>
                        <Col lg={7}>
                            <h4 className='font50 black fontf font-bold line60 mb-0'>
                                <span className='grdiant'>What Clients</span> <br />
                                Think About US
                            </h4>
                        </Col>
                        <Col lg={3}>
                            <Link className={`${styles.bttns1} mt-3 mt-lg-0 mb-4 mb-lg-0`} href="#">
                                View All
                            </Link>
                        </Col>
                        <Col lg={12}>
                            <div className='mt-5'>
                                <Slider {...clientsthinkMbl} className={`${styles.clintSlider} clintSlidermbl`}>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image className='img-fluid'
                                                        src={slideImg1}
                                                        alt="bitswits"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image className='img-fluid'
                                                            src={slidebefore}
                                                            alt="bitswits"
                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-2 mb-0`}>I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.</p>
                                                        <h5 className='font15 font-semibold fontf black mt-3 mb-0'>
                                                            Vivien Francis
                                                        </h5>
                                                        <p className='font12 fontf black mt-1 mb-0 pb-3'>Digital Marketing Consultant of Asia School of Business</p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>Asia School of Business (ASB)</span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2023</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>Web Design</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image className='img-fluid'
                                                        src={slideImg2}
                                                        alt="bitswits"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image className='img-fluid'
                                                            src={slidebefore}
                                                            alt="bitswits"
                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-2 mb-0`}>I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.</p>
                                                        <h5 className='font15 font-semibold fontf black mt-3 mb-0'>
                                                            Vivien Francis
                                                        </h5>
                                                        <p className='font12 fontf black mt-1 mb-0 pb-3'>Digital Marketing Consultant of Asia School of Business</p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>Asia School of Business (ASB)</span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2023</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>Web Design</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image className='img-fluid'
                                                        src={slideImg3}
                                                        alt="bitswits"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image className='img-fluid'
                                                            src={slidebefore}
                                                            alt="bitswits"
                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-2 mb-0`}>I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.</p>
                                                        <h5 className='font15 font-semibold fontf black mt-3 mb-0'>
                                                            Vivien Francis
                                                        </h5>
                                                        <p className='font12 fontf black mt-1 mb-0 pb-3'>Digital Marketing Consultant of Asia School of Business</p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>Asia School of Business (ASB)</span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2023</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>Web Design</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles.slideBox}>
                                        <Row className={styles.slideRow}>
                                            <Col lg={4} className='pe-lg-0'>
                                                <div className={styles.slideImg}>
                                                    <Image className='img-fluid'
                                                        src={slideImg4}
                                                        alt="bitswits"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={8} className='ps-lg-0'>
                                                <div className={styles.slideInner}>
                                                    <div className={styles.slideCntnt}>
                                                        <Image className='img-fluid'
                                                            src={slidebefore}
                                                            alt="bitswits"
                                                        />
                                                        <p className={` ${styles.hight} font13 fontf black mt-2 mb-0`}>I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.</p>
                                                        <h5 className='font15 font-semibold fontf black mt-3 mb-0'>
                                                            Vivien Francis
                                                        </h5>
                                                        <p className='font12 fontf black mt-1 mb-0 pb-3'>Digital Marketing Consultant of Asia School of Business</p>
                                                    </div>
                                                    <ul className={styles.sliderli}>
                                                        <li>
                                                            <span>Client</span>
                                                            <span className='font-bold fontf'>Asia School of Business (ASB)</span>
                                                        </li>
                                                        <li>
                                                            <span>Year</span>
                                                            <span className='font-bold fontf'>2023</span>
                                                        </li>
                                                        <li>
                                                            <span>Scope of work</span>
                                                            <span className='font-bold fontf'>Web Design</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ClientsThink