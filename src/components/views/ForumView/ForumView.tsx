import ForumItem from "@/layouts/Forum/ForumItem/ForumItem";
import ForumFilter from "@/layouts/Forum/ForumFilter/ForumFilter";
import styles from "./ForumView.module.scss";

const ForumView = () => {
    return (
        <div className={styles.item}>
            <div className={styles.item__title}>COUNTER STRIKE</div>
            <div className={styles.item__list}>
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

export default ForumView;
