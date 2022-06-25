import styles from "./Container.module.css";

export const Container = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.containerInner}>
                <div className={styles.containerContent}>{children}</div>
            </div>
        </div>
    );
};
