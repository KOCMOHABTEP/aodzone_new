import styles from "./TournamentTableTeam.module.css";

const TournamentTableTeam = () => {
    return (
        <div className={styles.item}>
            <img
                className={styles.itemIcon}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfCAd4AtTJbbcQljRDgUF9nGt0CNTHS2h0Fw&usqp=CAU"
                alt="icon"
            />
            <div className={styles.itemTitle}>Team Flawed</div>
            <div className={styles.itemNumber}>2</div>
        </div>
    );
};

export default TournamentTableTeam;
