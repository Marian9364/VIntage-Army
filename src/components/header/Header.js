import { Link, Router, Routes, BrowserRouter } from "react-router-dom";
import { MainPage } from "../main-page/MainPage";
import styles from "./Header.module.css";
import "../../reset.css"

export const Header = () => {
    return (<navbar>
    <ul className={styles.header} role="list">
        <li className={styles.headerLinks}><a href="/" className={`${styles.headerLinkElement} ${styles.home}`}>Home</a></li>
        <li className={styles.headerLinks}><a href="/" className={styles.headerLinkElement}>Login</a></li>
        <li className={styles.headerLinks}><a href="/" className={styles.headerLinkElement}>Register</a></li>
        <li className={styles.headerLinks}><a href="/" className={styles.headerLinkElement}>About Us</a></li>
        <li className={styles.headerLinks}><a href="/" className={styles.headerLinkElement}>Contact Us</a></li>
    </ul>
    </navbar>)
    
}