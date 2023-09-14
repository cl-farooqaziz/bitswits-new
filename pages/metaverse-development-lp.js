import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/blockchain/Home.module.css'
import Logoslide from '../components/blockchain/LogoSlide'
import typeofbooks from '@/public/blockchain/images/logo-1.png';
import LeftContent from '@/components/metaverse/LeftContent';
import Contact from '@/components/Contact';
import Banners from '@/components/metaverse/MetaverseBanner';
import Metaverse from '@/components/metaverse/Metaverse';
import MetaWork from '@/components/metaverse/MetaWork';
import MetaBussiness from '@/components/metaverse/MetaBussiness';
import MetaGen from '@/components/metaverse/MetaGen';
import MetaContact from '../components/metaverse/MetaContact';
import MetaDevelopment from '@/components/metaverse/MetaverseDevelopment';
import MetaCreate from '@/components/metaverse/MetaCreate';


export default function Home() {

    const text = <span>Metaverse is the futuristic technology of the decentralized web which will revolutionise our future. It is one such advanced space that encompasses all the sophisticated technologies to offer one-of-a-kind immersive experiences to the users.</span>;
    const subtext = <span>
        Entrepreneurs and businesses around the globe are excessively investing in metaverse development to scale their growth. Metaverse opens a bundle of new opportunities for businesses to upgrade their products and services and enhance customer experience.
    </span>;
    const subtext2 = <span>Being the forerunners of metaverse development services, we build engaging and appealing metaverse apps that fulfil your business requirements. Create your own metaverse backed by blockchain features like transparency, security, privacy, and scalability to gain a competitive edge in the industry.</span>;
    const subtext3 = <span>
        Join hands with the best metaverse development company to create metaverse apps laced with high-definition 3D elements, interactive tools, NFTs and an attractive virtual environment.</span>

    const title = <span className='f32 fw600'>Unlock Business Growth Opportunities
        with Our Metaverse Development
        Services </span>;

    const hireSubTile = <span className='f15 '>We utilize the full potential and intrinsic features of the Unreal Engine to integrate advanced functionalities into your metaverse platform.

    </span>

    const revTile11 = <span className='f40 fw700'> See Our Work </span>
    const revpara = <span className='f16'>An Insight Into our portfolio of successfully delivered metaverse projects across diverse verticals.
    </span>


    const NextTtitle1 = <span className='f50 fw700 text-center'> <span className='grdiant'>Building Your Bussiness</span>Digital Universe:
        Our Metaverse Development Services</span>
    const NextPara = <span>We help you revolutionize your business’s digital presence with premium metaverse developmentsolutions. Get on a call with our experts to discuss your metaverse development requirements.</span>


    const NextTtitle2 = <span className='f50 fw700'> Let’s Build <span className='grdiant'>A Secure,</span>  Transparent, <span className=''>And</span>  Decentralized <span className='grdiant'> Future <br /> Together</span></span>
    // const Nextsub2 = <span className=''> Next Generational Blockchain Solution </span>
    const NextPara2 = <span>Get in touch with our blockchain experts to discuss your project <br /> requirements and get a free quote.</span>
    const Image = "../public/images/poster.png";

    const exTitle = <span className='f50 fw700'>Our <span className='f50 fw700'>Expertise </span> In <span className='grdiant'>Blockchain Development</span> Platforms</span>
    const exPara = <span>Our in-depth knowledge and experience in major blockchain platforms and protocols empowers us to deliver best blockchain solutions and of standard quality.</span>


    const Metasub = <span className='f40 font-medium '>Shape The Future Of Your Business & Connect With Your Audience On A <span className='grdiant font-extrabold'>Virtual Platform</span> With Our Metaverse Development Services
    </span>
    const MetaPara = <span>Get in touch with our blockchain experts to discuss your project requirements and get a free quote.</span>

    const metaHeading = <span className='font55 font-bold'>Transforming Industries With
        Our <span className='grdiant'>Metaverse Development</span> Services</span>

    const metaPara = <span className='font15'>We help you revolutionize your business’s digital presence with premium metaverse developmentsolutions. Get on a call with our experts to discuss your metaverse development requirements.</span>

    const createSub = <span className='font40 font-medium'>Looking To Create A Cutting-Edge 3D Virtual Experience?</span>
    const createPara = <span className='font15'>Get in touch with our blockchain experts to discuss your project requirements and get a free quote.</span>

    return (
        <>
            <Head>
                <title>Metaverse App</title>
                <meta name="description" content="Generated by BlockChain App" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>
            <main className={styles.main}>

                <Banners />

                <Logoslide />

                <LeftContent
                    title={title}
                    text={text}
                    subtext={subtext}
                    subtext2={subtext2}
                    subtext3={subtext3}
                    number="1-844-400-0025"
                    discuss="Hire Blockchain Developer"
                    image={typeofbooks}
                    whychooseclass="marketyourbook"
                />

                <Metaverse
                    hireSubTile={hireSubTile}
                />

                <MetaWork
                    revTile1={revTile11}
                    revpara={revpara}
                />

                <MetaBussiness
                    nextTtitle1={NextTtitle1}
                />

                <MetaGen
                    Metasub={Metasub}
                    MetaPara={MetaPara}
                    poster='true'
                    poster1=''
                />

                <MetaDevelopment
                    metaHeading={metaHeading}
                    metaPara={metaPara}
                />

                <MetaCreate
                    createSub={createSub}
                    createPara={createPara}
                    poster='true'
                    poster1=''
                />

                <Contact
                    newBg="newBg"
                />

            </main>
        </>
    )
}
