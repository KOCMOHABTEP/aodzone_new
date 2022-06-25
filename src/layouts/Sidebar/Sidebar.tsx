import { SidebarItem } from "@layouts/Sidebar/SidebarItem/SidebarItem";
import styles from "./Sidebar.module.css";
import Logo from "../../../public/aodzone_logo.svg";

export const Sidebar = () => {
    const sidebarRoutesItems = [
        {
            title: "Главная",
            href: "/",
            icon: "home",
            props: { exact: true, passHref: true },
        },
        {
            title: "Новости",
            href: "/news",
            icon: "news",
            props: { passHref: true },
        },
        {
            title: "Команда",
            href: "/team",
            icon: "team",
            props: { passHref: true },
        },
        {
            title: "Матчи",
            href: "/matches",
            icon: "matches",
            props: { passHref: true },
        },
        {
            title: "Стримы",
            href: "/streams",
            icon: "streams",
            props: { passHref: true },
        },
        {
            title: "Группы",
            href: "/groups",
            icon: "groups",
            props: { passHref: true },
        },
        {
            title: "Медиа",
            href: "/media",
            icon: "media",
            props: { passHref: true },
        },
    ];

    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <div className={styles.logoInner}>
                    <Logo className={styles.logoInnerSvg} />
                </div>
            </div>
            <ul className={styles.sidebarList}>
                {sidebarRoutesItems.map((items, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={index}>
                        <SidebarItem {...items} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
