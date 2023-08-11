import React from 'react'
import Image from 'next/image'
import styles from '../styles/Homebanner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import right from '../public/images/displaybanner/hero-img.webp'


function Homebanner(props) {
    return (
        <>

            <div className={`${styles.herofold} ${styles.newhomepagehero}`}>
                <Container fluid>
                    <Row className={styles.rowalign}>

                        <Col xl={6}>
                            <div className={styles.nreplot}>


                                {props.subtitle ?
                                    <p className="f-montserrat f-700 f-16 mb-1 black lheight24"> {props.subtitle}</p>
                                    :
                                    ''
                                }

                           

                           
                                    
                                    {props.title}
                                 

                             



                                {props.text ?
                                    <p className="f-18 f-montserrat mb-2 line30 font-medium">
                                        {props.text}
                                    </p>
                                    :
                                    ''
                                }


                                {props.text ?
                                    <p className="f-18 f-montserrat mb-3 mb-xxl-4 line30 font-medium">
                                        {props.text2}
                                    </p>
                                    :
                                    ''
                                }

                                <Link href='#' className={`${styles.arrowBtn} btns`}>
                                    <span>Get Free  Consultation </span>
                                    
                                </Link>


                            </div>

                        </Col>
                        <Col xl={6}>
                            <div className="d-none d-xl-block">

                              <Image src={right} className='img-fluid' />
                            

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Homebanner