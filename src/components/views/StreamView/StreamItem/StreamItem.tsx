import { Icon } from "@/components/ui/Icon";
import cn from "classnames";
import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import styles from "./StreamItem.module.scss";

interface StreamItemProps {
    title: string;
    nickName: string;
    numbersViews: number;
    nameGame: string;
    src: string;
    online?: boolean;
}

export const StreamItem = ({
    title,
    nickName,
    nameGame,
    numbersViews,
    src,
    online,
}: StreamItemProps) => {
    return (
        <Link href="/streams/1">
            <a className={styles.item}>
                <div className={styles.header}>
                    <div className={styles.image}>
                        <img className={styles.image__img} src={src} />
                    </div>
                    {online && (
                        <div className={cn(styles.info, styles.info__live)}>
                            <Icon
                                className={styles.info__icon}
                                name="streams"
                                size={16}
                            />
                            <div className={styles.info__label}>LIVE</div>
                        </div>
                    )}

                    <div className={cn(styles.info, styles.info__stats)}>
                        <Icon
                            className={styles.info__icon}
                            name="views"
                            size={16}
                        />
                        <div className={styles.info__label}>{numbersViews}</div>
                    </div>
                </div>
                <div className={styles.content}>
                    <Avatar size={32} />
                    <div className={styles.text}>
                        <h2 className={styles.text__title}>{title}</h2>
                        <div className={styles.wrapper}>
                            <h3 className={styles.description}>{nickName}</h3>
                            <span
                                className={cn(
                                    styles.description,
                                    styles.separation
                                )}
                            >
                                •
                            </span>
                            <h2 className={styles.description}>{nameGame}</h2>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};
