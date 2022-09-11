import Icon from "@components/Icon/Icon";
import TeamPlayersItem from "@layouts/Team/TeamMembers/TeamPlayersItem/TeamPlayersItem";
import { useState } from "react";
import cn from "classnames";
import styles from "./TeamMembers.module.css";

const TeamMembers = () => {
    const [filterValue, setFilterValue] = useState("Team Roster");

    const filters = [
        {
            label: "Team Roster",
        },
        {
            label: "Roster change history",
        },
    ];

    const handleTabClick = label => {
        setFilterValue(label);
    };

    return (
        <div className={styles.item}>
            <div className={styles.itemHead}>
                <div className={styles.itemHeadTitle}>TEAM MEMBERS</div>
                <div className={styles.itemHeadRosterInfo}>
                    {filters.map(item => (
                        <div
                            key={item.label}
                            onClick={() => handleTabClick(item.label)}
                            className={cn(styles.itemInfoTitle, {
                                [styles.itemInfoTitleActive]:
                                    item.label === filterValue,
                            })}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.itemTeamPlayersItem}>
                <TeamPlayersItem />
                <TeamPlayersItem />
                <TeamPlayersItem />
                <TeamPlayersItem />
                <TeamPlayersItem />
                <TeamPlayersItem />
                <TeamPlayersItem />
            </div>
        </div>
    );
};

export default TeamMembers;
