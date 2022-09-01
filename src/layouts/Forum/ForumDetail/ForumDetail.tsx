import styles from "./ForumDetail.module.css";
import ForumDetailItem from "./ForumDetailItem/ForumDetailItem";
import Icon from "../../../components/Icon/Icon";

const ForumDetail = () => {
    return (
        <div className={styles.forumDetail}>
            <div className={styles.forumDetailHead}>
                <div className={styles.forumDetailTitle}>
                    Деталка темы форума
                </div>
                <div className={styles.forumDetailList}>
                    <div className={styles.forumDetailListNumber}>1</div>
                    <div className={styles.forumDetailListNumber}>2</div>
                    <div className={styles.forumDetailListNumber}>3</div>
                    <div className={styles.forumDetailListDots}>...</div>
                    <div className={styles.forumDetailListNumber}>4</div>
                    <div className={styles.forumDetailListImage}>
                        <Icon
                            className={styles.forumDetailListImg}
                            name={"arrow_right"}
                            size={22}
                        />
                    </div>
                </div>
            </div>
            <div>
                <ForumDetailItem />
                <ForumDetailItem />
            </div>
            <div className={styles.forumDetailList}>
                <div className={styles.forumDetailListNumber}>1</div>
                <div className={styles.forumDetailListNumber}>2</div>
                <div className={styles.forumDetailListNumber}>3</div>
                <div className={styles.forumDetailListDots}>...</div>
                <div className={styles.forumDetailListNumber}>4</div>
                <div className={styles.forumDetailListImage}>
                    <Icon
                        className={styles.forumDetailListImg}
                        name={"arrow_right"}
                        size={22}
                    />
                </div>
            </div>
        </div>
    );
};

export default ForumDetail;
