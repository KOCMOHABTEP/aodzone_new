import Icon from "@components/Icon/Icon";
import { useState } from "react";
import styles from "./ForumFilterItem.module.css";

interface ForumFilterItemProps {
    title: string;
    description?: string;
    titleTopic?: string;
    comments?: number;
}

const ForumFilterItem = ({
    title,
    description,
    titleTopic,
    comments,
}: ForumFilterItemProps) => {
    const [dropDownShown, setDropDownShown] = useState(false);

    return (
        <>
            <div
                onClick={() => setDropDownShown(!dropDownShown)}
                className={styles.item}
            >
                <Icon className={styles.itemImage} name="comments" size={32} />
                <div className={styles.itemContent}>
                    <div className={styles.itemContentTitle}>
                        Counter Strike
                    </div>
                    <div className={styles.itemContentDescription}>
                        Chill out and discuss about game
                    </div>
                </div>
                <div>
                    <Icon name="arrow_down" size={20} />
                </div>
            </div>
            {dropDownShown && (
                <div className={styles.dropDown}>
                    <div className={styles.dropDownTitle}>General</div>
                    <div className={styles.dropDownValue}>511 комментариев</div>
                </div>
            )}
        </>
    );
};

export default ForumFilterItem;
