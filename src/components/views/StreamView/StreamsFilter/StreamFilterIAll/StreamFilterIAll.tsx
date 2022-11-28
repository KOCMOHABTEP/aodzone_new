import { Icon } from "@/components/ui/Icon";
import styles from "./StreamFilterIAll.module.scss";

export const StreamFilterIAll = () => {
    return (
        <div className={styles.item}>
            <div className={styles.item__tabs}>SEE ALL</div>
            <Icon className={styles.item__icon} name="arrow_right" size={16} />
        </div>
    );
};
