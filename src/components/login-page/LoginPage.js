
import { useState, useRef, useEffect } from "react";
import styles from "./LoginPage.module.css";
import {Link, useNavigate } from 'react-router-dom';
import { login } from "../../fetch-api/fetch";


export function LoginPage() {

  const navigate = useNavigate();
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
    login(values.email,values.password);
    const { user } = 
    navigate('/profile')
  }

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.innerWrapper}>
        <h1 className={styles.heading}>Login</h1>
        
        <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email:</label>
          <input className={styles.inputFields}
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
            <input className={styles.inputFields}
            id="password" 
            type="password" 
            name="password" 
            value={values.password}
            placeholder="******" 
            onChange={changeHandler} />
          </div>
          <div>
            <button className={styles.loginBtn} type="submit">Login</button>
          </div>
        </form>
        </div>
        <div>If you already have an account <Link to="/register" className={styles.sendToRegBtn}>click here to register</Link>!</div>
    </div>
  );
}