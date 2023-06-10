import { useSelector } from "react-redux";
import { getSidebarCollapsed } from "@/redux/app/app.selectors";
import cn from "classnames";
import Link from "next/link";
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
                <Link href="/">
                    <a className={styles.footerInfoDocs}>
                        Политика конфединциальности
                    </a>
                </Link>
                <Link href="/">
                    <a className={styles.footerInfoDocs}>
                        Пользовательское соглашение
                    </a>
                </Link>
            </div>
            <div>SMM</div>
        </div>
    );
};
