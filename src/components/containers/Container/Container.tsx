import { useSelector } from "react-redux";
import cn from "classnames";
import { getSidebarCollapsed } from "@/redux/app/app.selectors";
import { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./Container.module.scss";

export const Container: FC<PropsWithChildren<ReactNode>> = ({ children }) => {
    const sidebarCollapsed = useSelector(getSidebarCollapsed);

    return (
        <div
            className={cn(styles.container, {
                [styles.container__full]: sidebarCollapsed,
            })}
        >
            <div className={styles.inner}>
                <div
                    className={cn(styles.content, {
                        [styles.content__full]: sidebarCollapsed,
                    })}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
