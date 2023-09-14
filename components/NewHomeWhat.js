import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/NewHomeWhat.module.css";
import { Container, Row, Col } from 'react-bootstrap'
//
import ButtonIcon from "@/public/newHomePageImages/home_btn.png"
import WhatImage from "@/public/newHomePageImages/what_Image.png"

const NewHomeWhat = () => {

    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row>
                        <Col lg={12}>
                            <h1 className='text-white f-60 font-bold'>What we do.</h1>
                            <p className={`${styles.wid} f-20 text-white`}>Bring The World To Your Door With
                                Our Digital Solutions.
                            </p>
                            <p className={`${styles.width} font14`}>We help businesses successfully navigate digital transformation and drive real growth, drawing on the combined power of experience and contextual knowledge, across a vast ecosystem of expertise.
                            </p>
                            <div className={styles.sec_btn}>
                                <Link href='javascript:;' className={`${styles.btn_txt} font-extrabold`}>
                                    Get to know us
                                    <span>
                                        <Image src={ButtonIcon} width={15} height={15} />
                                    </span>
                                </Link>
                            </div>
                        </Col>
                    </Row>

                </Container>

                <div className='sec_image text-center pt-5'>
                    <Image src={WhatImage} className={styles.secImage}/>
                </div>

            </section>


        </>
    )
}

export default NewHomeWhat