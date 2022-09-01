import styles from "./ForumFilterItem.module.css";
import Icon from "@components/Icon/Icon";
import { useState } from "react";

const ForumFilterItem = () => {
    const [dropDownShown, setDropDownShown] = useState(false);

    return (
        <>
            <div
                onClick={() => setDropDownShown(!dropDownShown)}
                className={styles.item}
            >
                <Icon
                    className={styles.itemImage}
                    name={"comments"}
                    size={32}
                />
                <div className={styles.itemContent}>
                    <div className={styles.itemContentTitle}>
                        Counter Strike
                    </div>
                    <div className={styles.itemContentDescription}>
                        Chill out and discuss about game
                    </div>
                </div>
                <Icon name={"arrow_down"} size={20} />
            </div>
            {dropDownShown && (
                <div className={styles.dropDown}>
                    <div className={styles.dropDownTitle}>General</div>
                    <div className={styles.dropDownValue}>511 TOPICS</div>
                </div>
            )}
        </>
    );
};

export default ForumFilterItem;
