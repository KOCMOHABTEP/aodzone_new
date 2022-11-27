import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import styles from "./StreamDetail.module.css";

const StreamDetail = () => {
    return (
        <div>
            <div>header</div>
            <VideoPlayer url="https://youtu.be/aMEAHhWu6Qw" />
        </div>
    );
};

export default StreamDetail;
