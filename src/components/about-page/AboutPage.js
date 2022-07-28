import creator from "../../img/creator.jpg";
import styles from "./AboutPage.module.css";

export function AboutPage() {
  return (
    <div className={styles.mainWrapper}>
        <img className={styles.img} src={creator} alt="Creator's Image" width="300" height="400" />
        <div className={styles.textWrapper}>
        <h1 className={styles.heading}>About BG Baba</h1>
        <p>site made by me started as a SoftUni project.</p>
        <p>The main pourpose of the website is to connect hardworking grandmothers all over Bulgaria with their clients around the globe.</p>
        </div>

    </div>
  );
}