import { SidebarItem } from "@layouts/Sidebar/SidebarItem/SidebarItem";
import LogoFull from "@public/aodzone_logo_full.svg";
import LogoShort from "@public/aodzone_logo_short.svg";
import Icon from "@components/Icon/Icon";
import { useEffect } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
    getSidebarCollapsed,
    loadSidebarCollapseState,
    sidebarCollapseToggle,
} from "@redux/appSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
    const sidebarCollapsed = useSelector(getSidebarCollapsed);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(loadSidebarCollapseState());
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

    const isActiveSidebarHref = (url: string) => {
        return router.asPath === url;
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
                    <Link href="/">
                        <a>
                            <SidebarItem
                                title="Главная"
                                icon="home"
                                active={isActiveSidebarHref("/")}
                            />
                        </a>
                    </Link>
                </li>
                <li className={styles.sidebarListItem}>
                    <Link href="/news">
                        <a>
                            <SidebarItem
                                title="Новости"
                                icon="news"
                                active={isActiveSidebarHref("/news")}
                            />
                        </a>
                    </Link>
                </li>
                <li className={styles.sidebarListItem}>
                    <Link href="/team">
                        <a>
                            <SidebarItem
                                title="Команда"
                                icon="team"
                                active={isActiveSidebarHref("/team")}
                            />
                        </a>
                    </Link>
                </li>
                <li className={styles.sidebarListItem}>
                    <Link href="/matches">
                        <a>
                            <SidebarItem
                                title="Матчи"
                                icon="matches"
                                active={isActiveSidebarHref("/matches")}
                            />
                        </a>
                    </Link>
                </li>
                <li className={styles.sidebarListItem}>
                    <Link href="/matches/1">
                        <a>
                            <SidebarItem
                                title="Матч"
                                icon="matches"
                                active={isActiveSidebarHref("/matches/1")}
                            />
                        </a>
                    </Link>
                </li>
                <li className={styles.sidebarListItem}>
                    <Link href="/tournaments">
                        <a>
                            <SidebarItem
                                title="Турниры"
                                icon="team"
                                active={isActiveSidebarHref("/tournaments")}
                            />
                        </a>
                    </Link>
                </li>
                <li className={styles.sidebarListItem}>
                    <Link href="/streams">
                        <a>
                            <SidebarItem
                                title="Стримы"
                                icon="streams"
                                active={isActiveSidebarHref("/streams")}
                            />
                        </a>
                    </Link>
                </li>
                <li className={styles.sidebarListItem}>
                    <Link href="/forum">
                        <a>
                            <SidebarItem
                                title="Форум"
                                icon="team"
                                active={isActiveSidebarHref("/forum")}
                            />
                        </a>
                    </Link>
                </li>
                <li className={styles.sidebarListItem}>
                    <Link href="/media">
                        <a>
                            <SidebarItem
                                title="Медиа"
                                icon="media"
                                active={isActiveSidebarHref("/media")}
                            />
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};
