import React from 'react'
import { Reveal } from 'react-reveal'
import styles from '../styles/Home.module.css'

const Access = () => {
  return (
    <section className={styles.section}>
        <Reveal effect="fadeInUp">
        <div className={styles.textArea}>
            <h3>
                Accessories
            </h3>
            <p><span className={styles.touchless}></span></p>
        </div>
        </Reveal>
        <Reveal effect="fadeInUp2">
        <div className={styles.buttons}>
            <div className={styles.btnMain}>
                <a href='#' className={styles.btn}>
                    Custom Order
                </a>
            </div>
            <img 
                src="/images/down-arrow.svg" 
                className={styles.downIcon} akt="down icon"/>
        </div>
        </Reveal>
    </section>
  )
}

export default Access