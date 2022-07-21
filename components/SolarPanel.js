import React from 'react'
import { Reveal } from 'react-reveal'
import styles from '../styles/Home.module.css'

const SolarPanel = () => {
  return (
    <section className={styles.section}>
        <Reveal effect="fadeInUp">
        <div className={styles.textArea}>
            <h3>
                Solar Panels
            </h3>
            <p>Lowest Cost Solar Panels in America</p>
        </div>
        </Reveal>
        <Reveal effect="fadeInUp2">
        <div className={styles.buttons}>
            <div className={styles.btnMain}>
                <a href='#' className={styles.btn}>
                    Order Now
                </a>
                <a href='#' className={styles.btn}>
                    Learn More
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

export default SolarPanel