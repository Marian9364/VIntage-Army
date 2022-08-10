import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import "../../reset.css"
import { useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';
// import { logout } from "../../fetch-api/fetch";

export const Header = () => {
    const { user } = useContext(AuthContext);




    const userNav = (
        <nav>
        <ul className={styles.header} role="list">
            {/* <li className={styles.headerLinks}><span className={styles.headerLinkElement}><em>Welcome</em></span></li> */}
            <li className={styles.headerLinks}><Link to="/" className={styles.headerLinkElement}>Home</Link></li>
            <li className={styles.headerLinks}><Link to="/about" className={styles.headerLinkElement}>About Us</Link></li>
            <li className={styles.headerLinks}><Link to="/contact" className={styles.headerLinkElement}>Contact Us</Link></li>
            <li className={styles.headerLinks}><Link to="/user/:id" className={styles.headerLinkElement}>My Profile</Link></li>
            <li className={styles.headerLinks}><Link to="/items" className={styles.headerLinkElement}>All Items</Link></li>
            <li className={styles.headerLinks}><Link to="/logout" className={styles.headerLinkElement}>Logout</Link></li>
        </ul>
        </nav>
    );

    const guestNav = (
        <nav>
    <ul className={styles.header} role="list">
    <li className={styles.headerLinks}><span className={`${styles.headerLinkElement}`}><em>Welcome</em></span></li>
        <li className={styles.headerLinks}><Link to="/" className={`${styles.headerLinkElement} ${styles.home}`}>Home</Link></li>
        <li className={styles.headerLinks}><Link to="/login" className={styles.headerLinkElement}>Login</Link></li>
        <li className={styles.headerLinks}><Link to="/register" className={styles.headerLinkElement}>Register</Link></li>
        <li className={styles.headerLinks}><Link to="/about" className={styles.headerLinkElement}>About Us</Link></li>
        <li className={styles.headerLinks}><Link to="/contact" className={styles.headerLinkElement}>Contact Us</Link></li>
        <li className={styles.headerLinks}><Link to="/items" className={styles.headerLinkElement}>All Items</Link></li>
    </ul>
    </nav>

    )
    return (
        <header>
        {user? userNav: guestNav}
        </header>
    )
    
}