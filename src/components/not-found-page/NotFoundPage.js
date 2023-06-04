import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export const NotFoundPage = () => {
    return (
        <div className={styles.mainWrapper}>
            <h1>Page Not Found</h1>
            <h2>Return to<Link className={styles.link} to="/">Vintage Army</Link></h2>
        </div>
    )
}