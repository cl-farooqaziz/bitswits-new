import React from 'react'
import styles from '@/styles/Consultancy.module.css'
import { Container, Row, Col } from 'react-bootstrap'


const Consultancy = () => {
    return (
        <>

            <section className={styles.pont}>
                <Container>
                    <Row>
                        <Col>
                            <h3 className='font50 black fontf font-bold center pb-3'>Get A <span className='grdiant'>Free Consultancy</span> </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <form className={styles.bottomform}>

                                <input type="text" name="name" className={styles.name} placeholder="Hi, what's your name?" required="" />


                                <input type="email" name="email" className={styles.name} id="email" placeholder="What's your email address?" required="" />

                                <input type="phone" name="phone" className={styles.name} id="phone" placeholder="Your contact number" required="" minLength="7" maxLength="15" />


                                <button type="submit" className={styles.butsave}>Submit Details</button>

                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Consultancy