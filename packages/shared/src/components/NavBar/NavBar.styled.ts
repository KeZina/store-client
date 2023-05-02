import styled from 'styled-components';

export const NavBarContainer = styled.nav`
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 12px;
    box-sizing: border-box;
    padding: 0 40px;
    width: 100vw;
    height: 5vh;
    background-color: rgba(0, 0, 255, 0.5);
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.6);
`;

export const NavBarButton = styled.button`
    border: none;
    font-size: 16px;
    padding: 6px 12px;
    background-color: initial;
    color: white;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;