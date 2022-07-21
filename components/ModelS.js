import React from 'react'
import styles from '../styles/Home.module.css'
import { Reveal } from 'react-reveal'

const ModelS = () => {
  return (
    <div>
        <section className={styles.section}>
        <Reveal effect="fadeInUp">
        <div className={styles.textArea}>
            <h3>
                Model S
            </h3>
            <p>Order Online for <span className={styles.touchless}>Touchless Delivery</span></p>
        </div>
        </Reveal>
        <Reveal effect="fadeInUp2">
        <div className={styles.buttons}>
            <div className={styles.btnMain}>
                <a href='#' className={styles.btn}>
                    Custom Order
                </a>
                <a href='#' className={styles.btn}>
                    Existing Inventory
                </a>
            </div>
            <img 
                src="/images/down-arrow.svg" 
                className={styles.downIcon} akt="down icon"/>
        </div>
        </Reveal>
    </section>
    </div>
  )
}

export default ModelS