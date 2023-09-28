import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import styles from '@/styles/GameCapabilities.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const Solutions = () => {

  return (
    <>

      <section className={styles.home}>
        <Container className='qtech'>
          <Row>
            <Col lg={6}>
              <p className='text-white'>Solutions</p>
              <h2 className='gredient'>Take Your Gaming Experience
                to the Blockchain!</h2>
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </section>



    </>
  )
}

export default Solutions