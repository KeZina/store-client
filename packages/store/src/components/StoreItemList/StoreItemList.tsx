import { useContext, useMemo } from 'react';
import { Layout } from 'shared/components/Layout';
import { ContentWrapper } from 'shared/components/ContentWrapper';
import { StoreItem } from 'store/components/StoreItem';
import { useStoreItems } from 'store/hooks/useStoreItems';
import { IStoreItem } from 'store/interfaces/storeItem';
import { ProfileContext } from 'shared/context';

export const StoreItemList = () => {
  const { profile, handleChangeCurrency } = useContext(ProfileContext);

  const { storeItems, storeItemInPurchase, handlePurchase } = useStoreItems({ currentCurrency: profile.currency, handleChangeCurrency });

  // TODO add pagination
  // TODO add loader
  const storeItemList = useMemo(() => {
    return storeItems.map((storeItem: IStoreItem) => {
      return (
        <StoreItem
          key={storeItem.id} 
          storeItem={storeItem} 
          isDisabled={storeItemInPurchase === storeItem.id || profile.currency - storeItem.price < 0} 
          onPurchase={handlePurchase} 
        />
      );
    });
  }, [profile.currency, storeItems, storeItemInPurchase, handlePurchase]);

  return (
    <Layout>
      <ContentWrapper>
        {storeItemList}
      </ContentWrapper>
    </Layout>
  );
};