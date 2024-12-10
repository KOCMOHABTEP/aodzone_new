import { useEffect, useState } from 'react';

export const usePagination = ({
  defaultOffset = 0,
  itemsPerPage = 5,
  dataset = [],
} = {}) => {
  const [offset, setOffset] = useState(defaultOffset);

  useEffect(() => {
    setOffset(defaultOffset);
  }, [dataset, defaultOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dataset.length;
    setOffset(newOffset);
  };

  const endOffset = offset + itemsPerPage;
  const paginatedItems = dataset.slice(offset, endOffset);
  const pageCount = Math.ceil(dataset.length / itemsPerPage);

  return {
    setOffset,
    paginatedItems,
    pageCount,
    handlePageClick,
  };
};
