import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Footer.module.css'
import Link from 'next/link'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import { AiFillBehanceCircle } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import icon from '../public/images/footer/icon.png'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import icon1 from '../public/images/awards/award1.png'
import icon2 from '../public/images/awards/award2.png'
import icon3 from '../public/images/awards/award3.png'
import icon4 from '../public/images/awards/award4.png'
import icon5 from '../public/images/awards/award5.png'
import icon6 from '../public/images/awards/award6.png'
import icon7 from '../public/images/awards/award7.png'
import icon8 from '../public/images/awards/award8.png'
import icon9 from '../public/images/awards/award9.png'
import icon10 from '../public/images/awards/award10.png'
import icon11 from '../public/images/awards/award11.png'

const Footer = () => {

  var awardslogo = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    pauseOnHover: false,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>

      <section className={styles.footer}>

        <Container>
          <Row className={styles.project}>
            <Col lg={12}>
              <h4 className='font30 fontf font-bold white mb-0 text-center'>
                <span className='grdiant'>Award-winning Platform</span> <br />
                Trusted by Enterprises
              </h4>
            </Col>
            <Col lg={12}>
              <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-4`}>
                <div className={styles.strpImg}>
                  <Image alt="Bitswits" src={icon1} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="Bitswits" src={icon2} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="Bitswits" src={icon3} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="Bitswits" src={icon4} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="Bitswits" src={icon5} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="Bitswits" src={icon6} className="img-fluid" />
                </div>
                <div className={`${styles.strpImg} ${styles.minImg}`}>
                  <Image alt="Bitswits" src={icon7} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="Bitswits" src={icon8} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="Bitswits" src={icon9} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="Bitswits" src={icon10} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="Bitswits" src={icon11} className="img-fluid" />
                </div>
              </Slider>
            </Col>
          </Row>

          <Row className={styles.past}>
            <Col lg={4}>
              <h3 className='grdiant fontf font-bold font40 mb-4'>BitsWits</h3>
              <p className='font15 font-medium white fontf'>For the past decade, we have partnered with some of the world’s leading start-ups to help them create user experience designs that drive results and accelerate their digital products' growth.</p>

              <Link className={styles.bttns1} href="#">Book A Call</Link>

            </Col>
            <Col lg={2}>
              <h3 className='font25 font-bold white fontf mb-3 mb-lg-4'>Discover</h3>
              <ul className={styles.patner}>
                <li> <Link href="#">ABOUT US</Link> </li>
                <li> <Link href="#">WORK</Link> </li>
                <li> <Link href="#">SERVICES</Link> </li>
                <li> <Link href="#">BLOG</Link> </li>
                <li> <Link href="#">CAREERS</Link> </li>
              </ul>
            </Col>
            <Col lg={2}>
              <h3 className='font25 font-bold white fontf mb-3 mb-lg-4'>Services</h3>
              <ul className={styles.patner}>
                <li> <Link href="#">WEB DESIGN</Link> </li>
                <li> <Link href="#">MOBILE APP DESIGN</Link> </li>
                <li> <Link href="#">WEB3 DESIGN</Link> </li>
                <li> <Link href="#">BLOCKCHAIN</Link> </li>
              </ul>
            </Col>
            <Col lg={3}>
              <h3 className='font25 font-bold white fontf mb-3 mb-lg-4'>Contact</h3>



              <div className={styles.fill}>
                <div>
                  <BsFillEnvelopeFill size={20} className={styles.email} />
                </div>
                <div>
                  <Link className='font15 font-medium white fontf' href="mailto:info@bitswits.co"> info@bitswits.co</Link>

                </div>
              </div>



              <div className={styles.fill}>
                <div>
                  <BsFillTelephoneFill size={25} className={styles.email} />
                </div>
                <div>
                  <Link className='font15 font-medium white fontf' href="tel:+1 312 379 5987">+1 312 379 5987</Link> <br></br>
                  <Link className='font15 font-medium white fontf' href="tel:+1 833 500 6007">+1 833 500 6007</Link>

                </div>
              </div>



              <div className={styles.socialicons}>
                <Link href="#"> <FaFacebookF size={20} className={styles.email} /></Link>
                <Link href="#"> <AiOutlineInstagram size={20} className={styles.email} /></Link>
                <Link href="#"> <AiOutlineTwitter size={20} className={styles.email} /></Link>
                <Link href="#"> <AiFillLinkedin size={20} className={styles.email} /></Link>
                <div className={styles.spacing}> </div>
                <Link href="#"> <AiFillBehanceCircle size={20} className={styles.email} /></Link>
                <Link href="#"> <BsPinterest size={20} className={styles.email} /></Link>
                <Link href="#" > <Image src={icon} className={`${styles.email}`} /> </Link>
                <Link href="#"> <FaTelegramPlane size={20} className={styles.email} /></Link>
              </div>


            </Col>
          </Row>


          <Row className={styles.policy}>
            <Col lg={6}>
              <p className='font15 font-medium white fontf'>Copyright © 2023 BitsWits. | Brand Of Bhaoo Incorporation Company</p>
            </Col>
            <Col lg={6}>
              <p className='font15 font-medium white fontf right'> <Link className='white' href="#">Terms of Use</Link>  | <Link className='white' href="#">Privacy Policy</Link></p>
            </Col>
          </Row>

        </Container>

      </section>


    </>
  )
}

export default Footer