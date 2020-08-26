import React from 'react'
import styles from '../styles/Navbar.module.sass'
// import logo from '../resources/assets/CD LOGO white.png'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <img className={styles.navbar__logo} src='/CD LOGO white.png' alt="Carlton Digital Logo" />
            <div className={styles.navbar__menu}>
                <div className={styles.navbar__menu__item}>Home</div>
                <div className={styles.navbar__menu__item}>Services</div>
                <div className={styles.navbar__menu__item}>Portfolio</div>
                <div className={styles.navbar__menu__cta}>ENQUIRE</div>
            </div>
        </div>
    )
}

export default Navbar
