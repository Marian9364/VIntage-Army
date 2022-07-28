
import { useState, useRef, useEffect } from "react";
import styles from "./RegisterPage.module.css";

export function RegisterPage() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    rePass: '',
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
        <h1 className={styles.heading}>Register</h1>
        
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
            <label htmlFor="rePass">Repeat Password:</label>
            <input 
            id="rePass" 
            type="password" 
            name="rePass" 
            value={values.rePass} 
            onChange={changeHandler} />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
        </div>
    </div>
  );
}