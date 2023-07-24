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


export default function keywordresearch() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Hire The Best <span className='grdiant'>Keyword Research</span> Company in US To Dominate Search Results</h1>

    const para = <p className='black fontf font-medium line30'>BitsWits, a top keyword research company, specializes in finding the relevant keywords that drive targeted traffic to your website, and boost visibility on Google and other search engines.</p>

    const para2 = <p className='black fontf font-medium line30'>Our SEO experts provide the best keyword research services by utilizing advanced research tools and industry insights to identify high-value and converting keywords. Our comprehensive keyword analysis and strategic recommendations optimize your website, content, and SEO campaigns for better visibility in search results.</p>


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

    const swip = <h2 className='font30 black fontf font-bold line40 black'>Mastering <span className='displayline grdiant'>Keyword Research</span> Services with Advanced Strategies for Best Results</h2>

    const aheadtitle = <h2 className='font30 black fontf font-bold line40 black'>Drive High Traffic Towards Your Website by Top <span className='displayline grdiant'>Keyword Research</span> Service</h2>


    const ensine = <h2 className='font30 black fontf font-bold line40 black'>Competitor Keyword Analysis with the Top <span className='displayline grdiant'>Keyword Research</span> Agency</h2>


    // =================== //

    const swpTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Increased Online Visibility with Detailed Keyword Research</h3>

    const swpTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Driving High Conversion Rates with Long-Tail Keywords</h3>

    // =================== //

    const ahdTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>High-Value Keywords for Search Engine Optimization</h3>

    const ahdTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Keyword Mapping and Integration </h3>

    // =================== //

    const enshrTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Keyword Gap Analysis</h3>

    const enshrTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>Niche Keyword Opportunities</h3>






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
                para2={para2}
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
                para='Keyword research is a fundamental part of on-page optimization, and our team conducts detailed keyword research using advanced tools and techniques. Our SEO professionals analyze search trends, competition, and user intent to identify valuable keywords for your business. We provide actionable insights to drive targeted traffic to your website and surpass all competitors. '
                subtitle={swpTtl}
                subpara='Our advanced keyword research goes beyond basic inspection by providing a comprehensive understanding of search volumes. Our SEO experts dive deep into data to identify keywords with high search volume and conversion potential to target the specific niche and maximize online visibility.'
                subtitle2={swpTtl2}
                subpara2='SEO professionals at BitsWits, know how to uncover valuable short and long-tail keywords that often have less competition with higher conversion rates. We offer the best keyword research services by identifying targeted phrases according to your business needs to help you capture the target market and attract qualified leads who are likely to convert into customers.'
            />



            <Ahead
                title={aheadtitle}
                para='Our SEO experts provide comprehensive keyword recommendations based on extensive research and analysis, which is customized to your business requirements. These recommendations guide your content creation, on-page optimization, and digital marketing efforts. Fusing the right keywords will help gather a larger target audience and visibility and drive organic growth.'
                subtitle={ahdTtl}
                subpara='Our keyword research services providers focus on identifying high-value keywords that satisfy the user intent and assist in driving significant organic traffic to your website. We ensure maximum results, visibility, and search engine rankings.'
                subtitle2={ahdTtl2}
                subpara2='Our team helps you in effectively integrating recommended keywords into your website’s structure and content. We provide guidance on keyword mapping, ensuring that each page on your website targets the selected keywords strategically, which improves the overall SEO performance.'
                ahead={aheadimage}
            />



            <Ensure
                foldimg={foldensure}
                title={ensine}
                para='At BitsWits, a top keyword research agency, our SEO experts help you stay ahead of the curve by providing valuable insights into their keyword strategies. Our competitor keyword analysis uncovers their high-performing keywords to help identify gaps and outshine your rivals.'
                subtitle={enshrTtl}
                subpara='Our keyword research service providers conduct a detailed keyword gap analysis to identify keywords that your competitors are ranking for. This analysis reveals that untapped keyword opportunities can boost organic visibility, captivate a larger share of the market, and expand the online presence of your business.'
                subtitle2={enshrTtl2}
                subpara2='At BitsWits, our competitive keyword research services help in identifying niche keyword opportunities that may be underestimated by your competitors. Targeting specific niches within the industry attracts high traffic while establishing an authoritative presence.'
            />


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
