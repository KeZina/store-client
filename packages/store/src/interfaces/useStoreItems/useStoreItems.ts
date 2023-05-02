import { IStoreItem } from 'store/interfaces/storeItem';

export interface IUseStoreItems {
    storeItems: IStoreItem[];
    storeItemInPurchase: number | null;
    handlePurchase(storeItem: IStoreItem): void;
}