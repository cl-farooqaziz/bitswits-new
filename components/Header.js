import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Header.module.css'
import { Row, Col } from 'react-bootstrap'
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
//images
import logo from '../public/images/icons/logo.png'
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


const Header = () => {

    const [isActive, setIsActive] = useState(false);
    const [megamenu1, setMegaMenu1] = useState(false);
    const [megamenu2, setMegaMenu2] = useState(false);
    const [megamenu3, setMegaMenu3] = useState(false);

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

    return (
        <>
            <header className={styles.header}>
                <div className={styles.navLogo}>
                    <Link href="/">
                        <Image alt="Bitswits" className='img-fluid'
                            src={logo}

                        />
                    </Link>
                </div>
                <nav className={styles.navBar}>
                    <ul className={isActive ? `${styles.menu} ${styles.active}` : `${styles.menu}`}>
                        <li className={`${styles.megaList1} ${styles.navList}`} onClick={handleMegaMenu1}>
                            <Link href='#' className={styles.megaLink}>
                                TECHNOLOGIES
                                <FaAngleDown />
                            </Link>
                            <div className={megamenu1 ? `${styles.megaMenu1} ${styles.opnMenu1}` : `${styles.megaMenu1}`}>
                                <div className={styles.backArrow}>
                                    <Image alt="Bitswits"

                                        src={backarrow}
                                        loading="lazy"
                                    />
                                </div>
                                <Row className={styles.megaRow}>
                                    <Col md={6}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="Bitswits" className='img-fluid'
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
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Core PHP</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>CakePHP</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Laravel</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>YII</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>

                                                    <Col md={6}>
                                                        <ul className='mb-0 ps-0 mt-2'>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Zend</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Codeigniter</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
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
                                                    <Image alt="Bitswits" className='img-fluid'
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
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Magento</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Magento 2</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Shopify</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Symfony</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Opencart</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>VirtueMart</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>

                                                    <Col md={6}>
                                                        <ul className='mb-0 ps-0 mt-2'>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>WooCommerce</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>PrestaShop</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>BigCommerce</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>NopCommerce</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
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
                                                    <Image alt="Bitswits" className='img-fluid'
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
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>ASP.NET</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>C#</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Xamarin</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
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
                                                    <Image alt="Bitswits" className='img-fluid'
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
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>MS Dynamics CRM</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Salesforce</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>SugarCRM</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
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
                                                    <Image alt="Bitswits" className='img-fluid'
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
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Drupal</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Wordpress</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Joomla</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>SharePoint</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Umbraco</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>DNN</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
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
                                                    <Image alt="Bitswits" className='img-fluid'
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
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Java</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Angular JS</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Node JS</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>MEAN Stack</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>MongoDB</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
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
                                                    <Image alt="Bitswits" className='img-fluid'
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
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Android</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>iOS</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
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
                                                    <Image alt="Bitswits" className='img-fluid'
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
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Unity 3D</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Flash Game</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Coco2dx Game</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>iOS Game</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>HTML5 Game</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Android Game</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>React JS Game</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
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
                                                    <Image alt="Bitswits" className='img-fluid'
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
                                                                <Link href='#'>
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
                                                    <Image alt="Bitswits" className='img-fluid'
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
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Website Designer</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Python</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
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
                                    <Image alt="Bitswits"

                                        src={backarrow}
                                        loading="lazy"
                                    />
                                </div>
                                <Row className={styles.megaRow}>
                                    <Col lg={3} md={6}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image alt="Bitswits" className='img-fluid'
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
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Creative Agency</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Fulfilment</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Get More</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Our Corporate Values</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Facts and Figures</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Video Testimonials</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Reasons to Choose Us</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <FaAngleRight />
                                                                    <span>Partnership and Certifications</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
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
                                                    <Image alt="Bitswits" className='img-fluid'
                                                        src={about}

                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>ABOUT US</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <p>Headquartered in Albourne (near Brighton in the UK) we combine a passion for client satisfaction with technology innovation and business process expertise. We established our business in 2002, now have an in-house team of 1,000+ employees Internationally and we're still growing rapidly year on year.</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listImg}>
                                                <Image alt="Bitswits" className='img-fluid'
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
                                    <Image alt="Bitswits"

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
                                                            <Image alt="Bitswits" className='img-fluid'
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
                                                                        <Link href='/web-development'>
                                                                            <FaAngleRight />
                                                                            <span>Web Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='/php-development-service'>
                                                                            <FaAngleRight />
                                                                            <span>PHP Development Services</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='/crm-solution'>
                                                                            <FaAngleRight />
                                                                            <span>CRM Solutions</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='/e-commerence-development'>
                                                                            <FaAngleRight />
                                                                            <span>e-Commerce Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='/enterprise-portal-solution'>
                                                                            <FaAngleRight />
                                                                            <span>Enterprise Portal Solution</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='/magento-enterprise-solution'>
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
                                                            <Image alt="Bitswits" className='img-fluid'
                                                                src={apps} />
                                                        </div>
                                                        <h5 className='font14 fontf font-semibold mb-0'>APP</h5>
                                                    </div>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <ul className='mb-0 ps-0 mt-2'>
                                                                    <li>
                                                                        <Link href='/progressive-web-app-development'>
                                                                            <FaAngleRight />
                                                                            <span>Progressive Web App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='/mobile-app-development'>
                                                                            <FaAngleRight />
                                                                            <span>Mobile App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='/internet-of-things'>
                                                                            <FaAngleRight />
                                                                            <span>Internet Of Things</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='/enterprise-mobility-solutions'>
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
                                                            <Image alt="Bitswits" className='img-fluid'
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
                                                                        <Link href='/search-engine-optimization'>
                                                                            <FaAngleRight />
                                                                            <span>Search Engine Optimization</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='/keyword-research'>
                                                                            <FaAngleRight />
                                                                            <span>Keyword Research</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='/link-building'>
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
                                                            <Image alt="Bitswits" className='img-fluid'
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
                                                                        <Link href='/social-media-optimization'>
                                                                            <FaAngleRight />
                                                                            <span>Social Media Optimization</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='/pay-per-click-services'>
                                                                            <FaAngleRight />
                                                                            <span>Pay Per Click Services</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='/digital-marketing'>
                                                                            <FaAngleRight />
                                                                            <span>Digital Marketing</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='/conversion-rate-optimisation'>
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
                                                            <Image alt="Bitswits" className='img-fluid'
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
                                                                        <Link href='/game-development'>
                                                                            <FaAngleRight />
                                                                            <span>Game Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='/2d-art'>
                                                                            <FaAngleRight />
                                                                            <span>2D Art</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='/3d-art'>
                                                                            <FaAngleRight />
                                                                            <span>3D Art</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='/augmented-reality'>
                                                                            <FaAngleRight />
                                                                            <span>Augmented Reality</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='/virtual-reality'>
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
                                                            <Image alt="Bitswits" className='img-fluid'
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
                                                                        <Link href="/blockchain-app-development"> 
                                                                            <FaAngleRight />
                                                                            <span>Blockchain App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li><Link href="/dapp-development"> <FaAngleRight /><span>dApp Development</span></Link></li>
                                                                    <li><Link href="/nft-marketplace-development"> <FaAngleRight /><span>NFT Marketplace Development</span></Link></li>
                                                                    <li><Link href="/blockchain-wallet-development"> <FaAngleRight /><span>Blockchain Wallet Development</span></Link></li>
                                                                    <li><Link href="/supply-chain-blockchain-development"> <FaAngleRight /><span>Supply Chain Blockchain Development</span></Link></li>

                                                                  
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
                                                            <Image alt="Bitswits" className='img-fluid'
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
                                                                        <Link href='/2d-cartoon-animation'>
                                                                            <FaAngleRight />
                                                                            <span>2D Cartoon Animation</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='/whiteboard-animation'>
                                                                            <FaAngleRight />
                                                                            <span>Whiteboard Animation</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='/motion-graphics'>
                                                                            <FaAngleRight />
                                                                            <span>Motion Graphics</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='/3d-animation'>
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
                                                            <Image alt="Bitswits" className='img-fluid'
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
                                                                        <Link href='/data-science'>
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
                                                                <Link href='#'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="Bitswits" className='img-fluid'
                                                                            src={estate}

                                                                        />
                                                                    </div>
                                                                    <span>Real Estate</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="Bitswits" className='img-fluid'
                                                                            src={travel}

                                                                        />
                                                                    </div>
                                                                    <span>Travel & Hospitality</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="Bitswits" className='img-fluid'
                                                                            src={b2b}

                                                                        />
                                                                    </div>
                                                                    <span>B2B Solutions</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="Bitswits" className='img-fluid'
                                                                            src={b2c}

                                                                        />
                                                                    </div>
                                                                    <span>B2C Solutions</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="Bitswits" className='img-fluid'
                                                                            src={health}

                                                                        />
                                                                    </div>
                                                                    <span>Healthcare</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="Bitswits" className='img-fluid'
                                                                            src={education}

                                                                        />
                                                                    </div>
                                                                    <span>Education and E Learning</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="Bitswits" className='img-fluid'
                                                                            src={finance}

                                                                        />
                                                                    </div>
                                                                    <span>Banking & Finance</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="Bitswits" className='img-fluid'
                                                                            src={education}

                                                                        />
                                                                    </div>
                                                                    <span>Startup Solutions</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="Bitswits" className='img-fluid'
                                                                            src={media}

                                                                        />
                                                                    </div>
                                                                    <span>Media & Publishing</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="Bitswits" className='img-fluid'
                                                                            src={foods}

                                                                        />
                                                                    </div>
                                                                    <span>Food Ordering Solutions</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="Bitswits" className='img-fluid'
                                                                            src={tickets}

                                                                        />
                                                                    </div>
                                                                    <span>Ticket Booking Solutions</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='#'>
                                                                    <div className={styles.megaIcon}>
                                                                        <Image alt="Bitswits" className='img-fluid'
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
                        <li className={styles.navList} onClick={handleMenu}>
                            <Link href='#'>OUR WORK</Link>
                        </li>
                        <li className={`${styles.navList} ${styles.inqBtn}`} onClick={handleMenu}>
                            <Link href='#'>ENQUIRE NOW</Link>
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