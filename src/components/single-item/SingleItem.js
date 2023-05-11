import { Link } from "react-router-dom";
import styles from "./SingleItem.module.css";

export const SingleItem = ({ item }) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.innerWrapper}>
        <h1 className={styles.heading}>Item Type: {item.type}</h1>
        <div className={styles.imgContainer}>
        <img className={styles.img} src={item.img} />
        </div>
        <h4>Size: {item.size}</h4>
        <h4>Gender: {item.gender}</h4>
        <h4 className={styles.price}>Price: {item.price}</h4>
        <Link to={`/items/${item._id}`} className={styles.detailsBtn}>Details and Contacts</Link>
      </div>
    </div>
  );
};
