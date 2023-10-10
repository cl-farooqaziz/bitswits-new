import React from 'react'
import styles from "@/styles/NewHomeAbout.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
//
import AboutImage from "@/public/newHomePageImages/about_image.png"
import comma from "@/public/newHomePageImages/comma.png"

const NewHomeAbout = () => {

    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row>
                        <Col lg={12} className={styles.hover1}>
                            <h2 className='text-white f-40 font-bold text-center'>Our Client’s Feedback Has Been</h2>
                            <h2 className='grdiant f-60 font-bold text-center'>Nothing Short Of Amazing!</h2>
                            <div className={` ${styles.client} sec_image text-center`}>
                                <Image quality={75} src={AboutImage} alt='Banner' className={styles.secImage} />
                                <div className={styles.secImage1}>
                                    <Image src={comma} className='img-fluid' />
                                <h4>Our iOS developers craft pixel-perfect iOS apps with <br></br> beautiful and latest designs for Apple devices. <Image src={comma} className='img-fluid' /></h4>

                                <h5 className='mt-4'>James Spencer</h5>
                                <p>CEO Jumpto1</p>
                            </div>
                            </div >
                           
                        </Col>
                    </Row>

                </Container>
            </section>


        </>
    )
}

export default NewHomeAbout