import Icon from "@/components/Icon/Icon";
import TeamPlayersItem from "@/layouts/Team/TeamMembers/TeamPlayersItem/TeamPlayersItem";
import { useState } from "react";
import cn from "classnames";
import styles from "./TeamMembers.module.css";

const TeamMembers = () => {
    const [filterValue, setFilterValue] = useState("Состав команды");

    const filters = [
        {
            label: "Состав команды",
        },
        {
            label: "История изменений состава",
        },
    ];

    const handleTabClick = label => {
        setFilterValue(label);
    };

    return (
        <div className={styles.item}>
            <div className={styles.itemHeader}>
                <div className={styles.itemHeaderTitle}>КОМАНДА</div>
                <div className={styles.itemHeaderRosterInfo}>
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
                <TeamPlayersItem
                    img="https://thumbs.dfs.ivi.ru/storage9/contents/b/4/0e3ef20a0f848cf9c84f8b003b62fe.jpg"
                    title="КОСМОНАВТ"
                    clanLeader={true}
                />
                <TeamPlayersItem
                    img="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"
                    title="ЛУПА"
                />
                <TeamPlayersItem title="ГЕРОЙ" />
                <TeamPlayersItem title="ПУПА" />
                <TeamPlayersItem title="КОСМОНАВТ" />
                <TeamPlayersItem title="КОСМОНАВТ" />
                <TeamPlayersItem
                    img="data:image/jpeg;base64,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"
                    title="КОСМОНАВТ"
                />
                <TeamPlayersItem title="КОСМОНАВТ" />
                <TeamPlayersItem title="КОСМОНАВТ" />
                <TeamPlayersItem title="КОСМОНАВТ" />
                <TeamPlayersItem title="КОСМОНАВТ" />
                <TeamPlayersItem title="КОСМОНАВТ" />
            </div>
        </div>
    );
};

export default TeamMembers;
