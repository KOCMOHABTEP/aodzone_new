import styles from "@/components/ui/UserCard/UserCardMenu/UserCardMenu.module.scss";
import { ReactNode } from "react";

interface UserCardMenuProps {
    children: ReactNode;
}

export const UserCardMenu = ({ children }: UserCardMenuProps) => {
    return <div className={styles.menu}>{children}</div>;
};
