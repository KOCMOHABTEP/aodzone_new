import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@/components/ui/Table";

import { Country } from "@/components/ui/Table/components/Country";
import { Name } from "@/components/ui/Table/components/Name";
import { Members } from "@/components/ui/Table/components/Members";
import { Tag } from "@/components/ui/Table/components/Tag";
import { Points } from "@/components/ui/Table/components/Points";
import { List } from "@/components/ui/Table/components/List";
import styles from "./TeamsView.module.scss";

export const TeamsView = () => {
    return (
        <div>
            <div className={styles.title}>Рейтинг команд</div>
            <Table>
                <TableHead
                    labels={[
                        "",
                        "Баллы",
                        "Тег",
                        "Название",
                        "Страна",
                        "Количество участников",
                    ]}
                />
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <List number={1} />
                        </TableCell>
                        <TableCell>
                            <Points points={154} />
                        </TableCell>
                        <TableCell>
                            <Tag tag="AOD" />
                        </TableCell>
                        <TableCell>
                            <Name title="Лупчики" />
                        </TableCell>
                        <TableCell>
                            <Country country="BY" />
                        </TableCell>
                        <TableCell>
                            <Members />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};
