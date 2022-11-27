import TournamentTableTeam from "@/layouts/Tournaments/TournamentDetail/TournamentTable/TournamentTableTeam/TournamentTableTeam";
import { ReactNode } from "react";
import styles from "./TournamentTable.module.css";

interface TournamentTableProps {
    children: ReactNode;
}

const TournamentTable = ({ children }: TournamentTableProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemInfo}>
                <div className={styles.wrapperMatchTournament}>{children}</div>
            </div>
        </div>
    );
};

export default TournamentTable;
