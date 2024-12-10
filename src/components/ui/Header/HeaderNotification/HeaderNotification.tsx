import cn from 'classnames';
import styles from './HeaderNotification.module.scss';

interface HeaderNotificationProps {
  title: string;
  description?: string;
  data: string;
  read: boolean;
}

export const HeaderNotification = ({
  title,
  description,
  data,
  read,
}: HeaderNotificationProps) => {
  return (
    <div className={styles.item}>
      <div>
        <div
          className={cn(styles.title, {
            [styles.title__read]: read,
          })}
        >
          {title}
        </div>
        {description && (
          <div
            className={cn(styles.description, {
              [styles.description__read]: read,
            })}
          >
            {description}
          </div>
        )}
        <div className={styles.data}>{data}</div>
      </div>
      {!read && <div className={styles.notificationIndicator} />}
    </div>
  );
};
