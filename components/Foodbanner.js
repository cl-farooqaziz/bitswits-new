import React from 'react'
import styles from '@/styles/Foodbanner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import foldImg00 from '../public/images/case-food/banner.svg'


const Foodbanner = (props) => {
    return (
        <>
            <section className={`${styles.foody} contpost`}>
                <Container fluid>
                    <Row>
                        <Col lg={6}>
                            {props.title}
                            {props.para1}
                            {props.para2}
                            {props.para3}
                        </Col>
                        <Col lg={6}>
                            <Image src={foldImg00} className='img-fluid' ></Image>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Foodbanner