import cn from 'classnames';
import { Icon } from '@/components/ui/Icon';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

interface PaginationProps {
  pageCount: number;
  onChangePage: (data: any) => void;
}

const PaginationPreviousButton = () => (
  <div className={cn(styles.icon, styles.iconPrev)}>
    <Icon name="arrow_left" />
  </div>
);

const PaginationNextButton = () => (
  <div className={cn(styles.icon, styles.iconNext)}>
    <Icon name="arrow_right" />
  </div>
);

const PaginationBreakLabel = () => (
  <div className={styles.controlsItem}>...</div>
);

export const Pagination = ({ pageCount, onChangePage }: PaginationProps) => {
  return (
    <div className={styles.container}>
      <ReactPaginate
        containerClassName={styles.pagination}
        onPageChange={onChangePage}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<PaginationPreviousButton />}
        nextLabel={<PaginationNextButton />}
        breakLabel={<PaginationBreakLabel />}
        renderOnZeroPageCount={null}
        pageLinkClassName={styles.controlsItem}
        activeClassName={styles.controlsItemSelected}
        disabledClassName={styles.controlsItemDisabled}
      />
    </div>
  );
};
