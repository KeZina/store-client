import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from 'shared/components/NavBar';
import { StoreItemList } from 'store/components/StoreItemList';
import { useProfile } from 'shared/hooks/useProfile';
import { ProfileContext } from 'shared/context';

export const App = () => {
  const profileHandler = useProfile();

  return (
    <ProfileContext.Provider value={profileHandler}>
      <Routes>
        <Route path='/' element={<NavBar />} >
          <Route path='store' element={<StoreItemList />} />
        </Route>
        <Route path='*' element={<Navigate to='store' />} />
      </Routes>
    </ProfileContext.Provider>
  );
};