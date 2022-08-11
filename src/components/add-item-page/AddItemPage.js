import styles from "./AddItemPage.module.css";
import { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContext";
import * as itemsService from "../../services/itemsService";

export const AddItemPage = () => {
  const { addItem } = useContext(ItemContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const itemData = Object.fromEntries(new FormData(e.target));

    itemsService.create(itemData).then((result) => {
      addItem(result);
    });
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.innerWrapper}>
        <h1 className={styles.heading}>Add Item</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="type">Type:</label>
            <input
              className={styles.inputFields}
              id="type"
              type="text"
              name="type"
              placeholder="Pullover"
            />
          </div>
          <div>
            <label htmlFor="size">Size:</label>
            <select className={styles.inputFields} name="size" id="size">
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="XS-M">XS-M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="L-XXL">L-XXL</option>
              <option value="36-41">36-41(for socks)</option>
              <option value="42-46">42-46(for socks)</option>
            </select>
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <select className={styles.inputFields} name="gender" id="gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>
          <div>
            <label htmlFor="img">Image:</label>
            <input
              className={styles.inputFields}
              type="text"
              name="img"
              placeholder="Upload a photo..."
            />
          </div>
          <div>
            <label htmlFor="price">Price in Leva:</label>
            <input
              className={styles.inputFields}
              id="price"
              type="number"
              name="price"
              placeholder="24.99"
            />
          </div>
          <div>
            <label htmlFor="creator">Creator:</label>
            <input
              className={styles.inputFields}
              id="creator"
              type="text"
              name="creator"
              placeholder="Baba Ginka from Yagoda"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone number:</label>
            <input
              className={styles.inputFields}
              id="phone"
              type="number"
              name="phone"
              placeholder="0898123456"
            />
          </div>
          <div>
            <button className={styles.addItemBtn} type="submit">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
