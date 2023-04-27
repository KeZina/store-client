import styled from 'styled-components';

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;

export const Button = styled.button`
    padding: 8px 24px;
    font-size: 16px;
    background-color: initial;
    border: 2px solid rgba(0, 0, 0, 0.6);
    opacity: 0.8;
    cursor: pointer;
    border-radius: 2px;
`;

export const ApplyButton = styled(Button)`
  background-color: rgba(0, 255, 0, 0.4);
  &:hover {
    background-color: rgba(0, 255, 0, 0.6);
  }
`;