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
                        <Col lg={12}>
                            <h5 className='font20 fontf font-semibold letterspace fyColor2 text-center mb-3'>CAPABILITIES</h5>
                        </Col>
                        <Col lg={12}>
                            <h2 className='font50 black fontf font-bold line60 white text-center mb-0'>
                                The Game Plan for <span className='grdiant'> Building Your App </span>
                            </h2>
                        </Col>
                        {/* <Col lg={3}>
                            <Link className={`${styles.bttns1} mt-3 mt-lg-0 mb-4 mb-lg-0`} href="#">
                                Connect Now!
                            </Link>
                        </Col> */}
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
                                                <h3 className='font40 fontf font-semibold white'>DISCOVERY</h3>
                                                <p className='font18 fontf'>We begin every project by learning about your business, target audience, objectives, and grand visions for the app. This phase involves </p>
                                                <div className={styles.slideList}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Determining UX/UI goals and challenges. </p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Extensive competitor analysis.</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Map our user personas and use cases.</p>
                                                </div>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        Book a Call!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="bitswits" className='img-fluid'
                                                    src={slideImg1}

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
                                                <h3 className='font40 fontf font-semibold white'>DEPLOYMENT</h3>
                                                <p className='font18 fontf'>Finally, we help with launch logistics like app store submissions. After the release, we provide on-going maintenance and monitoring to keep your app performing optimally. </p>
                                                <div className={styles.slideList}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Monitoring and maintenance.</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Optimizing performance post-release.</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Post launch QA and optimization.</p>
                                                </div>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        Book a Call!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="bitswits" className='img-fluid'
                                                    src={slideImg2}

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
                                                <h3 className='font40 fontf font-semibold white'>WIREFRAMING</h3>
                                                <p className='font18 fontf'>The app structure and user journey are then mapped out using wireframes that specify each screen and interaction flow. This enables rapid modification in response to your feedback.</p>
                                                <div className={styles.slideList}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Mapping out app structure and flow.</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Designing low-fidelity skeletal framework.</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Enabling quick revision based on feedback. </p>
                                                </div>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        Book a Call!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="bitswits" className='img-fluid'
                                                    src={slideImg3}

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
                                                <h3 className='font40 fontf font-semibold white'>UI/UX DESIGN</h3>
                                                <p className='font18 fontf'>In this stage, our designers breathe life into wireframes by incorporating branding elements and visuals assets to create an exceptional, consistent user experience which results in interactive prototypes for testing</p>
                                                <div className={styles.slideList}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Applying visual branding assets and styles.</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Crafting intuitive user experiences.</p>
                                                </div>
                                                <div className={styles.slideList}>
                                                    <Image alt="bitswits" className='img-fluid'
                                                        src={slidebefore}

                                                    />
                                                    <p className='font16 fontf mb-0'>Creating an interactive prototype.</p>
                                                </div>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        Book a Call!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="bitswits" className='img-fluid'
                                                    src={slideImg4}

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
                                            <Image alt="bitswits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Determine UX challenges & goals.</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image alt="bitswits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Conduct user research & interviews.</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image alt="bitswits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Analyze data for targeted UX solutions.</p>
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
                                        <Image alt="bitswits" className='img-fluid'
                                            src={slideImg1}

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
                                            <Image alt="bitswits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Building customer personas</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image alt="bitswits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Learn about their current cure / solutions</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image alt="bitswits" className='img-fluid'
                                                src={slidebefore}

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
                                        <Image alt="bitswits" className='img-fluid'
                                            src={slideImg2}

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
                                            <Image alt="bitswits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>UI/UX works begin in Figma</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image alt="bitswits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Communicating & feedback on designs</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image alt="bitswits" className='img-fluid'
                                                src={slidebefore}

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
                                        <Image alt="bitswits" className='img-fluid'
                                            src={slideImg3}

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
                                            <Image alt="bitswits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Experiment designs in production mode</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image alt="bitswits" className='img-fluid'
                                                src={slidebefore}

                                            />
                                            <p className='font16 fontf mb-0'>Conduct A/B testing</p>
                                        </div>
                                        <div className={styles.slideList}>
                                            <Image alt="bitswits" className='img-fluid'
                                                src={slidebefore}

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
                                        <Image alt="bitswits" className='img-fluid'
                                            src={slideImg4}

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
