import { requestInstance } from 'shared/requests';
import { IStoreItem } from 'shared/interfaces/storeItem';
import { IPaginationParams } from 'shared/interfaces/paginationParams';

export const getAvailableStoreItems = async (params: IPaginationParams) => await requestInstance.get<IStoreItem[]>('/store/available-items', { params });
export const purhcaseStoreItem = async (item: IStoreItem) => await requestInstance.post('/store/purchase', item);