import { MatchCard } from "@/components/views/MatchView/MatchCard";
import { Button } from "@/components/ui/Button";
import { Pagination } from "@/components/ui/Pagination";
import Link from "next/link";
import styles from "./MatchView.module.scss";

export const MatchView = () => {
    return (
        <>
            <div className={styles.wrapperTitle}>
                <div className={styles.title}>Все матчи команды</div>
                <Link href="/matches/add">
                    <a>
                        <Button text=" Запланировать / Добавить матч" />
                    </a>
                </Link>
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
