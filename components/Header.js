import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Header.module.css'
import { Row, Col } from 'react-bootstrap'
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
//images
import logo from '../public/images/icons/logo.png'
import mbllogo from '../public/images/icons/footerlogo.png'
import php from '../public/images/icons/php.png'
import eCom from '../public/images/icons/eCom.png'
import dotnet from '../public/images/icons/dotnet.png'
import crm from '../public/images/icons/crm.png'
import cms from '../public/images/icons/cms.png'
import fullStack from '../public/images/icons/fullStack.png'
import apps from '../public/images/icons/apps.png'
import games from '../public/images/icons/games.png'
import marketing from '../public/images/icons/marketing.png'
import more from '../public/images/icons/more.png'
import company from '../public/images/icons/company.png'
import about from '../public/images/icons/about.png'
import ourbg from '../public/images/icons/ourbg.png'
import web from '../public/images/icons/web.png'
import hosting from '../public/images/icons/hosting.png'
import tailormade from '../public/images/icons/tailormade.png'
import estate from '../public/images/icons/estate.png'
import travel from '../public/images/icons/travel.png'
import b2b from '../public/images/icons/b2b.png'
import b2c from '../public/images/icons/b2c.png'
import health from '../public/images/icons/health.png'
import education from '../public/images/icons/education.png'
import finance from '../public/images/icons/finance.png'
import media from '../public/images/icons/media.png'
import foods from '../public/images/icons/foods.png'
import tickets from '../public/images/icons/tickets.png'
import automotive from '../public/images/icons/automotive.png'
import backarrow from '../public/images/icons/back-arrow.webp'
import music from '../public/images/icons/music.png'
import ride from '../public/images/icons/ride.png'
import bactria from '../public/images/icons/bactria.png'


const Header = () => {


    const opnen = () => {
        window.open('../companyprofile.pdf', '_blank');
    }

    const [isActive, setIsActive] = useState(false);
    const [megamenu1, setMegaMenu1] = useState(false);
    const [megamenu2, setMegaMenu2] = useState(false);
    const [megamenu3, setMegaMenu3] = useState(false);
    const [megamenu4, setMegaMenu4] = useState(false);

    const handleMenu = () => {
        setIsActive((prev) => !prev);
    }

    const handleMegaMenu1 = () => {
        setMegaMenu1((prev) => !prev);
    }

    const handleMegaMenu2 = () => {
        setMegaMenu2((prev) => !prev);
    }

    const handleMegaMenu3 = () => {
        setMegaMenu3((prev) => !prev);
    }

    const handleMegaMenu4 = () => {
        setMegaMenu4((prev) => !prev);
    }

    return (
        <>
            <header className={styles.header}>
                <div className={styles.navLogo}>
                    <Link href="/">
                        <Image alt="bitswits"    className='img-fluid'
                            src={logo}
                        />
                    </Link>
                </div>
                <nav className={styles.navBar}>
                    <ul className={isActive ? `${styles.menu} ${styles.active}` : `${styles.menu}`}>
                        <div className={`${styles.navLogo} ${styles.mblLogo}`}>
                            <Link href="/">
                                <Image alt="bitswits"    className='img-fluid'
                                    src={mbllogo}
                                />
                            </Link>
                        </div>
                        <li className={`${styles.megaList1} ${styles.navList}`} onClick={handleMegaMenu1}>
                            <Link href='#' className={styles.megaLink}>
                                TECHNOLOGIES
                                <FaAngleDown />
                            </Link>
                            <div className={megamenu1 ? `${styles.megaMenu1} ${styles.opnMenu1}` : `${styles.megaMenu1}`}>
                                <div className={styles.backArrow}>
                                    <Image alt="bitswits"   
                                        src={backarrow}
                                        loading="lazy"
                                    />
                                </div>
                                <Row className={styles.megaRow}>
                                    <Col md={6}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits"    className='img-fluid'
                                                        src={php}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>PHP</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={6}>
                                                        <ul className='mb-0 ps-0 mt-2'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Core PHP</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>CakePHP</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Laravel</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>YII</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                    <Col md={6}>
                                                        <ul className='mb-0 ps-0 mt-2'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Zend</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Codeigniter</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>ROR</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits"    className='img-fluid'
                                                        src={eCom}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>E-COMMERCE</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={6}>
                                                        <ul className='mb-0 ps-0 mt-2'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Magento</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Magento 2</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Shopify</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Symfony</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Opencart</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>VirtueMart</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                    <Col md={6}>
                                                        <ul className='mb-0 ps-0 mt-2'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>WooCommerce</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>PrestaShop</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>BigCommerce</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>NopCommerce</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Zencart</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits"    className='img-fluid'
                                                        src={dotnet}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>.NET</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <ul className='mb-0 ps-0 mt-2'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>ASP.NET</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>C#</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Xamarin</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Database Developer</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits"    className='img-fluid'
                                                        src={crm}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>CRM SOLUTIONS</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <ul className='mb-0 ps-0 mt-2'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>MS Dynamics CRM</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Salesforce</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>SugarCRM</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>HubSpot</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits"    className='img-fluid'
                                                        src={cms}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>CMS</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <ul className='mb-0 ps-0 mt-2'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Drupal</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Wordpress</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Joomla</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>SharePoint</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Umbraco</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>DNN</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Craft</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits"    className='img-fluid'
                                                        src={fullStack}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>FULL STACK</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <ul className='mb-0 ps-0 mt-2'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Java</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Angular JS</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Node JS</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>MEAN Stack</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>MongoDB</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>React Native</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className={`${styles.listMain} ${styles.resList}`}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits"    className='img-fluid'
                                                        src={apps}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>MOBILE APPS</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <ul className='mb-0 ps-0 mt-2'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Android</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>iOS</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Hybrid</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits"    className='img-fluid'
                                                        src={games}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>GAMES DEVELOPMENT</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <ul className='mb-0 ps-0 mt-2'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Unity 3D</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Flash Game</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Coco2dx Game</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>iOS Game</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>HTML5 Game</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Android Game</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>React JS Game</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Unreal Game</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits"    className='img-fluid'
                                                        src={marketing}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>MARKETING SERVICES</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <ul className='mb-0 ps-0 mt-2'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>SEO Experts</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className={`${styles.listMain} ${styles.resList}`}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits"    className='img-fluid'
                                                        src={more}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>MORE</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <ul className='mb-0 ps-0 mt-2'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Website Designer</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Python</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Quality Analyst</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </li>
                        <li className={`${styles.megaList2} ${styles.navList}`} onClick={handleMegaMenu2}>
                            <Link href='#' className={styles.megaLink}>
                                OUR COMPANY
                                <FaAngleDown />
                            </Link>
                            <div className={megamenu2 ? `${styles.megaMenu2} ${styles.opnMenu2}` : `${styles.megaMenu2}`}>
                                <div className={styles.backArrow}>
                                    <Image alt="bitswits"   
                                        src={backarrow}
                                        loading="lazy"
                                    />
                                </div>
                                <Row className={styles.megaRow}>
                                    <Col lg={3} md={6}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits"    className='img-fluid'
                                                        src={company}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>COMPANY</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <ul className='mb-0 ps-0 mt-2'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/about-us'>
                                                                    <FaAngleRight />
                                                                    <span>Creative Agency</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Fulfilment</span>
                                                                </Link>
                                                            </li>

                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Facts and Figures</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Video Testimonials</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Reasons to Choose Us</span>
                                                                </Link>
                                                            </li>

                                                            <li>
                                                                <Link onClick={handleMenu} href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Contact Us</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="bitswits"    className='img-fluid'
                                                        src={about}
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>ABOUT US</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <p>Based in California, US, our company is driven by a relentless commitment to client satisfaction, fueled by our passion for technology innovation and business process expertise. Since our inception in 2002, we have experienced remarkable growth year after year, currently boasting a thriving in-house team of over 1,000 employees spread across various international locations.</p>
                                                        <Link className={styles.download} onClick={opnen} href='#' download><FaAngleRight className='white font14' />Download our E-brochure</Link>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listImg}>
                                                <Image alt="bitswits"    className='img-fluid'
                                                    src={ourbg}
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </li>
                        <li className={`${styles.megaList3} ${styles.navList}`} onClick={handleMegaMenu3}>
                            <Link href='#' className={styles.megaLink}>
                                SERVICES
                                <FaAngleDown />
                            </Link>
                            <div className={megamenu3 ? `${styles.megaMenu3} ${styles.opnMenu3}` : `${styles.megaMenu3}`}>
                                <div className={styles.backArrow}>
                                    <Image alt="bitswits"   
                                        src={backarrow}
                                        loading="lazy"
                                    />
                                </div>
                                <Row>
                                    <Col md={9}>
                                        <Row className={styles.megaRow}>
                                            <Col md={4}>
                                                <div className={styles.listMain}>
                                                    <div className={styles.listHeading}>
                                                        <div className={styles.megaIcon}>
                                                            <Image alt="bitswits"    className='img-fluid'
                                                                src={web}
                                                            />
                                                        </div>
                                                        <h5 className='font14 fontf font-semibold mb-0'>WEB</h5>
                                                    </div>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <ul className='mb-0 ps-0 mt-2'>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/web-development'>
                                                                            <FaAngleRight />
                                                                            <span>Web Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/php-development-service'>
                                                                            <FaAngleRight />
                                                                            <span>PHP Development Services</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/crm-solution'>
                                                                            <FaAngleRight />
                                                                            <span>CRM Solutions</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/e-commerence-development'>
                                                                            <FaAngleRight />
                                                                            <span>e-Commerce Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/enterprise-portal-solution'>
                                                                            <FaAngleRight />
                                                                            <span>Enterprise Portal Solution</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/magento-enterprise-solution'>
                                                                            <FaAngleRight />
                                                                            <span>Magento Enterprise Solution</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className={styles.listMain}>
                                                    <div className={styles.listHeading}>
                                                        <div className={styles.megaIcon}>
                                                            <Image alt="bitswits"    className='img-fluid'
                                                                src={apps} />
                                                        </div>
                                                        <h5 className='font14 fontf font-semibold mb-0'>APP</h5>
                                                    </div>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <ul className='mb-0 ps-0 mt-2'>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/progressive-web-app-development'>
                                                                            <FaAngleRight />
                                                                            <span>Progressive Web App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/mobile-app-development'>
                                                                            <FaAngleRight />
                                                                            <span>Mobile App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/internet-of-things'>
                                                                            <FaAngleRight />
                                                                            <span>Internet Of Things</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/enterprise-mobility-solutions'>
                                                                            <FaAngleRight />
                                                                            <span>Enterprise Mobility Solutions</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className={styles.listMain}>
                                                    <div className={styles.listHeading}>
                                                        <div className={styles.megaIcon}>
                                                            <Image alt="bitswits"    className='img-fluid'
                                                                src={marketing}
                                                            />
                                                        </div>
                                                        <h5 className='font14 fontf font-semibold mb-0'>SEO</h5>
                                                    </div>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <ul className='mb-0 ps-0 mt-2'>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/search-engine-optimization'>
                                                                            <FaAngleRight />
                                                                            <span>Search Engine Optimization</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/keyword-research'>
                                                                            <FaAngleRight />
                                                                            <span>Keyword Research</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/link-building'>
                                                                            <FaAngleRight />
                                                                            <span>Link Building</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                                <div className={`${styles.listMain} mt-4`}>
                                                    <div className={styles.listHeading}>
                                                        <div className={styles.megaIcon}>
                                                            <Image alt="bitswits"    className='img-fluid'
                                                                src={cms}
                                                            />
                                                        </div>
                                                        <h5 className='font14 fontf font-semibold mb-0'>DIGITAL MARKETING</h5>
                                                    </div>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <ul className='mb-0 ps-0 mt-2'>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/social-media-optimization'>
                                                                            <FaAngleRight />
                                                                            <span>Social Media Optimization</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/pay-per-click-services'>
                                                                            <FaAngleRight />
                                                                            <span>Pay Per Click Services</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/digital-marketing'>
                                                                            <FaAngleRight />
                                                                            <span>Digital Marketing</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/conversion-rate-optimisation'>
                                                                            <FaAngleRight />
                                                                            <span>Conversion Rate Optimisation</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className={`${styles.listMain} ${styles.resList}`}>
                                                    <div className={styles.listHeading}>
                                                        <div className={styles.megaIcon}>
                                                            <Image alt="bitswits"    className='img-fluid'
                                                                src={games}
                                                            />
                                                        </div>
                                                        <h5 className='font14 fontf font-semibold mb-0'>GAME</h5>
                                                    </div>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <ul className='mb-0 ps-0 mt-2'>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/game-development'>
                                                                            <FaAngleRight />
                                                                            <span>Game Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/2d-art'>
                                                                            <FaAngleRight />
                                                                            <span>2D Art</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/3d-art'>
                                                                            <FaAngleRight />
                                                                            <span>3D Art</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/augmented-reality'>
                                                                            <FaAngleRight />
                                                                            <span>Augmented Reality</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/virtual-reality'>
                                                                            <FaAngleRight />
                                                                            <span>Virtual Reality</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className={styles.listMain}>
                                                    <div className={styles.listHeading}>
                                                        <div className={styles.megaIcon}>
                                                            <Image alt="bitswits"    className='img-fluid'
                                                                src={hosting}
                                                            />
                                                        </div>
                                                        <h5 className='font14 fontf font-semibold mb-0'>BLOCKCHAIN</h5>
                                                    </div>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <ul className='mb-0 ps-0 mt-2'>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href="/blockchain-app-development-company">
                                                                            <FaAngleRight />
                                                                            <span>Blockchain App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href="/decentralized-dapp-development-company">
                                                                            <FaAngleRight />
                                                                            <span>dApp Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href="/nft-game-development-company">
                                                                            <FaAngleRight />
                                                                            <span>NFT Game Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href="/nft-marketplace-development-company">
                                                                            <FaAngleRight />
                                                                            <span>NFT Marketplace Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href="/blockchain-wallet-development-company">
                                                                            <FaAngleRight />
                                                                            <span>Blockchain Wallet Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href="/supply-chain-blockchain-development-company">
                                                                            <FaAngleRight />
                                                                            <span>Supply Chain Blockchain Development</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className={styles.listMain}>
                                                    <div className={styles.listHeading}>
                                                        <div className={styles.megaIcon}>
                                                            <Image alt="bitswits"    className='img-fluid'
                                                                src={cms}
                                                            />
                                                        </div>
                                                        <h5 className='font14 fontf font-semibold mb-0'>Explainer Video</h5>
                                                    </div>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <ul className='mb-0 ps-0 mt-2'>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/2d-cartoon-animation'>
                                                                            <FaAngleRight />
                                                                            <span>2D Cartoon Animation</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/whiteboard-animation'>
                                                                            <FaAngleRight />
                                                                            <span>Whiteboard Animation</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/motion-graphics'>
                                                                            <FaAngleRight />
                                                                            <span>Motion Graphics</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/3d-animation'>
                                                                            <FaAngleRight />
                                                                            <span>3D Animation</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className={styles.listMain}>
                                                    <div className={styles.listHeading}>
                                                        <div className={styles.megaIcon}>
                                                            <Image alt="bitswits"    className='img-fluid'
                                                                src={tailormade}
                                                            />
                                                        </div>
                                                        <h5 className='font14 fontf font-semibold mb-0'>DATA SCIENCE</h5>
                                                    </div>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <ul className='mb-0 ps-0 mt-2'>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/data-science'>
                                                                            <FaAngleRight />
                                                                            <span>DATA SCIENCE</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={3} className='p-md-0'>
                                        <div className={styles.listMain2}>
                                            <div className={styles.listHeading}>
                                                <h5 className='font20 fontf font-semibold mb-0'>INDUSTRIES</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <ul className='mb-0 ps-0 mt-2 pt-1'>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/real-estate'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="bitswits"    className='img-fluid'
                                                                            src={estate}
                                                                        />
                                                                    </div>
                                                                    <span>Real Estate</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/travel-hospitality'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="bitswits"    className='img-fluid'
                                                                            src={travel}
                                                                        />
                                                                    </div>
                                                                    <span>Travel & Hospitality</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/b2b-solutions'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="bitswits"    className='img-fluid'
                                                                            src={b2b}
                                                                        />
                                                                    </div>
                                                                    <span>B2B Solutions</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/b2c-solutions'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="bitswits"    className='img-fluid'
                                                                            src={b2c}
                                                                        />
                                                                    </div>
                                                                    <span>B2C Solutions</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/healthcare'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="bitswits"    className='img-fluid'
                                                                            src={health}
                                                                        />
                                                                    </div>
                                                                    <span>Healthcare</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/education-and-e-learning'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="bitswits"    className='img-fluid'
                                                                            src={education}
                                                                        />
                                                                    </div>
                                                                    <span>Education and E Learning</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/banking-finance'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="bitswits"    className='img-fluid'
                                                                            src={finance}
                                                                        />
                                                                    </div>
                                                                    <span>Banking & Finance</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/startup-solutions'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="bitswits"    className='img-fluid'
                                                                            src={education}
                                                                        />
                                                                    </div>
                                                                    <span>Startup Solutions</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/media-publishing'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="bitswits"    className='img-fluid'
                                                                            src={media}
                                                                        />
                                                                    </div>
                                                                    <span>Media & Publishing</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/food-ordering-solutions'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="bitswits"    className='img-fluid'
                                                                            src={foods}
                                                                        />
                                                                    </div>
                                                                    <span>Food Ordering Solutions</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/ticket-booking-solutions'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="bitswits"    className='img-fluid'
                                                                            src={tickets}
                                                                        />
                                                                    </div>
                                                                    <span>Ticket Booking Solutions</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={handleMenu} href='/automotive-solutions'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="bitswits"    className='img-fluid'
                                                                            src={automotive}
                                                                        />
                                                                    </div>
                                                                    <span>Automotive Solutions</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </li>
                        <li className={`${styles.megaList4} ${styles.navList}`} onClick={handleMegaMenu4}>
                            <Link href='#' className={styles.megaLink}>
                                OUR WORK
                                <FaAngleDown />
                            </Link>
                            <div className={megamenu4 ? `${styles.megaMenu4} ${styles.opnMenu4}` : `${styles.megaMenu4}`}>
                                <div className={styles.backArrow}>
                                    <Image alt="bitswits"   
                                        src={backarrow}
                                        loading="lazy"
                                    />
                                </div>
                                <Row className={styles.megaRow}>
                                    <Col lg={4} md={6}>
                                        <div className={styles.boxSpace}>
                                            <div className={styles.workBox}>
                                                <Image alt="bitswits"   
                                                    src={travel}
                                                    loading="lazy"
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/travel-app-development" onClick={handleMenu}>
                                                        Travel App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        Create Hassle-Free Travel...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={`${styles.workBox}`}>
                                                <Image alt="bitswits"   
                                                    src={estate}
                                                    loading="lazy"
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/real-estate-app-development-solutions" onClick={handleMenu}>
                                                        Real Estate App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        A Real Estate App Instilling...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={styles.workBox}>
                                                <Image alt="bitswits"   
                                                    src={bactria}
                                                    loading="lazy"
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/bacteria-app-development" onClick={handleMenu}>
                                                        Bacteria App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        Bacteria Shield - Cleaning...
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className={styles.boxSpace}>
                                            <div className={styles.workBox}>
                                                <Image alt="bitswits"   
                                                    src={music}
                                                    loading="lazy"
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/music-streaming-app-development" onClick={handleMenu}>
                                                        Sound App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        Developed A Music Streaming...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={`${styles.workBox}`}>
                                                <Image alt="bitswits"   
                                                    src={health}
                                                    loading="lazy"
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/prohealth-application-development" onClick={handleMenu}>
                                                        PROHealth App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        AS Medicare - A Pharmacy...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={styles.workBox}>
                                                <Image alt="bitswits"   
                                                    src={ride}
                                                    loading="lazy"
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/ez-ride" onClick={handleMenu}>
                                                        Rider App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        EZ Ride is a two-sided market...
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className={styles.boxSpace}>
                                            <div className={styles.workBox}>
                                                <Image alt="bitswits"   
                                                    src={foods}
                                                    loading="lazy"
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/food-delivery-app-development" onClick={handleMenu}>
                                                        Food App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        Food Delivery Services That...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={`${styles.workBox}`}></div>
                                            <div className={styles.workBox}>
                                                <div className={`${styles.ourWork} ${styles.cntct}`}>
                                                    <div className={styles.fill}>
                                                        <div>
                                                            <BsFillEnvelopeFill size={20} className={styles.email} />
                                                        </div>
                                                        <div>
                                                            <Link className='font15 font-medium white fontf' href="mailto:info@bitswits.co" onClick={handleMenu}>
                                                                info@bitswits.co
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className={styles.fill}>
                                                        <div>
                                                            <BsFillTelephoneFill size={25} className={styles.email} />
                                                        </div>
                                                        <div>
                                                            <Link className='font15 font-medium white fontf' href="tel:+1 312 379 5987" onClick={handleMenu}>
                                                                +1 312 379 5987
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className={styles.fill}>
                                                        <div>
                                                            <BsFillTelephoneFill size={25} className={styles.email} />
                                                        </div>
                                                        <div>
                                                            <Link className='font15 font-medium white fontf' href="tel:+1 833 500 6007" onClick={handleMenu}>
                                                                +1 833 500 6007
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </li>
                        <li className={`${styles.navList} ${styles.inqBtn}`} onClick={handleMenu}>
                            <Link href='#'>ENQUIRE NOW</Link>
                        </li>
                        <li>
                            <div className={styles.mbInq}>
                                <div className={`${styles.ourWork} ${styles.cntct}`}>
                                    <div className={styles.fill}>
                                        <div>
                                            <BsFillEnvelopeFill size={20} className={styles.email} />
                                        </div>
                                        <div>
                                            <Link className='font15 font-medium white fontf' href="mailto:info@bitswits.co" onClick={handleMenu}>
                                                info@bitswits.co
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={styles.fill}>
                                        <div>
                                            <BsFillTelephoneFill size={25} className={styles.email} />
                                        </div>
                                        <div>
                                            <Link className='font15 font-medium white fontf' href="tel:+1 312 379 5987" onClick={handleMenu}>
                                                +1 312 379 5987
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={styles.fill}>
                                        <div>
                                            <BsFillTelephoneFill size={25} className={styles.email} />
                                        </div>
                                        <div>
                                            <Link className='font15 font-medium white fontf' href="tel:+1 833 500 6007" onClick={handleMenu}>
                                                +1 833 500 6007
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className={styles.navTogle} onClick={handleMenu}>
                        <span className={isActive ? `${styles.line} ${styles.line1}` : `${styles.line}`}></span>
                        <span className={isActive ? `${styles.line} ${styles.line2}` : `${styles.line}`}></span>
                        <span className={isActive ? `${styles.line} ${styles.line3}` : `${styles.line}`}></span>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header