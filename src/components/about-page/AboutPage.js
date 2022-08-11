import creator from "../../img/creator.jpg";
import styles from "./AboutPage.module.css";

export function AboutPage() {
  return (
    <div className={styles.mainWrapper}>
        <img className={styles.img} src={creator} alt="Creator's Image" width="300" height="400" />
        <div className={styles.textWrapper}>
        <h1 className={styles.heading}>About BG Baba</h1>
        <p>Web application made by me as a SoftUni project.</p>
        <p>The main pourpose of this web application is to connect hardworking grandmothers all over Bulgaria with their clients around the globe.</p>
        <p>This is just the template and in near future, there are going to be added many more functionalities.</p>
        </div>

    </div>
  );
}