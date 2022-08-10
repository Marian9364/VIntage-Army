import styles from "./SingleItem.module.css"

export const SingleItem = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.innerWrapper}>
        <h1 className={styles.heading}>Item Name</h1>
        <h2>Here we show the Img</h2>
        <h4>Cloth Type:</h4>
        <h4>Size:</h4>
        <h4>Gender:</h4>
        <h4>price:</h4>
      </div>
    </div>
  );
};
