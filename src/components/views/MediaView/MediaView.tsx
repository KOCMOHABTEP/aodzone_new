import { MediaListItem } from "@/components/views/MediaView/MediaListItem";
import { MediaModal } from "@/components/views/MediaView/MediaModal";
import { useState } from "react";
import cn from "classnames";
import { TabBar } from "@/components/ui/Tabbar";
import { Pagination } from "@/components/ui/Pagination";
import { Button } from "@/components/ui/Button";
import { useSelector } from "react-redux";
import { getUserAuth } from "@/redux/auth/auth.selector";
import styles from "./MediaView.module.scss";

type MediaType = "all" | "pictures" | "videos";

export const MediaView = () => {
    const isAuth = useSelector(getUserAuth);
    const [activeMediaItem, setActiveMediaItem] = useState(null);
    const [mediaModalFormVisible, setMediaModalFormVisible] = useState(false);
    const [mediaTabValue, setMediaTabValue] = useState("Все медиафайлы");

    const mediaList = [
        {
            id: 1,
            src: "data:image/jpeg;base64,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",
            stats: {
                like: 74,
                views: 50,
                comments: 14,
            },
        },
        {
            id: 2,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFwOIEOMK4X-kqO9RF0LF-aJ2YXe0VFC1uA&usqp=CAU",
            stats: {
                like: 23,
                views: 50,
                comments: 10,
            },
        },
        {
            id: 3,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFwOIEOMK4X-kqO9RF0LF-aJ2YXe0VFC1uA&usqp=CAU",
            stats: {
                like: 5,
                views: 50,
                comments: 0,
            },
        },
        {
            id: 4,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFwOIEOMK4X-kqO9RF0LF-aJ2YXe0VFC1uA&usqp=CAU",
            stats: {
                like: 5,
                views: 50,
                comments: 0,
            },
        },
        {
            id: 5,
            src: "https://games.mail.ru/hotbox/content_files/news/2021/06/09/79778969f55f4e88b74a48422299b13f.jpg",
            stats: {
                like: 5,
                views: 150,
                comments: 0,
            },
        },
        {
            id: 6,
            src: "https://games.mail.ru/hotbox/content_files/news/2021/06/09/79778969f55f4e88b74a48422299b13f.jpg",
            stats: {
                like: 5,
                views: 15,
                comments: 0,
            },
        },
        {
            id: 7,
            src: "https://games.mail.ru/hotbox/content_files/news/2021/06/09/79778969f55f4e88b74a48422299b13f.jpg",
            stats: {
                like: 5,
                views: 40,
                comments: 0,
            },
        },
    ];

    const mediaTabList = [
        {
            label: "Все медиафайлы",
        },
        {
            label: "Картинки",
        },
        {
            label: "Видео",
        },
    ];

    const handleMediaItemClick = (data: any) => {
        setActiveMediaItem(data);
        setMediaModalFormVisible(true);
    };

    const handleMediaTabClick = label => {
        console.log(label);
        setMediaTabValue(label);
    };

    return (
        <div className={styles.media}>
            <div className={styles.wrapperHeader}>
                <h1 className={styles.h1}>Медиа</h1>
                {isAuth && <Button text="Добавить" />}
            </div>
            {/*<p className={styles.description}>Мемы про игры. Здесь вы можете посмотреть различные мемчики и предложить свои</p>*/}
            <div className={styles.mediaTabBar}>
                <TabBar
                    tabs={mediaTabList}
                    selectedTab={mediaTabValue}
                    onClick={handleMediaTabClick}
                />
            </div>
            <div className={styles.wrapper}>
                {mediaList.map(mediaItem => (
                    <MediaListItem
                        stats={mediaItem.stats}
                        src={mediaItem.src}
                        key={mediaItem.id}
                        onClick={() => handleMediaItemClick(mediaItem)}
                    />
                ))}
            </div>
            <div>
                {activeMediaItem && mediaModalFormVisible && (
                    <MediaModal
                        onClose={() => setMediaModalFormVisible(false)}
                        src={activeMediaItem.src}
                        stats={activeMediaItem.stats}
                    />
                )}
            </div>
            {/* <div className={styles.paginetor}> */}
            {/*    <Pagination pageCount={} onChangePage={} /> */}
            {/* </div> */}
        </div>
    );
};
