import styles from "./EditItemPage.module.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import * as itemsService from "../../services/itemsService";
import { useItemContext } from "../../contexts/ItemContext";

export const EditItemPage = () => {
 
  const [currentItem, setCurrentItem] = useState({});
  const { editItem } = useItemContext();
  const { itemId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    itemsService.getOne(itemId)
        .then(itemData => {
            setCurrentItem(itemData);
        })
}, [])


  const submitHandler = (e) => {
    e.preventDefault();

    const itemData = Object.fromEntries(new FormData(e.target));

    itemsService.edit(itemId, itemData)
        .then(result => {
            editItem(itemId, result);
            navigate("/items")
        });
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.innerWrapper}>
        <h1 className={styles.heading}>Edit Item</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="type">Type:</label>
            <input
              className={styles.inputFields}
              id="type"
              type="text"
              name="type"
              defaultValue={currentItem.type}
             />
          </div>
          <div>
            <label htmlFor="size">Size:</label>
            <select
              className={styles.inputFields}
              name="size"
              id="size"
              defaultValue={currentItem.size}
            >
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
            <select
              className={styles.inputFields}
              name="gender"
              id="gender"
              defaultValue={currentItem.gender}
            >
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
            defaultValue={currentItem.img}
            name="img"
            />
          </div>
          <div>
            <label htmlFor="price">Price in Leva:</label>
            <input
              className={styles.inputFields}
              id="price"
              type="number"
              name="price"
              defaultValue={currentItem.price}
            />
          </div>
          <div>
            <label htmlFor="creator">Creator:</label>
            <input
              className={styles.inputFields}
              id="creator"
              type="text"
              name="creator"
              defaultValue={currentItem.creator}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone number:</label>
            <input
              className={styles.inputFields}
              id="phone"
              type="number"
              name="phone"
              defaultValue={currentItem.phone}
            />
          </div>
          <div>
            <button className={styles.editItemBtn} type="submit">Edit Item</button>
          </div>
        </form>
      </div>
    </div>
  );
};
