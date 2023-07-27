import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/PhpServices.module.css'


const PhpServices = () => {
    return (
        <>
            <section className={styles.phpServices}>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col lg={4}>
                            <div className={styles.left}>
                                <h2 className='font30 black fontf font-bold line30 black mb-4'>Our <span className='grdiant'>PHP Development</span> Services</h2>
                                <p className='black font14 fontf font-medium'>
                                    At Team in India, we pride ourselves on delivering top-quality PHP development services to our clients. Our team of experienced developers has a track record of creating custom web applications, professional websites, and integrations with third-party APIs that meet the unique needs of each business. From start to finish, we are dedicated to providing excellent customer service and delivering results that exceed expectations.
                                </p>
                            </div>
                        </Col>
                        <Col lg={7} className={styles.secondHalf}>
                            <div className={styles.servicesBox}>
                                <h3 className={styles.servicesTtl}>
                                    Custom Web Application Development
                                </h3>
                                <div className={styles.serviceDetails}>
                                    <p className={`${styles.subtitle} black font14 fontf font-medium mb-0`}>
                                        Custom Web Application Development
                                    </p>
                                    <p className='black font13 fontf font-medium mb-0'>
                                        Our team of PHP developers has the skills and experience to build custom web applications from the ground up. We can work with you to understand your business requirements and create a solution that meets your needs. We can customize existing applications to add new features or modify existing functionality.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.servicesBox}>
                                <h3 className={styles.servicesTtl}>
                                    Website Development
                                </h3>
                                <div className={styles.serviceDetails}>
                                    <p className={`${styles.subtitle} black font14 fontf font-medium mb-0`}>
                                        Website Development
                                    </p>
                                    <p className='black font13 fontf font-medium mb-0'>
                                        Our team can develop a professional website for your business using PHP. We can create many websites, including e-commerce sites, blogs, and portfolios. We will work with you to understand your business needs and design a website that meets your goals and resonates with your target audience.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.servicesBox}>
                                <h3 className={styles.servicesTtl}>
                                    Integration with Third-Party APIs
                                </h3>
                                <div className={styles.serviceDetails}>
                                    <p className={`${styles.subtitle} black font14 fontf font-medium mb-0`}>
                                        Integration with Third-Party APIs
                                    </p>
                                    <p className='black font13 fontf font-medium mb-0'>
                                        Do you need to integrate your web application or website with a third-party service such as Google Maps, a social media platform, or a payment gateway? Our team can help you do this seamlessly using PHP. We have experience integrating with a wide range of APIs and can help you add this functionality to your project.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.servicesBox}>
                                <h3 className={styles.servicesTtl}>
                                    Maintenance and Support
                                </h3>
                                <div className={styles.serviceDetails}>
                                    <p className={`${styles.subtitle} black font14 fontf font-medium mb-0`}>
                                        Maintenance and Support
                                    </p>
                                    <p className='black font13 fontf font-medium mb-0'>
                                        Once your PHP-based solution is live, it is important to keep it running smoothly and efficiently. Our team offers ongoing maintenance and support to ensure that your project is always up-to-date and functioning as intended. We can handle bug fixes, security updates, and any other maintenance tasks that may come up.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default PhpServices