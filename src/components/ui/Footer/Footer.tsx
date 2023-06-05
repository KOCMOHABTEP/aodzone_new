import { useSelector } from "react-redux";
import { getSidebarCollapsed } from "@/redux/app/app.selectors";
import cn from "classnames";
import styles from "./Footer.module.scss";

export const Footer = () => {
    const sidebarCollapsed = useSelector(getSidebarCollapsed);

    return (
        <div
            className={cn(styles.footer, {
                [styles.footerCollapsed]: sidebarCollapsed,
            })}
        >
            <div className={styles.footerInfo}>
                <div className={styles.footerInfoYears}>© 2023</div>
                <div>Политика конфединциальности</div>
            </div>
            <div>SMM</div>
        </div>
    );
};
