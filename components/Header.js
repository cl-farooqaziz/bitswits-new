import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Header.module.css'
import { Row, Col } from 'react-bootstrap'
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
//images
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

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.navBar}>
                    <ul className={styles.menu}>
                        <li className={`${styles.megaList1} ${styles.active}`}>
                            <Link href='#'>TECHNOLOGIES
                                <FaAngleDown />
                            </Link>
                            <div className={styles.megaMenu1}>
                                <Row className={styles.megaRow}>
                                    <Col lg={6}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image className='img-fluid'
                                                        src={php}
                                                        alt='bitswits'
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>PHP</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col lg={6}>
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

                                                    <Col lg={6}>
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
                                    <Col lg={6}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image className='img-fluid'
                                                        src={eCom}
                                                        alt='bitswits'
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>E-COMMERCE</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col lg={6}>
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

                                                    <Col lg={6}>
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
                                    <Col lg={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image className='img-fluid'
                                                        src={dotnet}
                                                        alt='bitswits'
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>.NET</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col lg={12}>
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
                                    <Col lg={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image className='img-fluid'
                                                        src={crm}
                                                        alt='bitswits'
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>CRM SOLUTIONS</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col lg={12}>
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
                                    <Col lg={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image className='img-fluid'
                                                        src={cms}
                                                        alt='bitswits'
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>CMS</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col lg={12}>
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
                                    <Col lg={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image className='img-fluid'
                                                        src={fullStack}
                                                        alt='bitswits'
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>FULL STACK</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col lg={12}>
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
                                    <Col lg={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image className='img-fluid'
                                                        src={apps}
                                                        alt='bitswits'
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>MOBILE APPS</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col lg={12}>
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
                                    <Col lg={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image className='img-fluid'
                                                        src={games}
                                                        alt='bitswits'
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>GAMES DEVELOPMENT</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col lg={12}>
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
                                    <Col lg={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image className='img-fluid'
                                                        src={marketing}
                                                        alt='bitswits'
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>MARKETING SERVICES</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col lg={12}>
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
                                    <Col lg={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image className='img-fluid'
                                                        src={more}
                                                        alt='bitswits'
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>MORE</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col lg={12}>
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
                        <li>
                            <Link href='#'>
                                OUR COMPANY
                                <FaAngleDown />
                            </Link>
                            <div className={styles.megaMenu2}>
                                <Row className={styles.megaRow}>
                                    <Col lg={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image className='img-fluid'
                                                        src={company}
                                                        alt='bitswits'
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>COMPANY</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col lg={12}>
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
                                    <Col lg={3}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image className='img-fluid'
                                                        src={about}
                                                        alt='bitswits'
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>PHP</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col lg={12}>
                                                        <p>Headquartered in Albourne (near Brighton in the UK) we combine a passion for client satisfaction with technology innovation and business process expertise. We established our business in 2002, now have an in-house team of 1,000+ employees Internationally and we're still growing rapidly year on year.</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listImg}>
                                                <Image className='img-fluid'
                                                    src={ourbg}
                                                    alt='bitswits'
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </li>
                        <li>
                            <Link href='#'>
                                SERVICES
                                <FaAngleDown />
                            </Link>
                            <div className={styles.megaMenu3}>
                                <Row>
                                    <Col lg={9}>
                                        <Row className={styles.megaRow}>
                                            <Col lg={4}>
                                                <div className={styles.listMain}>
                                                    <div className={styles.listHeading}>
                                                        <div className={styles.megaIcon}>
                                                            <Image className='img-fluid'
                                                                src={web}
                                                                alt='bitswits'
                                                            />
                                                        </div>
                                                        <h5 className='font14 fontf font-semibold mb-0'>WEB</h5>
                                                    </div>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col lg={12}>
                                                                <ul className='mb-0 ps-0 mt-2'>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>Web Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>PHP Development Services</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>CRM Solutions</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>e-Commerce Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>Enterprise Portal Solution</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'>
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
                                            <Col lg={4}>
                                                <div className={styles.listMain}>
                                                    <div className={styles.listHeading}>
                                                        <div className={styles.megaIcon}>
                                                            <Image className='img-fluid'
                                                                src={apps}
                                                                alt='bitswits'
                                                            />
                                                        </div>
                                                        <h5 className='font14 fontf font-semibold mb-0'>APP</h5>
                                                    </div>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col lg={12}>
                                                                <ul className='mb-0 ps-0 mt-2'>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>Progressive Web App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>Mobile App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>Internet Of Things</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'>
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
                                            <Col lg={4}>
                                                <div className={styles.listMain}>
                                                    <div className={styles.listHeading}>
                                                        <div className={styles.megaIcon}>
                                                            <Image className='img-fluid'
                                                                src={marketing}
                                                                alt='bitswits'
                                                            />
                                                        </div>
                                                        <h5 className='font14 fontf font-semibold mb-0'>SEO</h5>
                                                    </div>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col lg={12}>
                                                                <ul className='mb-0 ps-0 mt-2'>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>Search Engine Optimization</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>Keyword Research</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>Link Building</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className={styles.listMain}>
                                                    <div className={styles.listHeading}>
                                                        <div className={styles.megaIcon}>
                                                            <Image className='img-fluid'
                                                                src={games}
                                                                alt='bitswits'
                                                            />
                                                        </div>
                                                        <h5 className='font14 fontf font-semibold mb-0'>GAME</h5>
                                                    </div>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col lg={12}>
                                                                <ul className='mb-0 ps-0 mt-2'>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>Game Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>2D Art</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>3D Art</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>Augmented Reality</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'>
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
                                            <Col lg={4}>
                                                <div className={styles.listMain}>
                                                    <div className={styles.listHeading}>
                                                        <div className={styles.megaIcon}>
                                                            <Image className='img-fluid'
                                                                src={hosting}
                                                                alt='bitswits'
                                                            />
                                                        </div>
                                                        <h5 className='font14 fontf font-semibold mb-0'>CLOUD & HOSTING</h5>
                                                    </div>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col lg={12}>
                                                                <ul className='mb-0 ps-0 mt-2'>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>Amazon Web Services</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>Azure Services</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>Managed Server Support Services</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>Cloud Computing</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className={styles.listMain}>
                                                    <div className={styles.listHeading}>
                                                        <div className={styles.megaIcon}>
                                                            <Image className='img-fluid'
                                                                src={cms}
                                                                alt='bitswits'
                                                            />
                                                        </div>
                                                        <h5 className='font14 fontf font-semibold mb-0'>DIGITAL MARKETING</h5>
                                                    </div>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col lg={12}>
                                                                <ul className='mb-0 ps-0 mt-2'>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>Social Media Optimization</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>Pay Per Click Services</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>Digital Marketing</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href='#'>
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
                                            <Col lg={4}>
                                                <div className={styles.listMain}>
                                                    <div className={styles.listHeading}>
                                                        <div className={styles.megaIcon}>
                                                            <Image className='img-fluid'
                                                                src={tailormade}
                                                                alt='bitswits'
                                                            />
                                                        </div>
                                                        <h5 className='font14 fontf font-semibold mb-0'>TAILORMADE SOLUTION</h5>
                                                    </div>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col lg={12}>
                                                                <ul className='mb-0 ps-0 mt-2'>
                                                                    <li>
                                                                        <Link href='#'>
                                                                            <FaAngleRight />
                                                                            <span>TailorMade</span>
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
                                    <Col lg={3}>
                                        <div className={styles.listMain2}>
                                            <div className={styles.listHeading}>
                                                <div className={styles.megaIcon}>
                                                    <Image className='img-fluid'
                                                        src={company}
                                                        alt='bitswits'
                                                    />
                                                </div>
                                                <h5 className='font14 fontf font-semibold mb-0'>COMPANY</h5>
                                            </div>
                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col lg={12}>
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
                                </Row>
                            </div>
                        </li>
                        <li>
                            <Link href='#'>OUR WORK</Link>
                        </li>
                        <li>
                            <Link href='#'>ENQUIRE NOW</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header