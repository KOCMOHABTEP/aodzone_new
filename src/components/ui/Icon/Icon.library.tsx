import IconArrowUp from "./icons/arrow_up.svg";
import IconArrowRight from "./icons/arrow_right.svg";
import IconArrowDown from "./icons/arrow_down.svg";
import IconArrowLeft from "./icons/arrow_left.svg";
import IconChat from "./icons/chat.svg";
import IconError from "./icons/error.svg";
import IconFriends from "./icons/friends.svg";
import IconGameBlackOps from "./icons/game-blackops.svg";
import IconGroups from "./icons/groups.svg";
import IconHint from "./icons/hint.svg";
import IconHome from "./icons/home.svg";
import IconLike from "./icons/like.svg";
import IconMatches from "./icons/matches.svg";
import IconMedia from "./icons/media.svg";
import IconNews from "./icons/news.svg";
import IconNotification from "./icons/notification.svg";
import IconStreams from "./icons/streams.svg";
import IconTeam from "./icons/team.svg";
import IconViews from "./icons/views.svg";
import IconSteam from "./icons/socials-steam.svg";
import IconTimer from "./icons/timer.svg";

export const ICON_LIBRARY = {
    arrow_up: props => <IconArrowUp {...props} />,
    arrow_right: props => <IconArrowRight {...props} />,
    arrow_down: props => <IconArrowDown {...props} />,
    arrow_left: props => <IconArrowLeft {...props} />,
    comments: props => <IconChat {...props} />,
    error: props => <IconError {...props} />,
    friends: props => <IconFriends {...props} />,
    "game-blackops": props => <IconGameBlackOps {...props} />,
    groups: props => <IconGroups {...props} />,
    hint: props => <IconHint {...props} />,
    home: props => <IconHome {...props} />,
    like: props => <IconLike {...props} />,
    matches: props => <IconMatches {...props} />,
    media: props => <IconMedia {...props} />,
    news: props => <IconNews {...props} />,
    notification: props => <IconNotification {...props} />,
    streams: props => <IconStreams {...props} />,
    team: props => <IconTeam {...props} />,
    views: props => <IconViews {...props} />,
    "social-steam": props => <IconSteam {...props} />,
    timer: props => <IconTimer {...props} />,
};

export type ICON_NAME = keyof typeof ICON_LIBRARY;
