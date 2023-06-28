import { ICON_NAME } from "@/components/ui/Icon/Icon.library";
import { useSelector } from "react-redux";
import cn from "classnames";
import { Tooltip } from "@/components/ui/Tooltip";
import { Icon } from "@/components/ui/Icon";
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
    const [referenceElement, setReferenceElement] =
        useState<HTMLDivElement | null>(null);
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

    return (
        <>
            <div
                ref={setReferenceElement}
                className={cn(styles.item, {
                    [styles.itemCollapsed]: sidebarCollapsed,
                    [styles.itemActive]: active,
                })}
                onMouseOver={() => setTooltipVisibility(true)}
                onMouseLeave={() => setTooltipVisibility(false)}
            >
                <div className={styles.container}>
                    <Icon
                        name={icon}
                        className={styles.containerIcon}
                        size={20}
                    />
                    {showDescription && (
                        <span className={styles.containerLabel}>{title}</span>
                    )}
                </div>
            </div>
            <Tooltip
                visible={showTooltip}
                label={title}
                customRef={setPopperElement}
                customStyles={popperStyles.popper}
                attributes={attributes.popper}
            />
        </>
    );
};
