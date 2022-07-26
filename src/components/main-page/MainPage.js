import { Headings } from "./main-page-components/Headings";
import { MainContent } from "./main-page-components/MainContent";
import styles from "./MainPage.module.css";

export function MainPage() {
  return (
    <div className={styles.mainWrapper}>
      <Headings />
      <MainContent />
    </div>
  );
}

