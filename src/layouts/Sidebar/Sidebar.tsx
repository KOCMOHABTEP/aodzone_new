import { SidebarItem } from "@layouts/Sidebar/SidebarItem/SidebarItem";
import Logo from "@public/aodzone_logo.svg";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <div className={styles.logoInner}>
                    <Logo />
                </div>
            </div>
            <ul className={styles.sidebarList}>
                <li className={styles.sidebarListItem}>
                    <SidebarItem
                        title="Главная"
                        href="/"
                        icon="home"
                        props={{ exact: true, passHref: true }}
                    />
                </li>
                <li className={styles.sidebarListItem}>
                    <SidebarItem
                        title="Новости"
                        href="/news"
                        icon="news"
                        props={{ passHref: true }}
                    />
                </li>
                <li className={styles.sidebarListItem}>
                    <SidebarItem
                        title="Команда"
                        href="/team"
                        icon="team"
                        props={{ passHref: true }}
                    />
                </li>
                <li className={styles.sidebarListItem}>
                    <SidebarItem
                        title="Матчи"
                        href="/matches"
                        icon="matches"
                        props={{ passHref: true }}
                    />
                </li>
                <li className={styles.sidebarListItem}>
                    <SidebarItem
                        title="Матч"
                        href="/match"
                        icon="matches"
                        props={{ passHref: true }}
                    />
                </li>
                <li className={styles.sidebarListItem}>
                    <SidebarItem
                        title="Турнир"
                        href="/tournament"
                        icon="team"
                        props={{ passHref: true }}
                    />
                </li>
                <li className={styles.sidebarListItem}>
                    <SidebarItem
                        title="Турниры"
                        href="/tournaments"
                        icon="team"
                        props={{ passHref: true }}
                    />
                </li>
                <li className={styles.sidebarListItem}>
                    <SidebarItem
                        title="Стримы"
                        href="/streams"
                        icon="streams"
                        props={{ passHref: true }}
                    />
                </li>
                <li className={styles.sidebarListItem}>
                    <SidebarItem
                        title="Группы"
                        href="/groups"
                        icon="groups"
                        props={{ passHref: true }}
                    />
                </li>
                <li className={styles.sidebarListItem}>
                    <SidebarItem
                        title="Медиа"
                        href="/media"
                        icon="media"
                        props={{ passHref: true }}
                    />
                </li>
            </ul>
        </div>
    );
};
