import Link from "next/link";
import Avatar from "@components/Avatar/Avatar";
import Icon from "@components/Icon/Icon";
import UserCard from "@components/UserCard/UserCard";
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

                <UserCard />
            </div>
        </div>
    );
};
