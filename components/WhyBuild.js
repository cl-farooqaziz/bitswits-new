import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/WhyBuild.module.css'


const WhyBuild = (props) => {
    return (
        <>
            <section className={`${styles.myExpertise} ${props.expo} ${styles[props.alignclass]}`}>
                <Container>
                    <Row className='aboutfold'>
                        <Col lg={12} className='mx-auto'>
                            {props.subtitle}
                            {props.text}
                        </Col>
                    </Row>
                    <div>{props.cards}</div>
                </Container>
            </section>
        </>
    )
}

export default WhyBuild