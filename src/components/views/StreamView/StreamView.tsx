import { StreamFilterIAll } from "@/components/views/StreamView/StreamsFilter/StreamFilterIAll";
import { StreamsGames } from "@/components/views/StreamView/StreamsGames";
import { StreamsFilter } from "@/components/views/StreamView/StreamsFilter";
import { StreamItem } from "@/components/views/StreamView/StreamItem";
import styles from "./StreamView.module.scss";

export const StreamView = () => {
    return (
        <div className={styles.item}>
            <div className={styles.title}>СТРИМЫ</div>
            <div className={styles.header}>
                <div className={styles.header__title}>ПОПУЛЯРНЫЕ ИГРЫ</div>
                <StreamFilterIAll />
            </div>
            <div className={styles.games}>
                <StreamsGames
                    nameGame="Fortnite"
                    views={258}
                    src="http://u.kanobu.ru/editor/images/43/eee21854-2a21-4b96-9b8b-7001c2c92949.jpg"
                />
                <StreamsGames
                    nameGame="Fortnite"
                    views={25}
                    src="http://u.kanobu.ru/editor/images/43/eee21854-2a21-4b96-9b8b-7001c2c92949.jpg"
                />
                <StreamsGames
                    nameGame="Fortnite"
                    views={2}
                    src="https://imagor.network-xyz.com/unsafe/fit-in/846x700/https://cdn.media-xyz.com/media/%D1%84%D0%BE%D0%BB_gDQ6bMJ.png"
                />
                <StreamsGames
                    nameGame="Fortnite"
                    views={63}
                    src="https://avatars.dzeninfra.ru/get-zen_doc/1584893/pub_5d9e3dc6027a1500ae5afec4_5d9e403798930900b645272e/scale_1200"
                />
                <StreamsGames
                    nameGame="Fortnite"
                    views={2256}
                    src="https://upload.wikimedia.org/wikipedia/ru/1/16/Killzone_2.jpg"
                />
                <StreamsGames
                    nameGame="Fortnite"
                    views={5}
                    src="https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg"
                />
            </div>
            <div>
                <StreamsFilter />
                <div className={styles.list}>
                    <StreamItem
                        nameGame="World plane 3"
                        title="Играем в игру на выживание"
                        nickName="КОСМОНАВТ"
                        numbersViews={32}
                        src="https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg"
                    />
                    <StreamItem
                        nameGame="World plane 3"
                        title="Играем в игру на выживание"
                        nickName="ЛУПА"
                        numbersViews={356}
                        src="https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg"
                    />
                    <StreamItem
                        title="Играем в игру на выживание"
                        nameGame="World plane 3"
                        nickName="ПУПА"
                        numbersViews={156}
                        src="https://www.ixbt.com/img/n1/news/2020/5/1/02ab2825469425b9_1920xH_large.jpg"
                    />
                    <StreamItem
                        title="Играем в игру на выживание"
                        nameGame="World plane 3"
                        nickName="КОСМОНАВТ"
                        numbersViews={456}
                        src="https://cdnstatic.rg.ru/uploads/images/194/05/37/IMG_20200417_100440_693_d_850.jpg"
                    />
                    <StreamItem
                        title="Играем в игру на выживание"
                        nickName="КОСМОНАВТ"
                        nameGame="World plane 3"
                        numbersViews={156}
                        src="https://cdn.igromania.ru/mnt/news/1/0/5/1/2/6/95631/748015063a88962f_1920xH.jpg"
                    />
                    <StreamItem
                        title="Играем в игру на выживание"
                        nickName="КОСМОНАВТ"
                        nameGame="World plane 3"
                        numbersViews={785}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wloazeH48nDKtWRUWMXsgcPM9xcUZgmZzw&usqp=CAU"
                    />
                </div>
            </div>
        </div>
    );
};
