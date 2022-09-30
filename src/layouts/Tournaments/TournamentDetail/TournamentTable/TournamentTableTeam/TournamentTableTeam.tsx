import styles from "./TournamentTableTeam.module.css";

interface TournamentTableTeamProps {
    nameTeam: string;
    gameScore: number;
}

const TournamentTableTeam = ({
    nameTeam,
    gameScore,
}: TournamentTableTeamProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemImage}>
                <img
                    className={styles.itemImageIcon}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfCAd4AtTJbbcQljRDgUF9nGt0CNTHS2h0Fw&usqp=CAU"
                    alt="icon"
                />
            </div>
            <div className={styles.itemContent}>
                <div className={styles.itemContentTitle}>{nameTeam}</div>
                <div className={styles.itemContentNumber}>{gameScore}</div>
            </div>
        </div>
    );
};

export default TournamentTableTeam;
