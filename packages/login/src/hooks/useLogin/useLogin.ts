import { useCallback } from 'react';
import { login } from 'shared/api/auth';
import { ICredentials } from 'shared/interfaces/user';

export const useLogin = () => {
  const handleSubmit = useCallback(async (credentials: ICredentials) => {
    try {
      await login(credentials);

      window.location.href = import.meta.env.VITE_STORE_MODULE_URL;
    } catch(e: any) {
      console.log(e.message);
    }
  }, []);

  return {
    handleSubmit
  };
};