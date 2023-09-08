import Image from 'next/image';
import React from 'react';
// import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import style from '@/styles/HomeBanner.module.css';
import logo1 from '@/public/blockchain/images/logo-1.png'; 
import logo2 from '@/public/blockchain/images/logo-2.png'; 
import logo3 from '@/public/blockchain/images/logo-3.png'; 
import logo4 from '@/public/blockchain/images/logo-4.png'; 
import logo5 from '@/public/blockchain/images/logo-5.png'; 
import logo6 from '@/public/blockchain/images/logo-6.png'; 
import Slider from "react-slick";

function LogoSlide(){
    // dots: true,
    // infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,

    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrow:false,
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                arrow:false,
                  dots: true,
                  infinite: true,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000,
                  centerMode: true,
              }
          },
          {
              breakpoint: 768,
              settings: {
                arrow:false,
                  dots: true,
                  infinite: true,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000,
                  centerMode: true,
              }
          },
          {
              breakpoint: 767,
              settings: {
                arrow:false,
                  dots: true,
                  infinite: true,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000,
                  centerMode: true,
              }
          },
          {
              breakpoint: 575,
              settings: {
                arrow:false,
                  dots: true,
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000,
                  centerMode: true,
              }
          }
      ]
    };
    return (
        <>
        <section>
            <Container>
                <Row>
                    <Col>
                        <Slider {...settings} className={`${style.partnerLogos} partnerLogos ForSeoLogo`}>
                            <div>
                                <Image src={logo1} width="127" alt="trustPilot" height="auto" />
                            </div>
                            <div>
                                <Image src={logo2} alt="amazon" width="127" height="auto" />
                            </div>
                            <div>
                                <Image src={logo3} alt="googleCloud" width="127" height="auto" />
                            </div>
                            <div>
                                <Image src={logo4} alt="microSoft" width="127" height="auto" />
                            </div>
                            <div>
                                <Image src={logo5} alt="googlePartner" width="127" height="auto" />
                            </div>
                            <div>
                                <Image src={logo6} alt="fb" width="127" height="auto" />
                            </div>
                            
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}
export default LogoSlide;