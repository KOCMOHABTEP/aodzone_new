import { useSelector } from "react-redux";
import cn from "classnames";

import { getSidebarCollapsed } from "@/redux/app/app.selectors";
import styles from "./Container.module.css";

export const Container = ({ children }) => {
    const sidebarCollapsed = useSelector(getSidebarCollapsed);
    const containerClassName = cn(styles.container, {
        [styles.containerFull]: sidebarCollapsed,
    });
    const containerContentClassName = cn(styles.containerContent, {
        [styles.containerContentFull]: sidebarCollapsed,
    });

    return (
        <div className={containerClassName}>
            <div className={styles.containerInner}>
                <div className={containerContentClassName}>{children}</div>
            </div>
        </div>
    );
};
