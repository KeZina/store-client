import { useCallback, useEffect, useState } from 'react';
import { IUseStoreItems } from 'store/interfaces/useStoreItems';
import { IStoreItem } from 'store/interfaces/storeItem';
import { getAvailableStoreItems } from 'store/api/store';

export const useStoreItems = (): IUseStoreItems => {
  const [storeItems, setStoreItems] = useState<IStoreItem[]>([]);

  const handlePurchase = useCallback((itemId: number) => {
    return;
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAvailableStoreItems();

        setStoreItems(data);
      } catch(e: any) {
        console.log(e.message);
      }
    })();
  }, []);

  return {
    storeItems,
    handlePurchase
  };
};