"use client"; // クライアントコンポーネントとして指定（onClickを使用するため）

import styles from "./index.module.css";

export default function Footer() {
    // ページの一番上にスクロールする関数
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footer_title}>
                    <h1>© 2025 Toranosuke Inoue</h1>
                </div>
                <div className={styles.scrollToTop} onClick={scrollToTop}>
                    ↑Back to Top↑
                </div>
            </div>
        </footer>
    );
}
