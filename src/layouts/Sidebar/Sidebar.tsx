import { SidebarItem } from "@layouts/Sidebar/SidebarItem/SidebarItem";
import LogoFull from "@public/aodzone_logo_full.svg";
import LogoShort from "@public/aodzone_logo_short.svg";
import Icon from "@components/Icon/Icon";
import { useEffect } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import {
    getSidebarCollapseState,
    sidebarCollapseToggle,
} from "@redux/appSlice";
import Link from "next/link";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
    const sidebarCollapsed = useSelector(
        (state: RootState) => state.app.userConfig.sidebarCollapsed
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSidebarCollapseState());
    }, [dispatch]);

    const handleSidebarCollapse = () => {
        dispatch(sidebarCollapseToggle(!sidebarCollapsed));
    };

    const SidebarIcon = () => {
        if (sidebarCollapsed) {
            return <Icon name="arrow_right" size={16} />;
        }

        return <Icon name="arrow_left" size={16} />;
    };

    const sidebarClassName = cn(styles.sidebar, {
        [styles.sidebarCollapsed]: sidebarCollapsed,
    });
    const logoClassName = cn(styles.logo, {
        [styles.logoCollapsed]: sidebarCollapsed,
    });

    const LogoComponent = () => {
        if (sidebarCollapsed) {
            return <LogoShort />;
        }

        return <LogoFull />;
    };

    return (
        <div className={sidebarClassName}>
            <div
                className={styles.sidebarToggle}
                onClick={handleSidebarCollapse}
            >
                <SidebarIcon />
            </div>
            <div className={logoClassName}>
                <div className={styles.logoInner}>
                    <Link href="/">
                        <a>
                            <LogoComponent />
                        </a>
                    </Link>
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
                        href="/matches/1"
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
