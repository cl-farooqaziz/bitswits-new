import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Yearsofexpertise.module.css'

const Yearsofexpertise = () => {
    return (
        <>
            <section className={styles.yearsofexpertise}>
            <Container className={styles.allbest}>
                        <div>
                            <h3 className='font75 grdiant font-bold fontf'>21+</h3>
                            <h4 className='font25 fontf white font-extrabold texttran'>years of <br></br> expertise</h4>
                            <p className='font15 fontf white font-medium'>Established 2002 in the USA </p>
                        </div>
                        <div>
                            <h3 className='font75 grdiant font-bold fontf'>1,000+</h3>
                            <h4 className='font25 fontf white font-extrabold texttran'>Dedicated <br></br> Developers</h4>
                            <p className='font15 fontf white font-medium'>All directly employed by us </p>
                        </div>
                        <div>
                            <h3 className='font75 grdiant font-bold fontf'>12,500+</h3>
                            <h4 className='font25 fontf white font-extrabold texttran'>Happy Clients</h4>
                            <p className='font15 fontf white font-medium'>See genuine testimonial videos </p>
                        </div>
                        <div>
                            <h3 className='font75 grdiant font-bold fontf'>20,000+</h3>
                            <h4 className='font25 fontf white font-extrabold texttran'>Projects <br></br> Delivered</h4>
                            <p className='font15 fontf white font-medium'>See examples our work </p>
                        </div>
                        </Container> 
            </section>

        </>
    )
}

export default Yearsofexpertise