import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@/components/ui/Table";

import { TableCellCountry } from "@/components/ui/Table/components/TableCellCountry";
import { TableCellName } from "@/components/ui/Table/components/TableCellName";
import styles from "./TeamsView.module.scss";

export const TeamsView = () => {
    return (
        <div>
            <div className={styles.title}>Команды AodZone</div>
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
                        <TableCell>1</TableCell>
                        <TableCell>123</TableCell>
                        <TableCell>AOD</TableCell>
                        <TableCell>
                            <TableCellName title="Лупчики" />
                        </TableCell>
                        <TableCell>
                            <TableCellCountry country="BY" />
                        </TableCell>
                        <TableCell>53</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};
