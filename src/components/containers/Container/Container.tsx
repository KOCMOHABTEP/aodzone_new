import { useSelector } from "react-redux";
import cn from "classnames";
import { getSidebarCollapsed } from "@/redux/app/app.selectors";
import styles from "./Container.module.scss";

export const Container = ({ children }) => {
    const sidebarCollapsed = useSelector(getSidebarCollapsed);
    const containerClassName = cn(styles.container, {
        [styles.container__full]: sidebarCollapsed,
    });
    const containerContentClassName = cn(styles.content, {
        [styles.content__full]: sidebarCollapsed,
    });

    return (
        <div className={containerClassName}>
            <div className={styles.inner}>
                <div className={containerContentClassName}>
                    {children}
                </div>
            </div>
        </div>
    );
};
