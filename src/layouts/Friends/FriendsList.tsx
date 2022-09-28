import Button from "@components/Button/Button";
import FriendsItem from "@layouts/Friends/FriendsItem/FriendsItem";
import Input from "@components/Input/Input";
import Message from "@layouts/Message/Message";
import styles from "./FriendsList.module.css";

const FriendsList = () => {
    return (
        <div className={styles.item}>
            <div className={styles.itemContainer}>
                <div className={styles.itemTitle}>Список друзей</div>
                <div className={styles.itemAmount}>
                    <div className={styles.itemAmountFriends}>256</div> /
                    <div className={styles.itemAmountFriends}>512</div>
                </div>
                <div className={styles.itemInput}>
                    <Input name="Поиск друга" label="Поиск друга" value="" />
                </div>
                <div>
                    <Button text="Добавить в друзья" />
                </div>
                <div className={styles.itemFriendsItem}>
                    <FriendsItem label={false} />
                    <FriendsItem label={true} />
                    <FriendsItem label={true} />
                    <FriendsItem label={true} />
                    <FriendsItem label={false} />
                </div>
            </div>
            <div>
                <Message />
            </div>
        </div>
    );
};

export default FriendsList;
