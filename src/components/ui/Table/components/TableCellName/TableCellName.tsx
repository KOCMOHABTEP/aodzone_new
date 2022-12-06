import styles from "./TableCellNameTeam.module.scss";

interface TableCellNameProps {
    title: string;
}

export const TableCellName = ({ title }: TableCellNameProps) => {
    return <div>{title}</div>;
};
