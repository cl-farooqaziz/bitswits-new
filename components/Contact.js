import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Contact.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaFacebookSquare, FaInstagram, FaDribbble, FaPinterest, FaBehance } from 'react-icons/fa';
import icon from '../public/images/footer/icon.png'


const Contact = () => {
    return (
        <>
            <section className={styles.contact}>
                <Container>
                    <Row className='justify-content-between'>
                        <Col lg={4}>
                            <div className={styles.cntcTxt}>
                                <h4 className='font60 black fontf font-bold line60 mb-4'>
                                    LET’S TALK ABOUT YOUR PROJECTS
                                </h4>
                                <p className='font18 fontf mb-4'>Have a project idea? Tell us more about the details and we'll get back to you within 24 hours</p>
                                <div className={styles.getInTch}>
                                    <div className={styles.touch}>
                                        <FaRegEnvelope />
                                        <span>info@bitswits.co</span>
                                    </div>
                                    <div className={styles.touch}>
                                        <FaPhoneAlt />
                                        <span>+1 (833) 500-6007 </span>
                                    </div>
                                    <div className={styles.touch}>
                                        <FaPhoneAlt />
                                        <span>+1 (312) 379 5987</span>
                                    </div>
                                   
                                </div>
                                <div className={styles.social}>
                                    <h5 className='font16 fontf mt-5 mb-3'>OUR SOCIALS</h5>
                                    <div className={styles.socialIcn}>
                                        <Link href="#"> <FaLinkedin className={styles.email} /></Link>
                                        <Link href="#"> <FaFacebookSquare className={styles.email} /></Link>
                                        <Link href="#"> <FaInstagram className={styles.email} /></Link>
                                        <Link href="#"> <FaDribbble className={styles.email} /></Link>
                                        <Link href="#" > <Image src={icon} className={`${styles.email}`} /> </Link>
                                        <Link href="#"> <FaPinterest className={styles.email} /></Link>
                                        <Link href="#"> <FaBehance className={styles.email} /></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className={`${styles.cntcForm} mt-5 mt-lg-0`}>
                                <form>
                                    <Row>
                                        <Col lg={6}>
                                            <div className='mb-4'>
                                                <label for="fname" className='form-label'>
                                                    First Name
                                                    <span className={styles.imp}>*</span>
                                                </label>
                                                <input type="text" className='form-control' id="fname" placeholder="What's your first name?" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='mb-4'>
                                                <label for="lname" className='form-label'>
                                                    Last Name
                                                    <span className={styles.imp}>*</span>
                                                </label>
                                                <input type="text" className='form-control' id="lname" placeholder="What's your last name?" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='mb-4'>
                                                <label for="email" className='form-label'>
                                                    Email Address
                                                    <span className={styles.imp}>*</span>
                                                </label>
                                                <input type="email" className='form-control' id="email" placeholder="yourname@email.com" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='mb-4'>
                                                <label for="company" className='form-label'>Company Size</label>
                                                <select id="company" name="Company" data-name="Company" className={styles.wSelect}>
                                                    <option value="0">Company Size</option>
                                                    <option value="1">Only 1</option>
                                                    <option value="2-10">2-10</option>
                                                    <option value="10-20">10-20</option>
                                                    <option value="30-50">30-50</option>
                                                    <option value="50-100">50-100</option>
                                                    <option value="100+">100+</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='mb-4'>
                                                <label for="Service" className='form-label'>Service</label>
                                                <select id="Service" name="Service" data-name="Service" className={styles.wSelect}>
                                                    <option value="">Select service</option>
                                                    <option value="Webflow Development">Mobile/Web Design</option>
                                                    <option value="Web Development">Web Development</option>
                                                    <option value="Web3 Design">Web3 Design</option>
                                                    <option value="Product Research &amp; Strategy">Product Research &amp; Strategy</option>
                                                    <option value="Design Subscription/Retainer">Design Subscription/Retainer</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='mb-4'>
                                                <label for="Source" className='form-label'>How did you find us?</label>
                                                <select id="Source" name="Source" data-name="Source" className={styles.wSelect}>
                                                    <option value="">How did you find us?</option>
                                                    <option value="Google">Google</option>
                                                    <option value="Clutch">Clutch</option>
                                                    <option value="Referral">Referral</option>
                                                    <option value="Blog">Blog</option>
                                                    <option value="Review Site">Review Site</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='mb-4'>
                                                <label for="Budget" className='form-label'>
                                                    What have you budgeted for this project?
                                                    <span className={styles.imp}>*</span>
                                                </label>
                                                <select id="Budget" name="Budget" data-name="Budget" required="" className={styles.wSelect}>
                                                    <option value="0">What is your budget for this project?</option>
                                                    <option value="Under $20,000">Under $20,000</option>
                                                    <option value="$20.000-$50,000">$20.000-$50,000</option>
                                                    <option value="$50,000-$100,000">$50,000-$100,000</option>
                                                    <option value="$100,000-$150,000">$100,000-$150,000</option>
                                                    <option value="$150,000-$200,000">$150,000-$200,000</option>
                                                    <option value="Above $200,000">Above $200,000</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='mb-4'>
                                                <label for="Message" className='form-label'>About Your Project</label>
                                                <textarea id="Message" name="Message" maxlength="5000" data-name="Message" placeholder="Tell us about your project goals &amp; timeline in a snapshot. Please include any necessary links about your project." class="form-field text-area w-input"></textarea>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='mb-5 mt-3 text-center'>
                                                <iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6Ld6Ox0lAAAAADUM1uxAXKGybcB6zB8x3owVCUTM&amp;co=aHR0cHM6Ly96ZW5zaXRlLmNvOjQ0Mw..&amp;hl=en&amp;v=Xh5Zjh8Od10-SgxpI_tcSnHR&amp;size=normal&amp;cb=l17p04q98i1h" width="304" height="78" role="presentation" name="a-uig0r51k4l2w" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='mb-5'>
                                                <button type="submit" id="submit" data-wait="Booking the Call " className={styles.btns}>Time to Book The Call</button>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className={styles.formPara}>
                                                <p>
                                                    By submitting this form, you agree to our
                                                    <Link className={styles.link} href="#"> privacy policy </Link> <br />
                                                    and allow us to contact you via email
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact