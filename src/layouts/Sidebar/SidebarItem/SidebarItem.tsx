import Icon from "@/components/Icon/Icon";
import { ICON_NAME } from "@/components/Icon/Icon.library";
import { useSelector } from "react-redux";
import cn from "classnames";
import Tooltip from "@/components/Tooltip/Tooltip";
import { useState } from "react";
import { usePopper } from "react-popper";
import { getSidebarCollapsed } from "@/redux/app/app.selectors";
import styles from "./SidebarItem.module.scss";

interface SidebarItemProps {
    title: string;
    icon: ICON_NAME;
    active: boolean;
}

export const SidebarItem = ({ title, icon, active }: SidebarItemProps) => {
    const sidebarCollapsed = useSelector(getSidebarCollapsed);

    const [tooltipVisibility, setTooltipVisibility] = useState(false);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);

    const { styles: popperStyles, attributes } = usePopper(
        referenceElement,
        popperElement,
        {
            placement: "right",
            modifiers: [
                {
                    name: "offset",
                    options: {
                        offset: [0, 20],
                    },
                },
            ],
        }
    );

    const showDescription = Boolean(!sidebarCollapsed);
    const showTooltip = Boolean(sidebarCollapsed && tooltipVisibility);

    const sidebarItemClassNames = cn(styles.sidebarItem, {
        [styles.sidebarItemCollapsed]: sidebarCollapsed,
        [styles.sidebarItemActive]: active,
    });

    return (
        <>
            <div
                ref={setReferenceElement}
                className={sidebarItemClassNames}
                onMouseOver={() => setTooltipVisibility(true)}
                onMouseLeave={() => setTooltipVisibility(false)}
            >
                <div className={styles.sidebarItemContainer}>
                    <Icon name={icon} className={styles.sidebarItemIcon} />
                    {showDescription && (
                        <span className={styles.sidebarItemText}>{title}</span>
                    )}
                </div>
            </div>
            {showTooltip && (
                <Tooltip
                    visible={true}
                    label={title}
                    customRef={setPopperElement}
                    customStyles={popperStyles.popper}
                    attributes={attributes.popper}
                />
            )}
        </>
    );
};
