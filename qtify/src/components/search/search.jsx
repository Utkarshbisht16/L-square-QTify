import React from 'react';
import styles from "./search.module.css";
import { ReactComponent as YourSvg } from '../../assets/search.svg';
export default function Search({placeholder}){
    const onSubmit = (e) =>{
        e.preventDefault();
    }
    return(
        <form className={styles.wrapper} onSubmit={onSubmit}>
            <input required type="text" placeholder={placeholder} className={styles.search}/>
            <button type='submit' className={styles.searchButton}><YourSvg/></button>
        </form>
    )
}












