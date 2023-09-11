import React from 'react'
import styles from '@/styles/Whatwedo.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import icon1 from '../public/images/howweare/whatwedo.png'
import icon2 from '../public/images/howweare/arrow.png'
import Link from 'next/link'



const Whatwedo = () => {
    return (
        <>

            <section className={styles.howwweare}>
                <Container fluid>
                    <Row>
                      
                        <Col xl={3}>
                            <div className={styles.bump}>
                                <h3 className={styles.who}>WHAT WE DO</h3>
                                <h2 className={styles.greater}>Bitswits transforms businesses through technology.</h2>
                                <p>We help businesses successfully navigate digital transformation and drive real growth, drawing on the combined power of experience and contextual knowledge, across a vast ecosystem of expertise.</p>

                                <Link href='#'>Get to know us  <Image src={icon2} className={styles.imgfluid} /> </Link>

                            </div>

                        </Col>

                        <Col xl={9} className='p-0'>
                            <Image src={icon1} className='img-fluid w-100 h-auto' />
                            
                        </Col>

                    </Row>
                </Container>
            </section>



        </>
    )
}

export default Whatwedo