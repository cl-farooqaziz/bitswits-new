import React from 'react'
import styles from '@/styles/Milestones.module.css'


const Milestones = (props) => {
    return (
        <section className={styles.miltone}>
         
         {props.value}

        </section>
    )
}

export default Milestones