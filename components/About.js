import React from 'react'
import styles from '../styles/About.module.sass'

function About() {
    return (
        <div className={styles.about}>
            <h1>About Us</h1>
            <div className={styles.about__content}>
                <div className={styles.about__content__img}>
                    <img src="/about.jpg" alt="about Carlton Digital" />
                </div>
                <div className={styles.about__content__desc}>
                    <h2>Who We Are</h2>
                    <h3>Carlton Digital is a digital marketplace management consultant that will look after the operation of your e-Commerce store. So you can focus on getting that next big deal.</h3>
                </div>
            </div>
        </div>
    )
}

export default About
