import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Footer.module.css'
import Link from 'next/link'
const Footer = () => {
  return (
    <>

      <section className={styles.footer}>

        <Container>
          <Row className={styles.project}>
            <Col lg={4}>
              <h3 className='fontf font-bold grdiant font50'>Start Project</h3>
            </Col>
            <Col lg={4}>
              <h3 className='fontf font-bold white font50'>Right Now</h3>
            </Col>
            <Col lg={4}>
              <h3 className='fontf font-bold white font50'>Start Project</h3>
            </Col>
          </Row>

          <Row className={styles.past}>
            <Col lg={3}>
              <h3 className='grdiant fontf font-bold font40'>BitsWits</h3>
              <p className='font15 font-medium white fontf'>For the past decade, we have partnered with some of the world’s leading start-ups to help them create user experience designs that drive results and accelerate their digital products' growth.</p>
            </Col>
            <Col lg={3}>
              <h3 className='font25 font-bold white fontf'>Discover</h3>
              <ul className={styles.patner}>
                <li> <Link href="#">ABOUT US</Link> </li>
                <li> <Link href="#">WORK</Link> </li>
                <li> <Link href="#">SERVICES</Link> </li>
                <li> <Link href="#">BLOG</Link> </li>
                <li> <Link href="#">CAREERS</Link> </li>
              </ul>
            </Col>
            <Col lg={3}>
              <h3 className='font25 font-bold white fontf'>Services</h3>
              <ul className={styles.patner}>
                <li> <Link href="#">WEB DESIGN</Link> </li>
                <li> <Link href="#">MOBILE APP DESIGN</Link> </li>
                <li> <Link href="#">WEB3 DESIGN</Link> </li>
                <li> <Link href="#">Blockchain</Link> </li>
              </ul>
            </Col>
            <Col lg={3}>
              <h3 className='font25 font-bold white fontf'>Contact</h3>
              <p>For the past decade, we have partnered with some of the world’s leading start-ups to help them create user experience designs that drive results and accelerate their digital products' growth.</p>
            </Col>
          </Row>


          <Row>
            <Col lg={6}>
              <p className='font15 font-medium white fontf'>Copyright © 2023 BitsWits. | Brand Of Bhaoo Incorporation Company</p>
            </Col>
            <Col lg={6}>
              <p className='font15 font-medium white fontf right'>Terms of Use | Privacy Policy</p>
            </Col>
          </Row>

        </Container>

      </section>


    </>
  )
}

export default Footer