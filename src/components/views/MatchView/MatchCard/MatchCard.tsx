import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { MatchCardInfo } from "@/components/views/MatchView/MatchCard/MatchCardInfo";
import { MatchCardInfoUser } from "@/components/views/MatchView/MatchCard/MatchCardInfoUser";
import styles from "./MatchCard.module.scss";

interface MatchCardProps {
    data: string;
    team: string;
}

export const MatchCard = ({ data, team }: MatchCardProps) => {
    return (
        <Link href="/matches/1">
            <a className={styles.item}>
                <div className={styles.header}>
                    <div className={styles.header__date}>{data}</div>
                    <div className={styles.header__result}>
                        <Icon name="timer" size={16} className={styles.icon} />
                        <span>{team} Мин</span>
                        <span>—</span>
                        <div className={styles.status}>ПОБЕДА</div>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.content__info}>
                        <div>
                            <MatchCardInfoUser
                                title="КОСМОНАВТ"
                                level={23}
                                align="left"
                            />
                        </div>
                        <div className={styles.score}>1:0</div>
                        <div>
                            <MatchCardInfoUser
                                title="УЛЁТНЫЙ"
                                level={12}
                                align="right"
                            />
                        </div>
                    </div>
                    <div className={styles.info}>
                        <MatchCardInfo title="Карта" description="map_0822" />
                        <MatchCardInfo title="Убийств" description="26" />
                        <MatchCardInfo title="Смертей" description="32" />
                    </div>
                </div>
            </a>
        </Link>
    );
};
