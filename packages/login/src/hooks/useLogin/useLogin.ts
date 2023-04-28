import { useCallback } from 'react';
import { postLogin } from 'login/api/auth';
import { ICredentials } from 'login/interfaces/user';

export const useLogin = () => {
  const handleSubmit = useCallback(async (credentials: ICredentials) => {
    try {
      const {data} = await postLogin(credentials);

      localStorage.setItem('token', data);
      window.location.href = import.meta.env.VITE_STORE_MODULE_URL;
    } catch(e: any) {
      console.log(e.response.data);
    }
  }, []);

  return {
    handleSubmit
  };
};