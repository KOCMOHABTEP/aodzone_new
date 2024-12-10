import { Icon } from "@/components/ui/Icon";
import { useState } from "react";
import Link from "next/link";
import styles from "./ForumFilterItem.module.scss";

interface ForumFilterItemProps {
    title: string;
    description?: string;
    titleTopic?: string;
    comments: number;
}

export const ForumFilterItem = ({
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
                <Icon className={styles.icon} name="comments" size={32} />
                <div className={styles.content}>
                    <div className={styles.content__title}>{title}</div>
                    <div className={styles.content__description}>
                        {description}
                    </div>
                </div>
                <div>
                    <Icon name="arrow_down" size={20} />
                </div>
            </div>
            {dropDownShown && (
                <Link href="/forum/1" className={styles.dropdown}>
                    <>
                        <div className={styles.dropdown__title}>
                            {titleTopic}
                        </div>
                        <div className={styles.dropdown__value}>
                            {comments} комментариев
                        </div>
                    </>
                </Link>
            )}
        </>
    );
};
