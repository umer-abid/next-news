import styles from "../styles/EOM.module.css";
import Toolbar from "../Components/toolbar";
export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Next.js News App</h1>
        <h3>You are one stop shop for the latest news Articles</h3>
      </div>
    </div>
  );
}
