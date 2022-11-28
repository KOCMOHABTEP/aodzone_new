import { Icon } from "@/components/ui/Icon";
import cn from "classnames";
import Link from "next/link";
import styles from "./StreamItem.module.scss";

interface StreamItemProps {
    title: string;
    nickName: string;
    numbersViews: number;
    nameGame: string;
    src: string;
}

export const StreamItem = ({
    title,
    nickName,
    nameGame,
    numbersViews,
    src,
}: StreamItemProps) => {
    return (
        <Link href="/streams/1">
            <a className={styles.item}>
                <div className={styles.header}>
                    <div className={styles.image}>
                        <img className={styles.image__img} src={src} />
                    </div>
                    <div className={styles.info}>
                        <div className={cn(styles.stats, styles.stats__left)}>
                            <Icon
                                className={styles.stats__icon}
                                name="views"
                                size={16}
                            />
                            <div className={styles.stats__label}>LIVE</div>
                        </div>
                        <div className={cn(styles.stats, styles.stats__right)}>
                            <Icon
                                className={styles.stats__icon}
                                name="friends"
                                size={16}
                            />
                            <div className={styles.stats__label}>
                                {numbersViews}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    <Icon name="matches" />
                    <div className={styles.text}>
                        <div className={styles.text__title}>{title}</div>
                        <div className={styles.wrapper}>
                            <div className={styles.description}>{nickName}</div>
                            <span
                                className={cn(
                                    styles.description,
                                    styles.separation
                                )}
                            >
                                •
                            </span>
                            <div className={styles.description}>{nameGame}</div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};
