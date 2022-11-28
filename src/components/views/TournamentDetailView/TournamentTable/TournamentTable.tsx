import { ReactNode } from "react";
import styles from "./TournamentTable.module.scss";

interface TournamentTableProps {
    children: ReactNode;
}

export const TournamentTable = ({ children }: TournamentTableProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.info}>
                <div>{children}</div>
            </div>
        </div>
    );
};
