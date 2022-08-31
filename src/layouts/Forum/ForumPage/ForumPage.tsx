import styles from "./ForumPage.module.css";
import ForumItem from "@layouts/Forum/ForumItem/ForumItem";
import ForumFilter from "@layouts/Forum/ForumFilter/ForumFilter";

const ForumPage = () => {
    return (
        <div className={styles.forumContainerInner}>
            <div className={styles.forumPageHead}>COUNTER STIKE</div>
            <div className={styles.forumPageList}>
                <ForumItem />
                <ForumItem />
                <ForumItem />
                <ForumItem />
                <ForumItem />
            </div>
            <ForumFilter />
        </div>
    );
};

export default ForumPage;
