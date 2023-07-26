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


export default function searchengineoptimization() {


    // banner component data

    const heading = <h1 className='font65 black fontf font-bold line60'>Build Your Brand with the Top <span className='grdiant'>Search Engine Optimization</span> Company in US</h1>

    const para = <>

        <ul className='p-0'>
            <li className="font16 fontf font-medium mt-3 black mb-2"> <Image src={mobilearrow} className='img-fluid multi'></Image>Long Term Positioning & Increased Traffic </li>
            <li className="font16 fontf font-medium mt-3 black mb-2"> <Image src={mobilearrow} className='img-fluid multi'></Image>Brand Awareness & Online Reputation </li>
            <li className="font16 fontf font-medium mt-3 black mb-2"> <Image src={mobilearrow} className='img-fluid multi'></Image>Seo Friendly & User Friendly Website </li>
            <li className="font16 fontf font-medium mt-3 black mb-2"> <Image src={mobilearrow} className='img-fluid multi'></Image>Cost Effective & Increased Roi </li>
            <li className="font16 fontf font-medium mt-3 black mb-2"> <Image src={mobilearrow} className='img-fluid multi'></Image>Increased Domain Authority & Page Rank </li>
            <li className="font16 fontf font-medium mt-3 black mb-2"> <Image src={mobilearrow} className='img-fluid multi'></Image>Increased Visibility Among Target Audiences </li>
            <li className="font16 fontf font-medium mt-3 black mb-2"> <Image src={mobilearrow} className='img-fluid multi'></Image>Connect With Motivated Prospects </li>
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

    const swip = <h2 className='font30 black fontf font-bold line40 black'>Drive Tons of Organic Traffic and Boost <span className='displayline grdiant'>Search Engine</span> Rankings With Our SEO Agency</h2>


    const aheadtitle = <h2 className='font30 black fontf font-bold line40 black'>Boost Your Ranking with Our Technical <span className='displayline grdiant'>SEO</span> Service And Flood Your Website with Visitors</h2>


    const ensine = <h2 className='font30 black fontf font-bold line40 black'>BitsWits, The Top <span className='displayline grdiant'>SEO</span> Agency is Your Partner for Comprehensive SEO Solutions!</h2>


    // =================== //

    const swpTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>On-Page Optimization at BitsWits</h3>

    const swpTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Keyword Research and Analysis</h3>

    // =================== //

    const ahdTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Website Structure and Navigation</h3>

    const ahdTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>Website Audit and Optimization</h3>

    // =================== //

    const enshrTtl = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0'>SEO for Target Market and Niches</h3>

    const enshrTtl2 = <h3 className='font18 fontf font-bold mt-1 letterspace black mb-0 displayline'>SEO for All Sorts of Website CMS</h3>



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
                para='Our search engine optimization agency is committed to boosting your website’s organic traffic by implementing proven strategies and tactics. Our SEO experts are skilled in keyword research, on-page optimization and quality content marketing, that attracts valuable visitors who are actively searching for your products and services.'
                subtitle={swpTtl}
                subpara='We focus on optimizing website on-page elements, which include meta tags, headings, and quality content, to make it more SEO friendly. By strategically utilizing the keywords and improving overall site structures, we improve the website’s organic ranking and visibility.'
                subtitle2={swpTtl2}
                subpara2='BitsWits, a leading SEO services provider conducts comprehensive keyword research to identify the relevant and high-value keywords for the market niche. By analyzing search trends and competition, we ensure that your website is optimized to captivate targeted organic traffic and reach the target audience.'
            />



            <Ahead
                title={aheadtitle}
                para='Our technical SEO experts optimize your website’s structure, user-friendliness, and mobile experience. When your website is well-optimized, it sends a strong signal to search engines that it is reliable, relevant, and trustworthy.'
                para2='As a result, search algorithms boost your website’s ranking on search engine results pages, making it more visible to a broader and more engaged audience. Our team fixes and optimizes your website’s technical aspects and ensures your website dominates the search results!'
                subtitle={ahdTtl}
                subpara='Our technical SEO team optimizes your website’s structure and navigation to ensure easy accessibility for both users and search engines. Organizing content, implementing built-in menus, and internal linking helps improve online visibility.'
                subtitle2={ahdTtl2}
                subpara2='We focus on speed optimization, structuring URLs and indexing pages on your website effectively. Our SEO experts ensure that the URL structure is clean, descriptive, and SEO-friendly while keeping in mind that important pages are indexable and unblocked on the website.'
                ahead={aheadimage}
            />



            <Ensure
                foldimg={foldensure}
                title={ensine}
                para='Our SEO managers understand that each business is unique, which is why our SEO team offers personalized search engine optimization services based on thorough analysis and industry insights. Our comprehensive audits and competitor research ensures long-term success and growth.'
                subtitle={enshrTtl}
                subpara='At BitsWits, we recognise that each industry and market is distinct and need a customized strategy to obtain the best outcomes. Whether it’s e-commerce, banking, healthcare, or another business industry—our SEO experts dig deep to find appropriate search terms and rivals in your field, and implement their custom SEO strategy to improve conversion rates and brand visibility that ultimately leads to increased ROI.'
                subtitle2={enshrTtl2}
                subpara2='At BitsWits, the SEO experts optimize websites created using different Content Management Systems (CMS) to meet the particular needs of your platform. No matter if your website is powered by WordPress Shopify or any other platform, we improve the search engine visibility of your website by on-page and offpage, and technical SEO optimization.'
            />


            <OurProject />
            <ClientsThink />
            <Nextproject />
            <Contact />
        </>
    )
}
