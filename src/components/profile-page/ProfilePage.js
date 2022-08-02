import { Link } from "react-router-dom";
import styles from './ProfilePage.module.css';

export const ProfilePage = () => {


    return(
        <div className={styles.mainWrapper}>
        <h1>My Profile</h1>
        <p>You do not have any items</p>
        <Link to="/add" className={styles.addBtn}>Add Item</Link>
        </div>
    )
}