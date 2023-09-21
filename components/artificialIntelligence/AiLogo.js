import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/artificialIntelligence/AiLogo.module.css'


import Unity from '../public/images/ai-img/Unity.png'
import XTCom from '../public/images/ai-img/XTCom.png'
import Binance from '../public/images/ai-img/Binance.png'
import Enterprise from '../public/images/ai-img/Enterprise.png'
// import Unity from '../public/images/ai-img/Unity.png'
// import XTCom from '../public/images/ai-img/XTCom.png'



const AiLogo = () => {
    return (
        <>
            <section className={`${styles.aiSection}`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Image src={Unity} alt="bitswits"/>
                            <Image src={XTCom} alt="bitswits"/>
                            <Image src={Binance} alt="bitswits"/>
                            <Image src={Enterprise} alt="bitswits"/>
                            {/* <Image src={Unity} alt="bitswits"/>
                            <Image src={Unity} alt="bitswits"/> */}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AiLogo