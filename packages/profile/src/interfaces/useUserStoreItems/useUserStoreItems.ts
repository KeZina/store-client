import { IStoreItem } from 'shared/interfaces/storeItem';

export interface IUseUserStoreItems {
    userStoreItems: IStoreItem[];
    handleDeleteUserStoreItem(storeItemId: number): void;
}