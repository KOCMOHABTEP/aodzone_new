import ForumFilterItem from "@/layouts/Forum/ForumFilter/ForumFilterItem/ForumFilterItem";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import styles from "./ForumFilter.module.css";

const ForumFilter = () => {
    return (
        <div className={styles.forumFilter}>
            <div className={styles.forumFilterTitle}>ФОРУМ</div>
            <div>
                <Input
                    name="Search forums"
                    label="Search forums"
                    value=""
                    onChange={() => console.log("тест")}
                />
            </div>
            <Button
                buttonClassName={styles.forumTitleButton}
                text="+ Добавить тему"
            />
            <div className={styles.itemForumFilterItem}>
                <ForumFilterItem
                    title="Counter-Strike"
                    description="Обсуждение фишек Counter-Strike"
                    titleTopic="Фишки"
                    comments={512}
                />
                <ForumFilterItem
                    title="Counter-Strike"
                    description="Обсуждение фишек Counter-Strike"
                    titleTopic="Фишки"
                    comments={512}
                />
                <ForumFilterItem
                    title="Counter-Strike"
                    description="Обсуждение фишек Counter-Strike"
                    titleTopic="Фишки"
                    comments={512}
                />
                <ForumFilterItem
                    title="Counter-Strike"
                    description="Обсуждение фишек Counter-Strike"
                    titleTopic="Фишки"
                    comments={512}
                />
                <ForumFilterItem
                    title="Counter-Strike"
                    description="Обсуждение фишек Counter-Strike"
                    titleTopic="Фишки"
                    comments={512}
                />
                <ForumFilterItem
                    title="Counter-Strike"
                    description="Обсуждение фишек Counter-Strike"
                    titleTopic="Фишки"
                    comments={512}
                />
                <ForumFilterItem
                    title="Counter-Strike"
                    description="Обсуждение фишек Counter-Strike"
                    titleTopic="Фишки"
                    comments={512}
                />
                <ForumFilterItem
                    title="Counter-Strike"
                    description="Обсуждение фишек Counter-Strike"
                    titleTopic="Фишки"
                    comments={512}
                />
                <ForumFilterItem
                    title="Counter-Strike"
                    description="Обсуждение фишек Counter-Strike"
                    titleTopic="Фишки"
                    comments={512}
                />
            </div>
        </div>
    );
};

export default ForumFilter;
