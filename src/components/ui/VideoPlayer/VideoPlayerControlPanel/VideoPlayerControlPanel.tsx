import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import cn from "classnames";
import { VideoPlayerPreloader } from "@/components/ui/VideoPlayer/VideoPlayerPreloader";
import { Icon } from "@/components/ui/Icon";

import styles from "./VideoPlayerControlPanel.module.scss";

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

export const VideoPlayerControlPanel = (
    props: VideoPlayerControlPanelProps
) => {
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
                <div className={styles.inner}>
                    <div className={styles.item}>
                        {isPlaying && (
                            <div onClick={handlePause}>
                                <Icon
                                    className={styles.item__icon}
                                    name="pauseRound"
                                    size={24}
                                />
                            </div>
                        )}
                        {!isPlaying && (
                            <div onClick={handlePlay}>
                                <Icon
                                    className={styles.item__icon}
                                    name="play"
                                    size={24}
                                />
                            </div>
                        )}
                    </div>
                    <div className={styles.timeline}>
                        <div
                            ref={tooltipElementRef}
                            className={cn(styles.tooltip, {
                                [styles.tooltip__visible]:
                                    tooltipData.visibility,
                            })}
                            style={tooltipPositionStyle()}
                        >
                            {calcSecondsToTime(tooltipData.seconds)}
                        </div>
                        <div className={styles.progressbar}>
                            <div
                                className={styles.progressbar__fill}
                                style={timelineProgressBarFillPositionStyle()}
                            />
                        </div>
                        <input
                            ref={timelineElementRef}
                            className={styles.input}
                            type="range"
                            min={0}
                            max={totalVideoDuration}
                            value={currentSeek}
                            onMouseOut={handleHideTooltip}
                            onMouseMove={handleShowTooltip}
                            onInput={handleSeekChange}
                        />
                    </div>
                    <div className={styles.time}>
                        <span className={styles.time__item}>
                            {calcSecondsToTime(currentSeek)}
                        </span>
                        <span> / </span>
                        <span className={styles.time__item}>
                            {calcSecondsToTime(totalVideoDuration)}
                        </span>
                    </div>
                    <div className={styles.volume}>
                        <div className={styles.item}>
                            {volume > 0.5 && (
                                <div onClick={handleMute}>
                                    <Icon
                                        className={styles.item__icon}
                                        name="volumeFull"
                                        size={24}
                                    />
                                </div>
                            )}
                            {volume <= 0.5 && volume > 0 && (
                                <div onClick={handleMute}>
                                    <Icon
                                        className={styles.item__icon}
                                        name="volumeHalf"
                                        size={24}
                                    />
                                </div>
                            )}
                            {volume === 0 && (
                                <div onClick={handleMute}>
                                    <Icon
                                        className={styles.item__icon}
                                        name="volumeMuted"
                                        size={24}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={styles.menu}>
                            <div className={styles.menu__container}>
                                <div className={styles.menu__bar}>
                                    <div
                                        className={styles.fill}
                                        style={volumeMenuBarFill(volumeBar)}
                                    />
                                </div>
                                <input
                                    className={styles.menu__input}
                                    type="range"
                                    min={0}
                                    max={100}
                                    value={volumeBar}
                                    onInput={handleVolumeChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div onClick={handleFullscreenMode}>
                            <Icon
                                className={styles.item__icon}
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
