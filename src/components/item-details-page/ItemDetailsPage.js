import styles from "./ItemDetailsPage.module.css";

export const ItemDetailsPage = () => {
    return (
        <div className={styles.mainWrapper}>
        <div className={styles.innerWrapper}>
          <h1 className={styles.heading}>Item Details</h1>
          <h2>Here we show the Img</h2>
          <h4>Cloth Type:</h4>
          <h4>Size:</h4>
          <h4>Gender:</h4>
          <h4>price:</h4>
          <h2>Created by:</h2>
          <h2>Creator's phone number:</h2>
          <button>Likes</button>
        </div>
      </div>
    );
  };
