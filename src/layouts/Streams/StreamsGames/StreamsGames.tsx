import styles from "./StreamsGames.module.css";
import Icon from "@components/Icon/Icon";

interface StreamGameProps {
    src: string;
}

const StreamsGames = ({ src }: StreamGameProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemContent}>
                <div className={styles.itemContentImage}>
                    <img className={styles.itemContentImg} src={src} />
                </div>
                <div className={styles.itemContentDescription}>
                    <div className={styles.iconContentDescriptionInfoViews}>
                        Fortnite
                    </div>
                    <div className={styles.iconContentDescriptionInfo}>
                        <Icon
                            className={styles.iconContentDescriptionInfoImage}
                            name={"home"}
                            size={16}
                        />
                        <div className={styles.iconContentDescriptionInfoViews}>
                            279
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StreamsGames;
