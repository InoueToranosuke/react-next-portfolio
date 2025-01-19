import styles from "./index.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <ul className={styles.ul}>
                <li><a href="a">About</a></li>
                <li><a href="a">Work</a></li>
                <li><a href="a">Contact</a></li>
            </ul>
        </header>
    );
}
