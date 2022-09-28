import Icon from "@components/Icon/Icon";
import Link from "next/link";
import MatchCardInfo from "@components/MatchCard/MatchCardInfo/MatchCardInfo";
import MatchCardInfoUser from "@components/MatchCard/MatchCardInfoUser/MatchCardInfoUser";
import styles from "./MatchCard.module.css";

interface MatchCardProps {
    data: string;
    team: string;
}

const MatchCard = ({ data, team }: MatchCardProps) => {
    return (
        <Link href="/matches/1">
            <a className={styles.item}>
                <div className={styles.itemHeader}>
                    <div className={styles.itemHeaderDate}>{data}</div>
                    <div className={styles.itemHeaderResults}>
                        <Icon
                            name="timer"
                            size={16}
                            className={styles.itemHeaderResultsIcon}
                        />
                        <span>{team} Мин</span>
                        <span>—</span>
                        <div className={styles.itemHeaderResultsStatus}>
                            ПОБЕДА
                        </div>
                    </div>
                </div>
                <div className={styles.itemContent}>
                    <div className={styles.itemContentMatchesInfo}>
                        <div>
                            <MatchCardInfoUser
                                title="КОСМОНАВТ"
                                level={23}
                                align="left"
                            />
                        </div>
                        <div className={styles.itemMatchScore}>1:0</div>
                        <div>
                            <MatchCardInfoUser
                                title="УЛЁТНЫЙ"
                                level={12}
                                align="right"
                            />
                        </div>
                    </div>
                    <div className={styles.itemMatchCardInfo}>
                        <MatchCardInfo title="Карта" description="map_0822" />
                        <MatchCardInfo title="Убийств" description="26" />
                        <MatchCardInfo title="Смертей" description="32" />
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default MatchCard;
