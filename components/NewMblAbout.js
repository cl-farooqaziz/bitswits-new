import React from 'react'
import styles from "@/styles/NewMblAbout.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
//
import AboutImage from "@/public/newHomePageImages/about_image.svg"

const NewHomeAbout = () => {

    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row>
                        <Col lg={12}>
                            <h1 className='text-white f-60 font-bold'>About.</h1>
                            <p className={`${styles.wid} f-30 text-white`}>Our mobile app developers and designers' goal is to achieve productive outcomes to help our clients succeed in the highly competitive digital world.
                            </p>
                            <p className={`${styles.wid} f-20 text-white`}>We at, BitsWits, the top mobile application development agency have established ourselves as a reliable partner for leading start-ups around the world. Our team dedicated to enabling growth by providing multiple range of design and development services.
                            </p>
                           
                            <div className='sec_image text-center'>
                                <Image quality={75} src={AboutImage} className={styles.secImage} />
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>


        </>
    )
}

export default NewHomeAbout