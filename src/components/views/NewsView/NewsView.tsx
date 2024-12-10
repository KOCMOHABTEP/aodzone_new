import { NewsItem } from '@/components/views/NewsView/NewsItem';
import { Button } from '@/components/ui/Button';
import { useSelector } from 'react-redux';
import { getUserAuth } from '@/redux/auth/auth.selector';
import Link from 'next/link';
import styles from './NewsView.module.scss';
import clsx from 'clsx';
import { useCallback } from 'react';

type TNewsItem = {
    id: number;
    image: string;
    title: string;
    description: string;
    date: string;
    link: string;
    stats: { views: number; comments: number; likes: number };
};

export const NewsView = () => {
    const isAuth = useSelector(getUserAuth);

    const newsList: TNewsItem[] = [
        {
            id: 1,
            image: '/img/content/article_1.jpg',
            title: 'Эксперимент с криптоключами',
            description:
                '100 Ящиков поддержки, 50 обычных, 50 редких. Что же выпадет? И немного статистики',
            date: '17.03.2017',
            link: '',
            stats: {
                views: 74,
                comments: 14,
                likes: 25,
            },
        },
        {
            id: 2,
            image: '/img/content/article_2.jpeg',
            title: 'EA обзавелись киберспортивным подразделением',
            description:
                'Вопрос в другом: получится ли у Electronic Arts урвать кусок пирога, и не поздновато ли они спохватились?',
            date: '18.03.2017',
            link: '',
            stats: {
                views: 74,
                comments: 14,
                likes: 85,
            },
        },
        {
            id: 3,
            image: '/img/content/article_3.jpg',
            title: 'Обновление в Dota 2',
            description:
                'Вышло обновление от 4 ноября в Dota 2, где были исправлены мелкие баги и были добавлены новые билеты для просмотра турниров.',
            date: '19.03.2017',
            link: '',
            stats: {
                views: 74,
                comments: 14,
                likes: 5,
            },
        },
        {
            id: 4,
            image: '/img/content/article_4.jpg',
            title: 'Вышел режиссерский трейлер к выходу CoD: Black Ops',
            description:
                'Компания Activision и Treyarch выпустили новый режиссерский трейлер к выходу игры CoD: Black Ops 3, в котором снялась актриса Кара Делевинь',
            date: '20.03.2017',
            link: '',
            stats: {
                views: 74,
                comments: 14,
                likes: 24,
            },
        },
    ];

    const renderItemsGrid = useCallback(() => {
        const firstColumnItems: TNewsItem[] = [];
        const secondColumnItems: TNewsItem[] = [];

        newsList.forEach((item, index) => {
            const normalizedIndex = index + 1;

            if (normalizedIndex % 2 === 0) {
                secondColumnItems.push(item);
            } else {
                firstColumnItems.push(item);
            }
        });

        return (
            <div className={styles.grid}>
                <div className={clsx(styles.gridColumn, styles.gridColumnLeft)}>
                    {firstColumnItems.map((props) => (
                        <Link
                            href="news/1"
                            className={styles.gridItem}
                            key={props.id}
                        >
                            <NewsItem {...props} />
                        </Link>
                    ))}
                </div>
                <div
                    className={clsx(styles.gridColumn, styles.gridColumnRight)}
                >
                    {secondColumnItems.map((props) => (
                        <Link
                            href="news/1"
                            className={styles.gridItem}
                            key={props.id}
                        >
                            <NewsItem {...props} />
                        </Link>
                    ))}
                </div>
            </div>
        );
    }, [newsList]);

    return (
        <div className={styles.item}>
            <div className={styles.head}>
                <h1 className={styles.title}>Последние новости</h1>
                {isAuth && (
                    <Link href="news/create">
                        <Button
                            text="Предложить новость"
                            buttonClassName={styles.btn}
                        />
                    </Link>
                )}
            </div>
            {renderItemsGrid()}
        </div>
    );
};
