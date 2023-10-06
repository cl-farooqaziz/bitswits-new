import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
//components
import NewMblWhat from '@/components/NewMblWhat';
import NewMblGlobal from '@/components/NewMblGlobal';
import NewMblSlider from '@/components/NewMblSlider';
import NewMblTechnologiesWe from '@/components/NewMblTechnologiesWe';
import NewMblNextProject from '@/components/NewMblNextProject';
import Capabilities from '@/components/Capabilities';
import Faqs from '@/components/NewhomeFaqs';
import Newsuccess from '@/components/NewMblSuccess';
import FlutterBanner from '@/components/FlutterBanner';
import NewHybridServices from '@/components/NewHybridServices';
import NewHybridWho from '@/components/NewHybridWho';
import NewHybridPortfolio from './NewHybridPortfolio';
import HomeLocation from '@/components/HomeLocation';
import FlutterMaintain from '@/components/FlutterMaintain';
import ReactNativeBanner from '@/components/ReactNativeBanner';
import ReactnativeMaintain from '@/components/ReactnativeMaintain';
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));


export default function ReactNativeMobile() {

    return (
        <>
            <Head>
                <title>React Native Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <ReactNativeBanner />
            <ReactnativeMaintain />
            <NewHybridWho />
            <Justbuildit />
            <NewMblWhat />
            <NewHybridPortfolio />
            <Newsuccess />
            <NewMblTechnologiesWe />
            <NewMblGlobal />
            <NewMblSlider />
            <NewMblNextProject />
            <Faqs />
            <HomeLocation />

        </>
    )
}