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
    transition-duration: 0.2s;
`;

export const ApplyButton = styled(Button)`
  border: none;
  outline: ${(props) => props.disabled ? '2px solid rgba(0, 0, 0, 0.6)' : 'none'};
  background-color: ${(props) => props.disabled ? 'initial !important' : 'rgba(0, 255, 50, 0.6)'};
  color: ${(props) => props.disabled ? 'rgba(0, 0, 0, 0.6)' : 'initial'};
  cursor: ${(props) => props.disabled ? 'default' : 'pointer'};
  transition-duration: ${(props) => props.disabled ? 'initial' : '0.2s'};

  &:hover {
    background-color: rgba(0, 255, 50, 1);
    opacity: 0.9;
  }
`;