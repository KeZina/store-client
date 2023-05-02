import { Context, createContext } from 'react';
import { IUseProfile } from 'shared/interfaces/useProfile';

export const ProfileContext: Context<IUseProfile> = createContext<IUseProfile>({
  profile: {
    id: 0,
    name: '',
    currency: 0
  },
  handleChangeCurrency: (currency: number) => {return;}
});
