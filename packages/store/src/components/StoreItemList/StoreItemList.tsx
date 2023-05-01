import { useMemo } from 'react';
import { Layout } from 'shared/components/Layout';
import { ContentWrapper } from 'shared/components/ContentWrapper';
import { StoreItem } from 'store/components/StoreItem';
import { useStoreItems } from 'store/hooks';
import { IStoreItem } from 'store/interfaces/storeItem';

export const StoreItemList = () => {
  const { storeItems, handlePurchase } = useStoreItems();

  const storeItemList = useMemo(() => {
    return storeItems.map((storeItem: IStoreItem) => {
      return <StoreItem storeItem={storeItem} onPurchase={handlePurchase} />;
    });
  }, [storeItems, handlePurchase]);

  return (
    <Layout>
      <ContentWrapper>
        {storeItemList}
      </ContentWrapper>
    </Layout>
  );
};