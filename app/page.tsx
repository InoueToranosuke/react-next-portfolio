import styles from "./page.module.css"; // CSS Modulesをインポート
import Header from "./_components/Header";
import Line from "./_components/Line";
import F_line from "./_components/F_line";
import Welcome from "./_components/Welcome";
import Myportfolio from "./_components/Myportfolio";
import To from "./_components/To";
import Window from "./_components/Window";
import Footer from "./_components/Footer";
import Image from "next/image";
import Whiteline from "./_components/whiteline";
import Whiteshortline from "./_components/Whiteshortline";
import Title from "./_components/Title";
import MoreLink from "./_components/more";
import { getBlogList } from "./ _libs/microcmsClient";
import Divider from "./_components/Divider";


export default async function Home() {
    const data = await getBlogList({
        limit: 4,
        orders: "createdAt",
    });

    console.log(data.contents);

    return (
        <>
            <div className="bgc">
                <section className={styles.top}>
                <div className="title">
                    <h1 className={styles.W_title}><Welcome/></h1> {/* CSS Modulesの適用 */}
                    <h1 className={styles.T_title}><To/></h1>
                    <h1 className={styles.M_title}><Myportfolio/></h1>
                </div>
                </section>

                <section id="about"  className={styles.about}>
                    <div className="title">
                        <F_line />
                        <Title title="About" />
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
                            </div>
                        </div>
                    </div>
                </section>

                <section id="work" className={styles.work}>
                    <div className="title">
                        <F_line />
                        <Title title="Work" />
                        <Line />
                        <div >
                            <ul className={styles.work_above}>
                                <span />
                                {data.contents.map((content, index) => (
                                    <li key={index}>
                                        <Window
                                        work_img={content.eyecatch}
                                        product_title={content.title}
                                        explanation={content.explanation}
                                        href={`/blog/${content.id}`}
                                    />
                                    </li>
                                ))}
                            </ul>
                            
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
