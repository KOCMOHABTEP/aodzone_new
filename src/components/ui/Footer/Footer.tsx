import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <>
            <div className={styles.item}>
                <div className={styles.info}>
                    <div className={styles.infoYears}>© 2023</div>
                    <div>Политика конфединциальности</div>
                </div>
                <div>SMM</div>
            </div>
        </>
    )
};
