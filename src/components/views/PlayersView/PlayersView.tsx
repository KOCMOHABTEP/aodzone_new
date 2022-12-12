import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@/components/ui/Table";
import { List } from "@/components/ui/Table/components/List";
import { Points } from "@/components/ui/Table/components/Points";
import { TeamInfo } from "@/components/ui/Table/components/TeamInfo";
import { Games } from "@/components/ui/Table/components/Games";
import { Wins } from "@/components/ui/Table/components/Wins";
import { WinsPercentage } from "@/components/ui/Table/components/WinsPercentage";
import styles from "./PlayersView.module.scss";

export const PlayersView = () => {
    const playersViewList = [
        {
            number: 1,
            points: 154,
            tag: "AOD",
            image: "https://www.meme-arsenal.com/memes/9018adbc4dc80835becaa3baebd84ed9.jpg",
            title: "Лупчики",
            country: "BY",
            games: 1456,
            wins: 56,
        },
        {
            number: 2,
            points: 127,
            tag: "RUS",
            image: "https://i.pinimg.com/236x/ce/60/cf/ce60cf6c3f5d3ab57136565b104f163b.jpg",
            title: "Руссичи",
            country: "RU",
            games: 1456,
            wins: 56,
        },
        {
            number: 3,
            points: 114,
            tag: "CAN",
            image: "https://i.pinimg.com/474x/a2/6b/36/a26b36c58ec2c4fb531a82c2996d5a05.jpg",
            title: "Counter",
            country: "AE",
            games: 1456,
            wins: 56,
        },
        {
            number: 4,
            points: 101,
            tag: "CAN",
            image: "https://abrakadabra.fun/uploads/posts/2021-12/thumbs/1640356667_42-abrakadabra-fun-p-avi-dlya-timi-v-standoff-46.jpg",
            title: "Counter",
            country: "AM",
            games: 13,
            wins: 6,
        },
        {
            number: 5,
            points: 99,
            tag: "CAN",
            image: "https://abrakadabra.fun/uploads/posts/2021-12/thumbs/1640713678_27-abrakadabra-fun-p-sinie-avatarki-dlya-standoff-29.jpg",
            title: "Counter",
            country: "KZ",
            games: 1456,
            wins: 56,
        },
    ];

    return (
        <div>
            <div className={styles.title}>Рейтинг игроков</div>
            <Table>
                <TableHead
                    labels={["", "Баллы", "Игрок", "Игр", "Побед", "% побед"]}
                />

                <TableBody>
                    {playersViewList.map(
                        (
                            {
                                number,
                                points,
                                tag,
                                image,
                                title,
                                country,
                                wins,
                                games,
                            },
                            index
                        ) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <List number={number} />
                                </TableCell>
                                <TableCell>
                                    <Points points={points} />
                                </TableCell>
                                <TableCell>
                                    <TeamInfo
                                        tag={tag}
                                        image={image}
                                        title={title}
                                        country={country as any}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Games value={games.toString()} />
                                </TableCell>
                                <TableCell>
                                    <Wins value={wins.toString()} />
                                </TableCell>
                                <TableCell>
                                    <WinsPercentage
                                        value={`${parseFloat(
                                            (games / wins).toFixed(2)
                                        )}%`}
                                    />
                                </TableCell>
                            </TableRow>
                        )
                    )}
                </TableBody>
            </Table>
            {/* <div className={styles.pagination}> */}
            {/*    <Pagination pageCount={} onChangePage={} /> */}
            {/* </div> */}
        </div>
    );
};
