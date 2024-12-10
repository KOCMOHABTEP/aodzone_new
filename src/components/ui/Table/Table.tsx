import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './Table.module.scss';

interface TableProps {
  classes?: string;
  children: ReactNode;
}

export const Table = ({ classes, children }: TableProps) => {
  return <table className={cn(styles.table, classes)}>{children}</table>;
};
