import React from 'react'
import styles from '@/styles/Marketingexpertise.module.css'
import { Container, Row, Col } from 'react-bootstrap'


const MarketingExpertise = (props) => {
    return (
        <section className={styles.marketingExpertise}>{props.expeties}</section>
    )
}

export default MarketingExpertise