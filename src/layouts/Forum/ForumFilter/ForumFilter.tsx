import styles from "./ForumFilter.module.css";
import ForumFilterItem from "@layouts/Forum/ForumFilter/ForumFilterItem/ForumFilterItem";
import Button from "@components/Button/Button";
import Input from "@components/Input/Input";
import { ChangeEvent } from "react";

const ForumFilter = () => {
    return (
        <div className={styles.forumFilter}>
            <div className={styles.forumFilterTitle}>FORUMS</div>
            <div>
                <Input name="Search forums" label="Search forums" value="" />
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
