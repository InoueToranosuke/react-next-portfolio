"use client";
import styles from "./index.module.css";

export default function Header() {
    // スムーズスクロールの関数
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault(); // デフォルトのリンク動作を防止
        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <header className={styles.header}>
            <ul className={styles.ul}>
                <li><a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a></li>
                <li><a href="#work" onClick={(e) => handleScroll(e, "work")}>Work</a></li>
                <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>
            </ul>
        </header>
    );
}
