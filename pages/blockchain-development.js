import React from 'react'
import Head from 'next/head'
//components
import BlckChainDevBanner from '@/components/BlckChainDevBanner'
import BcDevSolution from '@/components/BcDevSolution'
import BcDevCta1 from '@/components/BcDevCta1'
import TechStack from '@/components/TechStack'
import Industry from '@/components/Industry'
import BcDevCta2 from '@/components/BcDevCta2'
import Expertise from '@/components/Expertise'
import Altruist from '@/components/Altruist'
import BcDevCta3 from '@/components/BcDevCta3'
import Streamlining from '@/components/Streamlining'
import Yudiz from '@/components/Yudiz'
import BcDevCta4 from '@/components/BcDevCta4'
import Process from '@/components/Process'
import Contact from '@/components/Contact'

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
            <Industry />
            <BcDevCta2 />
            <Expertise />
            <Altruist />
            <BcDevCta3 />
            <Streamlining />
            <Yudiz />
            <BcDevCta4 />
            <Process />
            <Contact />
        </>
    )
}
