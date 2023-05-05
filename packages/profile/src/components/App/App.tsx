import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from 'shared/components/NavBar';
import { Profile } from 'profile/components/Profile';
import { useProfile } from 'shared/hooks/useProfile';
import { ProfileContext } from 'shared/context';

export const App = () => {
  const profileHandler = useProfile();

  return (
    <ProfileContext.Provider value={profileHandler}>
      <Routes>
        <Route path='/' element={<NavBar />} >
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='*' element={<Navigate to='profile' />} />
      </Routes>
    </ProfileContext.Provider>
  );
};