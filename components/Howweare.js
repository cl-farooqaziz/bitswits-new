import React from 'react'
import styles from '@/styles/Howweare.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import icon1 from '../public/images/howweare/howweare.png'
import icon2 from '../public/images/howweare/arrow.png'
import Link from 'next/link'



const Howweare = () => {
    return (
        <>

            <section className={styles.howwweare}>
                <Container fluid>
                    <Row>
                        <Col xl={9} className='p-0'>
                            <Image src={icon1} className='img-fluid w-100 h-auto' />
                            
                        </Col>
                        <Col xl={3}>
                            <div className={styles.bump}>
                                <h3 className={styles.who}>WHO WE ARE</h3>
                                <h2 className={styles.greater}>We build greater futures through <br></br> innovation and collective knowledge.</h2>
                                <p>Bitswits is an IT services, consulting and business solutions organization that has been partnering with many of the world’s largest businesses in their transformation journeys for over 10+ years.</p>

                                <Link href='#'>Get to know us  <Image src={icon2} className={styles.imgfluid} /> </Link>

                            </div>

                        </Col>

                    </Row>
                </Container>
            </section>



        </>
    )
}

export default Howweare