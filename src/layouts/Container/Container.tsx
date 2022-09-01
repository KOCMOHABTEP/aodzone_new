import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import cn from "classnames";
import { getSidebarCollapsed } from "@redux/appSlice";
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
