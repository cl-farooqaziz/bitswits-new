import React from 'react'
import Head from 'next/head'
//components
import BlckChainDevBanner from '@/components/BlckChainDevBanner'
import BcDevSolution from '@/components/BcDevSolution'
import BcDevCta1 from '@/components/BcDevCta1'
import TechStack from '@/components/TechStack'

export default function blockchaindevelopment() {
    return (
        <>
            <Head>
                <title>BitsWits</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <BlckChainDevBanner />
            <BcDevSolution />
            <BcDevCta1 /> 
            <TechStack /> 

        </>
    )
}