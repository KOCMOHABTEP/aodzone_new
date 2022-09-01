import styles from "./ForumDetail.module.css";
import ForumDetailItem from "./ForumDetailItem/ForumDetailItem";
import Icon from "../../../components/Icon/Icon";

const ForumDetail = () => {
    return (
        <div className={styles.forumDetail}>
            <div>
                <ForumDetailItem />
                <ForumDetailItem />
            </div>
            <div className={styles.forumDetailList}>
                <div className={styles.forumDetailListNumber}>1</div>
                <div className={styles.forumDetailListNumber}>2</div>
                <div className={styles.forumDetailListNumber}>3</div>
                ...
                <div className={styles.forumDetailListNumber}>4</div>
                <div>
                    <Icon name={"arrow_right"} />
                </div>
            </div>
        </div>
    );
};

export default ForumDetail;
