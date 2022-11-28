import { Button } from "@/components/ui/Button";
import { MatchItemTeam } from "@/components/views/MatchDetailView/MatchItemTeam";
import { Tag } from "@/components/ui/Tag";
import { UserTeam } from "@/components/views/MatchDetailView/UserTeam";
import styles from "./MatchDetailView.module.scss";

interface MatchDetailProps {
    title: string;
    description: string;
    src: string;
    data: string;
    time: string;
}

export const MatchDetailView = ({
    title,
    description,
    src,
    time,
    data,
}: MatchDetailProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.header}>
                <div className={styles.header__title}>
                    Комната матча - {title}
                </div>
                <div className={styles.content}>
                    <div className={styles.content_description}>
                        {description}
                    </div>
                    <div className={styles.button}>
                        <Button
                            buttonClassName={styles.button__btn}
                            text="Поделиться"
                        />
                    </div>
                </div>
                <img className={styles.logo} src={src} alt="Логотип игры" />
            </div>
            <div className={styles.info}>
                <div className={styles.wrapper}>
                    <MatchItemTeam
                        title="ЛУПА"
                        src="https://img.freepik.com/premium-vector/e-sports-team-logo-with-viking_113398-8.jpg"
                        score={3}
                        status="Victory"
                        nameStatus="victory"
                    />
                    <div className={styles.detail}>vs</div>
                    <MatchItemTeam
                        title="ПУПА"
                        src="https://img.freepik.com/premium-vector/e-sports-team-logo-with-viking_113398-8.jpg"
                        score={0}
                        status="Defeat"
                        align="right"
                        nameStatus="defeat"
                    />
                </div>
                <div className={styles.data}>
                    <div className={styles.data__info}>{data}</div>
                    <div className={styles.data__time}>{time}</div>
                </div>
                <div className={styles.tags}>
                    <Tag label="DE_DUST2" />
                    <Tag label="30 ROUNDS" />
                    <Tag label="SVS" />
                    <Tag label="DE_DUST2" />
                </div>
            </div>
            <div className={styles.teams}>
                <UserTeam />
                <UserTeam />
            </div>
        </div>
    );
};
