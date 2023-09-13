import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/NewHomeHear.module.css";
import { Container, Row, Col } from 'react-bootstrap'
//
import ButtonIcon from "@/public/newHomePageImages/hear-btn.png"

const NewHomeHear = () => {

    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row>
                        <Col lg={6}>
                            <p className=' f-20 font-bold text-white'>Let's work together</p>
                            <h2 className={`${styles.headContent} text-white f-60 font-bold`}>We would love to hear from you!
                            </h2>
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

            </section>


        </>
    )
}

export default NewHomeHear