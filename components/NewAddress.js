import React from 'react'
import styles from "@/styles/Newgamebanner.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
//
import icon11 from '../public/newMobilePageImages/city1.png'
import icon12 from '../public/newMobilePageImages/city2.png'
import icon14 from '../public/newMobilePageImages/city3.png'

const NewAddress = () => {
    return (
        <>
            <div className={`${styles.read} mb-lg-4`}>
                <div className={`${styles.free}`}>
                    <p className='font16 texttran font-bold fontf'>
                        Make an obligation-free enquiry
                    </p>
                </div>
                <Row className={styles.locations}>
                    <Col lg={4} md={6} className={`${styles.locInner} col-6`}>
                        <div className={styles.locImg}>
                            <Image alt="bitswits" src={icon11} className='img-fluid' />
                        </div>
                        <div className={styles.subInner}>
                            <p className='font12 font-bold fontf mb-0'>USA</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={6} className={`${styles.locInner} col-6`}>
                        <div className={styles.locImg}>
                            <Image alt="bitswits" src={icon12} className='img-fluid' />
                        </div>
                        <div className={styles.subInner}>
                            <p className='font12 font-bold fontf mb-0'>Middle East</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className={`${styles.locInner} col-6`}>
                        <div className={styles.locImg}>
                            <Image alt="bitswits" src={icon14} className='img-fluid' />
                        </div>
                        <div className={styles.subInner}>
                            <p className='font12 font-bold fontf mb-0'>Asia</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default NewAddress
