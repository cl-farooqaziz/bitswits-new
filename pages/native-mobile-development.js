import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
//components
import NewMblWhat from '@/components/NewMblWhat';
import NewMblGlobal from '@/components/NewMblGlobal';
import NewMblSlider from '@/components/NewMblSlider';
import NewMblNextProject from '@/components/NewMblNextProject';
import Capabilities from '@/components/Capabilities';
import Faqs from '@/components/NewhomeFaqs';
import Newsuccess from '@/components/NewMblSuccess';
import HybridBanner from '@/components/HybridBanner';
import NewHybridServices from '@/components/NewHybridServices';
import NewHybridWho from '@/components/NewHybridWho';
import NewHybridPortfolio from './NewHybridPortfolio';
import HomeLocation from '@/components/HomeLocation';
import NativeBanner from '@/components/NativeBanner';
import NewNativeServices from '@/components/NewNativeServices';
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));
import NewMblWhy from '@/components/NewMblWhy';
import Technologieswe from '@/components/Technologieswe';
import NewHomeAbout from '@/components/NewHomePageAbout';
import NewHomeGlobal from '@/components/NewHomeGlobal';
import NewHomeSlider from '@/components/NewHomeSlider';

export default function nativeMobile() {

    return (
        <>
            <Head>
                <title>Native Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <NativeBanner />
            <NewHomeAbout />
            <NewNativeServices />
            <Justbuildit />
            <NewHybridWho />
            <NewMblWhat />
            <NewMblWhy />
            <NewHybridPortfolio />
            <Newsuccess />
            <div className='spacingtb1'>
            <Technologieswe />
            </div>
            <NewHomeGlobal />
            <NewHomeSlider />
            <NewMblNextProject />
            <Faqs />
            <HomeLocation />

        </>
    )
}