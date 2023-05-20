import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import "../../reset.css"
import { useAuthContext } from "../../contexts/AuthContext";


export const Header = () => {
    const { user } = useAuthContext();

    let emailNickname;

    if (user.email) {
        emailNickname = user.email.split('@')[0];

    };
    
    //or user?.email - to use the user's email as a greeting nickname
    const userNav = (
        <nav>
        <ul className={styles.header} role="list">
            <li className={styles.headerLinks}><span className={styles.headerLinkElement}><em><Link to="/users/:userid" className={styles.headerLinkElement}><u>Welcome {emailNickname}</u></Link></em></span></li>
            <li className={styles.headerLinks}><Link to="/" className={styles.headerLinkElement}>Home</Link></li>
            <li className={styles.headerLinks}><Link to="/about" className={styles.headerLinkElement}>About Us</Link></li>
            <li className={styles.headerLinks}><Link to="/contact" className={styles.headerLinkElement}>Contact Us</Link></li>
            <li className={styles.headerLinks}><Link to="/users/:userId" className={styles.headerLinkElement}>My Profile</Link></li>
            <li className={styles.headerLinks}><Link to="/items" className={styles.headerLinkElement}>All Items</Link></li>
            <li className={styles.headerLinks}><Link to="/logout" className={styles.headerLinkElement}>Logout</Link></li>
        </ul>
        </nav>
    );

    const guestNav = (
        <nav>
    <ul className={styles.header} role="list">
    <li className={styles.headerLinks}><span className={styles.headerLinkElement}><em>Welcome dear Guest</em></span></li>
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
        {user.email? userNav: guestNav}
        </header>
    )
    
}