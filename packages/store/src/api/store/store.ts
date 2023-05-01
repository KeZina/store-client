import { requestInstance } from 'shared/requests';
import { IStoreItem } from 'store/interfaces/storeItem';

export const getAvailableStoreItems = async () => await requestInstance.get<IStoreItem[]>('/store/available-items');