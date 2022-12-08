import { MatchCard } from "@/components/views/MatchView/MatchCard";
import { Button } from "@/components/ui/Button";
import { Pagination } from "@/components/ui/Pagination";
import styles from "./MatchView.module.scss";

export const MatchView = () => {
    return (
        <>
            <div className={styles.wrapperTitle}>
                <div className={styles.title}>Все матчи команды</div>
                <a href="/matches/add">
                    <Button text=" Запланировать / Добавить матч" />
                </a>
            </div>
            <div>
                <MatchCard team="39" data="25.09.2022 15:38" />
                <MatchCard team="39" data="25.09.2022 15:38" />
                <MatchCard team="39" data="25.09.2022 15:38" />
                <MatchCard team="39" data="25.09.2022 15:38" />
            </div>
            {/* <div className={styles.pagination}> */}
            {/*    <Pagination pageCount={} onChangePage={} /> */}
            {/* </div> */}
        </>
    );
};
