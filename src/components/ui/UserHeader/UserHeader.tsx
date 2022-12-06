import { Avatar } from "@/components/ui/Avatar";
import { Icon } from "@/components/ui/Icon";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import cn from "classnames";
import { TabBar } from "@/components/ui/Tabbar";
import styles from "./UserHeader.module.scss";

interface UserHeaderProps {
    nickName: string;
    level?: number;
    date: string;
    handleOpenTeamModal?: () => void;
    steam?: { link: string; id: string };
}

export const UserHeader = ({
    nickName,
    level,
    date,
    steam,
    handleOpenTeamModal,
}: UserHeaderProps) => {
    const [tabValue, setTabValue] = useState("Обзор");

    const tabList = [
        {
            label: "Обзор",
        },
        {
            label: "Достижения",
        },
        {
            label: "Команда",
        },
        {
            label: "Матчи",
        },
    ];

    const handleTabClick = label => {
        console.log(label);
        setTabValue(label);
    };

    return (
        <div className={styles.item}>
            <div className={styles.item__banner}>
                <img
                    className={styles.item__banner__img}
                    src="https://krot.info/uploads/posts/2021-02/1613648758_7-p-art-fon-stalker-7.jpg"
                />
            </div>
            <div className={styles.content}>
                <div className={styles.middle}>
                    <div>
                        <Avatar />
                    </div>
                    <div className={styles.middle__description}>
                        <div className={styles.middle__wrapper}>
                            <div className={styles.middle__title}>
                                {nickName}
                            </div>
                            <Icon name="countryRU" size={22} />
                        </div>
                        {/* <div className={styles.level}>Уровень {level}</div> */}
                        <div className={styles.data}>Пользователь с {date}</div>
                        {steam && (
                            <Link href={steam.link} passHref>
                                <a className={styles.link}>
                                    <div className={styles.link__wrapper}>
                                        <div
                                            className={
                                                styles.link__wrapper__icon
                                            }
                                        >
                                            <Icon
                                                name="social_steam"
                                                size={24}
                                            />
                                        </div>
                                        <div className={styles.link__id}>
                                            {steam.id}
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        )}
                    </div>
                </div>
                <div className={styles.bottom}>
                    <TabBar
                        tabs={tabList}
                        selectedTab={tabValue}
                        onClick={handleTabClick}
                    />
                    {/* <div className={styles.bottom__right}> */}
                    {/*    <Button */}
                    {/*        onClick={handleOpenTeamModal} */}
                    {/*        buttonClassName={styles.itemButton} */}
                    {/*        text="+ Добавить команду" */}
                    {/*    /> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};
