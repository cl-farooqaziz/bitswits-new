import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/OurProject.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
//images
import health from '../public/images/digital/health.png'
import fintech from '../public/images/digital/fintech.png'
import realState from '../public/images/digital/real-state.png'
import eCommerce from '../public/images/digital/ecommerce.png'
import fitness from '../public/images/digital/fitness.png'
import restaurant from '../public/images/digital/resturant.png'
import travel from '../public/images/digital/travel.png'
import sports from '../public/images/digital/sports.png'
import social from '../public/images/digital/social.png'
import business from '../public/images/digital/business.png'
import education from '../public/images/digital/education.png'
import entertanmnt from '../public/images/digital/entertnment.png'
import logistic from '../public/images/digital/logistic.png'


const Digital = () => {

    var projectslider = {
        dots: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '90px',
        variableWidth: false,
    };

    var ourproject1 = {
        dots: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <>
            <section className={styles.ourProject}>
                <Container>
                    <Row className={styles.project}>
                        <Col lg={3}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace white mb-0'>Solutions</h5>
                        </Col>
                        <Col lg={6}>
                            <h2 className='font50 black fontf font-bold line60 white mb-0'>
                                Digital Product Solutions For Different Industries
                            </h2>
                        </Col>
                        <Col lg={3}>
                            <Link className={`${styles.bttns1} mt-3 mt-lg-0 mb-4 mb-lg-0`} href="#">
                                Connect Now!
                            </Link>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.line}></div>
                            <Slider {...projectslider} className={`${styles.newproject} ${styles.solutn} solutn newproject`}>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Healthcare</h3>
                                                <ul className={styles.slidLst}>
                                                    <li>Telemedicine Solution</li>
                                                    <li>Electronic Health Records (EHR)</li>
                                                    <li>Practice Management Systems</li>
                                                    <li>Clinical Software Solutions</li>
                                                    <li>Medical Device Integrations Solutions</li>
                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        BOOK A CALL
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image className='img-fluid'
                                                    src={health}
                                                    alt="bitswits"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Fintech</h3>
                                                <ul className={styles.slidLst}>
                                                    <li>Digital Payment Systems</li>
                                                    <li>Custom Digital Banking Solutions</li>
                                                    <li>Wealth/Finance Management Solutions</li>
                                                    <li>Mobile Payment App Development</li>
                                                    <li>Insurance App Development</li>
                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        BOOK A CALL
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image className='img-fluid'
                                                    src={fintech}
                                                    alt="bitswits"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Real Estate</h3>
                                                <ul className={styles.slidLst}>
                                                    <li>MLS Solutions for Real Estate</li>
                                                    <li>Virtual Property Tours</li>
                                                    <li>Property Valuation Tools</li>
                                                    <li>Real Estate Investment Platforms</li>
                                                    <li>Property Management Solutions</li>
                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        BOOK A CALL
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image className='img-fluid'
                                                    src={realState}
                                                    alt="bitswits"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>E-Commerce</h3>
                                                <ul className={styles.slidLst}>
                                                    <li>Custom eCommerce Store Development</li>
                                                    <li>Shipping and fulfillment Solution</li>
                                                    <li>Grocery E-Commerce Apps</li>
                                                    <li>End to End MarketPlace</li>
                                                    <li>AR-based eCommerce solutions</li>
                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        BOOK A CALL
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image className='img-fluid'
                                                    src={eCommerce}
                                                    alt="bitswits"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Fitness</h3>
                                                <ul className={styles.slidLst}>
                                                    <li>Online Workout Coach Apps</li>
                                                    <li>Fitness Tracker (with wearable integration)</li>
                                                    <li>Gym Management Solutions</li>
                                                    <li>Online Fitness Supplement Store Development</li>
                                                    <li>Wellness Apps</li>
                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        BOOK A CALL
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image className='img-fluid'
                                                    src={fitness}
                                                    alt="bitswits"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Restaurant</h3>
                                                <ul className={styles.slidLst}>
                                                    <li>Food Delivery App Development</li>
                                                    <li>Cloud Kitchen Delivery Solutions</li>
                                                    <li>Grocery Delivery Solutions</li>
                                                    <li>Direct delivery Solutions</li>
                                                    <li>Restaurant PoS Software Development</li>
                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        BOOK A CALL
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image className='img-fluid'
                                                    src={restaurant}
                                                    alt="bitswits"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Travel</h3>
                                                <ul className={styles.slidLst}>
                                                    <li>Travel Planning Solution</li>
                                                    <li>Itinerary Management Platform</li>
                                                    <li>Ticket & Hotel Booking Solutions</li>
                                                    <li>Travel Loyalty & Rewards Solutions</li>
                                                    <li>Car Booking Solutions</li>
                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        BOOK A CALL
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image className='img-fluid'
                                                    src={travel}
                                                    alt="bitswits"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Sports</h3>
                                                <ul className={styles.slidLst}>
                                                    <li>Sports Training and Coaching Apps</li>
                                                    <li>Sports Live Streaming Solutions</li>
                                                    <li>Fantasy Sports Games Development</li>
                                                    <li>Sports Betting Platforms</li>
                                                    <li>AR/VR-based Game Development</li>
                                                    <li>Facilities Management Solutions</li>
                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        BOOK A CALL
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image className='img-fluid'
                                                    src={sports}
                                                    alt="bitswits"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Social Networking</h3>
                                                <ul className={styles.slidLst}>
                                                    <li>Community App Development</li>
                                                    <li>Dating & Matrimony App Development</li>
                                                    <li>Social Networking App Development</li>
                                                    <li>Messaging App Development</li>
                                                    <li>Media Sharing App Development</li>
                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        BOOK A CALL
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image className='img-fluid'
                                                    src={social}
                                                    alt="bitswits"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Business</h3>
                                                <ul className={styles.slidLst}>
                                                    <li>Sales & Marketing (CRMS)</li>
                                                    <li>Employee Management (HRMS)</li>
                                                    <li>HR Portals (Recruitment Platforms)</li>
                                                    <li>Cloud Solutions</li>
                                                    <li>Business Process Automation Solutions</li>
                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        BOOK A CALL
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image className='img-fluid'
                                                    src={business}
                                                    alt="bitswits"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Education</h3>
                                                <ul className={styles.slidLst}>
                                                    <li>Education App Development</li>
                                                    <li>E2C eLearning App Development</li>
                                                    <li>Virtual Classrooms & Video Conferencing</li>
                                                    <li>Learning Management System (LMS)</li>
                                                    <li>Online Exam Management System</li>
                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        BOOK A CALL
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image className='img-fluid'
                                                    src={education}
                                                    alt="bitswits"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Entertainment</h3>
                                                <ul className={styles.slidLst}>
                                                    <li>Video Streaming Solutions</li>
                                                    <li>Storyboarding and Collaboration Solutions</li>
                                                    <li>Live Event Ticketing Platforms</li>
                                                    <li>ML Solution for Large Data</li>
                                                    <li>VFX Solutions</li>
                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        BOOK A CALL
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image className='img-fluid'
                                                    src={entertanmnt}
                                                    alt="bitswits"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Logistics</h3>
                                                <ul className={styles.slidLst}>
                                                    <li>Delivery Management</li>
                                                    <li>Shipping Logistics Management</li>
                                                    <li>Fleet Management Software</li>
                                                    <li>Inventory Management Software</li>
                                                    <li>Telematics Software Development</li>
                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        BOOK A CALL
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image className='img-fluid'
                                                    src={logistic}
                                                    alt="bitswits"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Slider>
                        </Col>
                    </Row>

                    {/*============= mobile slider ==============*/}

                    <Slider {...ourproject1} className='sidenewlong slution mt-5'>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Healthcare</h3>
                                        <ul className={styles.slidLst}>
                                            <li>Telemedicine Solution</li>
                                            <li>Electronic Health Records (EHR)</li>
                                            <li>Practice Management Systems</li>
                                            <li>Clinical Software Solutions</li>
                                            <li>Medical Device Integrations Solutions</li>
                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                BOOK A CALL
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image className='img-fluid'
                                            src={health}
                                            alt="bitswits"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Fintech</h3>
                                        <ul className={styles.slidLst}>
                                            <li>Digital Payment Systems</li>
                                            <li>Custom Digital Banking Solutions</li>
                                            <li>Wealth/Finance Management Solutions</li>
                                            <li>Mobile Payment App Development</li>
                                            <li>Insurance App Development</li>
                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                BOOK A CALL
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image className='img-fluid'
                                            src={fintech}
                                            alt="bitswits"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Real Estate</h3>
                                        <ul className={styles.slidLst}>
                                            <li>MLS Solutions for Real Estate</li>
                                            <li>Virtual Property Tours</li>
                                            <li>Property Valuation Tools</li>
                                            <li>Real Estate Investment Platforms</li>
                                            <li>Property Management Solutions</li>
                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                BOOK A CALL
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image className='img-fluid'
                                            src={realState}
                                            alt="bitswits"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>E-Commerce</h3>
                                        <ul className={styles.slidLst}>
                                            <li>Custom eCommerce Store Development</li>
                                            <li>Shipping and fulfillment Solution</li>
                                            <li>Grocery E-Commerce Apps</li>
                                            <li>End to End MarketPlace</li>
                                            <li>AR-based eCommerce solutions</li>
                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                BOOK A CALL
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image className='img-fluid'
                                            src={eCommerce}
                                            alt="bitswits"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Fitness</h3>
                                        <ul className={styles.slidLst}>
                                            <li>Online Workout Coach Apps</li>
                                            <li>Fitness Tracker (with wearable integration)</li>
                                            <li>Gym Management Solutions</li>
                                            <li>Online Fitness Supplement Store Development</li>
                                            <li>Wellness Apps</li>
                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                BOOK A CALL
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image className='img-fluid'
                                            src={fitness}
                                            alt="bitswits"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Restaurant</h3>
                                        <ul className={styles.slidLst}>
                                            <li>Food Delivery App Development</li>
                                            <li>Cloud Kitchen Delivery Solutions</li>
                                            <li>Grocery Delivery Solutions</li>
                                            <li>Direct delivery Solutions</li>
                                            <li>Restaurant PoS Software Development</li>
                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                BOOK A CALL
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image className='img-fluid'
                                            src={restaurant}
                                            alt="bitswits"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Travel</h3>
                                        <ul className={styles.slidLst}>
                                            <li>Travel Planning Solution</li>
                                            <li>Itinerary Management Platform</li>
                                            <li>Ticket & Hotel Booking Solutions</li>
                                            <li>Travel Loyalty & Rewards Solutions</li>
                                            <li>Car Booking Solutions</li>
                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                BOOK A CALL
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image className='img-fluid'
                                            src={travel}
                                            alt="bitswits"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Sports</h3>
                                        <ul className={styles.slidLst}>
                                            <li>Sports Training and Coaching Apps</li>
                                            <li>Sports Live Streaming Solutions</li>
                                            <li>Fantasy Sports Games Development</li>
                                            <li>Sports Betting Platforms</li>
                                            <li>AR/VR-based Game Development</li>
                                            <li>Facilities Management Solutions</li>
                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                BOOK A CALL
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image className='img-fluid'
                                            src={sports}
                                            alt="bitswits"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Social Networking</h3>
                                        <ul className={styles.slidLst}>
                                            <li>Community App Development</li>
                                            <li>Dating & Matrimony App Development</li>
                                            <li>Social Networking App Development</li>
                                            <li>Messaging App Development</li>
                                            <li>Media Sharing App Development</li>
                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                BOOK A CALL
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image className='img-fluid'
                                            src={social}
                                            alt="bitswits"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Business</h3>
                                        <ul className={styles.slidLst}>
                                            <li>Sales & Marketing (CRMS)</li>
                                            <li>Employee Management (HRMS)</li>
                                            <li>HR Portals (Recruitment Platforms)</li>
                                            <li>Cloud Solutions</li>
                                            <li>Business Process Automation Solutions</li>
                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                BOOK A CALL
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image className='img-fluid'
                                            src={business}
                                            alt="bitswits"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Education</h3>
                                        <ul className={styles.slidLst}>
                                            <li>Education App Development</li>
                                            <li>E2C eLearning App Development</li>
                                            <li>Virtual Classrooms & Video Conferencing</li>
                                            <li>Learning Management System (LMS)</li>
                                            <li>Online Exam Management System</li>
                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                BOOK A CALL
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image className='img-fluid'
                                            src={education}
                                            alt="bitswits"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Entertainment</h3>
                                        <ul className={styles.slidLst}>
                                            <li>Video Streaming Solutions</li>
                                            <li>Storyboarding and Collaboration Solutions</li>
                                            <li>Live Event Ticketing Platforms</li>
                                            <li>ML Solution for Large Data</li>
                                            <li>VFX Solutions</li>
                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                BOOK A CALL
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image className='img-fluid'
                                            src={entertanmnt}
                                            alt="bitswits"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Logistics</h3>
                                        <ul className={styles.slidLst}>
                                            <li>Delivery Management</li>
                                            <li>Shipping Logistics Management</li>
                                            <li>Fleet Management Software</li>
                                            <li>Inventory Management Software</li>
                                            <li>Telematics Software Development</li>
                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                BOOK A CALL
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image className='img-fluid'
                                            src={logistic}
                                            alt="bitswits"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </section>
        </>
    )
}

export default Digital
