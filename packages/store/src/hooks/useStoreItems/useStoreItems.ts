import { useCallback, useEffect, useState } from 'react';
import { IUseStoreItems } from 'store/interfaces/useStoreItems';
import { IStoreItem } from 'shared/interfaces/storeItem';
import { getAvailableStoreItems } from 'store/api/store';
import { purhcaseStoreItem } from 'store/api/store';
import { usePagination } from 'shared/hooks/usePagination';

interface IUseStoreItemsProps {
  currentCurrency: number;
  handleChangeCurrency(currency: number): void
}

export const useStoreItems = ({ currentCurrency, handleChangeCurrency }: IUseStoreItemsProps): IUseStoreItems => {
  const [storeItems, setStoreItems] = useState<IStoreItem[]>([]);
  const [storeItemInPurchase, setStoreItemInPurchase] = useState<number | null>(null);

  const { 
    page,
    limit,
    hasNextPage,
    handleNextPage,
    handlePreviousPage,
    handleHasNextPage
  } = usePagination({});

  const handlePurchase = useCallback(async (storeItem: IStoreItem) => {
    try {
      setStoreItemInPurchase(storeItem.id);

      await purhcaseStoreItem(storeItem);
      
      handleChangeCurrency(currentCurrency - storeItem.price);
      setStoreItems(storeItems.filter((item: IStoreItem) => item.id !== storeItem.id));
    } catch(e: any) {
      console.log(e.message);
    } finally {
      setStoreItemInPurchase(null);
    }
  }, [storeItems, currentCurrency, handleChangeCurrency]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAvailableStoreItems({ page, limit });

        if (data.length < limit) {
          handleHasNextPage(false);
        }

        setStoreItems(data);
      } catch(e: any) {
        console.log(e.message);
      }
    })();
  }, [page, limit, handleHasNextPage]);

  return {
    storeItems,
    storeItemInPurchase,
    page,
    hasNextPage,
    handlePurchase,
    handleNextPage,
    handlePreviousPage,
    handleHasNextPage
  };
};