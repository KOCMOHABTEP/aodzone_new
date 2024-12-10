import styles from './VideoPlayerPreloader.module.scss';

interface VideoPlayerPreloaderProps {
  isLoading: boolean;
}

export const VideoPlayerPreloader = ({
  isLoading,
}: VideoPlayerPreloaderProps) => {
  if (isLoading) {
    return (
      <div className={styles.root}>
        <div className={styles.item}>
          <div className={styles.item__line} />
        </div>
      </div>
    );
  }
  return null;
};
