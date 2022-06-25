import Icon from "@components/ui/Icon/Icon";
import styles from "./NewsDetail.module.css";

const NewsDetail = () => {
    const newsItem = {
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
        content: `
            <h1>Открыл я как-то ящики</h1>
            <p>Я вчера открыл 100 Ящиков поддержки (50 обычных и 50 редких), с целью проведения эксперимента, так как в последнем патче редкие ящики поддержки были улучшены (увеличен шанс выпадения Легендарных/Эпических, а также гарантировано выпадение камуфляжа на оружие&nbsp;или предмета для специалиста в каждом ящике). Результаты были поразительными и мне захотелось поделиться своим экспериментом с вами!</p>
            <ul>
             <li>50 Редких ящиков (33 обычных, 64 редких, 34 легендарных, 19 эпических вещей)</li>
             <li>50 Обычных ящиков (121 обычных, 18 редких, 7 легендарных, 4 эпических вещей)</li>
            </ul>
            
            <p>То что особенно&nbsp;было заметно, это изменение дропа камуфляжей на оружие (все любят камуфляжи):</p>
            
            <ul>
             <li>Камуфляжи из Редких ящиков (из 46/150 вещей были камуфляжи)</li>
             <li>21 Обычных (46%)</li>
             <li>7 Редких (15%)</li>
             <li>2 Легендарных (4%)</li>
             <li><strong>16 Эпических (35%)</strong></li>
            </ul>
            
            <div align="center">
            <p><img alt="" src="/news_img/cod/diagram11.jpg" style="width: 760px; height: 480px;"></p>
            </div>
            
            <p>Камуфляжи из Обычных ящиков (из 80/150 вещей были камуфляжи):</p>
            
            <ul>
             <li>66 Обычных (83%)</li>
             <li>6 Редких (7%)</li>
             <li>4 Легендарных (5%)</li>
             <li>4 Эпических (5%)</li>
            </ul>
            
            <div align="center">
            <p><img alt="" src="/news_img/cod/diagram21.jpg" style="width: 760px; height: 480px;"></p>
            </div>
            
            <p>Конечно 100 Ящиков поддержки не так уж и много, для того чтобы проводить эксперимент, но результаты, лично для меня, очевидны. Редкие ящики поддержки действительно стали лучше, после патча.</p>
        `,
    };

    return (
        <div className={styles.newsDetail}>
            <div className={styles.newsDetailHeader}>
                <div className={styles.newsDetailHeaderTitle}>
                    {newsItem.title}
                </div>
                <div className={styles.newsDetailHeaderCaption}>
                    {newsItem.description}
                </div>
            </div>
            <div className={styles.newsDetailImageContainer}>
                <img className={styles.newsDetailImage} src={newsItem.image} />
            </div>
            <div className={styles.newsDetailContent}>
                <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
            </div>
            <div className={styles.newsDetailFooter}>
                <div className={styles.newsDetailFooterControls}>
                    <Icon name="like" />
                    <Icon name="comments" />
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
