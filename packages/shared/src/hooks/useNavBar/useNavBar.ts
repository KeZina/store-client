import { useCallback } from 'react';
import { IUseNavBar } from 'shared/interfaces/useNavBar';
import { logout } from 'shared/api/auth';

export const useNavBar = (): IUseNavBar => {
  const handleGoToProfile = useCallback(() => {
    window.location.href = import.meta.env.VITE_PROFILE_MODULE_URL;
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      await logout();

      window.location.href = import.meta.env.VITE_LOGIN_MODULE_URL;
    } catch(e: any) {
      console.log(e.message);
    }
  }, []);

  return {
    handleGoToProfile,
    handleLogout
  };
};