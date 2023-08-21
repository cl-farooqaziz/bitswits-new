import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Tool.module.css'
import Image from 'next/image'
import figma1 from '/public/images/figma/1.png'
import figma2 from '/public/images/figma/2.png'
import figma3 from '/public/images/figma/3.png'
import figma4 from '/public/images/figma/4.png'
import figma5 from '/public/images/figma/5.png'
import figma6 from '/public/images/figma/6.png'
import figma7 from '/public/images/figma/7.png'
import figma8 from '/public/images/figma/8.png'
import figma9 from '/public/images/figma/9.png'
import figma10 from '/public/images/figma/10.png'
import figma11 from '/public/images/figma/11.png'
import Link from 'next/link'

const Tool = () => {
    return (
        <>
            <section className={styles.tool}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h3 className='font20 black fontf font-bold center'>CREATIVE TOOLS IN OUR USE</h3>
                            <h2 className='font50 black fontf font-bold center'>List Of <span className='grdiant'>Interaction Design Tools</span> We Leverage</h2>
                            <p className='font16 black fontf font-medium center'>Our arsenal includes cutting-edge digital applications, intuitive illustration programs, and powerful photo editing suites.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>

                            <div className={styles.usefont}> 
                                <div className={styles.inclu}>
                                    <Image src={figma1} className='img-fluid pt-4 pb-4' />
                                    <h3 className='font16 black fontf font-bold center'>Balsamiq</h3>
                                </div>
                                <div className={styles.inclu}>
                                    <Image src={figma2} className='img-fluid pt-4 pb-4' />
                                    <h3 className='font16 black fontf font-bold center'>Adobe Illustrator</h3>
                                </div>
                                <div className={styles.inclu}>
                                    <Image src={figma3} className='img-fluid pt-4 pb-4' />
                                    <h3 className='font16 black fontf font-bold center'>Adobe XD</h3>
                                </div>
                                <div className={styles.inclu}>
                                    <Image src={figma4} className='img-fluid pt-4 pb-4' />
                                    <h3 className='font16 black fontf font-bold center'>Adobe Photoshop</h3>
                                </div>
                                <div className={styles.inclu}>
                                    <Image src={figma5} className='img-fluid pt-4 pb-4' />
                                    <h3 className='font16 black fontf font-bold center'>Indesign</h3>
                                </div>
                                <div className={styles.inclu}>
                                    <Image src={figma6} className='img-fluid pt-4 pb-4' />
                                    <h3 className='font16 black fontf font-bold center'>Zeplin</h3>
                                </div>
                                <div className={styles.inclu}>
                                    <Image src={figma7} className='img-fluid pt-4 pb-4' />
                                    <h3 className='font16 black fontf font-bold center'>Adobe After Effects</h3>
                                </div>
                                <div className={styles.inclu}>
                                    <Image src={figma8} className='img-fluid pt-4 pb-4' />
                                    <h3 className='font16 black fontf font-bold center'>Figma</h3>
                                </div>
                                <div className={styles.inclu}>
                                    <Image src={figma9} className='img-fluid pt-4 pb-4' />
                                    <h3 className='font16 black fontf font-bold center'>InVision</h3>
                                </div>
                                <div className={styles.inclu}>
                                    <Image src={figma10} className='img-fluid pt-4 pb-4' />
                                    <h3 className='font16 black fontf font-bold center'>Premier Pro</h3>
                                </div>
                                <div className={styles.inclu}>
                                    <Image src={figma11} className='img-fluid pt-4 pb-4' />
                                    <h3 className='font16 black fontf font-bold center'>Sketch</h3>
                                </div>

                            </div>


                        </Col>
                    </Row>
                </Container>


            </section>


        </>
    )
}

export default Tool