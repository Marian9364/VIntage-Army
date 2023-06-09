import { Link } from "react-router-dom";
import styles from './ProfilePage.module.css';
import { useAuthContext } from "../../contexts/AuthContext";
import { SingleItem } from "../single-item/SingleItem";
import { useItemContext } from "../../contexts/ItemContext";

export const ProfilePage = () => {
    const { user } = useAuthContext();
    const { items } = useItemContext();
    let ownerItems = [];

    if(items.length > 0 ) {
        for(let it of items) {
            console.log(it);
            if (it._ownerId === user._id){
                ownerItems.push(it);
            }
        }
    }

    return(
        <div className={styles.mainWrapper}>
        <h1>My Profile</h1>
        <h2>Hello <span className={styles.userEmail}>{user?.email}</span>!</h2>
        <div className={styles.myItemsWrapper}>
      {ownerItems.length > 0 ?
      (
        ownerItems.map(x => <SingleItem key={x._id} item={x} />)
      ) : (
        <h1>No Items Yet</h1>
      )}
    </div>
        <h3>If you would like to add an ITEM to sell click the button bellow.</h3>
        <p className={styles.arrow}>&#8595;</p>
        <Link to="/add" className={styles.addBtn}>Add Item</Link>
        </div>
    )
}