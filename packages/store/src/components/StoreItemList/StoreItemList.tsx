import {Layout} from 'shared/components/Layout';
import {ContentWrapper} from 'shared/components/ContentWrapper';
import {StoreItem} from 'store/components/StoreItem';

export const StoreItemList = () => {
  return (
    <Layout>
      <ContentWrapper>
        <StoreItem />
      </ContentWrapper>
    </Layout>
  );
};