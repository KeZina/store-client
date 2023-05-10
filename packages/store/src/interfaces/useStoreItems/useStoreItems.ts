import { IStoreItem } from 'shared/interfaces/storeItem';

export interface IUseStoreItems {
    storeItems: IStoreItem[];
    storeItemInPurchase: number | null;
    page: number;
    hasNextPage: boolean;
    handlePurchase(storeItem: IStoreItem): void;
    handleNextPage(): void;
    handlePreviousPage(): void;
    handleHasNextPage(hasNextPage: boolean): void;
}