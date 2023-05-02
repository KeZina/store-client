import { Outlet } from 'react-router-dom';
import { NavBarContainer, NavBarButton } from 'shared/components/NavBar';
import { useNavBar } from 'shared/hooks/useNavBar';

export const NavBar = () => {
  const { handleGoToProfile, handleLogout } = useNavBar();  

  return (
    <div>
      <NavBarContainer>
        <NavBarButton>
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