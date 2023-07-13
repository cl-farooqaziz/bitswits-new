import Head from 'next/head'
import React, { useState, useEffect } from 'react'; import Link from 'next/link';
import banImg from '../public/images/banner/webBanner.png'
import foldimg from '../public/images/services/webSwipe.svg'
import foldensure from '../public/images/services/webEnsure.svg'
//components
import Banner from '@/components/ServicesBanner'
import Coverage from '@/components/Coverage';
import Swipe from '@/components/Swipe';
import Ahead from '@/components/Ahead';
import Ensure from '@/components/Ensure';
import OurProject from '@/components/OurProject';
import ClientsThink from '@/components/ClientsThink'
import Nextproject from '@/components/Nextproject'
import Contact from '@/components/Contact'
import styles from '@/styles/Coverage.module.css'
import aheadimage from '../public/images/services/webAhead.svg'


export default function nftgamedevelopment() {


    // banner component data

    const heading = <div className='font65 black fontf font-bold line60 mt-5'>Taking Digital Gaming to a Whole New Level with BitsWits, the   <h1 className='grdiant font65 black fontf font-bold line60 displayline'>NFT Game Development Company</h1>!</div>

    const para = <p className='black fontf font-medium line30 mt-3'>BitsWits is a top play-to-earn NFT game development company where our expert NFT game developers specialize in creating amazing virtual worlds where players can collect, trade, and compete with multiple digital assets. We focus on providing exceptional NFT game development services that integrate NFTs into dynamic gameplays that offer players with extraordinary ownerships and value. Get in touch with us today and leave your mark in the virtual world.  </p>


    // coverage component data


    const subtile = <h2 className='font50 black fontf font-bold line60 black'>Our <span className='grdiant'>Mobile App</span> Services</h2>

    const mobile = <div>
        <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
            Mobile App Design
        </h5>
        <div className={styles.servcsList}>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                UI UX Design
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Research & Discovery
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Wireframing & Prototyping
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                iOS + Android Applications
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Post Launch Support
            </Link>
        </div>
    </div>

    const user = <div>
        <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
            User Research
        </h5>
        <div className={styles.servcsList}>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                User Journey & Persona Building
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                User Testing
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Participant Recruitments
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Research Method & Material Development
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Iterative Research
            </Link>
        </div>
    </div>


    const ux = <div>
        <h5 className='font20 fontf font-bold mt-1 letterspace black mb-4'>
            UX Optimization
        </h5>
        <div className={styles.servcsList}>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                User Experience Assessment
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                User & KPIs Data Analysis
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                A/B Testing
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                Feature Experimentation
            </Link>
            <Link href='#' className='font14 fontf font-semibold mt-1 black'>
                UX Iterations
            </Link>
        </div>
    </div>



    // Swipe component data

    const swip = <div className='font30 black fontf font-bold line40 black'>
        Experience the Future of Mobile Gaming Through Our Attractive  <h2 className='font30 black fontf font-bold line40 black displayline grdiant'>NFT Game Development Services</h2>
    </div>

    const aheadtitle = <div className='font30 black fontf font-bold line40 black mb-2'>
        Rise High above the Competition with <h2 className='font30 black fontf font-bold line40 black displayline grdiant'>Play-to-Earn NFT Game Development </h2>
    </div>

    const ensine = <div className='font30 black fontf font-bold line40 black mb-2'>
        Discover the Potential of NFTs with BitsWits, the  <h2 className='font30 black fontf font-bold line40 black displayline grdiant'>Best NFT Game Development Agency!</h2>
    </div>

    // =================== //

    const swpTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Dive Into an Exciting Gaming Experience</h3>

    const swpTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Enhancing Mobile Gaming Experience</h3>

    // =================== //

    const ahdTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Progressive Game Development</h3>

    const ahdTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Cost-Effective Game Development</h3>

    // =================== //

    const enshrTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Low Gas Fees for NFT Games</h3>

    const enshrTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Full-cycle Assistance</h3>

    return (
        <>
            <Head>
                <title>BitsWits</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <Banner
                title={heading}
                para={para}
                bannerimg={banImg}
            />

            <Coverage
                title="Coverage"
                subtitle={subtile}
                mobile={mobile}
                user={user}
                ux={ux}
            />


            <Swipe
                foldimg={foldimg}
                title={swip}
                para='As a top NFT game development company in USA, our team of creative NFT game developers is dedicated towards transforming your mobile gaming experience with our interestingly designed NFT games. We specialize in creating a virtual environment where players can dive into exciting gameplay, collect unique NFTs, and enjoy thrilling adventures. By utilizing a data-driven approach and detailed research, we design attractive NFTs-featured games while keeping the latest design trends in mind. '
                subtitle={swpTtl}
                subpara='With our innovative NFT game development services, we smoothly integrate blockchain technology into mobile games, allowing players to own and trade various digital assets. From stunning visuals to engaging storytelling, our games are created to deliver exceptional gaming experience.'
                subtitle2={swpTtl2}
                subpara2='At BitsWits, our NFT game developers and designers work tirelessly to push the limits and boundaries of mobile gaming. Our attractive interfaces created and designed at the best NFT game development company improve overall user experience and utilize the latest technology stack to create games that entertain the players. '
            />



            <Ahead
                title={aheadtitle}
                para='We develop play-to-earn NFT game development services that position you as a frontrunner in the gaming market. At BitsWits, our team offers complete services from designing the scenes to developing the entire game along with the added services of game testing, post launch support and maintenance. '
                subtitle={ahdTtl}
                subpara='BitsWits excels in progressive NFT game development, which includes constantly improving gameplay, developing new features, and incorporating user input. Our games deliver dynamic experiences and rewarding chances with a play-to-earn approach.'
                subtitle2={ahdTtl2}
                subpara2='In our NFT gaming solutions and products, we focus on both the latest technology and the cost of operations and development, assuring a balanced approach that delivers value without losing efficiency or an amazing gaming experience.'
                ahead={aheadimage}
            />



            <Ensure
                foldimg={foldensure}
                title={ensine}
                para='BitsWits is your trusted NFT games development agency for creating online spaces where you gain access to a world of unlimited potential. Our expert team of NFT game developers combines their passion for gaming with their expertise in blockchain technology to create engaging virtual worlds, unique gameplay mechanics, and smooth incorporation of NFTs.  '
                subtitle={enshrTtl}
                subpara='We leverage cost-effective blockchain transactions to reduce the fees associated with developing games and minting NFTs.'
                subtitle2={enshrTtl2}
                subpara2='We provide development services for NFT game projects, and support from concept creation to post-launch, and revisions as needed.'
            />
            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
