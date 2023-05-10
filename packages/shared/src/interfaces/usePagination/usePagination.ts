export interface IUsePagination {
    page: number;
    limit: number;
    hasNextPage: boolean;
    handleNextPage(): void;
    handlePreviousPage(): void;
    handleHasNextPage(hasNextPage: boolean): void;
}