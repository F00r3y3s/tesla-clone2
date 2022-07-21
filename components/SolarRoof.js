import React from 'react'
import styles from '../styles/Home.module.css'
import { Reveal } from 'react-reveal'

const SolarRoof = () => {
  return (
    <section className={styles.section}>
        <Reveal effect="fadeInUp">
        <div className={styles.textArea}>
            <h3>
                Solar Roof
            </h3>
            <p>Produce Clean Energy From Your Roof</p>
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

export default SolarRoof