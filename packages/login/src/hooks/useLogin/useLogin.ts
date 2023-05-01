import { useCallback } from 'react';
import { postLogin } from 'login/api/auth';
import { ICredentials } from 'shared/interfaces/user';

export const useLogin = () => {
  const handleSubmit = useCallback(async (credentials: ICredentials) => {
    try {
      await postLogin(credentials);

      window.location.href = `${import.meta.env.VITE_STORE_MODULE_URL}/store`;
    } catch(e: any) {
      console.log(e);
    }
  }, []);

  return {
    handleSubmit
  };
};