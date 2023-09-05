import React from 'react'
import styles from '@/styles/FaqsLp.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Link from 'next/link'
import Accordion from 'react-bootstrap/Accordion';
import { FaAngleDown } from 'react-icons/fa';


const FaqsLp = () => {

    return (
        <>
            <section className={styles.faqsLp}>
                <Container className='faqsLp'>
                    <h3 className="font50 grdiant f-montserrat f-700 text-center mb-5">
                        Frequently Asked Questions
                    </h3>

                    <Row className='mt-4'>
                        <Accordion defaultActiveKey="00">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    What is Mobile Application Development?
                                    <FaAngleDown size={25} />
                                </Accordion.Header>
                                <Accordion.Body>
                                    I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first. I do not give five star reviews easily and in fact save them for those who have truly exceeded my high expectations. Derrick and his team have earned my loyalty and respect through their transparent efforts of always placing the customer first.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Does Bitswits Offers Hybrid and Native Application Development?
                                    <FaAngleDown size={25} />
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Why Choose Bitswits as a Mobile Application Development Company?
                                    <FaAngleDown size={25} />
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Is there any customer support available?
                                    <FaAngleDown size={25} />
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>How to choose a mobile application development company?
                                    <FaAngleDown size={25} />
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>What industries does BitsWits cater do?
                                    <FaAngleDown size={25} />
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>


                    </Row>
                </Container>


            </section>



        </>
    )
}

export default FaqsLp