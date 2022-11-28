import { StreamFilterIAll } from "@/components/views/StreamView/StreamsFilter/StreamFilterIAll";
import { useState } from "react";
import cn from "classnames";
import styles from "./StreamsFilter.module.scss";

export const StreamsFilter = () => {
    const [filterValue, setFilterValue] = useState("TOP STEAMS");

    const filters = [
        {
            label: "TOP STEAMS",
        },
        {
            label: "CURRENCY ONLINE",
        },
        {
            label: "UPCOMING",
        },
        {
            label: "CLIPS (FINISHED)",
        },
    ];

    const handleTabClick = label => {
        setFilterValue(label);
    };

    return (
        <div className={styles.item}>
            <div className={styles.item__right}>
                {filters.map(item => (
                    <div
                        key={item.label}
                        onClick={() => handleTabClick(item.label)}
                        className={cn(styles.tabs, {
                            [styles.tabs__active]: item.label === filterValue,
                        })}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
            <div className={styles.item__left}>
                <StreamFilterIAll />
            </div>
        </div>
    );
};
