import styles from "./RegisterPage.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as authService from "../../services/authService";
import { useAuthContext } from "../../contexts/AuthContext";

export function RegisterPage() {
  const { userLogin } = useAuthContext();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm-password');

    if (password !== confirmPassword) {
        alert("Passwords must match!");
        return
    }

    if (email === "" || password === "" || confirmPassword === "") {
      alert("All fields must be filled!");
      return
  }

    authService.register(email, password)
        .then(authData => {
            userLogin(authData);
            navigate('/');
        });
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
            <label htmlFor="rePass">Repeat Password:</label>
            <input className={styles.inputFields}
            id="confirm-password" 
            type="password" 
            name="confirm-password" 
            placeholder="******"
            />
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