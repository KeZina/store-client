import { useCallback, useEffect, useState } from 'react';
import { IUser } from 'shared/interfaces/user';
import { getProfile } from 'shared/api/user';
import { IUseProfile } from 'shared/interfaces/useProfile';

export const useProfile = (): IUseProfile => {
  const [profile, setProfile] = useState<IUser>({ id: 0, name: '', currency: 0 });

  const handleChangeCurrency = useCallback((currency: number) => {
    setProfile({
      ...profile,
      currency
    });
  }, [profile]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getProfile();

        setProfile(data);
      } catch(e: any) {
        console.log(e.message);
      }
    })();
  }, []);

  return {
    profile,
    handleChangeCurrency
  };
};