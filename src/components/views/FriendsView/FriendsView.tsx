import Button from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input";
import { FriendsItem } from "@/components/views/FriendsView/FriendsItem";
import Message from "@/layouts/Message/Message";
import styles from "./FriendsView.module.scss";

interface FriendsListProps {
    onlineFriends: number;
    allFriends: number;
}

export const FriendsView = ({
    onlineFriends,
    allFriends,
}: FriendsListProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.container}>
                <div className={styles.title}>Друзья</div>
                <div className={styles.amount}>
                    <div className={styles.amount__friends}>
                        {onlineFriends}
                    </div>{" "}
                    /<div className={styles.amount__friends}>{allFriends}</div>
                </div>
                <div className={styles.input}>
                    <Input name="Поиск друга" label="Поиск друга" value="" />
                </div>
                <div>
                    <Button text="Добавить в друзья" />
                </div>
                <div className={styles.wrapper}>
                    <FriendsItem
                        label={false}
                        nickName="КОСМОНАВТ"
                        level={26}
                        online="10.09.2022"
                    />
                    <FriendsItem
                        label={true}
                        nickName="ЛУПА"
                        level={23}
                        online="18.08.2022"
                    />
                    <FriendsItem
                        label={true}
                        nickName="ПУПА"
                        level={38}
                        online="12.10.2022"
                    />
                    <FriendsItem
                        label={true}
                        nickName="КОСМОНАВТ"
                        level={8}
                        online="03.02.2022"
                    />
                    <FriendsItem
                        label={false}
                        nickName="КОСМОНАВТ"
                        level={10}
                        online="01.10.2022"
                    />
                </div>
            </div>
            <div>
                <Message nickName="КОСМОНАВТ" onlineTime="25 минут назад" />
            </div>
        </div>
    );
};
