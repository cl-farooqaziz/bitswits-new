import React from 'react'
import styles from '@/styles/Ourservices.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Accordion from 'react-bootstrap/Accordion';
import icon1 from '../public/images/ourservices/sideimg.png'
import Image from 'next/image';
const Ourservices = () => {
    return (
        <>
            <section className={styles.ourservices}>
                <Container>
                    <Row className={styles.project}>
                        <Col lg={2}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace white'>Services</h5>
                        </Col>
                        <Col lg={8}>
                            <h4 className='font65 black fontf font-bold line60 white'>Our <span className='grdiant'>Services</span> </h4>
                        </Col>
                        <Col lg={2}>
                            <Link className={styles.bttns1} href="#">Book a Call</Link>
                        </Col>
                    </Row>
                    <Row className='mt-5 pb-5 ourservicesfaqs'>
                        <Col lg={6}>
                        <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                Mobile Application
                                </Accordion.Header>
                                <Accordion.Body>
                                For the past decade, we have partnered with some of the world’s leading start-ups to help them create user experience designs that drive results and accelerate their digital products' growth.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                Game Design
                                </Accordion.Header>
                                <Accordion.Body>
                                    For the past decade, we have partnered with some of the world’s leading start-ups to help them create user experience designs that drive results and accelerate their digital products' growth.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Web 3.0 Design</Accordion.Header>
                                <Accordion.Body>
                                    For the past decade, we have partnered with some of the world’s leading start-ups to help them create user experience designs that drive results and accelerate their digital products' growth.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Blockchain</Accordion.Header>
                                <Accordion.Body>
                                    For the past decade, we have partnered with some of the world’s leading start-ups to help them create user experience designs that drive results and accelerate their digital products' growth.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Web Flow Development</Accordion.Header>
                                <Accordion.Body>
                                    For the past decade, we have partnered with some of the world’s leading start-ups to help them create user experience designs that drive results and accelerate their digital products' growth.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Artificial Intelligence</Accordion.Header>
                                <Accordion.Body>
                                    For the past decade, we have partnered with some of the world’s leading start-ups to help them create user experience designs that drive results and accelerate their digital products' growth.
                                </Accordion.Body>
                            </Accordion.Item>
              
                        </Accordion>
                        </Col>
                        <Col lg={6}>
                          <div className={styles.imgapost}>
                          <Image alt="Bitswits" src={icon1} className="img-fluid" />
                          </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default Ourservices