import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Col, Row, Container } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
import style from '@/styles/metaverse/metaverse.module.css';
import MetaBtn from './MetaBtn';

function MetaverseBanner() {

    return (
        <>




            <div className={`HomeBanner ${style.metaverseBanner}`}>

                <div className={style.overlay}></div>

                <div className='homeVideo'>
                    <video className='' autoPlay muted loop src="../../../metaverse/images/metaBannerVideo.mov" type="video/mov"></video>
                </div>

                <Container>
                    <Row>
                        <Col lg={8} className='mx-auto'>
                            <div className={style.point}>
                                <div className={style.Lcontent}>
                                    <h1 className='text-white mb-2 pl-4'>
                                        <span className='fw700 f-80 grdiant d-block'>Metaverse</span>
                                        <span className='fw400 font33'> Development Company </span></h1>
                                    <p className={`${style.content} text-white f15`}>Launch robust metaverse platforms with our core expertise in blockchain, AR, VR and other metaverse technologies.<br></br>
                                        Hire our top-notch metaverse experts to capture the future of digital reality. Accelerate your success in the web3 space with our metaverse development services.</p>
                                </div>
                                <div className={`${style.secBtns}`}>
                                    <MetaBtn></MetaBtn>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
}
export default MetaverseBanner;