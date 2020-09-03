import React from 'react'
import styles from '../styles/Navbar.module.sass'
// import logo from '../resources/assets/CD LOGO white.png'
import Link from 'next/link'
import Navburger from './Navburger.js'

function Navbar() {
    return (
        <div className={styles.navbar}>
            
            <img className={styles.navbar__logo} src='/CD LOGO white.png' alt="Carlton Digital Logo" />
            
        
            
            <div className={styles.navbar__menu}>
                <Link href="/"><a className={styles.navbar__menu__item}>Home</a></Link>
                <Link href="/services"><a className={styles.navbar__menu__item}>Services</a></Link>
                <Link href="/portfolio"><a className={styles.navbar__menu__item}>Portfolio</a></Link>
                <div className={styles.navbar__container}>
                    <div className={styles.navbar__menu__cta}>ENQUIRE</div>
                    <Navburger/>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
