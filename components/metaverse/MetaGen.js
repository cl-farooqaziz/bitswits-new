import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/metaverse/metagen.module.css';
import styles from '@/styles/metaverse/metaverse.module.css';
import Image from 'next/image';
import poster from '@/public/blockchain/images/cube.png'
import MetaBtn from './MetaBtn';

const MetaGen = (props) => {
    return (
        <>
            <section className={style.metaSec}>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <Col lg={8} className='pt-4 pb-4'>
                            <h2 className="fw300 f30 text-white mb-2">{props.Metasub}</h2>
                            <p className='font16 text-white fw300'>{props.MetaPara}</p>
                            <div className={`${styles.secBtns} ${styles.secBtns2} mb-0`}>
                                <MetaBtn number="1-844-400-0025"
                                    discuss="Hire Blockchain Developer" />
                            </div>
                        </Col>
                        <Col lg={4}>

                            {props.poster ?
                                <div>
                                    <video className={`${style.bgVideo} img-fluid`} width={450} autoPlay muted loop src="../../../blockchain/images/nextgen.mp4" type="video/mp4"></video>
                                </div>
                                :
                                ''
                            }
                            {props.poster1 ?
                                <div className='text-center pt-sm-2'>
                                    <Image src={poster} className='img-fluid' alt="Blockchain" />
                                </div>
                                :
                                ''
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default MetaGen