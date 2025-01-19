import styles from "./page.module.css"; // CSS Modulesをインポート
import Header from "./components/Header";
import Line from "./components/Line";
import FullWidthBar from "./components/F_line";
import F_line from "./components/F_line";

export default function Home() {
    return (
        <>
            <section className={styles.top}>
            <Header />
            <div className="title">
                <h1 className={styles.W_title}>Welcome</h1> {/* CSS Modulesの適用 */}
                <h1 className={styles.T_title}>To</h1>
                <h1 className={styles.M_title}>My portfolio</h1>
            </div>
            </section>

            <section className={styles.about}>
                <div className="title">
                    <F_line />
                    <h1 className={styles.about_title}>About</h1>
                    <Line />
                    <div className={styles.about_profile}>
                        <h2 className={styles.name}>井上 琥ノ介</h2>
                        <h3 className={styles.english_name}>-Toranosuke Inoue-</h3>
                        <p className={styles.profile}>
                            2005年生まれ、京都府出身<br/>
                            京都デザイン＆テクノロジー専門学校ホワイトハッカー専攻に在学中<br/>
                            情報セキュリティ分野を中心に学んでいます<br/>
                        </p>
                        <div className={styles.more}>
                            <a href="a" className={styles.moreLink}>
                                <p className={styles.moreText}>→More</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.work}>
                <div className="title">
                    <F_line />
                    <h1 className={styles.work_title}>Work</h1>
                    <Line />
                    <div className={styles.work_main}>
                        
                    </div>
                </div>
            </section>
        </>
        
    );
}
