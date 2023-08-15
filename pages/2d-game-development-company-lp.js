import Head from 'next/head'
import Script from 'next/script'
import Slider from 'react-slick'
import { Container, Row, Col } from 'react-bootstrap'
import Homebanner from '@/components/Homebanner'
import servicesmobile from '/public/images/servicesmobile/1.webp'
import servicesmobile2 from '/public/images/servicesmobile/2.webp'
import servicesmobile3 from '/public/images/servicesmobile/3.webp'
import servicesmobile4 from '/public/images/servicesmobile/4.webp'
import servicesmobile5 from '/public/images/servicesmobile/5.webp'
import servicesmobile6 from '/public/images/servicesmobile/6.webp'
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
import Creativeopportunities from '@/components/Creativeopportunities'
import Developer from '@/components/Developer'
import Counter from '@/components/Counter';
import Yearsofexpertise from '@/components/Yearsofexpertise';
import Incredible from '@/components/Incredible';
import Play from '@/components/Play';
import Combination from '@/components/Combination';
import { useState } from 'react'

import pony from '/public/images/image2d/img2d.jpg'
import pony1 from '/public/images/image2d/img2d2.jpg'
import pony2 from '/public/images/image2d/1.jpg'
import pony3 from '/public/images/image2d/2.jpg'
import pony4 from '/public/images/image2d/3.jpg'
import pony5 from '/public/images/image2d/4.jpg'
import pony6 from '/public/images/image2d/5.jpg'
import pony7 from '/public/images/image2d/6.jpg'
import pony8 from '/public/images/image2d/7.jpg'



export default function gamedevelopmentcompany2dlp() {


    const android = <> <span className='grdiant'> Custom iOS </span> <br></br> App Development
    </>
    const web = <>  <span className='grdiant'>  iPhone </span> <br></br>App Development  </>
    const Flutter = <> <span className='grdiant'>Apple</span> <br></br>Watch Development  </>
    const React = <> <span className='grdiant'>Apple Tv</span> <br></br>App Development  </>
    const Cross = <> <span className='grdiant'>Apple</span>  <br></br>App Designing  </>
    const IOS = <> <span className='grdiant'>Hybird Iphone</span>  <br></br>App Development  </>






    const fine = [

        {

            title: android,
            text: 'Our custom iOS app development solutions got you covered when it comes to developing your iOS app. From the initial idea to the final design and development stages, we provide customized iOS app solutions tailored to your needs.',
        },

        {

            title: web,
            text: <>
                We turn app ideas into reality with fast and efficient iPhone app development services. No idea is too complex or ambitious for us. We help you take your idea from concept to launch in no time.
            </>
        },

        {

            title: Flutter,
            text: <>

                Our team of expert iOS developers creates exceptional Apple Watch apps that flawlessly blend with advanced technology and coding standards. We prioritize maximizing battery efficiency and exceeding user expectations with superb performance.

            </>,
        },

        {

            title: React,
            text: <>

                Our team specializes in developing custom apps for Apple TV with impeccable design and performance. We also offer iPhone compatibility consultations. Let's turn your app ideas into reality!

            </>,
        },

        {

            title: Cross,
            text: <>

                Our team creates custom iPhone apps to streamline workflow processes, improve customer engagement, and enhance their experience with innovative and intuitive designs.

            </>,
        },

        {

            title: IOS,
            text: <>


                Boost your business with our hybrid iPhone app development services. Run your applications seamlessly across platforms to increase productivity and efficiency. Contact us now to learn more.

            </>,
        },


    ]

    const services = 'OUR SERVICES ARE WHERE INNOVATION MEETS PLAY'
    const app = <>  What You May Expect When Committing To Us? </>


    const fontpont = [

        {
            title: '2D Concept Art and Design',
            text: '2D Concept Art and Design is an art form that combines creative design with technical know-how. Our team of experienced artists is well-versed in various techniques, including digital painting, 3D modeling, and animation. From character concept artwork to product designs, environments, and storyboards, we provide complete professional service for our clients.',
            btn1: (
                <>
                    LET'S START
                </>
            ),

        },
        {
            title: 'Single Player Games',
            text: (<> Our team is well versed in various technologies such as C++, Unity, Unreal Engine, HTML5, and more to provide a seamless single-player gaming experience across different platforms. BitsWits guarantee bug-free code, easy navigation, intuitive controls, and perfect performance in our games so players can enjoy their experience without frustration. Whether you're looking for a complex 2D game or an old-school classic side-scroller, our 2D game developers can make it happen. </>),
            btn1: (
                <>
                    LET'S START
                </>
            ),

        },
        {
            title: 'Game App Integration',
            text: (<> Our integration services offer a range of features across platforms, including multiplayer mode, leaderboard integration, in-app purchases, analytics, and more. Our streamlined integration process ensures your game runs smoothly while maintaining high-security standards. Whether it's connecting your game app with existing APIs or creating custom solutions, we guarantee that our solutions are robust and secure. </>),
            btn1: (
                <>
                    LET'S START
                </>
            ),

        },

        {
            title: 'Multiplayer Games',
            text: (<> Whether you're looking to build a complex, engaging multiplayer game from the ground up or optimize an existing project with cutting-edge technology, we have you covered! From first-person shooters and RPGs to strategic board games and party games, we foster multiplayer gaming experiences for businesses to help them make huge bucks. </>),
            btn1: (
                <>
                    LET'S START
                </>
            ),

        },
        {
            title: 'UI/UX Graphics',
            text: (<> Our UI/UX Graphics services greatly enhance the player experience, making it more immersive and enjoyable. We focus on creating engaging visuals through color palette selection, typography choice, and iconography, as well as developing an easy-to-navigate layout to keep your players engaged with the game. </>),
            btn1: (
                <>
                    LET'S START
                </>
            ),

        },
        {
            title: 'Storyboarding',
            text: (<> With our team of expert animators, you can watch your characters come alive and see your story unfold in vivid detail. Our 2D animation and storyboard services allow you to visually represent what is happening in your script or story before it gets animated. This ensures that all elements are in place for a successful storyboard. </>),
            btn1: (
                <>
                    LET'S START
                </>
            ),

        },


    ]


    const [activeTab, setActiveTab] = useState('tab1');
    function handleTabChange(tab) {
        setActiveTab(tab);
        console.log(tab);
    }

    const demand = [

        {
            title: '2D Environment',
            img: pony,
            click1: 'tab1',
            fun: handleTabChange,
            data: activeTab
        },
        {
            title: '3D Environment',
            img: pony1,
            click1: 'tab2',
            fun: handleTabChange,
            data: activeTab
        },
        {
            title: '2D Character Art',
            img: pony2,
            click1: 'tab3',
            fun: handleTabChange,
            data: activeTab
        },
        {
            title: '2D Background Art',
            img: pony3,
            click1: 'tab4',
            fun: handleTabChange,
            data: activeTab
        },
        {
            title: 'UI/UX',
            img: pony4,
            click1: 'tab5',
            fun: handleTabChange,
            data: activeTab
        },
        {
            title: 'Character Design',
            img: pony5,
            click1: 'tab6',
            fun: handleTabChange,
            data: activeTab
        },
        {
            title: 'Casual Art',
            img: pony6,
            click1: 'tab7',
            fun: handleTabChange,
            data: activeTab
        },
        {
            title: 'Slots Games Concept Art',
            img: pony7,
            click1: 'tab8',
            fun: handleTabChange,
            data: activeTab
        },
        {
            title: 'Hidden Objects',
            img: pony8,
            click1: 'tab9',
            fun: handleTabChange,
            data: activeTab
        },

    ]



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
                <title>Professional 2D Game Development Company- Bitswits!</title>
                <meta name="description" content="Take your gaming experience to the next level with our award-winning 2D game developers! We craft innovative games with superior graphics, sounds, and controls." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Professional 2D Game Development Company- Bitswits!" />
                <meta property="og:description" content="Take your gaming experience to the next level with our award-winning 2D game developers! We craft innovative games with superior graphics, sounds, and controls." />
                <meta property="og:url" content="https://bitswits.co/2d-game-development-company/" />
                <meta property="og:site_name" content="Professional 2D Game Development Company- Bitswits!" />
                <link rel="canonical" href="https://bitswits.co/2d-game-development-company/" />
                <meta name="msvalidate.01" content="7BBFFA763CEB48CAC0828E22D44DD12B" />
                <meta name="DC.title" content="2d game development company, 2d game app developers, hire 2d game app developers" />
                <meta name="geo.region" content="US-CA" />
                <meta name="geo.placename" content="Los Angeles" />
                <meta name="geo.position" content="36.701463;-118.755997" />
                <meta name="ICBM" content="36.701463, -118.755997" />
                <meta name="DC.title" content="2d game development company, 2d game app developers, hire 2d game app developers" />
                <meta name="geo.region" content="US-DE" />
                <meta name="geo.placename" content="Dover" />
                <meta name="geo.position" content="38.692045;-75.401331" />
                <meta name="ICBM" content="38.692045, -75.401331" />
                <meta name="DC.title" content="2d game development company, 2d game app developers, hire 2d game app developers" />
                <meta name="geo.region" content="US" />
                <meta name="geo.position" content="39.78373;-100.445882" />
                <meta name="ICBM" content="39.78373, -100.445882" />

            </Head>


            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" />

            <Homebanner
                subtitle='Best In Animation, Graphics, & Design - Your Own'
                title={<>   <h1 className='font60 black fontf font-bold line60 mb-3'>   <span className='grdiant'> 2D Game </span>  Development Company!</h1></>}
                text={<> From classic platformers to immersive RPGs, our 2D games will have your target market addicted in no time. We specialize in crafting highly detailed and interactive worlds, characters, and stories that will capture your imagination and keep your prospects hooked for hours on end. With ultra-realistic visuals and cutting-edge physics, we ensure that your games look and feel as realistic as possible. Whether you're looking for an app, a console game, or something completely different – we are here to help! </>}
                btn1='Consult A Gaming Expert To Begin'
            />


            <Consultancy />

            <Yearsofexpertise
                loop1={<> <Counter stopNumber={500} />+</>}

                looptext11={<> Applications Developed <br></br> and Designed  </>}
                loop2={<> <Counter stopNumber={250} />+ </>}

                looptext22={<> Developers & Engineers <br></br> Under One Roof </>}
                loop3={<> <Counter stopNumber={12} />+ </>}

                looptext33={<> Years in Software <br></br>
                    Development Business </>}
                loop4={<> <Counter stopNumber={92} />% </>}

                looptext44={<> Client Retention </>}

            />
            <section className='campny'>
                <Container>
                    <Row>
                        <Col>
                            <h3 className='f-20 f-700 black t-center'>OUR <span className='grdiant'>SERVICES</span> ARE WHERE INNOVATION MEETS PLAY</h3>
                            <h2 className='f-40 f-700 black t-center mb-5'>What You May Expect <span className='grdiant'>When Committing</span> To Us?</h2>
                        </Col>
                    </Row>
                    <Row className='gy-4'>
                        <Incredible
                            fontpont={fontpont}
                        />
                    </Row>
                </Container>
            </section>

            <Container className='topbottom'>
                <Row>
                    <Col>
                    <h3 className='f-20 f-700 black t-center'>ON-DEMAND</h3>
                    <h2 className='f-40 f-700 black t-center'>Join the Revolution - Play on Any Platform with <span className='grdiant'>BitsWits' 2D Game Development</span> Company</h2>
                    <p className='f-16 f-500 black t-center mb-5'>We provide an optimal gaming experience across multiple platforms by developing games for iOS, Android, Windows, and Mac OS. Our cross-platform approach ensures that your game reaches the broadest possible audience of gamers. We also provide extensive testing and optimization services to ensure seamless performance and compatibility on the target platforms. BitsWits uses high-quality tools such as Unity 2D and HTML5 to develop custom games to ensure maximum device performance. So, get in touch with us today, and let us help you take your gaming venture to the next level!</p>

                    </Col>
                </Row>
                <Row>
                    <Play
                        demand={demand}
                    />
                </Row>
            </Container>


            <Combination />









            <Creativeopportunities />

            <Developer />



            <Publication />

            <Range />

            <Hireus />



        </>
    )
}
