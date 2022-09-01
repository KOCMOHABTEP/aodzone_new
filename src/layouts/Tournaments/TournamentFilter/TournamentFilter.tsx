import styles from "./TournamentFilter.module.css";
import Switch from "@components/Switch/Switch";
import { useState } from "react";
import cn from "classnames";

const TournamentFilter = () => {
    const [switchValue, setSwitchValue] = useState(true);
    const [filterValue, setFilterValue] = useState("ALL");

    const filters = [
        {
            label: "ALL",
        },
        {
            label: "FINISHED",
        },
        {
            label: "UPCOMING",
        },
        {
            label: "IN PROGRESS",
        },
    ];

    const handleTabClick = label => {
        setFilterValue(label);
    };

    return (
        <div className={styles.item}>
            <div className={styles.itemTitle}>FEATURED TOURNAMENTS</div>
            <div className={styles.itemContent}>
                <div className={styles.itemContentTabs}>
                    {filters.map(item => (
                        <div
                            key={item.label}
                            onClick={() => handleTabClick(item.label)}
                            className={cn(styles.itemTabs, {
                                [styles.itemTabsActive]:
                                    item.label === filterValue,
                            })}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
                <div className={styles.itemSwitch}>
                    <Switch
                        value={switchValue}
                        onClick={() => setSwitchValue(!switchValue)}
                    />
                </div>
            </div>
        </div>
    );
};

export default TournamentFilter;
