import styles from "@components/UserCard/UserCardMenu/UserCardMenu.module.scss";
import Link from "next/link";
import Icon from "@components/Icon/Icon";

interface UserCardMenuProps {
    onSelectItem: (event: any) => void;
}

const UserCardMenu = ({ onSelectItem }: UserCardMenuProps) => {
    return (
        <div className={styles.menu}>
            <Link href="/profile">
                <a className={styles.item} onClick={onSelectItem}>
                    <div className={styles.itemContainer}>
                        <Icon
                            name="profile"
                            size={16}
                            className={styles.icon}
                        />
                        <div className={styles.text}>Профиль</div>
                    </div>
                </a>
            </Link>

            <Link href="/logout">
                <a className={styles.item} onClick={onSelectItem}>
                    <div className={styles.itemContainer}>
                        <Icon name="logout" size={16} className={styles.icon} />
                        <div className={styles.text}>Выйти</div>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default UserCardMenu;
