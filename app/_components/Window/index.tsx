import { MicroCMSImage } from "microcms-js-sdk";
import styles from "./index.module.css";
import MoreLink from "../more";


type Props = {
    work_img: MicroCMSImage | null;
    product_title: string;
    explanation: string;
    href: string;
}

const Window = ({ work_img, product_title, explanation, href }: Props) => {
    return (
        <div className={styles.window}>
            {work_img ? (
                <img className={styles.work_img} src={work_img.url} alt="work_img" />
            ) : (
                <img className={styles.work_img}src="IMG/Noimage.png" alt="no_image" />
            )}
            <h2 className={styles.product_title}>{product_title}</h2>
            <p className={styles.explanation}>{explanation}</p>
            <MoreLink href={href} />
        </div>
    );
};

export default Window;
