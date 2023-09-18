import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
import Newgamebanner from '@/components/Newgamebanner';
import NewHomeAbout from '@/components/NewHomePageAbout';
import Newsuccess from '@/components/NewMblSuccess';
import NewHomeWhat from '@/components/NewHomeWhat';
import NewHomeHear from '@/components/NewHomeHear';
import NewHomeMaintain from '@/components/NewHomeMaintain';
import Newglobal from '@/components/Newglobal';
import Newslider from '@/components/Newslider';
import Technologieswe from '@/components/Technologieswe';
import Homenextproject from '@/components/Homenextproject';
import Capabilities from '@/components/Capabilities';
import Faqs from '@/components/NewhomeFaqs';
import NewMblBanner from '@/components/NewMblBanner';
import Bulletproofgame from '@/components/Bulletproofgame';
import Targetaudience from '@/components/Targetaudience';
import Newgamemaintain from '@/components/Newgamemaintain';
import Wealth from '@/components/Wealth';
import Genreofgames from '@/components/Genreofgames';
import Engage from '@/components/Engage';

//components
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));


export default function Gameapplicationdevelopment() {




    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>


            <Newgamebanner />
            <NewHomeAbout />
            <Bulletproofgame />
            <Targetaudience />
            <Newgamemaintain />
            <Wealth />
            <Genreofgames/>
            <Engage />




            <Newsuccess />
            <Newglobal />
            <Capabilities/>
            <Newslider />
            <Technologieswe/>
            <Homenextproject/>
            <Faqs />
            


        </>
    )
}