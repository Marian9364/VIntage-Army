import styles from "./AddItemPage.module.css";
import { useState } from "react";

export const AddItemPage = () => {
  const [values, setValues] = useState({
    type: "",
    size: "",
    gender: "",
    img: "",
    creator: "",
    price: "0"
  });

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(values);
    
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
              value={values.type}
              placeholder="Pullover"
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="size">Size:</label>
            <select
              className={styles.inputFields}
              name="size"
              id="size"
              value={values.size}
              onChange={changeHandler}
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
              value={values.gender}
              onChange={changeHandler}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>
          <div>
          <label htmlFor="img">Image:</label>
          <input type="file" value={values.img} onChange={changeHandler} />
          </div>
          <div>
            <label htmlFor="creator">Creator:</label>
            <input
              className={styles.inputFields}
              id="creator"
              type="text"
              name="creator"
              value={values.creator}
              placeholder="Baba Ginka from Yagoda"
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="price">Price in Leva:</label>
            <input
              className={styles.inputFields}
              id="price"
              type="number"
              name="price"
              value={values.price}
              placeholder="24.99"
              onChange={changeHandler}
            />
          </div>
          <div>
            <button className={styles.addItemBtn} type="submit">Add Item</button>
          </div>
        </form>
      </div>
    </div>
  );
};
