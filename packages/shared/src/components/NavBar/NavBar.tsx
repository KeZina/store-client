import { Outlet } from 'react-router-dom';
import { NavBarContainer, NavBarButton } from 'shared/components/NavBar';
import { useNavBar } from 'shared/hooks/useNavBar';

export const NavBar = () => {
  const { handleGoToStore, handleGoToProfile, handleLogout } = useNavBar();  

  return (
    <div>
      <NavBarContainer>
        <NavBarButton onClick={handleGoToStore}>
          Store
        </NavBarButton>
        <NavBarButton onClick={handleGoToProfile}>
          Profile
        </NavBarButton>
        <NavBarButton onClick={handleLogout}>
          Logout 
        </NavBarButton>
      </NavBarContainer>

      <Outlet />
    </div>
  );
};