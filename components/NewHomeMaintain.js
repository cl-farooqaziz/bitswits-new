import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/NewMaintain.module.css";
import { Container, Row, Col } from 'react-bootstrap'
//
import CardOne from "@/public/newHomePageImages/card-1.png"
import WhatImage from "@/public/newHomePageImages/what_Image.png"

const NewHomeMaintain = () => {

    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row>
                        <Col lg={12}>
                            <p className={` f-20 text-white text-center`}>Services
                            </p>
                            <h1 className='text-white f-55 font-bold text-center pb-5'>Maintaining digital quality with
                                our collection of customizable services</h1>
                        </Col>
                        <Col lg={4}>
                            <card>
                                <h3 className='text-white f-20 font-bold text-center'>Mobile App Development</h3>
                                <p className={styles.para}>The mobile apps developed by app developers at BitsWits are captivating, interactive, and help improve the user experience from planning to execution.</p>

                                <Image src={CardOne} className=''/>
                            </card>
                        </Col>
                        <Col lg={4}></Col>
                        <Col lg={4}></Col>
                    </Row>

                </Container>

            </section>


        </>
    )
}

export default NewHomeMaintain