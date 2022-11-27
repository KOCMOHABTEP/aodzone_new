import Icon from "@/components/Icon/Icon";
import styles from "./StreamFilterIAll.module.css";

const StreamFilterIAll = () => {
    return (
        <div className={styles.item}>
            <div className={styles.itemTabs}>SEE ALL</div>
            <Icon className={styles.itemIcon} name="arrow_right" size={16} />
        </div>
    );
};

export default StreamFilterIAll;
