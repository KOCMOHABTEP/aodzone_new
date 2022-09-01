import styles from "./StreamDetail.module.css";
import VideoPlayer from "@components/VideoPlayer/VideoPlayer";

const StreamDetail = () => {
    return (
        <div>
            <div>header</div>
            <VideoPlayer url="https://youtu.be/aMEAHhWu6Qw" />
        </div>
    );
};

export default StreamDetail;
