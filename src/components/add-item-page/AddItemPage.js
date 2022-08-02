import styles from "./AddItemPage.module.css";
import { useState } from "react";

export const AddItemPage = () => {
  const [values, setValues] = useState({
    type: "",
    size: "",
    gender: "",
    img: "",
    creator: "",
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
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="xsM">XS-M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
              <option value="lXxl">L-XXL</option>
              <option value="3641">36-41(for socks)</option>
              <option value="4246">42-46(for socks)</option>
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
              <option value="m">Male</option>
              <option value="f">Female</option>
              <option value="u">Unisex</option>
            </select>
          </div>
          <div>
          <label htmlFor="img">Image:</label>
          <input type="file" value={values.img} onChange={changeHandler} />
          </div>
          <div>
            <label htmlFor="creator">Creator::</label>
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
            <button className={styles.addItemBtn} type="submit">Add Item</button>
          </div>
        </form>
      </div>
    </div>
  );
};
