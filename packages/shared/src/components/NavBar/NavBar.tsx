import { Outlet } from 'react-router-dom';
import { NavBarContainer, NavBarButton } from 'shared/components/NavBar';

export const NavBar = () => {
  // TODO add Logout logic
  // TODO add User store items to nav

  return (
    <div>
      <NavBarContainer>
        <NavBarButton>
            Logout 
        </NavBarButton>
      </NavBarContainer>

      <Outlet />
    </div>
  );
};