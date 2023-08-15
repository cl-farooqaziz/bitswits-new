import React from 'react'
import styles from '@/styles/Play.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'

const Play = ({ demand }) => {
    return (
        <>
           
             
                        
                        <div className={styles.serveimg}>

                            {demand.map((item, i) =>
                                <Link className={item.click1 === item.data ? styles.active : ''} key={i} href='javascript:;' onClick={() => item.fun(item.click1)}> {item.title} </Link>
                            )}

                        </div>
                        {demand.map((item, i) =>

                            <div className={styles.serveimg1} key={i}>
                                {item.click1 === item.data &&
                                    <Image src={item.img} alt='bitswits' className='img-fluid' />
                                }


                            </div>

                        )}
                   
           

        </>
    )
}

export default Play