import React from 'react'
import styles from "@/styles/NewBanner.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'


//
import HomeBannerSlider from './HomeBannerSlider';

const NewBanner = () => {

    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row>
                        <Col xl={12}>
                            <div className={styles.content}>
                                <p className={`${styles.just} text-center f-20 mb-0`}>A modern digital factory</p>
                                <h3 className={`${styles.develop} text-center f-60 font-bold`}>Designed for ambitious <br></br>
                                    brands and innovative concepts.</h3>

                                <div className={styles.pont}>
                                    <Link className={styles.about} href="#">Let's Connect</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
            
            <HomeBannerSlider />

        </>
    )
}

export default NewBanner