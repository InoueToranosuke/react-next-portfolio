import styles from './index.module.css';

const MoreLink = ({ href = "#", text = "→More" }) => {
    return (
        <div className={styles.more}>
        <a href={href} className={styles.moreLink}>
            <p className={styles.moreText}>{text}</p>
        </a>
        </div>
    );
};

export default MoreLink;
