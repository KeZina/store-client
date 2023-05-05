import { IStoreItem } from 'shared/interfaces/storeItem';
import { requestInstance } from 'shared/requests';

export const getUserStoreItems = async () => await requestInstance.get<IStoreItem[]>('/store/users/items');
export const deleteUserStoreItem = async (storeItemId: number) => await requestInstance.delete('/store/users/items', { params: { storeItemId } }); 