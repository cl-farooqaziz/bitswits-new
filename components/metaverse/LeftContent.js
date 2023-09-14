import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/metaverse/metaverse.module.css';
import Image from 'next/image';
import Link from 'next/link';
import MetaBtn from './MetaBtn';

//
import leftContentImage from '@/public/metaverse/images/leftcontentImage.png'



const LeftContent = (props) => {
    return (
        <>
            <div className={`${styles[props.whychooseclass]} secPad`}>
                <Container>
                    <Row className={`${styles.middle} gy-4 align-items-center`}>

                        <Col lg={6}>
                            <div className={styles.cube}>
                                <h2 className="text-white mb-2">{props.title}</h2>
                                <p className='f14 text-white mt-3'>{props.text}</p>
                                <p className='f14 text-white mt-2'>{props.subtext}</p>
                                <p className='f14 text-white mt-2'>{props.subtext2}</p>
                                <p className='f14 text-white mt-2'>{props.subtext3}</p>
                                <div className={`${styles.secBtns} ${styles.secBtns2} mt-4`}>
                                    <MetaBtn number="1-844-400-0025"
                                        discuss="Hire Blockchain Developer" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.image}>
                                <div>

                                    <Image src={leftContentImage} className={styles.contentImage}/>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default LeftContent