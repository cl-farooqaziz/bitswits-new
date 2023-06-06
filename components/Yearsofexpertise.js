import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Yearsofexpertise.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                    <div>
                        <h3 className='font75 grdiant font-bold fontf'>21+</h3>
                        <h4 className='font25 fontf white font-extrabold texttran'>years of <br></br> expertise</h4>
                        <p className='font15 fontf white font-medium'>Established 2002 in the USA </p>
                    </div>
                    <div>
                        <h3 className='font75 grdiant font-bold fontf'>1,000+</h3>
                        <h4 className='font25 fontf white font-extrabold texttran'>Dedicated <br></br> Developers</h4>
                        <p className='font15 fontf white font-medium'>All directly employed by us </p>
                    </div>
                    <div>
                        <h3 className='font75 grdiant font-bold fontf'>12,500+</h3>
                        <h4 className='font25 fontf white font-extrabold texttran'>Happy Clients</h4>
                        <p className='font15 fontf white font-medium'>See genuine testimonial videos </p>
                    </div>
                    <div>
                        <h3 className='font75 grdiant font-bold fontf'>20,000+</h3>
                        <h4 className='font25 fontf white font-extrabold texttran'>Projects <br></br> Delivered</h4>
                        <p className='font15 fontf white font-medium'>See examples our work </p>
                    </div>
                </Container>

                
                <Container className={styles.mobile}>

                    <Slider {...awardslogo} className={` ${styles.allbest} usapost`}>



                    <div>
                        <h3 className='font75 grdiant font-bold fontf'>21+</h3>
                        <h4 className='font25 fontf white font-extrabold texttran'>years of <br></br> expertise</h4>
                        <p className='font15 fontf white font-medium'>Established 2002 in the USA </p>
                    </div>
                    <div>
                        <h3 className='font75 grdiant font-bold fontf'>1,000+</h3>
                        <h4 className='font25 fontf white font-extrabold texttran'>Dedicated <br></br> Developers</h4>
                        <p className='font15 fontf white font-medium'>All directly employed by us </p>
                    </div>
                    <div>
                        <h3 className='font75 grdiant font-bold fontf'>12,500+</h3>
                        <h4 className='font25 fontf white font-extrabold texttran'>Happy Clients</h4>
                        <p className='font15 fontf white font-medium'>See genuine testimonial videos </p>
                    </div>
                    <div>
                        <h3 className='font75 grdiant font-bold fontf'>20,000+</h3>
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