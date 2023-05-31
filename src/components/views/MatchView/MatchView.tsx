import { MatchCard } from "@/components/views/MatchView/MatchCard";
import { Button } from "@/components/ui/Button";
import { Pagination } from "@/components/ui/Pagination";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getUserAuth } from "@/redux/auth/auth.selector";
import styles from "./MatchView.module.scss";

export const MatchView = () => {
    const isAuth = useSelector(getUserAuth);

    return (
        <>
            <div className={styles.wrapperTitle}>
                <h1 className={styles.title}>Все матчи команды</h1>
                {isAuth && (
                    <Link href="/matches/add">
                        <a>
                            <Button text=" Запланировать / Добавить матч" />
                        </a>
                    </Link>
                )}
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
