import { useContext, useMemo } from 'react';
import { Layout } from 'shared/components/Layout';
import { StoreItem } from 'store/components/StoreItem';
import { useStoreItems } from 'store/hooks/useStoreItems';
import { IStoreItem } from 'shared/interfaces/storeItem';
import { ProfileContext } from 'shared/context';
import { StoreItemListContainer } from 'store/components/StoreItemList';
import { Button, ButtonsContainer } from 'shared/components/Button';
import { ContentWrapper } from 'shared/components/ContentWrapper';

export const StoreItemList = () => {
  const { profile, handleChangeCurrency } = useContext(ProfileContext);

  const { 
    storeItems,
    storeItemInPurchase,
    page,
    hasNextPage,
    handlePurchase,
    handleNextPage,
    handlePreviousPage
  } = useStoreItems({ currentCurrency: profile.currency, handleChangeCurrency });

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
        <StoreItemListContainer>
          {storeItemList}
        </StoreItemListContainer>
        <ButtonsContainer>
          <Button disabled={page == 1} onClick={handlePreviousPage}>Previous</Button>
          <Button disabled={!hasNextPage} onClick={handleNextPage}>Next</Button>
        </ButtonsContainer>
      </ContentWrapper>
    </Layout>
  );
};