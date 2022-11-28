import { VideoPlayer } from "@/components/ui/VideoPlayer";
import styles from "./StreamDetail.module.scss";

export const StreamDetailView = () => {
    return (
        <div>
            <div>header</div>
            <VideoPlayer url="https://youtu.be/aMEAHhWu6Qw" />
        </div>
    );
};
