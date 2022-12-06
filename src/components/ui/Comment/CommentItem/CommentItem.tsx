import { AvatarDetail } from "@/components/ui/Avatar/AvatarDetail";
import styles from "./CommentItem.module.scss";

interface ForumDetailItemProps {
    comment: string;
    date: string;
}

export const CommentItem = ({ comment, date }: ForumDetailItemProps) => {
    return (
        <div className={styles.item}>
            <AvatarDetail
                title="КОСМОНАВТ"
                messages="259 собщений"
                src="https://cdn.7days.ru/pic/5d1/978888/1425947/86.jpg"
            />
            <div className={styles.right}>
                <div className={styles.right__date}>{date}</div>
                <div className={styles.right__comment}>{comment}</div>
            </div>
        </div>
    );
};
