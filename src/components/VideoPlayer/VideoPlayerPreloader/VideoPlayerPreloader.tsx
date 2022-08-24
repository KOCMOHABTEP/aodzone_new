import styles from "./VideoPlayerPreloader.module.css";

interface VideoPlayerPreloaderProps {
    isLoading: boolean;
}

const VideoPlayerPreloader = ({ isLoading }: VideoPlayerPreloaderProps) => {
    if (isLoading) {
        return (
            <div className={styles.preloader}>
                <div className={styles.preloaderItem}>
                    <div className={styles.preloaderItemLine} />
                </div>
            </div>
        );
    }
    return null;
};

export default VideoPlayerPreloader;
