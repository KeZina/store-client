import styled from 'styled-components';

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 12px;
`;

export const Button = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    background-color: initial;
    border: 2px solid rgba(0, 0, 0, 0.6);
    opacity: 0.8;
    cursor: pointer;
    border-radius: 2px;
    transition-duration: 0.3s;
`;

export const ApplyButton = styled(Button)`
  border: none;
  background-color: rgba(0, 255, 50, 0.6);

  &:hover {
    background-color: rgba(0, 255, 50, 1);
    opacity: 0.9;
  }
`;