import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './Table.module.scss';

interface TableRowProps {
  children: ReactNode;
  dark?: boolean;
  classes?: string;
}

export const TableRow = ({ children, dark, classes }: TableRowProps) => {
  return (
    <tr
      className={cn(styles.tableRow, {
        [styles.tableRowDark]: dark,
        classes,
      })}
    >
      {children}
    </tr>
  );
};
