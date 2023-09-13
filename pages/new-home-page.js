import Head from 'next/head'
import React from 'react';
import dynamic from 'next/dynamic';
import NewHomeBanner from '@/components/NewHomeBanner2';
import NewHomeAbout from '@/components/NewHomePageAbout';
import NewHomeWho from '@/components/NewHomeWho';
import NewHomeWhat from '@/components/NewHomeWhat';
import NewHomeHear from '@/components/NewHomeHear';
import NewHomeMaintain from '@/components/NewHomeMaintain';
import Newglobal from '@/components/Newglobal';
import Newslider from '@/components/Newslider';
//components
const Justbuildit = dynamic(() => import('@/components/Justbuildit'));


export default function Home() {




    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>


            <NewHomeBanner />
            <NewHomeAbout />
            <NewHomeWho />
            <NewHomeWhat />
            <Justbuildit />
            <NewHomeHear/>
            <NewHomeMaintain/>
            <Newglobal />
            <Newslider />
            


        </>
    )
}
