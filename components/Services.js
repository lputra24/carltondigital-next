import React from 'react'
import styles from '../styles/Services.module.sass'

function services() {
    return (
        <div className={styles.services}>
            <div className={styles.services__top}>
                <h1>How We Can Help You</h1>
                <div className={styles.services__itemcontainer}>
                    <div className={styles.services__top__item}>
                        <img className={styles.services__top__item__img} src="/digitalmarketplace.png" alt="Digital Marketplace Management" />
                    </div>
                    <div className={styles.services__top__item}>
                        <img className={styles.services__top__item__img} src="/ecommerce.png" alt="eCommerce and Consultation" />
                    </div>
                    <div className={styles.services__top__item}>
                        <img className={styles.services__top__item__img} src="/sales.png" alt="Carlton Digital Sales Booster" />
                    </div>
                </div>
            </div>
            <div className={styles.services__bottom}>
                <div  className={styles.services__itemcontainer}>
                    <div className={styles.services__bottom__item}>
                        <h2>DIGITAL MARKETPLACE MANAGEMENT</h2>
                        <h3>Online platform setup, optimisation, business automation, and After-Service care</h3>
                    </div>
                    <div className={styles.services__bottom__item}>
                        <h2>E-COMMERCE CONSULTING & SUPPORT</h2>
                        <h3>Professional IT advice, consultancy and support tailored for your online business needs</h3>
                    </div>
                    <div className={styles.services__bottom__item}>
                        <h2>CARLTON DIGITAL SALES BOOSTER</h2>
                        <h3>Website development designed for online store management</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default services
