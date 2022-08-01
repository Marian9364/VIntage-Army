import styles from './ProfilePage.module.css';

export const ProfilePage = (props) => {


    return(
        <div className={styles.mainWrapper}>
        <h1>My Profile</h1>
        <p>{props.name}</p>
        </div>
    )
}