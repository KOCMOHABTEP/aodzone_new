import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@/components/ui/Table";
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
                        <TableCell>КОСМОНАВТ</TableCell>
                        <TableCell>Россия</TableCell>
                        <TableCell>53</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};
