import { CommentItem } from '@/components/ui/Comment/CommentItem';
import { CommentSendSection } from '@/components/ui/Comment/CommentSendSection';
import { useState } from 'react';
import { Pagination } from '@/components/ui/Pagination';
import { usePagination } from '@/hooks/usePagination';
import styles from './ForumDetailView.module.scss';

export const ForumDetailView = () => {
  const [dataset, setDataset] = useState<any>([]);
  const { paginatedItem, pageCount, handlePageClick } = usePagination({
    dataset,
  });
  return (
    <div>
      <div className={styles.item}>
        <div className={styles.header}>
          <div className={styles.header__title}>Деталка темы форума</div>
          <div className={styles.list}>
            <Pagination pageCount={pageCount} onChangePage={handlePageClick} />
          </div>
        </div>
        <div>
          <CommentItem
            date="30.12.2021 15:45"
            comment="Очередное обновление, еще одно ружье, Еще одно обновление, еще одно ружье, еще одно"
          />
          <CommentItem
            date="30.12.2021 15:45"
            comment="Очередное обновление, еще одно ружье, Еще одно обновление, еще одно ружье, еще одно jvksn hdsbfgjhdskb gfkjgf"
          />
        </div>
        <div className={styles.list}>
          <Pagination pageCount={pageCount} onChangePage={handlePageClick} />
        </div>
      </div>
      <CommentSendSection />
    </div>
  );
};
