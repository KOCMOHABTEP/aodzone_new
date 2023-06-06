import Link from "next/link";
import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <>
            <div className={styles.item}>
                <div className={styles.info}>
                    <Link href="/">
                        <a className={styles.infoDocs}>
                            Политика конфединциальности
                        </a>
                    </Link>
                    <Link href="/">
                        <a className={styles.infoDocs}>
                            Пользовательское соглашение
                        </a>
                    </Link>
                </div>
                <div>SMM</div>
            </div>
        </>
    )
};
