
import { useState, useRef, useEffect, useContext } from "react";
import styles from "./LoginPage.module.css";
import {Link, useNavigate } from 'react-router-dom';
import { login } from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";


export function LoginPage() {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  
  const { user } = useContext(AuthContext);
  
  
  const changeHandler = (e) => {
    setValues(state => ({
      ...state,
      [e.target.name]: e.target.value}));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(values);
    console.log(user)
    login(values.email,values.password);
    console.log("user is:")
    console.log(user)
    console.log("values.email is:")
    console.log(values)

    navigate('/user/:id')
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