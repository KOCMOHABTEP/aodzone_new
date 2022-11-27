import Icon from "@/components/Icon/Icon";
import { useState } from "react";
import styles from "./ForumFilterItem.module.css";

interface ForumFilterItemProps {
    title: string;
    description?: string;
    titleTopic?: string;
    comments: number;
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
                    <div className={styles.itemContentTitle}>{title}</div>
                    <div className={styles.itemContentDescription}>
                        {description}
                    </div>
                </div>
                <div>
                    <Icon name="arrow_down" size={20} />
                </div>
            </div>
            {dropDownShown && (
                <div className={styles.dropDown}>
                    <div className={styles.dropDownTitle}>{titleTopic}</div>
                    <div className={styles.dropDownValue}>
                        {comments} комментариев
                    </div>
                </div>
            )}
        </>
    );
};

export default ForumFilterItem;
