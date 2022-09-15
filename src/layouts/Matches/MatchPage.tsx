import MatchCard from "@components/MatchCard/MatchCard";
import styles from "./MatchPage.module.css";

const MatchPage = () => {
    return (
        <>
            <div className={styles.title}>Все матчи команды</div>
            <div>
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
            </div>
        </>
    );
};

export default MatchPage;
