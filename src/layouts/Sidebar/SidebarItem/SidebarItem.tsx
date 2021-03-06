import Icon from "@components/Icon/Icon";
import ActiveLink from "@components/ActiveLink/ActiveLink";
import { ICON_NAME } from "@components/Icon/Icon.library";
import styles from "./SidebarItem.module.css";

interface SidebarItemProps {
    title: string;
    href: string;
    icon: ICON_NAME;
    props?: {
        exact?: boolean;
        passHref?: boolean;
    };
}

export const SidebarItem = ({ href, title, icon, props }: SidebarItemProps) => {
    return (
        <ActiveLink
            href={href}
            activeClassName={styles.sidebarItemActive}
            {...props}
        >
            <a className={styles.sidebarItem}>
                <div className={styles.sidebarItemContainer}>
                    <Icon name={icon} className={styles.sidebarItemIcon} />
                    <span className={styles.sidebarItemText}>{title}</span>
                </div>
            </a>
        </ActiveLink>
    );
};
