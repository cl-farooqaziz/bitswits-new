import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/OurProject.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
//images
import slideImg1 from '../public/images/workprojects/slideimg1.svg'
import slideImg2 from '../public/images/workprojects/slideimg2.svg'
import slideImg3 from '../public/images/workprojects/slideimg3.svg'
import slideImg4 from '../public/images/workprojects/slideimg4.svg'
import slideImg from '../public/images/workprojects/slideimg.png'
import slidebefore from '../public/images/workprojects/slidebefore.png'


const OurProject = () => {

    var ourproject = {

        infinite: false,
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        speed: 1000,
        variableWidth: false,
        cssEase: "cubic-bezier(0.47, 0, 0.745, 0.715)",
    };


    var ourproject1 = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
     

    };

    return (
        <>
            <section className={styles.ourProject}>
                <Container>
                    <Row className={styles.project}>
                        <Col lg={3}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace white mb-0'>Capabilities</h5>
                        </Col>
                        <Col lg={6}>
                            <h4 className='font50 black fontf font-bold line60 white mb-0'>
                                <span className='grdiant'>How We Work</span> <br />
                                On Projects
                            </h4>
                        </Col>
                        <Col lg={3}>
                            <Link className={`${styles.bttns1} bttns1 mt-3 mt-lg-0 mb-4 mb-lg-0`} href="#">
                                Connect Now!
                            </Link>
                        </Col>
                    
                    </Row>


                    <Slider {...ourproject} className='sidenew mt-5'>

                        <div className='d-flex'>
                            <div className={styles.slideCntnt}>
                                <h3 className='font20 fontf font-semibold white'>Discovery</h3>
                                <p className='font15 fontf white'>We will begin every project with a discovery phase to determine the actual problem to solve. Because "a problem well defined is a problem half solved."</p>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Determine UX challenges & goals</p>
                                </div>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Conduct user research & interviews</p>
                                </div>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Analyze data for targeted UX solutions</p>
                                </div>
                                <div className='mt-3 mb-3 mb-lg-0'>
                                    <Link href="#" className='grdiant'>
                                        BOOK A CALL
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.slideImg}>
                                <Image className='img-fluid'
                                    src={slideImg1}
                                    alt="bitswits"
                                />
                            </div>

                        </div>
                        <div className='d-flex'>
                            <div className={styles.slideCntnt}>
                                <h3 className='font20 fontf font-semibold white'>Discovery</h3>
                                <p className='font15 fontf white'>We will begin every project with a discovery phase to determine the actual problem to solve. Because "a problem well defined is a problem half solved."</p>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Determine UX challenges & goals</p>
                                </div>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Conduct user research & interviews</p>
                                </div>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Analyze data for targeted UX solutions</p>
                                </div>
                                <div className='mt-3 mb-3 mb-lg-0'>
                                    <Link href="#" className='grdiant'>
                                        BOOK A CALL
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.slideImg}>
                                <Image className='img-fluid'
                                    src={slideImg2}
                                    alt="bitswits"
                                />
                            </div>

                        </div>

                        <div className='d-flex'>
                            <div className={styles.slideCntnt}>
                                <h3 className='font20 fontf font-semibold white'>Discovery</h3>
                                <p className='font15 fontf white'>We will begin every project with a discovery phase to determine the actual problem to solve. Because "a problem well defined is a problem half solved."</p>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Determine UX challenges & goals</p>
                                </div>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Conduct user research & interviews</p>
                                </div>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Analyze data for targeted UX solutions</p>
                                </div>
                                <div className='mt-3 mb-3 mb-lg-0'>
                                    <Link href="#" className='grdiant'>
                                        BOOK A CALL
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.slideImg}>
                                <Image className='img-fluid'
                                    src={slideImg3}
                                    alt="bitswits"
                                />
                            </div>

                        </div>
                        <div className='d-flex'>
                            <div className={styles.slideCntnt}>
                                <h3 className='font20 fontf font-semibold white'>Discovery</h3>
                                <p className='font15 fontf white'>We will begin every project with a discovery phase to determine the actual problem to solve. Because "a problem well defined is a problem half solved."</p>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Determine UX challenges & goals</p>
                                </div>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Conduct user research & interviews</p>
                                </div>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Analyze data for targeted UX solutions</p>
                                </div>
                                <div className='mt-3 mb-3 mb-lg-0'>
                                    <Link href="#" className='grdiant'>
                                        BOOK A CALL
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.slideImg}>
                                <Image className='img-fluid'
                                    src={slideImg4}
                                    alt="bitswits"
                                />
                            </div>

                        </div>
                        <div className='d-flex'>
                            <div className={styles.slideCntnt}>
                                <h3 className='font20 fontf font-semibold white'>Discovery</h3>
                                <p className='font15 fontf white'>We will begin every project with a discovery phase to determine the actual problem to solve. Because "a problem well defined is a problem half solved."</p>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Determine UX challenges & goals</p>
                                </div>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Conduct user research & interviews</p>
                                </div>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Analyze data for targeted UX solutions</p>
                                </div>
                                <div className='mt-3 mb-3 mb-lg-0'>
                                    <Link href="#" className='grdiant'>
                                        BOOK A CALL
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.slideImg}>
                                <Image className='img-fluid'
                                    src={slideImg4}
                                    alt="bitswits"
                                />
                            </div>

                        </div>

                    </Slider>



{/* mobile slider */}

                    <Slider {...ourproject1} className='sidenewlong mt-5'>

                        <div className='d-flex1'>
                            <div className={styles.slideCntnt}>
                                <h3 className='font20 fontf font-semibold white'>Discovery</h3>
                                <p className='font15 fontf white'>We will begin every project with a discovery phase to determine the actual problem to solve. Because "a problem well defined is a problem half solved."</p>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Determine UX challenges & goals</p>
                                </div>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Conduct user research & interviews</p>
                                </div>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Analyze data for targeted UX solutions</p>
                                </div>
                                <div className='mt-3 mb-3 mb-lg-0'>
                                    <Link href="#" className='grdiant'>
                                        BOOK A CALL
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.slideImg}>
                                <Image className='img-fluid'
                                    src={slideImg1}
                                    alt="bitswits"
                                />
                            </div>

                        </div>
                        <div className='d-flex1'>
                            <div className={styles.slideCntnt}>
                                <h3 className='font20 fontf font-semibold white'>Discovery</h3>
                                <p className='font15 fontf white'>We will begin every project with a discovery phase to determine the actual problem to solve. Because "a problem well defined is a problem half solved."</p>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Determine UX challenges & goals</p>
                                </div>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Conduct user research & interviews</p>
                                </div>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Analyze data for targeted UX solutions</p>
                                </div>
                                <div className='mt-3 mb-3 mb-lg-0'>
                                    <Link href="#" className='grdiant'>
                                        BOOK A CALL
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.slideImg}>
                                <Image className='img-fluid'
                                    src={slideImg2}
                                    alt="bitswits"
                                />
                            </div>

                        </div>

                        <div className='d-flex1'>
                            <div className={styles.slideCntnt}>
                                <h3 className='font20 fontf font-semibold white'>Discovery</h3>
                                <p className='font15 fontf white'>We will begin every project with a discovery phase to determine the actual problem to solve. Because "a problem well defined is a problem half solved."</p>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Determine UX challenges & goals</p>
                                </div>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Conduct user research & interviews</p>
                                </div>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Analyze data for targeted UX solutions</p>
                                </div>
                                <div className='mt-3 mb-3 mb-lg-0'>
                                    <Link href="#" className='grdiant'>
                                        BOOK A CALL
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.slideImg}>
                                <Image className='img-fluid'
                                    src={slideImg3}
                                    alt="bitswits"
                                />
                            </div>

                        </div>
                        <div className='d-flex1'>
                            <div className={styles.slideCntnt}>
                                <h3 className='font20 fontf font-semibold white'>Discovery</h3>
                                <p className='font15 fontf white'>We will begin every project with a discovery phase to determine the actual problem to solve. Because "a problem well defined is a problem half solved."</p>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Determine UX challenges & goals</p>
                                </div>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Conduct user research & interviews</p>
                                </div>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Analyze data for targeted UX solutions</p>
                                </div>
                                <div className='mt-3 mb-3 mb-lg-0'>
                                    <Link href="#" className='grdiant'>
                                        BOOK A CALL
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.slideImg}>
                                <Image className='img-fluid'
                                    src={slideImg4}
                                    alt="bitswits"
                                />
                            </div>

                        </div>
                        <div className='d-flex'>
                            <div className={styles.slideCntnt}>
                                <h3 className='font20 fontf font-semibold white'>Discovery</h3>
                                <p className='font15 fontf white'>We will begin every project with a discovery phase to determine the actual problem to solve. Because "a problem well defined is a problem half solved."</p>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Determine UX challenges & goals</p>
                                </div>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Conduct user research & interviews</p>
                                </div>
                                <div className={styles.slideList}>
                                    <Image className='img-fluid'
                                        src={slidebefore}
                                        alt="bitswits"
                                    />
                                    <p className='font12 fontf white mb-0'>Analyze data for targeted UX solutions</p>
                                </div>
                                <div className='mt-3 mb-3 mb-lg-0'>
                                    <Link href="#" className='grdiant'>
                                        BOOK A CALL
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.slideImg}>
                                <Image className='img-fluid'
                                    src={slideImg4}
                                    alt="bitswits"
                                />
                            </div>

                        </div>

                    </Slider>


                </Container>
            </section>
        </>
    )
}

export default OurProject