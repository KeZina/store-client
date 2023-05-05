import { ICredentials } from 'shared/interfaces/user';
import { requestInstance } from 'shared/requests';

export const login = async (credentials: ICredentials) => await requestInstance.post('/users/login', credentials);
export const logout = async () => await requestInstance.get('/users/logout');