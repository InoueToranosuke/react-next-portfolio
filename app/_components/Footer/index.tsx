"use client"; // クライアントコンポーネントとして指定

import { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function Footer() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // クライアントサイドでのみ `true` に設定
    }, []);

    const scrollToTop = () => {
        if (isClient && typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
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
