import ForumItem from "@layouts/Forum/ForumItem/ForumItem";
import ForumFilter from "@layouts/Forum/ForumFilter/ForumFilter";
import styles from "./ForumPage.module.css";

const ForumPage = () => {
    return (
        <div className={styles.item}>
            <div className={styles.itemTitle}>COUNTER STRIKE</div>
            <div className={styles.itemPageList}>
                <ForumItem
                    title="Правила и этикет форума сообщества"
                    description="Обсуждение Call of Duty "
                    created="5 дней назад"
                />
                <ForumItem
                    title="Правила и этикет форума сообщества"
                    created="10 часов назад"
                />
                <ForumItem
                    title="Игра аоладо"
                    description="Обсуждение игры COUNTER STRIKE "
                    created="2 дня назад"
                />
            </div>
            <ForumFilter />
        </div>
    );
};

export default ForumPage;
