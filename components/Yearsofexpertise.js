import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Yearsofexpertise.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Counter from './Counter';

const Yearsofexpertise = () => {



    var awardslogo = {
        dots: true,
        arrows: false,
        loop: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (
        <>
            <section className={` ${styles.yearsofexpertise}`}>
                <Container className={` ${styles.allbest} ${styles.desk} `}>
                    <Row>
                        <Col lg={3}>
                            <h3 className='font75 grdiant font-bold fontf'>  <Counter stopNumber={21} /></h3>
                            <h4 className='font18 fontf white font-extrabold texttran'>YEARS OF <br></br> EXPERTISE</h4>
                            <p className='font15 fontf white font-medium'>Established in 2002 in the USA </p>
                        </Col>
                        <Col lg={3}>
                            <h3 className='font75 grdiant font-bold fontf'><Counter stopNumber={1000} /></h3>
                            <h4 className='font18 fontf white font-extrabold texttran'>DEDICATED <br></br> DEVELOPERS </h4>
                            <p className='font15 fontf white font-medium'>All directly employed by BitsWits</p>
                        </Col>
                        <Col lg={3}>
                            <h3 className='font75 grdiant font-bold fontf'> <Counter stopNumber={12500} /></h3>
                            <h4 className='font18 fontf white font-extrabold texttran'>SATISFIED <br></br> CLIENTS</h4>
                            <p className='font15 fontf white font-medium'>Check the genuine testimonial videos</p>
                        </Col>
                        <Col lg={3}>
                            <h3 className='font75 grdiant font-bold fontf'> <Counter stopNumber={20000} /></h3>
                            <h4 className='font18 fontf white font-extrabold texttran'>PROJECTS  <br></br> DELIVERED </h4>
                            <p className='font15 fontf white font-medium'>Check the delivered work now!</p>
                        </Col>
                    </Row>
                </Container>


                <Container className={styles.mobile}>

                    <Slider {...awardslogo} className={` ${styles.allbest} usapost pt-3 mb-5`}>
                        <div>
                            <h3 className='font75 grdiant font-bold fontf'><Counter stopNumber={21} /></h3>
                            <h4 className='font25 fontf white font-extrabold texttran'>years of <br></br> expertise</h4>
                            <p className='font15 fontf white font-medium'>Established 2002 in the USA </p>
                        </div>
                        <div>
                            <h3 className='font75 grdiant font-bold fontf'><Counter stopNumber={1000} /></h3>
                            <h4 className='font25 fontf white font-extrabold texttran'>Dedicated <br></br> Developers</h4>
                            <p className='font15 fontf white font-medium'>All directly employed by us </p>
                        </div>
                        <div>
                            <h3 className='font75 grdiant font-bold fontf'><Counter stopNumber={12500} /></h3>
                            <h4 className='font25 fontf white font-extrabold texttran'>Happy Clients</h4>
                            <p className='font15 fontf white font-medium'>See genuine testimonial videos </p>
                        </div>
                        <div>
                            <h3 className='font75 grdiant font-bold fontf'><Counter stopNumber={20000} /></h3>
                            <h4 className='font25 fontf white font-extrabold texttran'>Projects <br></br> Delivered</h4>
                            <p className='font15 fontf white font-medium'>See examples our work </p>
                        </div>



                    </Slider>

                </Container>
            </section>

        </>
    )
}

export default Yearsofexpertise