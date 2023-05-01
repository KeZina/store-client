import { ICredentials } from 'shared/interfaces/user';
import { requestInstance } from 'shared/requests';

export const postLogin = async (credentials: ICredentials) => await requestInstance.post('/user/login', credentials);
