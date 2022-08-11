import { Link } from "react-router-dom";
import styles from './ProfilePage.module.css';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const ProfilePage = ({ items }) => {
    const { user } = useContext(AuthContext);


    return(
        <div className={styles.mainWrapper}>
        <h1>My Profile</h1>
        <h2>Hello {user?.email}</h2>
        <p>My items to sell:</p>
        <p>You do not have any items</p>
        <Link to="/add" className={styles.addBtn}>Add Item</Link>
        </div>
    )
}