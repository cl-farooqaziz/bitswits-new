import Head from 'next/head'
import React from 'react'
//
import NewLpBanner from '@/components/NewLpBanner';
import NewLpForm from '@/components/NewLpForm';
import NewLpPlatform from '@/components/NewLpPlatform';
import NewLpCounter from '@/components/NewLpCounter';
import NewLpExpertise from '@/components/NewLpExpertise';

export default function newLpPage() {
    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <NewLpBanner />
            <NewLpForm />
            <NewLpPlatform />
            <NewLpCounter />
            <NewLpExpertise />
        </>
    )
}


