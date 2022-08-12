import styles from "./LoginPage.module.css";
import { useContext } from "react";
import {Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

export function LoginPage() {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const {
        email,
        password,
    } = Object.fromEntries(new FormData(e.target));

    if (email === "" || password === "") {
      alert("All fields must be filled!");
      return
  }

    authService.login(email, password)
        .then(authData => {
            userLogin(authData);
            navigate('/items');
        })
        .catch(() => {
            navigate('/');
        });
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
          placeholder="IvanIvanov@mail.com"
           />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input className={styles.inputFields}
            id="password" 
            type="password" 
            name="password" 
            placeholder="******" 
            />
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