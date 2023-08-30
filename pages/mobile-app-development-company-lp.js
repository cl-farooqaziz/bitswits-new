import Head from 'next/head'
import Script from 'next/script'
import Slider from 'react-slick'
import { Container, Row } from 'react-bootstrap'
import Homebanner from '@/components/Homebanner'
import servicesmobile from '/public/images/servicesmobilephone/1.webp'
import servicesmobile2 from '/public/images/servicesmobilephone/2.webp'
import servicesmobile3 from '/public/images/servicesmobilephone/3.webp'
import servicesmobile4 from '/public/images/servicesmobilephone/4.webp'
import servicesmobile5 from '/public/images/servicesmobilephone/5.webp'
import servicesmobile6 from '/public/images/servicesmobilephone/6.webp'
import Endorsements from '@/components/Endorsements'
import Homevideo from '@/components/Homevideo'
import Whatourclients from '@/components/Whatourclients'
import Partner from '@/components/Partner'
import Servicesmobile from '@/components/Servicesmobile'
import Publication from '@/components/Publication'
import Range from '@/components/Range'
import Integration from '@/components/Integration'
import Hireus from '@/components/Hireus'
import Consultation from '@/components/Consultation'
import Faqs from '@/components/Faqs'
import GetInTouch from '@/components/GetInTouch'
import Locations from '@/components/Locations'
import Videotestimonial from '@/components/Videotestimonial'
import Findfood from '@/components/Findfood'
import Cab from '@/components/Cab'
import Musicapp from '@/components/Musicapp'
import Consultancy from '@/components/Consultancy'
import Ready from '@/components/Ready'
import Scalable from '@/components/Scalable'
import Enhanced from '@/components/Enhanced'
import Transforming from '@/components/Transforming'



export default function androidappdevelopmentcompanylp() {


    const fine = [

        {
            img: servicesmobile,
            title: (<>Android <br></br>
                Application Development </>),
            text: <>
                We take Android app development to the next level by following a comprehensive approach, from ideation to launch. Our experienced developers use the latest technologies to create customized and scalable Android apps that exceed client expectations.
            </>
        },

        {
            img: servicesmobile2,
            title: (<>Web <br></br>
                App Development </>),
            text: <>
                We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies to create scalable and secure web applications that cater to your business needs. Hire our web app developers today!
            </>
        },

        {
            img: servicesmobile3,
            title: (<>Flutter <br></br>
                App Development </>),
            text: <>
                Our team of expert Flutter app developers at Bitswits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs. From ideation to deployment, we ensure a smooth and efficient development process.


            </>
        },

        {
            img: servicesmobile4,
            title: (<> React Native <br></br>
                App Development </>),
            text: <>
                Our React Native app developers specialize in creating top-notch, performance-oriented native mobile apps for Android and iOS platforms. We follow a robust development process and utilize the latest technologies to deliver customized solutions that meet our clients' business objectives.
            </>
        },

        {
            img: servicesmobile5,
            title: (<>Cross Platform <br></br>
                App Development </>),
            text: <>
                We prioritize creating seamless user experiences in cross-platform app development. Our expert team uses cutting-edge tools and frameworks to build high-quality apps that work flawlessly across multiple platforms, ensuring maximum reach and engagement for your business.
            </>
        },

        {
            img: servicesmobile6,
            title: (<>IOS <br></br>
                Application Development </>),
            text: <>
                We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design, agile development methodologies, and the latest tools and frameworks. Our experienced iOS developers deliver innovative and customized apps!
            </>
        },


    ]

    const services = 'SERVICES'
    const app = <>  <span className='grdiant'>Mobile App</span> Development Services </>
    const revolutionize = 'Revolutionize your business with a mobile app development firm dedicated to providing you with the most innovative apps. Take advantage of their extensive offerings for essential platforms like iOS, and Android for maximum impact.'


    let rangSlider = {
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="UTF-8" />
                <title>The Professional Mobile App Development Company - Bitswits.</title>
                <meta name="description" content="From iOS to Android and beyond BitsWits is a team of highly skilled and experienced mobile app developers who specialize in creating innovative mobile solutions." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="The Professional Mobile App Development Company - Bitswits." />
                <meta property="og:description" content="From iOS to Android and beyond BitsWits is a team of highly skilled and experienced mobile app developers who specialize in creating innovative mobile solutions." />
                <meta property="og:url" content="https://bitswits.co/mobile-app-development-company/" />
                <meta property="og:site_name" content="The Professional Mobile App Development Company - Bitswits." />
                <link rel="canonical" href="https://bitswits.co/mobile-app-development-company/" />
                <meta name="msvalidate.01" content="7BBFFA763CEB48CAC0828E22D44DD12B" />
                <meta name="DC.title" content="mobile app development company, hire mobile app developers, mobile app development services" />
                <meta name="geo.region" content="US-CA" />
                <meta name="geo.placename" content="Los Angeles" />
                <meta name="geo.position" content="36.701463;-118.755997" />
                <meta name="ICBM" content="36.701463, -118.755997" />
                <meta name="DC.title" content="mobile app development company, hire mobile app developers, mobile app development services" />
                <meta name="geo.region" content="US-DE" />
                <meta name="geo.placename" content="Dover" />
                <meta name="geo.position" content="38.692045;-75.401331" />
                <meta name="ICBM" content="38.692045, -75.401331" />
                <meta name="DC.title" content="mobile app development company, hire mobile app developers, mobile app development services" />
                <meta name="geo.region" content="US" />
                <meta name="geo.position" content="39.78373;-100.445882" />
                <meta name="ICBM" content="39.78373, -100.445882" />
                <link rel="icon" href="images/icons/favicon.png" />


            </Head>


            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" />

            <Homebanner
                subtitle='Transform Your Business With Our Revolutionary'
                title={<>   <h1 className='font65 black fontf font-bold line60 mb-3'>   <span className='grdiant'> Mobile App</span>  Development Company</h1></>}
                title2={<>We Don't Just Create Apps; We Create Experiences</>}
                text={<> At BitsWits, we develop innovative and user-friendly apps that have a visually appealing design and function seamlessly, meeting the specific needs of our clients. Our focus on delivering high-quality mobile apps is unwavering; as a result, we have earned a reputation as the industry's best mobile app development company. </>}
            />

            <Endorsements />


            <Consultancy />

            <Transforming />




            <div className='bgimageserve d-lg-block d-none'>
                <Container className='ourspacing'>
                    <Row className='mb-5'>
                        <div>
                            <p className="f-20 black f-montserrat f-700 mb-2 t-center">{services}</p>
                            <h2 className="f-50 f-playfair f-700 black t-center"> {app} </h2>
                            <p className="f-montserrat f-500 f-16 mb-1 black lheight24 t-center"> {revolutionize} </p>

                        </div>
                    </Row>


                    <Row className='gy-4'>

                        {fine.map((item, i) =>
                            <Servicesmobile key={i}
                                title={item.title}
                                text={item.text}
                                img1={item.img}

                            />
                        )}

                    </Row>
                </Container>
            </div>

            <div className='bgimageserve d-lg-none d-block'>
                <Container className='ourspacing'>
                    <Row className='mb-5'>
                        <div>
                            <p className="f-20 orange f-montserrat f-700 mb-2 t-center">{services}</p>
                            <h2 className="f-50 f-playfair f-700 black t-center"> {app} </h2>
                            <p className="f-montserrat f-500 f-14 mb-1 black lheight24 t-center"> {revolutionize} </p>
                        </div>
                    </Row>


                    <Row className='gy-4'>

                        <Slider {...rangSlider}>
                            {fine.map((item, i) =>
                                <Servicesmobile key={i}
                                    title={item.title}
                                    text={item.text}
                                    img1={item.img}

                                />
                            )}
                        </Slider>
                    </Row>
                </Container>
            </div>

            <Partner />

            <Musicapp />
            <Cab />

            <Findfood />


            <Publication />

            <Range />

            <Hireus />



        </>
    )
}
