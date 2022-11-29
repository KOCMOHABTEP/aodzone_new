import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

import styles from "@/components/ui/UserCard/UserCardMenu/UserCardMenu.module.scss";

interface UserCardMenuProps {
    onSelectItem: (event: any) => void;
}

export const UserCardMenu = ({ onSelectItem }: UserCardMenuProps) => {
    return (
        <div className={styles.menu}>
            <Link href="/profile">
                <a className={styles.item} onClick={onSelectItem}>
                    <div className={styles.container}>
                        <Icon
                            name="profile"
                            size={16}
                            className={styles.container__icon}
                        />
                        <div className={styles.container__text}>Профиль</div>
                    </div>
                </a>
            </Link>

            <Link href="/logout">
                <a className={styles.item} onClick={onSelectItem}>
                    <div className={styles.container}>
                        <Icon
                            name="logout"
                            size={16}
                            className={styles.container__icon}
                        />
                        <div className={styles.container__text}>Выйти</div>
                    </div>
                </a>
            </Link>
        </div>
    );
};
