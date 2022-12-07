import styles from "./Members.module.scss";

export const Members = () => {
    const members = 15;
    const maxMembers = 20;

    const membersPercentage = (members * 100) / maxMembers;

    return (
        <div className={styles.container}>
            <div className={styles.caption}>
                {members} / {maxMembers}
            </div>
            <div className={styles.progressBar}>
                <div
                    className={styles.progressBarFill}
                    style={{ width: `${membersPercentage}%` }}
                />
            </div>
        </div>
    );
};
