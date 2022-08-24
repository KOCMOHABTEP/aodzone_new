import Icon from "@components/Icon/Icon";
import cn from "classnames";
import Button from "@components/Button/Button";
import styles from "./TournamentItem.module.css";

type TournamentType = "IN_PROGRESS" | "FINISHED" | "UPCOMING";

interface TournamentItemStatusLabelProps {
    label: string;
    type: TournamentType;
}

const TournamentItemStatusLabel = ({
    label,
    type,
}: TournamentItemStatusLabelProps) => {
    return (
        <div
            className={cn(styles.itemContentStatusLabel, {
                [styles.itemContentStatusLabelGrey]: type === "IN_PROGRESS",
                [styles.itemContentStatusLabelGreen]: type === "UPCOMING",
                [styles.itemContentStatusLabelViolet]: type === "FINISHED",
            })}
        >
            {label}
        </div>
    );
};

interface TournamentItemProps {
    type: TournamentType;
}

const TournamentItem = ({ type }: TournamentItemProps) => {
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
                    <div className={styles.itemInfoPlayers}>36/36</div>
                    <Button
                        buttonClassName={styles.itemInfoButton}
                        text="JOIN"
                    />
                </>
            );
        }
        if (type === "IN_PROGRESS") {
            return <div className={styles.itemInfoPlayers}>36/36</div>;
        }
        if (type === "FINISHED") {
            return (
                <div className={styles.itemInfoWinner}>
                    <Icon
                        className={styles.itemInfoWinnerIcon}
                        name="views"
                        size={16}
                    />
                    <div className={styles.itemInfoWinnerName}>AOD ZONE</div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className={styles.item}>
            <div className={styles.itemTop}>
                <div className={styles.itemHead}>
                    <div className={styles.itemHeadLabel}>GAMING</div>
                    <div className={styles.itemHeadLabel}>GAMING</div>
                    <div className={styles.itemHeadLabel}>GAMING</div>
                </div>
            </div>
            <div className={styles.itemBottom}>
                <div className={styles.itemContent}>
                    <div className={styles.itemContentRow}>
                        <div className={styles.itemContentTitle}>
                            Mega cracken masters open
                        </div>
                        <Icon
                            className={styles.itemContentIcon}
                            name="like"
                            size={16}
                        />
                    </div>
                    <div className={styles.itemContentStatus}>
                        <TournamentItemStatusLabel
                            label={generateLabelCaption()}
                            type={type}
                        />
                        <div className={styles.itemContentStatusInfo}>
                            Finishing in 2D 3H 22M
                        </div>
                    </div>
                </div>
                <div className={styles.itemInfo}>
                    <div className={styles.itemInfoColumn}>
                        <div className={styles.itemInfoCard}>
                            <div className={styles.itemInfoHead}>FORMAT</div>
                            <div className={styles.itemInfoValue}>5 vs 5</div>
                        </div>
                        <div className={styles.itemInfoCard}>
                            <div className={styles.itemInfoHead}>ENTRY</div>
                            <div className={styles.itemInfoValue}>FREE</div>
                        </div>
                        <div className={styles.itemInfoCard}>
                            <div className={styles.itemInfoHead}>PRICE</div>
                            <div className={styles.itemInfoValue}>20$</div>
                        </div>
                    </div>
                    <div className={styles.itemInfoColumn}>
                        {renderTournamentActions()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TournamentItem;
