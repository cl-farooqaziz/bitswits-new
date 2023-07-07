import React from 'react'
import styles from '@/styles/Profilecreation.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const Profilecreation = () => {
    return (
        <section className={styles.profilecreation}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <p className='font20 fontf font-bold black mb-4'>The following are some features we incorporated during the music app development:</p>
                    </Col>
                </Row>
                <Row className='g-3'>
                    <Col lg={6}>
                        <div className={styles.creation1}>
                            <h4 className='font30 fontf font-bold'>Profile <br></br> Creation</h4>
                            <p className='font16 fontf font-medium mt-1 mb-0'>This feature allows users to create a personalized profile containing the music they love and their preferences, allowing them to quickly find the perfect song or artist to listen to each time they open the app.</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={styles.creation1}>
                            <h4 className='font30 fontf font-bold '>Music <br></br> Recommendation</h4>
                            <p className='font16 fontf font-medium  mt-1 mb-0'>This feature lets customers quickly find the perfect songs for their mood or occasion. The music recommendation feature also increases user engagement, as it keeps users returning to the app by regularly providing fresh content.</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={styles.creation1}>
                            <h4 className='font30 fontf font-bold '>Push <br></br> Notifications</h4>
                            <p className='font16 fontf font-medium  mt-1 mb-0'>With the help of this feature, Soul Sound can send highly customized messages for various scenarios. And this, in turn, can help increase user engagement and retention.</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                    <div className={styles.creation1}>
                            <h4 className='font30 fontf font-bold '>Social <br></br> Media Integration</h4>
                            <p className='font16 fontf font-medium  mt-1 mb-0'>This innovative feature allows users to easily share their favorite songs and albums with friends, family, and the public. It helps promote their favorite music or artist to a broader audience.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Profilecreation