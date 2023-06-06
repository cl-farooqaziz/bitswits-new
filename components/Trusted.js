import React from 'react'
import styles from '@/styles/Trusted.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import icon1 from '../public/images/trusted/icon1.png'
import icon2 from '../public/images/trusted/icon2.png'
import icon3 from '../public/images/trusted/icon3.png'
import icon4 from '../public/images/trusted/icon4.png'
import icon5 from '../public/images/trusted/icon5.png'
import icon6 from '../public/images/trusted/icon6.png'
import icon7 from '../public/images/trusted/icon7.png'
import icon8 from '../public/images/trusted/icon8.png'
import icon9 from '../public/images/trusted/icon9.png'
import Image from 'next/image'

const Trusted = () => {
  return (
    <>
    <section className={styles.trusted}>
        <Container>
            <Row>
                <Col lg={12}>
                    <h4 className='font-semibold font25 fontf black center'>TRUSTED BY STARTUPS TO PUBLICLY LISTED COMPANIES</h4>
                </Col>
            </Row>
         <div className={styles.startup}>
            <Image alt="Bitswits" src={icon1} className="im-fluid" />
            <Image alt="Bitswits" src={icon2} className="im-fluid" />
            <Image alt="Bitswits" src={icon3} className="im-fluid" />
            <Image alt="Bitswits" src={icon4} className="im-fluid" />
            <Image alt="Bitswits" src={icon5} className="im-fluid" />
            <Image alt="Bitswits" src={icon6} className="im-fluid" />
            <Image alt="Bitswits" src={icon7} className="im-fluid" />
            <Image alt="Bitswits" src={icon8} className="im-fluid" />
            <Image alt="Bitswits" src={icon9} className="im-fluid" />
        </div>   
        </Container>
    </section>
    </>
  )
}

export default Trusted