import Link from "next/link";
import Avatar from "@components/ui/Avatar/Avatar";
import Icon from "@components/ui/Icon/Icon";
import styles from "./Header.module.css";

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.menu}>
                <div className={styles.controls}>
                    <a href="#">
                        <div className={styles.controlsItem}>
                            <Icon name="notification" />
                        </div>
                    </a>
                    <a href="#">
                        <div className={styles.controlsItem}>
                            <Icon name="comments" />
                            <div className={styles.controlsActivities}>7</div>
                        </div>
                    </a>
                    <a href="#">
                        <div className={styles.controlsItem}>
                            <Icon name="friends" />
                            <div className={styles.controlsActivities}>1</div>
                        </div>
                    </a>
                </div>

                <Link href="/profile" passHref>
                    <a>
                        <Avatar level={34} />
                    </a>
                </Link>
            </div>
        </div>
    );
};
