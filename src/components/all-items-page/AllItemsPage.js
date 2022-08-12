import styles from "./AllItemsPage.module.css";
import { useItemContext } from "../../contexts/ItemContext";
import { SingleItem } from "../single-item/SingleItem";

export const AllItemsPage = () => {
  const { items } = useItemContext();

  return (
    <div className={styles.mainWrapper}>
      {items.length > 0 ?
      (
        items.map(x => <SingleItem key={x._id} item={x} />)
      ) : (
        <h1 className={styles.mainWrapper}>No articles yet</h1>
      )}
    </div>
  );
};
