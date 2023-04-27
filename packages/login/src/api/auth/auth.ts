import { ICredentials } from 'login/interfaces/user';
import { authInstance } from 'shared/requests';

export const postLogin = async (credentials: ICredentials) => await authInstance.post<string>('/user/login', credentials);
