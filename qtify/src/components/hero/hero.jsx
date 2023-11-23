import React from 'react';
import styles from "./hero.module.css"
import logo from "../../assets/headphone.png"
export default function Hero(){
    return(
        <>
            <div className={styles.box}>
                <div className={styles.outer}>
                    <div className={styles.text}>
                        <p>100 Thousand Songs, ad-free</p>
                        <p>Over thousands podcast episodes</p>
                    </div>
                    <div className={styles.icon}>
                        <img src={logo} alt="headphone" className={styles.iconImg} />
                    </div>
                </div>
            </div>
        </>
    )
}
