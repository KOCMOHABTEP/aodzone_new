import IconArrowUp from "~/icons/svg/arrow_up.svg";
import IconArrowRight from "~/icons/svg/arrow_right.svg";
import IconArrowDown from "~/icons/svg/arrow_down.svg";
import IconArrowLeft from "~/icons/svg/arrow_left.svg";
import IconChat from "~/icons/svg/chat.svg";
import IconClose from "~/icons/svg/close.svg";
import IconError from "~/icons/svg/error.svg";
import IconFriends from "~/icons/svg/friends.svg";
import IconFullscreen from "~/icons/svg/fullscreen.svg";
import IconGameBlackOps from "~/icons/svg/game-blackops.svg";
import IconGroups from "~/icons/svg/groups.svg";
import IconHint from "~/icons/svg/hint.svg";
import IconHome from "~/icons/svg/home.svg";
import IconLike from "~/icons/svg/like.svg";
import IconLogout from "~/icons/svg/logout.svg";
import IconMatches from "~/icons/svg/matches.svg";
import IconMedia from "~/icons/svg/media.svg";
import IconNews from "~/icons/svg/news.svg";
import IconNotification from "~/icons/svg/notification.svg";
import IconPauseRound from "~/icons/svg/pause_round.svg";
import IconPlay from "~/icons/svg/play.svg";
import IconProfile from "~/icons/svg/profile.svg";
import IconStreams from "~/icons/svg/streams.svg";
import IconTeam from "~/icons/svg/team.svg";
import IconViews from "~/icons/svg/views.svg";
import IconVolumeFull from "~/icons/svg/volume_full.svg";
import IconVolumeHalf from "~/icons/svg/volume_half.svg";
import IconVolumeMuted from "~/icons/svg/volume_muted.svg";
import IconSteam from "~/icons/svg/socials-steam.svg";
import IconTimer from "~/icons/svg/timer.svg";
import IconXmark from "~/icons/svg/xmark.svg";

export const ICON_LIBRARY = {
    arrow_up: IconArrowUp,
    arrow_right: IconArrowRight,
    arrow_down: IconArrowDown,
    arrow_left: IconArrowLeft,
    comments: IconChat,
    close: IconClose,
    error: IconError,
    friends: IconFriends,
    fullscreen: IconFullscreen,
    game_bo: IconGameBlackOps,
    groups: IconGroups,
    hint: IconHint,
    home: IconHome,
    like: IconLike,
    logout: IconLogout,
    matches: IconMatches,
    media: IconMedia,
    news: IconNews,
    notification: IconNotification,
    pauseRound: IconPauseRound,
    play: IconPlay,
    profile: IconProfile,
    streams: IconStreams,
    team: IconTeam,
    views: IconViews,
    volumeFull: IconVolumeFull,
    volumeHalf: IconVolumeHalf,
    volumeMuted: IconVolumeMuted,
    social_steam: IconSteam,
    timer: IconTimer,
    xmark: IconXmark,
};

export type ICON_NAME = keyof typeof ICON_LIBRARY;
