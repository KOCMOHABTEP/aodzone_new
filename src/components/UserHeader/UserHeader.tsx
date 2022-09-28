import Tag from "@components/Tag/Tag";
import Avatar from "@components/Avatar/Avatar";
import Link from "next/link";
import Icon from "@components/Icon/Icon";
import Button from "@components/Button/Button";
import { useState } from "react";
import cn from "classnames";
import styles from "./UserHeader.module.css";

interface UserHeaderProps {
    nickName: string;
    level: number;
    date: string;
    handleOpenTeamModal?: () => void;
    steam?: { link: string; id: string };
}

const UserHeader = ({
    nickName,
    level,
    date,
    steam,
    handleOpenTeamModal,
}: UserHeaderProps) => {
    const [filterValue, setFilterValue] = useState("OVERVIEW");

    const filters = [
        {
            label: "OVERVIEW",
        },
        {
            label: "PLAY HISTORY",
        },
        {
            label: "ACHIEVEMENTS",
        },
    ];

    const handleTabClick = label => {
        setFilterValue(label);
    };

    return (
        <div className={styles.item}>
            <div className={styles.itemBannerImage}>
                <img
                    className={styles.itemBannerImageImg}
                    src="https://krot.info/uploads/posts/2021-02/1613648758_7-p-art-fon-stalker-7.jpg"
                />
            </div>
            <div className={styles.itemContent}>
                <div className={styles.itemHead}>
                    <Tag label="ROKIE" />
                    <Tag label="PUPA" />
                    <Tag label="ROKIE" />
                </div>
                <div className={styles.itemMiddle}>
                    <div className={styles.itemMiddleImage}>
                        <Avatar />
                    </div>
                    <div className={styles.itemMiddleDescription}>
                        <div className={styles.itemMiddleTitle}>
                            <div className={styles.itemMiddleUsername}>
                                {nickName}
                            </div>
                            <div>RU</div>
                        </div>
                        <div className={styles.itemUserLevel}>
                            Уровень {level}
                        </div>
                        <div className={styles.userMembership}>
                            Пользователь с {date}
                        </div>
                        {steam && (
                            <Link href={steam.link} passHref>
                                <a className={styles.itemContentSocialsLink}>
                                    <div
                                        className={
                                            styles.itemContentSocialsItem
                                        }
                                    >
                                        <div
                                            className={
                                                styles.itemContentSocialsItemIcon
                                            }
                                        >
                                            <Icon
                                                name="social_steam"
                                                size={24}
                                            />
                                        </div>
                                        <div
                                            className={
                                                styles.itemContentSocialsItemName
                                            }
                                        >
                                            {steam.id}
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        )}
                    </div>
                </div>
                <div className={styles.itemBottom}>
                    <div className={styles.itemBottomLeft}>
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
                    <div className={styles.itemBottomRightButton}>
                        <Button
                            onClick={handleOpenTeamModal}
                            buttonClassName={styles.itemButton}
                            text="+ ADD TEAM"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHeader;
