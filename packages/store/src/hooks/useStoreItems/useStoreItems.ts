import { useCallback, useEffect, useState } from 'react';
import { IUseStoreItems } from 'store/interfaces/useStoreItems';
import { IStoreItem } from 'shared/interfaces/storeItem';
import { getAvailableStoreItems } from 'store/api/store';
import { purhcaseStoreItem } from 'store/api/store';

interface IUseStoreItemsProps {
  currentCurrency: number;
  handleChangeCurrency(currency: number): void
}

export const useStoreItems = ({ currentCurrency, handleChangeCurrency }: IUseStoreItemsProps): IUseStoreItems => {
  const [storeItems, setStoreItems] = useState<IStoreItem[]>([]);

  const [storeItemInPurchase, setStoreItemInPurchase] = useState<number | null>(null);

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
        const { data } = await getAvailableStoreItems();

        setStoreItems(data);
      } catch(e: any) {
        console.log(e.message);
      }
    })();
  }, []);

  return {
    storeItems,
    storeItemInPurchase,
    handlePurchase,
  };
};