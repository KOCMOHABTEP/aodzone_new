import styles from "./ForumPage.module.css";
import ForumItem from "@layouts/Forum/ForumItem/ForumItem";

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
        </div>
    );
};

export default ForumPage;
