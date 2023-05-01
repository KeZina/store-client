import { IStoreItem } from 'store/interfaces/storeItem';

export interface IUseStoreItems {
    storeItems: IStoreItem[];
    handlePurchase(storeItemId: number): void;
}