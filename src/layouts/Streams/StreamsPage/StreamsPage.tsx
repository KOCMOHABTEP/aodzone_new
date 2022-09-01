import VideoPlayer from "@components/VideoPlayer/VideoPlayer";
import styles from "./StreamsPage.module.css";
import StreamItem from "@layouts/Streams/StreamItem/StreamItem";
import StreamsFilter from "@layouts/Streams/StreamsFilter/StreamsFilter";
import StreamsGames from "@layouts/Streams/StreamsGames/StreamsGames";
import StreamFilterIAll from "@layouts/Streams/StreamsFilter/StreamFilterIAll/StreamFilterIAll";

const StreamsPage = () => {
    return (
        <div className={styles.streamPage}>
            <div className={styles.streamPageTitle}>СТРИМЫ</div>
            <div className={styles.streamGameHeader}>
                <div className={styles.streamGameHeaderTitle}>
                    ПОПУЛЯРНЫЕ ИГРЫ
                </div>
                <StreamFilterIAll />
            </div>
            <div className={styles.streamsGamesList}>
                <StreamsGames src="https://msgnews.name/uploads/games/cover/small/2988251171_cover.jpg" />
                <StreamsGames src="http://u.kanobu.ru/editor/images/43/eee21854-2a21-4b96-9b8b-7001c2c92949.jpg" />
                <StreamsGames src="https://imagor.network-xyz.com/unsafe/fit-in/846x700/https://cdn.media-xyz.com/media/%D1%84%D0%BE%D0%BB_gDQ6bMJ.png" />
                <StreamsGames src="https://avatars.dzeninfra.ru/get-zen_doc/1584893/pub_5d9e3dc6027a1500ae5afec4_5d9e403798930900b645272e/scale_1200" />
                <StreamsGames src="https://upload.wikimedia.org/wikipedia/ru/1/16/Killzone_2.jpg" />
                <StreamsGames src="https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg" />
            </div>
            <div>
                <StreamsFilter />
                <div className={styles.streamsList}>
                    <StreamItem src="https://mobimg.b-cdn.net/v3/fetch/10/10c396ccbafbe2a5f498d87e9eacfffe.jpeg" />
                    <StreamItem src="https://img2.akspic.ru/previews/3/1/6/6/6/166613/166613-pole_bitvy_2042-kosti-electronic_arts-mnogopolzovatelskaya_video_igra-shuter-550x310.jpg" />
                    <StreamItem src="https://www.ixbt.com/img/n1/news/2020/5/1/02ab2825469425b9_1920xH_large.jpg" />
                    <StreamItem src="https://cdnstatic.rg.ru/uploads/images/194/05/37/IMG_20200417_100440_693_d_850.jpg" />
                    <StreamItem src="https://cdn.igromania.ru/mnt/news/1/0/5/1/2/6/95631/748015063a88962f_1920xH.jpg" />
                    <StreamItem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wloazeH48nDKtWRUWMXsgcPM9xcUZgmZzw&usqp=CAU" />
                </div>
            </div>
        </div>
    );
};

export default StreamsPage;
