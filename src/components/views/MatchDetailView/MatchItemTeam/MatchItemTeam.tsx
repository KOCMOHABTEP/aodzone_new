import cn from "classnames";
import styles from "./MatchItemTeam.module.scss";

interface MatchItemTeamProps {
    align?: "left" | "right";
    title: string;
    src: string;
    score: number;
    status: string;
    nameStatus: "victory" | "defeat" | "draw";
}

export const MatchItemTeam = ({
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
                className={cn(styles.content, {
                    [styles.content__left]: align === "left",
                    [styles.content__right]: align === "right",
                })}
            >
                <div
                    className={cn(styles.result, {
                        [styles.result__left]: true,
                    })}
                >
                    <div
                        className={cn(styles.battle, {
                            [styles.battle__victory]: nameStatus === "victory",
                            [styles.battle__defeat]: nameStatus === "defeat",
                            [styles.battle__draw]: nameStatus === "draw",
                        })}
                    >
                        {status}
                    </div>
                    <div className={styles.title}>{title}</div>
                </div>
                <img className={styles.logo} src={src} alt="logo" />
                <div className={styles.score}>{score}</div>
            </div>
        </div>
    );
};
