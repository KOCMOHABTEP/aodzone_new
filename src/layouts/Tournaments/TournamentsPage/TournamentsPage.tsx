import Icon from "@components/Icon/Icon";
import styles from "./TournamentsPage.module.css";

const TournamentsPage = () => {
    return (
        <div className={styles.wrapperTournamentsPage}>
            <div>header</div>
            <div>
                <div className={styles.wrapperTournamentsInfo}>
                    <div>
                        <div className={styles.wrapperTournamentItem}>
                            <div>фото+ачивки</div>
                            <div
                                className={styles.wrapperTextInfoTournamentItem}
                            >
                                <div>
                                    <div>Mega cracken masters open</div>
                                    <Icon name="like" />
                                </div>
                                <div
                                    className={styles.wrapperTextTournamentItem}
                                >
                                    <div
                                        className={
                                            styles.statusInProgressTournamentItem
                                        }
                                    >
                                        IN PROGRESS
                                    </div>
                                    <div className={styles.textTournamentItem}>
                                        Finishing in 2D 3H 22M
                                    </div>
                                </div>
                            </div>
                            <div>числовые инфо</div>
                        </div>
                        <div>Cracken Tournament</div>
                    </div>
                    <div>столбец 2</div>
                    <div>столбец 3</div>
                </div>
            </div>
        </div>
    );
};

export default TournamentsPage;
