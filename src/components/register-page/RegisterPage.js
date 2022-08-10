
import { useState } from "react";
import styles from "./RegisterPage.module.css";
import { Link } from "react-router-dom";
import { register } from "../../services/authService";

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
    if(values.password != values.rePass){
      alert("Passwords do not match!")
    }
    register(values.email,values.password);
  }
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.innerWrapper}>
        <h1 className={styles.heading}>Register</h1>
        
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
            <label htmlFor="rePass">Repeat Password:</label>
            <input className={styles.inputFields}
            id="rePass" 
            type="password" 
            name="rePass" 
            value={values.rePass}
            placeholder="******"
            onChange={changeHandler} />
          </div>
          <div>
            <button className={styles.registerBtn} type="submit">Register</button>
          </div>
        </form>
        </div>
        <div>If you already have an account <Link to="/login" className={styles.sendToLogInBtn}>click here to log in</Link>!</div>
    </div>
  );
}