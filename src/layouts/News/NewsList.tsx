import NewsItem from "@layouts/News/NewsItem/NewsItem";
import styles from "./NewsList.module.css";

const NewsList = () => {
    const newsList = [
        {
            id: 1,
            image: "/img/content/article_1.jpg",
            title: "Эксперимент с криптоключами",
            description:
                "100 Ящиков поддержки, 50 обычных, 50 редких. Что же выпадет? И немного статистики",
            date: "17.03.2017",
            link: "",
            stats: {
                views: 74,
                comments: 14,
            },
        },
        {
            id: 2,
            image: "/img/content/article_2.jpeg",
            title: "EA обзавелись киберспортивным подразделением",
            description:
                "Вопрос в другом: получится ли у Electronic Arts урвать кусок пирога, и не поздновато ли они спохватились?",
            date: "18.03.2017",
            link: "",
            stats: {
                views: 74,
                comments: 14,
            },
        },
        {
            id: 3,
            image: "/img/content/article_3.jpg",
            title: "Обновление в Dota 2",
            description:
                "Вышло обновление от 4 ноября в Dota 2, где были исправлены мелкие баги и были добавлены новые билеты для просмотра турниров.",
            date: "19.03.2017",
            link: "",
            stats: {
                views: 74,
                comments: 14,
            },
        },
        {
            id: 4,
            image: "/img/content/article_4.jpg",
            title: "Вышел режиссерский трейлер к выходу CoD: Black Ops",
            description:
                "Компания Activision и Treyarch выпустили новый режиссерский трейлер к выходу игры CoD: Black Ops 3, в котором снялась актриса Кара Делевинь",
            date: "20.03.2017",
            link: "",
            stats: {
                views: 74,
                comments: 14,
            },
        },
    ];

    return (
        <div className={styles.news}>
            <div className={styles.newsTitle}>Последние новости</div>
            <div className={styles.newsGrid}>
                {newsList.map(props => (
                    <NewsItem {...props} key={props.id} />
                ))}
            </div>
        </div>
    );
};

export default NewsList;
