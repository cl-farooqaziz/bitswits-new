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
import slidebefore from '../public/images/workprojects/slidebefore.png'


const OurProject = () => {

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
                            <h5 className='font20 fontf font-semibold mt-1 letterspace white mb-0'>Capabilities</h5>
                        </Col>
                        <Col lg={6}>
                            <h4 className='font50 black fontf font-bold line60 white mb-0'>
                                <span className='grdiant'>How We Work</span> <br />
                                On Projects
                            </h4>
                        </Col>
                        <Col lg={3}>
                            <Link className={`${styles.bttns1} mt-3 mt-lg-0 mb-4 mb-lg-0`} href="#">
                                Connect Now!
                            </Link>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.line}></div>
                            <Slider {...projectslider} className={`${styles.newproject} newproject`}>
                                <div className={styles.slideBox}>
                                    <Row>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <div className={styles.slidBtns}>
                                                    <div className={styles.prjtBtns}>RESEARCH</div>
                                                    <div className={styles.prjtBtns}>ANALYTIC</div>
                                                </div>
                                                <h3 className='font40 fontf font-semibold white'>Discovery</h3>
                                                <p className='font18 fontf'>We will begin every project with a discovery phase to determine the actual problem to solve. Because "a problem well defined is a problem half solved."</p>
                                                <div className={styles.slideList}>
                                                    <Image className='img-fluid'
                                                        src={slidebefore}
                                                        alt="bitswits"
                                                    />
                                                    <p className='font16 fontf mb-0'>Determine UX challenges & goals</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image className='img-fluid'
                                                        src={slidebefore}
                                                        alt="bitswits"
                                                    />
                                                    <p className='font16 fontf mb-0'>Conduct user research & interviews</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image className='img-fluid'
                                                        src={slidebefore}
                                                        alt="bitswits"
                                                    />
                                                    <p className='font16 fontf mb-0'>Analyze data for targeted UX solutions</p>
                                                </div>
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
                                                    src={slideImg1}
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
                                                <div className={styles.slidBtns}>
                                                    <div className={styles.prjtBtns}>RESEARCH</div>
                                                    <div className={styles.prjtBtns}>ANALYTIC</div>
                                                </div>
                                                <h3 className='font40 fontf font-semibold white'>Define</h3>
                                                <p className='font18 fontf'>Through thorough research analysis, we consolidate the research data into key focus areas and begin defining goals, user journeys, and experiences.</p>
                                                <div className={styles.slideList}>
                                                    <Image className='img-fluid'
                                                        src={slidebefore}
                                                        alt="bitswits"
                                                    />
                                                    <p className='font16 fontf mb-0'>Building customer personas</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image className='img-fluid'
                                                        src={slidebefore}
                                                        alt="bitswits"
                                                    />
                                                    <p className='font16 fontf mb-0'>Learn about their current cure / solutions</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image className='img-fluid'
                                                        src={slidebefore}
                                                        alt="bitswits"
                                                    />
                                                    <p className='font16 fontf mb-0'>Defining the journey from start to end</p>
                                                </div>
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
                                                    src={slideImg2}
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
                                                <div className={styles.slidBtns}>
                                                    <div className={styles.prjtBtns}>RESEARCH</div>
                                                    <div className={styles.prjtBtns}>ANALYTIC</div>
                                                </div>
                                                <h3 className='font40 fontf font-semibold white'>Design</h3>
                                                <p className='font18 fontf'>At this stage, we diverge by blending creativity and data-driven approaches in our designs and solutions, generating a list of quirky, unique, and innovative ideas.</p>
                                                <div className={styles.slideList}>
                                                    <Image className='img-fluid'
                                                        src={slidebefore}
                                                        alt="bitswits"
                                                    />
                                                    <p className='font16 fontf mb-0'>UI/UX works begin in Figma</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image className='img-fluid'
                                                        src={slidebefore}
                                                        alt="bitswits"
                                                    />
                                                    <p className='font16 fontf mb-0'>Communicating & feedback on designs</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image className='img-fluid'
                                                        src={slidebefore}
                                                        alt="bitswits"
                                                    />
                                                    <p className='font16 fontf mb-0'>Defining the journey from start to end</p>
                                                </div>
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
                                                    src={slideImg3}
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
                                                <div className={styles.slidBtns}>
                                                    <div className={styles.prjtBtns}>RESEARCH</div>
                                                    <div className={styles.prjtBtns}>ANALYTIC</div>
                                                </div>
                                                <h3 className='font40 fontf font-semibold white'>Test & Improve</h3>
                                                <p className='font18 fontf'>Returning to convergence, we focus on delivering solutions that address user needs and pain points through prototyping, testing, and continuous improvement.</p>
                                                <div className={styles.slideList}>
                                                    <Image className='img-fluid'
                                                        src={slidebefore}
                                                        alt="bitswits"
                                                    />
                                                    <p className='font16 fontf mb-0'>Experiment designs in production mode</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image className='img-fluid'
                                                        src={slidebefore}
                                                        alt="bitswits"
                                                    />
                                                    <p className='font16 fontf mb-0'>Conduct A/B testing</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image className='img-fluid'
                                                        src={slidebefore}
                                                        alt="bitswits"
                                                    />
                                                    <p className='font16 fontf mb-0'>Optimize for better metrics outcome</p>
                                                </div>
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
                                                    src={slideImg4}
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

                    <Slider {...ourproject1} className='sidenewlong mt-5'>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <div className={styles.slidBtns}>
                                            <div className={styles.prjtBtns}>RESEARCH</div>
                                            <div className={styles.prjtBtns}>ANALYTIC</div>
                                        </div>
                                        <h3 className='font40 fontf font-semibold white'>Discovery</h3>
                                        <p className='font18 fontf'>We will begin every project with a discovery phase to determine the actual problem to solve. Because "a problem well defined is a problem half solved."</p>
                                        <div className={styles.slideList}>
                                            <Image className='img-fluid'
                                                src={slidebefore}
                                                alt="bitswits"
                                            />
                                            <p className='font16 fontf mb-0'>Determine UX challenges & goals</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image className='img-fluid'
                                                src={slidebefore}
                                                alt="bitswits"
                                            />
                                            <p className='font16 fontf mb-0'>Conduct user research & interviews</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image className='img-fluid'
                                                src={slidebefore}
                                                alt="bitswits"
                                            />
                                            <p className='font16 fontf mb-0'>Analyze data for targeted UX solutions</p>
                                        </div>
                                        <div className='mt-4 mb-5 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                BOOK A CALL
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image className='img-fluid'
                                            src={slideImg1}
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
                                        <div className={styles.slidBtns}>
                                            <div className={styles.prjtBtns}>RESEARCH</div>
                                            <div className={styles.prjtBtns}>ANALYTIC</div>
                                        </div>
                                        <h3 className='font40 fontf font-semibold white'>Define</h3>
                                        <p className='font18 fontf'>Through thorough research analysis, we consolidate the research data into key focus areas and begin defining goals, user journeys, and experiences.</p>
                                        <div className={styles.slideList}>
                                            <Image className='img-fluid'
                                                src={slidebefore}
                                                alt="bitswits"
                                            />
                                            <p className='font16 fontf mb-0'>Building customer personas</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image className='img-fluid'
                                                src={slidebefore}
                                                alt="bitswits"
                                            />
                                            <p className='font16 fontf mb-0'>Learn about their current cure / solutions</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image className='img-fluid'
                                                src={slidebefore}
                                                alt="bitswits"
                                            />
                                            <p className='font16 fontf mb-0'>Defining the journey from start to end</p>
                                        </div>
                                        <div className='mt-4 mb-5 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                BOOK A CALL
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image className='img-fluid'
                                            src={slideImg2}
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
                                        <div className={styles.slidBtns}>
                                            <div className={styles.prjtBtns}>RESEARCH</div>
                                            <div className={styles.prjtBtns}>ANALYTIC</div>
                                        </div>
                                        <h3 className='font40 fontf font-semibold white'>Design</h3>
                                        <p className='font18 fontf'>At this stage, we diverge by blending creativity and data-driven approaches in our designs and solutions, generating a list of quirky, unique, and innovative ideas.</p>
                                        <div className={styles.slideList}>
                                            <Image className='img-fluid'
                                                src={slidebefore}
                                                alt="bitswits"
                                            />
                                            <p className='font16 fontf mb-0'>UI/UX works begin in Figma</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image className='img-fluid'
                                                src={slidebefore}
                                                alt="bitswits"
                                            />
                                            <p className='font16 fontf mb-0'>Communicating & feedback on designs</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image className='img-fluid'
                                                src={slidebefore}
                                                alt="bitswits"
                                            />
                                            <p className='font16 fontf mb-0'>Defining the journey from start to end</p>
                                        </div>
                                        <div className='mt-4 mb-5 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                BOOK A CALL
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image className='img-fluid'
                                            src={slideImg3}
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
                                        <div className={styles.slidBtns}>
                                            <div className={styles.prjtBtns}>RESEARCH</div>
                                            <div className={styles.prjtBtns}>ANALYTIC</div>
                                        </div>
                                        <h3 className='font40 fontf font-semibold white'>Test & Improve</h3>
                                        <p className='font18 fontf'>Returning to convergence, we focus on delivering solutions that address user needs and pain points through prototyping, testing, and continuous improvement.</p>
                                        <div className={styles.slideList}>
                                            <Image className='img-fluid'
                                                src={slidebefore}
                                                alt="bitswits"
                                            />
                                            <p className='font16 fontf mb-0'>Experiment designs in production mode</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image className='img-fluid'
                                                src={slidebefore}
                                                alt="bitswits"
                                            />
                                            <p className='font16 fontf mb-0'>Conduct A/B testing</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image className='img-fluid'
                                                src={slidebefore}
                                                alt="bitswits"
                                            />
                                            <p className='font16 fontf mb-0'>Optimize for better metrics outcome</p>
                                        </div>
                                        <div className='mt-4 mb-5 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                BOOK A CALL
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image className='img-fluid'
                                            src={slideImg4}
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

export default OurProject
