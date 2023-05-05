import { IUser } from 'shared/interfaces/user';
import { requestInstance } from 'shared/requests';

export const getProfile = async () => await requestInstance.get<IUser>('/users/profile');
