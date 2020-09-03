import React, {useState} from 'react'
import styles from '../styles/Navburger.module.sass'

function Navburger() {
    const [active,toggleActive] = useState(null);

    return (
            <div className={styles.navburger} 
                onClick={()=>{active ? toggleActive(!active) : toggleActive(true)}}>
                <div className={styles.navburger__line1}></div>
                <div className={styles.navburger__line2}></div>
                <div className={styles.navburger__line3}></div>
            </div>
            
    )
}

export default Navburger
