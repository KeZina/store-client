import { StoreItemContainer, StoreItemDetails, StoreItemTitle } from 'store/components/StoreItem';
import { ApplyButton, ButtonsContainer } from 'shared/components/Button';

export const StoreItem = () => {
  // TODO connect to api

  return (
    <StoreItemContainer>
      <StoreItemDetails>
        <StoreItemTitle>
            Item
        </StoreItemTitle>
        <span>
            Price: <b>12</b>
        </span>
      </StoreItemDetails>
      <ButtonsContainer>
        <ApplyButton>
            Buy
        </ApplyButton>
      </ButtonsContainer>
    </StoreItemContainer>
  );
};