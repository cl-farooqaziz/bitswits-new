import React from 'react'
import styles from '@/styles/Marketingexpertise.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import mobilearrow from '../public/images/Include/star.jpg'

const MarketingExpertise = () => {
    return (
        <section className={styles.marketingExpertise}>
            <Container>
                <Row>
                    <Col>
                        <h3 className='center font-bold mb-5'>Our Social Media Marketing Expertise Also Include</h3>


                        <ul className={styles.mservice}>
                            <li> <Image src={mobilearrow} alt="bitswits" />  Youtube Video Advertising </li>
                            <li> <Image src={mobilearrow} alt="bitswits" /> Facebook Cold Display Advertising  </li>
                            <li> <Image src={mobilearrow} alt="bitswits" />  Facebook Dynamic Adverts </li>
                            <li> <Image src={mobilearrow} alt="bitswits" />  Facebook Remarketing &amp; Campaigns</li>
                            <li> <Image src={mobilearrow} alt="bitswits" />  Instagram Ads </li>
                            <li> <Image src={mobilearrow} alt="bitswits" />  LinkedIn Advertising</li>
                            <li> <Image src={mobilearrow} alt="bitswits" />  Twitter Ads</li>
                            <li> <Image src={mobilearrow} alt="bitswits" />  Content Development &amp; Marketing</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default MarketingExpertise