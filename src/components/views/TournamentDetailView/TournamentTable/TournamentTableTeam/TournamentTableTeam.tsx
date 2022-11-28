import styles from "./TournamentTableTeam.module.scss";

interface TournamentTableTeamProps {
    nameTeam: string;
    gameScore: number;
}

export const TournamentTableTeam = ({
    nameTeam,
    gameScore,
}: TournamentTableTeamProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.image}>
                <img
                    className={styles.image__icon}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfCAd4AtTJbbcQljRDgUF9nGt0CNTHS2h0Fw&usqp=CAU"
                    alt="icon"
                />
            </div>
            <div className={styles.content}>
                <div className={styles.content__title}>{nameTeam}</div>
                <div className={styles.content__number}>{gameScore}</div>
            </div>
        </div>
    );
};
