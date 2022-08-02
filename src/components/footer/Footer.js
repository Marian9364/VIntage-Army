import styles from "./Footer.module.css";
import { Link } from "react-router-dom";



export const Footer = () => {
    return (
        <footer className={styles.footer}>
          <span>Copyright © 2022 BG-Baba</span>  
        </footer>
    )
}