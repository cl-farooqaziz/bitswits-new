import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
//components
import NewMblBanner from '@/components/NewMblBanner';
import NewMblAbout from '@/components/NewMblAbout';
import NewMblWho from '@/components/NewMblWho';
import NewMblWhat from '@/components/NewMblWhat';
import NewHomeHear from '@/components/NewHomeHear';
import NewMblMaintain from '@/components/NewMblMaintain';
import NewMblGlobal from '@/components/NewMblGlobal';
import NewMblSlider from '@/components/NewMblSlider';
import NewMblTechnologiesWe from '@/components/NewMblTechnologiesWe';
import NewMblNextProject from '@/components/NewMblNextProject';
import Capabilities from '@/components/Capabilities';
import Faqs from '@/components/NewhomeFaqs';
import Newsuccess from '@/components/NewMblSuccess';
import NewMblPortFolio from '@/components/NewMblPortFolio';
import NewMblServices from '@/components/NewMblServices';
import GamedevelopmentBanner from '@/components/GamedevelopmentBanner';
import GameAdvantages from '@/components/blockchainadvantages';
import GamingServices from '@/components/GamingServices';
import GameTechnologies from '@/components/GameTechnologies';
import GameCapabilities from '@/components/GameCapabilities';
import Solutions from '../components/Solution';
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));


export default function mobileApplication() {
    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <GamedevelopmentBanner />
            <NewMblAbout />
            <GameAdvantages />  
            <GamingServices  />
            <GameTechnologies />
            <NewMblNextProject />
            {/* <GameCapabilities /> */}
            <Capabilities/>
            {/* <Solutions /> */}
            <Faqs />

        </>
    )
}