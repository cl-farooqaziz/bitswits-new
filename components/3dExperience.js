import React from 'react'
import styles from '@/styles/3dExperience.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import Image from 'next/image'
import tab1 from '../public/3d-game-development/images/tab1.png'
import tab2 from '../public/3d-game-development/images/tab2.png'
import tab3 from '../public/3d-game-development/images/tab3.png'
import tab4 from '../public/3d-game-development/images/tab4.png'
import tab5 from '../public/3d-game-development/images/tab5.png'
import tab6 from '../public/3d-game-development/images/tab6.png'
import tab7 from '../public/3d-game-development/images/tab7.png'
import tab8 from '../public/3d-game-development/images/tab8.png'
import tab9 from '../public/3d-game-development/images/tab9.png'
import tabRight from '../public/3d-game-development/images/tabRightImage.png'



const Experience = () => {

    const [activeTab1, setActiveTab1] = useState('tab1');
    function fun1(tabs1) {
        setActiveTab1(tabs1);
    }

    return (
        <>
            <section className={styles.tech}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <p className='f-20 font-bold text-white text-center mb-0'>3D GAMES VARIATIONS</p>
                            <h2 className={`${styles.work}`}>Types Of Thrilling 3D Experiences That We
                                Bring To The Table</h2>
                        </Col>
                        <Col xl={7} className='mb-5'>
                            <div className={styles.tabs}>
                                <Row>
                                    <Col lg={4} className='mb-3'>
                                        <div className={`${activeTab1 == 'tab1' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab1')} href="#">
                                            <Image src={tab1} className={styles.tabImage} />
                                            <span> 3D Action
                                                Games</span>
                                        </div>
                                    </Col>
                                    <Col lg={4} className='mb-3'>
                                        <div className={`${activeTab1 == 'tab2' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab2')} href="#">
                                            <Image src={tab2} className={styles.tabImage} />
                                            <span> 3D Action
                                                Games</span>
                                        </div>
                                    </Col>
                                    <Col lg={4} className='mb-3'>
                                        <div className={`${activeTab1 == 'tab3' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab3')} href="#">
                                            <Image src={tab3} className={styles.tabImage} />
                                            <span> 3D Action
                                                Games</span></div>
                                    </Col>

                                    <Col lg={4} className='mb-3'>
                                        <div className={`${activeTab1 == 'tab4' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab4')} href="#">
                                            <Image src={tab4} className={styles.tabImage} />
                                            <span> 3D Action
                                                Games</span></div>
                                    </Col>
                                    <Col lg={4} className='mb-3'>
                                        <div className={`${activeTab1 == 'tab5' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab5')} href="#">
                                            <Image src={tab5} className={styles.tabImage} />
                                            <span> 3D Action
                                                Games</span></div>
                                    </Col>
                                    <Col lg={4} className='mb-3'>
                                        <div className={`${activeTab1 == 'tab6' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab6')} href="#">
                                            <Image src={tab6} className={styles.tabImage} />
                                            <span> 3D Action
                                                Games</span></div>
                                    </Col>

                                    <Col lg={4} className='mb-3'>
                                        <div className={`${activeTab1 == 'tab7' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab7')} href="#">
                                            <Image src={tab7} className={styles.tabImage} />
                                            <span> 3D Action
                                                Games</span></div>
                                    </Col>
                                    <Col lg={4} className='mb-3'>
                                        <div className={`${activeTab1 == 'tab8' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab8')} href="#">
                                            <Image src={tab8} className={styles.tabImage} />
                                            <span> 3D Action
                                                Games</span></div>
                                    </Col>
                                    <Col lg={4} className='mb-3'>
                                        <div className={`${activeTab1 == 'tab9' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab9')} href="#">
                                            <Image src={tab9} className={styles.tabImage} />
                                            <span> 3D Action
                                                Games</span></div>
                                    </Col>

                                    <Col lg={4}>
                                        <div className={`${activeTab1 == 'tab10' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab10')} href="#">
                                            <Image src={tab7} className={styles.tabImage} />
                                            <span> 3D Action
                                                Games</span></div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className={`${activeTab1 == 'tab11' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab11')} href="#">
                                            <Image src={tab8} className={styles.tabImage} />
                                            <span> 3D Action
                                                Games</span></div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className={`${activeTab1 == 'tab12' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab12')} href="#">
                                            <Image src={tab9} className={styles.tabImage} />
                                            <span> 3D Action
                                                Games</span></div>
                                    </Col>
                                </Row>
                            </div>

                        </Col>

                        <Col xl={5}>

                            {activeTab1 == 'tab1' &&


                                <div className={styles.newyork}>
                                    <div>
                                        <Image src={tabRight} className='img-fluid' />
                                    </div>
                                </div>

                            }



                            {activeTab1 == 'tab2' &&


                                <div className={styles.newyork}>

                                    <div>
                                        <Image src={tabRight} className='img-fluid' />
                                    </div>

                                </div>

                            }

                            {activeTab1 == 'tab3' &&

                                <div className={styles.newyork}>
                                    <div>
                                        <Image src={tabRight} className='img-fluid' />
                                    </div>
                                </div>

                            }


                            {activeTab1 == 'tab4' &&


                                <div className={styles.newyork}>
                                    <div>
                                        <Image src={tabRight} className='img-fluid' />
                                    </div>
                                </div>

                            }

                            {activeTab1 == 'tab5' &&

                                <div className={styles.newyork}>
                                    <div>
                                        <Image src={tabRight} className='img-fluid' />
                                    </div>

                                </div>

                            }

                            {activeTab1 == 'tab6' &&

                                <div className={styles.newyork}>
                                    <div>
                                        <Image src={tabRight} className='img-fluid' />
                                    </div>
                                </div>

                            }

                            {activeTab1 == 'tab7' &&


                                <div className={styles.newyork}>
                                    <div>
                                        <Image src={tabRight} className='img-fluid' />
                                    </div>
                                </div>


                            }



                            {activeTab1 == 'tab8' &&


                                <div className={styles.newyork}>
                                    <div>
                                        <Image src={tabRight} className='img-fluid' />
                                    </div>
                                </div>

                            }

                            {activeTab1 == 'tab9' &&

                                <div className={styles.newyork}>
                                    <div>
                                        <Image src={tabRight} className='img-fluid' />
                                    </div>
                                </div>

                            }


                            {activeTab1 == 'tab10' &&


                                <div className={styles.newyork}>
                                    <div>
                                        <Image src={tabRight} className='img-fluid' />
                                    </div>

                                </div>

                            }

                            {activeTab1 == 'tab11' &&

                                <div className={styles.newyork}>
                                    <div>
                                        <Image src={tabRight} className='img-fluid' />
                                    </div>
                                </div>

                            }

                            {activeTab1 == 'tab12' &&

                                <div className={styles.newyork}>
                                    <div>
                                        <Image src={tabRight} className='img-fluid' />
                                    </div>
                                </div>

                            }


                        </Col>
                    </Row>


                </Container>




            </section>


        </>
    )
}

export default Experience