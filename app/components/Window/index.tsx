import exp from "constants";
import Line from "../Line";
import styles from "./index.module.css";
import Window_underline from "../Window_underline";

type Props = {
    work_img: string;
    product_title: string;
    explanation: string;
}

const Window = ({ work_img, product_title, explanation }: Props) => {
    return (
        <div className={styles.window}>
            <img className={styles.work_img} src={work_img} alt="work_img" />
            <h2 className={styles.product_title}>{product_title}</h2>
            <p className={styles.explanation}>{explanation}</p>
        </div>
    );
};

export default Window;
