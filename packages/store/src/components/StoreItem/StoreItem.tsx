import { FC } from 'react';
import { StoreItemContainer, StoreItemDetails, StoreItemTitle } from 'store/components/StoreItem';
import { ApplyButton, ButtonsContainer } from 'shared/components/Button';
import { IStoreItem } from 'store/interfaces/storeItem';

interface IStoreItemProps {
    storeItem: IStoreItem;
    onPurchase(storeItemId: number): void
}

export const StoreItem: FC<IStoreItemProps> = ({ storeItem, onPurchase }) => {
  return (
    <StoreItemContainer>
      <StoreItemDetails>
        <StoreItemTitle>
          {storeItem.title}
        </StoreItemTitle>
        <span>
            Price: <b>{storeItem.price}</b>
        </span>
      </StoreItemDetails>
      <ButtonsContainer>
        <ApplyButton onClick={() => onPurchase(storeItem.id)}>
            Buy
        </ApplyButton>
      </ButtonsContainer>
    </StoreItemContainer>
  );
};