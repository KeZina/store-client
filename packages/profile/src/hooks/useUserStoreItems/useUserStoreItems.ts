import { useCallback, useEffect, useState } from 'react';
import { IUseUserStoreItems } from 'profile/interfaces/useUserStoreItems';
import { IStoreItem } from 'shared/interfaces/storeItem';
import { deleteUserStoreItem, getUserStoreItems } from 'profile/api/userStoreItems';

export const useUserStoreItems = (): IUseUserStoreItems => {
  const [userStoreItems, setUserStoreItems] = useState<IStoreItem[]>([]);

  const handleDeleteUserStoreItem = useCallback(async (storeItemId: number) => {
    try {
      await deleteUserStoreItem(storeItemId);

      setUserStoreItems(userStoreItems.filter((userStoreItem: IStoreItem) => userStoreItem.id !== storeItemId));
    } catch(e: any) {
      console.log(e.message);
    }
  }, [userStoreItems]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getUserStoreItems();

        setUserStoreItems(data);
      } catch(e: any) {
        console.log(e.message);
      }
    })();
  }, []);

  return {
    userStoreItems,
    handleDeleteUserStoreItem
  };
};