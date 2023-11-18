import React from 'react';
import Button from "../botton/button.jsx"
import Logo from "../logo/logo.jsx"
import Search from "../search/search.jsx"
import styles from "./Navbar.module.css"

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Logo/>
            <Search placeholder={"Search a album of your choice"}/>
            <Button>Give Feedback</Button>
        </nav>
    )
}
export default Navbar;