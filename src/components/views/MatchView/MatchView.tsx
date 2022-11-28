import { MatchCard } from "@/components/views/MatchView/MatchCard";
import styles from "./MatchView.module.scss";

export const MatchView = () => {
    return (
        <>
            <div className={styles.title}>Все матчи команды</div>
            <div>
                <MatchCard team="39" data="25.09.2022 15:38" />
                <MatchCard team="39" data="25.09.2022 15:38" />
                <MatchCard team="39" data="25.09.2022 15:38" />
                <MatchCard team="39" data="25.09.2022 15:38" />
            </div>
        </>
    );
};
