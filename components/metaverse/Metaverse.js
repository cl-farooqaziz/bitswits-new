import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/metaverse/metaverseCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
// import posters from '../public/images/poster.png';
import CardOne from '@/public/metaverse/images/card-1.png';
import CardTwo from '@/public/metaverse/images/card-2.png';
import CardThree from '@/public/metaverse/images/card-3.png';
import CardFour from '@/public/metaverse/images/card-4.png';
import MetaDot from '@/public/metaverse/images/metaversedot.png';


const Metaverse = (props) => {


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
            <section className={style.paddingTop}>
                <Container>
                    <Row className='justify-content-center align-items-center mb-sm-5'>
                        <Col lg={12}>
                            <p className="text-white mb-sm-4">{props.hireSubTile}</p>
                        </Col>
                    </Row>
                    <div className={` ${style.cardPosition}`}>
                        <Row className={`justify-content-center align-items-center ${style.relative}`}>
                            <Col lg={6} className={`${style.br1} ${style.bb1} pb-5`}>
                                <div className={`${style.card} mb-lg-0 mb-sm-5`}>
                                    <div className={`${style.feature}`}>
                                        <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                            <div className={style.cardContent}>
                                                <span className='text-white line2 mb-3'>
                                                    <span className='f28 fw700'>Metaverse <span className='txt-primary'>NFT</span></span>
                                                    <span className='f20 fw600 d-block'>Development Services</span>
                                                </span>
                                                <p className='text-white font11 pt-2'>
                                                    Level up your metaverse app by enhancing the metaverse economy through digital assets. NFTs offer users a way to buy and sell digital assets in the virtual world transparently and securely.
                                                </p>
                                                <div className='cardImage'>
                                                    <Link href='javascript:;' className={`${style.grediantBtn} text-white`}>
                                                        Hire Blockchain Developer
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={style.cardImage}>
                                                <Image src={CardOne} className="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className={`${style.bb1} ${style.bb1} pb-5  position-relative`}>
                                <div className={`${style.card} ms-auto mb-lg-0 mb-sm-5`}>
                                    <div className={`${style.feature}`}>
                                        <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                            <div className={style.cardContent}>
                                                <span className='text-white line2 mb-3'>
                                                    <span className='f28 fw700'>Metaverse <span className='txt-primary'>Decentralized</span></span>
                                                    <span className='f20 fw600 d-block'>Development Services</span>
                                                </span>
                                                <p className='text-white font11 pt-2'>
                                                    Level up your metaverse app by enhancing the metaverse economy through digital assets. NFTs offer users a way to buy and sell digital assets in the virtual world transparently and securely.
                                                </p>
                                                <div className='cardImage'>
                                                    <Link href='javascript:;' className={`${style.grediantBtn} text-white`}>
                                                        Hire Blockchain Developer
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={style.cardImageTwo}>
                                                <Image src={CardTwo} className="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <span className={style.metaDot}>
                                <Image src={MetaDot} />
                            </span>
                            <Col lg={6} className={`${style.br1} position-relative pt-5`}>
                                <div className={`${style.card} mb-lg-0 mb-sm-5`}>
                                    <div className={`${style.feature}`}>
                                        <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                            <div className={style.cardContent}>
                                                <span className='text-white line2 mb-3'>
                                                    <span className='f28 fw700'>Metaverse <span className='txt-primary'>NFT</span></span>
                                                    <span className='f20 fw600 d-block'>Development Services</span>
                                                </span>
                                                <p className='text-white font11 pt-2'>
                                                    Level up your metaverse app by enhancing the metaverse economy through digital assets. NFTs offer users a way to buy and sell digital assets in the virtual world transparently and securely.
                                                </p>
                                                <div className='cardImage'>
                                                    <Link href='javascript:;' className={`${style.grediantBtn} text-white`}>
                                                        Hire Blockchain Developer
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={style.cardImage}>
                                                <Image src={CardThree} className="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className={` position-relative pt-5`}>
                                <div className={`${style.card} ms-auto mb-lg-0 mb-sm-5`}>
                                    <div className={`${style.feature}`}>
                                        <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                            <div className={style.cardContent}>
                                                <span className='text-white line2 mb-3'>
                                                    <span className='f28 fw700'>Metaverse <span className='txt-primary'>Decentralized</span></span>
                                                    <span className='f20 fw600 d-block'>Platforms Development</span>
                                                </span>
                                                <p className='text-white font11 pt-2'>
                                                    Level up your metaverse app by enhancing the metaverse economy through digital assets. NFTs offer users a way to buy and sell digital assets in the virtual world transparently and securely.
                                                </p>
                                                <div className='cardImage'>
                                                    <Link href='javascript:;' className={`${style.grediantBtn} text-white`}>
                                                        Hire Blockchain Developer
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={style.cardImageFour}>
                                                <Image src={CardFour}  className=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}
export default Metaverse