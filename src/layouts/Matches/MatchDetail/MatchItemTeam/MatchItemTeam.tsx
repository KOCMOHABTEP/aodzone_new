import cn from "classnames";
import styles from "./MatchItemTeam.module.css";

interface MatchItemTeamProps {
    align?: "left" | "right";
    title: string;
    src: string;
    score: number;
    status: string;
    nameStatus: "victory" | "defeat" | "draw";
}

const MatchItemTeam = ({
    title,
    src,
    score,
    status,
    align = "left",
    nameStatus = "draw",
}: MatchItemTeamProps) => {
    return (
        <div className={styles.item}>
            <div
                className={cn(styles.itemContent, {
                    [styles.itemContentLeft]: align === "left",
                    [styles.itemContentRight]: align === "right",
                })}
            >
                <div
                    className={cn(styles.itemContentResult, {
                        [styles.itemContentResultLeft]: true,
                    })}
                >
                    <div
                        className={cn(styles.itemContentBattleStatusResult, {
                            [styles.itemContentBattleStatusVictory]:
                                nameStatus === "victory",
                            [styles.itemContentBattleStatusDefeat]:
                                nameStatus === "defeat",
                            [styles.itemContentBattleStatusDraw]:
                                nameStatus === "draw",
                        })}
                    >
                        {status}
                    </div>
                    <div className={styles.itemContentTitle}>{title}</div>
                </div>
                <img className={styles.itemContentLogo} src={src} alt="logo" />
                <div className={styles.itemContentScore}>{score}</div>
            </div>
        </div>
    );
};

export default MatchItemTeam;
