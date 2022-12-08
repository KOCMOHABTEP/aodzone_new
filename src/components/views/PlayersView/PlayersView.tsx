import { Table, TableHead } from "@/components/ui/Table";
import styles from "./PlayersView.module.scss";

export const PlayersView = () => {
    return (
        <div>
            <div>Рейтинг игроков</div>
            <Table>
                <TableHead
                    labels={[
                        "",
                        "Баллы",
                        "Тег",
                        "Никнейм",
                        "Страна",
                        "Количество побед",
                    ]}
                />
            </Table>
        </div>
    );
};
