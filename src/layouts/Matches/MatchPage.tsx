import MatchCard from "@components/MatchCard/MatchCard";
import styles from "./MatchPage.module.css";

const MatchPage = () => {
    return (
        <>
            <div className={styles.itemTitle}>Все матчи команды</div>
            <div>
                <MatchCard team="39" data="25.09.2022 15:38" />
                <MatchCard team="39" data="25.09.2022 15:38" />
                <MatchCard team="39" data="25.09.2022 15:38" />
                <MatchCard team="39" data="25.09.2022 15:38" />
            </div>
        </>
    );
};

export default MatchPage;
