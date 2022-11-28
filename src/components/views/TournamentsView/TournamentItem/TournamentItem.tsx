import { Icon } from "@/components/ui/Icon";
import cn from "classnames";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import styles from "./TournamentItem.module.scss";

type TournamentType = "IN_PROGRESS" | "FINISHED" | "UPCOMING";

interface TournamentItemStatusLabelProps {
    label: string;
    type: TournamentType;
    src: string;
}

const TournamentItemStatusLabel = ({
    label,
    type,
}: TournamentItemStatusLabelProps) => {
    return (
        <div
            className={cn(styles.label, {
                [styles.label__grey]: type === "IN_PROGRESS",
                [styles.label__green]: type === "UPCOMING",
                [styles.label__violet]: type === "FINISHED",
            })}
        >
            {label}
        </div>
    );
};

interface TournamentItemProps {
    type: TournamentType;
    src: string;
}

export const TournamentItem = ({ type, src }: TournamentItemProps) => {
    const generateLabelCaption = () => {
        if (type === "IN_PROGRESS") {
            return "IN PROGRESS";
        }
        if (type === "FINISHED") {
            return "FINISHED";
        }
        if (type === "UPCOMING") {
            return "UPCOMING";
        }
        return "";
    };

    const renderTournamentActions = () => {
        if (type === "UPCOMING") {
            return (
                <>
                    <div className={styles.players}>36/36</div>
                    <Button buttonClassName={styles.button} text="JOIN" />
                </>
            );
        }
        if (type === "IN_PROGRESS") {
            return <div className={styles.players}>36/36</div>;
        }
        if (type === "FINISHED") {
            return (
                <div className={styles.winner}>
                    <Icon
                        className={styles.winner__icon}
                        name="views"
                        size={16}
                    />
                    <div className={styles.winner__name}>AOD ZONE</div>
                </div>
            );
        }
        return null;
    };

    return (
        <Link href="/tournaments/1">
            <a className={styles.item}>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <div className={styles.top__image}>
                            <img
                                className={styles.top__img}
                                src={src}
                                alt="фон"
                            />
                        </div>
                        <div className={styles.head}>
                            <div className={styles.head__label}>GAMING</div>
                            <div className={styles.head__label}>GAMING</div>
                            <div className={styles.head__label}>GAMING</div>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.content}>
                            <div className={styles.content__row}>
                                <div className={styles.content__title}>
                                    Mega cracken masters open
                                </div>
                                <Icon
                                    className={styles.content__icon}
                                    name="like"
                                    size={16}
                                />
                            </div>
                            <div className={styles.status}>
                                <TournamentItemStatusLabel
                                    label={generateLabelCaption()}
                                    type={type}
                                    src={src}
                                />
                                <div className={styles.status__info}>
                                    Finishing in 2D 3H 22M
                                </div>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.column}>
                                <div className={styles.card}>
                                    <div className={styles.card__title}>
                                        FORMAT
                                    </div>
                                    <div className={styles.card__value}>
                                        5 vs 5
                                    </div>
                                </div>
                                <div className={styles.card}>
                                    <div className={styles.card__title}>
                                        ENTRY
                                    </div>
                                    <div className={styles.card__value}>
                                        FREE
                                    </div>
                                </div>
                                <div className={styles.card}>
                                    <div className={styles.card__title}>
                                        PRICE
                                    </div>
                                    <div className={styles.card__value}>
                                        20$
                                    </div>
                                </div>
                            </div>
                            <div className={styles.column}>
                                {renderTournamentActions()}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};
