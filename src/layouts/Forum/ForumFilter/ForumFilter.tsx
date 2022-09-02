import ForumFilterItem from "@layouts/Forum/ForumFilter/ForumFilterItem/ForumFilterItem";
import Button from "@components/Button/Button";
import Input from "@components/Input/Input";
import { ChangeEvent } from "react";
import styles from "./ForumFilter.module.css";

const ForumFilter = () => {
    return (
        <div className={styles.forumFilter}>
            <div className={styles.forumFilterTitle}>FORUMS</div>
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
            <div>
                <ForumFilterItem />
                <ForumFilterItem />
                <ForumFilterItem />
                <ForumFilterItem />
                <ForumFilterItem />
                <ForumFilterItem />
            </div>
        </div>
    );
};

export default ForumFilter;
