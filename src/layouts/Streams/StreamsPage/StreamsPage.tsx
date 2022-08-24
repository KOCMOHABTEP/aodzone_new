import VideoPlayer from "@components/VideoPlayer/VideoPlayer";
import styles from "./StreamsPage.module.css";

const StreamsPage = () => {
    return (
        <div>
            <div>Headers</div>
            <div>
                <div>header</div>
                <div>
                    <VideoPlayer url="https://www.youtube.com/watch?v=aMEAHhWu6Qw&t=1s" />
                </div>
                <div>Bottom</div>
            </div>
        </div>
    );
};

export default StreamsPage;
