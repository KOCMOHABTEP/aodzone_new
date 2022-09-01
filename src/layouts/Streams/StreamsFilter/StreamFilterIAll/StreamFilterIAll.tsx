import styles from "./StreamFilterIAll.module.css";
import Icon from "@components/Icon/Icon";

const StreamFilterIAll = () => {
    return (
        <div className={styles.item}>
            <div className={styles.itemTabs}>SEE ALL</div>
            <Icon className={styles.itemIcon} name={"arrow_right"} size={16} />
        </div>
    );
};

export default StreamFilterIAll;
