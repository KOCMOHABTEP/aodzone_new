import styles from "./StreamsFilter.module.css";
import StreamFilterIAll from "@layouts/Streams/StreamsFilter/StreamFilterIAll/StreamFilterIAll";
import { useState } from "react";
import cn from "classnames";

const StreamsFilter = () => {
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
            <div className={styles.itemRight}>
                {filters.map(item => (
                    <div
                        key={item.label}
                        onClick={() => handleTabClick(item.label)}
                        className={cn(styles.itemTabs, {
                            [styles.itemTabsActive]: item.label === filterValue,
                        })}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
            <div className={styles.itemLeft}>
                <StreamFilterIAll />
            </div>
        </div>
    );
};

export default StreamsFilter;
