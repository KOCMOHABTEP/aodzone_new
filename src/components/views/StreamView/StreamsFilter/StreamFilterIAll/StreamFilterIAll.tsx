import { Icon } from "@/components/ui/Icon";
import styles from "./StreamFilterIAll.module.scss";

export const StreamFilterIAll = () => {
    return (
        <div className={styles.item}>
            <a href="/streams/all" className={styles.item__tabs}>
                Посмотреть все
            </a>
            <Icon className={styles.item__icon} name="arrow_right" size={16} />
        </div>
    );
};
