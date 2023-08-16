import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'
import Homebanner from '@/components/Homebanner'
import Publication from '@/components/Publication'
import Range from '@/components/Range'
import Hireus from '@/components/Hireus'
import Consultancy from '@/components/Consultancy'
import Creativeopportunities from '@/components/Creativeopportunities'
import Developer from '@/components/Developer'
import Counter from '@/components/Counter';
import Yearsofexpertise from '@/components/Yearsofexpertise';
import Incredible from '@/components/Incredible';
import Play from '@/components/Play';
import Tabplays from '@/components/Tabplays';
import Combination from '@/components/Combination';
import Tribute from '@/components/Tribute';
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

import pic1 from '/public/images/super/1.png'
import pic2 from '/public/images/super/2.png'
import pic3 from '/public/images/super/3.png'
import pic4 from '/public/images/super/4.png'
import pic5 from '/public/images/super/5.png'
import engagement from '/public/images/step/4.png'


export default function gameappdevelopmentcompanylp() {


    const incredible = [


        {
            title: 'IOS 2D Game Development',
            text: 'We offer top-notch iOS 2D game development services that combine top-of-the-line technology and creative designs. BitsWits is a master at creating visually compelling games with captivating storylines, vibrant characters, and intense levels. From conceptualization to design and launch, our team ensures you get a complete gaming experience that stands out from the crowd.',
            btn1: (
                <>
                    Consult A Gaming Expert To Begin
                </>
            ),

        },
        {
            title: 'Android 2D Game Development',
            text: 'BitsWits is the go-to destination for all your Android 2D game development needs. From creating solid and user-friendly architecture to stunning visuals and fast loading times, we ensure the outcome is exceptional. With our expertise in Java language and open-source platforms like Unity 2D & Unreal Engine, we provide high-end services for game development, design & testing.',
            btn1: (
                <>
                    Consult A Gaming Expert To Begin
                </>
            ),

        },

        {
            title: '2D Games For Consoles And PCs',
            text: 'BitsWits provides the best 2D games for PCs and consoles. With our expansive library of titles, you can get your hands on classic console and arcade games and explore new worlds full of adventure, excitement, and challenge. We create intricate storylines with captivating characters that draw players in from start to finish. We also work closely with our partners to develop world-class titles for platforms such as Xbox, PlayStation, Nintendo Switch, and Windows PC.',
            btn1: (
                <>
                    Consult A Gaming Expert To Begin
                </>
            ),

        },



    ]


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


    const [activeTab1, setActiveTab1] = useState('tab');
    function handleTabChange1(tab1) {
        setActiveTab1(tab1);
    }


    const demandpont = [

        {
            title1: '3D Unity Games',
            text: (<> We work with Unity 3D technology to foster unforgettable gaming experiences that push the boundaries of what's possible. Whether you want an action-packed shooter or a more peaceful puzzle title, we can ensure your game is a success and tends to become a revenue-generating machine!  </>),
            click2: 'tab',
            fun1: handleTabChange1,
            data1: activeTab1,




        },
        {
            title1: 'VR game development',
            text: (<> Producing immersive and mind-blowing virtual reality experiences for gamers and businesses alike. Our games are designed with the player's experience in mind and feature intuitive controls, immersive soundscapes, and realistic visuals that transport players into another world. Get ready to hook your gamers and urge them to return for more! </>),
            click2: 'tab1',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: '3D Game Development',
            text: (<> BitsWits masters the art of creating stunning 3D games, harnessing the power of cutting-edge technology and state-of-the-art tools. We know that a successful 3D game requires more than just great visuals – it's also about a compelling gameplay experience. Hence, we ensure games that are balanced, entertaining, and mesmerizing for players of all ages! Believe it or not, we are the perfect place to get your next gaming project off the ground! </>),
            click2: 'tab2',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'Cross-platform Game Development',
            text: (<> BitsWits capitalizes on the latest technologies to develop games that look and run seamlessly on all devices and gadgets. We share the experience in a slew of genres, i.e., casual, RPG, FPS, and more. Hire us to get a game that serves as the ticket to reaching a global audience! </>),
            click2: 'tab3',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'AR Game Development',
            text: (<>BitsWits helps you unlock a world of dazzling possibilities and experience the ultimate gaming entertainment with its sheer expertise in building AR games. With cutting-edge technologies such as 3D scanning, game engine creation, and cloud-based storage, we provide innovative solutions built to stand the test of time!</>),
            click2: 'tab4',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'MR Game Development',
            text: (<> BitsWits create technology-advanced VR games using the latest 3D graphics, motion capture systems, and robust gaming engines. From intense battles, realistic racing simulators, exciting open-world exploration, and highly interactive first-person shooters to interactive puzzles, there is nothing our gaming maestros don't excel at. Time to leave your gamers gasping for more; after all, this is what we always ensure! </>),
            click2: 'tab5',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'Unreal Game Development',
            text: (<>

                Unleashing the potential of Unreal Engine Technology, BitsWits create games that push the boundaries of what's possible in gaming and transport players into new worlds with breathtaking visuals and engaging gameplay. Let your imagination run wild with the one-of-a-kind gaming studio, BitsWits!!!

            </>),
            click2: 'tab6',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'Buildbox Game Development',
            text: (<>

                BitsWits cashes in on the Buildbox platform and creates beautiful 3D worlds, physics-based levels, mind-bending puzzles, heart-pumping action games, side-scrolling runners, and whatnot. Tap into the power of this ground-breaking space with our world-class game developers, and let your rivals be knocked out of the competition!

            </>),
            click2: 'tab7',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
       



    ]




    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="UTF-8" />
                <title>Committed Game App Development Company - Bitswits!</title>
                <meta name="description" content="From 2D to 3D, our game developers at Bitswits have the expertise to create stunning visuals that will leave a lasting impression on players." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Committed Game App Development Company - Bitswits!" />
                <meta property="og:description" content="From 2D to 3D, our game developers at Bitswits have the expertise to create stunning visuals that will leave a lasting impression on players." />
                <meta property="og:url" content="https://www.bitswits.co/game-app-development-company/" />
                <meta property="og:site_name" content="Committed Game App Development Company - Bitswits!" />
                <link rel="canonical" href="https://www.bitswits.co/game-app-development-company/" />
                <meta name="msvalidate.01" content="7BBFFA763CEB48CAC0828E22D44DD12B" />
                <meta name="DC.title" content="game development company, game developers, game design company" />
                <meta name="geo.region" content="US-CA" />
                <meta name="geo.placename" content="Los Angeles" />
                <meta name="geo.position" content="36.701463;-118.755997" />
                <meta name="ICBM" content="36.701463, -118.755997" />
                <meta name="DC.title" content="game development company, game developers, game design company" />
                <meta name="geo.region" content="US-DE" />
                <meta name="geo.placename" content="Dover" />
                <meta name="geo.position" content="38.692045;-75.401331" />
                <meta name="ICBM" content="38.692045, -75.401331" />
                <meta name="DC.title" content="game development company, game developers, game design company" />
                <meta name="geo.region" content="US" />
                <meta name="geo.position" content="39.78373;-100.445882" />
                <meta name="ICBM" content="39.78373, -100.445882" />

            </Head>


            <Homebanner
                subtitle='AWARDED #1 GAME APP DEVELOPMENT COMPANY'
                title={<>   <h1 className='font60 black fontf font-bold line60 mb-3'> Experience The <span className='grdiant'>Roller Coaster Of The Gaming World</span> With Us!  </h1></>}

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


            <Creativeopportunities

                subtitle='BULLET-PROOF GAME DEVELOPMENT ACTION PLAN'
                title={<> <span className='grdiant'>Custom Development Roadmap For Games</span> That Brings Fame </>}
                eng={engagement}
                tit1='Ideation'
                text1={<> We get our creative juices flowing by brainstorming ideas and concepts for your game. We work together to figure out what kind of game you want to create, the story behind it, and how you want players to interact with it </>}
                btn1='Lets Start'

                tit2='Design'
                text2={<> We create a blueprint for your new game. This follows through designing all elements, from characters and levels to user interface features and environment settings. We ponder how each part fits together to work well in harmony </>}
                btn2='Lets Start'

                tit3='Development'
                text3={<>  The development phase is where the real magic happens. Our experienced developers will bring your project to life by coding it and creating the graphics that you have designed </>}
                btn3='Lets Start'

                tit4='Testing'
                text4={<>  Before launching your game, we ensure it works properly by testing it thoroughly. This includes running the game on different platforms and devices to ensure everything runs smoothly. </>}
                btn4='Lets Start'

                tit5='Finalization'
                text5={<>  Once we have tested your game, it's time to finalize by adding any last-minute features or tweaks we think are necessary. Also, now's the perfect time to start marketing your game! Let's get people excited about it before launch day, so they can't wait to play. </>}
                btn5='Lets Start'

                tit6='Launch'
                text6={<>   Now that your game is finished and tested, it's time to let the world know about it. Finally, launch your game and watch as people flock to play it! </>}
                btn6='Lets Start'



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


            <Container className='campny'>
                <Row>
                    <Col xl={12} className='mb-3'>
                        <h3 className='f-20 f-700 black t-center'>THE WORK WE UNDERTAKE</h3>
                        <h2 className='f-40 f-700 black t-center'>The Genres Of Games We Develop</h2>
                        <p className='f-16 f-700 black t-center'>We are famous for creating immersive game experiences with engaging storylines, stunning visuals, and innovative gameplay mechanics.
                            Here's an exciting rundown of what we bring to the table…</p>

                    </Col>
                    <Col xl={12}>
                        <Tabplays
                            demand1={demandpont}
                        />
                    </Col>
                </Row>
            </Container>


            <Container className='campny'>
                <Row>

                    <Incredible
                        fontpont={incredible}
                    />

                </Row>
            </Container>





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




            <Combination
                subtitle={<> THE  <span className='grdiant'>BEST GAME DEVELOPER</span> IN THE TOWN </>}
                title={<>   The Future Of <span className='grdiant'>2D Games</span> Is Here <br></br> We're Leading The Charge! </>}
                text='  Our 2D game developers use a combination of vibrant colors, intuitive controls, and engaging storylines to create something truly unique and always captivating. Our 2D game development services include concept creation, level design, character design, animation, asset integration, dynamic UI/UX design, programming, and debugging. Our custom 2D game engine provides hours of high-quality entertainment for those who take their gaming business seriously. With us, your gaming experience is guaranteed to be the best!'
                btn='Consult A Gaming Expert To Begin'

            />




            <Developer
                subtitle={<>  Compelling Reasons To Enlist Our <br></br> <span className='grdiant'>2D  Game Development</span> Company </>}
                title={<>   BitsWits shares a wealth of experience developing cutting-edge, engaging 2D games to help you
                    knock out your competitors, capture customers' attention and increase your revenues. From
                    concept design to programming, testing, and deployment of your custom-made 2D game, we offer
                    comprehensive services that guarantee success in the world of 2D gaming. With our expertise, you
                    can ensure your 2D game will be one of the best in the market. </>}
                pic1={pic1}
                tit1='Customized Solutions'
                text1={<> BitsWits provides tailor-made 2D games development services tailored to each client's needs and requirements. This helps create an engaging gaming experience for the user, which can be further modified according to their preferences. </>}


                pic2={pic2}
                tit2='Innovative Solutions'
                text2={<> BitsWits is always looking for new and innovative ways to develop 2D games that provide a unique and immersive gaming experience. We use the latest technologies and techniques to ensure that the users enjoy the best gaming experience. </>}

                pic3={pic3}
                tit3='Experienced Professionals'
                text3={<> The team at BitsWits consists of experienced professionals with years of experience in 2D game development. This ensures that the games developed are efficient and bug-free, providing a fantastic gaming experience to the users. </>}


                pic4={pic4}
                tit4='Exclusive Client Services'
                text4={<> We are also proud to offer exclusive client services, including game beta testing and post-release support. We guarantee a smooth launch for your game and ensure your players have the best experience possible. </>}


                pic5={pic5}



            />






            <Tribute
                subtitle='GAME DEVELOPMENT'
                title='Past Projects Are A Glorious Tribute To Our Unwavering Devotion to Quality and Innovation!'
                text={<> Whether you're a fan of classic arcade games, modern blockbusters, or quirky indie titles, our portfolio has something for everyone. Dive into our past projects and discover why we're one of the industry's most sought-after 2D game developers. </>}
                video='/images/game2dvideo/video1.mp4'
            />

            <Publication />

            <Range />

            <Hireus />



        </>
    )
}
