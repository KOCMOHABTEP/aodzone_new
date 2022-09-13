import Icon from "@components/Icon/Icon";
import { ICON_NAME } from "@components/Icon/Icon.library";
import { useSelector } from "react-redux";
import { getSidebarCollapsed } from "@redux/appSlice";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import Tooltip from "@components/Tooltip/Tooltip";
import { useState } from "react";
import styles from "./SidebarItem.module.scss";

interface SidebarItemProps {
    title: string;
    href: string;
    icon: ICON_NAME;
}

export const SidebarItem = ({ href, title, icon }: SidebarItemProps) => {
    const router = useRouter();
    const sidebarCollapsed = useSelector(getSidebarCollapsed);

    const [tooltipVisibility, setTooltipVisibility] = useState(false);

    const isActiveSidebarHref = router.asPath === href;

    const showDescription = Boolean(!sidebarCollapsed);
    const showTooltip = Boolean(sidebarCollapsed);

    const sidebarItemClassNames = cn(styles.sidebarItem, {
        [styles.sidebarItemCollapsed]: sidebarCollapsed,
        [styles.sidebarItemActive]: isActiveSidebarHref,
    });

    const handleShowTooltip = event => {
        // const currentTargetRect = event.currentTarget.getBoundingClientRect();
        // const event_offsetX = event.pageX - currentTargetRect.left;
        // const event_offsetY = event.pageY - currentTargetRect.top;
        // console.log({
        //     event_offsetX,
        //     event_offsetY,
        // });
        setTooltipVisibility(true);
    };

    const handleHideTooltip = () => {
        setTooltipVisibility(false);
    };

    return (
        <Link href={href}>
            <a>
                <div
                    className={sidebarItemClassNames}
                    onMouseOver={handleShowTooltip}
                    onMouseLeave={handleHideTooltip}
                >
                    <div className={styles.sidebarItemContainer}>
                        <Icon name={icon} className={styles.sidebarItemIcon} />
                        {showDescription && (
                            <span className={styles.sidebarItemText}>
                                {title}
                            </span>
                        )}
                    </div>
                </div>
                {/* <Tooltip */}
                {/*    visible={tooltipVisibility} */}
                {/*    label={title} */}
                {/*    position={{ x: 0, y: 0 }} */}
                {/* /> */}
            </a>
        </Link>
    );
};
