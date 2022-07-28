import styles from "./Footer.module.css";
import { Link } from "react-router-dom";



export const Footer = () => {
    return (<nav>
    <ul className={styles.footer} role="list">
        <li className={styles.footerLinks}><Link to="/" className={`${styles.footerLinkElement} ${styles.home}`}>Home</Link></li>
        <li className={styles.footerLinks}><Link to="/login" className={styles.footerLinkElement}>Login</Link></li>
        <li className={styles.footerLinks}><Link to="/register" className={styles.footerLinkElement}>Register</Link></li>
        <li className={styles.footerLinks}><Link to="/about" className={styles.footerLinkElement}>About Us</Link></li>
        <li className={styles.footerLinks}><Link to="/contact" className={styles.footerLinkElement}>Contact Us</Link></li>
    </ul>
    </nav>)
}