import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/WorkExp.module.css'


const WhyBuild = (props) => {
    return (
        <>
            <section className={styles.myExpertise}>
                <Container>
                    <Row className='aboutfold'>
                        <Col lg={12}>
                      
         <h3 className='font40 fontf font-bold mt-1 black text-center'>{props.title} </h3>                              </Col>
                    </Row>
                    <div className='mt-5'>{props.Workspace}</div>
                </Container>
            </section>
        </>
    )
}

export default WhyBuild