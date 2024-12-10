import { SidebarItem } from "@/components/ui/Sidebar/SidebarItem/SidebarItem";
import LogoFull from "~/aodzone_logo_full.svg";
import LogoShort from "~/aodzone_logo_short.svg";
import { Icon } from "@/components/ui/Icon";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { getSidebarCollapsed } from "@/redux/app/app.selectors";
import { sidebarCollapseToggle } from "@/redux/app/app.slice";
import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
    const sidebarCollapsed = useSelector(getSidebarCollapsed);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSidebarCollapse = () => {
        dispatch(sidebarCollapseToggle(!sidebarCollapsed));
    };

    const isActiveSidebarHref = (url: string) => {
        return router.asPath.startsWith(url);
    };

    return (
        <div
            className={cn(styles.sidebar, {
                [styles.sidebarCollapsed]: sidebarCollapsed,
            })}
        >
            <div
                className={styles.sidebarToggle}
                onClick={handleSidebarCollapse}
            >
                {sidebarCollapsed ? (
                    <Icon name="arrow_right" size={16} />
                ) : (
                    <Icon name="arrow_left" size={16} />
                )}
            </div>
            <div
                className={cn(styles.logo, {
                    [styles.logoCollapsed]: sidebarCollapsed,
                })}
            >
                <div className={styles.logoInner}>
                    <Link href="/">
                        {sidebarCollapsed ? <LogoShort /> : <LogoFull />}
                    </Link>
                </div>
            </div>
            <ul className={styles.sidebarList}>
                <li className={styles.sidebarListItem}>
                    <Link href="/">
                        <SidebarItem
                            title="Главная"
                            icon="home"
                            active={router.asPath === "/"}
                        />
                    </Link>
                </li>
                <li className={styles.sidebarListItem}>
                    <Link href="/news">
                        <SidebarItem
                            title="Новости"
                            icon="news"
                            active={isActiveSidebarHref("/news")}
                        />
                    </Link>
                </li>
                <li className={styles.sidebarListItem}>
                    <Link href="/players">
                        <SidebarItem
                            title="Рейтинг игроков"
                            icon="profile"
                            active={isActiveSidebarHref("/players")}
                        />
                    </Link>
                </li>
                <li className={styles.sidebarListItem}>
                    <Link href="/teams">
                        <SidebarItem
                            title="Рейтинг команд"
                            icon="team"
                            active={isActiveSidebarHref("/teams")}
                        />
                    </Link>
                </li>

                {/* <li className={styles.sidebarListItem}> */}
                {/*    <Link href="/friends"> */}
                {/*        <a> */}
                {/*            <SidebarItem */}
                {/*                title="Друзья" */}
                {/*                icon="groups" */}
                {/*                active={isActiveSidebarHref("/friends")} */}
                {/*            /> */}
                {/*        </a> */}
                {/*    </Link> */}
                {/* </li> */}
                <li className={styles.sidebarListItem}>
                    <Link href="/matches">
                        <SidebarItem
                            title="Матчи"
                            icon="matches"
                            active={isActiveSidebarHref("/matches")}
                        />
                    </Link>
                </li>
                {/* <li className={styles.sidebarListItem}> */}
                {/*    <Link href="/tournaments"> */}
                {/*        <a> */}
                {/*            <SidebarItem */}
                {/*                title="Турниры" */}
                {/*                icon="team" */}
                {/*                active={isActiveSidebarHref("/tournaments")} */}
                {/*            /> */}
                {/*        </a> */}
                {/*    </Link> */}
                {/* </li> */}
                <li className={styles.sidebarListItem}>
                    <Link href="/streams">
                        <SidebarItem
                            title="Стримы"
                            icon="streams"
                            active={isActiveSidebarHref("/streams")}
                        />
                    </Link>
                </li>
                {/* <li className={styles.sidebarListItem}> */}
                {/*    <Link href="/forum"> */}
                {/*        <a> */}
                {/*            <SidebarItem */}
                {/*                title="Форум" */}
                {/*                icon="team" */}
                {/*                active={isActiveSidebarHref("/forum")} */}
                {/*            /> */}
                {/*        </a> */}
                {/*    </Link> */}
                {/* </li> */}
                <li className={styles.sidebarListItem}>
                    <Link href="/media">
                        <SidebarItem
                            title="Медиа"
                            icon="media"
                            active={isActiveSidebarHref("/media")}
                        />
                    </Link>
                </li>
            </ul>
        </div>
    );
};
