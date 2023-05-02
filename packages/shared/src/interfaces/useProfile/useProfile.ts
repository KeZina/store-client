import { IUser } from 'shared/interfaces/user';

export interface IUseProfile {
    profile: IUser,
    handleChangeCurrency(currency: number): void;
}