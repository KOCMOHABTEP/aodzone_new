import Icon from "@components/Icon/Icon";
import cn from "classnames";
import Button from "@components/Button/Button";
import Tag from "@components/Tag/Tag";
import MatchItemTeam from "@layouts/Matches/MatchDetail/MatchItemTeam/MatchItemTeam";
import UserTeam from "@layouts/Matches/MatchDetail/UserTeam/UserTeam";
import styles from "./MatchDetail.module.css";

interface MatchDetailProps {
    title: string;
    description: string;
    src: string;
    data: string;
    time: string;
}

const MatchDetail = ({
    title,
    description,
    src,
    time,
    data,
}: MatchDetailProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemHeader}>
                <div className={styles.itemHeaderTitle}>
                    Комната матча - {title}
                </div>
                <div className={styles.itemHeaderContent}>
                    <div className={styles.itemHeaderContentDescription}>
                        {description}
                    </div>
                    <div className={styles.itemButton}>
                        <Button
                            buttonClassName={styles.itemButtonBtn}
                            text="Поделиться"
                        />
                    </div>
                </div>
                <img
                    className={styles.itemLogoGame}
                    src={src}
                    alt="Логотип игры"
                />
            </div>
            <div className={styles.itemContent}>
                <div className={styles.itemContentInfo}>
                    <MatchItemTeam
                        title="ЛУПА"
                        src="https://img.freepik.com/premium-vector/e-sports-team-logo-with-viking_113398-8.jpg"
                        score={3}
                        status="Victory"
                        nameStatus="victory"
                    />
                    <div className={styles.textDetailMatch}>vs</div>
                    <MatchItemTeam
                        title="ПУПА"
                        src="https://img.freepik.com/premium-vector/e-sports-team-logo-with-viking_113398-8.jpg"
                        score={0}
                        status="Defeat"
                        align="right"
                        nameStatus="defeat"
                    />
                </div>
                <div className={styles.itemContentInfoData}>
                    <div className={styles.itemContentData}>{data}</div>
                    <div className={styles.itemContentTime}>{time}</div>
                </div>
                <div className={styles.itemTags}>
                    <Tag label="DE_DUST2" />
                    <Tag label="30 ROUNDS" />
                    <Tag label="SVS" />
                    <Tag label="DE_DUST2" />
                </div>
            </div>
            <div className={styles.itemInfoUserTeam}>
                <UserTeam />
                <UserTeam />
            </div>
        </div>
    );
};

export default MatchDetail;
