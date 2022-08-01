import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import "../../reset.css"

export const Header = () => {
    return (<nav>
    <ul className={styles.header} role="list">
        <li className={styles.headerLinks}><Link to="/" className={`${styles.headerLinkElement} ${styles.home}`}>Home</Link></li>
        <li className={styles.headerLinks}><Link to="/login" className={styles.headerLinkElement}>Login</Link></li>
        <li className={styles.headerLinks}><Link to="/register" className={styles.headerLinkElement}>Register</Link></li>
        <li className={styles.headerLinks}><Link to="/about" className={styles.headerLinkElement}>About Us</Link></li>
        <li className={styles.headerLinks}><Link to="/contact" className={styles.headerLinkElement}>Contact Us</Link></li>
        <li className={styles.headerLinks}><Link to="/profile" className={styles.headerLinkElement}>My Profile</Link></li>
        <li className={styles.headerLinks}><Link to="/items" className={styles.headerLinkElement}>All Items</Link></li>
    </ul>
    </nav>)
    
}