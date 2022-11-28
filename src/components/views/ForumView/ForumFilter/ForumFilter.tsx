import { Input } from "@/components/ui/Input";
import { ForumFilterItem } from "@/components/views/ForumView/ForumFilter/ForumFilterItem";
import { Button } from "@/components/ui/Button";
import styles from "./ForumFilter.module.scss";

export const ForumFilter = () => {
    return (
        <div className={styles.item}>
            <div className={styles.item__title}>ФОРУМ</div>
            <div>
                <Input
                    name="Search forums"
                    label="Search forums"
                    value=""
                    onChange={() => console.log("тест")}
                />
            </div>
            <Button buttonClassName={styles.button} text="+ Добавить тему" />
            <div className={styles.wrapper}>
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
