import cn from "classnames";
import { Icon } from "@/components/ui/Icon";
import Link from "next/link";
import styles from "./ForumItem.module.scss";

interface ForumItemProps {
    title: string;
    description?: string;
    created: string;
}

export const ForumItem = ({ title, description, created }: ForumItemProps) => {
    return (
        <Link href="/forum/1">
            <a className={styles.item}>
                <div className={styles.icons}>
                    <Icon name="home" size={40} />
                    <Icon
                        className={styles.icons__img}
                        name="comments"
                        size={16}
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.header__info}>[Sticky]</div>
                        <div className={styles.header__title}>{title}</div>
                        <div className={cn(styles.label, styles.label__violet)}>
                            FINISHED
                        </div>
                    </div>
                    <div className={styles.description}>{description}</div>
                    <div className={styles.forum}>Тема создана {created}</div>
                </div>
            </a>
        </Link>
    );
};
