"use client";
import styles from "./index.module.css";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // スムーズスクロールの関数
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault(); // デフォルトのリンク動作を防止
        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    // メニューを開く・閉じる
    const toggleMenu = () => {
        console.log('Before:', isMenuOpen);  // 状態確認
        setIsMenuOpen((prev) => {
            const newState = !prev;
            console.log('After:', newState);  // 状態確認後
            return newState;
        });
    };

    return (
        <header className={styles.header}>
            {/* ドットメニュー */}
            <div 
                className={`${styles.dotMenu} ${isMenuOpen ? styles.open : ""}`} 
                onClick={toggleMenu}
            >
                {/* ドットが表示されている場合 */}
                {!isMenuOpen && (
                    <>
                        <div className={styles.dot}></div>
                        <div className={styles.dot}></div>
                        <div className={styles.dot}></div>
                    </>
                )}
                {/* メニューが表示されている場合 */}
                {isMenuOpen && (
                    <div className={styles.menuContent}>
                        <ul>
                            <li><a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a></li>
                            <li><a href="#work" onClick={(e) => handleScroll(e, "work")}>Work</a></li>
                            <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>

            {/* 横並びのメニュー */}
            <ul className={styles.ul}>
                <li><a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a></li>
                <li><a href="#work" onClick={(e) => handleScroll(e, "work")}>Work</a></li>
                <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>
            </ul>
        </header>
    );
}
