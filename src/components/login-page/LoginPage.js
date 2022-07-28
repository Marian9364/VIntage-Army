
import { useState, useRef, useEffect } from "react";
import styles from "./LoginPage.module.css";

export function LoginPage() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  
  
  const changeHandler = (e) => {
    setValues(state => ({
      ...state,
      [e.target.name]: e.target.value}));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(values);
  }
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.innerWrapper}>
        <h1 className={styles.heading}>Login</h1>
        
        <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
          id="email"
          type="email" 
          name="email"
          value={values.email} 
          placeholder="IvanIvanov@mail.com"
          onChange={changeHandler}
           />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input 
            id="password" 
            type="password" 
            name="password" 
            value={values.password} 
            onChange={changeHandler} />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        </div>
    </div>
  );
}