import Button from "@/components/Button/Button";
import FriendsItem from "@/layouts/Friends/FriendsItem/FriendsItem";
import Input from "@/components/Input/Input";
import Message from "@/layouts/Message/Message";
import styles from "./FriendsList.module.css";

interface FriendsListProps {
    onlineFriends: number;
    allFriends: number;
}

const FriendsList = ({ onlineFriends, allFriends }: FriendsListProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemContainer}>
                <div className={styles.itemTitle}>Друзья</div>
                <div className={styles.itemAmount}>
                    <div className={styles.itemAmountFriends}>
                        {onlineFriends}
                    </div>{" "}
                    /
                    <div className={styles.itemAmountFriends}>{allFriends}</div>
                </div>
                <div className={styles.itemInput}>
                    <Input name="Поиск друга" label="Поиск друга" value="" />
                </div>
                <div>
                    <Button text="Добавить в друзья" />
                </div>
                <div className={styles.itemFriendsItem}>
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

export default FriendsList;
