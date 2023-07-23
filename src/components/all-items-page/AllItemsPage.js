import styles from "./AllItemsPage.module.css";
import { useItemContext } from "../../contexts/ItemContext";
import { SearchComponent } from "./SearchComponent";
export const AllItemsPage = () => {
  // const { items } = useItemContext();

  return (
    <div className={styles.mainWrapper}>
      <SearchComponent />
      {/* {items.length > 0 ?
      (
        items.map(x => <SingleItem key={x._id} item={x} />)
      ) : (
        <h1 className={styles.mainWrapper}>No clothes currently available to sell</h1>
      )} */}
    </div>
  );
};
