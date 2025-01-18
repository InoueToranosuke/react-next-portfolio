import styles from "./page.module.css"; // CSS Modulesをインポート
import Header from "./components/Header";

export default function Home() {
    return (
        <div>
            <Header />
            <div className="title">
                <h1 className={styles.W_title}>Welcome</h1> {/* CSS Modulesの適用 */}
                <h1 className={styles.T_title}>To</h1>
                <h1 className={styles.M_title}>My portfolio</h1>
            </div>
        </div>
    );
}
