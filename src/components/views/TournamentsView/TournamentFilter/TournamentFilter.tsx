import { Switch } from "@/components/ui/Switch";
import { useState } from "react";
import cn from "classnames";
import styles from "./TournamentFilter.module.scss";

export const TournamentFilter = () => {
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
            <div className={styles.title}>FEATURED TOURNAMENTS</div>
            <div className={styles.content}>
                <div className={styles.content__tabs}>
                    {filters.map(item => (
                        <div
                            key={item.label}
                            onClick={() => handleTabClick(item.label)}
                            className={cn(styles.tabs, {
                                [styles.tabs__active]:
                                    item.label === filterValue,
                            })}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
                <div className={styles.switch}>
                    <Switch
                        value={switchValue}
                        onClick={() => setSwitchValue(!switchValue)}
                    />
                </div>
            </div>
        </div>
    );
};
