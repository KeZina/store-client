import { useCallback, useState } from 'react';
import { IUsePagination } from 'shared/interfaces/usePagination';

interface IUsePaginationProps {
  limit?: number;
}

export const usePagination = ({ limit = 15 }: IUsePaginationProps): IUsePagination => {
  const [page, setPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  const handleNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const handlePreviousPage = useCallback(() => {
    if (page == 1) {
      return;
    }
    
    if (!hasNextPage) {
      setHasNextPage(true);
    }

    setPage(page - 1);
  }, [page, hasNextPage]);

  const handleHasNextPage = useCallback((hasNextPage: boolean) => {
    setHasNextPage(hasNextPage);
  }, []);

  return {
    page,
    limit,
    hasNextPage,
    handleNextPage,
    handlePreviousPage,
    handleHasNextPage
  };
};