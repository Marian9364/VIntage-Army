import { Link } from "react-router-dom";
import styles from './ProfilePage.module.css';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const ProfilePage = ({ items }) => {
    const { user } = useContext(AuthContext);

    //add only the items created from the current user in that profile page

    return(
        <div className={styles.mainWrapper}>
        <h1>My Profile</h1>
        <h2>Hello {user?.email}</h2>
        {/* <p>My items to sell:</p> */}
        <h3>If you would like to add an Item to sell click the button bellow.</h3>
        <p className={styles.arrow}>&#8595;</p>
        <Link to="/add" className={styles.addBtn}>Add Item</Link>
        </div>
    )
}