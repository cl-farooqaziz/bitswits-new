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
import Image from 'next/image';
import mobilearrow from '../public/images/icons/mobile-arrow.png'

export default function linkbuilding() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Your Trusted <span className='grdiant'>Link Building</span> Company That Drives Exponential Website Traffic Through Strategic Backlinking</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Sending referral traffic </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Brand building </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Building relationships </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Improve Domain & Page Authority </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Improve Keyword ranking </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Improve website traffic </li>
            <li className="font16 fontf font-medium black "> <Image src={mobilearrow} className='img-fluid multi'></Image>Increase Website’s  visibility & performance </li>
        </ul>
    </>




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

    const swip = <h2 className='font30 black fontf font-bold line40 black'>Achieve High-Quality Backlink Acquisition With the Best <span className='displayline grdiant'>Link Building</span> Agency</h2>


    const aheadtitle = <h2 className='font30 black fontf font-bold line40 black'>Building Trust and Authority Through Quality <span className='displayline grdiant'>Backlinks Building</span> Services</h2>


    const ensine = <h2 className='font30 black fontf font-bold line40 black'>Tracking Progress and Optimizing Results by Quality <span className='displayline grdiant'>Link Building</span> Service!</h2>


    // =================== //

    const swpTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Creating Exceptional Content</h3>

    const swpTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Guest Blogging</h3>

    // =================== //

    const ahdTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>High Domain Authority Links</h3>

    const ahdTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Natural and Organic Link Acquisition </h3>

    // =================== //

    const enshrTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Keyword Ranking Monitoring</h3>

    const enshrTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Traffic Analysis and Better Conversion Tracking</h3>



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
                para='Our link building experts focus on improving your website’s visibility and organic rankings through obtaining inbound links from niche based reputable websites. These high-quality links come from websites with strong domain authority, relevant content, and a trustworthy reputation. Our SEO team creates exceptional content marketing strategies to help increase organic traffic and online visibility of your website on search results.'
                subtitle={swpTtl}
                subpara='Producing creative, valuable, and engaging content is the foundation for attracting high-quality backlinks. Our link building experts offer unique, informative, and relevant content that not only satisfies the user search intent but attracts other websites to link to your content as a valuable resource.'
                subtitle2={swpTtl2}
                subpara2='Our back link building experts help create the highest-quality guest articles that provide value to the niche. Our professional link building experts assist you in tapping into the target audience of the host website and build backlinks from relevant sources to your website.'
            />



            <Ahead
                title={aheadtitle}
                para='BitsWits, the top link building SEO company focuses on quality over quantity. Our link building experts acquire backlinks from reputable websites according to your niche, target audience, and business. Securing backlinks from authoritative sources helps establish your website as a reliable resource for search engines and users.'
                subtitle={ahdTtl}
                subpara='By acquiring backlinks from websites with high domain authority, link building experts at BitsWits improve your website’s reputation and authority for all search engines. By accurately identifying and securing backlinks, overall website visibility and ranking is boosted.'
                subtitle2={ahdTtl2}
                subpara2='Prioritizing natural and organic link acquisitions ensure long-term success. Our link building experts follow white-hat SEO practices and focus on safeguarding online presence and earning backlinks by valuable content, thought leadership, and engaging outreach.'
                ahead={aheadimage}
            />



            <Ensure
                foldimg={foldensure}
                title={ensine}
                para='The link building experts at BitsWits understand the importance of measuring the success of your link building efforts by providing transparent reporting and comprehensive analysis to track the progress of link building campaigns. '
                para2='Based on the detailed reports, which contain organic traffic growth, keyword rankings, and other key metrics, we continuously optimize strategies to achieve your desired SEO objectives.'
                subtitle={enshrTtl}
                subpara='Our SEO experts closely monitor the rankings of your targeted keywords to track the progress of your link building efforts. With our advanced tools and tactics, we identify keyword movements and evaluate the impact of backlinks to improve keyword performance for SEO strategies.'
                subtitle2={enshrTtl2}
                subpara2='Analyzing user behavior is a crucial process. By monitoring traffic patterns, user engagement, and conversion rates, our link building experts gain valuable knowledge regarding acquired backlinks to drive qualified traffic and generate tangible business results.'
            />


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
