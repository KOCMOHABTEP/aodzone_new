import { ReactNode } from "react";
import styles from "./Table.module.scss";

interface TableHeadProps {
    labels: string[] | ReactNode[];
}

export const TableHead = ({ labels }: TableHeadProps) => {
    return (
        <thead>
            <tr>
                {labels.map(item => (
                    <th key={item} className={styles.tableHeadCell}>
                        {typeof item === "string" ? item : item()}
                    </th>
                ))}
            </tr>
        </thead>
    );
};
