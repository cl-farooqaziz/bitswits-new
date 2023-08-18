import React from 'react'
import styles from '@/styles/Stack.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import pony1 from '/public/images/blockchainicon/1.png'
import pony2 from '/public/images/blockchainicon/2.png'
import pony3 from '/public/images/blockchainicon/3.png'
import pony4 from '/public/images/blockchainicon/4.png'
import pony5 from '/public/images/blockchainicon/5.png'
import pony6 from '/public/images/blockchainicon/6.png'
import pony7 from '/public/images/blockchainicon/7.png'
import pony8 from '/public/images/blockchainicon/8.png'

const Stack = () => {
    return (
        <>
            <section className={styles.kook}>
                <Container>
                    <Row>
                        <Col>
                            <h3 className='f-20  f-700 black t-center'>TECHNOLOGY STACK</h3>
                            <h2 className='f-50  f-700 black t-center'>Unleash Your <span className='grdiant'>Gaming Creativity <br></br> With Our Myriad</span> Of Technology In Use</h2>
                            <p className='f-16  f-500 black t-center'>BitsWits uses various blockchain technologies, such as multi-signature authentication, to further enhance the security of our products. More so, we offer multiple services, including custom game design and development, cryptocurrency wallet integration, smart contract development, and more. Here are a few technologies we embed in our services:</p>
                        </Col>
                    </Row>
                    <Row className='gy-3 mt-3'>
                        <Col lg={3}>
                            <div className={styles.floatpont}><Image src={pony1} className='img-fluid' />
                                <p className='f-16 f-700 black'>ETHEREUM</p></div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.floatpont}><Image src={pony2} className='img-fluid' />
                                <p className='f-16 f-700 black'>EOS</p></div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.floatpont}><Image src={pony3} className='img-fluid' />
                                <p className='f-16 f-700 black'>TRON</p></div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.floatpont}><Image src={pony4} className='img-fluid' />
                                <p className='f-16 f-700 black'>BSC</p></div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.floatpont}><Image src={pony5} className='img-fluid' />
                                <p className='f-16 f-700 black'>SOLANA</p></div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.floatpont}><Image src={pony6} className='img-fluid' />
                                <p className='f-16 f-700 black'>TEZOS</p></div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.floatpont}><Image src={pony7} className='img-fluid' />
                                <p className='f-16 f-700 black'>COSMOS</p></div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.floatpont}><Image src={pony8} className='img-fluid' />
                                <p className='f-16 f-700 black'>MATIC</p></div>
                        </Col>
                    </Row>

                </Container>
            </section>


        </>
    )
}

export default Stack