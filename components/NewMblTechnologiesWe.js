import React from 'react'
import styles from '@/styles/Technologieswe.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import Image from 'next/image'
import icon1 from '../public/newHomePageImages/tech/1.png'
import icon2 from '../public/newHomePageImages/tech/2.png'
import icon3 from '../public/newHomePageImages/tech/3.png'
import icon4 from '../public/newHomePageImages/tech/4.png'
import icon5 from '../public/newHomePageImages/tech/5.png'
import icon6 from '../public/newHomePageImages/tech/6.png'
import icon7 from '../public/newHomePageImages/tech/7.png'
import icon8 from '../public/newHomePageImages/tech/8.png'

const Technologieswe = () => {

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
                            <h2 className={styles.work}>Technologies we work with</h2>
                        </Col>
                        <Col xl={12} className='mb-5'>
                            <div className={styles.analpost}>
                                <div className={activeTab1 == 'tab1' ? styles.active : ''} onClick={() => fun1('tab1')} href="#">Mobile</div>
                                <div className={activeTab1 == 'tab2' ? styles.active : ''} onClick={() => fun1('tab2')} href="#">Front end</div>
                                <div className={activeTab1 == 'tab3' ? styles.active : ''} onClick={() => fun1('tab3')} href="#">Database</div>
                                <div className={activeTab1 == 'tab4' ? styles.active : ''} onClick={() => fun1('tab4')} href="#">Backend</div>
                                <div className={activeTab1 == 'tab5' ? styles.active : ''} onClick={() => fun1('tab5')} href="#">CMS</div>
                                <div className={activeTab1 == 'tab6' ? styles.active : ''} onClick={() => fun1('tab6')} href="#">Infra and devops</div>
                            </div>

                        </Col>


                        <Col xl={12}>

                            {activeTab1 == 'tab1' &&


                                <div className={styles.newyork}>

                                    <div>
                                        <Image src={icon1} className='img-fluid' />
                                        <p>Ios</p>
                                    </div>
                                    <div>
                                        <Image src={icon2} className='img-fluid' />
                                        <p>Android</p>
                                    </div>
                                    <div>
                                        <Image src={icon3} className='img-fluid' />
                                        <p>React native</p>
                                    </div>
                                    <div>
                                        <Image src={icon4} className='img-fluid' />
                                        <p>Flutter</p>
                                    </div>
                                    <div>
                                        <Image src={icon5} className='img-fluid' />
                                        <p>Ionic</p>
                                    </div>

                                    <div>
                                        <Image src={icon6} className='img-fluid' />
                                        <p>Swift</p>
                                    </div>
                                    <div>
                                        <Image src={icon7} className='img-fluid' />
                                        <p>Kotlin</p>
                                    </div>
                                    <div>
                                        <Image src={icon8} className='img-fluid' />
                                        <p>Objectivec</p>
                                    </div>


                                </div>


                            }



                            {activeTab1 == 'tab2' &&


                                <div className={styles.newyork}>

                                    <div>
                                        <Image src={icon1} className='img-fluid' />
                                        <p>Ios</p>
                                    </div>
                                    <div>
                                        <Image src={icon2} className='img-fluid' />
                                        <p>Android</p>
                                    </div>
                                    <div>
                                        <Image src={icon3} className='img-fluid' />
                                        <p>React native</p>
                                    </div>
                                    <div>
                                        <Image src={icon4} className='img-fluid' />
                                        <p>Flutter</p>
                                    </div>
                                    <div>
                                        <Image src={icon5} className='img-fluid' />
                                        <p>Ionic</p>
                                    </div>

                                    <div>
                                        <Image src={icon6} className='img-fluid' />
                                        <p>Swift</p>
                                    </div>
                                    <div>
                                        <Image src={icon7} className='img-fluid' />
                                        <p>Kotlin</p>
                                    </div>
                                    <div>
                                        <Image src={icon8} className='img-fluid' />
                                        <p>Objectivec</p>
                                    </div>


                                </div>

                            }

                            {activeTab1 == 'tab3' &&

                                <div className={styles.newyork}>

                                    <div>
                                        <Image src={icon1} className='img-fluid' />
                                        <p>Ios</p>
                                    </div>
                                    <div>
                                        <Image src={icon2} className='img-fluid' />
                                        <p>Android</p>
                                    </div>
                                    <div>
                                        <Image src={icon3} className='img-fluid' />
                                        <p>React native</p>
                                    </div>
                                    <div>
                                        <Image src={icon4} className='img-fluid' />
                                        <p>Flutter</p>
                                    </div>
                                    <div>
                                        <Image src={icon5} className='img-fluid' />
                                        <p>Ionic</p>
                                    </div>

                                    <div>
                                        <Image src={icon6} className='img-fluid' />
                                        <p>Swift</p>
                                    </div>
                                    <div>
                                        <Image src={icon7} className='img-fluid' />
                                        <p>Kotlin</p>
                                    </div>
                                    <div>
                                        <Image src={icon8} className='img-fluid' />
                                        <p>Objectivec</p>
                                    </div>


                                </div>

                            }


                            {activeTab1 == 'tab4' &&


                                <div className={styles.newyork}>

                                    <div>
                                        <Image src={icon1} className='img-fluid' />
                                        <p>Ios</p>
                                    </div>
                                    <div>
                                        <Image src={icon2} className='img-fluid' />
                                        <p>Android</p>
                                    </div>
                                    <div>
                                        <Image src={icon3} className='img-fluid' />
                                        <p>React native</p>
                                    </div>
                                    <div>
                                        <Image src={icon4} className='img-fluid' />
                                        <p>Flutter</p>
                                    </div>
                                    <div>
                                        <Image src={icon5} className='img-fluid' />
                                        <p>Ionic</p>
                                    </div>

                                    <div>
                                        <Image src={icon6} className='img-fluid' />
                                        <p>Swift</p>
                                    </div>
                                    <div>
                                        <Image src={icon7} className='img-fluid' />
                                        <p>Kotlin</p>
                                    </div>
                                    <div>
                                        <Image src={icon8} className='img-fluid' />
                                        <p>Objectivec</p>
                                    </div>


                                </div>

                            }

                            {activeTab1 == 'tab5' &&

                                <div className={styles.newyork}>

                                    <div>
                                        <Image src={icon1} className='img-fluid' />
                                        <p>Ios</p>
                                    </div>
                                    <div>
                                        <Image src={icon2} className='img-fluid' />
                                        <p>Android</p>
                                    </div>
                                    <div>
                                        <Image src={icon3} className='img-fluid' />
                                        <p>React native</p>
                                    </div>
                                    <div>
                                        <Image src={icon4} className='img-fluid' />
                                        <p>Flutter</p>
                                    </div>
                                    <div>
                                        <Image src={icon5} className='img-fluid' />
                                        <p>Ionic</p>
                                    </div>

                                    <div>
                                        <Image src={icon6} className='img-fluid' />
                                        <p>Swift</p>
                                    </div>
                                    <div>
                                        <Image src={icon7} className='img-fluid' />
                                        <p>Kotlin</p>
                                    </div>
                                    <div>
                                        <Image src={icon8} className='img-fluid' />
                                        <p>Objectivec</p>
                                    </div>


                                </div>

                            }

                            {activeTab1 == 'tab6' &&

                                <div className={styles.newyork}>

                                    <div>
                                        <Image src={icon1} className='img-fluid' />
                                        <p>Ios</p>
                                    </div>
                                    <div>
                                        <Image src={icon2} className='img-fluid' />
                                        <p>Android</p>
                                    </div>
                                    <div>
                                        <Image src={icon3} className='img-fluid' />
                                        <p>React native</p>
                                    </div>
                                    <div>
                                        <Image src={icon4} className='img-fluid' />
                                        <p>Flutter</p>
                                    </div>
                                    <div>
                                        <Image src={icon5} className='img-fluid' />
                                        <p>Ionic</p>
                                    </div>

                                    <div>
                                        <Image src={icon6} className='img-fluid' />
                                        <p>Swift</p>
                                    </div>
                                    <div>
                                        <Image src={icon7} className='img-fluid' />
                                        <p>Kotlin</p>
                                    </div>
                                    <div>
                                        <Image src={icon8} className='img-fluid' />
                                        <p>Objectivec</p>
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

export default Technologieswe