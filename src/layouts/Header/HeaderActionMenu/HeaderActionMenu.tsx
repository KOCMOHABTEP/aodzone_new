import HeaderNotification from "@layouts/Header/HeaderNotification/HeaderNotification";
import Button from "@components/Button/Button";
import { ReactNode } from "react";
import Link from "next/link";
import styles from "./HeaderActionMenu.module.css";

interface HeaderActionMenuProps {
    title: string;
    visible: boolean;
    children: ReactNode;
}

const HeaderActionMenu = ({
    title,
    visible,
    children,
}: HeaderActionMenuProps) => {
    if (!visible) {
        return null;
    }

    return (
        <div className={styles.item}>
            <div className={styles.itemTitle}>{title}</div>
            <div className={styles.itemContainer}>{children}</div>
            <Link href="/notification">
                <a className={styles.itemButton}>
                    <Button
                        buttonClassName={styles.itemButtonBtn}
                        text="Посмотреть все"
                    />
                </a>
            </Link>
        </div>
    );
};

export default HeaderActionMenu;
