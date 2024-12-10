import ReactPlayer from 'react-player';
import { ChangeEvent, useRef, useState } from 'react';
import { VideoPlayerControlPanel } from '@/components/ui/VideoPlayer/VideoPlayerControlPanel';
import styles from './VideoPlayer.module.scss';

interface VideoPlayerProps {
  url: string;
  poster?: string;
}

export const VideoPlayer = ({ url, poster }: VideoPlayerProps) => {
  const [playerControls, setPlayerControls] = useState({
    isPlaying: false,
    isFullscreen: false,
    isLoading: false,
    currentSeek: 0,
    volume: 1, // Значение от 0 до 1
    volumeBar: 100, // Значение от 0 до 100
    muted: false,
    totalVideoDuration: 0,
  });

  const hostVideoRef = useRef(null);

  // Отображение индикатора загрузки при буфферизации видео
  const toggleBufferLoading = (isLoading: boolean) => {
    return () => setPlayerControls({ ...playerControls, isLoading });
  };

  // Изменение громкости видео
  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayerControls({
      ...playerControls,
      volume: Number(e.target.value) / 100,
      volumeBar: Number(e.target.value),
    });
  };

  // Изменение % просмотра видео при включенном видео
  const handleOnProgress = (progress: {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
  }) => {
    setPlayerControls({
      ...playerControls,
      currentSeek: progress.playedSeconds,
    });
  };

  // Изменение % просмотра видео при клике
  const handleSeekChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;

    setPlayerControls({
      ...playerControls,
      currentSeek: Number(value),
    });
    hostVideoRef.current?.seekTo(Number(value));
  };

  // Воспроизвести видео
  const handlePlay = () => {
    let currentDuration;

    if (hostVideoRef.current && playerControls.totalVideoDuration === 0) {
      currentDuration = hostVideoRef.current.getDuration();
    } else {
      currentDuration = playerControls.totalVideoDuration;
    }

    setPlayerControls({
      ...playerControls,
      totalVideoDuration: currentDuration,
      isPlaying: true,
    });
  };

  // Пауза в видео
  const handlePause = () =>
    setPlayerControls({ ...playerControls, isPlaying: false });

  // Убрать звук в видео
  const handleMute = () => {
    setPlayerControls({
      ...playerControls,
      volume: Number(playerControls.volume) ? 0 : 1,
      volumeBar: Number(playerControls.volume) ? 0 : 100,
    });
  };

  // Сделать видео на весь экран
  const handleFullscreenMode = () => {
    console.log('Необходимо доделать работу с видео с Youtube');
    // const videoContainerWrapper = hostVideoRef.current?.wrapper;
    //
    // videoContainerWrapper
    //     .querySelector("video")
    //     .requestFullscreen()
    //     .catch(() =>
    //         console.error("Невозможно активировать полноэкранный режим")
    //     );
  };

  const videoDuration = hostVideoRef.current
    ? hostVideoRef.current.getDuration()
    : 0;

  // Использовать ли постер для видео
  const initPoster = () => {
    return poster ? { file: { attributes: { poster } } } : {};
  };

  return (
    <div className={styles.component}>
      <div className={styles.component__inner}>
        <ReactPlayer
          ref={hostVideoRef}
          url={url}
          config={initPoster()}
          width="100%"
          height="100%"
          playing={playerControls.isPlaying}
          muted={playerControls.muted}
          volume={playerControls.volume}
          onBuffer={toggleBufferLoading(true)}
          onBufferEnd={toggleBufferLoading(false)}
          onProgress={(progress) => handleOnProgress(progress)}
        />
        <VideoPlayerControlPanel
          isPlaying={playerControls.isPlaying}
          isLoading={playerControls.isLoading}
          currentSeek={playerControls.currentSeek}
          totalVideoDuration={videoDuration}
          muted={playerControls.muted}
          volume={playerControls.volume}
          volumeBar={playerControls.volumeBar}
          handlePause={handlePause}
          handlePlay={handlePlay}
          handleMute={handleMute}
          handleSeekChange={handleSeekChange}
          handleVolumeChange={handleVolumeChange}
          handleFullscreenMode={handleFullscreenMode}
        />
      </div>
    </div>
  );
};
