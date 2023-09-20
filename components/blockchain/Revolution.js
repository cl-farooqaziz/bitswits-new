import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/blockchain/Revolution.module.css';
import Image from 'next/image';
import Link from 'next/link';
// import posters from '@/public/blockchain/images/poster.png';
import phone from '@/public/blockchain/images/phone.svg';
import blockchain from '@/public/blockchain/images/blockchain.png';
import appdev from '@/public/blockchain/images/app-dev.png'
import technology from '@/public/blockchain/images/technology.png'
import bitcoin from '@/public/blockchain/images/bitcoin.png'
import nft from '@/public/blockchain/images/nft.png'
import supplychain from '@/public/blockchain/images/supplychain.png'
import Slider from "react-slick";

const Revolution = (props) => {

    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <>
            <section className={style.secPad}>
                <Container>
                    <Row className='justify-content-center align-items-center mb-5 mt-5'>
                        <Col lg={12}>
                            <h2 className="text-white f40 mb-2">{props.revTile1}</h2>
                            <h4 className="fw300 f30 text-white mb-2">{props.revSubTile1}</h4>
                            <p className='text-white fw300 '>{props.revpara}</p>

                        </Col>
                    </Row>
                    <div className='d-none d-lg-block'>
                        <Row className='justify-content-center align-items-center'>
                            <Col lg={4} className={`${style.br1} ${style.bb1} position-relative`}>
                                <div className={`${style.feature}`}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span className={`${style.numbers}`}>
                                            <Image src={blockchain} className='img-fluid' alt="Blockchain" />
                                        </span>
                                    </div>

                                </div>
                                <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'> <span className='grdiant'>Custom Blockchain</span>
                                    <br /> App Development</h4>
                            </Col>
                            <Col lg={4} className={`${style.br1} ${style.bb1} position-relative`}>
                                <div className={`${style.feature}`}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span className={`${style.numbers}`}>
                                            <Image src={technology} className='img-fluid' alt="Blockchain" />
                                        </span>
                                    </div>

                                </div>
                                <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'> <span className='grdiant'>Blockchain Technology</span> <br />
                                    Consulting</h4>
                            </Col>
                            <Col lg={4} className={`${style.bb1} position-relative`}>
                                <div className={`${style.feature}`}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span className={`${style.numbers}`}>
                                            <Image src={appdev} className='img-fluid' alt="Blockchain" />
                                        </span>
                                    </div>

                                </div>
                                <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>App <br /> <span className='grdiant'>Development</span> </h4>
                            </Col>
                            <Col lg={4} className={`${style.br1}  position-relative`}>
                                <div className={`${style.feature}`}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span className={`${style.numbers}`}>
                                            <Image src={bitcoin} className='img-fluid' alt="Blockchain" />
                                        </span>
                                    </div>

                                </div>
                                <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'> <span className='grdiant'>NFT Marketplace</span> <br />
                                    Development</h4>
                            </Col>
                            <Col lg={4} className={`${style.br1}  position-relative`}>
                                <div className={`${style.feature}`}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span className={`${style.numbers}`}>
                                            <Image src={nft} className='img-fluid' alt="Blockchain" />
                                        </span>
                                    </div>

                                </div>
                                <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'> <span className='grdiant'>Blockchain Wallet</span> <br />
                                    Development</h4>
                            </Col>
                            <Col lg={4} className='position-relative'>
                                <div className={`${style.feature}`}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <span className={`${style.numbers}`}>
                                            <Image src={supplychain} className='img-fluid' alt="Blockchain" />
                                        </span>
                                    </div>

                                </div>
                                <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'> <span className='grdiant'>Supply Chain</span> <br /> Blockchain
                                    Development</h4>
                            </Col>

                        </Row>
                    </div>
                    <div className='d-block d-lg-none'>
                        <Row className='justify-content-center align-items-center'>
                            <Slider {...settings}>
                                <Col lg={4} className={`${style.br1} ${style.bb1} position-relative`}>
                                    <div className={`${style.feature}`}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className={`${style.numbers}`}>
                                                <Image src={blockchain} className='img-fluid' alt="Blockchain" />
                                            </span>
                                        </div>

                                    </div>
                                    <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>Custom Blockchain
                                        <br /> App Development</h4>
                                </Col>
                                <Col lg={4} className={`${style.br1} ${style.bb1} position-relative`}>
                                    <div className={`${style.feature}`}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className={`${style.numbers}`}>
                                                <Image src={technology} className='img-fluid' alt="Blockchain" />
                                            </span>
                                        </div>

                                    </div>
                                    <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>Blockchain Technology <br />
                                        Consulting</h4>
                                </Col>
                                <Col lg={4} className={`${style.bb1} position-relative`}>
                                    <div className={`${style.feature}`}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className={`${style.numbers}`}>
                                                <Image src={appdev} className='img-fluid' alt="Blockchain" />
                                            </span>
                                        </div>

                                    </div>
                                    <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>App <br /> Development</h4>
                                </Col>
                                <Col lg={4} className={`${style.br1}  position-relative`}>
                                    <div className={`${style.feature}`}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className={`${style.numbers}`}>
                                                <Image src={bitcoin} className='img-fluid' alt="Blockchain" />
                                            </span>
                                        </div>

                                    </div>
                                    <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>NFT Marketplace <br />
                                        Development</h4>
                                </Col>
                                <Col lg={4} className={`${style.br1}  position-relative`}>
                                    <div className={`${style.feature}`}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className={`${style.numbers}`}>
                                                <Image src={nft} className='img-fluid' alt="Blockchain" />
                                            </span>
                                        </div>

                                    </div>
                                    <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>Blockchain Wallet <br />
                                        Development</h4>
                                </Col>
                                <Col lg={4} className='position-relative'>
                                    <div className={`${style.feature}`}>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className={`${style.numbers}`}>
                                                <Image src={supplychain} className='img-fluid' alt="Blockchain" />
                                            </span>
                                        </div>

                                    </div>
                                    <h4 className='line-height-1 text-center fw700 f18 text-white mb-4'>Supply Chain <br /> Blockchain
                                        Development</h4>
                                </Col>
                            </Slider>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}
export default Revolution