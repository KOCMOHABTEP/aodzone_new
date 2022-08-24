import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import cn from "classnames";
import VideoPlayerPreloader from "@components/VideoPlayer/VideoPlayerPreloader/VideoPlayerPreloader";
import Icon from "@components/Icon/Icon";
import styles from "./VideoPlayerControlPanel.module.css";

interface VideoPlayerControlPanelProps {
    isPlaying: boolean;
    isLoading: boolean;
    currentSeek: number;
    muted: boolean;
    volume: number;
    volumeBar: number;
    totalVideoDuration: number;
    handlePause: () => void;
    handlePlay: () => void;
    handleSeekChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleVolumeChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleMute: () => void;
    handleFullscreenMode: () => void;
}

const VideoPlayerControlPanel = (props: VideoPlayerControlPanelProps) => {
    const {
        currentSeek,
        isPlaying,
        isLoading,
        volume,
        volumeBar,
        totalVideoDuration,
        handlePause,
        handlePlay,
        handleVolumeChange,
        handleMute,
        handleSeekChange,
        handleFullscreenMode,
    } = props;

    const tooltipElementRef = useRef<HTMLDivElement>(null);
    const timelineElementRef = useRef<HTMLInputElement>(null);

    const [tooltipData, setTooltipData] = useState({
        percentage: 0,
        seconds: 0,
        visibility: false,
    });

    // Функция перевода секунд в % соотношение
    const calcSeekToPercent = (seconds: number) =>
        (seconds * 100) / totalVideoDuration;

    // Позиция tooltip в процентном отношении
    const tooltipPositionStyle = () => ({ left: `${tooltipData.percentage}%` });

    // Позиция полосы уже проигранного видеоконтента
    const timelineProgressBarFillPositionStyle = () => ({
        width: `${calcSeekToPercent(currentSeek)}%`,
    });

    // Позиция полосы громкости
    const volumeMenuBarFill = (percent: number) => ({ height: `${percent}%` });

    // Рассчет значения заполнения таймлайна, относительно секунд воспроизведения видео
    const calcTimelinePosition = (e: MouseEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const minValue = 0;
        const maxValue = totalVideoDuration;
        let calcValue = (e.nativeEvent.offsetX / target.clientWidth) * maxValue;

        // Проверка, чтобы позиция каретки не ушла в отрицательное значение и чтобы не была длиннее видео
        if (calcValue < minValue) {
            calcValue = minValue;
        } else if (calcValue > maxValue) {
            calcValue = maxValue;
        }

        return calcValue;
    };

    // Показать tooltip
    const handleShowTooltip = (event: MouseEvent<HTMLInputElement>) => {
        const calcPositionValue = calcTimelinePosition(event);

        const timelinePositionInfoWidth =
            timelineElementRef.current?.getBoundingClientRect().width;
        const tooltipPositionInfoWidth =
            tooltipElementRef.current?.getBoundingClientRect().width || 72;

        const tooltipPosition = Number(
            (
                (tooltipPositionInfoWidth * 100) /
                timelinePositionInfoWidth
            ).toFixed(2)
        );
        const tooltipPositionCenter = Number((tooltipPosition / 2).toFixed(2)); // Чтобы tooltip был в середине над мышью

        const percentagePosition = Number(
            (
                (calcPositionValue * 100) / totalVideoDuration -
                tooltipPositionCenter
            ).toFixed(2)
        );

        setTooltipData({
            percentage: percentagePosition,
            seconds: calcPositionValue,
            visibility: true,
        });
    };

    // Спрятать Tooltip
    const handleHideTooltip = () => {
        setTooltipData({
            ...tooltipData,
            visibility: false,
        });
    };

    // Функция переводящаяя секунды к виду HH:MM:SS
    const calcSecondsToTime = (seconds: number) => {
        const hour =
            Math.floor(seconds / 3600) > 0
                ? Math.floor(seconds / 3600)
                      .toString()
                      .padStart(2, "0")
                : 0;
        const minutes = Math.floor((seconds % 3600) / 60)
            .toString()
            .padStart(2, "0");
        const secs = Math.floor(seconds % 60)
            .toString()
            .padStart(2, "0");

        if (!hour) {
            return `${minutes}:${secs}`;
        }

        return `${hour}:${minutes}:${secs}`;
    };

    return (
        <>
            <VideoPlayerPreloader isLoading={isLoading} />
            <div className={styles.controls}>
                <div className={styles.controlsInner}>
                    <div className={styles.controlsItem}>
                        {isPlaying && (
                            <div onClick={handlePause}>
                                <Icon
                                    className={styles.controlsItemIcon}
                                    name="pauseRound"
                                    size={24}
                                />
                            </div>
                        )}
                        {!isPlaying && (
                            <div onClick={handlePlay}>
                                <Icon
                                    className={styles.controlsItemIcon}
                                    name="play"
                                    size={24}
                                />
                            </div>
                        )}
                    </div>
                    <div className={styles.controlsTimeline}>
                        <div
                            ref={tooltipElementRef}
                            className={cn(styles.controlsTimelineTooltip, {
                                [styles.controlsTimelineTooltipVisible]:
                                    tooltipData.visibility,
                            })}
                            style={tooltipPositionStyle()}
                        >
                            {calcSecondsToTime(tooltipData.seconds)}
                        </div>
                        <div className={styles.controlsTimelineProgressBar}>
                            <div
                                className={
                                    styles.controlsTimelineProgressBarFill
                                }
                                style={timelineProgressBarFillPositionStyle()}
                            />
                        </div>
                        <input
                            ref={timelineElementRef}
                            className={styles.controlsTimelineInput}
                            type="range"
                            min={0}
                            max={totalVideoDuration}
                            value={currentSeek}
                            onMouseOut={handleHideTooltip}
                            onMouseMove={handleShowTooltip}
                            onInput={handleSeekChange}
                        />
                    </div>
                    <div className={styles.controlsTimelineTime}>
                        <span className={styles.controlsTimelineTimeItem}>
                            {calcSecondsToTime(currentSeek)}
                        </span>
                        <span> / </span>
                        <span className={styles.controlsTimelineTimeItem}>
                            {calcSecondsToTime(totalVideoDuration)}
                        </span>
                    </div>
                    <div className={styles.controlsVolume}>
                        <div className={styles.controlsItem}>
                            {volume > 0.5 && (
                                <div onClick={handleMute}>
                                    <Icon
                                        className={styles.controlsItemIcon}
                                        name="volumeFull"
                                        size={24}
                                    />
                                </div>
                            )}
                            {volume <= 0.5 && volume > 0 && (
                                <div onClick={handleMute}>
                                    <Icon
                                        className={styles.controlsItemIcon}
                                        name="volumeHalf"
                                        size={24}
                                    />
                                </div>
                            )}
                            {volume === 0 && (
                                <div onClick={handleMute}>
                                    <Icon
                                        className={styles.controlsItemIcon}
                                        name="volumeMuted"
                                        size={24}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={styles.controlsVolumeMenu}>
                            <div className={styles.controlsVolumeMenuContainer}>
                                <div className={styles.controlsVolumeMenuBar}>
                                    <div
                                        className={
                                            styles.controlsVolumeMenuBarFill
                                        }
                                        style={volumeMenuBarFill(volumeBar)}
                                    />
                                </div>
                                <input
                                    className={styles.controlsVolumeMenuInput}
                                    type="range"
                                    min={0}
                                    max={100}
                                    value={volumeBar}
                                    onInput={handleVolumeChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.controlsItem}>
                        <div onClick={handleFullscreenMode}>
                            <Icon
                                className={styles.controlsItemIcon}
                                name="fullscreen"
                                size={24}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoPlayerControlPanel;
