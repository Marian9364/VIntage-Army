import styles from "./AllItemsPage.module.css";
import { SingleItem } from "../single-item/SingleItem";

export const AllItemsPage = ({ items }) => {
  return (
    <div className={styles.mainWrapper}>
      <h1>All Items</h1>
      {items.length > 0 ? (
        items.map((x) => <SingleItem key={x._id} item={x} />)
      ) : (
        <h3 className={styles.mainWrapper}>No articles yet</h3>
      )}
    </div>
  );
};
