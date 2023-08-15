import React from 'react'
import styles from '@/styles/Combination.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const Combination = () => {
    return (
        <>

            <section className={styles.integration}>

                <Container>
                    <Row className={styles.integrtxt}>
                        <Col md={12}>
                            <h3>
                                THE  <span className='grdiant'>BEST GAME DEVELOPER</span> IN THE TOWN
                            </h3>
                            <h2>
                                The Future Of <span className='grdiant'>2D Games</span> Is Here <br></br> We're Leading The Charge!
                            </h2>
                            <p className='mb-5 mt-4'>
                                Our 2D game developers use a combination of vibrant colors, intuitive controls, and engaging storylines to create something truly unique and always captivating. Our 2D game development services include concept creation, level design, character design, animation, asset integration, dynamic UI/UX design, programming, and debugging. Our custom 2D game engine provides hours of high-quality entertainment for those who take their gaming business seriously. With us, your gaming experience is guaranteed to be the best!
                            </p>

                            <Link className={styles.sbtn} href="#"> Consult A Gaming Expert To Begin </Link>

                        </Col>
                    </Row>
                </Container>

            </section>

        </>
    )
}

export default Combination