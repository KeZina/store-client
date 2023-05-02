import { FC } from 'react';
import { StoreItemContainer, StoreItemDetails, StoreItemTitle } from 'store/components/StoreItem';
import { ApplyButton, ButtonsContainer } from 'shared/components/Button';
import { IStoreItem } from 'store/interfaces/storeItem';

interface IStoreItemProps {
    storeItem: IStoreItem;
    isDisabled: boolean;
    onPurchase(storeItem: IStoreItem): void
}

export const StoreItem: FC<IStoreItemProps> = ({ storeItem, isDisabled, onPurchase }) => {
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
        <ApplyButton disabled={isDisabled} onClick={() => onPurchase(storeItem)}>
            Buy
        </ApplyButton>
      </ButtonsContainer>
    </StoreItemContainer>
  );
};