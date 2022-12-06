import { ReactNode } from "react";
import cn from "classnames";
import styles from "./Table.module.scss";

interface TableCellProps {
    classes?: string;
    align?: "left" | "right";
    children: ReactNode;
}

export const TableCell = ({ classes, children, align }: TableCellProps) => {
    return (
        <td align={align} className={cn(styles.tableCell, classes)}>
            {children}
        </td>
    );
};
