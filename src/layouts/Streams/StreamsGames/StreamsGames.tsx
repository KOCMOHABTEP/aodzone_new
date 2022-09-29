import Icon from "@components/Icon/Icon";
import styles from "./StreamsGames.module.css";

interface StreamGameProps {
    nameGame: string;
    views: number;
    src: string;
}

const StreamsGames = ({ nameGame, views, src }: StreamGameProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemContent}>
                <div className={styles.itemContentImage}>
                    <img className={styles.itemContentImg} src={src} />
                </div>
                <div className={styles.itemContentDescription}>
                    <div className={styles.itemContentDescriptionNickName}>
                        {nameGame}
                    </div>
                    <div className={styles.itemContentDescriptionIcon}>
                        <Icon
                            className={styles.itemContentDescriptionIconImage}
                            name="home"
                            size={16}
                        />
                    </div>
                    <div className={styles.itemContentDescriptionViews}>
                        {views}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StreamsGames;
