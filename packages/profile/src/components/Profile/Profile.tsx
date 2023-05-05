import { useContext, useMemo } from 'react';
import { Layout } from 'shared/components/Layout';
import { ContentWrapper } from 'shared/components/ContentWrapper';
import { CloseIcon } from 'shared/components/Icon';
import { ProfileContext } from 'shared/context';
import { useUserStoreItems } from 'profile/hooks/useUserStoreItems';
import { IStoreItem } from 'shared/interfaces/storeItem';
import { ProfileTitle, ProfileValue, UserStoreItem, UserStoreItemsContainer } from 'profile/components/Profile';

export const Profile = () => {
  const { profile } = useContext(ProfileContext);
  const { userStoreItems, handleDeleteUserStoreItem } = useUserStoreItems();

  const userStoreItemList = useMemo(() => {
    return userStoreItems.map((storeItem: IStoreItem) => {
      return (
        <UserStoreItem key={storeItem.id}>
          <span>
            {storeItem.title}
          </span>
          <CloseIcon onClick={() => handleDeleteUserStoreItem(storeItem.id)} />
        </UserStoreItem>);
    });
  }, [userStoreItems, handleDeleteUserStoreItem]);

  return (
    <Layout>
      <ContentWrapper>
        <div>
          <ProfileTitle>Name: </ProfileTitle>
          <ProfileValue>{profile.name}</ProfileValue>
        </div>
        <div>
          <ProfileTitle>Currency: </ProfileTitle>
          <ProfileValue>{profile.currency}</ProfileValue>
        </div>
        <UserStoreItemsContainer>
          <ProfileTitle>Store items: </ProfileTitle>
          {userStoreItemList}
        </UserStoreItemsContainer>
      </ContentWrapper>
    </Layout>
  );
};