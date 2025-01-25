import styles from "./page.module.css"; // CSS Modulesをインポート
import Header from "./components/Header";
import Line from "./components/Line";
import F_line from "./components/F_line";
import Welcome from "./components/Welcome";
import Myportfolio from "./components/Myportfolio";
import To from "./components/To";
import Window from "./components/Window";
import Footer from "./components/Footer";
import Image from "next/image";
import Whiteline from "./components/whiteline";
import Whiteshortline from "./components/Whiteshortline";


export default function Home() {
    return (
        <>
            <div className="bgc">
                <section className={styles.top}>
                <Header />
                <div className="title">
                    <h1 className={styles.W_title}><Welcome/></h1> {/* CSS Modulesの適用 */}
                    <h1 className={styles.T_title}><To/></h1>
                    <h1 className={styles.M_title}><Myportfolio/></h1>
                </div>
                </section>

                <section id="about"  className={styles.about}>
                    <div className="title">
                        <F_line />
                        <h1 className={styles.about_title}>About</h1>
                        <Line />
                        <div className={styles.about_profile}>
                            <div className={styles.about_img}>
                                <img src="/IMG/Profile.png" alt="profile" />
                            </div>
                            <div className={styles.sentences}>
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
                    </div>
                </section>

                <section id="work" className={styles.work}>
                    <div className="title">
                        <F_line />
                        <h1 className={styles.work_title}>Work</h1>
                        <Line />
                        <div className={styles.work_above}>
                            <Window
                                work_img="/IMG/portfolio.png"
                                product_title="ポートフォリオ作成"
                                explanation="学校の授業で自分のポートフォリオを作成しました"
                            />
                            <div className={styles.divider}></div>
                            <Window
                                work_img="/IMG/america.png"
                                product_title="アメリカ海外研修"
                                explanation="アメリカへ10日間の研修に行きました"
                            />   
                        </div>
                        <F_line />
                        <div className={styles.work_below}>
                            <Window
                                work_img="/IMG/Noimage.png"
                                product_title="MicrosoftCopilot"
                                explanation="Microsoftの企業プロジェクトに参加しました"
                            />
                            <div className={styles.underdivider}></div>
                            <Window
                                work_img="/IMG/Noimage.png"
                                product_title="アプリ作成"
                                explanation="ポーカーのチップ計算アプリを作成中です"
                            />
                        </div>
                    </div>
                </section>

                <section id="contact" className={styles.contact}>
                    <div className="title">
                        <F_line />
                        <h1 className={styles.contact_title}>Contact</h1>
                        <Whiteshortline />
                        <p className={styles.mail}>ktc24a31e0002@edu.kyoto-tech.ac.jp</p>
                    </div>
                    <Whiteline/>
                    <Footer />
                </section>
            </div>
        </>
        
    );
}
