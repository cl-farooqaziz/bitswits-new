import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/metaverse/metawork.module.css';
import Image from 'next/image';
import Link from 'next/link';
//
import WorkOne from '@/public/metaverse/images/work-1.png';
import MetaBtn from './MetaBtn';
import MetaDot from '@/public/metaverse/images/metaversedot.png';

const MetaWork = (props) => {

    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ]
    };

    return (
        <>
            <section>
                <Container>
                    <Row className='justify-content-center align-items-center mb-3 mt-2'>
                        <Col lg={12}>
                            <h2 className="text-white f40 mb-2">{props.revTile1}</h2>
                            <h4 className="fw300 f30 text-white mb-2">{props.revSubTile1}</h4>
                            <p className='text-white fw300 '>{props.revpara}</p>

                        </Col>
                    </Row>
                    <div className='d-none d-lg-block d-md-block d-sm-none'>
                        <Row className={`justify-content-center align-items-center ${style.relative}`}>
                            <Col lg={6} className={`${style.br1} ${style.contentHeight} ${style.bb1} position-relative pb-5 h-100`}>
                                <div className={style.ImageBack}>
                                    <Image src={WorkOne} className={`${style.workImage}`} />
                                </div>
                            </Col>
                            <Col lg={6} className={`${style.bb1} ${style.imageHeight} position-relative pb-5 h-100`}>
                                <div className={`${style.workContent}`}>
                                    <h4 className={`f35 font-bold text-white`}>Build a Realistic Fashion Store</h4>
                                    <p className={`f22 ${style.contentPara}`}>
                                        Fashion has entered the metaverse trend by launching
                                        metaverse fashion week,metaverse fashion stores, and
                                        NFTs. Metaverse is empowering fashion brands to
                                        market their products to a global audience and multiply
                                        their revenue.
                                    </p>
                                    <div className={style.workBtn}>
                                        <MetaBtn />
                                    </div>
                                </div>
                            </Col>
                            <span className={style.metaDot}>
                                <Image src={MetaDot} />
                            </span>
                            <Col lg={6} className={`${style.bb1} ${style.br1} ${style.imageHeight} position-relative pb-5 h-100`}>
                                <div>
                                    <h4 className={`f35 font-bold text-white`}>Build a Realistic Fashion Store</h4>
                                    <p className={`f22 ${style.contentPara}`}>
                                        Fashion has entered the metaverse trend by launching
                                        metaverse fashion week,metaverse fashion stores, and
                                        NFTs. Metaverse is empowering fashion brands to
                                        market their products to a global audience and multiply
                                        their revenue.
                                    </p>
                                    <div className={style.workBtn}>
                                        <MetaBtn />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className={` ${style.contentHeight} ${style.bb1} position-relative pb-5 h-100`}>
                                <div className={style.ImageBack}>
                                    <Image src={WorkOne} className={`${style.workImage} ${style.ml}`} />
                                </div>
                            </Col>
                            <Col lg={6} className={`${style.br1} ${style.contentHeight} ${style.bb1} position-relative pb-5 h-100`}>
                                <div className={style.ImageBack}>
                                    <Image src={WorkOne} className={`${style.workImage}`} />
                                </div>
                            </Col>
                            <Col lg={6} className={`${style.bb1} ${style.imageHeight} position-relative pb-5 h-100`}>
                                <div className={`${style.workContent}`}>
                                    <h4 className={`f35 font-bold text-white`}>Build a Realistic Fashion Store</h4>
                                    <p className={`f22 ${style.contentPara}`}>
                                        Fashion has entered the metaverse trend by launching
                                        metaverse fashion week,metaverse fashion stores, and
                                        NFTs. Metaverse is empowering fashion brands to
                                        market their products to a global audience and multiply
                                        their revenue.
                                    </p>
                                    <div className={style.workBtn}>
                                        <MetaBtn />
                                    </div>
                                </div>
                            </Col>
                            <span className={style.metaDotTwo}>
                                <Image src={MetaDot} />
                            </span>
                            <Col lg={6} className={`${style.br1} ${style.imageHeight} position-relative pb-5 h-100`}>
                                <div>
                                    <h4 className={`f35 font-bold text-white`}>Build a Realistic Fashion Store</h4>
                                    <p className={`f22 ${style.contentPara}`}>
                                        Fashion has entered the metaverse trend by launching
                                        metaverse fashion week,metaverse fashion stores, and
                                        NFTs. Metaverse is empowering fashion brands to
                                        market their products to a global audience and multiply
                                        their revenue.
                                    </p>
                                    <div className={style.workBtn}>
                                        <MetaBtn />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className={` ${style.contentHeight} position-relative pb-5 h-100`}>
                                <div className={style.ImageBack}>
                                    <Image src={WorkOne} className={`${style.workImage} ${style.ml}`} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}
export default MetaWork