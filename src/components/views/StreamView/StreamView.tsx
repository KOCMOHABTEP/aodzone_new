import { StreamFilterIAll } from "@/components/views/StreamView/StreamsFilter/StreamFilterIAll";
import { StreamsFilter } from "@/components/views/StreamView/StreamsFilter";
import { StreamItem } from "@/components/views/StreamView/StreamItem";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { StreamForm } from "@/components/views/StreamView/StreamForm";
import { useSelector } from "react-redux";
import { getUserAuth } from "@/redux/auth/auth.selector";
import styles from "./StreamView.module.scss";

export const StreamView = () => {
    const isAuth = useSelector(getUserAuth);
    const [streamFormVisible, setStreamFormVisible] = useState(false);

    const streamList = [
        {
            nameGame: "World plane 3",
            title: "Играем в игру на выживание",
            nickName: "КОСМОНАВТ",
            numbersViews: 32,
            src: "https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg",
            online: true,
        },
        {
            nameGame: "World plane 3",
            title: "Играем в игру на выживание",
            nickName: "ЛУПА",
            numbersViews: 356,
            src: "https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg",
            online: false,
        },
        {
            nameGame: "World plane 3",
            title: "Играем в игру на выживание",
            nickName: "Пупа",
            numbersViews: 156,
            src: "https://www.ixbt.com/img/n1/news/2020/5/1/02ab2825469425b9_1920xH_large.jpg",
            online: false,
        },
        {
            title: "Играем в игру на выживание",
            nameGame: "World plane 3",
            nickName: "ПУПА",
            numbersViews: 156,
            src: "https://www.ixbt.com/img/n1/news/2020/5/1/02ab2825469425b9_1920xH_large.jpg",
            online: false,
        },
        {
            title: "Играем в игру на выживание",
            nickName: "КОСМОНАВТ",
            nameGame: "World plane 3",
            numbersViews: 156,
            src: "https://cdn.igromania.ru/mnt/news/1/0/5/1/2/6/95631/748015063a88962f_1920xH.jpg",
            online: false,
        },
        {
            title: "Играем в игру на выживание",
            nickName: "КОСМОНАВТ",
            nameGame: "World plane 3",
            numbersViews: 785,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wloazeH48nDKtWRUWMXsgcPM9xcUZgmZzw&usqp=CAU",
            online: false,
        },
        {
            title: "Играем в игру на выживание",
            nickName: "КОСМОНАВТ",
            nameGame: "World plane 3",
            numbersViews: 785,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wloazeH48nDKtWRUWMXsgcPM9xcUZgmZzw&usqp=CAU",
            online: false,
        },
        {
            title: "Играем в игру на выживание",
            nickName: "КОСМОНАВТ",
            nameGame: "World plane 3",
            numbersViews: 785,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wloazeH48nDKtWRUWMXsgcPM9xcUZgmZzw&usqp=CAU",
            online: false,
        },
        {
            title: "Играем в игру на выживание",
            nickName: "КОСМОНАВТ",
            nameGame: "World plane 3",
            numbersViews: 785,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wloazeH48nDKtWRUWMXsgcPM9xcUZgmZzw&usqp=CAU",
            online: false,
        },
        {
            title: "Играем в игру на выживание",
            nickName: "КОСМОНАВТ",
            nameGame: "World plane 3",
            numbersViews: 785,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wloazeH48nDKtWRUWMXsgcPM9xcUZgmZzw&usqp=CAU",
            online: false,
        },
    ];

    const handleOpenStreamModal = () => {
        setStreamFormVisible(true);
    };

    const handleCloseTeamModal = () => {
        setStreamFormVisible(false);
    };

    return (
        <div className={styles.item}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Стримы игр</h1>
                {isAuth && (
                    <Button
                        text="Добавить стрим"
                        onClick={handleOpenStreamModal}
                    />
                )}
            </div>
            <div>
                <StreamForm
                    streamFormVisible={streamFormVisible}
                    handleCloseTeamModal={handleCloseTeamModal}
                />
            </div>

            {/* <div className={styles.header}> */}
            {/*    <div className={styles.header__title}>ПОПУЛЯРНЫЕ ИГРЫ</div> */}
            {/*    <StreamFilterIAll /> */}
            {/* </div> */}
            {/* <div className={styles.games}> */}
            {/*    <StreamsGames */}
            {/*        nameGame="Fortnite" */}
            {/*        views={258} */}
            {/*        src="http://u.kanobu.ru/editor/images/43/eee21854-2a21-4b96-9b8b-7001c2c92949.jpg" */}
            {/*    /> */}
            {/*    <StreamsGames */}
            {/*        nameGame="Fortnite" */}
            {/*        views={25} */}
            {/*        src="http://u.kanobu.ru/editor/images/43/eee21854-2a21-4b96-9b8b-7001c2c92949.jpg" */}
            {/*    /> */}
            {/*    <StreamsGames */}
            {/*        nameGame="Fortnite" */}
            {/*        views={2} */}
            {/*        src="https://imagor.network-xyz.com/unsafe/fit-in/846x700/https://cdn.media-xyz.com/media/%D1%84%D0%BE%D0%BB_gDQ6bMJ.png" */}
            {/*    /> */}
            {/*    <StreamsGames */}
            {/*        nameGame="Fortnite" */}
            {/*        views={63} */}
            {/*        src="https://avatars.dzeninfra.ru/get-zen_doc/1584893/pub_5d9e3dc6027a1500ae5afec4_5d9e403798930900b645272e/scale_1200" */}
            {/*    /> */}
            {/*    <StreamsGames */}
            {/*        nameGame="Fortnite" */}
            {/*        views={2256} */}
            {/*        src="https://upload.wikimedia.org/wikipedia/ru/1/16/Killzone_2.jpg" */}
            {/*    /> */}
            {/*    <StreamsGames */}
            {/*        nameGame="Fortnite" */}
            {/*        views={5} */}
            {/*        src="https://metarankings.ru/images/uploads/2021/05/hood-outlaws-legends-boxart-cover.jpg" */}
            {/*    /> */}
            {/* </div> */}
            <div>
                <StreamsFilter>
                    <StreamFilterIAll />
                </StreamsFilter>
                <div className={styles.list}>
                    {streamList.map(
                        (
                            {
                                title,
                                nickName,
                                nameGame,
                                numbersViews,
                                src,
                                online,
                            },
                            index
                        ) => (
                            <StreamItem
                                key={index}
                                nameGame={nameGame}
                                title={title}
                                nickName={nickName}
                                numbersViews={numbersViews}
                                src={src}
                                online={online}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};
